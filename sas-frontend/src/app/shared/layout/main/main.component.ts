import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  pressedBtn: string = '';
  isAdminUser: boolean = false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isAdminUser = this.authService.isAdminUser();
  }

  onClickBtn(btn: string) {
    this.pressedBtn = btn;
  }



}
