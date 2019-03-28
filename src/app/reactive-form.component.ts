import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserService } from './services/user-service';
import { User } from './domain/user';
import { Profile } from './domain/profile';

@Component({
   selector: 'app-reactive',
   templateUrl: './reactive-form.component.html'
})
export class ReactiveFormComponent implements OnInit {
  isValidFormSubmitted = null;
  allProfiles: Profile[];
  userForm = new FormGroup({
     userName: new FormControl('', [Validators.required, Validators.minLength(5)]),
     gender: new FormControl('', Validators.required),
     profile: new FormControl('', Validators.required),
     isTCAccepted: new FormControl('', Validators.requiredTrue)
  });
  user = new User();
  constructor(private userService: UserService) {
  }
  ngOnInit() {
     this.allProfiles = this.userService.getPofiles();
  }
  onFormSubmit() {
     this.isValidFormSubmitted = false;
     if (this.userForm.invalid) {
        return;
     }
     this.isValidFormSubmitted = true;
     this.user = this.userForm.value;
     this.userService.createUser(this.user);
     this.userForm.reset();
  }
  get userName() {
     return this.userForm.get('userName');
  }
  get gender() {
     return this.userForm.get('gender');
  }
  get profile() {
     return this.userForm.get('profile');
  }
  get isTCAccepted() {
     return this.userForm.get('isTCAccepted');
  }
}
