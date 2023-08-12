import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable } from "rxjs";
import { UserServiceService } from "./user/user-service.service";

@Injectable()

export class AppInterceptor implements HttpInterceptor {
    constructor(private userService: UserServiceService) { }
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.userService.token

        if (token) {
            req = req.clone({
                setHeaders: {
                    'X-Authorization': token,
                    'Content-Type': 'application/josn'
                }
            })
        }

        return next.handle(req);
    }
}

export const AppInterceptorProvider: Provider = {
    multi: true,
    useClass: AppInterceptor,
    provide: HTTP_INTERCEPTORS
}