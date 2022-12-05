'use strict';


/**
 * Retrieve all messages sent or received to/from an user.
 * Retrieve all messages sent or received to/from an user.
 *
 * userId String The identifier of the user querying the API
 * secondUserId String The identifier of the user whose comments are wanted.
 * returns List
 **/
exports.voice_messageUserIdFilter_by_userGET = function(userId,secondUserId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "senderUserId" : 100,
  "voiceMessageContent" : "4c6f72656d20697073756d20646f6c6f722073697420616d65744c6f72656d20697073756d20646f6c6f722073697420616d65744c6f72656d20697073756d20646f6c6f722073697420616d6574",
  "voiceMessageId" : 1002002222,
  "receiverUserId" : "200",
  "timestamp" : "2022-07-04*13:23:55"
}, {
  "senderUserId" : 100,
  "voiceMessageContent" : "4c6f72656d20697073756d20646f6c6f722073697420616d65744c6f72656d20697073756d20646f6c6f722073697420616d65744c6f72656d20697073756d20646f6c6f722073697420616d6574",
  "voiceMessageId" : 1002002222,
  "receiverUserId" : "200",
  "timestamp" : "2022-07-04*13:23:55"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Send a voice message to all known users.
 * Send a voice message to all known users.
 *
 * body VoiceMessage  (optional)
 * returns String
 **/
exports.voice_messagesBroadcastPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "Voice message Broadcasted";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a sent voice message.
 * Delete a sent voice message.
 *
 * voiceMessageId Integer The identifier of a sent voice message.
 * returns String
 **/
exports.voice_messagesDELETE = function(voiceMessageId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "Voice message deleted.";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Send a voice message to an user.
 * Send a voice message to an user.
 *
 * body VoiceMessage  (optional)
 * returns String
 **/
exports.voice_messagesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "Voice message sent.";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modify a sent voice message.
 * Modify a sent voice message.
 *
 * body VoiceMessage  (optional)
 * voiceMessageId Integer The identifier of a sent voice message.
 * returns String
 **/
exports.voice_messagesPUT = function(body,voiceMessageId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "Voice message modified.";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve all messages given that its transcription matches the specified string.
 * Retrieve all messages given that its transcription matches the specified string.
 *
 * userId String The identifier of the user querying the API
 * filter String The string used to match the desired message
 * returns List
 **/
exports.voice_messagesUserIdFilter_by_contentGET = function(userId,filter) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "senderUserId" : 100,
  "voiceMessageContent" : "4c6f72656d20697073756d20646f6c6f722073697420616d65744c6f72656d20697073756d20646f6c6f722073697420616d65744c6f72656d20697073756d20646f6c6f722073697420616d6574",
  "voiceMessageId" : 1002002222,
  "receiverUserId" : "200",
  "timestamp" : "2022-07-04*13:23:55"
}, {
  "senderUserId" : 100,
  "voiceMessageContent" : "4c6f72656d20697073756d20646f6c6f722073697420616d65744c6f72656d20697073756d20646f6c6f722073697420616d65744c6f72656d20697073756d20646f6c6f722073697420616d6574",
  "voiceMessageId" : 1002002222,
  "receiverUserId" : "200",
  "timestamp" : "2022-07-04*13:23:55"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fetch all the voice messages sent to an user.
 * Fetch all the voice messages sent to an user.
 *
 * userId Integer The identifier of the user querying the API
 * returns List
 **/
exports.voice_messagesUserIdGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "senderUserId" : 100,
  "voiceMessageContent" : "4c6f72656d20697073756d20646f6c6f722073697420616d65744c6f72656d20697073756d20646f6c6f722073697420616d65744c6f72656d20697073756d20646f6c6f722073697420616d6574",
  "voiceMessageId" : 1002002222,
  "receiverUserId" : "200",
  "timestamp" : "2022-07-04*13:23:55"
}, {
  "senderUserId" : 100,
  "voiceMessageContent" : "4c6f72656d20697073756d20646f6c6f722073697420616d65744c6f72656d20697073756d20646f6c6f722073697420616d65744c6f72656d20697073756d20646f6c6f722073697420616d6574",
  "voiceMessageId" : 1002002222,
  "receiverUserId" : "200",
  "timestamp" : "2022-07-04*13:23:55"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

