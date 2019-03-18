import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Task } from '../models/task';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private idSubject = new BehaviorSubject<string>('');
  public idObservable = this.idSubject.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  public tasksList(): Observable<Task[]> {
    return this.http.get<Task[]>('http://localhost:6500');
  }

  public addTask(task: Task): Observable<Task> {
    return this.http.post<Task>('http://localhost:6500/add', task);
  }

  public taskDetails(id: string): Observable<Task> {
    return this.http.get<Task>(`http://localhost:6500/detail/${id}`);
  }

  public editTask(id: string, task: Task): Observable<Task> {
    return this.http.put<Task>(`http://localhost:6500/edit/${id}`, task);
  }

  public setFavorite(id: string): Observable<Task> {
    return this.http.put<Task>(`http://localhost:6500/favorite/${id}`, {});
  }

  public setDisable(id: string): Observable<Task> {
    return this.http.put<Task>(`http://localhost:6500/disable/${id}`, {});
  }

  public deleteTask(id: string): Observable<Task> {
    return this.http.delete<Task>(`http://localhost:6500/delete/${id}`);
  }

  public countTasks(): Observable<Task> {
    return this.http.get<Task>('http://localhost:6500/count');
  }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:6500/categories');
  }

  public filterTask(data: { [key: string]: any }): Observable<Task[]> {
    const params = this.filterConstructor(data);
    return this.http.get<Task[]>('http://localhost:6500/filter', { params });
  }

  private filterConstructor(data: { [key: string]: any }): HttpParams {
    return this.setParams(data);
  }

  public setParams(data: { [key: string]: any }): HttpParams {
    const http = new HttpParams();
    if (data.enable === false) {
      return http.set('enable', data.enable.toString());
    } else if (data.favorite === true) {
      return http.set('favorite', data.favorite.toString());
    } else {
      return http.set('category', data.category);
    }
  }

  public setTaskId(id: string) {
    this.idSubject.next(id);
  }

  public setCategoryColor(card: Task): string {
    switch (card.category) {
      case 'Business':
        return '#0EABB8';

      case 'Personal':
        return '#9EE78D';

      case 'Family':
        return '#ED6BCF';

      case 'University':
        return '#DAB7F0';
    }
  }

}
