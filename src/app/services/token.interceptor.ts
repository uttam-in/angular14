import { Injectable } from '@angular/core';  
import {  
    HttpRequest,  
    HttpHandler,  
    HttpEvent,  
    HttpInterceptor,  
    HttpResponse
} from '@angular/common/http';  
 
import { Observable } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";
import { tap } from 'rxjs/operators';
  
@Injectable()  
export class TokenInterceptor implements HttpInterceptor {  
    constructor(private spinner: NgxSpinnerService) {}  
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
        
      request = request.clone({  
        setHeaders: {  
          Authorization: `Bearer ${localStorage.getItem('token')}`  
        }  
      });    
      return next.handle(request).pipe(
        tap(
          event => this.handleResponse(request, event),
          error => this.handleError(request, error)
        )
      );
    }  

    handleResponse(req: HttpRequest<any>, event: any) {
      //console.log('Handling response for ', req.url, event);
      if (event instanceof HttpResponse) {
        // console.log('Request for ', req.url,
        //     ' Response Status ', event.status,
        //     ' With body ', event.body);
      }
    }
  
    handleError(req: HttpRequest<any>, event:any) {
      // console.error('Request for ', req.url,
      //       ' Response Status ', event.status,
      //       ' With error ', event.error);
    }
  }  