import {
	KadenceBlocksCSS,
	getFontSizeOptionOutput,
	getPreviewSize,
	getSpacingOptionOutput,
	KadenceColorOutput,
} from '@kadence/helpers';
import { Getstyles } from '../';

export default function BackendStyles(props) {
	const { attributes, isSelected, previewDevice, metaAttributes } = props;

	const { uniqueID } = attributes;

	const {
		padding,
		tabletPadding,
		mobilePadding,
		paddingUnit,
		margin,
		tabletMargin,
		mobileMargin,
		marginUnit,
		border,
		tabletBorder,
		mobileBorder,
		borderUnit,
		hoverBorder,
		tabletHoverBorder,
		mobileHoverBorder,
		hoverBorderUnit,
		borderRadius,
		tabletBorderRadius,
		mobileBorderRadius,
		borderRadiusUnit,
		borderHoverRadius,
		tabletBorderHoverRadius,
		mobileBorderHoverRadius,
		borderHoverRadiusUnit,
		flex,
		className,
		anchor,
		background,
		backgroundHover,
		typography,
		textColor,
		linkColor,
		linkHoverColor,
	} = metaAttributes;

	const previewMarginTop = getPreviewSize(
		previewDevice,
		undefined !== margin ? margin[0] : '',
		undefined !== tabletMargin ? tabletMargin[0] : '',
		undefined !== mobileMargin ? mobileMargin[0] : ''
	);
	const previewMarginRight = getPreviewSize(
		previewDevice,
		undefined !== margin ? margin[1] : '',
		undefined !== tabletMargin ? tabletMargin[1] : '',
		undefined !== mobileMargin ? mobileMargin[1] : ''
	);
	const previewMarginBottom = getPreviewSize(
		previewDevice,
		undefined !== margin ? margin[2] : '',
		undefined !== tabletMargin ? tabletMargin[2] : '',
		undefined !== mobileMargin ? mobileMargin[2] : ''
	);
	const previewMarginLeft = getPreviewSize(
		previewDevice,
		undefined !== margin ? margin[3] : '',
		undefined !== tabletMargin ? tabletMargin[3] : '',
		undefined !== mobileMargin ? mobileMargin[3] : ''
	);

	const previewPaddingTop = getPreviewSize(
		previewDevice,
		undefined !== padding ? padding[0] : '',
		undefined !== tabletPadding ? tabletPadding[0] : '',
		undefined !== mobilePadding ? mobilePadding[0] : ''
	);
	const previewPaddingRight = getPreviewSize(
		previewDevice,
		undefined !== padding ? padding[1] : '',
		undefined !== tabletPadding ? tabletPadding[1] : '',
		undefined !== mobilePadding ? mobilePadding[1] : ''
	);
	const previewPaddingBottom = getPreviewSize(
		previewDevice,
		undefined !== padding ? padding[2] : '',
		undefined !== tabletPadding ? tabletPadding[2] : '',
		undefined !== mobilePadding ? mobilePadding[2] : ''
	);
	const previewPaddingLeft = getPreviewSize(
		previewDevice,
		undefined !== padding ? padding[3] : '',
		undefined !== tabletPadding ? tabletPadding[3] : '',
		undefined !== mobilePadding ? mobilePadding[3] : ''
	);

	const previewBorderTop = getPreviewSize(
		previewDevice,
		undefined !== border?.top ? getSpacingOptionOutput(border.top[2], border.unit) : '',
		undefined !== tabletBorder?.top ? getSpacingOptionOutput(tabletBorder.top[2], tabletBorder.unit) : '',
		undefined !== mobileBorder?.top ? getSpacingOptionOutput(mobileBorder.top[2], mobileBorder.unit) : ''
	);
	const previewBorderRight = getPreviewSize(
		previewDevice,
		undefined !== border?.right ? getSpacingOptionOutput(border.right[2], border.unit) : '',
		undefined !== tabletBorder?.right ? getSpacingOptionOutput(tabletBorder.right[2], tabletBorder.unit) : '',
		undefined !== mobileBorder?.right ? getSpacingOptionOutput(mobileBorder.right[2], mobileBorder.unit) : ''
	);
	const previewBorderBottom = getPreviewSize(
		previewDevice,
		undefined !== border?.bottom ? getSpacingOptionOutput(border.bottom[2], border.unit) : '',
		undefined !== tabletBorder?.bottom ? getSpacingOptionOutput(tabletBorder.bottom[2], tabletBorder.unit) : '',
		undefined !== mobileBorder?.bottom ? getSpacingOptionOutput(mobileBorder.bottom[2], mobileBorder.unit) : ''
	);
	const previewBorderLeft = getPreviewSize(
		previewDevice,
		undefined !== border?.left ? getSpacingOptionOutput(border.left[2], border.unit) : '',
		undefined !== tabletBorder?.left ? getSpacingOptionOutput(tabletBorder.left[2], tabletBorder.unit) : '',
		undefined !== mobileBorder?.left ? getSpacingOptionOutput(mobileBorder.left[2], mobileBorder.unit) : ''
	);

	const previewBorderColorTop = getPreviewSize(
		previewDevice,
		undefined !== border?.top ? KadenceColorOutput(border.top[0]) : '',
		undefined !== tabletBorder?.top ? KadenceColorOutput(tabletBorder.top[0]) : '',
		undefined !== mobileBorder?.top ? KadenceColorOutput(tabletBorder.top[0]) : ''
	);

	const previewBorderColorRight = getPreviewSize(
		previewDevice,
		undefined !== border?.right ? KadenceColorOutput(border.right[0]) : '',
		undefined !== tabletBorder?.right ? KadenceColorOutput(tabletBorder.right[0]) : '',
		undefined !== mobileBorder?.right ? KadenceColorOutput(tabletBorder.right[0]) : ''
	);

	const previewBorderColorBottom = getPreviewSize(
		previewDevice,
		undefined !== border?.bottom ? KadenceColorOutput(border.bottom[0]) : '',
		undefined !== tabletBorder?.bottom ? KadenceColorOutput(tabletBorder.bottom[0]) : '',
		undefined !== mobileBorder?.bottom ? KadenceColorOutput(tabletBorder.bottom[0]) : ''
	);

	const previewBorderColorLeft = getPreviewSize(
		previewDevice,
		undefined !== border?.left ? KadenceColorOutput(border.left[0]) : '',
		undefined !== tabletBorder?.left ? KadenceColorOutput(tabletBorder.left[0]) : '',
		undefined !== mobileBorder?.left ? KadenceColorOutput(tabletBorder.left[0]) : ''
	);

	const previewBorderStyleTop = getPreviewSize(
		previewDevice,
		undefined !== border?.top ? border.top[1] : '',
		undefined !== tabletBorder?.top ? tabletBorder.top[1] : '',
		undefined !== mobileBorder?.top ? mobileBorder.top[1] : ''
	);

	const previewBorderStyleRight = getPreviewSize(
		previewDevice,
		undefined !== border?.right ? border.right[1] : '',
		undefined !== tabletBorder?.right ? tabletBorder.right[1] : '',
		undefined !== mobileBorder?.right ? mobileBorder.right[1] : ''
	);

	const previewBorderStyleBottom = getPreviewSize(
		previewDevice,
		undefined !== border?.bottom ? border.bottom[1] : '',
		undefined !== tabletBorder?.bottom ? tabletBorder.bottom[1] : '',
		undefined !== mobileBorder?.bottom ? mobileBorder.bottom[1] : ''
	);

	const previewBorderStyleLeft = getPreviewSize(
		previewDevice,
		undefined !== border?.left ? border.left[1] : '',
		undefined !== tabletBorder?.left ? tabletBorder.left[1] : '',
		undefined !== mobileBorder?.left ? mobileBorder.left[1] : ''
	);

	const previewHoverBorderColorTop = getPreviewSize(
		previewDevice,
		undefined !== hoverBorder?.top ? KadenceColorOutput(hoverBorder.top[0]) : '',
		undefined !== tabletBorder?.top ? KadenceColorOutput(tabletBorder.top[0]) : '',
		undefined !== mobileBorder?.top ? KadenceColorOutput(tabletBorder.top[0]) : ''
	);

	const previewHoverBorderColorRight = getPreviewSize(
		previewDevice,
		undefined !== hoverBorder?.right ? KadenceColorOutput(hoverBorder.right[0]) : '',
		undefined !== tabletBorder?.right ? KadenceColorOutput(tabletBorder.right[0]) : '',
		undefined !== mobileBorder?.right ? KadenceColorOutput(tabletBorder.right[0]) : ''
	);

	const previewHoverBorderColorBottom = getPreviewSize(
		previewDevice,
		undefined !== hoverBorder?.bottom ? KadenceColorOutput(hoverBorder.bottom[0]) : '',
		undefined !== tabletBorder?.bottom ? KadenceColorOutput(tabletBorder.bottom[0]) : '',
		undefined !== mobileBorder?.bottom ? KadenceColorOutput(tabletBorder.bottom[0]) : ''
	);

	const previewHoverBorderColorLeft = getPreviewSize(
		previewDevice,
		undefined !== hoverBorder?.left ? KadenceColorOutput(hoverBorder.left[0]) : '',
		undefined !== tabletBorder?.left ? KadenceColorOutput(tabletBorder.left[0]) : '',
		undefined !== mobileBorder?.left ? KadenceColorOutput(tabletBorder.left[0]) : ''
	);

	const previewHoverBorderStyleTop = getPreviewSize(
		previewDevice,
		undefined !== hoverBorder?.top ? hoverBorder.top[1] : '',
		undefined !== tabletBorder?.top ? tabletBorder.top[1] : '',
		undefined !== mobileBorder?.top ? mobileBorder.top[1] : ''
	);

	const previewHoverBorderStyleRight = getPreviewSize(
		previewDevice,
		undefined !== hoverBorder?.right ? hoverBorder.right[1] : '',
		undefined !== tabletBorder?.right ? tabletBorder.right[1] : '',
		undefined !== mobileBorder?.right ? mobileBorder.right[1] : ''
	);

	const previewHoverBorderStyleBottom = getPreviewSize(
		previewDevice,
		undefined !== hoverBorder?.bottom ? hoverBorder.bottom[1] : '',
		undefined !== tabletBorder?.bottom ? tabletBorder.bottom[1] : '',
		undefined !== mobileBorder?.bottom ? mobileBorder.bottom[1] : ''
	);

	const previewHoverBorderStyleLeft = getPreviewSize(
		previewDevice,
		undefined !== hoverBorder?.left ? hoverBorder.left[1] : '',
		undefined !== tabletBorder?.left ? tabletBorder.left[1] : '',
		undefined !== mobileBorder?.left ? mobileBorder.left[1] : ''
	);

	const previewHoverBorderTop = getPreviewSize(
		previewDevice,
		undefined !== hoverBorder?.top ? getSpacingOptionOutput(hoverBorder.top[2], hoverBorder.unit) : '',
		undefined !== tabletBorder?.top ? getSpacingOptionOutput(tabletBorder.top[2], tabletBorder.unit) : '',
		undefined !== mobileBorder?.top ? getSpacingOptionOutput(mobileBorder.top[2], mobileBorder.unit) : ''
	);
	const previewHoverBorderRight = getPreviewSize(
		previewDevice,
		undefined !== hoverBorder?.right ? getSpacingOptionOutput(hoverBorder.right[2], hoverBorder.unit) : '',
		undefined !== tabletBorder?.right ? getSpacingOptionOutput(tabletBorder.right[2], tabletBorder.unit) : '',
		undefined !== mobileBorder?.right ? getSpacingOptionOutput(mobileBorder.right[2], mobileBorder.unit) : ''
	);
	const previewHoverBorderBottom = getPreviewSize(
		previewDevice,
		undefined !== hoverBorder?.bottom ? getSpacingOptionOutput(hoverBorder.bottom[2], hoverBorder.unit) : '',
		undefined !== tabletBorder?.bottom ? getSpacingOptionOutput(tabletBorder.bottom[2], tabletBorder.unit) : '',
		undefined !== mobileBorder?.bottom ? getSpacingOptionOutput(mobileBorder.bottom[2], mobileBorder.unit) : ''
	);
	const previewHoverBorderLeft = getPreviewSize(
		previewDevice,
		undefined !== hoverBorder?.left ? getSpacingOptionOutput(hoverBorder.left[2], hoverBorder.unit) : '',
		undefined !== tabletBorder?.left ? getSpacingOptionOutput(tabletBorder.left[2], tabletBorder.unit) : '',
		undefined !== mobileBorder?.left ? getSpacingOptionOutput(mobileBorder.left[2], mobileBorder.unit) : ''
	);

	const previewBorderTopLeftRadius = getPreviewSize(
		previewDevice,
		undefined !== borderRadius ? borderRadius[0] : '',
		undefined !== tabletBorderRadius ? tabletBorderRadius[0] : '',
		undefined !== mobileBorderRadius ? mobileBorderRadius[0] : ''
	);
	const previewBorderTopRightRadius = getPreviewSize(
		previewDevice,
		undefined !== borderRadius ? borderRadius[1] : '',
		undefined !== tabletBorderRadius ? tabletBorderRadius[1] : '',
		undefined !== mobileBorderRadius ? mobileBorderRadius[1] : ''
	);
	const previewBorderBottomRightRadius = getPreviewSize(
		previewDevice,
		undefined !== borderRadius ? borderRadius[2] : '',
		undefined !== tabletBorderRadius ? tabletBorderRadius[2] : '',
		undefined !== mobileBorderRadius ? mobileBorderRadius[2] : ''
	);
	const previewBorderBottomLeftRadius = getPreviewSize(
		previewDevice,
		undefined !== borderRadius ? borderRadius[3] : '',
		undefined !== tabletBorderRadius ? tabletBorderRadius[3] : '',
		undefined !== mobileBorderRadius ? mobileBorderRadius[3] : ''
	);

	// Header font options
	const previewFontSize = getPreviewSize(
		previewDevice,
		undefined !== typography?.size?.[0] ? typography.size[0] : '',
		undefined !== typography?.size?.[1] ? typography.size[1] : '',
		undefined !== typography?.size?.[2] ? typography.size[2] : ''
	);
	const previewLineHeight = getPreviewSize(
		previewDevice,
		undefined !== typography?.lineHeight?.[0] ? typography.lineHeight[0] : '',
		undefined !== typography?.lineHeight?.[1] ? typography.lineHeight[1] : '',
		undefined !== typography?.lineHeight?.[2] ? typography.lineHeight[2] : ''
	);

	const previewLetterSpacing = getPreviewSize(
		previewDevice,
		undefined !== typography?.letterSpacing?.[0] ? typography.letterSpacing[0] : '',
		undefined !== typography?.letterSpacing?.[1] ? typography.letterSpacing[1] : '',
		undefined !== typography?.letterSpacing?.[2] ? typography.letterSpacing[2] : ''
	);

	console.log(typography);

	// Flex direction options
	const previewDirection = getPreviewSize(
		previewDevice,
		undefined !== flex?.direction?.[0] ? flex.direction[0] : '',
		undefined !== flex?.direction?.[1] ? flex.direction[1] : '',
		undefined !== flex?.direction?.[2] ? flex.direction[2] : ''
	);

	let css = new KadenceBlocksCSS();

	if (isSelected) {
		css.set_selector(
			`.block-editor-block-popover__inbetween-container .block-editor-block-list__insertion-point.is-with-inserter`
		);
		css.add_property('display', 'none');
	}

	css.set_selector(`.kb-header.kb-header${uniqueID}`);
	css.add_property('color', KadenceColorOutput(textColor));
	css.add_property('font-size', getFontSizeOptionOutput(previewFontSize, typography.sizeType));
	css.add_property('letter-spacing', getSpacingOptionOutput(previewLetterSpacing, typography.letterType));
	css.add_property('text-transform', typography.textTransform);
	css.add_property('font-family', typography.family);
	css.add_property('font-style', typography.style);
	css.add_property('font-weight', typography.weight);
	css.add_property('line-height', getSpacingOptionOutput(previewLineHeight, typography.lineType));
	css.add_property('background-image', background.image);
	css.add_property('background-size', background.imageSize);
	css.add_property('background-repeat', background.imageRepeat);
	css.add_property('background-attachment', background.imageAttachment);
	css.add_property('background-position', background.imagePosition);
	css.add_property('border-top-width', previewBorderTop);
	css.add_property('border-top-style', previewBorderStyleTop);
	css.add_property('border-top-color', previewBorderColorTop);
	css.add_property('border-right-width', previewBorderRight);
	css.add_property('border-right-style', previewBorderStyleRight);
	css.add_property('border-right-color', previewBorderColorRight);
	css.add_property('border-bottom-width', previewBorderBottom);
	css.add_property('border-bottom-style', previewBorderStyleBottom);
	css.add_property('border-bottom-color', previewBorderColorBottom);
	css.add_property('border-left-width', previewBorderLeft);
	css.add_property('border-left-style', previewBorderStyleLeft);
	css.add_property('border-left-color', previewBorderColorLeft);
	css.add_property('margin-top', getSpacingOptionOutput(previewMarginTop, marginUnit));
	css.add_property('margin-right', getSpacingOptionOutput(previewMarginRight, marginUnit));
	css.add_property('margin-bottom', getSpacingOptionOutput(previewMarginBottom, marginUnit));
	css.add_property('margin-left', getSpacingOptionOutput(previewMarginLeft, marginUnit));
	css.add_property('padding-top', getSpacingOptionOutput(previewPaddingTop, paddingUnit));
	css.add_property('padding-right', getSpacingOptionOutput(previewPaddingRight, paddingUnit));
	css.add_property('padding-bottom', getSpacingOptionOutput(previewPaddingBottom, paddingUnit));
	css.add_property('padding-left', getSpacingOptionOutput(previewPaddingLeft, paddingUnit));
	css.add_property('border-top-left-radius', getSpacingOptionOutput(previewBorderTopLeftRadius, borderRadiusUnit));
	css.add_property('border-top-right-radius', getSpacingOptionOutput(previewBorderTopRightRadius, borderRadiusUnit));
	css.add_property(
		'border-bottom-right-radius',
		getSpacingOptionOutput(previewBorderBottomRightRadius, borderRadiusUnit)
	);
	css.add_property(
		'border-bottom-left-radius',
		getSpacingOptionOutput(previewBorderBottomLeftRadius, borderRadiusUnit)
	);

	css.set_selector(`.kb-header.kb-header${uniqueID}:hover`);
	css.add_property('background-image', backgroundHover.image);
	css.add_property('background-size', backgroundHover.imageSize);
	css.add_property('background-repeat', backgroundHover.imageRepeat);
	css.add_property('background-attachment', backgroundHover.imageAttachment);
	css.add_property('background-position', backgroundHover.imagePosition);
	css.add_property('border-top-width', previewHoverBorderTop);
	css.add_property('border-top-style', previewHoverBorderStyleTop);
	css.add_property('border-top-color', previewHoverBorderColorTop);
	css.add_property('border-right-width', previewHoverBorderRight);
	css.add_property('border-right-style', previewHoverBorderStyleRight);
	css.add_property('border-right-color', previewHoverBorderColorRight);
	css.add_property('border-bottom-width', previewHoverBorderBottom);
	css.add_property('border-bottom-style', previewHoverBorderStyleBottom);
	css.add_property('border-bottom-color', previewHoverBorderColorBottom);
	css.add_property('border-left-width', previewHoverBorderLeft);
	css.add_property('border-left-style', previewHoverBorderStyleLeft);
	css.add_property('border-left-color', previewHoverBorderColorLeft);

	css.set_selector(`.kb-header.kb-header${uniqueID} a`);
	css.add_property('color', KadenceColorOutput(linkColor));

	css.set_selector(`.kb-header.kb-header${uniqueID} a:hover`);
	css.add_property('color', KadenceColorOutput(linkHoverColor));

	const cssOutput = css.css_output();

	return <style>{`${cssOutput}`}</style>;
}
