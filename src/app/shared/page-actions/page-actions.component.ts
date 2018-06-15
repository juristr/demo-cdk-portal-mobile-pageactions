import {
  AfterViewInit,
  Component,
  EmbeddedViewRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
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
  private viewRef: EmbeddedViewRef<{}>;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    // render the view
    this.viewRef = this.viewContainerRef.createEmbeddedView(
      this.portalActionsTmplRef
    );
    this.viewRef.detectChanges();

    // grab the DOM element
    const outletElement = document.querySelector('#page-actions-container');

    // attach the view to the DOM element that matches our selector
    this.viewRef.rootNodes.forEach(rootNode =>
      outletElement.appendChild(rootNode)
    );

    // register a dispose fn we can call later
    // to remove the content from the DOM again
    this.disposeFn = () => {};
  }

  ngOnDestroy(): void {
    const index = this.viewContainerRef.indexOf(this.viewRef);
    if (index !== -1) {
      this.viewContainerRef.remove(index);
    }
  }
}
