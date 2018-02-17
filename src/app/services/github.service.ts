import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  private apiRoot = 'https://api.github.com';
  private username: string;
  private clientId = '';
  private clientSecret = '';

  constructor(private http: Http) {
    this.username = '';
  }

  /**
   * This will get users information.
   *
   * @description get users information
   * @returns object
   */
  getUser() {
    // create url
    const Url = `${this.apiRoot}/users/` + this.username;

    // add perameters to url
    const search  = new URLSearchParams();
    search .set('client_id', this.clientId);
    search .set('client_secret', this.clientSecret);

    // call http request with get method
    return this.http.get(Url, { search }).map(res => res.json());
  }


  /**
   * get user's repositories and their
   * information from github service
   *
   * @description get users ropositories information
   * @returns array
   */
  getRepos() {
    // create url
    const Url = `${this.apiRoot}/users/` + this.username + '/repos';

    // add perameters to url
    const search  = new URLSearchParams();
    search .set('client_id', this.clientId);
    search .set('client_secret', this.clientSecret);

    // call http request with get method
    return this.http.get(Url, { search }).map(res => res.json());
  }

  /**
   * Set username
   *
   * @param username
   */
  updateUser(username: string) {
    this.username = username;
  }
}
