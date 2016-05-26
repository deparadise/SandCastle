<?php
/* Declare New Post Type */
	/**/

function create_post_type() {
	$demo_label_list = array(
		//'asdf' => 'asdf', // TEMPLATE
		
		'name' => 'Design Demos_a',
		// ^ general name for the post type, usually plural. The same and overridden by $post_type_object->label. Default is Posts/Pages
		'singular_name' => 'Design Demo_b',
		// ^ name for one object of this post type. Default is Post/Page
		'add_new' => 'Add New Demo_c',
		// ^ the add new text. The default is "Add New" for both hierarchical and non-hierarchical post types. When internationalizing this string, please use a gettext context matching your post type. Example: _x('Add New', 'product');
		'add_new_item' => 'Add New Demo_d',
		// ^ Default is Add New Post/Add New Page.
		'edit_item' => 'edit Demo_e',
		// ^ Default is Edit Post/Edit Page.
		'new_item' => 'new Demo_f',
		// ^ Default is New Post/New Page.
		'view_item' => 'View Demo_g',
		// ^ Default is View Post/View Page.
		'search_items' => 'Search Demos_h',
		// ^ Default is Search Posts/Search Pages.
		'not_found' => 'No Demos found_i',
		// ^ Default is No posts found/No pages found.
		'not_found_in_trash' => 'No Demos found in trash_j',
		// ^ Default is No posts found in Trash/No pages found in Trash.
		'parent_item_colon' => 'Parent Demo:_k',
		// ^ This string isn't used on non-hierarchical types. In hierarchical ones the default is 'Parent Page:'.
		'all_items' => 'All Demos_l',
		// ^ String for the submenu. Default is All Posts/All Pages.
		'archives' => 'Demo Archives_m',
		// ^ String for use with archives in nav menus. Default is Post Archives/Page Archives.
		'insert_into_item' => 'Insert into demos_n',
		// ^ String for the media frame button. Default is Insert into post/Insert into page.
		'uploaded_to_this_item' => 'Uploaded to this Demo_o',
		// ^ String for the media frame filter. Default is Uploaded to this post/Uploaded to this page.
		'featured_image' => 'Demos\' featured Image_p',
		// ^ Default is Featured Image.
		'set_featured_image' => 'Set Demo\'s featured image_q',
		// ^ Default is Set featured image.
		'remove_featured_image' => 'Remove Demo\'s featured image_r',
		// ^ Default is Remove featured image.
		'use_featured_image' => 'Use as featured image for Demo_s',
		// ^ Default is Use as featured image.
		'menu_name' => 'Menu name for Demo_t',
		// ^ Default is the same as `name`.
		'filter_items_list' => 'filter label Demos_u',
		// ^ String for the table views hidden heading.
		'items_list_navigation' => 'pagination label Demos_v',
		// ^ String for the table pagination hidden heading.
		'items_list' => 'table hidden Demos_w',
		// ^ String for the table hidden heading.
		'name_admin_bar' => 'Admin Bar Demo_x',
		// ^ String for use in New in Admin menu bar. Default is the same as `singular_name`.
	);

	$demo_supported_fields = array(
		'title',
		'editor',					// (content)
		//'author',
		'thumbnail',				// (featured image, current theme must also support post-thumbnails)
		//'excerpt',
		//'trackbacks',
		'custom-fields',
		//'comments',				// (also will see comment count balloon on edit screen)
		//'revisions',				// (will store revisions)
		//'page-attributes',		// (menu order, hierarchical must be true to show Parent option)
		//'post-formats',			// add post formats, see Post Formats
	);

	$my_post_type_args = array(
		'label' => 'Demos', // Default is 'labels' > 'name'
		'labels' => $demo_label_list,
		'description' => 'This is a description of what the demos are relating to this site.',
		'public' => true,
		'show_ui' => true,
		'show_in_menu' => true,
		'show_in_admin_bar' => true, // Top Menu Display _x
		'menu_position' => 1, // Admin menu order
		'menu_icon' => 'dashicons-editor-video',//a url or string from --> https://developer.wordpress.org/resource/dashicons/#filter
		//'hierarchical' => true,
		'supports' => $demo_supported_fields, // array('of supported fields'),
		//'taxonomies'
		'has_archive' => true
	);

	register_post_type('design_demo', $my_post_type_args);
}
add_action( 'init', 'create_post_type');



// Remove end tag when included in theme
?>