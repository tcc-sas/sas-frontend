import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  subscription!: Subscription;
  constructor(
    private msgService: MessageService

  ) { }

  ngOnInit(): void {
    this.subscription = this.msgService.on('funcionarios', (data: any) => {
      console.log(data)
    })
  }

}
