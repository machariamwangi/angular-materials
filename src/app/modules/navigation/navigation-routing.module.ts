import { DragdropComponent } from './components/dragdrop/dragdrop.component';
import { TableComponent } from './components/table/table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: NavComponent,
  chidren:[
              {path: 'dashboard', component: DashboardComponent},
              {path: 'table', component: TableComponent},
              {path: 'dragdrop', component: DragdropComponent}
          ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
