import { Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
    { path: 'clients/create', component: CreateComponent},
    {
      path: 'Customers',
      component: ListComponent,
      data: { title: 'client List' }
    },
    { path: '',
      redirectTo: '/Customers',
      pathMatch: 'full'
    },
    { path: '**', component: ListComponent }
  ];
