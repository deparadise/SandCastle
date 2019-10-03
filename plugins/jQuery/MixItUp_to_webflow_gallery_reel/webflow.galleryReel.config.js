// Webflow_gallery_Reel_config_v0.0.1
// Prototype
// Using MixItUp.js jQuery library plugin

// On document ready:
$(document).ready(function() {
	$(async function() {

		

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

		// Clean Up
		$(".test-filter").remove();

		// Instantiate MixItUp:
		sortCollection.mixItUp();
	});
});
