import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { config } from 'config/pages-config';
import { ChatComponent } from '@app/chat/chat.component';
import { ChatlistComponent } from '@app/chat/chatlist/chatlist.component';
import { ChatcontentComponent } from '@app/chat/chatcontent/chatcontent.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: ChatComponent,
  //   children: [
  //     { path: '', redirectTo: config.chat.chatList.path, pathMatch: 'full' },
  //     { path: config.chat.chatList.path, component: ChatlistComponent },
  //     { path: config.chat.chatContent.path, component: ChatcontentComponent },
  //   ]
  // }
  {
    path: '',
    component: ChatComponent,
    children: [
      { path: '', redirectTo: config.chat.chatList.path, pathMatch: 'full' },
      { path: config.chat.chatList.path, component: ChatlistComponent },
      { path: config.chat.chatContent.path, component: ChatcontentComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
