import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  message$ = new BehaviorSubject<string[]>([]);
  private messages: string[] = [];

  get allMessages() {
    return [...this.messages];
  }

  addMessage(message: string) {
    this.messages = [...this.messages, message];
    this.message$.next(this.messages) // this is used to emit the messages array  using the Behaviour Subject
  }
}
