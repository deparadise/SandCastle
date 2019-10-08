// Webflow_gallery_Reel_config_v0.0.2
// Test Type
// Using MixItUp.js jQuery library plugin

// On document ready:
$(document).ready(function() {
	$(async function() {
		let galleryReel = await $('#category-artwork-gallery');
		let testFilters = await $('.test-filter');

		testFilters.remove();

		let galleryId = galleryReel.attr('id');
		let [type, categoryKey] = galleryId.split('-');
		let filterMenu = galleryReel.find('.gallery-filter-menu');
		let galleryItems = galleryReel.find('.sort-collection').children('.mix');
		let galleryCollectedSubCategories = ['all'];

		let mixedUpGalleryItems = await galleryItems.each(async(i, item) => {
			item = $(item);

			let subCategoryKey = await item.find('.item-sub-category').text();
			let compundClassAssignment = `${categoryKey}-${subCategoryKey}`;
			item.addClass(compundClassAssignment);

			if (!galleryCollectedSubCategories.includes(subCategoryKey)) {
				galleryCollectedSubCategories.push(subCategoryKey);
			}
		});

		let mixedUpGallerFilterMenu = await galleryCollectedSubCategories.map((filterClass) => {
			let compundClassAssignment = `${categoryKey}-${filterClass}`;
			let attributePush = (filterClass === "all")
				? filterClass
				: `.${compundClassAssignment}`;
			filterMenu.append(
				`<a href="#" class="filter w-button" data-filter="${attributePush}">${filterClass}</a>`
			);
		});
		return galleryReel.mixItUp();
	});
});
