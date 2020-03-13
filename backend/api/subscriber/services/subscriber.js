'use strict';
const crypto = require('crypto');
const Mailchimp = require('mailchimp-api-v3');

const ENV = strapi.config.environment

function md5(payload){
    return crypto.createHash('md5').update(payload).digest('hex');
};

module.exports = {
    addNewSubscriber: (email) => {
        const mailchimp = new Mailchimp(strapi.config.environments[ ENV ].mailchimpApiKey);
        const hash = md5(String(email).toLowerCase())
        return mailchimp.request({
            method: 'put',
            path: '/lists/{list_id}/members/{subscriber_hash}',
            path_params: {
                list_id: strapi.config.environments[ ENV ].mailchimpAudience,
                subscriber_hash: hash
            },
            body: {
                email_address: email,
                status_if_new: 'subscribed'
            }
        })
    },
    removeSubscriber: (email) => {
        const mailchimp = new Mailchimp(strapi.config.mailchimpApiKey);
        const hash = md5(String(email).toLowerCase())
        return mailchimp.request({
            method: 'delete',
            path: '/lists/{list_id}/members/{subscriber_hash}',
            path_params: {
                list_id: strapi.config.environments[ ENV ].mailchimpAudience,
                subscriber_hash: hash
            }
        })
    }
};
