import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("#txtName") txtName !: ElementRef;
  title = '5B INF 2021/22';
  /*studentList = [
    { name: "Lorenzo Cravero", hobby: "Calcio" , gender: "M", isPro : false},
    { name: "Edoardo Abebei", hobby: "Coding" , gender: "M", isPro : false},
    { name: "Ivan Angjelovski", hobby: "Palestra" , gender: "M", isPro : false},
    { name: "Fabio Cavallero", hobby: "Calcio" , gender: "F", isPro : false},
    { name: "Gleni Ruci", hobby: "Coding" , gender: "M", isPro : false},
    { name: "Emanuele Altavlilla", hobby: "Calcio" , gender: "M", isPro : false},
    { name: "Giada Valinotto", hobby: "Cinema" , gender: "F", isPro : false},
    { name: "Michele Stefanachi", hobby: "Calcio" , gender: "M", isPro : false},
    { name: "Paolo Giordano", hobby: "Cinema" , gender: "M", isPro : false},
    { name: "Luca Pelissero", hobby: "Palestra" , gender: "M", isPro : false},
    { name: "Bianca Teleman", hobby: "Coding" , gender: "F", isPro : false},
    { name: "Alessandro Gassmann", hobby: "Cinema" , gender: "M", isPro : false},
    { name: "Ettore Esposito", hobby: "Coding" , gender: "F", isPro : false},
    { name: "Alberto Savoldelli", hobby: "Calcio" , gender: "M", isPro : false},
  ]*/

  studentList : any [] = [];
  studentName : string = "";
  studentHobby : string = "";
  studentGender: string = "";

  addStudent(){
    let newStudent = { name: this.studentName, hobby: this.studentHobby , gender: this.studentGender, isPro : false};
    this.studentList.push(newStudent);
    this.studentName = "";
    this.studentHobby = "";
    this.studentGender = "";
  }
}
