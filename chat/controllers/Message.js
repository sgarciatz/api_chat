'use strict';

var utils = require('../utils/writer.js');
var Message = require('../service/MessageService');

module.exports.messageBroadcastPOST = function messageBroadcastPOST (req, res, next, body) {
  Message.messageBroadcastPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.messageUserIdFilter_by_contentGET = function messageUserIdFilter_by_contentGET (req, res, next, userId, filter) {
  Message.messageUserIdFilter_by_contentGET(userId, filter)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.messageUserIdFind_by_userGET = function messageUserIdFind_by_userGET (req, res, next, userId, secondUserId) {
  Message.messageUserIdFind_by_userGET(userId, secondUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.messagesDELETE = function messagesDELETE (req, res, next, messageId) {
  Message.messagesDELETE(messageId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.messagesPOST = function messagesPOST (req, res, next, body) {
  Message.messagesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.messagesPUT = function messagesPUT (req, res, next, body, messageId) {
  Message.messagesPUT(body, messageId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.messagesUserIdGET = function messagesUserIdGET (req, res, next, userId) {
  Message.messagesUserIdGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
