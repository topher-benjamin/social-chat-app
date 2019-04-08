export default class User {
  id: string = null;
  userName: string = null;
  host: string = null;
  platform: string = null; // Slack, HipChat, RocketChat, etc
  authToken: string = null; // TODO: find a real auth method
  _userData: any = null;

  constructor(data){
    if(!data.id){
      throw Error('No id, no new user')
    }

    this.id = data.id;
    this.host = data.host || this.host;
    this.userName = data.userName || this.userName;
    this.platform = data.platform || this.platform;
    this.authToken = data.authToken || this.authToken;
  }

  get userData(){
    return this._userData;
  }

  set userData(data){
    this._userData = data;
  }

}
