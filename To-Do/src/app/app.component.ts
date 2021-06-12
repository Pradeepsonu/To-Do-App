import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from './actions/tutorial.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  count$: Observable<number>;
constructor(private store: Store<{ count: number }>) {
  this.count$ = store.select('count');
}
 
ngOnInit(){

}

increment() {
  this.store.dispatch(increment());
}

decrement() {
  this.store.dispatch(decrement());
}

reset() {
  this.store.dispatch(reset());
}

}
