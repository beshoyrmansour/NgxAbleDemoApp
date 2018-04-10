import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatComponent } from './chat.component';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatlistComponent } from './chatlist/chatlist.component';
import { ChatcontentComponent } from './chatcontent/chatcontent.component';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import { SharedModule } from '@app/shared';
import { MenuItems } from '@app/shared/menu-items/menu-items';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  imports: [
    ChatRoutingModule,
    SharedModule
  ],
  declarations: [ChatComponent, ChatlistComponent, ChatcontentComponent],
  providers: [ MenuItems,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class ChatModule { }
