import { NgModule } from "@angular/core";
import { ReplacePipe } from "./replace.pape";


@NgModule({
    declarations: [
        ReplacePipe
    ],
    exports: [
        ReplacePipe
    ]

})
export class AppPipeModule {

}