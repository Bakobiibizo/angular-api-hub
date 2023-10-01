import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Base64Service } from './hub/api-endpoints/base64-service/base64-service.service';
import { ArtService } from './hub/api-endpoints/art/art.service';
import { ChatInputComponent } from './components/chat-input/chat-input.component';
import { ChatHistoryComponent } from './components/chat-history/chat-history.component';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { FileInputComponent } from './components/file-input/file-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatInputComponent,
    ChatHistoryComponent,
    ImageViewerComponent,
    FileInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
