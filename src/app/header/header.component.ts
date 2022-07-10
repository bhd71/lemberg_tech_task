import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../styles.scss']
})
export class HeaderComponent implements OnInit {
  childData: boolean

  constructor() {
    this.childData = false
  }

  ngOnInit(): void {
  }

  emittedDataByChild(data: boolean) {
    this.childData = data;
  }
}
