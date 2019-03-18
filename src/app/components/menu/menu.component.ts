import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material';
import { MainService } from '../../services/main.service';
import { Task } from '../../models/task';
import { SearcherComponent } from '../searcher/searcher.component';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../../app-routes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  public tasksList: Task[] = [];

  constructor(
    public dialog: MatDialog,
    private taskService: MainService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  private fetchTasksList() {
    this.taskService.tasksList().subscribe(data => this.tasksList = data);
  }

  public showNewTaskDialog() {
    const newTaskDialog = this.dialog.open(DialogComponent, {
      height: '450px',
      width: '500px'
    });
  }

  public showSearcher() {
    this.fetchTasksList();

    const searcherDialog = this.dialog.open(SearcherComponent, {
      height: '25%',
      width: '50%',
      data: this.tasksList,
      panelClass: 'transparent'
    });

    searcherDialog.afterClosed().subscribe(id => {
      this.taskService.setTaskId(id);
    });
  }

  public goToFavorites() {
    this.router.navigate([APP_ROUTES.FAV]);
  }

  public goToDeleted() {
    this.router.navigate([APP_ROUTES.DELETED]);
  }

  public goToHome() {
    this.router.navigate([APP_ROUTES.HOME]);
  }

}
