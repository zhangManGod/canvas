import { Directive, HostListener, ElementRef, Renderer2, Input, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[app-droppable]'
})
export class DropDirective {

  @Output()
  public dropOut: EventEmitter<any> = new EventEmitter()
  constructor(private el: ElementRef, private re: Renderer2) { }

  @HostListener('dragenter', ['$event'])
  onDragEnter(ev: Event){
    if(this.el.nativeElement === ev.target){
      console.log('dragenter');
    }
  }

  @HostListener('dragover', ['$event'])
  onDragOver(ev: Event){
    ev.preventDefault();
    if(this.el.nativeElement === ev.target){
      console.log('dragover');
    }
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(ev: Event){
    if(this.el.nativeElement === ev.target){
      console.log('dragleave');
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(ev: Event){
    ev.preventDefault();
    if(this.el.nativeElement === ev.target){
      console.log('drop---' + ev.target);
      this.dropOut.emit(ev);
      // let a: any = ev;
      // let data = a.dataTransfer.getData("Text");
      // a.target.appendChild(document.getElementById(data));
    }
  }
}
