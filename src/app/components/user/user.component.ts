import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  number = 0;

 @Input() avatar!: string;
 @Input() name!: string;


  get imagePath() { 
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    console.log("Clicked")
  }

  onCount(){
     this.number = this.number + 1;
    console.log("Number Button clicked")
  }
}
