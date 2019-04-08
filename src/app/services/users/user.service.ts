import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import User from 'src/app/models/user';
import { propertyConstants } from '../../../assets/constants';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(
    private http: HttpClient) { }

  retrieveUserInfo(user: User): Observable<any>{
    console.log('User',user);
    return this.constructRequest(user);
  }

  constructRequest(user: User): any{
    if(user.platform === propertyConstants.slack.platform){
      return this.constructSlackRequest(user);
    }
    console.log('UserService.constructRequest: platform not found');
    return null;
  }

  constructSlackRequest(user: User): Observable<any> {
    const params = {
      token: user.authToken,
      user: user.userName
    }

    return this.http.get(user.host + propertyConstants.slack.userInfo, {params:params})
  }

}
