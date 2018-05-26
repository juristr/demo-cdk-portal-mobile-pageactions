import {
  Component,
  OnInit,
  AfterViewInit,
  ComponentFactoryResolver,
  Injector,
  ViewContainerRef,
  ApplicationRef,
  ViewChild,
  OnDestroy
} from '@angular/core';
import { DomPortalHost, TemplatePortal, PortalHost } from '@angular/cdk/portal';

@Component({
  selector: 'app-page-actions',
  template: `
  <ng-template #pageActions>
    <ng-content></ng-content>
  </ng-template>
  `,
  styles: []
})
export class PageActionsComponent implements OnInit, AfterViewInit, OnDestroy {
  private portalHost: PortalHost;
  private portal;
  @ViewChild('pageActions') pageHeaderTmplRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private viewContainerRef: ViewContainerRef,
    private appRef: ApplicationRef
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    // Create a portalHost from a DOM element
    this.portalHost = new DomPortalHost(
      document.querySelector('#page-actions-container'),
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    );

    // Locate the component factory for the HeaderComponent
    this.portal = new TemplatePortal(
      this.pageHeaderTmplRef,
      this.viewContainerRef
    );

    // Attach portal to host
    this.portalHost.attach(this.portal);
  }

  ngOnDestroy(): void {
    this.portalHost.detach();
  }
}
