import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import User from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  upadateName!: string;
  upadateBalance!: number;
  updateDayOfTracking!: number;
  @Output() editedUser: EventEmitter<User> = new EventEmitter<User>()

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  SaveUser(){
    const editedUser={} as User
    editedUser.id=1;
    editedUser.name=this.upadateName;
    editedUser.dayoftracking=this.updateDayOfTracking;
    editedUser.balance=this.upadateBalance;
    this.editedUser.emit(editedUser)
  }

}
