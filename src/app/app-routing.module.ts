import { NgModule } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule} from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';
import { SurveyComponent } from './encuesta-news/survey-news.component';
import { VideosComponent} from './videos-news/videos-news.component';
import { VideoDetalleComponent} from './video-detalle/video-detalle.component';
import {FormReactCreateAcountComponent} from './form-react-create-acount/form-react-create-acount.component';

// Al llamar la url se cargara el component
const routes: Routes = [
  {path:'survey',component:SurveyComponent},
  {path:'videos',component:VideosComponent},
  {path:'videos/detalle/:id',component:VideoDetalleComponent},
  {path:'createAcount',component:FormReactCreateAcountComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule , FormsModule, ReactiveFormsModule]
})
export class AppRoutingModule { }
