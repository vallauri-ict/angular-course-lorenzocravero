import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentList = [
    { name: "Lorenzo Cravero", hobby: "Calcio" , gender: "M"},
    { name: "Edoardo Abebei", hobby: "Coding" , gender: "M"},
    { name: "Ivan Angjelovski", hobby: "Palestra" , gender: "M"},
    { name: "Fabio Cavallero", hobby: "Calcio" , gender: "F"},
    { name: "Gleni Ruci", hobby: "Coding" , gender: "M"},
    { name: "Emanuele Altavlilla", hobby: "Calcio" , gender: "M"},
    { name: "Giada Valinotto", hobby: "Cinema" , gender: "F"},
    { name: "Michele Stefanachi", hobby: "Calcio" , gender: "M"},
    { name: "Paolo Giordano", hobby: "Cinema" , gender: "M"},
    { name: "Luca Pelissero", hobby: "Palestra" , gender: "M"},
    { name: "Bianca Teleman", hobby: "Coding" , gender: "F"},
    { name: "Gabriele Leone", hobby: "Palestra" , gender: "F"},
  ]

  student :any;
  constructor() { 
    //tutte le volte che verrà istanziato uno studente, uno di questi verrà preso a caso
    let n = Math.floor(Math.random() * this.studentList.length);
    this.student = this.studentList[n];
  }

  ngOnInit(): void {
  }

}
