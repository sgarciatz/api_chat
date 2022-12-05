'use strict';

var utils = require('../utils/writer.js');
var Message = require('../service/MessageService');

module.exports.messageBroadcastPOST = function messageBroadcastPOST (req, res, next, body) {
  Message.messageBroadcastPOST(body)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 400);
    });
};

module.exports.messageUserIdFilter_by_contentGET = function messageUserIdFilter_by_contentGET (req, res, next, userId, filter) {
  Message.messageUserIdFilter_by_contentGET(userId, filter)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};

module.exports.messageUserIdFilter_by_userGET = function messageUserIdFilter_by_userGET (req, res, next, userId, secondUserId) {
  Message.messageUserIdFilter_by_userGET(userId, secondUserId)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};

module.exports.messagesMessageIdDELETE = function messagesMessageIdDELETE (req, res, next, messageId) {
  Message.messagesMessageIdDELETE(messageId)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};

module.exports.messagesPOST = function messagesPOST (req, res, next, body) {
  Message.messagesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 400);
    });
};

module.exports.messagesMessageIdPUT = function messagesMessageIdPUT (req, res, next, body, messageId) {
  Message.messagesMessageIdPUT(body, messageId)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};

module.exports.messagesUserIdGET = function messagesUserIdGET (req, res, next, userId) {
  Message.messagesUserIdGET(userId)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};
