import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appDestroyer]'
})
export class DestroyerDirective {

  @Input("appDestroyer") set destroyIf(condition: boolean) {
  	if (!condition) {
  		this.vcRef.createEmbeddedView(this.templateRef);
  	} else {
  		this.vcRef.clear();
  	}
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
