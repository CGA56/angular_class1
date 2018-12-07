import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyComponent } from './encuesta-news/survey-news.component';
import { VideosComponent} from './videos-news/videos-news.component';
import { VideoDetalleComponent} from './video-detalle/video-detalle.component';

// Al llamar la url se cargara el component
const routes: Routes = [
  {path:'survey',component:SurveyComponent},
  {path:'videos',component:VideosComponent},
  {path:'videos/detalle/:id',component:VideoDetalleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
