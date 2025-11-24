import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpStatusCode } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const authToken = localStorage.getItem('authToken');

        // Check if a token exists and the request is not already going to the Auth/Login endpoint
        if (authToken) {
            // Clone the request and add the Authorization header
            const modifiedRequest = request.clone({
                setHeaders: {
                    // Use the Bearer scheme for JWT authentication
                    Authorization: `Bearer ${authToken}`,
                    // Content-Type can be set here globally, but Angular often handles this based on the request body format.
                    // It is safer to leave Content-Type handling to the HttpClient service unless it specifically needs to be overridden.
                }
            });

            // Pass the cloned request to the next handler
            return next.handle(modifiedRequest).pipe(
                catchError(error => {
                    // Handle 401 Unauthorized errors globally
                    if (error.status === HttpStatusCode.Unauthorized) {
                        console.error('Unauthorized access. Token may be expired or invalid.');
                        // TODO: Implement token refresh or force logout/redirect to login page here.
                    }
                    return throwError(() => error);
                })
            );
        }

        // If no token is found, or if it's a public endpoint, proceed with the original request
        return next.handle(request);
    }
}