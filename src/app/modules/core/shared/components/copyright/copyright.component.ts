import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent implements OnInit {
  year: number = new Date(Date.now()).getFullYear();

  constructor() { }

  ngOnInit(): void { }

}
