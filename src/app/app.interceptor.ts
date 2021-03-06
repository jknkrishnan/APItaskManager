import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/dematerialize';
import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent, HttpResponse, HTTP_INTERCEPTORS } 
from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {        

        return Observable.of(null).mergeMap(() => {                                 

            if (request.url.endsWith('api/Parent') && request.method === 'POST') {                
                
                request = request.clone({url: 'assets/testdata/Parent.json',method:"POST"});   

            }

            if (request.url.endsWith('api/Task') && request.method === 'POST') {
                
                request = request.clone({url: 'assets/testdata/Task.json',method:"POST"});   

            }

            return next.handle(request);

        }).materialize().delay(5).dematerialize();
    }

}

export let fakeService = {
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true    

}; 