import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/model/Person';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent{
  @Input()
  people: Person[] = []

}
