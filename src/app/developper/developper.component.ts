import { Component, OnInit } from '@angular/core';
import { developper } from '../shared/model/developper.model';
import { skill } from '../shared/model/skill.model';






@Component({
  selector: 'app-developper',
  templateUrl: './developper.component.html',
  styleUrls: ['./developper.component.css']
})
export class DevelopperComponent implements OnInit {
  developper:developper

  constructor() { 
    this.developper=new developper("karima","kouaouci",39,"feminin","developpeur web junior",[new skill("php","",""),new skill("","","")])
  }

  ngOnInit(): void {
    this.developper
  }

}
