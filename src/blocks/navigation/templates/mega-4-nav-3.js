/**
 * Template: Main Features right (mega menu 2 pro)
 * Post Type: kadence_navigation
 */

import { createBlock } from '@wordpress/blocks';

const postMeta = {
	_kad_navigation_collapseSubMenus: '1',
	_kad_navigation_collapseSubMenusTablet: '1',
	_kad_navigation_collapseSubMenusMobile: '1',
	_kad_navigation_orientation: 'vertical',
	_kad_navigation_spacing: ['1', '1', '1', '1'],
	_kad_navigation_linkColor: 'palette4',
	_kad_navigation_linkColorHover: 'palette1',
	_kad_navigation_linkColorActive: 'palette1',
	_kad_navigation_background: 'palette9',
	_kad_navigation_typography: [
		{
			size: ['sm', '', ''],
			sizeType: 'px',
			lineHeight: ['', '', ''],
			lineType: '',
			letterSpacing: ['', '', ''],
			letterType: 'px',
			textTransform: '',
			family: '',
			google: false,
			style: '',
			weight: '',
			variant: '',
			subset: '',
			loadGoogle: true,
		},
	],
};

function innerBlocks() {
	return [
		createBlock('kadence/navigation', {}, [
			createBlock(
				'kadence/navigation-link',
				{
					uniqueID: '372_45c883-68',
					label: 'Link Title',
					description: 'Use this space to add a short description.',
					url: '#',
					kind: 'custom',
					mediaType: 'icon',
					mediaAlign: 'left',
					mediaIcon: [
						{
							icon: 'fe_paperclip',
							size: 20,
							sizeTablet: '',
							sizeMobile: '',
							width: 2,
							widthTablet: 2,
							widthMobile: 2,
							hoverAnimation: 'none',
							title: '',
							flipIcon: '',
						},
					],
					mediaStyle: [
						{
							color: 'palette1',
							colorTablet: '',
							colorMobile: '',
							colorHover: 'palette1',
							colorHoverTablet: '',
							colorHoverMobile: '',
							colorActive: 'palette1',
							colorActiveTablet: '',
							colorActiveMobile: '',
							background: '',
							backgroundTablet: '',
							backgroundMobile: '',
							backgroundHover: '',
							backgroundHoverTablet: '',
							backgroundHoverMobile: '',
							backgroundActive: '',
							backgroundActiveTablet: '',
							backgroundActiveMobile: '',
							border: '',
							hoverBorder: '',
							borderRadius: '',
							borderRadiusTablet: '',
							borderRadiusMobile: '',
							borderWidth: [0, 0, 0, 0],
							padding: [5, 5, 5, 5],
							paddingTablet: ['', '', '', ''],
							paddingMobile: ['', '', '', ''],
							paddingType: 'px',
							margin: [8, '', '', ''],
							marginTablet: ['', '', '', ''],
							marginMobile: ['', '', '', ''],
							marginType: 'px',
						},
					],
				},
				[]
			),
			createBlock(
				'kadence/navigation-link',
				{
					uniqueID: '372_eea3ed-17',
					label: 'Link Title',
					description: 'Use this space to add a short description.',
					url: '#',
					kind: 'custom',
					mediaType: 'icon',
					mediaAlign: 'left',
					mediaIcon: [
						{
							icon: 'fe_image',
							size: 20,
							sizeTablet: '',
							sizeMobile: '',
							width: 2,
							widthTablet: 2,
							widthMobile: 2,
							hoverAnimation: 'none',
							title: '',
							flipIcon: '',
						},
					],
					mediaStyle: [
						{
							color: 'palette1',
							colorTablet: '',
							colorMobile: '',
							colorHover: 'palette1',
							colorHoverTablet: '',
							colorHoverMobile: '',
							colorActive: 'palette1',
							colorActiveTablet: '',
							colorActiveMobile: '',
							background: '',
							backgroundTablet: '',
							backgroundMobile: '',
							backgroundHover: '',
							backgroundHoverTablet: '',
							backgroundHoverMobile: '',
							backgroundActive: '',
							backgroundActiveTablet: '',
							backgroundActiveMobile: '',
							border: '',
							hoverBorder: '',
							borderRadius: '',
							borderRadiusTablet: '',
							borderRadiusMobile: '',
							borderWidth: [0, 0, 0, 0],
							padding: [5, 5, 5, 5],
							paddingTablet: ['', '', '', ''],
							paddingMobile: ['', '', '', ''],
							paddingType: 'px',
							margin: [8, '', '', ''],
							marginTablet: ['', '', '', ''],
							marginMobile: ['', '', '', ''],
							marginType: 'px',
						},
					],
				},
				[]
			),
			createBlock(
				'kadence/navigation-link',
				{
					uniqueID: '372_2e2290-89',
					label: 'Link Title',
					description: 'Use this space to add a short description.',
					url: '#',
					kind: 'custom',
					mediaType: 'icon',
					mediaAlign: 'left',
					mediaIcon: [
						{
							icon: 'fe_moon',
							size: 20,
							sizeTablet: '',
							sizeMobile: '',
							width: 2,
							widthTablet: 2,
							widthMobile: 2,
							hoverAnimation: 'none',
							title: '',
							flipIcon: '',
						},
					],
					mediaStyle: [
						{
							color: 'palette1',
							colorTablet: '',
							colorMobile: '',
							colorHover: 'palette1',
							colorHoverTablet: '',
							colorHoverMobile: '',
							colorActive: 'palette1',
							colorActiveTablet: '',
							colorActiveMobile: '',
							background: '',
							backgroundTablet: '',
							backgroundMobile: '',
							backgroundHover: '',
							backgroundHoverTablet: '',
							backgroundHoverMobile: '',
							backgroundActive: '',
							backgroundActiveTablet: '',
							backgroundActiveMobile: '',
							border: '',
							hoverBorder: '',
							borderRadius: '',
							borderRadiusTablet: '',
							borderRadiusMobile: '',
							borderWidth: [0, 0, 0, 0],
							padding: [5, 5, 5, 5],
							paddingTablet: ['', '', '', ''],
							paddingMobile: ['', '', '', ''],
							paddingType: 'px',
							margin: [8, '', '', ''],
							marginTablet: ['', '', '', ''],
							marginMobile: ['', '', '', ''],
							marginType: 'px',
						},
					],
				},
				[]
			),
			createBlock(
				'kadence/navigation-link',
				{
					uniqueID: '372_eeb2b5-c1',
					label: 'Link Title',
					description: 'Use this space to add a short description.',
					url: '#',
					kind: 'custom',
					mediaType: 'icon',
					mediaAlign: 'left',
					mediaIcon: [
						{
							icon: 'fe_watch',
							size: 20,
							sizeTablet: '',
							sizeMobile: '',
							width: 2,
							widthTablet: 2,
							widthMobile: 2,
							hoverAnimation: 'none',
							title: '',
							flipIcon: '',
						},
					],
					mediaStyle: [
						{
							color: 'palette1',
							colorTablet: '',
							colorMobile: '',
							colorHover: 'palette1',
							colorHoverTablet: '',
							colorHoverMobile: '',
							colorActive: 'palette1',
							colorActiveTablet: '',
							colorActiveMobile: '',
							background: '',
							backgroundTablet: '',
							backgroundMobile: '',
							backgroundHover: '',
							backgroundHoverTablet: '',
							backgroundHoverMobile: '',
							backgroundActive: '',
							backgroundActiveTablet: '',
							backgroundActiveMobile: '',
							border: '',
							hoverBorder: '',
							borderRadius: '',
							borderRadiusTablet: '',
							borderRadiusMobile: '',
							borderWidth: [0, 0, 0, 0],
							padding: [5, 5, 5, 5],
							paddingTablet: ['', '', '', ''],
							paddingMobile: ['', '', '', ''],
							paddingType: 'px',
							margin: [8, '', '', ''],
							marginTablet: ['', '', '', ''],
							marginMobile: ['', '', '', ''],
							marginType: 'px',
						},
					],
				},
				[]
			),
		]),
	];
}

export { postMeta, innerBlocks };
