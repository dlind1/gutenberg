/**
 * WordPress dependencies
 */
import { BlockIcon } from '@wordpress/block-editor';
import { CheckboxControl } from '@wordpress/components';

function BlockTypesChecklist( { blockTypes, value, onItemChange } ) {
	return (
		<ul className="edit-post-block-manager__checklist">
			{ blockTypes.map( ( blockType ) => (
				<li
					key={ blockType.name }
					className="edit-post-block-manager__checklist-item"
				>
					<CheckboxControl
						__nextHasNoMarginBottom
						label={
							<>
								{ blockType.title }
								<BlockIcon icon={ blockType.icon } />
							</>
						}
						checked={ value.includes( blockType.name ) }
						onChange={ ( ...args ) =>
							onItemChange( blockType.name, ...args )
						}
					/>
				</li>
			) ) }
		</ul>
	);
}

export default BlockTypesChecklist;
