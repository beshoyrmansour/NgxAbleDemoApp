import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {ClickOutsideModule} from 'ng-click-outside';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

import { ToggleFullScreenDirective } from '@app/shared/fullscreen/toggle-fullscreen.directive';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from '@app/shared/accordion';
import { CardToggleDirective } from '@app/shared/card/card-toggle.directive';

import { LoaderComponent } from './loader/loader.component';
import { TitleComponent } from '@app/layout/admin/title/title.component';
import { CardComponent } from '@app/shared/card/card.component';
import { ModalBasicComponent } from '@app/shared/modal-basic/modal-basic.component';
import { ModalAnimationComponent } from '@app/shared/modal-animation/modal-animation.component';
import { SpinnerComponent } from '@app/shared/spinner/spinner.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    HttpClientModule,
    
    PerfectScrollbarModule,
    ClickOutsideModule,
    MDBBootstrapModule.forRoot()
  ],
  declarations: [
    LoaderComponent,

    ToggleFullScreenDirective,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    CardToggleDirective,
    TitleComponent,
    CardComponent,
    ModalBasicComponent,
    ModalAnimationComponent,
    SpinnerComponent
  ],
  exports: [
    LoaderComponent,

    ToggleFullScreenDirective,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    CardToggleDirective,
    HttpClientModule,
    TitleComponent,
    CardComponent,
    ModalBasicComponent,
    ModalAnimationComponent,
    SpinnerComponent,
    
    PerfectScrollbarModule,
    ClickOutsideModule,
    MDBBootstrapModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class SharedModule { }
