import { Component, OnInit} from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Observable } from 'rxjs/internal/Observable';
import { Task } from '../../models/task';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public tasks: Task[] = [];

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit() {
    this.mainService.tasksList().subscribe(data => this.tasks = data);
  }

}
