import {Observable, Observer} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next from observer'),
    error: err => console.error('error observer',err),
    complete: () => console.info('Completed from observer')
}

//const obs$ = Observable.create() --->example

const obs$ = new Observable<string>(subs => {
    subs.next('Hello');
    subs.next('World');
    subs.next('Hi');
    subs.next('World');
    subs.complete(); // finish  process
});

// https://rxjs.dev/deprecations/subscribe-arguments
/*obs$.subscribe(
    value => console.log('next', value),
    error => console.warn('error',error),
    ()=> console.info('completed'),
)*/

// solved code deprecation
/*obs$.subscribe({
        next: (next) => console.log('next', next),
        error: (err) => console.log('error', err),
        complete: () => console.log('Complete')
    }
);*/

obs$.subscribe(observer);

