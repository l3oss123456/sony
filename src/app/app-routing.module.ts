import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user/user.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import {CheckbillComponent} from './checkbill/checkbill.component'

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: ProductComponent,
      },
      {
         path: 'checkbill',
        component: CheckbillComponent,
      },
      
      
     
      
    ],
  },
  {
    path: 'user',
    component: UserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
