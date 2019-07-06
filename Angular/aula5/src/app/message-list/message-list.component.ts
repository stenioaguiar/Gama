import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  messages = [];

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.select('messages').subscribe(v => {
      this.messages = v.messages;
    });
  }

  apagar(messageId) {
    this.store.dispatch({
      type: 'DELETE-MESSAGE',
      payload: messageId,
    });
  }

}
