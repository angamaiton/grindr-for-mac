import { Message } from './messages';

export class Conversation {
    messages: Array<string>;

    constructor(messages: messages) {
        this.messages = messages;
    }
}