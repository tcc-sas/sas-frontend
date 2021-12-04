import { Component, OnDestroy, OnInit } from '@angular/core';
import { observable, Observable, Subscription } from 'rxjs';
import { Constants } from 'src/app/app-constants';
import { FuncionarioService } from 'src/app/service/funcionario.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss']
})
export class FuncionariosComponent implements OnInit, OnDestroy {

  constants = Constants.funcionarios;
  data: any;
  subscription!: Subscription;
  
  constructor(
    private funcionarioService: FuncionarioService,
    private msgService: MessageService
  ) { }


  ngOnInit(): void {
    this.funcionarioService.getAllFuncionarios().subscribe(
      (result) => this.data = result
    );

    this.listenToMessages();
  }

  private listenToMessages(): void {
    this.subscription = this.msgService.listen('funcionarios',
      (data: any) => {
        if(data['action'] == "reload"){
         return console.log('reload')
        }

        if(data['action'] == "filter"){
          return console.log('filter')
         }
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
