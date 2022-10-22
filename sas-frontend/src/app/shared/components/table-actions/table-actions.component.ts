import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BroadcastType } from '../../models/broadcast.models';
import { OutputAction } from '../../models/output-action';

@Component({
  selector: 'app-table-actions',
  templateUrl: './table-actions.component.html',
  styleUrls: ['./table-actions.component.scss']
})
export class TableActionsComponent implements OnInit {

  @Input() rowId!: string;
  @Input() constants: any;
  @Input() tableOptions: any;
  @Output() outputAction = new EventEmitter<OutputAction>();
  
  BroadcastType = BroadcastType;

  constructor() { }

  ngOnInit(): void {
  }

  output(rowId: string, action: BroadcastType){
    let actionToOutput: OutputAction = {
      id: rowId,
      action: action
    };
    this.outputAction.emit(actionToOutput);
  }

  

}
