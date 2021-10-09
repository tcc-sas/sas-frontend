import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  pressedBtn: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onClickBtn(btn: string) {
    this.pressedBtn = btn;
  }

}
