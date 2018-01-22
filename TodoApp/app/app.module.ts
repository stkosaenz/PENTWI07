
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent, TasksComponent, TaskListComponent, TaskService, TaskNewComponent } from "./app.component";
import { HttpClientModule } from '@angular/common/http';
//////////////////////////////////////////////////////////////////////////////////
////// Routes
const appRoutes: Routes = [
    { path: "**", component: AppComponent },
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
    declarations: [AppComponent, TasksComponent, TaskListComponent, TaskNewComponent], //, OtherComponent],
    providers: [TaskService],
    bootstrap: [AppComponent]
})
export class AppModule { }