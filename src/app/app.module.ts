import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainNewComponent } from './main-news/main-news.component';
import { NewNavBarComponent } from './nav-news/nav-news.component';
import { VideosComponent} from './videos-news/videos-news.component';
import { SurveyComponent } from './encuesta-news/survey-news.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNewComponent,
    NewNavBarComponent,
    VideosComponent,
    SurveyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
