import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MainService } from '../../services/main.service';
import { Task } from '../../models/task';
import { ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {

  @ViewChild('label') labelInput: ElementRef;
  public taskId: string;
  public tasks: Task[];
  public task: Task;
  public showLabels = false;
  public labels: string[] = [];
  public isDisabled: boolean;
  public category: string;
  public categoryColor: string;

  constructor(
    private taskService: MainService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.taskService.tasksList().subscribe(data => this.tasks = data);
    this.route.params.subscribe(params => {
      this.taskId = params['id'];
      this.getTaskDetails(this.taskId);
    });

  }

  private getTaskDetails(id: string) {
    this.taskService.taskDetails(id).subscribe(data => {
      this.task = data;
      this.category = this.task.category;
      this.categoryColor = this.taskService.setCategoryColor(this.task);
      this.isDisabled = this.task.enable === true ? false : true;
    });
  }

  public displayLabelSection() {
    this.showLabels = !this.showLabels;
  }

  public pickLabels(label: string) {
    const exists = this.labels.find(item => item === label);

    if (!exists) {
      if (label !== '') {
        this.labels.push(label);
        this.labelInput.nativeElement.value = '';
      }
    }
  }

  public removeLabel(selectedLabel: string) {
    this.labels = this.labels.filter(label => label !== selectedLabel);
  }

}
