import { PortalHost } from '@angular/cdk/portal';
import {
  AfterViewInit,
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  Injector,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewRef
} from '@angular/core';

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
  @ViewChild('pageActions') portalActionsTmplRef;
  private disposeFn: () => void;
  private viewRef: ViewRef;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    // render the view
    const viewRef = this.viewContainerRef.createEmbeddedView(
      this.portalActionsTmplRef
    );
    viewRef.detectChanges();

    // grab the DOM element
    const outletElement = document.querySelector('#page-actions-container');

    // attach the view to the DOM element that matches our selector
    viewRef.rootNodes.forEach(rootNode => outletElement.appendChild(rootNode));

    // register a dispose fn we can call later
    // to remove the content from the DOM again
    this.disposeFn = () => {
      const index = this.viewContainerRef.indexOf(viewRef);
      if (index !== -1) {
        this.viewContainerRef.remove(index);
      }
    };
  }

  ngOnDestroy(): void {
    this.disposeFn();
    this.disposeFn = null;
  }
}
