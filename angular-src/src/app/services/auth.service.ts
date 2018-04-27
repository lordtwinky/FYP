import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';


@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  group: any;
  groupID: String;

  constructor(private http:Http) { }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }


  //LIVE - HEROKU

  // registerUser(user){
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.post('users/register', user, {headers: headers})
  //   .map(res => res.json());
  // } 

  // createGroup(group){
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.post('groups/create', group, {headers: headers})
  //   .map(res => res.json());
  // } 

  // authenticateUser(user){
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.post('users/authenticate', user, {headers: headers})
  //   .map(res => res.json());
  // }

  // getProfile(){
  //   let headers = new Headers();
  //   this.loadToken();
  //   headers.append('Authorization', this.authToken);
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.get('users/profile', {headers: headers})
  //   .map(res => res.json());
  // }

  // getallGroups(){
  //   let headers = new Headers();
  //   return this.http.get('groups/groupList', {headers: headers})
  //   .map(res => res.json());
  // }

  // getQuestions(text){
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.post('https://questiongeneratingserver.herokuapp.com/', text, {headers: headers})
  //   .map(res => res.text());
  // }
  
  // createTopic(topic){
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.post('topics/createTopic', topic, {headers: headers})
  //   .map(res => res.json());
  // } 

  // createDocument(document){
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.post('documents/createDocument', document, {headers: headers})
  //   .map(res => res.json());
  // } 

  // getGroupPage(groupID){
  //   let headers = new Headers();
  //   return this.http.post('groups/grabGroup', groupID, {headers: headers})
  //   .map(res => res.json());
  // }

  // getTopicPage(topicID){
  //   let headers = new Headers();
  //   return this.http.post('topics/grabTopic', topicID, {headers: headers})
  //   .map(res => res.json());
  // }

  // joinGroup(userGroupIDs){
  //   let headers = new Headers();
  //   return this.http.post('groups/joinGroup', userGroupIDs, {headers: headers})
  //   .map(res => res.json());
  // }

  // updateDocumentEdit(docInfo){
  //   let headers = new Headers();
  //   return this.http.put('documents/updateDocumentEdit', docInfo, {headers: headers})
  //   .map(res => res.json());
  // }

  // updateDocumentDelete(docInfo){
  //   let headers = new Headers();
  //   return this.http.put('documents/updateDocumentDelete', docInfo, {headers: headers})
  //   .map(res => res.json());
  // }

  // updateDocumentAdd(docInfo){
  //   let headers = new Headers();
  //   return this.http.put('documents/updateDocumentAdd', docInfo, {headers: headers})
  //   .map(res => res.json());
  // }

  // findGroupOfTopic(topicID){
  //   let headers = new Headers();
  //   return this.http.post('topics/getGroupofTopic', topicID, {headers: headers})
  //   .map(res => res.json());
  // }

  // inviteUserToGroup(userGroupIDs){
  //   let headers = new Headers();
  //   return this.http.post('groups/inviteGroup', userGroupIDs, {headers: headers})
  //   .map(res => res.json());
  // }

  // leaveGroup(leaveGroup){
  //   let headers = new Headers();
  //   return this.http.post('users/leaveGroup', leaveGroup, {headers: headers})
  //   .map(res => res.json());
  // }





  //TESTING - localhost 3000





  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
    .map(res => res.json());
  } 

  createGroup(group){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/groups/create', group, {headers: headers})
    .map(res => res.json());
  } 

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/authenticate',user, {headers: headers})
    .map(res => res.json());
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:3000/users/profile', {headers: headers})
    .map(res => res.json());
  }


  getallGroups(){
    let headers = new Headers();
    return this.http.get('http://localhost:3000/groups/groupList', {headers: headers})
    .map(res => res.json());
  }

  getQuestions(text){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8000/', text, {headers: headers})
    .map(res => res.text());
  }
  
  createTopic(topic){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/topics/createTopic', topic, {headers: headers})
    .map(res => res.json());
  } 

  createDocument(document){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/documents/createDocument', document, {headers: headers})
    .map(res => res.json());
  } 

  getGroupPage(groupID){
    let headers = new Headers();
    return this.http.post('http://localhost:3000/groups/grabGroup', groupID, {headers: headers})
    .map(res => res.json());
  }

  getTopicPage(topicID){
    let headers = new Headers();
    return this.http.post('http://localhost:3000/topics/grabTopic', topicID, {headers: headers})
    .map(res => res.json());
  }

  joinGroup(userGroupIDs){
    let headers = new Headers();
    return this.http.post('http://localhost:3000/groups/joinGroup', userGroupIDs, {headers: headers})
    .map(res => res.json());
  }

  updateDocumentEdit(docInfo){
    let headers = new Headers();
    return this.http.put('http://localhost:3000/documents/updateDocumentEdit', docInfo, {headers: headers})
    .map(res => res.json());
  }

  updateDocumentDelete(docInfo){
    let headers = new Headers();
    return this.http.put('http://localhost:3000/documents/updateDocumentDelete', docInfo, {headers: headers})
    .map(res => res.json());
  }

  updateDocumentAdd(docInfo){
    let headers = new Headers();
    return this.http.put('http://localhost:3000/documents/updateDocumentAdd', docInfo, {headers: headers})
    .map(res => res.json());
  }

  findGroupOfTopic(topicID){
    let headers = new Headers();
    return this.http.post('http://localhost:3000/topics/getGroupofTopic', topicID, {headers: headers})
    .map(res => res.json());
  }

  inviteUserToGroup(userGroupIDs){
    let headers = new Headers();
    return this.http.post('http://localhost:3000/groups/inviteGroup', userGroupIDs, {headers: headers})
    .map(res => res.json());
  }

  inviteacceptdecline(acceptDecline){
    let headers = new Headers();
    return this.http.post('http://localhost:3000/users/inviteacceptdecline', acceptDecline, {headers: headers})
    .map(res => res.json());
  }

  leaveGroup(leaveGroup){
    let headers = new Headers();
    return this.http.post('http://localhost:3000/users/leaveGroup', leaveGroup, {headers: headers})
    .map(res => res.json());
  }



  
  
}
