import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HttpClientModule } from '@angular/common/http';
//////////////////////////////////////////////////////////////////////////////////
////// Routes
const appRoutes: Routes = [
    { path: "**", component: AppComponent }
    // { path: "tasks", component: TasksComponent },
    // { path: "other", component: OtherComponent },
    // { path: "**", component: TasksComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes, { enableTracing: false })
    ],
    declarations: [AppComponent], //, TasksComponent, OtherComponent],
    //providers: [TaskService],
    bootstrap: [AppComponent]
})
export class AppModule { }