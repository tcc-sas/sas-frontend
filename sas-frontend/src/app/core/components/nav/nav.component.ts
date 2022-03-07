import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private authService: AuthService) { }

  userName: string = '';
  
  ngOnInit(): void {
    this.userName = this.authService.getUserData().name;
  }

  logout(){
    this.authService.logout();
  }

}
