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

const messages = [ 
  {
    "senderUserId" : 100,
    "messageId" : 1002001111,
    "receiverUserId" : 200,
    "messageContent" : "What's up friend?",
    "timestamp" : "2022-07-04*13:23:55"
},
  {
    "senderUserId" : 200,
    "messageId" : 2001002222,
    "receiverUserId" : 100,
    "messageContent" : "Hey, life's good man.",
    "timestamp" : "2022-07-04*13:23:55"
} ];

/**
 * Send a message to all known users.
 * Send a message to all known users.
 *
 * body Message  (optional)
 * returns String
 **/
exports.messageBroadcastPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (body) {
      examples['text/plain'] = "Message Broadcasted.";
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = "The message could not be broadcasted.";
      reject(examples[Object.keys(examples)[0]]);
    }
  });
}


/**
 * Retrieve all messages given that its content matches the specified string.
 * Retrieve all messages given that its content matches the specified string.
 *
 * userId String The identifier of the user querying the API
 * filter String The string used to match the desired message
 * returns List
 **/
exports.messageUserIdFilter_by_contentGET = function(filter, userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (users.some(user => user.userId === userId)) {
      const filtered_msgs = messages.filter(message => (message.receiverUserId === userId 
                                                        || message.senderUserId === userId) 
                                                        && message.messageContent.toUpperCase().includes(filter.toUpperCase()));
      examples['application/json'] = filtered_msgs;                                          
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = "The user specified does not exist.";
      reject(examples[Object.keys(examples)[0]]);
    }
  });
}


/**
 * Retrieve all messages sent to or received from an specific user.
 * Retrieve all messages sent to or received from an specific user.
 *
 * userId String The identifier of the user querying the API
 * secondUserId String The identifier of the user whose comments are wanted.
 * returns List
 **/
exports.messageUserIdFilter_by_userGET = function(userId,secondUserId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (users.some(user => user.userId === userId) && users.some(user => user.userId === secondUserId)) {
      const filtered_msgs = messages.filter(message => ( (message.receiverUserId === userId || message.senderUserId === userId)
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
 * Delete a sent message.
 * Delete a sent message.
 *
 * messageId Integer The identifier of a sent message.
 * returns String
 **/
exports.messagesMessageIdDELETE = function(messageId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (messages.some(message => message.messageId === messageId)) {
      examples['text/plain'] = "Message deleted.";
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = "Message could not be deleted.";
      reject(examples[Object.keys(examples)[0]]);
    }
  });
}


/**
 * Modify a sent message.
 * Modify a sent message.
 *
 * body Message  (optional)
 * messageId Integer The identifier of a sent message.
 * returns String
 **/
exports.messagesMessageIdPUT = function(body,messageId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (messages.some(message => message.messageId === messageId)) {
      examples['text/plain'] = "Message modified.";
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = "Message could not be found.";
      reject(examples[Object.keys(examples)[0]]);
    }
  });
}

/**
 * Send a message to an user
 * Send a message to an user
 *
 * body Message  (optional)
 * returns String
 **/
exports.messagesPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (users.some(user => user.userId === body.receiverUserId)) {
      examples['application/json'] = "Message sent.";
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['application/json'] = "Message could not be sent.";
      reject(examples[Object.keys(examples)[0]]);
    }
  });
}


/**
 * Fetch all the messages sent to the user.
 * Fetch all the messages sent to the user.
 *
 * userId Integer The identifier of the user querying the API
 * returns List
 **/
exports.messagesUserIdGET = function(userId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (users.some(users => users.userId === userId)) {
      examples['application/json'] = messages.filter(message => (message.receiverUserId === userId) || (message.senderUserId === userId));
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      examples['text/plain'] = "The user specified does not exist.";
      reject(examples[Object.keys(examples)[0]]);
    }
  });
}

