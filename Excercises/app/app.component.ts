import { Component, OnInit, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

//////////////////////////////////////////////////////////////////////////
///// Service
@Injectable()
export class TaskService {
    tasks: Array<{}>;

    constructor(private _http: HttpClient) { }

    getTasks() {
        console.log("Getting Tasks!");
        var self = this;
        this._http.get("/tasks.json").subscribe((data: {}) => {
            self.tasks = data.data;
        });


    }
}
//////////////////////////////////////////////////////////////////////////
///// Tasks Component

@Component({
    selector: 'tasks',
    template: `
    <h4 [class.red]="toggle">This is Tasks Component</h4>    
    <ul>
        <li *ngFor="let task of taskService.tasks">{{ task.title }}</li>
    <ul>
    <!-- 
    // {{ taskService.tasks | json }}
    <input [(ngModel)]="sample" >
    <span>{{ sample }}</span>
    
    <button (click)="onClick()">Click me!</button>
    
    <span>{{ num }}</span>
    
    <span>{{ numbers | json }}</span>
    
    
    <h5 *ngIf="toggle">Hello World</h5>

     <ul>
        <li *ngFor="let person of people">
            {{ person }}
        </li>
    </ul> 
    
    -->

    `,
    styles: [".red { color : red }", ".blue {color: blue }"]
})

export class TasksComponent implements OnInit {
    constructor(public taskService: TaskService) { }
    num: number = 7;
    sample: string = "";
    numbers: Array<number> = [7, 12, 14];
    people: Array<string> = ["Person1", "Person2", "Person3"];
    toggle: boolean = true;
    ngOnInit() {
        this.taskService.getTasks();
    }
    onClick() {
        alert("Click!");
    }
}

//////////////////////////////////////////////////////////////////////////
///// Dummy Component
@Component({
    selector: 'other',
    template: 'Other <strong>Other</strong> Other'
})

export class OtherComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
//////////////////////////////////////////////////////////////////////////
///// App Component
@Component({
    selector: "my-app",
    template: `
        <h1>Hello World!</h1>
        <a href="" [routerLink]="['tasks']">Tasks</a>
        <a href="" [routerLink]="['other']">Other</a>
        <router-outlet></router-outlet>
    `
})

export class AppComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
