import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule } from '@angular/forms';
import  { TutorialReducer } from './reducers/tutorial.reducer';

//import { ToDoEffects } from './ToDo/todo.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ count: TutorialReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
