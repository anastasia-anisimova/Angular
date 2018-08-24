import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  hobbies: string[] = ["Yoga", "Photography"]; // массив с увлечениями
  inputValue: string;  // увлечение - результат ввода
  openHobbies: boolean = false; // развернуть/свернуть интересы
  private addHobbies: string; // вспомогательная переменная для отправки данных в localStorage
  private getHobbies: string; // вспомогательная переменная для получения данных в localStorage

  constructor() {}

  ngOnInit() {
    this.getHobbies = JSON.parse(localStorage.getItem("Hobbies")); // получаем данные с localStorage
    for (let i = this.hobbies.length; i < this.getHobbies.length; i++) {
      this.hobbies.push(this.getHobbies[i]); // добавляем в массив hobbies новые данные
    }
  }

  pushHobby() {  // запись увлечений в массив
    if(this.inputValue === "" || typeof this.inputValue === 'undefined') {// пустая строка?
      alert("Error: enter correct value");
    }
    else if (this.hobbies.length > 4) {  // количество увлечений ограничено
      alert("Please stop!");
    }
    else {   // все хорошо, записываем
      this.hobbies.push(this.inputValue);
      this.setLocalStorage(); // отправляем в localStorage
    }
    this.inputValue = "";  // очищаем строку для ввода *делаем красиво
  }

  clickHobbies() {  // при нажатии на "Click me"
    this.openHobbies = !this.openHobbies;  // свернуть/развернуть интересы
  }

  setLocalStorage() { // добавляем данные в localStorage
    this.addHobbies = JSON.stringify(this.hobbies); // сериализуем имеющийся массив
    localStorage.setItem("Hobbies", this.addHobbies);
  }
}
