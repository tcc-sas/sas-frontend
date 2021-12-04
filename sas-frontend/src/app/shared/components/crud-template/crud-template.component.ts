import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-template',
  templateUrl: './crud-template.component.html',
  styleUrls: ['./crud-template.component.scss']
})
export class CrudTemplateComponent implements OnInit {

  @Input() data: any;
  @Input() constants: any;
  
  constructor() { }

  ngOnInit(): void {
  }
  
}
