/**
 * Copy and Paste Block Styles Component
 *
 */
import { flow, omit, isEqual } from 'lodash';
import { __ } from '@wordpress/i18n';
import {
	MenuGroup,
	MenuItem,
	ToolbarDropdownMenu,
} from '@wordpress/components';

/**
 * Import Icons
 */
 import {
	copy,
	paste,
} from '@kadence/icons';
import {
	copy as coreCopy,
} from '@wordpress/icons';

const {
	localStorage,
} = window;

/**
 * Build the copy and paste controls
 * @returns {object} The copy and paste controls.
 */
function CopyPasteAttributes ( {
	attributes,
    excludedAttrs,
    defaultAttributes,
    blockSlug,
    onPaste,
} ) {
    const storageKey = blockSlug + '-style';
	const currentCopiedStyles = JSON.parse( localStorage.getItem( storageKey ) );
	const alwaysExclude = [ 'uniqueID', 'inQueryBlock', 'anchor' ];

	const copyAction = () => {
        //grab all block attributes, minus the exclusions
		const allExcludedAttrs = alwaysExclude.concat(excludedAttrs);
		let attributesToCopy = omit(attributes, allExcludedAttrs);
		
		// we don't need to store attributes that are the default.
        // if provided, compare to the block's defaults and delete (assumed from block.json)
		Object.keys(attributesToCopy).map((key, index) => {
			if ( undefined !== defaultAttributes[key] && undefined !== defaultAttributes[key].default ) {
				if ( isEqual(attributesToCopy[key], defaultAttributes[key].default ) ) {
					delete(attributesToCopy[key])
				}
			}
		});

        //store the attributes to be pasted later
		localStorage.setItem( storageKey, JSON.stringify( attributesToCopy ) );
	};

	const pasteAction = () => {
		const pasteItem = JSON.parse( localStorage.getItem( storageKey ) );

		if ( pasteItem ) {
			onPaste( pasteItem );
		}
	};

	return (
		<ToolbarDropdownMenu
			className="components-toolbar kb-copy-paste-attributes"
			icon={ coreCopy }
			label={ __( 'Copy/Paste Styles', 'kadence-blocks' ) }
			popoverProps={ {
				className: 'kb-copy-paste-attributes__popover',
			} }
		>
			{ ( { onClose } ) => (
				<>
					<MenuGroup>
						<MenuItem
							icon={ copy }
							onClick={ flow( onClose, copyAction ) }
							label={ __( 'Copy Styles', 'kadence-blocks' ) }
						>
							{ __( 'Copy Styles', 'kadence-blocks' ) }
						</MenuItem>
						<MenuItem
							icon={ paste }
							onClick={ flow( onClose, pasteAction ) }
							disabled={ ! currentCopiedStyles }
							label={ __( 'Paste Styles', 'kadence-blocks' ) }
						>
							{ __( 'Paste Styles', 'kadence-blocks' ) }
						</MenuItem>
					</MenuGroup>
				</>
			) }
		</ToolbarDropdownMenu>
	);
}
export default ( CopyPasteAttributes );