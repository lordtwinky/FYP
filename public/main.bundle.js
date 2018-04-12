webpackJsonp([1,4],{

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(570);
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




// import rest from 'rest';
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
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.createGroup = function (group) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3000/groups/create', group, {headers: headers})
        return this.http.post('groups/create', group, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3000/users/authenticate',user, {headers: headers})
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        // return this.http.get('http://localhost:3000/users/profile', {headers: headers})
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getallGroups = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        // return this.http.get('http://localhost:3000/groups/groupList', {headers: headers})
        return this.http.get('groups/groupList', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getQuestions = function (text) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:8000/', text, {headers: headers})
        return this.http.get('groups/myGroupList', { headers: headers })
            .map(function (res) { return res.text(); });
    };
    AuthService.prototype.createTopic = function (topic) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3000/topics/createTopic', topic, {headers: headers})
        return this.http.post('groups/create', topic, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.createDocument = function (document) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3000/documents/createDocument', document, {headers: headers})
        return this.http.post('groups/create', document, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getGroupPage = function (groupID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        // return this.http.post('http://localhost:3000/groups/grabGroup', groupID, {headers: headers})
        return this.http.post('groups/grabGroup', groupID, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getTopicPage = function (topicID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        // return this.http.post('http://localhost:3000/topics/grabTopic', topicID, {headers: headers})
        return this.http.post('topics/grabTopic', topicID, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.joinGroup = function (userGroupIDs) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        // return this.http.post('http://localhost:3000/groups/joinGroup', userGroupIDs, {headers: headers})
        return this.http.post('groups/joinGroup', userGroupIDs, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateDocumentEdit = function (docInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        // return this.http.put('http://localhost:3000/documents/updateDocumentEdit', docInfo, {headers: headers})
        return this.http.put('documents/updateDocument', docInfo, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateDocumentDelete = function (docInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        // return this.http.put('http://localhost:3000/documents/updateDocumentDelete', docInfo, {headers: headers})
        return this.http.put('documents/updateDocument', docInfo, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateDocumentAdd = function (docInfo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        // return this.http.put('http://localhost:3000/documents/updateDocumentAdd', docInfo, {headers: headers})
        return this.http.put('documents/updateDocument', docInfo, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.findGroupOfTopic = function (topicID) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        // return this.http.post('http://localhost:3000/topics/getGroupofTopic', topicID, {headers: headers})
        return this.http.post('topics/getGroupofTopic', topicID, { headers: headers })
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

/***/ 356:
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

/***/ 433:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 433;


/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(552);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/meanauthapp/angular-src/src/main.js.map

/***/ }),

/***/ 551:
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
            template: __webpack_require__(781),
            styles: [__webpack_require__(769)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/meanauthapp/angular-src/src/app.component.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_validate_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_home_home_component__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_question_generator_question_generator_component__ = __webpack_require__(561);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_groups_groups_component__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_group_page_group_page_component__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_topic_page_topic_page_component__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_filter_pipe__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_group_create_group_create_component__ = __webpack_require__(554);
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
    { path: '', component: __WEBPACK_IMPORTED_MODULE_15__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'QGTool', component: __WEBPACK_IMPORTED_MODULE_16__components_question_generator_question_generator_component__["a" /* QuestionGeneratorComponent */] },
    { path: 'Groups', component: __WEBPACK_IMPORTED_MODULE_17__components_groups_groups_component__["a" /* GroupsComponent */] },
    { path: 'GroupPage', component: __WEBPACK_IMPORTED_MODULE_18__components_group_page_group_page_component__["a" /* GroupPageComponent */] },
    { path: 'GroupPage/:id', component: __WEBPACK_IMPORTED_MODULE_18__components_group_page_group_page_component__["a" /* GroupPageComponent */] },
    { path: 'TopicPage/:id', component: __WEBPACK_IMPORTED_MODULE_19__components_topic_page_topic_page_component__["a" /* TopicPageComponent */] },
    { path: 'CreateGroup', component: __WEBPACK_IMPORTED_MODULE_21__components_group_create_group_create_component__["a" /* GroupCreateComponent */] }
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
                __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_question_generator_question_generator_component__["a" /* QuestionGeneratorComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_groups_groups_component__["a" /* GroupsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_group_page_group_page_component__["a" /* GroupPageComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_topic_page_topic_page_component__["a" /* TopicPageComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pipes_filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_21__components_group_create_group_create_component__["a" /* GroupCreateComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_20__pipes_filter_pipe__["a" /* FilterPipe */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/meanauthapp/angular-src/src/app.module.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(782),
            styles: [__webpack_require__(770)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/meanauthapp/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(20);
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
    }
    GroupCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settings = [];
        var setting1 = { id: 1, title: "Global", description: "Any user will be allowed to join, view and add to the group" };
        var setting2 = { id: 2, title: "Private", description: "New users may only join by first having been invited to the group by the admin." };
        this.settings.push(setting1, setting2);
        this.types = [];
        var type1 = { id: 1, name: "School", description: "The group is used by a school, university, college, etc." };
        var type2 = { id: 2, name: "Work", description: "The group is used by an organization, firm, corporation, etc. " };
        var type3 = { id: 3, name: "Self-learning", description: "The context of the group does not include a school or workplace." };
        var type4 = { id: 4, name: "Other", description: "The primary objective or context of the group fall outside of the previous options" };
        this.types.push(type1, type2, type3, type4);
        this.fields = [];
        var field1 = { id: 1, name: "Biology" };
        var field2 = { id: 2, name: "Chemistry" };
        var field3 = { id: 3, name: "Commerce" };
        var field4 = { id: 4, name: "Computer science" };
        var field5 = { id: 5, name: "Geography" };
        var field6 = { id: 6, name: "History" };
        var field7 = { id: 7, name: "Law" };
        var field8 = { id: 8, name: "Linguistics" };
        var field9 = { id: 9, name: "Literature" };
        var field10 = { id: 10, name: "Mathematics" };
        var field11 = { id: 11, name: "Physics" };
        var field12 = { id: 12, name: "Psychology" };
        var field13 = { id: 13, name: "Religion" };
        var field14 = { id: 14, name: "Science" };
        var field15 = { id: 15, name: "Sociology" };
        this.fields.push(field1, field2, field3, field4, field5, field6, field7, field8, field9, field10, field11, field12, field13, field14, field15);
        this.authService.getProfile().subscribe(function (profile) {
            _this.admin = profile.user._id;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    GroupCreateComponent.prototype.onCreateGroup = function () {
        var _this = this;
        var group = {
            name: this.name,
            admin: this.admin,
            setting: this.setting,
            type: this.type,
            school: this.school,
            organization: this.organization,
            fields: this.fieldsSelected,
        };
        this.authService.createGroup(group).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Group created successfully', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/GroupPage', data.groupID]);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    GroupCreateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-group-create',
            template: __webpack_require__(783),
            styles: [__webpack_require__(771)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], GroupCreateComponent);
    return GroupCreateComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/meanauthapp/angular-src/src/group-create.component.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(20);
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
        this.joinBool = true;
    }
    GroupPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.topics = [];
        this.route.params.subscribe(function (params) {
            _this.groupID = params['id'];
        });
        var groupI = {
            groupID: this.groupID
        };
        var groupIDd = this.groupID;
        this.authService.getGroupPage(groupI).subscribe(function (data) {
            _this.group = data.group;
            _this.topicIDs = data.group.topics;
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
            for (var i = 0; i < userGroups.length; i++) {
                if (userGroups[i] == groupIDd) {
                    _this.joinBool = false;
                }
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    GroupPageComponent.prototype.onCreateTopic = function () {
        var _this = this;
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
        this.name = "";
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
                _this.flashMessage.show('Group created successfully', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    GroupPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-group-page',
            template: __webpack_require__(784),
            styles: [__webpack_require__(772)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === 'function' && _e) || Object])
    ], GroupPageComponent);
    return GroupPageComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/meanauthapp/angular-src/src/group-page.component.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_filter_pipe__ = __webpack_require__(356);
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
    }
    GroupsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.admin = profile.user._id;
            _this.groupNamese = profile.groups;
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
            template: __webpack_require__(785),
            styles: [__webpack_require__(773)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__pipes_filter_pipe__["a" /* FilterPipe */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__pipes_filter_pipe__["a" /* FilterPipe */]) === 'function' && _f) || Object])
    ], GroupsComponent);
    return GroupsComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=C:/meanauthapp/angular-src/src/groups.component.js.map

/***/ }),

/***/ 557:
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
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(786),
            styles: [__webpack_require__(774)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=C:/meanauthapp/angular-src/src/home.component.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(44);
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
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(787),
            styles: [__webpack_require__(775)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/meanauthapp/angular-src/src/login.component.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(44);
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
            template: __webpack_require__(788),
            styles: [__webpack_require__(776)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/meanauthapp/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
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
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.groupNames = profile.groups;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(789),
            styles: [__webpack_require__(777)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/meanauthapp/angular-src/src/profile.component.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(44);
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




var nlp = __webpack_require__(573);
var http = __webpack_require__(429);
var util = __webpack_require__(825);
var https = __webpack_require__(742);
var JSZip = __webpack_require__(747);
var Docxtemplater = __webpack_require__(728);
var fs = __webpack_require__(754);
var path = __webpack_require__(764);
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
    QuestionGeneratorComponent.prototype.onGenerateQuestions = function (loggedIn) {
        var _this = this;
        if (this.inputText !== undefined) {
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
                if (loggedIn == true) {
                    if (_this.topic != undefined) {
                        var document = {
                            name: _this.name,
                            text: _this.inputText,
                            whoQAs: _this.whoQAs,
                            whereQAs: _this.whereQAs,
                            whenQAs: _this.whenQAs,
                            topicID: _this.topic
                        };
                        _this.authService.createDocument(document).subscribe(function (data) {
                            if (data.success) {
                                _this.flashMessage.show('Added document successfully', { cssClass: 'alert-success', timeout: 3000 });
                            }
                            else {
                                _this.flashMessage.show('Error adding document to topic', { cssClass: 'alert-danger', timeout: 3000 });
                            }
                        });
                    }
                }
            });
        }
    };
    QuestionGeneratorComponent.prototype.fileChanged = function (e) {
        this.file = e.target.files[0];
        this.fileURL = URL.createObjectURL(e.target.files[0]);
    };
    QuestionGeneratorComponent.prototype.uploadDocument = function () {
        // let fileReader = new FileReader();
        // fileReader.onload = (e) => {
        //   this.inputText = fileReader.result;
        //   console.log(fileReader.result);
        //   this.authService.getQuestions(fileReader.result).subscribe(data => {
        //   });
        // }
        // fileReader.readAsText(this.file);
        // // textract.fromFileWithPath(filePath, function( error, text ) {
        // // })
    };
    QuestionGeneratorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-question-generator',
            template: __webpack_require__(790),
            styles: [__webpack_require__(778)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], QuestionGeneratorComponent);
    return QuestionGeneratorComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/meanauthapp/angular-src/src/question-generator.component.js.map

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(20);
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
            name: this.name,
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
        //Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(791),
            styles: [__webpack_require__(779)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/meanauthapp/angular-src/src/register.component.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(20);
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
                console.log(data.foundGroup._id);
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
                console.log(data);
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
                console.log(data.foundGroup._id);
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
                console.log(data);
            }
        });
    };
    TopicPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-topic-page',
            template: __webpack_require__(792),
            styles: [__webpack_require__(780)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === 'function' && _e) || Object])
    ], TopicPageComponent);
    return TopicPageComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=C:/meanauthapp/angular-src/src/topic-page.component.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(24);
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

/***/ 565:
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

/***/ 769:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 770:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 771:
/***/ (function(module, exports) {

module.exports = "/* Style inputs, select elements and textareas */\r\ninput[type=text], select, textarea{\r\n    width: 100%;\r\n    padding: 12px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n    resize: vertical;\r\n  }\r\n  \r\n  /* Style the label to display next to the inputs */\r\n  label {\r\n    padding: 12px 12px 12px 0;\r\n    display: inline-block;\r\n  }\r\n  \r\n  /* Style the submit button */\r\n  input[type=submit] {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 12px 20px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    float: right;\r\n  }\r\n  \r\n  /* Style the container */\r\n  .container {\r\n    border-radius: 5px;\r\n    background-color: #f2f2f2;\r\n    padding: 20px;\r\n  }\r\n  \r\n  /* Floating column for labels: 25% width */\r\n  .col-25 {\r\n    float: left;\r\n    width: 25%;\r\n    margin-top: 6px;\r\n  }\r\n  \r\n  /* Floating column for inputs: 75% width */\r\n  .col-75 {\r\n    float: left;\r\n    width: 75%;\r\n    margin-top: 6px;\r\n  }\r\n  \r\n  /* Clear floats after the columns */\r\n  .row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  \r\n  /* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\r\n  @media (max-width: 600px) {\r\n    .col-25, .col-75, input[type=submit] {\r\n      width: 100%;\r\n      margin-top: 0;\r\n    }\r\n  }"

/***/ }),

/***/ 772:
/***/ (function(module, exports) {

module.exports = "/* Style inputs, select elements and textareas */\r\ninput[type=text], select, textarea{\r\n    width: 100%;\r\n    padding: 12px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n    resize: vertical;\r\n  }\r\n  \r\n  /* Style the label to display next to the inputs */\r\n  label {\r\n    padding: 12px 12px 12px 0;\r\n    display: inline-block;\r\n  }\r\n  \r\n  /* Style the submit button */\r\n  input[type=submit] {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 12px 20px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    float: right;\r\n  }\r\n  \r\n  /* Style the container */\r\n  .container {\r\n    border-radius: 5px;\r\n    background-color: #f2f2f2;\r\n    padding: 20px;\r\n  }\r\n  \r\n  /* Floating column for labels: 25% width */\r\n  .col-25 {\r\n    float: left;\r\n    width: 25%;\r\n    margin-top: 6px;\r\n  }\r\n  \r\n  /* Floating column for inputs: 75% width */\r\n  .col-75 {\r\n    float: left;\r\n    width: 75%;\r\n    margin-top: 6px;\r\n  }\r\n  \r\n  /* Clear floats after the columns */\r\n  .row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  \r\n  /* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */\r\n  @media (max-width: 600px) {\r\n    .col-25, .col-75, input[type=submit] {\r\n      width: 100%;\r\n      margin-top: 0;\r\n    }\r\n  }"

/***/ }),

/***/ 773:
/***/ (function(module, exports) {

module.exports = "body{\r\n\tfont:15px/1.3 'Open Sans', sans-serif;\r\n\tcolor: #5e5b64;\r\n\ttext-align:center;\r\n}\r\n\r\na, a:visited {\r\n\toutline:none;\r\n\tcolor:#389dc1;\r\n}\r\n\r\na:hover{\r\n\ttext-decoration:none;\r\n}\r\n\r\nsection, footer, header, aside, nav{\r\n\tdisplay: block;\r\n}\r\n\r\n\r\n/*-------------------------\r\n\tThe search input\r\n--------------------------*/\r\n\r\n\r\n.bar{\r\n\tbackground-color:#5c9bb7;\r\n\r\n\t/* background-image:-webkit-linear-gradient(top, #5c9bb7, #5392ad);\r\n\tbackground-image:-moz-linear-gradient(top, #5c9bb7, #5392ad);\r\n\tbackground-image:linear-gradient(top, #5c9bb7, #5392ad); */\r\n\r\n\tbox-shadow: 0 1px 1px #ccc;\r\n\tborder-radius: 2px;\r\n\twidth: 400px;\r\n\tpadding: 14px;\r\n\tmargin: 80px auto 20px;\r\n\tposition:relative;\r\n}\r\n\r\n.bar input{\r\n\tbackground:#fff no-repeat 13px 13px;\r\n\tbackground-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU5NEY0RTlFMTA4NzExRTM5RTEzQkFBQzMyRjkyQzVBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU5NEY0RTlGMTA4NzExRTM5RTEzQkFBQzMyRjkyQzVBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RTk0RjRFOUMxMDg3MTFFMzlFMTNCQUFDMzJGOTJDNUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RTk0RjRFOUQxMDg3MTFFMzlFMTNCQUFDMzJGOTJDNUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4DjA/RAAABK0lEQVR42pTSQUdEURjG8dOY0TqmPkGmRcqYD9CmzZAWJRHVRIa0iFYtM6uofYaiEW2SRJtEi9YxIklp07ZkWswu0v/wnByve7vm5ee8M+85zz1jbt9Os+WiGkYdYxjCOx5wgFeXUHmtBSzpcCGa+5BJTCjEP+0nKWAT8xqe4ArPGEEVC1hHEbs2oBwdXkM7mj/JLZrad437sCGHOfUtcziutuYu2v8XUFF/4f6vMK/YgAH1HxkBYV60AR31gxkBYd6xAeF3VzMCwvzOBpypX8V4yuFRzX2d2gD/l5yjH4fYQEnzkj4fae5rJulF2sMXVrAsaTWttRFu4Osb+1jEDT71/ZveyhouTch2fINQL9hKefKjuYFfuznXWzXMTabyrvfyIV3M4vhXgAEAUMs7K0J9UJAAAAAASUVORK5CYII=);\r\n\r\n\tborder: none;\r\n\twidth: 100%;\r\n\tline-height: 19px;\r\n\tpadding: 11px 0;\r\n\r\n\tborder-radius: 2px;\r\n\tbox-shadow: 0 2px 8px #c4c4c4 inset;\r\n\ttext-align: left;\r\n\tfont-size: 14px;\r\n\tfont-family: inherit;\r\n\tcolor: #738289;\r\n\tfont-weight: bold;\r\n\toutline: none;\r\n\ttext-indent: 40px;\r\n}\r\n\r\nul{\r\n\tlist-style: none;\r\n\twidth: 428px;\r\n\tmargin: 0 auto;\r\n\ttext-align: left;\r\n}\r\n\r\nul li{\r\n\tborder-bottom: 1px solid #ddd;\r\n\tpadding: 10px;\r\n\toverflow: hidden;\r\n}\r\n\r\nul li img{\r\n\twidth:60px;\r\n\theight:60px;\r\n\tfloat:left;\r\n\tborder:none;\r\n}\r\n\r\nul li p{\r\n\tmargin-left: 75px;\r\n\tfont-weight: bold;\r\n\tpadding-top: 12px;\r\n\tcolor:#6e7a7f;\r\n}"

/***/ }),

/***/ 774:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 775:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 776:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 777:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 778:
/***/ (function(module, exports) {

module.exports = "\r\n td {\r\n  border: 1px solid grey;\r\n  border-collapse: collapse;\r\n  padding: 5px;\r\n}\r\n\r\ntable tr:nth-child(odd) {\r\n    background-color: #ffffff;\r\n}\r\ntable tr:nth-child(even) {\r\n  background-color: #ffffff;\r\n}\r\ntextarea {\r\n    resize: none;\r\n }\r\n\r\n input[type=button]\r\n {\r\n   background-color: rgb(131, 46, 165); \r\n }\r\n "

/***/ }),

/***/ 779:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 780:
/***/ (function(module, exports) {

module.exports = "input[type=text], select, textarea{\r\n    width: 100%;\r\n    padding: 12px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n    resize: vertical;\r\n  }\r\n\r\n  button{\r\n    vertical-align: baseline;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    line-height: 16px;\r\n  }\r\n\r\n  #checkUnCheck{\r\n    vertical-align: baseline;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    line-height: 30px;\r\n  }\r\n\r\n  #wrapper {\r\n    width: 100%;\r\n    height: 43px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n  }\r\n  \r\n  #saveDelete {\r\n    vertical-align: baseline;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    line-height: 9px;\r\n  }\r\n\r\n  th{\r\n    text-align: center;\r\n    height: 25px;\r\n    vertical-align: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    background-color: #ffffff;\r\n    vertical-align: middle;\r\n    border: 1px solid rgb(66, 63, 63)\r\n  } \r\n\r\n  h3 {\r\n    font-size: 1.9em;\r\n    vertical-align: middle;\r\n  }\r\n\r\n  button:disabled,\r\n  button[disabled]{\r\n    border: 1px solid #999999;\r\n    background-color: #cccccc;\r\n    color: #666666;\r\n  }\r\n\r\n  button:hover {\r\n    border: 1px solid #0099cc;\r\n    background-color: #00aacc;\r\n    color: #ffffff;\r\n    padding: 5px 10px;\r\n    background-position: 0px;\r\n  }\r\n"

/***/ }),

/***/ 781:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ 782:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n<h1> Welcome {{user.name}}</h1>\n</div>"

/***/ }),

/***/ 783:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Create new group</h2>\n<form (submit)=\"onCreateGroup()\">\n  <div class=\"group-name\">\n    <label>Group name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"input-name\">\n  </div>\n  <div class=\"group-setting\">\n      <label for=\"setting\">Privacy setting</label>\n      <select [(ngModel)]=\"setting\" name=\"setting\" class=\"select-privacy\" id=\"setting\" required>\n        <option *ngFor=\"let setting of settings\" [value]=\"setting.id\">{{setting.title}}</option>\n      </select>\n  </div>\n  <div class=\"group-type\">\n      <label for=\"type\">Type</label>\n      <select [(ngModel)]=\"type\" name=\"type\" class=\"select-group\" id=\"type\" required>\n        <option *ngFor=\"let type of types\" [value]=\"type.id\">{{type.name}}</option>\n      </select>\n  </div>\n  <div class=\"group-school\">\n      <label>School name</label>\n      <input type=\"text\" [(ngModel)]=\"school\" name=\"school\" class=\"input-school\">\n  </div>\n  <div class=\"group-organization\">\n      <label>Organization name</label>\n      <input type=\"text\" [(ngModel)]=\"organization\" name=\"organization\" class=\"input-organization\">\n  </div>\n  <div class=\"group-fields\">\n      <label for=\"fields\">Fields of interest</label>\n      <select multiple [(ngModel)]=\"fieldsSelected\" name=\"fields\" class=\"select-fields\" id=\"type\" required>\n        <option *ngFor=\"let field of fields\" [value]=\"field.id\">{{field.name}}</option>\n      </select>\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form> \n\n"

/***/ }),

/***/ 784:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"group\">\n  <h2 class=\"page=header\">Welcome to the Group:</h2>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">Name: {{group.name}}</li>\n    </ul>\n</div>\n\n<h2 class=\"page=header\">All topics:</h2>\n<div *ngFor=\"let topic of topics\">\n  <ul class=\"list-group\">\n      <a [routerLink]=\"['/TopicPage', topic._id]\">\n        <span>{{topic.name}}</span>\n      </a>\n    </ul>\n</div>\n\n\n<h2 class=\"page-header\">Create new Topic</h2>\n<form (submit)=\"onCreateTopic()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n\n<div *ngIf=\"joinBool==true\">\n<h2 class=\"page-header\">Join this group</h2>\n<form (submit)=\"joinGroup()\">\n  <div class=\"join-group\">\n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Join\">\n  </div>\n</form>\n</div>"

/***/ }),

/***/ 785:
/***/ (function(module, exports) {

module.exports = "<div class=\"bar\">\n  <form id=\"search\">\n    <label> Search: </label>\n    <input type=\"text\" [(ngModel)]=\"term\" name=\"term\"/>\n  </form>\n</div>\n  <ul id=\"group-listing\">\n    <li *ngFor=\"let group of groupNames | filter:term\">\n      <div class=\"single-group\">\n        \n        <a [routerLink]=\"['/GroupPage', group._id]\">\n          <span>{{group.name}}</span>\n        </a>\n      </div>\n    </li>\n  </ul>\n"

/***/ }),

/***/ 786:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n    <h1>Question generation App</h1>\n      <p class=\"lead\"> Welcome to Question generation application</p>\n\n      <div>\n        \n        <!-- <a class=\"btn btn-default\" [routerLink]=\"['/login']\"> Login </a> -->\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <h3> Create groups </h3>\n          <p> Share documents, questions and ideas </p>\n        </div>\n        <div class=\"col-md-4\">\n          <h3> Register </h3>\n          <p> Create an account to access all features</p>\n          <!-- <a class=\"btn btn-primary\" [routerLink]=\"['/register']\"> Register </a> -->\n        </div>\n        <div class=\"col-md-4\">\n          <h3> Simply use the tool</h3>\n          <p> Generate questions with the tool</p>\n        </div>\n      </div>\n      \n</div>"

/***/ }),

/***/ 787:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>\n"

/***/ }),

/***/ 788:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\">QG Tool</a>\n        </div>\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav navbar-left\">\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/']\">Home</a></li>\n          </ul>\n\n          <ul class=\"nav navbar-nav navbar-right\">\n            <!-- <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Dashboard</a></li> -->\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/profile']\">Profile</a></li>\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/QGTool']\">QG Tool</a></li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/CreateGroup']\">Create a Group</a></li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/Groups']\">Browse Groups</a></li>\n\n\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n            <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/register']\">Register</a></li>\n            <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n          </ul>\n        </div><!--/.nav-collapse -->\n      </div>\n    </nav>"

/***/ }),

/***/ 789:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page=header\">Your account details:</h2>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">Username: {{user.username}}</li>\n      <li class=\"list-group-item\">Name: {{user.name}}</li>\n      <li class=\"list-group-item\">Email: {{user.email}}</li>\n    </ul>\n</div>\n\n<h2 class=\"page=header\">Your groups:</h2>\n<div *ngFor=\"let group of groupNames\">\n  <ul class=\"list-group\">\n      <li class=\"list-group-item\">  Name: {{group}}</li>\n\n    </ul>\n</div>\n \n "

/***/ }),

/***/ 790:
/***/ (function(module, exports) {

module.exports = "<script src=\"docxtemplater.js\"></script>\r\n<script src=\"jszip.js\"></script>\r\n<script src=\"vendor/file-saver.min.js\"></script>\r\n<script src=\"vendor/jszip-utils.js\"></script>\r\n\r\n<h2 align=\"center\">Question Generation Tool</h2>\r\n\r\n<br>\r\n<div *ngIf=\"loggedIn == true\">\r\n\r\n    <div class=\"well\">\r\n        <form (submit)=\"onGenerateQuestions(loggedIn)\" id=\"generate\" align=\"right\">\r\n            <div class=\"form-textArea\">\r\n                <textarea [(ngModel)]=\"inputText\" name=\"inputText\" rows=\"35\" cols=\"154\" class=\"form-control\" align=\"right\"></textarea>\r\n            </div>\r\n            <div class=\"dropdownTopics\">\r\n                <label for=\"topic\">Topic</label>\r\n                <select [(ngModel)]=\"topic\" name=\"topic\" class=\"select-privacy\" id=\"topic\" required>\r\n                    <option *ngFor=\"let topic of topics\" [value]=\"topic._id\">{{topic.name}}</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"docName\">\r\n                <label>Document name</label>\r\n                <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"input-name\">\r\n            </div>\r\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" align=\"right\">\r\n        </form>\r\n    </div>\r\n    <br>\r\n\r\n    <h2>Drop File</h2>\r\n    <div class=\"Block\">\r\n        <label id=\"lbl\">Code </label>\r\n        <input type='file' (change)=\"fileChanged($event)\">\r\n\r\n    </div>\r\n    <button (click)=\"uploadDocument()\">View contents of file</button>\r\n\r\n   \r\n\r\n\r\n\r\n</div>\r\n\r\n<div *ngIf=\"loggedIn == false\">\r\n\r\n    <div class=\"well\">\r\n        <form (submit)=\"onGenerateQuestions(loggedIn)\" id=\"generate\" align=\"right\">\r\n            <div class=\"form-textArea\">\r\n                <textarea [(ngModel)]=\"inputText\" name=\"inputText\" rows=\"35\" cols=\"154\" class=\"form-control\" align=\"right\"></textarea>\r\n            </div>\r\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" align=\"right\">\r\n        </form>\r\n    </div>\r\n    <br>\r\n</div>\r\n\r\n<table>\r\n    <div *ngIf=\"whoQ\">\r\n        <h3>Who-based Questions</h3>\r\n    </div>\r\n    <ng-container *ngFor=\"let QAs of whoQAs\">\r\n        <tr>\r\n            <td title=\"'Question'\">{{QAs.question}}</td>\r\n            <td title=\"'Answer'\">{{QAs.answer}}</td>\r\n        </tr>\r\n    </ng-container>\r\n</table>\r\n\r\n<br>\r\n\r\n<table>\r\n    <div *ngIf=\"whereQ\">\r\n        <h3>Where-based Questions</h3>\r\n    </div>\r\n    <ng-container *ngFor=\"let QAs of whereQAs\">\r\n        <tr>\r\n            <td>{{QAs.question}}</td>\r\n            <td>{{QAs.answer}}</td>\r\n        </tr>\r\n    </ng-container>\r\n</table>\r\n\r\n<br>\r\n\r\n<table>\r\n    <div *ngIf=\"whenQ\">\r\n        <h3>When-based Questions</h3>\r\n    </div>\r\n    <ng-container *ngFor=\"let QAs of whenQAs\">\r\n        <tr>\r\n            <td>{{QAs.question}}</td>\r\n            <td>{{QAs.answer}}</td>\r\n        </tr>\r\n    </ng-container>\r\n</table>\r\n\r\n<br>"

/***/ }),

/***/ 791:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n"

/***/ }),

/***/ 792:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"topic\">\n    <h1 class=\"page=header\">Topic : {{topic.name}}</h1>\n</div>\n\n<!-- if the admin of the group is viewing the page -->\n<div *ngIf=\"admin == true\">\n\n    <div ng-controller=\"EditableRowCtrl\">\n\n        <ng-container *ngFor=\"let document of documents; let z = index;\">\n\n            <br>\n\n            <h2>Document : {{document.name}}</h2>\n\n            <br>\n\n            <div>\n                <table class=\"table table-bordered table-hover table-condensed\">\n                    <th colspan=\"4\">\n                        <h3>When-based Questions</h3>\n                    </th>\n                    <tr style=\"font-weight: bold\">\n                        <td style=\"width:0%\" align=\"center\">Checked</td>\n                        <td style=\"width:75%\" align=\"center\">Question</td>\n                        <td style=\"width:18%\" align=\"center\">Answer</td>\n                        <td style=\"width:0%\" align=\"center\">Edit</td>\n                    </tr>\n                    <tr *ngFor=\"let whenQA of document.whenQAs;let i = index;\">\n\n                        <td>\n                            <div *ngIf=\"document.whenQAs[i].checked == true\" id=\"wrapper\" class=\"col-xs-2 col-md-7 col-lg-9 vcenter\" vertical-align=\"baseline\">\n                                <button type=\"button\" (click)=\"check(document._id, i, 'whenQA')\" class=\"btn btn-success btn-md\" id=\"checkUnCheck\">\n                                    <div style=\"height:2em;border:1px\">\n                                        <span class=\"align-middle glyphicon glyphicon-ok\" vertical-align=\"bottom\" display=\"inline-block\"></span> Checked\n                                    </div>\n                                </button>\n                            </div>\n                            <div *ngIf=\"document.whenQAs[i].checked == false\" class=\"col-md-1 text-center\">\n                                <button type=\"button\" (click)=\"check(document._id, i, 'whenQA')\" class=\"btn btn-danger btn-md\" id=\"checkUnCheck\">\n                                    <span class=\"glyphicon glyphicon-remove\"></span> Unchecked\n                                </button>\n                            </div>\n                        </td>\n\n                        <td>\n                            <input type=\"text\" [(ngModel)]=\"document.whenQAs[i].question\" name=\"question\" class=\"input-question\">\n                        </td>\n                        <td>\n                            <input type=\"text\" [(ngModel)]=\"document.whenQAs[i].answer\" name=\"answer\" class=\"input-question\">\n                        </td>\n                        <td style=\"white-space: nowrap\">\n                            <form (submit)=\"editQA(document._id, i, whenQA.question, whenQA.answer, 'whenQA')\" class=\"form-buttons form-inline\">\n                                <button type=\"submit\" class=\"btn btn-default glyphicon glyphicon-floppy-disk\" id=\"saveDelete\">\n                                    Save\n                                </button>\n                            </form>\n\n                            <button type=\"button\" (click)=\"deleteQA(document._id, i, 'whenQA')\" class=\"btn btn-default glyphicon glyphicon-remove\" id=\"saveDelete\">\n                                Delete\n                            </button>\n\n                        </td>\n                    </tr>\n                </table>\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"addRow(document._id, 'whenQA')\">Add row</button>\n            </div>\n\n            <br>\n\n            <div>\n                <table class=\"table table-bordered table-hover table-condensed\">\n                    <th colspan=\"4\">\n                        <h3>Where-based Questions</h3>\n                    </th>\n                    <tr style=\"font-weight: bold\">\n                        <td style=\"width:0%\" align=\"center\">Checked</td>\n                        <td style=\"width:75%\" align=\"center\">Question</td>\n                        <td style=\"width:18%\" align=\"center\">Answer</td>\n                        <td style=\"width:0%\" align=\"center\">Edit</td>\n                    </tr>\n                    <tr *ngFor=\"let whereQA of document.whereQAs;let i = index;\">\n\n                        <td>\n                            <div *ngIf=\"document.whereQAs[i].checked == true\" id=\"wrapper\" class=\"col-xs-2 col-md-7 col-lg-9 vcenter\" vertical-align=\"baseline\">\n                                <button type=\"button\" (click)=\"check(document._id, i, 'whereQA')\" class=\"btn btn-success btn-md\" id=\"checkUnCheck\">\n                                    <div style=\"height:2em;border:1px\">\n                                        <span class=\"align-middle glyphicon glyphicon-ok\" vertical-align=\"bottom\" display=\"inline-block\"></span> Checked\n                                    </div>\n                                </button>\n                            </div>\n                            <div *ngIf=\"document.whereQAs[i].checked == false\" class=\"col-md-1 text-center\">\n                                <button type=\"button\" (click)=\"check(document._id, i, 'whereQA')\" class=\"btn btn-danger btn-md\" id=\"checkUnCheck\">\n                                    <span class=\"glyphicon glyphicon-remove\"></span> Unchecked\n                                </button>\n                            </div>\n                        </td>\n\n                        <td>\n                            <input type=\"text\" [(ngModel)]=\"document.whereQAs[i].question\" name=\"question\" class=\"input-question\">\n                        </td>\n                        <td>\n                            <input type=\"text\" [(ngModel)]=\"document.whereQAs[i].answer\" name=\"answer\" class=\"input-question\">\n                        </td>\n                        <td style=\"white-space: nowrap\">\n                            <form (submit)=\"editQA(document._id, i, whereQA.question, whereQA.answer, 'whereQA')\" class=\"form-buttons form-inline\">\n                                <button type=\"submit\" class=\"btn btn-default glyphicon glyphicon-floppy-disk\" id=\"saveDelete\">\n                                    Save\n                                </button>\n                            </form>\n\n                            <button type=\"button\" (click)=\"deleteQA(document._id, i, 'whereQA')\" class=\"btn btn-default glyphicon glyphicon-remove\" id=\"saveDelete\">\n                                Delete\n                            </button>\n\n                        </td>\n                    </tr>\n                </table>\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"addRow(document._id, 'whereQA')\">Add row</button>\n            </div>\n\n            <br>\n\n            <div>\n                <table class=\"table table-bordered table-hover table-condensed\">\n                    <th colspan=\"4\">\n                        <h3>Who-based Questions</h3>\n                    </th>\n                    <tr style=\"font-weight: bold\">\n                        <td style=\"width:0%\" align=\"center\">Checked</td>\n                        <td style=\"width:50%\" align=\"center\">Question</td>\n                        <td style=\"width:40%\" align=\"center\">Answer</td>\n                        <td style=\"width:0%\" align=\"center\">Edit</td>\n                    </tr>\n                    <tr *ngFor=\"let whoQA of document.whoQAs;let i = index;\">\n\n                        <td>\n                            <div *ngIf=\"document.whoQAs[i].checked == true\" id=\"wrapper\" class=\"col-xs-2 col-md-7 col-lg-9 vcenter\" vertical-align=\"baseline\">\n                                <button type=\"button\" (click)=\"check(document._id, i, 'whoQA')\" class=\"btn btn-success btn-md\" id=\"checkUnCheck\">\n                                    <div style=\"height:2em;border:1px\">\n                                        <span class=\"align-middle glyphicon glyphicon-ok\" vertical-align=\"bottom\" display=\"inline-block\"></span> Checked\n                                    </div>\n                                </button>\n                            </div>\n                            <div *ngIf=\"document.whoQAs[i].checked == false\" class=\"col-md-1 text-center\">\n                                <button type=\"button\" (click)=\"check(document._id, i, 'whoQA')\" class=\"btn btn-danger btn-md\" id=\"checkUnCheck\">\n                                    <span class=\"glyphicon glyphicon-remove\"></span> Unchecked\n                                </button>\n                            </div>\n                        </td>\n\n                        <td>\n                            <input type=\"text\" [(ngModel)]=\"document.whoQAs[i].question\" name=\"question\" class=\"input-question\">\n                        </td>\n                        <td>\n                            <input type=\"text\" [(ngModel)]=\"document.whoQAs[i].answer\" name=\"answer\" class=\"input-question\">\n                        </td>\n                        <td style=\"white-space: nowrap\">\n                            <form (submit)=\"editQA(document._id, i, whoQA.question, whoQA.answer, 'whoQA')\" class=\"form-buttons form-inline\">\n                                <button type=\"submit\" class=\"btn btn-default glyphicon glyphicon-floppy-disk\" id=\"saveDelete\">\n                                    Save\n                                </button>\n                            </form>\n\n                            <button type=\"button\" (click)=\"deleteQA(document._id, i, 'whoQA')\" class=\"btn btn-default glyphicon glyphicon-remove\" id=\"saveDelete\">\n                                Delete\n                            </button>\n\n                        </td>\n                    </tr>\n                </table>\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"addRow(document._id, 'whoQA')\">Add row</button>\n            </div>\n\n        </ng-container>\n\n    </div>\n\n    <br>\n\n</div>\n\n<div *ngIf=\"admin == false\">\n    <div ng-controller=\"EditableRowCtrl\">\n\n        <ng-container *ngFor=\"let document of documents; let z = index;\">\n\n            <br>\n\n            <h2>Document : {{document.name}}</h2>\n\n            <br>\n\n            <div>\n                <table class=\"table table-bordered table-hover table-condensed\">\n                    <th colspan=\"4\">\n                        <h3>When-based Questions</h3>\n                    </th>\n                    <tr style=\"font-weight: bold\">\n                        <td style=\"width:11%\" align=\"center\">Checked</td>\n                        <td style=\"width:75%\" align=\"center\">Question</td>\n                        <td style=\"width:18%\" align=\"center\">Answer</td>\n                    </tr>\n                    <tr *ngFor=\"let whenQA of document.whenQAs;let i = index;\">\n\n                        <td>\n                            <div *ngIf=\"document.whenQAs[i].checked == true\" id=\"wrapper\" class=\"col-xs-2 col-md-7 col-lg-9 vcenter\" vertical-align=\"baseline\">\n                                <div style=\"height:2em;border:1px\">\n                                    <span class=\"align-middle glyphicon glyphicon-ok\" vertical-align=\"bottom\" display=\"inline-block\"></span> Checked\n                                </div>\n                            </div>\n                            <div *ngIf=\"document.whenQAs[i].checked == false\" id=\"wrapper\" class=\"col-xs-2 col-md-7 col-lg-9 vcenter\" vertical-align=\"baseline\">\n                                <span class=\"glyphicon glyphicon-remove\" vertical-align=\"bottom\" display=\"inline-block\"></span> Unchecked\n                            </div>\n                        </td>\n\n                        <td>\n                            {{document.whenQAs[i].question}}\n                        </td>\n                        <td>\n                            {{document.whenQAs[i].answer}}\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <div>\n                <table class=\"table table-bordered table-hover table-condensed\">\n                    <th colspan=\"4\">\n                        <h3>Where-based Questions</h3>\n                    </th>\n                    <tr style=\"font-weight: bold\">\n                        <td style=\"width:11%\" align=\"center\">Checked</td>\n                        <td style=\"width:75%\" align=\"center\">Question</td>\n                        <td style=\"width:18%\" align=\"center\">Answer</td>\n                    </tr>\n                    <tr *ngFor=\"let whereQA of document.whereQAs;let i = index;\">\n\n                        <td>\n                            <div *ngIf=\"document.whereQAs[i].checked == true\" id=\"wrapper\" class=\"col-xs-2 col-md-7 col-lg-9 vcenter\" vertical-align=\"baseline\">\n                                <div style=\"height:2em;border:1px\">\n                                    <span class=\"align-middle glyphicon glyphicon-ok\" vertical-align=\"bottom\" display=\"inline-block\"></span> Checked\n                                </div>\n                            </div>\n                            <div *ngIf=\"document.whereQAs[i].checked == false\" id=\"wrapper\" class=\"col-xs-2 col-md-7 col-lg-9 vcenter\" vertical-align=\"baseline\">\n                                <span class=\"glyphicon glyphicon-remove\" vertical-align=\"bottom\" display=\"inline-block\"></span> Unchecked\n                            </div>\n                        </td>\n\n                        <td>\n                            {{document.whereQAs[i].question}}\n                        </td>\n                        <td>\n                            {{document.whereQAs[i].answer}}\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <div>\n                <table class=\"table table-bordered table-hover table-condensed\">\n                    <th colspan=\"4\">\n                        <h3>Who-based Questions</h3>\n                    </th>\n                    <tr style=\"font-weight: bold\">\n                        <td style=\"width:11%\" align=\"center\">Checked</td>\n                        <td style=\"width:50%\" align=\"center\">Question</td>\n                        <td style=\"width:50%\" align=\"center\">Answer</td>\n                    </tr>\n                    <tr *ngFor=\"let whoQA of document.whoQAs;let i = index;\">\n\n                        <td>\n                            <div *ngIf=\"document.whoQAs[i].checked == true\" id=\"wrapper\" class=\"col-xs-2 col-md-7 col-lg-9 vcenter\" vertical-align=\"baseline\">\n                                <div style=\"height:2em;border:1px\">\n                                    <span class=\"align-middle glyphicon glyphicon-ok\" vertical-align=\"bottom\" display=\"inline-block\"></span> Checked\n                                </div>\n                            </div>\n                            <div *ngIf=\"document.whoQAs[i].checked == false\" id=\"wrapper\" class=\"col-xs-2 col-md-7 col-lg-9 vcenter\" vertical-align=\"baseline\">\n                                <span class=\"glyphicon glyphicon-remove\" vertical-align=\"bottom\" display=\"inline-block\"></span> Unchecked\n                            </div>\n                        </td>\n\n                        <td>\n                            {{document.whoQAs[i].question}}\n                        </td>\n                        <td>\n                            {{document.whoQAs[i].answer}}\n                        </td>\n                    </tr>\n                </table>\n            </div>\n\n        </ng-container>\n\n    </div>\n</div>"

/***/ }),

/***/ 831:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(434);


/***/ }),

/***/ 89:
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
        if (user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined) {
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

/***/ })

},[831]);
//# sourceMappingURL=main.bundle.map