import { Component, OnInit } from '@angular/core';
import { User, UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'exercise';
  service !: UserService;
  user!: User[];
  constructor(){
    this.service = new UserService();
  }

  clickButton(user:User){
    // document.getElementById("id")?.innerHTML="";
    document.getElementById("id")?.setAttribute('value',user.id.toString());
    document.getElementById("name")?.setAttribute('value',user.name);
    document.getElementById("age")?.setAttribute('value',user.age.toString());
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
      this.user = this.service.getData();
      console.log(this.user);}
  }



