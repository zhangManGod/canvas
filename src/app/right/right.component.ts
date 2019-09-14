import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { fabric } from 'fabric';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.sass']
})
export class RightComponent implements OnInit {

  // @ViewChild('canvas_test1') canvas_test1: ElementRef;
  constructor() { }
  canvas: any;

  ngOnInit() {
    let canva1 = new fabric.Canvas('myCanvas');
    console.log(fabric.version);
    let rect = new fabric.Rect({
      top : 100,
      left : 100,
      width : 120,
      height : 30,
      fill : 'red'
  });
  canva1.add(rect);
  }

  test(data: any){
    console.log('right ++++++' + data);
    let canvas = new fabric.Canvas('ccc');
    let rect = new fabric.Rect({
      top : data.layerX,
      left : data.layerY,
      width : 120,
      height : 30,
      fill : 'red'
  });

  canvas.add(rect);
    //const canvasEl: HTMLCanvasElement = this.canvas_test1.nativeElement;
    // let ctx: CanvasRenderingContext2D = canvasEl.getContext('2d');
    // ctx.beginPath();
    // ctx.fillStyle="#FF0000";
    // ctx.fillRect(data.layerX,data.layerY,120,30);
    // ctx.closePath();
    // ctx.fill();
  }

}
