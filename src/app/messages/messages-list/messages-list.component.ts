import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, input } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent {
 private messageService = inject(MessagesService)
 private cdRef = inject(ChangeDetectorRef);

 messages: string[]=[];

 ngOnInit(){
  this.messageService.message$.subscribe((messages)=>{
    this.messages=messages
    this.cdRef.markForCheck();
  });
 }
 

 

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
