import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProgressLoaderComponent} from './components/progress-loader/progress-loader.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProgressLoaderComponent, TopNavComponent],
  exports: [ProgressLoaderComponent, TopNavComponent]
})
export class SharedModule { }
