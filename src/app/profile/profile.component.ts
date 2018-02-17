import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs/Subscriber';

// import required services
import { GithubService } from './../services/github.service';

// import required interfaces
import { Repo } from './../interfaces/repo';
import { User } from './../interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  /**
   * @var User
   */
  user: User;

  /**
   * @var Repos[]
   */
  repos: Repo[];

  /**
   * @var string
   */
  username: string;

  constructor(private _githubServices: GithubService) {
  }

  searchUser() {
    // set username
    this._githubServices.updateUser(this.username);

    // get user informaion
    this._githubServices.getUser().subscribe(user => {
      this.user = user;
    });

    // get user's information
    this._githubServices.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }

  ngOnInit() {
  }

}
