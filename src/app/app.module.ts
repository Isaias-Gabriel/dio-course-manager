import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AutofocusFixModule } from 'ngx-autofocus-fix';

import { AppComponent } from './app.component';
import { CourseModule } from './courses/course.module';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    CourseModule,
    CoreModule,

    AutofocusFixModule.forRoot(),

    RouterModule.forRoot([
      // root route
      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full',
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
