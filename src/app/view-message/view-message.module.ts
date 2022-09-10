import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewMessagePage } from './view-message.page';
import { CountUpModule } from 'ngx-countup';
import { IonicModule } from '@ionic/angular';
import { ViewMessagePageRoutingModule } from './view-message-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountUpModule,
    ViewMessagePageRoutingModule
  ],
  declarations: [ViewMessagePage]
})
export class ViewMessagePageModule {}
