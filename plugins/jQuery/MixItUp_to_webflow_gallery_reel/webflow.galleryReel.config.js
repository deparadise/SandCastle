// Webflow_gallery_Reel_config_v0.0.2
// Test Type
// Using MixItUp.js jQuery library plugin

// On document ready:
$(document).ready(function() {
	$(async function() {
		let galleryReel = await $('#category-artwork-gallery');
		let testFilters = await $('.test-filter');

		// clean up .test-filters
		testFilters.remove();

		console.log('>> GALLERY DOM:', galleryReel);
		// Collect GR_Id #category-<catKey>
		let galleryId = galleryReel.attr('id');
		// and split destructure for second key
		let [type, categoryKey] = galleryId.split('-');
		// find .gallery-filter-menu node
		let filterMenu = galleryReel.find('.gallery-filter-menu');
		let galleryItems = galleryReel.find('.sort-collection').children('.mix');
		
		// define fillter_collection
		let galleryCollectedSubCategories = ['all'];

		console.log(
			'>> GALLERY CONFIG PRELIM',
			'\n - galleryId:', galleryId,
			'\n - type:', type,
			'\n - categoryKey:', categoryKey,
			'\n - filterMenu:', filterMenu,
			'\n - galleryItems:', galleryItems,
			''
		);

		// >>> Collect GR_thumbnail_item by .mix and Loop
		let mixedUpGalleryItems = await galleryItems.each(async(i, item) => {
			item = $(item);
			console.log('>> GALLERY ITEM:', item);
			
			// Find <sub-cat-key> = .item-sub-category.text()
			let subCategoryKey = await item.find('.item-sub-category').text();
			// Create compound class via <catKey>-<sub-cat-key>
			let compundClassAssignment = `${categoryKey}-${subCategoryKey}`;
			// Add compound key as class to item
			item.addClass(compundClassAssignment);

			// check collected gallery-filters and add
			if (!galleryCollectedSubCategories.includes(subCategoryKey)) {
				galleryCollectedSubCategories.push(subCategoryKey);
			}
		});
		// <<< END 2ND LOOP

		// >>> Loop on fillter_collection and generate filter menu
		let mixedUpGallerFilterMenu = await galleryCollectedSubCategories.map((filterClass) => {
			// Define attr key push
			// Create compound class via <catKey>-<sub-cat-key>
			let compundClassAssignment = `${categoryKey}-${filterClass}`;
			let attributePush = (filterClass === "all")
				? filterClass
				: `.${compundClassAssignment}`;
			// append filter menu link to .galler-filter-menu
			filterMenu.append(
				`<a href="#" class="filter w-button" data-filter="${attributePush}">${filterClass}</a>`
			);
		});
		// <<< END 3RD LOOP

		// Instantiate MixItUp ON GR_Id
		return galleryReel.mixItUp();

		// End Of CONFIG SETUP >>
	});
});
