'use strict';

define('admin/plugins/emailer-mailjet', ['settings', 'alerts'], function (Settings, alerts) {
	var Admin = {};

	Admin.init = function () {		
		Settings.load('emailer-mailjet', $('.emailer-settings'));	

		$('#save').on('click', function () {
			Settings.save('emailer-mailjet', $('.emailer-settings'), function () {
				alerts.alert({
					type: 'success',
					alert_id: 'mailjet-saved',
					title: 'Settings Saved',
					message: 'Please reload your NodeBB to apply these settings',
					clickfn: function () {
						socket.emit('admin.reload');
					},
				});
			});
		});
	};

	return Admin;
});
