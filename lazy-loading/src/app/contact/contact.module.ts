import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import {AccordionModule} from 'primeng/accordion';
import {SlideMenuModule} from 'primeng/slidemenu';
import {StepsModule} from 'primeng/steps';
import {Dock, DockModule} from 'primeng/dock';

@NgModule({
  declarations: [
    ContactComponent,
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    NgbProgressbarModule,
    AccordionModule,
    SlideMenuModule,
    StepsModule,
    DockModule,
  ],
})
export class ContactModule { }
