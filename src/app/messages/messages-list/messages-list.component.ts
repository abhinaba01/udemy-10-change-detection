import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, input } from '@angular/core';
import { MessagesService } from '../messages.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-messages-list',
  imports:[AsyncPipe],
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent {
 private messageService = inject(MessagesService)
//  private cdRef = inject(ChangeDetectorRef);
//  private destroyRef = inject(DestroyRef)

 message$ = this.messageService.message$

// messages: string[]=[];

//  ngOnInit(){
//    const subscription = this.messageService.message$.subscribe((messages)=>{
//     this.messages=messages
//     this.cdRef.markForCheck();
//   });

//   this.destroyRef.onDestroy(()=>{
//     subscription.unsubscribe()
//   })


// }
 

 

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
