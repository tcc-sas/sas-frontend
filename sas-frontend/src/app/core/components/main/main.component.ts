import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  subMenu: string = '';
  pressedBtn: string = '';
  isAdminUser: boolean = false;
  isMenuExpanded: boolean = true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isAdminUser = this.authService.isAdminUser();
  }

  onClickBtn(btn: string) {
    this.pressedBtn = btn;
  }

  openSubMenu(menu: string){
    this.subMenu = this.subMenu != menu ? menu : '';
  }



}
