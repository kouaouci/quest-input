import { Component, Input } from '@angular/core';
import { skill } from '../shared/model/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent   {
  @Input() public  skill:skill | undefined;
}

 