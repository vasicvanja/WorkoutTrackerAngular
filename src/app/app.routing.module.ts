import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled', // scrolls to top on navigation
        anchorScrolling: 'enabled'           // also enables anchor (#id) scrolling
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }