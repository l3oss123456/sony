import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'User',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public name:string;
  public age:number;

  public address:{
    street:string,
    province:string,
    postcode:string;
  };

  public skills:string[];

  constructor() { }

  ngOnInit(): void {
    this.name = "Supasorn Udomphan";
    this.age = 22;

    this.address = {
      street: "North Pattaya",
      province: "Pattaya",
      postcode: "20150"
    };

    this.skills = ["React", "Angular"];
  }

  addSkill(newSkill){
    this.skills.unshift(newSkill);
    // this.skills.push(newSkill);
    return false;
  }

  removeSkill(skill) {
    this.skills.forEach((element, index) => {
      if(element == skill) {
        this.skills.splice(index, 1);
      }
    });
    return false;
  }
}
