import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Task } from '../../../models/task';
import { MainService } from 'src/app/services/main.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { APP_ROUTES } from '../../../app-routes';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.scss']
})
export class MyCardComponent implements OnInit {

  @Input() card: Task;
  @Input() iterations: String;
  @Input() counter: String;
  
  @ViewChild('favoriteButton') buttonFav: ElementRef;
  @ViewChild('deleteButton') buttonDel: ElementRef;

  public tasksList: Task[] = [];
  public categoryColor: String;

  constructor(
    private taskService: MainService,
    private router: Router
  ) { }

  ngOnInit() {
    this.categoryColor = this.taskService.setCategoryColor(this.card);
  }

  public removeTask(card: Task) {
    card.enable = !card.enable;
    card.enable === false ? this.buttonDel.nativeElement.style.color = 'red' : this.buttonDel.nativeElement.style.color = 'black';
    this.taskService.setDisable(card._id).subscribe();
  }

  public favoriteTask(card: Task) {
    card.favorite = !card.favorite;
    card.favorite === true ? this.buttonFav.nativeElement.style.color = '#feb236' : this.buttonFav.nativeElement.style.color = 'black';
    this.taskService.setFavorite(card._id).subscribe();
  }

  public emitClickedCard(card: Task) {
    this.router.navigate(['/detail', card._id]);
  }

  public deleteTask(card: Task) {
      this.taskService.deleteTask(card._id).subscribe();
  }

}
