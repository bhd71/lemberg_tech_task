import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dropdown-navigation',
  templateUrl: './dropdown-navigation.component.html',
  styleUrls: ['./dropdown-navigation.component.scss']
})
export class DropdownNavigationComponent implements OnInit {
  @Input() item: boolean
  isRender: boolean

  constructor() {
    this.item = false;
    this.isRender = false
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isRender = true;
    }, 1000)
  }

}
