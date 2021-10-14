import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentList = [
    { name: "Lorenzo Cravero", hobby: "Calcio" , gender: "M", isPro : false},
    { name: "Edoardo Abebei", hobby: "Coding" , gender: "M", isPro : false},
    { name: "Ivan Angjelovski", hobby: "Palestra" , gender: "M", isPro : true},
    { name: "Fabio Cavallero", hobby: "Calcio" , gender: "F", isPro : true},
    { name: "Gleni Ruci", hobby: "Coding" , gender: "M", isPro : false},
    { name: "Emanuele Altavlilla", hobby: "Calcio" , gender: "M", isPro : false},
    { name: "Giada Valinotto", hobby: "Cinema" , gender: "F", isPro : true},
    { name: "Michele Stefanachi", hobby: "Calcio" , gender: "M", isPro : false},
    { name: "Paolo Giordano", hobby: "Cinema" , gender: "M", isPro : false},
    { name: "Luca Pelissero", hobby: "Palestra" , gender: "M", isPro : true},
    { name: "Bianca Teleman", hobby: "Coding" , gender: "F", isPro : true},
    { name: "Gabriele Leone", hobby: "Palestra" , gender: "F", isPro : false},
  ]

  student :any;
  constructor() { 
    this.randomStudent();
  }

  private randomStudent(){
    //tutte le volte che verrà istanziato uno studente, uno di questi verrà preso a caso
    let n = Math.floor(Math.random() * this.studentList.length);
    this.student = this.studentList[n];
  }

  onStudentClick(){
    this.randomStudent();
  }

  ngOnInit(): void {
  }

}
