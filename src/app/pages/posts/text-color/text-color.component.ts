import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-color',
  templateUrl: './text-color.component.html',
  styleUrls: ['./text-color.component.scss']
})
export class TextColorComponent implements OnInit {
  @Input("code") code: any = [];
  constructor() { }
  ngOnInit(): void {
    this.code = JSON.stringify(this.code, null, 4);
  }
}
