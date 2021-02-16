import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./component/error-404/error-404.component";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";

@NgModule({
    declarations: [
        NavBarComponent,
        Error404Component,
    ],
    imports: [
        RouterModule.forChild([
            // default route in cause no other route is found
            {
                path: '**',
                component: Error404Component,
            },
        ]),
    ],
    exports: [
        NavBarComponent,
    ],
})
export class CoreModule {

}