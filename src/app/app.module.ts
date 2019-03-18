import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule,
         MatCardModule,
         MatMenuModule,
         MatIconModule,
         MatDividerModule,
         MatDialogModule,
         MatGridListModule,
         MatFormFieldModule,
         MatInputModule,
         MatButtonModule,
         MatSelectModule,
         MatTooltipModule
        } from '@angular/material';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainService } from './services/main.service';
import { TasksListComponent } from './components/list-page/tasks-list.component';
import { MyCardComponent } from './components/list-page/my-card/my-card.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { NewTaskFormComponent } from './components/new-task-form/new-task-form.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { SearcherComponent } from './components/searcher/searcher.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomePageComponent,
    TasksListComponent,
    MyCardComponent,
    DialogComponent,
    NewTaskFormComponent,
    TaskDetailComponent,
    SearcherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    MatSelectModule,
    MatTooltipModule
  ],
  entryComponents: [
    DialogComponent,
    SearcherComponent
  ],
  providers: [
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
