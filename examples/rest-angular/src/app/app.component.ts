import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from './user.service';
import { Subject } from 'rxjs';
import { switchMap, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  userForm = new FormGroup({
    username: new FormControl('')
  });
  submit = new Subject();

  user$ = this.submit.pipe(
    withLatestFrom(this.userForm.valueChanges),
    switchMap(([_, userForm]) => this.userService.login(userForm))
  );

  constructor(private userService: UserService) {}

  onSubmit() {
    this.submit.next();
  }
}
