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
import {
  DomPortalHost,
  TemplatePortal,
  PortalHost,
  CdkPortal
} from '@angular/cdk/portal';

@Component({
  selector: 'app-page-actions',
  template: `
  <ng-template cdk-portal #pageActions>
    <ng-content></ng-content>
  </ng-template>
  `,
  styles: []
})
export class PageActionsComponent implements OnInit, AfterViewInit, OnDestroy {
  private portalHost: PortalHost;
  @ViewChild(CdkPortal) portal;
  @ViewChild('pageActions') portalActionsTmplRef;
  private disposeFn: () => void;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private injector: Injector,
    private appRef: ApplicationRef
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    const outletElement = document.querySelector('#page-actions-container');

    const viewContainer = this.viewContainerRef;
    const viewRef = viewContainer.createEmbeddedView(this.portalActionsTmplRef);
    viewRef.detectChanges();

    // attach the view to the DOM element that matches our selector
    viewRef.rootNodes.forEach(rootNode => outletElement.appendChild(rootNode));

    // register a dispose fn we can call later
    // to remove the content from the DOM again
    this.disposeFn = () => {
      const index = viewContainer.indexOf(viewRef);
      if (index !== -1) {
        viewContainer.remove(index);
      }
    };
  }

  ngOnDestroy(): void {
    this.disposeFn();
    this.disposeFn = null;
  }
}
