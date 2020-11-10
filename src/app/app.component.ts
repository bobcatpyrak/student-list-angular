import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  btnStyle: string = "btn btn-primary";
  students: any[] = [];
  studentCollection: any[] = [
    {name: "Tonya", favnum: 743747, favcolor: "orange"},
    {name: "Kali", favnum: 2, favcolor: "blue"},
    {name: "Hung", favnum: 323, favcolor: "dark coral"},
    {name: "Jackson", favnum: 777776, favcolor: "chartreuse"},
    {name: "Mark", favnum: 1, favcolor: "black"},
    {name: "Christian", favnum: 14, favcolor: "burnt sepia"},
    {name: "Jonathan", favnum: 16, favcolor: "teal"},
    {name: "Manami", favnum: 0, favcolor: "fuck"},
    {name: "Tracy", favnum: 25, favcolor: "medium spring green"},
    {name: "Elena", favnum: 12, favcolor: "blue"},
    {name: "Marc", favnum: 1000000, favcolor: "cinnabar"}
    
  ];
  title = 'student-list-angular';

  changeColor(): void {
    this.btnStyle = "btn btn-danger";
  }
  getStudents(): void
  {
    this.students = this.studentCollection;
  }
}
