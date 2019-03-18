import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Observable } from 'rxjs';
import { Task } from '../../models/task';
import { ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  
  public tasks: Task[];
  public filter = {};
  public path: string;

  constructor(
    private taskService: MainService,
    private route: ActivatedRoute
  ) {
    this.path = this.route.snapshot.routeConfig.path;
  }

  ngOnInit() {
    this.checkUrlPath(this.path);
  }

  private checkUrlPath(path: string) {
    switch (path) {
      case 'home':
        return this.getCompleteTasksList();
      case 'favorites':
        return this.getFavoriteTasks();
      case 'deleted':
        return this.getDeletedTasks();
      case 'detail':
        return this.getCompleteTasksList();
    }
  }

  private getCompleteTasksList() {
    this.taskService.tasksList().subscribe(data => this.tasks = data);
  }

  private getFavoriteTasks() {
    this.filter = { favorite: true };
    this.taskService.filterTask(this.filter).subscribe(data => this.tasks = data);
  }

  private getDeletedTasks() {
    this.filter = { enable: false };
    this.taskService.filterTask(this.filter).subscribe(data => this.tasks = data);
  }


}
