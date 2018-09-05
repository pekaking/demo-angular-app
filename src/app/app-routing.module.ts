import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { BindingComponent } from './binding/binding.component';

const routes: Routes = [
  { path: 'example', component: ExampleComponent },
  { path: 'binding', component: BindingComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
