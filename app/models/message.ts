import { User } from './user';
import { Conversation } from './conversation';

export class Message {

    constructor(private user: User) {
        this.user = user;
    }

    body: string;
    messageId: number;
    sourceDisplayName: string = this.user.displayName;
    sourceProfileId: number = this.user.profileId;
    timestamp: number;
    type: string = 'text';
}