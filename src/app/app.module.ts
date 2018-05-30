import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { ServicesModule } from './services/services.module';
import { SidenavBarComponent } from './sidenav-bar/sidenav-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LfSerialComponent } from './lf-serial/lf-serial.component';
import { LfSerialRangeComponent } from './lf-serial-range/lf-serial-range.component';
import { LfDtpassClassComponent } from './lf-dtpass-class/lf-dtpass-class.component';
import { LfIssuingAuthComponent } from './lf-issuing-auth/lf-issuing-auth.component';
import { LfRefLtrComponent } from './lf-ref-ltr/lf-ref-ltr.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavBarComponent,
    HeaderComponent,
    FooterComponent,
    LfSerialComponent,
    LfSerialRangeComponent,
    LfDtpassClassComponent,
    LfIssuingAuthComponent,
    LfRefLtrComponent
  ],
  imports: [
    ServicesModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    MatRadioModule,
    MatMenuModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
