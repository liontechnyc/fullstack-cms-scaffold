'use strict';

const { addNewSubscriber, removeSubscriber } = require('../services/subscriber');

module.exports = {

  // Before creating a value.
  // Fired before a `insert` query.
  beforeCreate: async (model, attrs, options) => {
    await addNewSubscriber(model.attributes.email)
  },

  // Before destroying a value.
  // Fired before a `delete` query.
  // afterDestroy: async (model, attrs, options) => {
    // removeSubscriber(model.attributes.email)
  // },
};
