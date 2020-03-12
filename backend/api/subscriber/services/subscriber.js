'use strict';
const crypto = require('crypto');
const Mailchimp = require('mailchimp-api-v3');

const {
    MAILCHIMP_API_KEY,
    MAILCHIMP_AUDIENCE
} = require('../../../config/environments/development/custom.json');

const mailchimp = new Mailchimp(MAILCHIMP_API_KEY)

function md5(payload){
    return crypto.createHash('md5').update(payload).digest('hex')
}

module.exports = {
    addNewSubscriber: (email) => {
        const hash = md5(String(email).toLowerCase())
        return mailchimp.request({
            method: 'put',
            path: '/lists/{list_id}/members/{subscriber_hash}',
            path_params: {
                list_id: MAILCHIMP_AUDIENCE,
                subscriber_hash: hash
            },
            body: {
                email_address: email,
                status_if_new: 'subscribed'
            }
        })
    },
    removeSubscriber: (email) => {
        const hash = md5(String(email).toLowerCase())
        return mailchimp.request({
            method: 'delete',
            path: '/lists/{list_id}/members/{subscriber_hash}',
            path_params: {
                list_id: MAILCHIMP_AUDIENCE,
                subscriber_hash: hash
            }
        })
    }
};
