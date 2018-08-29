import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  hobbies: string[] = ["Yoga", "Photography"];
  inputValue: string;  // увлечение - результат ввода
  openHobbies: boolean = false;
  private addHobbies: string;
  private getHobbies: string;

  constructor() {}

  ngOnInit() {
    this.getHobbies = JSON.parse(localStorage.getItem("Hobbies")); // получаем данные с localStorage
    for (let i = this.hobbies.length; i < this.getHobbies.length; i++) {
      this.hobbies.push(this.getHobbies[i]);
    }
  }

  pushHobby() {  // запись увлечений в массив
    if(this.inputValue === "" || typeof this.inputValue === 'undefined') {
      alert("Error: enter correct value");
    }
    else if (this.hobbies.length > 4) {
      alert("Please stop!");
    }
    else {
      this.hobbies.push(this.inputValue);
      this.setLocalStorage(); // отправляем в localStorage
    }
    this.inputValue = "";
  }

  clickHobbies() {
    this.openHobbies = !this.openHobbies;
  }

  setLocalStorage() {
    this.addHobbies = JSON.stringify(this.hobbies);  
    localStorage.setItem("Hobbies", this.addHobbies);
  }
}
