import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.scss']
})
export class TableDetailsComponent implements OnInit {

  @Input() data: any;
  @Input() constants: any;

  constructor() { }

  ngOnInit(): void {
  }

}
