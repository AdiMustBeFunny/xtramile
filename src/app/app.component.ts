import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CourseFromApi } from './model/CourseFromApi';
import { Person } from './model/Person';
import { PersonCourse } from './model/PersonCourse';
import { PersonProject } from './model/PersonProject';
import { ApiDataToPersonArrayMapperService } from './services/api-data-to-person-array-mapper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'course-statistics';
  people?: Person[]
  private apiUrl='/api'

  constructor(private http:HttpClient, private apiDataMapper:ApiDataToPersonArrayMapperService){}

  ngOnInit(){
    this.http.get<CourseFromApi[]>(this.apiUrl).subscribe(result =>{
      this.people = this.apiDataMapper.map(result)
    })
  }
}

