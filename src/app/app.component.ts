import { Component, OnInit } from '@angular/core';
import { UserService } from './services/users/user.service';
import User from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  testUserInformation: any;

  constructor(private userService: UserService) {}

  loadTestUser(): void {
    const testUser = new User({
      id: '1',
      userName: 'UHNDLP37A',
      host: 'https://slack.com/',
      platform: 'slack',
      authToken: 'xoxp-594148390001-600462785248-594171728417-007debb46cb9578ee763bcb43aed54d1'
    });

    this.userService
      .retrieveUserInfo(testUser)
      .subscribe(
        response => (this.testUserInformation = response.user),
        error =>
          (this.testUserInformation =
            'Something went horribly wrong:\n' + error)
      );
  }
}
