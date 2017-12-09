import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public showUserList = false;
  public showTweetList = false;

  updateUserList(res) {
    this.showUserList = res;
  }

  updateTweetList(res) {
    this.showTweetList = res;
  }
}
