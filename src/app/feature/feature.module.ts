import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { CateogryComponent } from './cateogry/cateogry.component';



@NgModule({
  declarations: [
    ProductListComponent,
    CateogryComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ProductListComponent,
    CateogryComponent
  ]
})
export class FeatureModule { }
