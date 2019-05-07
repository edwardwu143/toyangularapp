import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameCount:Array<number>=[];

  toggleGame(count:number){
    this.gameCount.push(count); 
    console.log(this.gameCount);
  }

  endGame(endStatus:boolean){
    if(endStatus){
      this.gameCount.length=0; 
    }
  }
}
