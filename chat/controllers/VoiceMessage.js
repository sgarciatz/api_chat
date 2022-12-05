'use strict';

var utils = require('../utils/writer.js');
var VoiceMessage = require('../service/VoiceMessageService');

module.exports.voice_messageUserIdFilter_by_userGET = function voice_messageUserIdFilter_by_userGET (req, res, next, userId, secondUserId) {
  VoiceMessage.voice_messageUserIdFilter_by_userGET(userId, secondUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.voice_messagesBroadcastPOST = function voice_messagesBroadcastPOST (req, res, next, body) {
  VoiceMessage.voice_messagesBroadcastPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.voice_messagesDELETE = function voice_messagesDELETE (req, res, next, voiceMessageId) {
  VoiceMessage.voice_messagesDELETE(voiceMessageId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.voice_messagesPOST = function voice_messagesPOST (req, res, next, body) {
  VoiceMessage.voice_messagesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.voice_messagesPUT = function voice_messagesPUT (req, res, next, body, voiceMessageId) {
  VoiceMessage.voice_messagesPUT(body, voiceMessageId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.voice_messagesUserIdFilter_by_contentGET = function voice_messagesUserIdFilter_by_contentGET (req, res, next, userId, filter) {
  VoiceMessage.voice_messagesUserIdFilter_by_contentGET(userId, filter)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.voice_messagesUserIdGET = function voice_messagesUserIdGET (req, res, next, userId) {
  VoiceMessage.voice_messagesUserIdGET(userId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
