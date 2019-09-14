import { Component, OnInit, Input, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.sass']
})
export class LeftComponent implements OnInit {

  @Input()
  public buttonId: string
  constructor(private el: ElementRef, private re: Renderer2) { }

  ngOnInit() {
  }

  test(){
    console.log(this.el);
  }

}
