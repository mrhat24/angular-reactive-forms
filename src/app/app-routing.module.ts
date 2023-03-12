import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import {
  ReactiveFormSimpleExampleComponent
} from './pages/reactive-form-simple-example/reactive-form-simple-example.component';
import { appRoutes } from './routes';

const routes: Routes = [
  {
    path: appRoutes.index,
    component: IndexComponent
  },
  {
    path: appRoutes.simpleExample,
    component: ReactiveFormSimpleExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
