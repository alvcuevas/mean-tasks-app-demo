import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Task } from '../../models/task';
import { MainService } from '../../services/main.service';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from '../../models/category';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.scss']
})
export class NewTaskFormComponent implements OnInit {

  public newTaskForm: FormGroup;
  public categories: Observable<Category[]>;

  constructor(
    private formBuilder: FormBuilder,
    private taskService: MainService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.getCategories();
  }

  private buildForm() {
    this.newTaskForm = this.formBuilder.group({
      title: [null, Validators.required],
      desc: [null, Validators.required],
      category: [null, Validators.required],
    });
  }

  public submit() {
    const newTask = this.modelData(this.newTaskForm);
    this.taskService.addTask(newTask).subscribe(_ =>
    this.newTaskForm.reset()
    );
  }

  private modelData(formData: FormGroup): Task {
    const newTask: Task = {
      title: formData.value.title,
      description: formData.value.desc,
      category: formData.value.category,
      status: 'in-progress'
    };
    return newTask;
  }

  public getCategories() {
    this.categories = this.taskService.getCategories();
  }
}
