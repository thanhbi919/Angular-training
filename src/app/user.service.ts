import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user : User[] = [];
  public getData(): User[] {
    this.user.push(new User(1,'Nguyen Xuan Thanh',12));
    this.user.push(new User(2,'Vu Duc Tuyen',18));
    this.user.push(new User(3,'Nguyen Van Thanh',22));
    return this.user;
  }

  constructor() { }
}
export class User{

  constructor(
    public id:number,
    public name:string,
    public age:number
  ){
  }
}
