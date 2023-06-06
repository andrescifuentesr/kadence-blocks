import { __ } from '@wordpress/i18n';
import { times } from 'lodash';
import { SelectControl, CheckboxControl } from '@wordpress/components';
import { applyFilters } from '@wordpress/hooks';

export default function SubmitActionOptions( { setAttributes, selectedActions } ) {

	const actionOptionsList = [
		{ value: 'email', label: __( 'Email', 'kadence-blocks' ), help: '', isDisabled: true },
		{ value: 'redirect', label: __( 'Redirect', 'kadence-blocks' ), help: '', isDisabled: true },
		{ value: 'mailerlite', label: __( 'Mailerlite', 'kadence-blocks' ), help: __( 'Add User to MailerLite list', 'kadence-blocks' ), isDisabled: false },
		{ value: 'fluentCRM', label: __( 'FluentCRM', 'kadence-blocks' ), help: __( 'Add User to FluentCRM list', 'kadence-blocks' ), isDisabled: false },
		{ value: 'convertkit', label: __( 'ConvertKit (Pro addon)', 'kadence-blocks' ), help: __( 'Add user to ConvertKit', 'kadence-blocks' ), isDisabled: true },
		{ value: 'activecampaign', label: __( 'ActiveCampaign (Pro addon)', 'kadence-blocks' ), help: __( 'Add user to ActiveCampaign', 'kadence-blocks' ), isDisabled: true },
		{ value: 'autoEmail', label: __( 'Auto Respond Email (Pro addon)', 'kadence-blocks' ), help: __( 'Send instant response to form entrant', 'kadence-blocks' ), isDisabled: true },
		{ value: 'entry', label: __( 'Database Entry (Pro addon)', 'kadence-blocks' ), help: __( 'Log each form submission', 'kadence-blocks' ), isDisabled: true  }, // isDisabled: true },
		{ value: 'sendinblue', label: __( 'Brevo (SendInBlue) (Pro addon)', 'kadence-blocks' ), help: __( 'Add user to Brevo list', 'kadence-blocks' ), isDisabled: true },
		{ value: 'mailchimp', label: __( 'MailChimp (Pro addon)', 'kadence-blocks' ), help: __( 'Add user to MailChimp list', 'kadence-blocks' ), isDisabled: true },
		{ value: 'webhook', label: __( 'WebHook (Pro addon)', 'kadence-blocks' ), help: __( 'Send form information to any third party webhook', 'kadence-blocks' ), isDisabled: false }, // isDisabled: true },
	];

	const filteredOptions = applyFilters( 'kadence.actionOptions', actionOptionsList );
	const actionOptions = filteredOptions.map(o => ({ ...o, disabled: o.isDisabled }));

	return (
		<SelectControl
			className={ 'kb-adv-form-actions' }
			multiple
			value={ selectedActions }
			onChange={ ( selected ) => {
				setAttributes( selected, 'actions' );
			} }
			options={ actionOptions }
		/>
	);

}
