'use strict';

const controllers = require('./lib/controllers');
const Meta = require.main.require('./src/meta');
const winston = require.main.require('winston');
const Mailjet = require('node-mailjet');
var server;

const Emailer = {};

Emailer.init = function (params, callback) {
	const router = params.router;
	const hostMiddleware = params.middleware;

	Meta.settings.get('emailer-mailjet', function(err, settings) {
		if (!err && settings && settings.apiKey && settings.secretKey) {
			server = Mailjet.apiConnect(settings.apiKey, settings.secretKey);
		} else {
			winston.error('[plugins/emailer-mailjet] API key or SECRET Key not set!');
		}
	});

	router.get('/admin/plugins/emailer-mailjet', hostMiddleware.admin.buildHeader, controllers.renderAdminPage);
	router.get('/api/admin/plugins/emailer-mailjet', controllers.renderAdminPage);

	callback();
};

Emailer.send = function(data, callback) {
	if (!server) {
		winston.error('[emailer.mailjet] Mailjet is not set up properly!')
		return callback(null, data);
	}

	const request = server
		.post('send', {version: 'v3.1'})
		.request({
			Messages: [
				{
					From: {
						Email: data.from,
						Name: data.from_name
					},
					To: [
						{
							Email: data.to
						}
					],
					Subject: data.subject,
					TextPart: data.plaintext,
					HTMLPart: data.html
				}
			]
		});
	
	request
		.then((result) => {
			callback(null, result.body);
		})
		.catch((err) => {
			callback(err);
		});
};

Emailer.addAdminNavigation = function (header, callback) {
	header.plugins.push({
		route: '/plugins/emailer-mailjet',
		icon: 'fa-envelope-o',
		name: 'Emailer (Mailjet)',
	});

	callback(null, header);
};

module.exports = Emailer;
