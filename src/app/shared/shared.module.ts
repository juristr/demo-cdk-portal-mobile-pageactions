import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from '@angular/material';

import { ShellComponent } from './shell/shell.component';
import { PageActionsComponent } from './page-actions/page-actions.component';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';

const exportedModules = [
  LayoutModule,
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
  declarations: [ShellComponent, PageActionsComponent, ToolbarComponent],
  exports: [ShellComponent, PageActionsComponent, ...exportedModules]
})
export class SharedModule {}
