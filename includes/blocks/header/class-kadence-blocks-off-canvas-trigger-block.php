<?php
/**
 * Class to Build the off canvas trigger.
 *
 * @package Kadence Blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class to Build the Off Canvas Trigger.
 *
 * @category class
 */
class Kadence_Blocks_Off_Canvas_Trigger_Block extends Kadence_Blocks_Abstract_Block {

	/**
	 * Instance of this class
	 *
	 * @var null
	 */
	private static $instance = null;


	/**
	 * Block name within this namespace.
	 *
	 * @var string
	 */
	protected $block_name = 'off-canvas-trigger';

	/**
	 * Block determines in scripts need to be loaded for block.
	 *
	 * @var string
	 */
	protected $has_script = true;
	/**
	 * Block determines in scripts need to be loaded for block.
	 *
	 * @var string
	 */
	protected $has_style = false;

	/**
	 * Instance Control
	 */
	public static function get_instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * On init startup register the block.
	 */
	public function on_init() {
		register_block_type(
			KADENCE_BLOCKS_PATH . 'dist/blocks/header/children/off-canvas-trigger/block.json',
			array(
				'render_callback' => array( $this, 'render_css' ),
			)
		);
	}


	/**
	 * Builds CSS for block.
	 *
	 * @param array              $attributes      the blocks attributes.
	 * @param Kadence_Blocks_CSS $css             the css class for blocks.
	 * @param string             $unique_id       the blocks attr ID.
	 * @param string             $unique_style_id the blocks alternate ID for queries.
	 */
	public function build_css( $attributes, $css, $unique_id, $unique_style_id ) {
		$merged_attributes = $this->get_attributes_with_defaults( $unique_id, $attributes, 'kadence/' . $this->block_name );

		$css->set_style_id( 'kb-' . $this->block_name . $unique_style_id );

		$sizes = array( 'Desktop', 'Tablet', 'Mobile' );

		foreach ( $sizes as $size ) {
			$this->sized_dynamic_styles( $css, $merged_attributes, $unique_id, $size );
		}
		$css->set_media_state( 'desktop' );

		// For the close icon container styles, they need to get applied to the hover state too, due to resets on hover styles in the css
		//container
		$css->set_selector( '.wp-block-kadence-off-canvas-trigger' . $unique_id . ', .wp-block-kadence-off-canvas-trigger' . $unique_id . ':hover' );
		$css->render_measure_output( $merged_attributes, 'padding', 'padding', array(
			'desktop_key' => 'padding',
			'tablet_key'  => 'paddingTablet',
			'mobile_key'  => 'paddingMobile',
		) );
		$css->render_measure_output( $merged_attributes, 'margin', 'margin', array(
			'desktop_key' => 'margin',
			'tablet_key'  => 'marginTablet',
			'mobile_key'  => 'marginMobile',
		) );
		$css->render_measure_output( $merged_attributes, 'borderRadius', 'border-radius', array(
			'desktop_key' => 'borderRadius',
			'tablet_key'  => 'borderRadiusTablet',
			'mobile_key'  => 'borderRadiusMobile',
		) );
		$css->render_border_styles( $merged_attributes, 'border' );

		//container hover
		$css->set_selector( '.wp-block-kadence-off-canvas-trigger' . $unique_id . ':hover' );
		$css->render_border_styles( $merged_attributes, 'borderHover' );

		//icon
		$css->set_selector( '.wp-block-kadence-off-canvas-trigger' . $unique_id . ' svg' );

		return $css->css_output();
	}


	/**
	 * Build up the dynamic styles for a size.
	 *
	 * @param string $size The size.
	 * @return array
	 */
	public function sized_dynamic_styles( $css, $attributes, $unique_id, $size = 'Desktop' ) {
		$sized_attributes = $css->get_sized_attributes_auto( $attributes, $size, false );
		$sized_attributes_inherit = $css->get_sized_attributes_auto( $attributes, $size );

		$css->set_media_state( strtolower( $size ) );

		// For the close icon container styles, they need to get applied to the hover state too, due to resets on hover styles in the css
		//container
		$css->set_selector( '.wp-block-kadence-off-canvas-trigger' . $unique_id. ', .wp-block-kadence-off-canvas-trigger' . $unique_id . ':hover' );
		if ( ! empty( $sized_attributes['iconBackgroundColor'] ) ) {
			$css->add_property( 'background-color', $css->render_color( $sized_attributes['iconBackgroundColor'] ) );
		}

		//container hover
		$css->set_selector( '.wp-block-kadence-off-canvas-trigger' . $unique_id . ':hover' );
		if ( ! empty( $sized_attributes['iconBackgroundColorHover'] ) ) {
			$css->add_property( 'background-color', $css->render_color( $sized_attributes['iconBackgroundColorHover'] ) );
		}

		//icon
		$css->set_selector( '.wp-block-kadence-off-canvas-trigger' . $unique_id . ' svg' );
		if ( ! empty( $sized_attributes['iconColor'] ) ) {
			$css->add_property( 'color', $css->render_color( $sized_attributes['iconColor'] ) );
		}
		if ( ! empty( $sized_attributes['iconSize'] ) ) {
			$css->add_property( 'width', $sized_attributes['iconSize'] . 'px' );
			$css->add_property( 'height', $sized_attributes['iconSize'] . 'px' );
		}

		//icon hover
		$css->set_selector( '.wp-block-kadence-off-canvas-trigger' . $unique_id . ':hover svg' );
		if ( ! empty( $sized_attributes['iconColorHover'] ) ) {
			$css->add_property( 'color', $css->render_color( $sized_attributes['iconColorHover'] ) );
		}
	}

	/**
	 * The innerblocks are stored on the $content variable. We just wrap with our data, if needed
	 *
	 * @param array $attributes The block attributes.
	 *
	 * @return string Returns the block output.
	 */
	public function build_html( $attributes, $unique_id, $content, $block_instance ) {
		$html = '';

		$classes = array(
			'wp-block-kadence-off-canvas-trigger',
			'wp-block-kadence-off-canvas-trigger' . $unique_id,
		);

		if ( ! empty( $attributes['icon'] ) ) {
			$content = Kadence_Blocks_Svg_Render::render( $attributes['icon'], 'currentColor', false, '', false );
		}

		$wrapper_args = array(
			'class'         => implode( ' ', $classes ),
			'aria-label'    => __( 'Toggle Off Canvas', 'kadence-blocks' ),
			'aria-expanded' => 'false',
			'id'            => 'kadence-off-canvas-trigger' . $unique_id,
		);
		$wrapper_attributes = get_block_wrapper_attributes( $wrapper_args );

		$html .= sprintf( '<button %1$s>%2$s</button>', $wrapper_attributes, $content );

		return $html;
	}

	/**
	 * Registers scripts and styles.
	 */
	public function register_scripts() {
		parent::register_scripts();
		// If in the backend, bail out.
		if ( is_admin() ) {
			return;
		}
		if ( apply_filters( 'kadence_blocks_check_if_rest', false ) && kadence_blocks_is_rest() ) {
			return;
		}
		wp_register_script( 'kadence-blocks-' . $this->block_name, KADENCE_BLOCKS_URL . 'includes/assets/js/kb-off-canvas-trigger.min.js', array(), KADENCE_BLOCKS_VERSION, true );
	}
}

Kadence_Blocks_Off_Canvas_Trigger_Block::get_instance();
