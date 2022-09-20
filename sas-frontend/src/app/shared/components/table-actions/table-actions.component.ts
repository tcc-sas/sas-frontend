import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-actions',
  templateUrl: './table-actions.component.html',
  styleUrls: ['./table-actions.component.scss']
})
export class TableActionsComponent implements OnInit {

  @Input() rowId!: string;
  @Input() constants: any;
  @Input() tableOptions: any;
  @Output() deleteDataById = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  deleteRow(rowId: string){
    this.deleteDataById.emit(rowId);
  }

}
