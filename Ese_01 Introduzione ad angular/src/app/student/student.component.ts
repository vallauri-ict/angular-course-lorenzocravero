import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input()student:any;


  constructor() { 
    
  }

  private randomStudentPro(){
    //tutte le volte che verrà istanziato uno studente, uno di questi verrà preso a caso
    let n = Math.floor(Math.random() * 2);
    this.student.isPro = (n == 1);
  }

  onStudentClick(){
    this.student.isPro = !this.student.isPro;
  }

  ngOnInit(): void {
    this.randomStudentPro();
  }
}
