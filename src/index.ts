import {Observable} from 'rxjs';

//const obs$ = Observable.create() --->example

const obs$ = new Observable<string>(subs => {
    subs.next('Hello');
    subs.next('World')
    subs.complete(); // finish  process
});


obs$.subscribe(console.log)


