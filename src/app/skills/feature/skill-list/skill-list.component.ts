import {Component, OnInit} from '@angular/core';
import {SkillsDataService} from "../../data-access/skills-data.service";
import {Observable} from "rxjs";
import {Skill} from "../../data-access/skill";

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
})
export class SkillListComponent implements OnInit {
    constructor(private readonly dataService: SkillsDataService) {
    }

    skillList!: Observable<Skill[]>;

    skillForm: Skill = {
      name: '',
      tags: [],
      from: 0,
      to: 100
    };

    tagForm = '';

    ngOnInit(): void {
      this.skillList = this.dataService.data$;
    }

    add(): void {
      if (this.skillForm.name !== '') {
        this.skillForm.tags = this.tagForm.split(' ');
        this.dataService.create(this.skillForm);
        this.skillForm = {
          name: '',
          tags: [],
          from: 0,
          to: 100
        }
      }
    }

    up(index: number): void {
      this.dataService.up(index);
    }

    down(index: number): void {
      this.dataService.down(index);
    }

    delete(index: number): void {
      this.dataService.delete(index);
    }
}
