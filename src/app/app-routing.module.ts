import { Routes, RouterModule } from '@angular/router';
import { APP_ROUTES } from './app-routes';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { TasksListComponent } from './components/list-page/tasks-list.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: `${APP_ROUTES.HOME}`,
        pathMatch: 'full'
    },
    {
        path: APP_ROUTES.HOME,
        component: TasksListComponent
    },
    {
        path: APP_ROUTES.FAV,
        component: TasksListComponent
    },
    {
        path: APP_ROUTES.DELETED,
        component: TasksListComponent
    },
    {
        path: APP_ROUTES.DETAIL,
        component: TaskDetailComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: [
    ]
})

export class AppRoutingModule {
}
