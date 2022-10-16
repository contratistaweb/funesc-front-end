import {Component, Input, OnInit} from '@angular/core';
import {SubscribeSectionInterface} from "../../../interfaces/subscribe-section.interface";

@Component({
  selector: 'subscribe-section',
  templateUrl: './subscribe-section.component.html',
  styleUrls: ['./subscribe-section.component.scss']
})
export class SubscribeSectionComponent implements OnInit {

  @Input() subscribe: SubscribeSectionInterface = {
    text: 'Suscribase a nuestro boletín de cursos.',
    textButton: 'Suscribirme',
    classes: 'bg-primary text-light'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
