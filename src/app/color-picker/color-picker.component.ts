import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {RED,BLUE} from '../constants';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

  RED = RED;
  BLUE = BLUE;

  @Input()
  color:string;

  @Output("color")
  colorOutput = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(colorName){
    this.color = colorName;
    console.log("ColorName:",colorName);
    this.colorOutput.emit(colorName);
  }


  reset(){
    this.onClick("#efefef");
  }

}
