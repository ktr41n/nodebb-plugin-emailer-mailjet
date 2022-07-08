'use strict';

var Controllers = {};

Controllers.renderAdminPage = function (req, res/* , next */) {
	res.render('admin/plugins/emailer-mailjet', {});
};

module.exports = Controllers;
