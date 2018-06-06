import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule
} from '@angular/material';

import { ShellComponent } from './shell/shell.component';
import { PageActionsComponent } from './page-actions/page-actions.component';
import { RouterModule } from '@angular/router';

const exportedModules = [
  LayoutModule,
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  FlexLayoutModule,
  RouterModule
];

@NgModule({
  imports: [CommonModule, ...exportedModules],
  declarations: [ShellComponent, PageActionsComponent],
  exports: [ShellComponent, PageActionsComponent, ...exportedModules]
})
export class SharedModule {}
