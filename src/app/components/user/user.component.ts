import { Component, computed, EventEmitter, Input, input, Output} from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  number = 0;
@Input({required: true}) id!: string;
 @Input({required: true}) avatar!: string;
 @Input({required: true}) name!: string;
 @Output() select = new EventEmitter();
// avatar = input.required<string>()
// name = input.required<string>()

// imagePath = computed(() => {
//   return 'assets/users/' + this.avatar();
// })

  get imagePath() { 
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    // this.avatar.set()
    this.select.emit(this.id);
    console.log("Clicked")
  }

  onCount(){
     this.number = this.number + 1;
    console.log("Number Button clicked")
  }
}
