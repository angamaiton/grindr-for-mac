import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Conversation } from '../../models/conversation/conversation';
import { ChatsService } from './chats.service';

/*
  Generated class for the ChatsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/chats/chats.html',
  providers: [ChatsService]
})
export class ChatsPage {

  chats: Array<any>;

  constructor(private navCtrl: NavController, chatsService: ChatsService, private conversation: Conversation ) {
    this.conversation = conversation;
    this.chats = conversation.messages;
  }

  openChat(id: string) {

  }
  sendText() {

  }
  showSentImages() {

  }
  clearSentImages() {

  }
  sendImage() {

  }
  sendLocation() {

  }
  block() {

  }
  deleteChat() {

  }

}
