import { Directive, HostListener, ElementRef, Renderer2, Input} from '@angular/core';

@Directive({
  selector: '[app-draggable][dragAddClass]'
})
export class DragDirective {

  private _isDraggable: boolean = false;

  @Input('app-draggable')
  set isDraggable(flg: boolean){
    this._isDraggable = flg;
    this.re.setAttribute(this.el.nativeElement, 'draggable', `${flg}`);
  }

  get isDraggable(){
    return this._isDraggable;
  }
  @Input()
  private dragAddClass: string;
  constructor(private el: ElementRef, private re: Renderer2) { }
  @HostListener('dragstart', ['$event'])
  onDragStart(ev: Event){
    if(this.el.nativeElement === ev.target){
      this.re.addClass(this.el.nativeElement, this.dragAddClass);
      let s: any = ev;
      s.dataTransfer.setData("Text",s.target.id);
      console.log('dragstart');
    }
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(ev: Event){
    if(this.el.nativeElement === ev.target){
      this.re.removeClass(this.el.nativeElement, this.dragAddClass);
      console.log('drag end')
    }
  }

  @HostListener('drag', ['$event'])
  onDrag(ev: Event){
    if(this.el.nativeElement === ev.target){
     // console.log('drag')
    }
  }

}
