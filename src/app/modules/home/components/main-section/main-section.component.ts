import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'],

})
export class MainSectionComponent implements OnInit {
  sections: any[] = [
    {id: '1', title: 'portal academico', description: '', textButton:'ver más', image: '/assets/images/instructor.jpg'},
    {id: '2', title: 'trabajo social', description: '', textButton:'ver más', image: '/assets/images/regalaton-funesc.jpg'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
