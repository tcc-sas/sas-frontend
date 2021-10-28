import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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

    this.subscription = this.msgService.on('funcionarios', (data: any) => {
      console.log(data)
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
