import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent implements OnInit {
  date: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.date = new Date(Date.now()).getFullYear();
  }

}
