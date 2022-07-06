import { ReplacePipe } from './pipe/replace.pape';
import { CourseListComponent } from './courses/course-list.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StarComponent } from './star/star.component';
import { NavBarComponent } from './nav-bar/nav-bar.componet';
import { RouterModule } from '@angular/router';
import { Error404Compoennt } from './error-404/error-404.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Compoennt


  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: 'courses', component: CourseListComponent 
      },
      {
        path: '**', component: Error404Compoennt
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
