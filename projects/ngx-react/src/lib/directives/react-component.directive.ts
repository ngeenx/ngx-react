import { Directive, ElementRef, inject, Input, OnChanges, OnDestroy } from "@angular/core"
import { ComponentProps, createElement, ElementType } from "react"
import { createRoot } from "react-dom/client"

@Directive({
  selector: "[reactComponent]",
  standalone: true
})
export class ReactComponentDirective<Comp extends ElementType> implements OnChanges, OnDestroy {
  @Input() public reactComponent!: Comp
  @Input() public props?: ComponentProps<Comp>
  @Input() public children: any

  private root = createRoot(inject(ElementRef).nativeElement)

  /**
   * Executes when the input properties of the component are changed.
   *
   * @return {void}
   */
  public ngOnChanges(): void {
    this.root.render(
      createElement(
        this.reactComponent,
        this.props,
        this.children?.map((child: any) =>
          createElement(child as React.FC<any>, {
            key: child.name,
            ...child.props
          })
        )
      )
    )
  }

  /**
   * Method called when the component is being destroyed.
   *
   * @return {void}
   */
  public ngOnDestroy(): void {
    this.root.unmount()
  }
}
