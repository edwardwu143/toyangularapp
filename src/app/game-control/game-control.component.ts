import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameTic = new EventEmitter<number>();
  @Output() gameEnd = new EventEmitter<boolean>();  

  interval;
  count=0;  
  constructor() { }

  ngOnInit() {
  }

  onStart(){
    this.interval= setInterval(
        ()=>{
          this.gameTic.emit(this.count);
          this.count++; 
        },1000);
  }

  onStop(){ 
    clearInterval(this.interval);
    this.count=0;
    this.gameEnd.emit(true);
  }

}
