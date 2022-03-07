import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-table-template',
  templateUrl: './filter-table-template.component.html',
  styleUrls: ['./filter-table-template.component.scss']
})
export class FilterTableTemplateComponent implements OnInit {

  @Input() data: any;
  @Input() constants: any;
  @Input() selectOptions: any;
  
  constructor() { }

  ngOnInit(): void {
  }
  
}
