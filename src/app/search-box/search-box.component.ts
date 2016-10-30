import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Input('placeholder')
  text = 'Type your search';

  @Output('keyupEvent')
  keyupEevnt = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clear(input){
    console.log("It is cleared!.... ");
    input.value = '';
  }

  onKeyup(input){
    console.log("Keyup!.... ",input);
    this.keyupEevnt.emit(input);
  }

}
