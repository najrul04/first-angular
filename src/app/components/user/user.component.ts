import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];
  number = 0;

  get imagePath() { 
    return 'assets/users/' + this.selectedUser.avatar;
  }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser = DUMMY_USERS[randomIndex];
    console.log("Clicked")
  }

  onCount(){
     this.number = this.number + 1;
    console.log("Number Button clicked")
  }
}
