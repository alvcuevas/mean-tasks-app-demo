import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Task } from '../../models/task';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {

  public choices: Task[] = [];
  public selectedId: string;
  public displayChoices = false;
  @ViewChild('searchInput') searchInput: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<SearcherComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task[]
  ) { }

  ngOnInit() {
  }

  public findChoices(value: string) {
    if (value !== ' ') {
      this.displayChoices = true;
      this.choices = this.data.filter(task => {
        return task.title.toLowerCase().includes(value.toLowerCase());
      });
    }
  }

  public getChoice(choice: Task) {
    this.searchInput.nativeElement.value = choice.title;
    this.selectedId = choice._id;
  }

  public searchValue(value: string) {
    if (value !== ' ') {
      this.dialogRef.close(this.selectedId);
    }
  }

}
