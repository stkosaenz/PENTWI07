import { Component, OnInit, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

export class Task {
    title: string;
    completed: boolean;
}

// ------------------- TaskListComponent ------------------------------//
@Injectable()
export class TaskService {
    tasks: Array<Task>;
    constructor() {
        this.tasks = [
            { title: "First Task", completed: false },
            { title: "Second Task", completed: false },
            { title: "Third Task", completed: false },
            { title: "Fourth Task", completed: false },
            { title: "Fifth Task", completed: false }
        ];
    }

    addTask(task: Task) {
        this.tasks.push(task);
    }
}

// ------------------- AppComponent ------------------------------//
@Component({
    selector: "my-app",
    template: `
    <tasks></tasks>
    `
})

export class AppComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}

// ------------------- TaskComponent ------------------------------//
@Component({
    selector: "tasks",
    template: `
    <h1>Task List Application.</h1>
    <task-new></task-new>
    <task-list></task-list>
    `
})

export class TasksComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}

// ------------------- TaskListComponent ------------------------------//
@Component({
    selector: "task-list",
    template: `
    <h4>Task List</h4>
    <ul>
        <li *ngFor="let task of taskService.tasks">
            <span [class.completed]="task.completed">{{ task.title}} - {{ task.completed }}</span>
            <button (click)="completeTask(task)">Click to Complete</button>
        </li>
    </ul>
    `,
    styles: [
        ".completed { color: green }"
    ]
})

export class TaskListComponent implements OnInit {
    constructor(public taskService: TaskService) { }

    ngOnInit() { }

    completeTask(task: Task) {
        task.completed = true;
    }
}

// ------------------- TasNewComponent ------------------------------//
@Component({
    selector: "task-new",
    template: `
    <h4>Create a Task</h4>
    <form (submit)="onSubmit()">
        <input  name="title" [(ngModel)]="task.title">
        <input type="submit">
    </form>
    `
})

export class TaskNewComponent implements OnInit {
    task: Task;
    constructor(public taskService: TaskService) {
        this.task = { title: "", completed: false }
    }

    onSubmit() {
        this.taskService.addTask(this.task);
        this.task = { title: "", completed: false };
    }
    ngOnInit() { }
}