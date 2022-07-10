import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Output() emitData = new EventEmitter<boolean>();
  clicked: boolean;

  constructor() {
    this.clicked = false;
  }

  sendData() {
    this.clicked = !this.clicked
    this.emitData.emit(this.clicked)
  }


  ngOnInit(): void {
  }

}
