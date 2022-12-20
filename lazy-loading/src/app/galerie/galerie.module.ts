import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalerieRoutingModule } from './galerie-routing.module';
import { GalerieComponent } from './galerie.component';
import {TabViewModule} from 'primeng/tabview';
import {GalleriaModule} from 'primeng/galleria';
import {CarouselModule} from 'primeng/carousel';
import {DragDropModule} from 'primeng/dragdrop';
import { ChipModule } from 'primeng/chip';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [
    GalerieComponent
  ],
  imports: [
    CommonModule,
    GalerieRoutingModule,
    TabViewModule,
    GalleriaModule,
    CarouselModule,
    DragDropModule,
    ChipModule,
    ProgressSpinnerModule,
  ]
})
export class GalerieModule { }
