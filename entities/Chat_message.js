module.exports = (Chat_message) => {

  let newChat_message = { 
    message: Chat_message.message,
    sender: Chat_message.sender,
    recipient: Chat_message.recipient,
    groupId: Chat_message.groupId,
    isActive: Chat_message.isActive,
    createdAt: Chat_message.createdAt,
    updatedAt: Chat_message.updatedAt,
    updatedBy: Chat_message.updatedBy,
    addedBy: Chat_message.addedBy,
    isDeleted: Chat_message.isDeleted,
  };

  // remove undefined values
  Object.keys(newChat_message).forEach(key => newChat_message[key] === undefined && delete newChat_message[key]);

  // To validate Entity uncomment this block
  /*
   * const validate = (newChat_message) => {
   *   if (!newChat_message.field) {
   *       throw new Error("this field is required");
   *   }
   * }
   * validate(newChat_message) 
   */

  return Object.freeze(newChat_message);
};
