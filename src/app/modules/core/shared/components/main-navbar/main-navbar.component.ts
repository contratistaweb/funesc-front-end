import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {
  searchShow:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeSearchShow (){
    this.searchShow = !this.searchShow;
  }

}
