'use strict';

const users = [ {
  "firstName" : "Juan",
  "lastName" : "Díaz",
  "password" : "password1234",
  "servers" : [ 100, 200 ],
  "phone" : "123456789",
  "userId" : 100,
  "subscriptionTier" : "HIGH-END Hardware",
  "email" : "juanito.diaz@email.com",
  "friends" : [ 200, 300 ],
  "username" : "Juanito_2000",
  "videogames" : [ 100, 200, 300 ]
}, {
  "firstName" : "Paco",
  "lastName" : "Hernández",
  "password" : "password1234",
  "servers" : [ 300 ],
  "phone" : "657098334",
  "userId" : 200,
  "subscriptionTier" : "MID-END Hardware",
  "email" : "paco.hernandez@email.com",
  "friends" : [ 100 ],
  "username" : "pakito_123",
  "videogames" : [ 100, 300 ]
}, {
  "firstName" : "Daniel",
  "lastName" : "Cambero",
  "password" : "password1234",
  "servers" : [ ],
  "phone" : "452670534",
  "userId" : 300,
  "subscriptionTier" : "MID-END Hardware",
  "email" : "daniel.cambero@email.com",
  "friends" : [ 100 ],
  "username" : "dani_crk",
  "videogames" : [ 100 ]
} ];

const voiceMessages = [
  {
    "senderUserId" : 100,
    "voiceMessageContent": "4c6f72656d20697073756d20646f6c6f722073697420616d65744c6f72656d20697073756d20646f6c6f722073697420616d65744c6f72656d20697073756d20646f6c6f722073697420616d6574",
    "transcripcion": "What's up friend?",
    "voiceMessageId" : 1002002222,
    "receiverUserId" : 200,
    "timestamp" : "2022-07-04*13:23:55"
  }, 
  {
    "senderUserId" : 100,
    "voiceMessageContent" : "4c6f72656d20697073756d20646f6c6f722073697420616d65744c6f72656d20697073756d20646f6c6f722073697420616d65744c6f72656d20697073756d20646f6c6f722073697420616d6574",
    "transcripcion": "Hey, life's good man.",
    "voiceMessageId" : 1002002222,
    "receiverUserId" : 200,
    "timestamp" : "2022-07-04*13:23:55"
  }
]

/**
 * Retrieve all messages sent or received to/from an user.
 * Retrieve all messages sent or received to/from an user.
 *
 * userId String The identifier of the user querying the API
 * secondUserId String The identifier of the user whose comments are wanted.
 * returns List
 **/
exports.voice_messageUserIdFilter_by_userGET = function(secondUserId, userId) {
  return new Promise(function(resolve, reject) {
  var examples = {};
  if (users.some(user => user.userId === userId) && users.some(user => user.userId === secondUserId)) {
    const filtered_msgs = voiceMessages.filter(message => ( (message.receiverUserId === userId || message.senderUserId === userId)
                                                      && (message.receiverUserId === secondUserId || message.senderUserId === secondUserId)
                                                      ));
    examples['application/json'] = filtered_msgs;                                          
    resolve(examples[Object.keys(examples)[0]]);
  } else {
    examples['text/plain'] = "The user specified does not exist.";
    reject(examples[Object.keys(examples)[0]]);
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
      examples['text/plain'] = "The voice message could not be broadcasted.";
      reject(examples[Object.keys(examples)[0]]);
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
    if (users.some(user => user.userId === body.receiverUserId)) {
      examples['application/json'] = "Voice message sent.";
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['application/json'] = "Voice message could not be sent.";
      reject(examples[Object.keys(examples)[0]]);
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
exports.voice_messagesUserIdFilter_by_contentGET = function(filter, userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (users.some(user => user.userId === userId)) {
      const filtered_msgs = voiceMessages.filter(message => (message.receiverUserId === userId 
                                                        || message.senderUserId === userId) 
                                                        && message.transcripcion.toUpperCase().includes(filter.toUpperCase()));
      examples['application/json'] = filtered_msgs;                                          
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = "The user specified does not exist.";
      reject(examples[Object.keys(examples)[0]]);
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
    if (users.some(users => users.userId === userId)) {
      examples['application/json'] = voiceMessages.filter(message => (message.receiverUserId === userId) || (message.senderUserId === userId));
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = "The user specified does not exist.";
      reject(examples[Object.keys(examples)[0]]);
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
exports.voice_messagesVoiceMessageIdDELETE = function(voiceMessageId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (voiceMessages.some(message => message.voiceMessageId === voiceMessageId)) {
      examples['text/plain'] = "Voice message deleted.";
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = "Voice message could not be deleted.";
      reject(examples[Object.keys(examples)[0]]);
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
exports.voice_messagesVoiceMessageIdPUT = function(body,voiceMessageId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (voiceMessages.some(message => message.voiceMessageId === voiceMessageId)) {
      examples['text/plain'] = "Voice message modified.";
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = "Voice message could not be found.";
      reject(examples[Object.keys(examples)[0]]);
    }
  });
}

