import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  monsterName: string = 'kaiju';
  monsterPower: number;

  hero: any ={
    name: '',
    power: null
  }

  monsters: any[] = [
    {
      monsterName: 'kaiju',
      monsterPower: null
    },
    {
      monsterName: 'smaug',
    monsterPower: null
  }
  ];
  monsterSelected;

  heroPower(){
    this.hero.power = Math.floor(Math.random() * 100);
  }

generatePower() {
 this.monsterSelected.monsterPower = Math.floor(Math.random() * 101);
}

  ngOnInit() {
    this.pickMonster();
}
pickMonster() {
  const index = Math.floor(Math.random() * this.monsters.length);
  this.monsterSelected = this.monsters[index];
}

}
