export class Message {
  content: string;
  username: string;
  userId?: string;
  messageId?:string;

  constructor(content: string, username: string, userId?: string, messageId?:string){
    this.content = content;
    this.username = username;
    this.userId = userId;
    this.messageId = messageId;
  }
}
