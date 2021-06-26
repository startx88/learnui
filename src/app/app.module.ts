import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { rootReducer } from './store';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { HomeComponent } from './views/home/home.component';
import { AppRouterModule } from './app.router.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CoursesComponent } from './views/courses/courses.component';
import { DetailComponent } from './views/detail/detail.component';
import { CategoryEffect } from './store/effects/category.effect';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CoursesComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([CategoryEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
      logOnly: environment.production,
      autoPause: true,
    }),
    AppRouterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
