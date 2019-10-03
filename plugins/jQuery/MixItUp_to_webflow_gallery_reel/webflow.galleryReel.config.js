// Webflow_gallery_Reel_config_v0.0.2
// Test Type
// Using MixItUp.js jQuery library plugin

// On document ready:
$(document).ready(function() {
	$(async function() {
		let galleryReels = await $('.gallery-reel');
		let testFilters = await $('.test-filter');

		// clean up .test-filters
		testFilters.remove();

		// >>> Find all .gallery-reel and Loop
		let mixedUpGalleryReels = await galleryReels.each((i, gallery) => {
			console.log('>> GALLERY DOM:', gallery);
			
			gallery = $(gallery);
			// Collect GR_Id #category-<catKey>
			let galleryId = gallery.attr('id');
			// and split destructure for second key
			let [type, categoryKey] = galleryId.split('-');
			// find .gallery-filter-menu node
			let filterMenu = gallery.find('.gallery-filter-menu');
			let galleryItems = gallery.find('.sort-collection').children('.mix');
			
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
				// Find <sub-cat-key> = .item-sub-category.text()
				// Create compound class via <catKey>-<sub-cat-key>
				// Add compound key as class to item

				// check collected gallery-filters and add
			// <<< END 2ND LOOP

			// >>> Loop on fillter_collection
				// Define attr key push
				// append filter menu link to .galler-filter-menu
			// <<< END 3RD LOOP

			// Instantiate MixItUp ON GR_Id
		});
		// <<< END 1ST LOOP

		// End Of CONFIG SETUP >>

		// // Find gallery targets
		// let filterMenu = await $(".gallery-filter-menu");
		// let sortCollection = await $(".sort-collection");
		// let collectedSubCategoryFilters = ["all"];

		// // @ each
		// let collectedItems = await sortCollection
		// 	.children(".mix")
		// 	.each((i, item) => {
		// 		// Find item-sub-category identifiers
		// 		item = $(item);
		// 		let classAssignment = item.find(".item-sub-category").text();
		// 		console.log(">> CLASS ASS:", classAssignment);

		// 		// and assign new sub cat class via the identified item-class text
		// 		item.addClass(classAssignment);

		// 		if (!collectedSubCategoryFilters.includes(classAssignment)) {
		// 			// push to collected sub cat to filter list for later
		// 			collectedSubCategoryFilters.push(classAssignment);
		// 		}
		// 	});
		// console.log(">> FINISHED LOOP ON COLLECTED ITEMS:", collectedItems);

		// // Generate filter menu
		// console.log(">> GENERATE FILTER MENU ", collectedSubCategoryFilters);
		// let filterMenuItems = await collectedSubCategoryFilters.map(
		// 	subCatFilter => {
		// 		console.log("> MAKE A FILTER BTN FOR:", subCatFilter);
		// 		let attributePush =
		// 			subCatFilter === "all" ? subCatFilter : `.${subCatFilter}`;
		// 		filterMenu.append(
		// 			`<a href="#" class="filter w-button" data-filter="${attributePush}">${subCatFilter}</a>`
		// 		);
		// 	}
		// );

		// // Clean Up
		// $(".test-filter").remove();

		// // Instantiate MixItUp:
		// sortCollection.mixItUp();
	});
});
