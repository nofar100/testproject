import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-cancel-popup',
  templateUrl: './cancel-popup.component.html',
  styleUrls: ['./cancel-popup.component.scss']
})
export class CancelPopupComponent implements OnInit {

  answer!:boolean
  @Output() answerEvent: EventEmitter<boolean>= new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  sendAnswer(answer: boolean){
    this.answerEvent.emit(answer)
  }
}
