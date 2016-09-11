

export class ChatsService {
    messages: Array<any>;

    constructor() {
        this.messages = [
            { name: 'Kjartan Angamaiton',
              body: 'This is a test message.',
              sourceDisplayName: '',
              sourceProfileId: '',
              targetProfileId: '',
              timestamp: '',
              type: 'text'
            },

            { name: 'Niklas Nothstine',
              body: 'This is another test message.',
              sourceDisplayName: '',
              sourceProfileId: '',
              targetProfileId: '',
              timestamp: '',
              type: 'text'
            }
        ];
    }

    sendMessage (type, body, to, save = true): any {
        
    }
}