webpackJsonp([1,4],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.username == undefined || user.email == undefined || user.password == undefined || user.username.trim() === "" || user.email.trim() === "" || user.password.trim() === "") {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=C:/meanauthapp/angular-src/src/validate.service.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(884);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
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
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.createGroup = function (group) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/groups/create', group, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getallGroups = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.http.get('http://localhost:3000/groups/groupList', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getQuestions = function (text) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8000/', text, { headers: headers })
            .map(function (res) { return res.text(); });
    };
    AuthService.prototype.createTopic = function (topic) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/topics/createTopic', topic, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.createDocument = function (document) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/documents/createDocument', document, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getGroupPage = function (groupID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.http.post('http://localhost:3000/groups/grabGroup', groupID, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getTopicPage = function (topicID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.http.post('http://localhost:3000/topics/grabTopic', topicID, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.joinGroup = function (userGroupIDs) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.http.post('http://localhost:3000/groups/joinGroup', userGroupIDs, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateDocumentEdit = function (docInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.http.put('http://localhost:3000/documents/updateDocumentEdit', docInfo, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateDocumentDelete = function (docInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.http.put('http://localhost:3000/documents/updateDocumentDelete', docInfo, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateDocumentAdd = function (docInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.http.put('http://localhost:3000/documents/updateDocumentAdd', docInfo, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.findGroupOfTopic = function (topicID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.http.post('http://localhost:3000/topics/getGroupofTopic', topicID, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.inviteUserToGroup = function (userGroupIDs) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.http.post('http://localhost:3000/groups/inviteGroup', userGroupIDs, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.inviteacceptdecline = function (acceptDecline) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.http.post('http://localhost:3000/users/inviteacceptdecline', acceptDecline, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.leaveGroup = function (leaveGroup) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.http.post('http://localhost:3000/users/leaveGroup', leaveGroup, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=C:/meanauthapp/angular-src/src/auth.service.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (values, searchParam) {
        if (searchParam === undefined)
            return values;
        return values.filter(function (value) {
            return value.name.toLowerCase().includes(searchParam.toLowerCase());
        });
    };
    FilterPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filter'
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], FilterPipe);
    return FilterPipe;
}());
//# sourceMappingURL=C:/meanauthapp/angular-src/src/filter.pipe.js.map

/***/ }),

/***/ 469:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 469;


/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(588);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/meanauthapp/angular-src/src/main.js.map

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(864),
            styles: [__webpack_require__(853)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/meanauthapp/angular-src/src/app.component.js.map

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validate_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_question_generator_question_generator_component__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_groups_groups_component__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_group_page_group_page_component__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_topic_page_topic_page_component__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipes_filter_pipe__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_group_create_group_create_component__ = __webpack_require__(589);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'QGTool', component: __WEBPACK_IMPORTED_MODULE_15__components_question_generator_question_generator_component__["a" /* QuestionGeneratorComponent */] },
    { path: 'Groups', component: __WEBPACK_IMPORTED_MODULE_16__components_groups_groups_component__["a" /* GroupsComponent */] },
    { path: 'GroupPage', component: __WEBPACK_IMPORTED_MODULE_17__components_group_page_group_page_component__["a" /* GroupPageComponent */] },
    { path: 'GroupPage/:id', component: __WEBPACK_IMPORTED_MODULE_17__components_group_page_group_page_component__["a" /* GroupPageComponent */] },
    { path: 'TopicPage/:id', component: __WEBPACK_IMPORTED_MODULE_18__components_topic_page_topic_page_component__["a" /* TopicPageComponent */] },
    { path: 'CreateGroup', component: __WEBPACK_IMPORTED_MODULE_20__components_group_create_group_create_component__["a" /* GroupCreateComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_question_generator_question_generator_component__["a" /* QuestionGeneratorComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_groups_groups_component__["a" /* GroupsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_group_page_group_page_component__["a" /* GroupPageComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_topic_page_topic_page_component__["a" /* TopicPageComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pipes_filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_20__components_group_create_group_create_component__["a" /* GroupCreateComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_19__pipes_filter_pipe__["a" /* FilterPipe */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/meanauthapp/angular-src/src/app.module.js.map

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupCreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GroupCreateComponent = (function () {
    function GroupCreateComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.setting = 1;
    }
    GroupCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.admin = profile.user._id;
        }, function (err) {
            return false;
        });
    };
    GroupCreateComponent.prototype.onCreateGroup = function () {
        var _this = this;
        var group = {
            name: this.name,
            admin: this.admin,
            setting: this.setting,
            school: this.school
        };
        if (this.name.trim() === "" || this.name == undefined) {
            this.flashMessage.show('Please fill in the group name field', { cssClass: 'alert-danger', timeout: 3000 });
        }
        else {
            this.authService.createGroup(group).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show('Group created successfully', { cssClass: 'alert-success', timeout: 3000 });
                    _this.router.navigate(['/GroupPage', data.groupID]);
                }
                else {
                    _this.flashMessage.show('The group name ' + name + ' has already been taken. Please try again with a new name.', { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
    };
    GroupCreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-group-create',
            template: __webpack_require__(865),
            styles: [__webpack_require__(854)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], GroupCreateComponent);
    return GroupCreateComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/meanauthapp/angular-src/src/group-create.component.js.map

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GroupPageComponent = (function () {
    function GroupPageComponent(validateService, flashMessage, authService, router, route) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.topics = [];
        this.joinBool = true;
        this.admin = false;
        this.setting = 1;
    }
    GroupPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.groupID = params['id'];
        });
        var groupI = {
            groupID: this.groupID
        };
        var groupIDd = this.groupID;
        this.authService.getGroupPage(groupI).subscribe(function (data) {
            _this.group = data.group;
            _this.setting = data.group.setting;
            _this.topicIDs = data.group.topics;
            _this.groupAdmin = data.group.admin;
            for (var i = 0; i < _this.topicIDs.length; i++) {
                var topicI = {
                    topicID: _this.topicIDs[i]
                };
                _this.authService.getTopicPage(topicI).subscribe(function (data) {
                    _this.topics.push(data.topic);
                });
            }
        });
        this.authService.getProfile().subscribe(function (profile) {
            _this.loggedInUserID = profile.user._id;
            var userGroups = profile.user.groups;
            if (profile.user._id == _this.groupAdmin) {
                _this.admin = true;
            }
            for (var i = 0; i < userGroups.length; i++) {
                if (userGroups[i] == groupIDd) {
                    _this.joinBool = false;
                }
            }
        }, function (err) {
            return false;
        });
    };
    GroupPageComponent.prototype.onCreateTopic = function () {
        var _this = this;
        if (this.name == "" || this.name == undefined) {
            this.flashMessage.show('Please enter a topic name to create one', { cssClass: 'alert-danger', timeout: 3000 });
        }
        else if (this.name.trim() === "") {
            this.flashMessage.show('Please enter a topic name to create one', { cssClass: 'alert-danger', timeout: 3000 });
        }
        else {
            var topic = {
                topicName: this.name,
                groupID: this.groupID
            };
            this.authService.createTopic(topic).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show('Topic created successfully', { cssClass: 'alert-success', timeout: 3000 });
                    _this.topics.push(data.topic);
                }
                else {
                    _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
    };
    GroupPageComponent.prototype.joinGroup = function () {
        var _this = this;
        this.joinBool = false;
        var userGroupIDs = {
            groupID: this.groupID,
            userID: this.loggedInUserID
        };
        this.authService.joinGroup(userGroupIDs).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now a member of this group!', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    GroupPageComponent.prototype.inviteUser = function () {
        var _this = this;
        if (this.usernameInvite == "" || this.usernameInvite == undefined) {
            this.flashMessage.show('Please enter a username to invite to group', { cssClass: 'alert-danger', timeout: 3000 });
        }
        else if (this.usernameInvite.trim() === "") {
            this.flashMessage.show('Please enter a username to invite to group', { cssClass: 'alert-danger', timeout: 3000 });
        }
        else {
            var userGroupIDs = {
                groupID: this.groupID,
                username: this.usernameInvite
            };
            this.authService.inviteUserToGroup(userGroupIDs).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show('Invitation has been sent to ' + _this.usernameInvite + ' successfully', { cssClass: 'alert-success', timeout: 3000 });
                }
                else {
                    if (data.msg == "This user is already a member of this group") {
                        _this.flashMessage.show(_this.usernameInvite + ' is already a member of the group', { cssClass: 'alert-danger', timeout: 3000 });
                    }
                    else if (data.msg == "This user already has an invite for this group") {
                        _this.flashMessage.show(_this.usernameInvite + ' already has an invite for the group', { cssClass: 'alert-danger', timeout: 3000 });
                    }
                    else {
                        _this.flashMessage.show('The username ' + _this.usernameInvite + ' does not exist', { cssClass: 'alert-danger', timeout: 3000 });
                    }
                }
            });
        }
    };
    GroupPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-group-page',
            template: __webpack_require__(866),
            styles: [__webpack_require__(855)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === 'function' && _e) || Object])
    ], GroupPageComponent);
    return GroupPageComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/meanauthapp/angular-src/src/group-page.component.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_filter_pipe__ = __webpack_require__(379);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GroupsComponent = (function () {
    function GroupsComponent(validateService, flashMessage, authService, router, route, filter) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.filter = filter;
        this.groupNames = [];
    }
    GroupsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.admin = profile.user._id;
        }, function (err) {
            console.log(err);
            return false;
        });
        this.getGroups();
    };
    GroupsComponent.prototype.getGroups = function () {
        var _this = this;
        this.authService.getallGroups().subscribe(function (data) {
            _this.groupNames = data.groups;
        });
    };
    GroupsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-groups',
            template: __webpack_require__(867),
            styles: [__webpack_require__(856)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__pipes_filter_pipe__["a" /* FilterPipe */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__pipes_filter_pipe__["a" /* FilterPipe */]) === 'function' && _f) || Object])
    ], GroupsComponent);
    return GroupsComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=C:/meanauthapp/angular-src/src/groups.component.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.slide = 1;
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log(this.slide);
    };
    HomeComponent.prototype.nextSlide = function () {
        if (this.slide == 3) {
            this.slide = 1;
        }
        else {
            this.slide++;
        }
    };
    HomeComponent.prototype.previousSlide = function () {
        if (this.slide == 1) {
            this.slide = 3;
        }
        else {
            this.slide--;
        }
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(868),
            styles: [__webpack_require__(857)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/meanauthapp/angular-src/src/home.component.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.rememberme = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password,
            rememberme: this.rememberme
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 3000 });
                _this.router.navigate(['profile']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 3000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(869),
            styles: [__webpack_require__(858)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/meanauthapp/angular-src/src/login.component.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(870),
            styles: [__webpack_require__(859)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/meanauthapp/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.groupNames = [];
        this.inviteNames = [];
        this.groups = [];
        this.invites = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.userID = profile.user._id;
            _this.groupNames = profile.groups;
            _this.inviteNames = profile.invites;
            _this.inviteIDs = profile.user.invites;
            if (profile.success) {
                for (var i = 0; i < profile.user.groups.length; i++) {
                    var groupID = {
                        groupID: profile.user.groups[i]
                    };
                    _this.authService.getGroupPage(groupID).subscribe(function (data) {
                        if (data.group !== undefined) {
                            _this.groups.push(data.group);
                        }
                    }, function (err) {
                        return false;
                    });
                }
                if (i == profile.user.groups.length) {
                    for (var i = 0; i < profile.user.invites.length; i++) {
                        var groupID = {
                            groupID: profile.user.invites[i]
                        };
                        _this.authService.getGroupPage(groupID).subscribe(function (data) {
                            if (data.group !== undefined) {
                                _this.invites.push(data.group);
                            }
                        }, function (err) {
                            return false;
                        });
                    }
                }
            }
        }, function (err) {
            return false;
        });
    };
    ProfileComponent.prototype.accept = function (inviteObject, i) {
        //frontend
        var _this = this;
        this.groups.push(inviteObject);
        this.invites.splice(i, 1);
        //backend
        var acceptdeclineObject = {
            userID: this.userID,
            acceptdecline: 1,
            inviteID: inviteObject._id,
        };
        this.authService.inviteacceptdecline(acceptdeclineObject).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now a member of this group!', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    ProfileComponent.prototype.decline = function (inviteObject, i) {
        //frontend
        var _this = this;
        this.invites.splice(i, 1);
        //backend
        var acceptdeclineObject = {
            userID: this.userID,
            acceptdecline: 0,
            inviteID: inviteObject._id
        };
        this.authService.inviteacceptdecline(acceptdeclineObject).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now a member of this group!', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    ProfileComponent.prototype.leaveGroup = function (groupObject, i) {
        //frontend
        var _this = this;
        this.groups.splice(i, 1);
        //backend
        var leaveGroup = {
            userID: this.userID,
            groupID: groupObject._id
        };
        this.authService.leaveGroup(leaveGroup).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You have successfully left the group.', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(871),
            styles: [__webpack_require__(860)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/meanauthapp/angular-src/src/profile.component.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionGeneratorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var nlp = __webpack_require__(638);
var http = __webpack_require__(464);
var util = __webpack_require__(292);
var https = __webpack_require__(793);
var fs = __webpack_require__(838);
var path = __webpack_require__(444);
var mammoth = __webpack_require__(826);
var QuestionGeneratorComponent = (function () {
    function QuestionGeneratorComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.whoQAs = [];
        this.whereQAs = [];
        this.whenQAs = [];
        this.topics = [];
        this.loggedIn = false;
        this.generateBool = false;
    }
    QuestionGeneratorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            var groupIDs = profile.user.groups;
            _this.loggedIn = true;
            for (var x = 0; x < groupIDs.length; x++) {
                var groupI = {
                    groupID: groupIDs[x]
                };
                _this.authService.getGroupPage(groupI).subscribe(function (data) {
                    if (data.group != undefined) {
                        var topicIDs = data.group.topics;
                        for (var i = 0; i < topicIDs.length; i++) {
                            var topicI = {
                                topicID: topicIDs[i]
                            };
                            _this.authService.getTopicPage(topicI).subscribe(function (data) {
                                if (data.topic !== null && data.topic !== undefined)
                                    _this.topics.push(data.topic);
                            });
                        }
                    }
                });
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    QuestionGeneratorComponent.prototype.onGenerateQuestions = function () {
        var _this = this;
        if (this.inputText !== undefined) {
            if (this.inputText.trim() !== "") {
                this.authService.getQuestions(this.inputText).subscribe(function (data) {
                    var dataArray = eval('(' + data + ')');
                    var whoQAarray = dataArray[0];
                    var whereQAarray = dataArray[1];
                    var whenQAarray = dataArray[2];
                    for (var who = 0; who < whoQAarray.length; who++) {
                        var whoQ = whoQAarray[who][0];
                        var whoA = whoQAarray[who][1];
                        var whoI = whoQAarray[who][2];
                        var whoQA = {
                            question: whoQ,
                            answer: whoA,
                            index: whoI,
                            checked: false
                        };
                        _this.whoQAs.push(whoQA);
                        _this.whoQ = "e";
                    }
                    for (var where = 0; where < whereQAarray.length; where++) {
                        var whereQ = whereQAarray[where][0];
                        var whereA = whereQAarray[where][1];
                        var whereI = whereQAarray[where][2];
                        var whereQA = {
                            question: whereQ,
                            answer: whereA,
                            index: whereI,
                            checked: false
                        };
                        _this.whereQAs.push(whereQA);
                        _this.whereQ = "e";
                    }
                    for (var when = 0; when < whenQAarray.length; when++) {
                        var whenQ = whenQAarray[when][0];
                        var whenA = whenQAarray[when][1];
                        var whenI = whenQAarray[when][2];
                        var whenQA = {
                            question: whenQ,
                            answer: whenA,
                            index: whenI,
                            checked: false
                        };
                        _this.whenQAs.push(whenQA);
                        _this.whenQ = "e";
                    }
                });
            }
            else {
                this.flashMessage.show('Please enter in text to the text area, either by copy pasting or by uploading a .txt file or .docx file', { cssClass: 'alert-danger', timeout: 7500 });
            }
        }
        else {
            this.flashMessage.show('Please enter in text to the text area, either by copy pasting or by uploading a .txt file or .docx file', { cssClass: 'alert-danger', timeout: 7500 });
        }
    };
    QuestionGeneratorComponent.prototype.UploadtoTopic = function () {
        var _this = this;
        if (this.loggedIn == true) {
            if (this.topic != undefined) {
                var document = {
                    name: this.name,
                    text: this.inputText,
                    whoQAs: this.whoQAs,
                    whereQAs: this.whereQAs,
                    whenQAs: this.whenQAs,
                    topicID: this.topic
                };
                this.authService.createDocument(document).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessage.show('Added document successfully', { cssClass: 'alert-success', timeout: 3000 });
                    }
                    else {
                        _this.flashMessage.show('Error adding document to topic', { cssClass: 'alert-danger', timeout: 3000 });
                    }
                });
            }
        }
    };
    QuestionGeneratorComponent.prototype.handleFileSelect = function (event) {
        var _this = this;
        var that = this;
        var file = event.target.files[0];
        if (file.type == "text/plain") {
            var fileReader_1 = new FileReader();
            fileReader_1.onload = function (event) {
                _this.inputText = fileReader_1.result;
            };
            fileReader_1.readAsText(file);
        }
        else if (file.type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
            this.readFileInputEventAsArrayBuffer(event, function (arrayBuffer) {
                mammoth.extractRawText({ arrayBuffer: arrayBuffer })
                    .then(function (result) {
                    var text = result.value;
                    that.inputText = text;
                })
                    .done();
            });
        }
        else {
            this.flashMessage.show('The MIME type ' + file.type + " is currently not supported. Please use a .docx file, or a .txt file", { cssClass: 'alert-danger', timeout: 6000 });
        }
    };
    QuestionGeneratorComponent.prototype.readFileInputEventAsArrayBuffer = function (event, callback) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function (loadEvent) {
            var arrayBuffer = loadEvent.target.result;
            callback(arrayBuffer);
        };
        reader.readAsArrayBuffer(file);
    };
    QuestionGeneratorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-question-generator',
            template: __webpack_require__(872),
            styles: [__webpack_require__(861)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], QuestionGeneratorComponent);
    return QuestionGeneratorComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/meanauthapp/angular-src/src/question-generator.component.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            username: this.username,
            password: this.password
        };
        //Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //Required Fields
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (this.password == this.passwordReenter) {
            //Register user
            this.authService.registerUser(user).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                    _this.router.navigate(['/login']);
                }
                else {
                    _this.flashMessage.show('The username and/or email have already be chosen. Please try again with a different email and username.', { cssClass: 'alert-danger', timeout: 4750 });
                    _this.router.navigate(['/register']);
                }
            });
        }
        else {
            this.flashMessage.show('The password fields do not match. Please try again.', { cssClass: 'alert-danger', timeout: 3000 });
        }
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(873),
            styles: [__webpack_require__(862)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/meanauthapp/angular-src/src/register.component.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TopicPageComponent = (function () {
    function TopicPageComponent(validateService, flashMessage, authService, router, route) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.whenQs = [];
        this.whenAs = [];
        this.whereQAs = [];
        this.whoQAs = [];
        this.admin = false;
    }
    TopicPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        //we get the id of the topic that has been clicked on to navigate to this page
        this.route.params.subscribe(function (params) {
            _this.topicID = params['id'];
        });
        var topicI = {
            topicID: this.topicID
        };
        //with the id, we get the topic object, along with all of its associated documents
        this.authService.getTopicPage(topicI).subscribe(function (data) {
            _this.topic = data.topic;
            _this.documents = data.documents;
        });
        //We now check to see whether the user is the admin (by first viewing the group that the topic belongs to)
        this.authService.findGroupOfTopic(topicI).subscribe(function (data) {
            //we get the user that is logged in 
            _this.authService.getProfile().subscribe(function (profile) {
                if (data.foundGroupAdmin == profile.user._id) {
                    _this.admin = true;
                }
            }, function (err) {
                return false;
            });
        });
    };
    TopicPageComponent.prototype.editQA = function (docID, i, question, answer, type) {
        //we edit the checked value in the front-end
        for (var docs = 0; docs < this.documents.length; docs++) {
            if (this.documents[docs]._id == docID) {
                if (type == "whenQA") {
                    this.documents[docs].whenQAs[i].checked = true;
                }
                else if (type == "whereQA") {
                    this.documents[docs].whereQAs[i].checked = true;
                }
                else if (type == "whoQA") {
                    this.documents[docs].whoQAs[i].checked = true;
                }
            }
        }
        //we edit the QA in the back-end
        var editTextArray = [];
        editTextArray.push(question, answer);
        var updatedDoc = {
            documentID: docID,
            type: type,
            index: i,
            editText: editTextArray
        };
        this.authService.updateDocumentEdit(updatedDoc).subscribe(function (data) {
            if (data.success) {
            }
            else {
            }
        });
    };
    TopicPageComponent.prototype.deleteQA = function (docID, i, type) {
        //Delete in the displayed table (front-end)
        for (var docs = 0; docs < this.documents.length; docs++) {
            if (this.documents[docs]._id == docID) {
                if (type == "whenQA") {
                    this.documents[docs].whenQAs.splice(i, 1);
                }
                else if (type == "whereQA") {
                    this.documents[docs].whereQAs.splice(i, 1);
                }
                else if (type == "whoQA") {
                    this.documents[docs].whoQAs.splice(i, 1);
                }
            }
        }
        //Delete in the database (back-end)
        var updatedDoc = {
            documentID: docID,
            type: type,
            index: i
        };
        this.authService.updateDocumentDelete(updatedDoc).subscribe(function (data) {
            if (data.success) {
            }
            else {
            }
        });
    };
    TopicPageComponent.prototype.check = function (docID, i, type) {
        //front-end 
        for (var docs = 0; docs < this.documents.length; docs++) {
            if (this.documents[docs]._id == docID) {
                if (type == "whenQA") {
                    if (this.documents[docs].whenQAs[i].checked == false) {
                        this.documents[docs].whenQAs[i].checked = true;
                    }
                    else {
                        this.documents[docs].whenQAs[i].checked = false;
                    }
                }
                else if (type == "whereQA") {
                    if (this.documents[docs].whereQAs[i].checked == false) {
                        this.documents[docs].whereQAs[i].checked = true;
                    }
                    else {
                        this.documents[docs].whereQAs[i].checked = false;
                    }
                }
                else if (type == "whoQA") {
                    if (this.documents[docs].whoQAs[i].checked == false) {
                        this.documents[docs].whoQAs[i].checked = true;
                    }
                    else {
                        this.documents[docs].whoQAs[i].checked = false;
                    }
                }
            }
        }
        //back-end
        var updatedDoc = {
            documentID: docID,
            type: type,
            index: i,
            editText: null
        };
        this.authService.updateDocumentEdit(updatedDoc).subscribe(function (data) {
            if (data.success) {
            }
            else {
            }
        });
    };
    TopicPageComponent.prototype.addRow = function (docID, type) {
        //add row in displayed table (front-end)
        var newRow = {
            question: "",
            answer: "",
            checked: false
        };
        for (var docs = 0; docs < this.documents.length; docs++) {
            if (this.documents[docs]._id == docID) {
                if (type == "whenQA") {
                    this.documents[docs].whenQAs.push(newRow);
                }
                else if (type == "whoQA") {
                    this.documents[docs].whoQAs.push(newRow);
                }
                else if (type == "whereQA") {
                    this.documents[docs].whereQAs.push(newRow);
                }
            }
        }
        //add row (Question+Answer) in backend
        var updatedDoc = {
            documentID: docID,
            type: type,
            checked: false
        };
        this.authService.updateDocumentAdd(updatedDoc).subscribe(function (data) {
            if (data.success) {
            }
            else {
            }
        });
    };
    TopicPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-topic-page',
            template: __webpack_require__(874),
            styles: [__webpack_require__(863)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === 'function' && _e) || Object])
    ], TopicPageComponent);
    return TopicPageComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/meanauthapp/angular-src/src/topic-page.component.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/meanauthapp/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/meanauthapp/angular-src/src/environment.js.map

/***/ }),

/***/ 853:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 854:
/***/ (function(module, exports) {

module.exports = "/* Style inputs, select elements and textareas */\r\ninput[type=text], select, textarea{\r\n    width: 100%;\r\n    padding: 12px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n    resize: vertical;\r\n  }\r\n  \r\n  /* Style the label to display next to the inputs */\r\n  label {\r\n    padding: 12px 12px 12px 0;\r\n    display: inline-block;\r\n  }\r\n  \r\n  /* Style the submit button */\r\n  input[type=submit] {\r\n    background-color: rgb(106, 160, 190);\r\n    color: white;\r\n    padding: 12px 20px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  /* Style the container */\r\n  .container {\r\n    border-radius: 5px;\r\n    background-color: #f2f2f2;\r\n    padding: 20px;\r\n  }\r\n  \r\n  /* Floating column for labels: 25% width */\r\n  .col-25 {\r\n    float: left;\r\n    width: 25%;\r\n    margin-top: 6px;\r\n  }\r\n  \r\n  /* Floating column for inputs: 75% width */\r\n  .col-75 {\r\n    float: left;\r\n    width: 75%;\r\n    margin-top: 6px;\r\n  }\r\n  \r\n  /* Clear floats after the columns */\r\n  .row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  \r\n  /* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\r\n  @media (max-width: 600px) {\r\n    .col-25, .col-75, input[type=submit] {\r\n      width: 100%;\r\n      margin-top: 0;\r\n    }\r\n  }\r\n\r\n  label > input{ /* HIDE RADIO */\r\n    visibility: hidden; /* Makes input not-clickable */\r\n\r\n  }\r\n  label > input + div{ \r\n    cursor:pointer;\r\n    padding: 6px;\r\n    border:2px solid rgb(128, 177, 204);\r\n  }\r\n  label > input:hover + div{ \r\n    cursor:pointer;\r\n    padding: 6px;\r\n    border:2px solid rgb(128, 177, 204);\r\n    background-color: rgb(128, 177, 204);\r\n  }\r\n  label > input:checked + div{ \r\n    background-color: rgb(81, 141, 173);\r\n    border:2px solid rgb(81, 141, 173);\r\n    padding: 6px;\r\n  }\r\n\r\n  .glyphicon {\r\n    font-size: 50px;\r\n}\r\n\r\n#formID {\r\n  width: 855px;\r\n  margin:0 auto;\r\n  text-align: center;\r\n} \r\n\r\n\r\n  input {\r\n    width: 50%;\r\n  }\r\n\r\n\r\ninput[type=\"submit\"]:hover {\r\n  background-color: rgb(58, 117, 148);\r\n}\r\n\r\n.well {\r\n  background: rgb(255, 255, 255);\r\n}\r\n\r\nh2{\r\n  color: rgb(0, 0, 0)\r\n}"

/***/ }),

/***/ 855:
/***/ (function(module, exports) {

module.exports = "/* Style inputs, select elements and textareas */\r\ninput[type=text], select, textarea{\r\n  width: 100%;\r\n  padding: 12px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n  resize: vertical;\r\n}\r\n\r\n/* Style the label to display next to the inputs */\r\nlabel {\r\n  padding: 12px 12px 12px 0;\r\n  display: inline-block;\r\n}\r\n\r\n/* Style the submit button */\r\ninput[type=submit] {\r\n  background-color: rgb(106, 160, 190);\r\n  color: white;\r\n  padding: 12px 20px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\n/* Style the container */\r\n.container {\r\n  border-radius: 5px;\r\n  background-color: #f2f2f2;\r\n  padding: 20px;\r\n}\r\n\r\n/* Floating column for labels: 25% width */\r\n.col-25 {\r\n  float: left;\r\n  width: 25%;\r\n  margin-top: 6px;\r\n}\r\n\r\n/* Floating column for inputs: 75% width */\r\n.col-75 {\r\n  float: left;\r\n  width: 75%;\r\n  margin-top: 6px;\r\n}\r\n\r\n/* Clear floats after the columns */\r\n.row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\r\n@media (max-width: 600px) {\r\n  .col-25, .col-75, input[type=submit] {\r\n    width: 100%;\r\n    margin-top: 0;\r\n  }\r\n}\r\n\r\nlabel > input{ /* HIDE RADIO */\r\n  visibility: hidden; /* Makes input not-clickable */\r\n\r\n}\r\nlabel > input + div{ \r\n  cursor:pointer;\r\n  padding: 6px;\r\n  border:2px solid rgb(128, 177, 204);\r\n}\r\nlabel > input:hover + div{ \r\n  cursor:pointer;\r\n  padding: 6px;\r\n  border:2px solid rgb(128, 177, 204);\r\n  background-color: rgb(128, 177, 204);\r\n}\r\nlabel > input:checked + div{ \r\n  background-color: rgb(81, 141, 173);\r\n  border:2px solid rgb(81, 141, 173);\r\n  padding: 6px;\r\n}\r\n\r\n.glyphicon {\r\n  font-size: 20px;\r\n}\r\n\r\n#formID {\r\nwidth: 855px;\r\nmargin:0 auto;\r\ntext-align: center;\r\n} \r\n\r\n\r\ninput {\r\n  width: 50%;\r\n}\r\n\r\n\r\ninput[type=\"submit\"]:hover {\r\nbackground-color: rgb(58, 117, 148);\r\n}\r\n\r\n.well {\r\nbackground: rgb(255, 255, 255);\r\n}\r\n\r\nh2{\r\ncolor: rgb(0, 0, 0)\r\n}\r\n"

/***/ }),

/***/ 856:
/***/ (function(module, exports) {

module.exports = "body{\r\n\tfont:15px/1.3 'Open Sans', sans-serif;\r\n\tcolor: #5e5b64;\r\n\ttext-align:center;\r\n}\r\n\r\na, a:visited {\r\n\toutline:none;\r\n\tcolor:#389dc1;\r\n}\r\n\r\na:hover{\r\n\ttext-decoration:none;\r\n}\r\n\r\nsection, footer, header, aside, nav{\r\n\tdisplay: block;\r\n}\r\n\r\n\r\n/*-------------------------\r\n\tThe search input\r\n--------------------------*/\r\n\r\n\r\n.bar{\r\n\tbackground-color:#5c9bb7;\r\n\r\n\t/* background-image:-webkit-linear-gradient(top, #5c9bb7, #5392ad);\r\n\tbackground-image:-moz-linear-gradient(top, #5c9bb7, #5392ad);\r\n\tbackground-image:linear-gradient(top, #5c9bb7, #5392ad); */\r\n\r\n\tbox-shadow: 0 1px 1px #ccc;\r\n\tborder-radius: 2px;\r\n\twidth: 400px;\r\n\tpadding: 10px;\r\n\tmargin: 80px auto 20px;\r\n\tposition:relative;\r\n}\r\n\r\n.bar input{\r\n\tbackground:#fff no-repeat 13px 13px;\r\n\tbackground-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU5NEY0RTlFMTA4NzExRTM5RTEzQkFBQzMyRjkyQzVBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU5NEY0RTlGMTA4NzExRTM5RTEzQkFBQzMyRjkyQzVBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTk0RjRFOUMxMDg3MTFFMzlFMTNCQUFDMzJGOTJDNUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTk0RjRFOUQxMDg3MTFFMzlFMTNCQUFDMzJGOTJDNUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4DjA/RAAABK0lEQVR42pTSQUdEURjG8dOY0TqmPkGmRcqYD9CmzZAWJRHVRIa0iFYtM6uofYaiEW2SRJtEi9YxIklp07ZkWswu0v/wnByve7vm5ee8M+85zz1jbt9Os+WiGkYdYxjCOx5wgFeXUHmtBSzpcCGa+5BJTCjEP+0nKWAT8xqe4ArPGEEVC1hHEbs2oBwdXkM7mj/JLZrad437sCGHOfUtcziutuYu2v8XUFF/4f6vMK/YgAH1HxkBYV60AR31gxkBYd6xAeF3VzMCwvzOBpypX8V4yuFRzX2d2gD/l5yjH4fYQEnzkj4fae5rJulF2sMXVrAsaTWttRFu4Osb+1jEDT71/ZveyhouTch2fINQL9hKefKjuYFfuznXWzXMTabyrvfyIV3M4vhXgAEAUMs7K0J9UJAAAAAASUVORK5CYII=);\r\n\r\n\tborder: none;\r\n\twidth: 100%;\r\n\tline-height: 19px;\r\n\tpadding: 11px 0;\r\n\r\n\tborder-radius: 2px;\r\n\tbox-shadow: 0 2px 8px #c4c4c4 inset;\r\n\ttext-align: left;\r\n\tfont-size: 14px;\r\n\tfont-family: inherit;\r\n\tcolor: #738289;\r\n\tfont-weight: bold;\r\n\toutline: none;\r\n\ttext-indent: 40px;\r\n}\r\n\r\nul{\r\n\tlist-style: none;\r\n\twidth: 428px;\r\n\tmargin: 0 auto;\r\n\ttext-align: left;\r\n}\r\n\r\nul li{\r\n\tborder-bottom: 1px solid #ddd;\r\n\tpadding: 10px;\r\n\toverflow: hidden;\r\n}\r\n\r\nul li img{\r\n\twidth:60px;\r\n\theight:60px;\r\n\tfloat:left;\r\n\tborder:none;\r\n}\r\n\r\nul li p{\r\n\tmargin-left: 75px;\r\n\tfont-weight: bold;\r\n\tpadding-top: 12px;\r\n\tcolor:#6e7a7f;\r\n}"

/***/ }),

/***/ 857:
/***/ (function(module, exports) {

module.exports = "body{\r\n    font: 15px/1.5 Arial, Helvetica,sans-serif;\r\n    padding:0;\r\n    margin:0;\r\n    background-color:#f4f4f4;\r\n  }\r\n  \r\n  /* Global */\r\n  .container{\r\n    width:80%;\r\n    margin:auto;\r\n    overflow:hidden;\r\n  }\r\n  \r\n  ul{\r\n    margin:0;\r\n    padding:0;\r\n  }\r\n  \r\n  .button_1{\r\n    height:38px;\r\n    background:#e8491d;\r\n    border:0;\r\n    padding-left: 20px;\r\n    padding-right:20px;\r\n    color:#ffffff;\r\n  }\r\n  \r\n  .dark{\r\n    padding:15px;\r\n    background:#35424a;\r\n    color:#ffffff;\r\n    margin-top:10px;\r\n    margin-bottom:10px;\r\n  }\r\n  \r\n  /* Header **/\r\n  header{\r\n    background:#35424a;\r\n    color:#ffffff;\r\n    padding-top:30px;\r\n    min-height:70px;\r\n    border-bottom:#e8491d 3px solid;\r\n  }\r\n  \r\n  header a{\r\n    color:#ffffff;\r\n    text-decoration:none;\r\n    text-transform: uppercase;\r\n    font-size:16px;\r\n  }\r\n  \r\n  header li{\r\n    float:left;\r\n    display:inline;\r\n    padding: 0 20px 0 20px;\r\n  }\r\n  \r\n  header #appTitle{\r\n    float:left;\r\n  }\r\n  \r\n  header #appTitle h1{\r\n    margin:0;\r\n  }\r\n\r\n  header #appDescription{\r\n    float:right;\r\n  }\r\n  \r\n  header #appDescription h1{\r\n      \r\n    margin:0;\r\n  }\r\n  \r\n  \r\n  header nav{\r\n    float:right;\r\n    margin-top:10px;\r\n  }\r\n  \r\n  header .highlight, header .current a{\r\n    color:#e8491d;\r\n    font-weight:bold;\r\n  }\r\n  \r\n  header a:hover{\r\n    color:#cccccc;\r\n    font-weight:bold;\r\n  }\r\n  \r\n  /* Showcase */\r\n  #showcase{\r\n    min-height:400px;\r\n    background:url('../img/showcase.jpg') no-repeat 0 -400px;\r\n    text-align:center;\r\n    color:#ffffff;\r\n  }\r\n  \r\n  #showcase h1{\r\n    margin-top:100px;\r\n    font-size:55px;\r\n    margin-bottom:10px;\r\n  }\r\n  \r\n  #showcase p{\r\n    font-size:20px;\r\n  }\r\n  \r\n  /* Newsletter */\r\n  #newsletter{\r\n    padding:15px;\r\n    color:#ffffff;\r\n    background:#35424a\r\n  }\r\n  \r\n  #newsletter h1{\r\n    float:left;\r\n  }\r\n  \r\n  #newsletter form {\r\n    float:right;\r\n    margin-top:15px;\r\n  }\r\n  \r\n  #newsletter input[type=\"email\"]{\r\n    padding:4px;\r\n    height:25px;\r\n    width:250px;\r\n  }\r\n  \r\n  /* Boxes */\r\n  #boxes{\r\n    margin-top:20px;\r\n  }\r\n  \r\n  #boxes .box{\r\n    float:left;\r\n    text-align: center;\r\n    width:30%;\r\n    padding:10px;\r\n  }\r\n  \r\n  #boxes .box img{\r\n    width:90px;\r\n  }\r\n  \r\n  /* Sidebar */\r\n  aside#sidebar{\r\n    float:right;\r\n    width:30%;\r\n    margin-top:10px;\r\n  }\r\n  \r\n  aside#sidebar .quote input, aside#sidebar .quote textarea{\r\n    width:90%;\r\n    padding:5px;\r\n  }\r\n  \r\n  /* Main-col */\r\n  article#main-col{\r\n    float:left;\r\n    width:65%;\r\n  }\r\n  \r\n  /* Services */\r\n  ul#services li{\r\n    list-style: none;\r\n    padding:20px;\r\n    border: #cccccc solid 1px;\r\n    margin-bottom:5px;\r\n    background:#e6e6e6;\r\n  }\r\n  \r\n  footer{\r\n    padding:20px;\r\n    margin-top:20px;\r\n    color:#ffffff;\r\n    background-color:#e8491d;\r\n    text-align: center;\r\n  }\r\n  \r\n  /* Media Queries */\r\n  @media(max-width: 768px){\r\n    header #appTitle,\r\n    header #appDescription,\r\n    header nav,\r\n    header nav li,\r\n    #newsletter h1,\r\n    #newsletter form,\r\n    #boxes .box,\r\n    article#main-col,\r\n    aside#sidebar{\r\n      float:none;\r\n      text-align:center;\r\n      width:100%;\r\n    }\r\n  \r\n    header{\r\n      padding-bottom:20px;\r\n    }\r\n  \r\n    #showcase h1{\r\n      margin-top:40px;\r\n    }\r\n  \r\n    #newsletter button, .quote button{\r\n      display:block;\r\n      width:100%;\r\n    }\r\n  \r\n    #newsletter form input[type=\"email\"], .quote input, .quote textarea{\r\n      width:100%;\r\n      margin-bottom:5px;\r\n    }\r\n  }\r\n  "

/***/ }),

/***/ 858:
/***/ (function(module, exports) {

module.exports = "/* Style inputs, select elements and textareas */\r\ninput[type=text], select, textarea{\r\n    width: 100%;\r\n    padding: 12px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n    resize: vertical;\r\n  }\r\n  \r\n  /* Style the label to display next to the inputs */\r\n  label {\r\n    padding: 25px 264px 5px 0;\r\n    display: inline-block;\r\n  }\r\n  \r\n  /* Style the submit button */\r\n  input[type=submit] {\r\n    background-color: rgb(106, 160, 190);\r\n    color: white;\r\n    padding: 12px 20px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n  \r\n\r\n\r\n#formID {\r\n  width: 550px;\r\n  margin:0 auto;\r\n  text-align: center;\r\n} \r\n\r\n\r\n  input {\r\n    width: 50%;\r\n  }\r\n\r\n\r\ninput[type=\"submit\"]:hover {\r\n  background-color: rgb(58, 117, 148);\r\n}\r\n\r\n.well {\r\n  background: rgb(255, 255, 255);\r\n}\r\n\r\nh2{\r\n  color: rgb(0, 0, 0)\r\n}\r\n\r\n"

/***/ }),

/***/ 859:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 860:
/***/ (function(module, exports) {

module.exports = "/* Style inputs, select elements and textareas */\r\ninput[type=text], select, textarea{\r\n    width: 100%;\r\n    padding: 12px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n    resize: vertical;\r\n  }\r\n  \r\n  /* Style the label to display next to the inputs */\r\n  label {\r\n    padding: 12px 12px 12px 0;\r\n    display: inline-block;\r\n  }\r\n  \r\n  /* Style the submit button */\r\n  input[type=submit] {\r\n    background-color: rgb(106, 160, 190);\r\n    color: white;\r\n    padding: 12px 20px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  /* Style the container */\r\n  .container {\r\n    border-radius: 5px;\r\n    background-color: #f2f2f2;\r\n    padding: 20px;\r\n  }\r\n  \r\n  /* Floating column for labels: 25% width */\r\n  .col-25 {\r\n    float: left;\r\n    width: 25%;\r\n    margin-top: 6px;\r\n  }\r\n  \r\n  /* Floating column for inputs: 75% width */\r\n  .col-75 {\r\n    float: left;\r\n    width: 75%;\r\n    margin-top: 6px;\r\n  }\r\n  \r\n  /* Clear floats after the columns */\r\n  .row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  \r\n  /* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\r\n  @media (max-width: 600px) {\r\n    .col-25, .col-75, input[type=submit] {\r\n      width: 100%;\r\n      margin-top: 0;\r\n    }\r\n  }\r\n\r\n  label > input{ /* HIDE RADIO */\r\n    visibility: hidden; /* Makes input not-clickable */\r\n\r\n  }\r\n  label > input + div{ \r\n    cursor:pointer;\r\n    padding: 6px;\r\n    border:2px solid rgb(128, 177, 204);\r\n  }\r\n  label > input:hover + div{ \r\n    cursor:pointer;\r\n    padding: 6px;\r\n    border:2px solid rgb(128, 177, 204);\r\n    background-color: rgb(128, 177, 204);\r\n  }\r\n  label > input:checked + div{ \r\n    background-color: rgb(81, 141, 173);\r\n    border:2px solid rgb(81, 141, 173);\r\n    padding: 6px;\r\n  }\r\n\r\n  .glyphicon {\r\n    font-size: 20px;\r\n}\r\n\r\n#formID {\r\n  width: 855px;\r\n  margin:0 auto;\r\n  text-align: center;\r\n} \r\n\r\n\r\n  input {\r\n    width: 50%;\r\n  }\r\n\r\n\r\ninput[type=\"submit\"]:hover {\r\n  background-color: rgb(58, 117, 148);\r\n}\r\n\r\n.well {\r\n  background: rgb(255, 255, 255);\r\n}\r\n\r\nh2{\r\n  color: rgb(0, 0, 0)\r\n}\r\n\r\n#tableStyle td{\r\n  text-align:center; \r\n  vertical-align:middle;\r\n}"

/***/ }),

/***/ 861:
/***/ (function(module, exports) {

module.exports = "\r\n td {\r\n  border: 1px solid grey;\r\n  border-collapse: collapse;\r\n  padding: 5px;\r\n}\r\n\r\ntable tr:nth-child(odd) {\r\n    background-color: #ffffff;\r\n}\r\ntable tr:nth-child(even) {\r\n  background-color: #ffffff;\r\n}\r\ntextarea {\r\n    resize: none;\r\n }\r\n\r\n \r\n input[type=\"file\"] {\r\n  display: none;\r\n}\r\n\r\n.custom-file-upload {\r\n  border: 1px dashed #ccc;\r\n  display: inline-block;\r\n  padding: 6px 12px;\r\n  cursor: pointer;\r\n  text-align: center;\r\n}\r\n\r\n\r\n#uploadButton{ \r\n  background-color: rgb(106, 160, 190);\r\n  color: white;\r\n  padding: 12px 20px;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n\r\n}\r\n\r\n#uploadButton:hover {\r\n  background-color: rgb(58, 117, 148);\r\n}"

/***/ }),

/***/ 862:
/***/ (function(module, exports) {

module.exports = "/* Style inputs, select elements and textareas */\r\ninput[type=text], select, textarea{\r\n    width: 100%;\r\n    padding: 12px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n    resize: vertical;\r\n  }\r\n  \r\n  /* Style the label to display next to the inputs */\r\n  label {\r\n    padding: 25px 264px 5px 0;\r\n    display: inline-block;\r\n  }\r\n  \r\n  /* Style the submit button */\r\n  input[type=submit] {\r\n    background-color: rgb(106, 160, 190);\r\n    color: white;\r\n    padding: 12px 20px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n  \r\n\r\n\r\n#formID {\r\n  width: 550px;\r\n  margin:0 auto;\r\n  text-align: center;\r\n} \r\n\r\n\r\n  input {\r\n    width: 50%;\r\n  }\r\n\r\n\r\ninput[type=\"submit\"]:hover {\r\n  background-color: rgb(58, 117, 148);\r\n}\r\n\r\n.well {\r\n  background: rgb(255, 255, 255);\r\n}\r\n\r\nh2{\r\n  color: rgb(0, 0, 0)\r\n}\r\n\r\n"

/***/ }),

/***/ 863:
/***/ (function(module, exports) {

module.exports = "input[type=text], select, textarea{\r\n    width: 100%;\r\n    padding: 12px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n    resize: vertical;\r\n  }\r\n\r\n  button{\r\n    vertical-align: baseline;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    line-height: 16px;\r\n  }\r\n\r\n  #checkUnCheck{\r\n    vertical-align: baseline;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    line-height: 30px;\r\n  }\r\n\r\n  #wrapper {\r\n    width: 100%;\r\n    height: 43px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n  }\r\n  \r\n  #saveDelete {\r\n    vertical-align: baseline;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    line-height: 9px;\r\n  }\r\n\r\n  th{\r\n    text-align: center;\r\n    height: 25px;\r\n    vertical-align: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    background-color: #ffffff;\r\n    vertical-align: middle;\r\n    border: 1px solid rgb(66, 63, 63)\r\n  } \r\n\r\n  h3 {\r\n    font-size: 1.9em;\r\n    vertical-align: middle;\r\n  }\r\n\r\n  button:disabled,\r\n  button[disabled]{\r\n    border: 1px solid #999999;\r\n    background-color: #cccccc;\r\n    color: #666666;\r\n  }\r\n\r\n  button:hover {\r\n    border: 1px solid #0099cc;\r\n    background-color: #00aacc;\r\n    color: #ffffff;\r\n    padding: 5px 10px;\r\n    background-position: 0px;\r\n  }\r\n"

/***/ }),

/***/ 864:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 865:
/***/ (function(module, exports) {

module.exports = "<h1  align=\"center\">Create new group</h1>\n<br>\n<div id=\"formID\" class=\"well\">\n  <form (submit)=\"onCreateGroup()\">\n\n    <div class=\"group-name\" id=\"groupName\">\n      <label>\n        <h2>Group name</h2>\n      </label>\n      <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"input-name\" required oninvalid=\"this.setCustomValidity('Please Enter a name for the group')\" oninput=\"setCustomValidity('')\">\n    </div>\n\n    <div class=\"group-school\">\n      <label>\n        <h2>School / Organization name (Optional)</h2>\n      </label>\n      <input type=\"text\" [(ngModel)]=\"school\" name=\"school\" class=\"input-school\" >\n    </div>\n\n    <div class=\"group-setting\">\n      <label for=\"setting\">\n        <h2>Choose a privacy setting </h2>\n        <h4> (Global is defaulted if neither is chosen)</h4>\n      </label>\n    <br>\n      <label>\n        <input type=\"radio\" [(ngModel)]=\"setting\" name=\"setting\" class=\"form-control\" id=\"global\" value=1 >\n        <div>\n          <p align=\"center\" style=\"font-size:130%;\">Global</p>\n          <p align=\"center\" style=\"font-size:90%;\">Anyone can view and join the group from browse groups</p>\n          <div style=\"text-align: center;\">\n            <span class=\"glyphicon glyphicon-globe\"></span>\n          </div>\n        </div>\n      </label>\n\n      <label>\n        <input type=\"radio\" [(ngModel)]=\"setting\" name=\"setting\" class=\"form-control\" id=\"private\" value=2>\n        <div>\n          <p align=\"center\" style=\"font-size:130%;\">Private</p>\n          <p align=\"center\" style=\"font-size:90%;\">New members can only join with an invite from the admin</p>\n          <div style=\"text-align: center;\">\n            <span class=\"glyphicon glyphicon-user\"></span>\n          </div>\n        </div>\n      </label>\n\n    </div>\n    <br>\n    <br>\n    <br>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Create group\" align=\"center\">\n  </form>\n  <br>\n</div>\n"

/***/ }),

/***/ 866:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"joinBool==true && setting==2\">\n  <div id=\"formID\" class=\"well\">\n    This is a private group. You must be invited to join.\n  </div>\n</div>\n<div *ngIf=\"(joinBool==true && setting==1) || joinBool == false\">\n  <div *ngIf=\"group\">\n    <h1 align=\"center\">{{group.name}}'s group page</h1>\n  </div>\n  <br>\n  <div id=\"formID\" class=\"well\">\n    <h2>All topics:</h2>\n    <div *ngIf=\"topics.length > 0\">\n      <ul class=\"list-group\">\n        <div *ngFor=\"let topic of topics\">\n\n          <a [routerLink]=\"['/TopicPage', topic._id]\">\n\n            <li class=\"list-group-item\" style=\"width: 70%;display:inline-block;padding:10px;\">{{topic.name}}</li>\n            <!-- <span>{{topic.name}}</span> -->\n          </a>\n\n        </div>\n      </ul>\n    </div>\n    <div *ngIf=\"topics.length == 0\">\n      Currently no topics have been created for this group.\n      <br>\n      <br>\n    </div>\n\n    <div *ngIf=\"admin\">\n\n      <h2>Create new Topic</h2>\n      <form (submit)=\"onCreateTopic()\">\n        <div class=\"form-group\">\n          <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" placeholder=\"Enter the name of the topic...\" style=\" width: 50%;padding:15px;display:inline-block;vertical-align:middle\">\n          <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" style=\" width: 10%;padding:7.3px;display:inline-block;vertical-align:middle\">\n        </div>\n\n      </form>\n\n      <h2>Invite a user to the group</h2>\n      <form (submit)=\"inviteUser()\">\n        <div class=\"form-group\">\n          <input type=\"text\" [(ngModel)]=\"usernameInvite\" name=\"usernameInvite\" class=\"form-control\" placeholder=\"Enter the username of user you would like to invite...\"\n            style=\" width: 50%;padding:15px;display:inline-block;vertical-align:middle\">\n          <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" style=\" width: 10%;padding:7.3px;display:inline-block;vertical-align:middle\">\n        </div>\n\n      </form>\n      <br>\n      <br>\n\n    </div>\n\n\n\n    <div *ngIf=\"joinBool==true && setting==1\">\n      <br>\n      <h2>Join this group</h2>\n      <form (submit)=\"joinGroup()\">\n        <div class=\"join-group\">\n          <input type=\"submit\" class=\"btn btn-primary\" value=\"Join\" style=\" width: 20%;display:inline-block;vertical-align:middle\">\n        </div>\n      </form>\n      <br>\n    </div>\n\n  </div>\n  <br>\n  <br>\n</div>"

/***/ }),

/***/ 867:
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\">Browse groups</h1>\n<h4 align=\"center\"> View all public groups</h4>\n<div class=\"bar\">\n  <form id=\"search\">\n    <input type=\"text\" [(ngModel)]=\"term\" name=\"term\" placeholder=\"Search groups by name...\" />\n  </form>\n</div>\n<div *ngIf=\"groupNames.length > 0\">\n  <ul id=\"group-listing\">\n    <li *ngFor=\"let group of groupNames | filter:term\">\n      <div class=\"single-group\">\n        <div *ngIf=\"group.school!=undefined\">\n          ({{group.school}}) -\n          <a [routerLink]=\"['/GroupPage', group._id]\">\n            <span>{{group.name}}</span>\n          </a>\n        </div>\n        <div *ngIf=\"group.school==undefined\" >\n          <a [routerLink]=\"['/GroupPage', group._id]\">\n            <span>{{group.name}}</span>\n          </a>\n        </div>\n      </div>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ 868:
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container\">\n    <div id=\"appTitle\">\n      <h1> Quization </h1>\n    </div>\n    <div id=\"appDescription\">\n      <h1>The question generating tool</h1>\n    </div>\n  </div>\n</header>\n\n<section id=\"showcase\">\n\n  <!-- <div class=\"container\">\n\n    <div class=\"row\">\n\n      <div class=\"col-md-12\"> -->\n\n        <div id=\"product-image\" class=\"carousel slide\" data-ride=\"carousel\">\n\n          <ol class=\"carousel-indicators\">\n            <li data-target=\"#product-image\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#product-image\" data-slide-to=\"1\"></li>\n          </ol>\n\n\n          <div class=\"carousel-inner\">\n            <div class=\"item active\">\n                <div *ngIf=\"slide == 1\">\n                    <img src='/assets/images/example1.jpg' style=\"width:50%;height:50%\">\n                    <!--  -->\n                    <div class=\"carousel-caption\">\n                        <h3>Los Angeles</h3>\n                        <p>LA is always so much fun!</p>\n                      </div>\n                </div>\n                <div *ngIf=\"slide == 2\">\n                    <img src='/assets/images/example2.jpeg' style=\"width:100px;height:100px;\">\n                    <div class=\"carousel-caption\">\n                        <h3>Los Angeles</h3>\n                        <p>LA is always so much fun!</p>\n                      </div>\n                </div>\n                <div *ngIf=\"slide == 3\">\n                    <img src='/assets/images/example1.jpg' style=\"width:100px;height:100px;\">\n                </div>\n              \n            </div>\n\n\n            <div class=\"carousel-inner\">\n                <div class=\"item\">\n              <img src='/assets/images/example2.jpeg'  alt=\"New York\">\n              <div class=\"carousel-caption\">\n                <h3>New York</h3>\n                <p>We love the Big Apple!</p>\n              </div>\n              </div>\n            </div>\n          </div>\n\n          <a class=\"left carousel-control\" (click)=\"previousSlide()\" role=\"button\" data-slide=\"prev\">\n            <span class=\"icon-prev\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n\n          <a class=\"right carousel-control\" (click)=\"nextSlide()\" role=\"button\" data-slide=\"next\">\n            <span class=\"icon-next\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n\n        <!-- </div> -->\n      </div>\n\n</section>\n\n<section id=\"newsletter\">\n  <div class=\"container\">\n    <h1>Subscribe To Our Newsletter</h1>\n    <form>\n      <input type=\"email\" placeholder=\"Enter Email...\">\n      <button type=\"submit\" class=\"button_1\">Subscribe</button>\n    </form>\n  </div>\n</section>\n\n<section id=\"boxes\">\n  <div class=\"container\">\n    <div class=\"box\">\n      <img src=\"./img/logo_html.png\">\n      <h3>HTML5 Markup</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>\n    </div>\n    <div class=\"box\">\n      <img src=\"./img/logo_css.png\">\n      <h3>CSS3 Styling</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>\n    </div>\n    <div class=\"box\">\n      <img src=\"./img/logo_brush.png\">\n      <h3>Graphic Design</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mi augue, viverra sit amet ultricies</p>\n    </div>\n  </div>\n</section>\n\n<footer>\n  <p>Acme Web Deisgn, Copyright &copy; 2017</p>\n</footer>"

/***/ }),

/***/ 869:
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\">Login</h1>\n\n<br>\n\n<div id=\"formID\" class=\"well\">\n  <form (submit)=\"onLoginSubmit()\">\n    <label>Username</label>\n    <div>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" style=\" width: 65%;display:inline-block;\">\n    </div>\n\n    <label>Password</label>\n    <div>\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" style=\" width: 65%;display:inline-block;\">\n    </div>\n    <br>\n    <input type=\"checkbox\" name=\"rememberme\" [(ngModel)]=\"rememberme\" style=\" width: 5%;display:inline-block; margin: 20px 0px;    \"> Remember me\n    <br>\n    <br>\n    <br>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n\n  </form>\n  <br>\n  <br>\n</div>"

/***/ }),

/***/ 870:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container\">\n\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\n        aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Quization</a>\n    </div>\n\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a [routerLink]=\"['/']\">Home</a>\n        </li>\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a [routerLink]=\"['/QGTool']\">QG Tool</a>\n        </li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a [routerLink]=\"['/CreateGroup']\">Create a Group</a>\n        </li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a [routerLink]=\"['/Groups']\">Browse Groups</a>\n        </li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a [routerLink]=\"['/login']\">Login</a>\n        </li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a [routerLink]=\"['/register']\">Register</a>\n        </li>\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a [routerLink]=\"['/profile']\">Profile</a>\n        </li>\n        <li *ngIf=\"authService.loggedIn()\">\n          <a (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n        </li>\n      </ul>\n\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ 871:
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\">Profile</h1>\n\n<br>\n\n<div id=\"formID\" class=\"well\">\n    <div *ngIf=\"user\">\n        <h2 class=\"page=header\">Your account details:</h2>\n        <ul class=\"list-group\">\n            <li class=\"list-group-item\" style=\"width: 70%;display:inline-block;padding:10px;\">Username: {{user.username}}</li>\n            <li class=\"list-group-item\" style=\"width: 70%;display:inline-block;padding:10px;\">Email: {{user.email}}</li>\n        </ul>\n    </div>\n\n\n    <h2>Your groups:</h2>\n    <div *ngIf=\"groups.length > 0\">\n            <!-- <ul class=\"list-group\">\n        <div *ngFor=\"let group of groups\">\n                <li class=\"list-group-item\" style=\" width: 70%;display:inline-block;padding:15px;\">\n                    <a [routerLink]=\"['/GroupPage', group._id]\">\n                        <span>{{group.name}}</span>\n                    </a>\n                </li>\n            \n        </div>\n    </ul> -->\n    <table class=\"table\" style=\" width: 70%;padding:15px;display:inline-block;\" id=\"tableStyle\">\n            <tr *ngFor=\"let group of groups;let i = index;\">\n                <td style=\"width:85%\" >\n                        <a [routerLink]=\"['/GroupPage', group._id]\">\n                            <span>{{group.name}}</span>\n                        </a>\n                </td>\n                <td style=\"width:15%\" align=\"center\">\n                    <button type=\"button\" (click)=\"leaveGroup(group, i)\" class=\"btn btn-danger btn-md\">\n                        <div >\n                            <span class=\"align-middle glyphicon glyphicon-remove\" ></span> Leave group\n                        </div>\n                    </button>\n                </td>\n            </tr>\n        </table>\n    </div>\n    <div *ngIf=\"groups.length == 0\">\n        You are currently not a member of any groups.\n    </div>\n    <h2>Your invites:</h2>\n    <div *ngIf=\"inviteNames.length > 0\">\n        <table class=\"table\" style=\" width: 70%;padding:15px;display:inline-block;\" id=\"tableStyle\">\n            <tr *ngFor=\"let invite of invites;let i = index;\">\n                <td style=\"width:70%\" >\n                        <a [routerLink]=\"['/GroupPage', invite._id]\">\n                            <span>{{invite.name}}</span>\n                        </a>\n                </td>\n                <td style=\"width:15%\" align=\"center\">\n                    <button type=\"button\" (click)=\"accept(invite, i)\" class=\"btn btn-success btn-md\">\n                        <div >\n                            <span class=\"align-middle glyphicon glyphicon-ok\" ></span> Accept\n                        </div>\n                    </button>\n                </td>\n                <td style=\"width:15%\" align=\"center\">\n                    <button type=\"button\" (click)=\"decline(invite, i)\" class=\"btn btn-danger btn-md\">\n                        <div >\n                            <span class=\"align-middle glyphicon glyphicon-remove\" ></span> Decline\n                        </div>\n                    </button>\n                </td>\n            </tr>\n        </table>\n    </div>\n    <div *ngIf=\"inviteNames.length == 0\">\n        You currently have no group invitations.\n    </div>\n\n</div>"

/***/ }),

/***/ 872:
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\">Question Generation Tool</h1>\r\n<br>\r\n<h4 align=\"center\">Enter in the text you would like to generate questions and answers for by either choosing a .docx file or .txt, or simply\r\n    copy pasting in text.</h4>\r\n<br>\r\n\r\n\r\n\r\n    <div class=\"banner\" align=\"center\">\r\n        <label class=\"custom-file-upload\" center=\"middle\"> Click to choose a .docx or .txt file\r\n            <input id=\"document\" type=\"file\" (change)=\"handleFileSelect($event)\" />\r\n        </label>\r\n    </div>\r\n\r\n    <br>\r\n\r\n    <div>\r\n        <form (submit)=\"onGenerateQuestions()\" id=\"generate\" align=\"right\">\r\n            <div class=\"form-textArea\">\r\n                <textarea [(ngModel)]=\"inputText\" name=\"inputText\" rows=\"32\" cols=\"154\" class=\"form-control\" align=\"right\"></textarea>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <br>\r\n    <div align=\"center\">\r\n        <button (click)=onGenerateQuestions() class=\"btn btn-primary\" id=\"uploadButton\">Generate questions and answers</button>\r\n    </div>\r\n\r\n<br>\r\n<br>\r\n    <table>\r\n        <div *ngIf=\"whoQ\">\r\n            <h3>Who-based Questions</h3>\r\n        </div>\r\n        <ng-container *ngFor=\"let QAs of whoQAs\">\r\n            <tr>\r\n                <td title=\"'Question'\">{{QAs.question}}</td>\r\n                <td title=\"'Answer'\">{{QAs.answer}}</td>\r\n            </tr>\r\n        </ng-container>\r\n    </table>\r\n\r\n    <br>\r\n\r\n    <table>\r\n        <div *ngIf=\"whereQ\">\r\n            <h3>Where-based Questions</h3>\r\n        </div>\r\n        <ng-container *ngFor=\"let QAs of whereQAs\">\r\n            <tr>\r\n                <td>{{QAs.question}}</td>\r\n                <td>{{QAs.answer}}</td>\r\n            </tr>\r\n        </ng-container>\r\n    </table>\r\n\r\n    <br>\r\n\r\n    <table>\r\n        <div *ngIf=\"whenQ\">\r\n            <h3>When-based Questions</h3>\r\n        </div>\r\n        <ng-container *ngFor=\"let QAs of whenQAs\">\r\n            <tr>\r\n                <td>{{QAs.question}}</td>\r\n                <td>{{QAs.answer}}</td>\r\n            </tr>\r\n        </ng-container>\r\n    </table>\r\n\r\n    <br>\r\n    <div *ngIf=\"loggedIn == true\">\r\n    <div *ngIf=\"whoQ || whereQ || whenQ\">\r\n        <br>\r\n        <h3 >Upload the generated questions and answers to a topic</h3>\r\n        <br>\r\n        <div class=\"docName\">\r\n                <label>Give this document a name: </label>\r\n                <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"input-name\">\r\n            </div>\r\n        <div class=\"dropdownTopics\">\r\n            <label for=\"topic\">Choose which topic you want to upload it to:</label>\r\n            <select [(ngModel)]=\"topic\" name=\"topic\" class=\"select-privacy\" id=\"topic\" required>\r\n                <option *ngFor=\"let topic of topics\" [value]=\"topic._id\">{{topic.name}}</option>\r\n            </select>\r\n        </div>\r\n        <br>\r\n        <button (click)=UploadtoTopic() class=\"btn btn-primary\" id=\"uploadButton\" >Upload</button>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n    </div>"

/***/ }),

/***/ 873:
/***/ (function(module, exports) {

module.exports = "<h1 align=\"center\">Register</h1>\n\n<br>\n\n<div id=\"formID\" class=\"well\">\n  <form (submit)=\"onRegisterSubmit()\">\n    <label>Username</label>\n    <div class=\"form-group\">\n      <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" style=\" width: 65%;display:inline-block;\">\n    </div>\n    <label style=\"padding: 25px 293px 5px 0\">Email</label>\n    <div class=\"form-group\">\n      <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" style=\" width: 65%;display:inline-block;\">\n    </div>\n    <label>Password</label>\n    <div class=\"form-group\">\n      <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" style=\" width: 65%;display:inline-block;\">\n    </div>\n    <label style=\"padding: 25px 203px 5px 0\">Re-enter Password</label>\n    <div class=\"form-group\">\n      <input type=\"password\" [(ngModel)]=\"passwordReenter\" name=\"passwordReenter\" class=\"form-control\" style=\" width: 65%;display:inline-block;\">\n    </div>\n    <br>\n    <br>\n    <br>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n  </form>\n  <br>\n  <br>\n</div>"

/***/ }),

/***/ 874:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"topic\">\n    <h1 class=\"page=header\">Topic : {{topic.name}}</h1>\n</div>\n\n<!-- if the admin of the group is viewing the page -->\n<div *ngIf=\"admin == true\">\n\n    <div ng-controller=\"EditableRowCtrl\">\n\n        <ng-container *ngFor=\"let document of documents; let z = index;\">\n\n            <br>\n\n            <h2>Document : {{document.name}}</h2>\n\n            <br>\n\n            <div>\n                <table class=\"table table-bordered table-hover table-condensed\">\n                    <th colspan=\"4\">\n                        <h3>When-based Questions</h3>\n                    </th>\n                    <tr style=\"font-weight: bold\">\n                        <td style=\"width:0%\" align=\"center\">Checked</td>\n                        <td style=\"width:75%\" align=\"center\">Question</td>\n                        <td style=\"width:18%\" align=\"center\">Answer</td>\n                        <td style=\"width:0%\" align=\"center\">Edit</td>\n                    </tr>\n                    <tr *ngFor=\"let whenQA of document.whenQAs;let i = index;\">\n\n                        <td>\n                            <div *ngIf=\"document.whenQAs[i].checked == true\" id=\"wrapper\" class=\"col-xs-2 col-md-7 col-lg-9 vcenter\" vertical-align=\"baseline\">\n                                <button type=\"button\" (click)=\"check(document._id, i, 'whenQA')\" class=\"btn btn-success btn-md\" id=\"checkUnCheck\">\n                                    <div style=\"height:2em;border:1px\">\n                                        <span class=\"align-middle glyphicon glyphicon-ok\" vertical-align=\"bottom\" display=\"inline-block\"></span> Checked\n                                    </div>\n                                </button>\n                            </div>\n                            <div *ngIf=\"document.whenQAs[i].checked == false\" class=\"col-md-1 text-center\">\n                                <button type=\"button\" (click)=\"check(document._id, i, 'whenQA')\" class=\"btn btn-danger btn-md\" id=\"checkUnCheck\">\n                                    <span class=\"glyphicon glyphicon-remove\"></span> Unchecked\n                                </button>\n                            </div>\n                        </td>\n\n                        <td>\n                            <input type=\"text\" [(ngModel)]=\"document.whenQAs[i].question\" name=\"question\" class=\"input-question\">\n                        </td>\n                        <td>\n                            <input type=\"text\" [(ngModel)]=\"document.whenQAs[i].answer\" name=\"answer\" class=\"input-question\">\n                        </td>\n                        <td style=\"white-space: nowrap\">\n                            <form (submit)=\"editQA(document._id, i, whenQA.question, whenQA.answer, 'whenQA')\" class=\"form-buttons form-inline\">\n                                <button type=\"submit\" class=\"btn btn-default glyphicon glyphicon-floppy-disk\" id=\"saveDelete\">\n                                    Save\n                                </button>\n                            </form>\n\n                            <button type=\"button\" (click)=\"deleteQA(document._id, i, 'whenQA')\" class=\"btn btn-default glyphicon glyphicon-remove\" id=\"saveDelete\">\n                                Delete\n                            </button>\n\n                        </td>\n                    </tr>\n                </table>\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"addRow(document._id, 'whenQA')\">Add row</button>\n            </div>\n\n            <br>\n\n            <div>\n                <table class=\"table table-bordered table-hover table-condensed\">\n                    <th colspan=\"4\">\n                        <h3>Where-based Questions</h3>\n                    </th>\n                    <tr style=\"font-weight: bold\">\n                        <td style=\"width:0%\" align=\"center\">Checked</td>\n                        <td style=\"width:75%\" align=\"center\">Question</td>\n                        <td style=\"width:18%\" align=\"center\">Answer</td>\n                        <td style=\"width:0%\" align=\"center\">Edit</td>\n                    </tr>\n                    <tr *ngFor=\"let whereQA of document.whereQAs;let i = index;\">\n\n                        <td>\n                            <div *ngIf=\"document.whereQAs[i].checked == true\" id=\"wrapper\" class=\"col-xs-2 col-md-7 col-lg-9 vcenter\" vertical-align=\"baseline\">\n                                <button type=\"button\" (click)=\"check(document._id, i, 'whereQA')\" class=\"btn btn-success btn-md\" id=\"checkUnCheck\">\n                                    <div style=\"height:2em;border:1px\">\n                                        <span class=\"align-middle glyphicon glyphicon-ok\" vertical-align=\"bottom\" display=\"inline-block\"></span> Checked\n                                    </div>\n                                </button>\n                            </div>\n                            <div *ngIf=\"document.whereQAs[i].checked == false\" class=\"col-md-1 text-center\">\n                                <button type=\"button\" (click)=\"check(document._id, i, 'whereQA')\" class=\"btn btn-danger btn-md\" id=\"checkUnCheck\">\n                                    <span class=\"glyphicon glyphicon-remove\"></span> Unchecked\n                                </button>\n                            </div>\n                        </td>\n\n                        <td>\n                            <input type=\"text\" [(ngModel)]=\"document.whereQAs[i].question\" name=\"question\" class=\"input-question\">\n                        </td>\n                        <td>\n                            <input type=\"text\" [(ngModel)]=\"document.whereQAs[i].answer\" name=\"answer\" class=\"input-question\">\n                        </td>\n                        <td style=\"white-space: nowrap\">\n                            <form (submit)=\"editQA(document._id, i, whereQA.question, whereQA.answer, 'whereQA')\" class=\"form-buttons form-inline\">\n                                <button type=\"submit\" class=\"btn btn-default glyphicon glyphicon-floppy-disk\" id=\"saveDelete\">\n                                    Save\n                                </button>\n                            </form>\n\n                            <button type=\"button\" (click)=\"deleteQA(document._id, i, 'whereQA')\" class=\"btn btn-default glyphicon glyphicon-remove\" id=\"saveDelete\">\n                                Delete\n                            </button>\n\n                        </td>\n                    </tr>\n                </table>\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"addRow(document._id, 'whereQA')\">Add row</button>\n            </div>\n\n            <br>\n\n            <div>\n                <table class=\"table table-bordered table-hover table-condensed\">\n                    <th colspan=\"4\">\n                        <h3>Who-based Questions</h3>\n                    </th>\n                    <tr style=\"font-weight: bold\">\n                        <td style=\"width:0%\" align=\"center\">Checked</td>\n                        <td style=\"width:50%\" align=\"center\">Question</td>\n                        <td style=\"width:40%\" align=\"center\">Answer</td>\n                        <td style=\"width:0%\" align=\"center\">Edit</td>\n                    </tr>\n                    <tr *ngFor=\"let whoQA of document.whoQAs;let i = index;\">\n\n                        <td>\n                            <div *ngIf=\"document.whoQAs[i].checked == true\" id=\"wrapper\" class=\"col-xs-2 col-md-7 col-lg-9 vcenter\" vertical-align=\"baseline\">\n                                <button type=\"button\" (click)=\"check(document._id, i, 'whoQA')\" class=\"btn btn-success btn-md\" id=\"checkUnCheck\">\n                                    <div style=\"height:2em;border:1px\">\n                                        <span class=\"align-middle glyphicon glyphicon-ok\" vertical-align=\"bottom\" display=\"inline-block\"></span> Checked\n                                    </div>\n                                </button>\n                            </div>\n                            <div *ngIf=\"document.whoQAs[i].checked == false\" class=\"col-md-1 text-center\">\n                                <button type=\"button\" (click)=\"check(document._id, i, 'whoQA')\" class=\"btn btn-danger btn-md\" id=\"checkUnCheck\">\n                                    <span class=\"glyphicon glyphicon-remove\"></span> Unchecked\n                                </button>\n                            </div>\n                        </td>\n\n                        <td>\n                            <input type=\"text\" [(ngModel)]=\"document.whoQAs[i].question\" name=\"question\" class=\"input-question\">\n                        </td>\n                        <td>\n                            <input type=\"text\" [(ngModel)]=\"document.whoQAs[i].answer\" name=\"answer\" class=\"input-question\">\n                        </td>\n                        <td style=\"white-space: nowrap\">\n                            <form (submit)=\"editQA(document._id, i, whoQA.question, whoQA.answer, 'whoQA')\" class=\"form-buttons form-inline\">\n                                <button type=\"submit\" class=\"btn btn-default glyphicon glyphicon-floppy-disk\" id=\"saveDelete\">\n                                    Save\n                                </button>\n                            </form>\n\n                            <button type=\"button\" (click)=\"deleteQA(document._id, i, 'whoQA')\" class=\"btn btn-default glyphicon glyphicon-remove\" id=\"saveDelete\">\n                                Delete\n                            </button>\n\n                        </td>\n                    </tr>\n                </table>\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"addRow(document._id, 'whoQA')\">Add row</button>\n            </div>\n\n        </ng-container>\n\n    </div>\n\n    <br>\n\n</div>\n\n<div *ngIf=\"admin == false\">\n    <div ng-controller=\"EditableRowCtrl\">\n\n        <ng-container *ngFor=\"let document of documents; let z = index;\">\n\n            <br>\n\n            <h2>Document : {{document.name}}</h2>\n\n            <br>\n\n            <div>\n                <table class=\"table table-bordered table-hover table-condensed\">\n                    <th colspan=\"4\">\n                        <h3>When-based Questions</h3>\n                    </th>\n                    <tr style=\"font-weight: bold\">\n                        <td style=\"width:11%\" align=\"center\">Checked</td>\n                        <td style=\"width:75%\" align=\"center\">Question</td>\n                        <td style=\"width:18%\" align=\"center\">Answer</td>\n                    </tr>\n                    <tr *ngFor=\"let whenQA of document.whenQAs;let i = index;\">\n\n                        <td>\n                            <div *ngIf=\"document.whenQAs[i].checked == true\" id=\"wrapper\" class=\"col-xs-2 col-md-7 col-lg-9 vcenter\" vertical-align=\"baseline\">\n                                <div style=\"height:2em;border:1px\">\n                                    <span class=\"align-middle glyphicon glyphicon-ok\" vertical-align=\"bottom\" display=\"inline-block\"></span> Checked\n                                </div>\n                            </div>\n                            <div *ngIf=\"document.whenQAs[i].checked == false\" id=\"wrapper\" class=\"col-xs-2 col-md-7 col-lg-9 vcenter\" vertical-align=\"baseline\">\n                                <span class=\"glyphicon glyphicon-remove\" vertical-align=\"bottom\" display=\"inline-block\"></span> Unchecked\n                            </div>\n                        </td>\n\n                        <td>\n                            {{document.whenQAs[i].question}}\n                        </td>\n                        <td>\n                            {{document.whenQAs[i].answer}}\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <div>\n                <table class=\"table table-bordered table-hover table-condensed\">\n                    <th colspan=\"4\">\n                        <h3>Where-based Questions</h3>\n                    </th>\n                    <tr style=\"font-weight: bold\">\n                        <td style=\"width:11%\" align=\"center\">Checked</td>\n                        <td style=\"width:75%\" align=\"center\">Question</td>\n                        <td style=\"width:18%\" align=\"center\">Answer</td>\n                    </tr>\n                    <tr *ngFor=\"let whereQA of document.whereQAs;let i = index;\">\n\n                        <td>\n                            <div *ngIf=\"document.whereQAs[i].checked == true\" id=\"wrapper\" class=\"col-xs-2 col-md-7 col-lg-9 vcenter\" vertical-align=\"baseline\">\n                                <div style=\"height:2em;border:1px\">\n                                    <span class=\"align-middle glyphicon glyphicon-ok\" vertical-align=\"bottom\" display=\"inline-block\"></span> Checked\n                                </div>\n                            </div>\n                            <div *ngIf=\"document.whereQAs[i].checked == false\" id=\"wrapper\" class=\"col-xs-2 col-md-7 col-lg-9 vcenter\" vertical-align=\"baseline\">\n                                <span class=\"glyphicon glyphicon-remove\" vertical-align=\"bottom\" display=\"inline-block\"></span> Unchecked\n                            </div>\n                        </td>\n\n                        <td>\n                            {{document.whereQAs[i].question}}\n                        </td>\n                        <td>\n                            {{document.whereQAs[i].answer}}\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <div>\n                <table class=\"table table-bordered table-hover table-condensed\">\n                    <th colspan=\"4\">\n                        <h3>Who-based Questions</h3>\n                    </th>\n                    <tr style=\"font-weight: bold\">\n                        <td style=\"width:11%\" align=\"center\">Checked</td>\n                        <td style=\"width:50%\" align=\"center\">Question</td>\n                        <td style=\"width:50%\" align=\"center\">Answer</td>\n                    </tr>\n                    <tr *ngFor=\"let whoQA of document.whoQAs;let i = index;\">\n\n                        <td>\n                            <div *ngIf=\"document.whoQAs[i].checked == true\" id=\"wrapper\" class=\"col-xs-2 col-md-7 col-lg-9 vcenter\" vertical-align=\"baseline\">\n                                <div style=\"height:2em;border:1px\">\n                                    <span class=\"align-middle glyphicon glyphicon-ok\" vertical-align=\"bottom\" display=\"inline-block\"></span> Checked\n                                </div>\n                            </div>\n                            <div *ngIf=\"document.whoQAs[i].checked == false\" id=\"wrapper\" class=\"col-xs-2 col-md-7 col-lg-9 vcenter\" vertical-align=\"baseline\">\n                                <span class=\"glyphicon glyphicon-remove\" vertical-align=\"bottom\" display=\"inline-block\"></span> Unchecked\n                            </div>\n                        </td>\n\n                        <td>\n                            {{document.whoQAs[i].question}}\n                        </td>\n                        <td>\n                            {{document.whoQAs[i].answer}}\n                        </td>\n                    </tr>\n                </table>\n            </div>\n\n        </ng-container>\n\n    </div>\n</div>"

/***/ }),

/***/ 915:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(470);


/***/ })

},[915]);
//# sourceMappingURL=main.bundle.map