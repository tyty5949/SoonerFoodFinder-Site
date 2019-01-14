(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cta {\n  background: url('ou.jpg') fixed 0 -20vw;\n  background-size: 200%;\n  width: 100%;\n}\n\n.cta h1 {\n  font-family: 'Ubuntu Light', sans-serif;\n  font-weight: normal;\n  font-size: 3em;\n  margin: 0 0;\n  padding: 5vh 0 0 5vw;\n}\n\n@media (min-width: 855px) {\n  .cta {\n    background-size: 100%;\n    padding: 0 0 2.5vh 0;\n  }\n\n  .cta-content {\n    width: 100%;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"cta\">\n    <h1>Find Food Now!</h1>\n    <app-post-search-form></app-post-search-form>\n  </div>\n  <app-post-card-container></app-post-card-container>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'SFF-Front-End';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _post_search_form_post_search_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-search-form/post-search-form.component */ "./src/app/post-search-form/post-search-form.component.ts");
/* harmony import */ var _dropdown_list_dropdown_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dropdown-list/dropdown-list.component */ "./src/app/dropdown-list/dropdown-list.component.ts");
/* harmony import */ var _selection_bar_selection_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./selection-bar/selection-bar.component */ "./src/app/selection-bar/selection-bar.component.ts");
/* harmony import */ var _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./post-card/post-card.component */ "./src/app/post-card/post-card.component.ts");
/* harmony import */ var _post_card_container_post_card_container_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./post-card-container/post-card-container.component */ "./src/app/post-card-container/post-card-container.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _post_search_form_post_search_form_component__WEBPACK_IMPORTED_MODULE_6__["PostSearchFormComponent"],
                _dropdown_list_dropdown_list_component__WEBPACK_IMPORTED_MODULE_7__["DropdownListComponent"],
                _selection_bar_selection_bar_component__WEBPACK_IMPORTED_MODULE_8__["SelectionBarComponent"],
                _post_card_post_card_component__WEBPACK_IMPORTED_MODULE_9__["PostCardComponent"],
                _post_card_container_post_card_container_component__WEBPACK_IMPORTED_MODULE_10__["PostCardContainerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dropdown-list/dropdown-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/dropdown-list/dropdown-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-button {\n  background-color: #FFFFFF;\n  font-family: \"Ubuntu Light\", sans-serif;\n  font-weight: normal;\n  color: #292929;\n  height: 6vh;\n  font-size: 1.25em;\n  border: 1px solid #9d9d9d;\n  cursor: pointer;\n  min-width: 200px;\n  outline: none;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.dropdown-button-text {\n  margin: 0 0;\n  width: 175px;\n}\n\n.dropdown-button img {\n  -webkit-transform: scale(.6) translateY(1px);\n          transform: scale(.6) translateY(1px);\n}\n\n.dropdown-button:hover, .dropdown-button:focus {\n  background-color: #f1f1f1;\n}\n\n.container {\n  position: relative;\n  display: inline-block;\n}\n\n.dropdown-list {\n  overflow: visible;\n  position: absolute;\n  background-color: #FFFFFF;\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n  z-index: 1;\n  min-width: 200px;\n}\n\n.dropdown-list button {\n  color: black;\n  background-color: #FFFFFF;\n  font-family: \"Ubuntu\", sans-serif;\n  min-width: 200px;\n  text-align: left;\n  padding: 1em 1.5em;\n  display: block;\n  border: none;\n  cursor: pointer;\n  outline: none;\n}\n\n.dropdown-list button:hover {\n  background-color: #ddd\n}\n"

/***/ }),

/***/ "./src/app/dropdown-list/dropdown-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/dropdown-list/dropdown-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <button id=\"dropdown-button-{{_id}}\" class=\"dropdown-button dropdown-button-{{_id}}\">\n    <p class=\"dropdown-button-text dropdown-button-{{_id}}\">{{_selectedItem.name}}</p>\n    <img class=\"dropdown-button-{{_id}}\" src=\"../../assets/img/updownarrow.png\">\n  </button>\n\n  <div id=\"dropdown-list-{{_id}}\" class=\"dropdown-list\" style=\"display: none\">\n    <button\n      id=\"{{item.id}}\"\n      (click)=\"onListItemClick($event)\"\n      *ngFor=\"let item of _dropdownItems\">{{item.name}}</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/dropdown-list/dropdown-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dropdown-list/dropdown-list.component.ts ***!
  \**********************************************************/
/*! exports provided: DropdownListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownListComponent", function() { return DropdownListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownListComponent = /** @class */ (function () {
    function DropdownListComponent() {
        this.selectedItemEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(DropdownListComponent.prototype, "dropdownItems", {
        set: function (value) {
            this._dropdownItems = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownListComponent.prototype, "id", {
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropdownListComponent.prototype, "defaultSelected", {
        set: function (index) {
            this._selectedItem = this._dropdownItems[index];
        },
        enumerable: true,
        configurable: true
    });
    DropdownListComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.addEventListener('click', function (event) {
            var target = event.target;
            if (target.classList.contains('dropdown-button-' + _this._id)) {
                _this.onClick();
            }
            else {
                _this.onFocusOut();
            }
        });
    };
    DropdownListComponent.prototype.onClick = function () {
        this.showList();
    };
    DropdownListComponent.prototype.onFocusOut = function () {
        this.hideList();
    };
    DropdownListComponent.prototype.onListItemClick = function (e) {
        var clickedId = Number(e.srcElement.id);
        this._selectedItem = this._dropdownItems.find(function (item) { return item.id === clickedId; });
        this.updateSelectedItem();
        this.hideList();
    };
    DropdownListComponent.prototype.hideList = function () {
        this.setListDisplay('none');
    };
    DropdownListComponent.prototype.showList = function () {
        this.setListDisplay('inline');
    };
    DropdownListComponent.prototype.setListDisplay = function (display) {
        document.getElementById('dropdown-list-' + this._id).style.display = display;
    };
    DropdownListComponent.prototype.updateSelectedItem = function () {
        var element = document.getElementById('dropdown-button-' + this._id);
        element.children.item(0).innerHTML = this._selectedItem.name;
        this.selectedItemEmitter.emit(this._selectedItem);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DropdownListComponent.prototype, "selectedItemEmitter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DropdownListComponent.prototype, "dropdownItems", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DropdownListComponent.prototype, "id", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DropdownListComponent.prototype, "defaultSelected", null);
    DropdownListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dropdown-list',
            template: __webpack_require__(/*! ./dropdown-list.component.html */ "./src/app/dropdown-list/dropdown-list.component.html"),
            styles: [__webpack_require__(/*! ./dropdown-list.component.css */ "./src/app/dropdown-list/dropdown-list.component.css")]
        })
    ], DropdownListComponent);
    return DropdownListComponent;
}());



/***/ }),

/***/ "./src/app/mocks/mock-post-free-types.ts":
/*!***********************************************!*\
  !*** ./src/app/mocks/mock-post-free-types.ts ***!
  \***********************************************/
/*! exports provided: FREE_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FREE_TYPES", function() { return FREE_TYPES; });
/* harmony import */ var _search_metadata_post_free_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../search-metadata/post-free-type */ "./src/app/search-metadata/post-free-type.ts");

var FREE_TYPES = [
    new _search_metadata_post_free_type__WEBPACK_IMPORTED_MODULE_0__["PostFreeType"](1, 'Any'),
    new _search_metadata_post_free_type__WEBPACK_IMPORTED_MODULE_0__["PostFreeType"](2, 'Free Only'),
    new _search_metadata_post_free_type__WEBPACK_IMPORTED_MODULE_0__["PostFreeType"](3, 'Paid Only'),
    new _search_metadata_post_free_type__WEBPACK_IMPORTED_MODULE_0__["PostFreeType"](4, 'Stipulation')
];


/***/ }),

/***/ "./src/app/mocks/mock-post-locations.ts":
/*!**********************************************!*\
  !*** ./src/app/mocks/mock-post-locations.ts ***!
  \**********************************************/
/*! exports provided: LOCATIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCATIONS", function() { return LOCATIONS; });
/* harmony import */ var _search_metadata_post_location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../search-metadata/post-location */ "./src/app/search-metadata/post-location.ts");

var LOCATIONS = [
    new _search_metadata_post_location__WEBPACK_IMPORTED_MODULE_0__["PostLocation"](1, 'South Oval'),
    new _search_metadata_post_location__WEBPACK_IMPORTED_MODULE_0__["PostLocation"](2, 'Dale Hall'),
    new _search_metadata_post_location__WEBPACK_IMPORTED_MODULE_0__["PostLocation"](3, 'Union')
];


/***/ }),

/***/ "./src/app/mocks/mock-post-statuses.ts":
/*!*********************************************!*\
  !*** ./src/app/mocks/mock-post-statuses.ts ***!
  \*********************************************/
/*! exports provided: STATUSES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUSES", function() { return STATUSES; });
/* harmony import */ var _search_metadata_post_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../search-metadata/post-status */ "./src/app/search-metadata/post-status.ts");

var STATUSES = [
    new _search_metadata_post_status__WEBPACK_IMPORTED_MODULE_0__["PostStatus"](1, 'Any'),
    new _search_metadata_post_status__WEBPACK_IMPORTED_MODULE_0__["PostStatus"](2, 'Active'),
    new _search_metadata_post_status__WEBPACK_IMPORTED_MODULE_0__["PostStatus"](3, 'Delayed'),
    new _search_metadata_post_status__WEBPACK_IMPORTED_MODULE_0__["PostStatus"](4, 'Canceled')
];


/***/ }),

/***/ "./src/app/mocks/mock-post-tags.ts":
/*!*****************************************!*\
  !*** ./src/app/mocks/mock-post-tags.ts ***!
  \*****************************************/
/*! exports provided: TAGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAGS", function() { return TAGS; });
/* harmony import */ var _search_metadata_post_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../search-metadata/post-tag */ "./src/app/search-metadata/post-tag.ts");

var TAGS = [
    new _search_metadata_post_tag__WEBPACK_IMPORTED_MODULE_0__["PostTag"](1, 'OU'),
    new _search_metadata_post_tag__WEBPACK_IMPORTED_MODULE_0__["PostTag"](2, 'Pizza'),
    new _search_metadata_post_tag__WEBPACK_IMPORTED_MODULE_0__["PostTag"](3, 'Waffles'),
    new _search_metadata_post_tag__WEBPACK_IMPORTED_MODULE_0__["PostTag"](4, 'Club'),
    new _search_metadata_post_tag__WEBPACK_IMPORTED_MODULE_0__["PostTag"](5, 'Gaming'),
    new _search_metadata_post_tag__WEBPACK_IMPORTED_MODULE_0__["PostTag"](6, 'Marketing')
];


/***/ }),

/***/ "./src/app/mocks/mock-post-types.ts":
/*!******************************************!*\
  !*** ./src/app/mocks/mock-post-types.ts ***!
  \******************************************/
/*! exports provided: TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPES", function() { return TYPES; });
/* harmony import */ var _search_metadata_post_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../search-metadata/post-type */ "./src/app/search-metadata/post-type.ts");

var TYPES = [
    new _search_metadata_post_type__WEBPACK_IMPORTED_MODULE_0__["PostType"](1, 'Any'),
    new _search_metadata_post_type__WEBPACK_IMPORTED_MODULE_0__["PostType"](2, 'Event'),
    new _search_metadata_post_type__WEBPACK_IMPORTED_MODULE_0__["PostType"](3, 'Coupon Code'),
    new _search_metadata_post_type__WEBPACK_IMPORTED_MODULE_0__["PostType"](4, 'Club/Organization')
];


/***/ }),

/***/ "./src/app/mocks/mock-posts.ts":
/*!*************************************!*\
  !*** ./src/app/mocks/mock-posts.ts ***!
  \*************************************/
/*! exports provided: MOCK_POSTS_ACTIVE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOCK_POSTS_ACTIVE", function() { return MOCK_POSTS_ACTIVE; });
/* harmony import */ var _post_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../post/post */ "./src/app/post/post.ts");

var MOCK_POSTS_ACTIVE = [
    new _post_post__WEBPACK_IMPORTED_MODULE_0__["Post"](1, 1, 'First Example Post', 'Come to my example club. This is an event with free food!', './assets/mock_img/posts/A84NH783GH.jpg', '2018-09-10 20:00:00', 2, 2, 4, 2, 23, 4, 1, 1, true),
    new _post_post__WEBPACK_IMPORTED_MODULE_0__["Post"](3, 2, 'Second Example Post - Edited', 'Y\'all should cme to the south oval for free food!', './assets/mock_img/posts/default1.jpg', '2018-09-07 19:40:55', 1, 2, 2, 2, 2, 0, 2, 3, true)
];


/***/ }),

/***/ "./src/app/post-card-container/post-card-container.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/post-card-container/post-card-container.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/post-card-container/post-card-container.component.html":
/*!************************************************************************!*\
  !*** ./src/app/post-card-container/post-card-container.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div\n    *ngFor=\"let post of _posts\"\n    class=\"post-card\">\n    <app-post-card\n      [post] = post>\n    </app-post-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/post-card-container/post-card-container.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/post-card-container/post-card-container.component.ts ***!
  \**********************************************************************/
/*! exports provided: PostCardContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCardContainerComponent", function() { return PostCardContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/post.service */ "./src/app/services/post.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostCardContainerComponent = /** @class */ (function () {
    function PostCardContainerComponent(postService) {
        this.postService = postService;
    }
    PostCardContainerComponent.prototype.ngOnInit = function () {
        this.getAllActivePosts();
    };
    PostCardContainerComponent.prototype.getAllActivePosts = function () {
        var _this = this;
        this.postService.getActivePosts().subscribe(function (posts) { return _this._posts = posts; });
    };
    PostCardContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-card-container',
            template: __webpack_require__(/*! ./post-card-container.component.html */ "./src/app/post-card-container/post-card-container.component.html"),
            styles: [__webpack_require__(/*! ./post-card-container.component.css */ "./src/app/post-card-container/post-card-container.component.css")]
        }),
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]])
    ], PostCardContainerComponent);
    return PostCardContainerComponent;
}());



/***/ }),

/***/ "./src/app/post-card/post-card.component.css":
/*!***************************************************!*\
  !*** ./src/app/post-card/post-card.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  background-color: #FFFFFF;\n}\n\nh1 {\n  font-family: 'Ubuntu Light', sans-serif;\n  font-weight: normal;\n  font-size: 1.5em;\n  margin: 0;\n  padding: 12px 0 12px 0;\n  text-align: center;\n}\n\nh2 {\n  font-family: 'Ubuntu Light', sans-serif;\n  font-weight: normal;\n  font-size: .75em;\n}\n\nh3 {\n  font-family: 'Ubuntu Light', sans-serif;\n  font-weight: normal;\n  font-size: .75em;\n}\n\np {\n  font-family: 'Ubuntu Light', sans-serif;\n  font-weight: normal;\n  font-size: 1em;\n}\n\nimg {\n  border-radius: 25px;\n  display: block;\n  max-width:230px;\n  max-height:95px;\n  width: auto;\n  height: auto;\n}\n"

/***/ }),

/***/ "./src/app/post-card/post-card.component.html":
/*!****************************************************!*\
  !*** ./src/app/post-card/post-card.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>{{_post.title}}</h1>\n  <img src=\"{{_post.imageFile}}\"/>\n  <p>{{_post.description}}</p>\n  <h3>{{getFormattedVotes()}}</h3>\n  <h2>{{getFormattedExpirationDate()}}</h2>\n</div>\n"

/***/ }),

/***/ "./src/app/post-card/post-card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/post-card/post-card.component.ts ***!
  \**************************************************/
/*! exports provided: PostCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCardComponent", function() { return PostCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _post_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../post/post */ "./src/app/post/post.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostCardComponent = /** @class */ (function () {
    function PostCardComponent() {
    }
    Object.defineProperty(PostCardComponent.prototype, "post", {
        set: function (post) {
            this._post = post;
        },
        enumerable: true,
        configurable: true
    });
    PostCardComponent.prototype.ngOnInit = function () {
        this._date = new Date(this._post.expirationDate);
    };
    PostCardComponent.prototype.getFormattedExpirationDate = function () {
        var dateOptions = { month: 'short', day: 'numeric' };
        var timeOptions = { hour: 'numeric', minute: 'numeric' };
        var formattedDate = this._date.toLocaleDateString('en-EN', dateOptions);
        formattedDate += ' @ ';
        formattedDate += this._date.toLocaleTimeString('en-EN', timeOptions);
        return formattedDate;
    };
    PostCardComponent.prototype.getFormattedVotes = function () {
        var totalVotes = this._post.upVotes + this._post.downVotes;
        var voteRatio = (this._post.upVotes / totalVotes) * 100;
        return voteRatio.toFixed(0) + ' (' + totalVotes + ')';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _post_post__WEBPACK_IMPORTED_MODULE_1__["Post"]),
        __metadata("design:paramtypes", [_post_post__WEBPACK_IMPORTED_MODULE_1__["Post"]])
    ], PostCardComponent.prototype, "post", null);
    PostCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-card',
            template: __webpack_require__(/*! ./post-card.component.html */ "./src/app/post-card/post-card.component.html"),
            styles: [__webpack_require__(/*! ./post-card.component.css */ "./src/app/post-card/post-card.component.css")]
        })
    ], PostCardComponent);
    return PostCardComponent;
}());



/***/ }),

/***/ "./src/app/post-search-form/post-search-form.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/post-search-form/post-search-form.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search {\n  margin: 2vh 0 0 5vw;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 80vw;\n}\n\n.search input {\n  font-family: 'Ubuntu Light', sans-serif;\n  color: #666666;\n  font-size: 1.75em;\n  height: 5.75vh;\n  border: 1px solid #9d9d9d;\n  min-width: 50vw;\n  padding-left: .5em;\n  outline: none;\n}\n\n.search input:focus {\n  color: black;\n}\n\nh2 {\n  font-family: 'Ubuntu Light', sans-serif;\n  font-weight: normal;\n  font-size: 1.5em;\n  display: inline;\n  margin: 0 1vw 0 3vw;\n}\n\n.advanced-search {\n  margin: 2vh 0 0 5vw;\n}\n\n.advanced-search button {\n  background: none;\n  border: none;\n  outline: none;\n  padding: 0;\n  min-height: 0;\n  cursor: pointer;\n}\n\n.advanced-search img {\n  display: inline-block;\n  padding: 0 0 0 0;\n  -webkit-transform: scale(.6) translateY(.25em);\n          transform: scale(.6) translateY(.25em);\n}\n\n.advanced-search h4 {\n  display: inline-block;\n  font-family: 'Ubuntu', sans-serif;\n  font-weight: normal;\n  font-size: .8em;\n  margin: 0;\n}\n\nh3 {\n  font-family: 'Ubuntu Light', sans-serif;\n  font-weight: normal;\n  font-size: 1.5em;\n  display: inline;\n  margin: 0 1vw 0 0;\n  width: 110px;\n}\n\n.advanced-row {\n  margin: 1vh 0 2vh 0;\n  width: 80vw;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.advanced-row app-selection-bar {\n  flex-grow: 1;\n}\n\n.datepicker input {\n  font-family: 'Ubuntu Light', sans-serif;\n  color: black;\n  font-size: 1em;\n  height: 5.75vh;\n  border: 1px solid #9d9d9d;\n  padding-left: .75em;\n  outline: none;\n}\n\n.datepicker mat-datepicker-toggle {\n  color: black;\n}\n\n.date-split-text {\n  margin: 0 .5em 0 .5em;\n  width: auto;\n}\n"

/***/ }),

/***/ "./src/app/post-search-form/post-search-form.component.html":
/*!******************************************************************!*\
  !*** ./src/app/post-search-form/post-search-form.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"search\">\n    <label>\n      <input type=\"text\" placeholder=\"Search...\" (keyup)=\"onSearchBarKeyUp()\">\n    </label>\n    <h2>Free Type:</h2>\n    <app-dropdown-list\n      [id]=\"1\"\n      [defaultSelected]=\"0\"\n      [dropdownItems]=\"_freeTypes\"\n      (selectedItemEmitter)=\"selectedFreeTypeChange($event)\">\n    </app-dropdown-list>\n  </div>\n\n  <div class=\"advanced-search\">\n\n    <div id=\"advanced-search-terms\" style=\"display: none\">\n\n      <div id=\"advanced-tags\" class=\"advanced-row\">\n        <h3>Tags:</h3>\n        <app-selection-bar\n          [id]=\"2\"\n          [items]=\"_tags\"\n          (selectedItemsEmitter)=\"selectedTagsChange($event)\">\n        </app-selection-bar>\n      </div>\n\n      <div id=\"advanced-status\" class=\"advanced-row\">\n        <h3>Status:</h3>\n        <app-dropdown-list\n          [id]=\"3\"\n          [defaultSelected]=\"1\"\n          [dropdownItems]=\"_statuses\"\n          (selectedItemEmitter)=\"selectedStatusChange($event)\">\n        </app-dropdown-list>\n      </div>\n\n      <div id=\"advanced-type\" class=\"advanced-row\">\n        <h3>Type:</h3>\n        <app-dropdown-list\n          [id]=\"4\"\n          [defaultSelected]=\"0\"\n          [dropdownItems]=\"_types\"\n          (selectedItemEmitter)=\"selectedTypeChange($event)\">\n        </app-dropdown-list>\n      </div>\n\n      <div id=\"advanced-date\" class=\"advanced-row\">\n        <h3>End Date:</h3>\n        <div id=\"datepicker-1\" class=\"datepicker\">\n          <input matInput [matDatepicker]=\"picker1\" placeholder=\"Choose a date\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n          <mat-datepicker #picker1></mat-datepicker>\n        </div>\n        <h3 class=\"date-split-text\">to</h3>\n        <div id=\"datepicker-2\" class=\"datepicker\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n          <input matInput [matDatepicker]=\"picker2\" placeholder=\"Choose a date\">\n          <mat-datepicker #picker2></mat-datepicker>\n        </div>\n      </div>\n\n      <div id=\"advanced-location\" class=\"advanced-row\">\n        <h3>Location:</h3>\n        <app-selection-bar\n          [id]=\"7\"\n          [items]=\"_locations\"\n          (selectedItemsEmitter)=\"selectedLocationsChange($event)\">\n        </app-selection-bar>\n      </div>\n\n    </div>\n\n    <button id=\"advanced-button\" (click)=\"onAdvancedSearchButtonClick()\">\n      <img src=\"../../assets/img/arrow.png\" id=\"advanced-arrow\">\n      <h4 id=\"advanced-search-text\">Advanced Search</h4>\n    </button>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/post-search-form/post-search-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/post-search-form/post-search-form.component.ts ***!
  \****************************************************************/
/*! exports provided: PostSearchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostSearchFormComponent", function() { return PostSearchFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_free_type_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/post-free-type.service */ "./src/app/services/post-free-type.service.ts");
/* harmony import */ var _services_post_tag_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/post-tag.service */ "./src/app/services/post-tag.service.ts");
/* harmony import */ var _services_post_status_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/post-status.service */ "./src/app/services/post-status.service.ts");
/* harmony import */ var _services_post_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/post-type.service */ "./src/app/services/post-type.service.ts");
/* harmony import */ var _services_post_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/post-location.service */ "./src/app/services/post-location.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostSearchFormComponent = /** @class */ (function () {
    function PostSearchFormComponent(postFreeTypeService, postTagService, postStatusService, postTypeService, postLocationService) {
        this.postFreeTypeService = postFreeTypeService;
        this.postTagService = postTagService;
        this.postStatusService = postStatusService;
        this.postTypeService = postTypeService;
        this.postLocationService = postLocationService;
        this._inputSearchText = '';
        this._selectedTags = [];
        this._selectedLocations = [];
    }
    PostSearchFormComponent.prototype.ngOnInit = function () {
        this.getPostFreeTypes();
        this.getPostTags();
        this.getPostStatuses();
        this.getPostTypes();
        this.getPostLocations();
        this._advancedOpen = false;
    };
    PostSearchFormComponent.prototype.getPostFreeTypes = function () {
        var _this = this;
        this.postFreeTypeService.getPostFreeTypes().subscribe(function (postFreeTypes) { return _this._freeTypes = postFreeTypes; });
    };
    PostSearchFormComponent.prototype.getPostTags = function () {
        var _this = this;
        this.postTagService.getPostTags().subscribe(function (postTags) { return _this._tags = postTags; });
    };
    PostSearchFormComponent.prototype.getPostStatuses = function () {
        var _this = this;
        this.postStatusService.getPostStatuses().subscribe(function (postStatuses) { return _this._statuses = postStatuses; });
    };
    PostSearchFormComponent.prototype.getPostTypes = function () {
        var _this = this;
        this.postTypeService.getPostTypes().subscribe(function (postTypes) { return _this._types = postTypes; });
    };
    PostSearchFormComponent.prototype.getPostLocations = function () {
        var _this = this;
        this.postLocationService.getPostLocations().subscribe(function (postLocations) { return _this._locations = postLocations; });
    };
    PostSearchFormComponent.prototype.onSearchBarKeyUp = function () {
        this._inputSearchText = document.querySelector('.search input').value;
        console.log(this._inputSearchText);
    };
    PostSearchFormComponent.prototype.selectedFreeTypeChange = function (event) {
        this._selectedFreeType = event;
    };
    PostSearchFormComponent.prototype.selectedTagsChange = function (event) {
        this._selectedTags = event;
    };
    PostSearchFormComponent.prototype.selectedStatusChange = function (event) {
        this._selectedStatus = event;
    };
    PostSearchFormComponent.prototype.selectedTypeChange = function (event) {
        this._selectedType = event;
    };
    PostSearchFormComponent.prototype.selectedLocationsChange = function (event) {
        this._selectedLocations = event;
    };
    PostSearchFormComponent.prototype.onAdvancedSearchButtonClick = function () {
        if (this._advancedOpen) {
            this.closeAdvancedSearch();
        }
        else {
            this.openAdvancedSearch();
        }
    };
    PostSearchFormComponent.prototype.openAdvancedSearch = function () {
        this.flipAdvancedArrowUp();
        this.setAdvancedText('Basic Search');
        this.setAdvancedSearchTermsDisplay('inline');
        this._advancedOpen = true;
    };
    PostSearchFormComponent.prototype.closeAdvancedSearch = function () {
        this.flipAdvancedArrowDown();
        this.setAdvancedText('Advanced Search');
        this.setAdvancedSearchTermsDisplay('none');
        this._advancedOpen = false;
    };
    PostSearchFormComponent.prototype.flipAdvancedArrowUp = function () {
        document.getElementById('advanced-arrow').style.transform = 'scale(.6) translateY(.2em) rotate(180deg)';
    };
    PostSearchFormComponent.prototype.flipAdvancedArrowDown = function () {
        document.getElementById('advanced-arrow').style.transform = 'scale(.6) translateY(.25em)';
    };
    PostSearchFormComponent.prototype.setAdvancedText = function (text) {
        document.getElementById('advanced-search-text').innerText = text;
    };
    PostSearchFormComponent.prototype.setAdvancedSearchTermsDisplay = function (visibility) {
        document.getElementById('advanced-search-terms').style.display = visibility;
    };
    PostSearchFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-search-form',
            template: __webpack_require__(/*! ./post-search-form.component.html */ "./src/app/post-search-form/post-search-form.component.html"),
            styles: [__webpack_require__(/*! ./post-search-form.component.css */ "./src/app/post-search-form/post-search-form.component.css")]
        }),
        __metadata("design:paramtypes", [_services_post_free_type_service__WEBPACK_IMPORTED_MODULE_1__["PostFreeTypeService"],
            _services_post_tag_service__WEBPACK_IMPORTED_MODULE_2__["PostTagService"],
            _services_post_status_service__WEBPACK_IMPORTED_MODULE_3__["PostStatusService"],
            _services_post_type_service__WEBPACK_IMPORTED_MODULE_4__["PostTypeService"],
            _services_post_location_service__WEBPACK_IMPORTED_MODULE_5__["PostLocationService"]])
    ], PostSearchFormComponent);
    return PostSearchFormComponent;
}());



/***/ }),

/***/ "./src/app/post/post.ts":
/*!******************************!*\
  !*** ./src/app/post/post.ts ***!
  \******************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
var Post = /** @class */ (function () {
    function Post(uid, postId, title, description, imageFile, expirationDate, location, status, type, freeType, upVotes, downVotes, creationEdit, recentEdit, active) {
        this._uid = uid;
        this._postId = postId;
        this._title = title;
        this._description = description;
        this._imageFile = imageFile;
        this._expirationDate = expirationDate;
        this._location = location;
        this._status = status;
        this._type = type;
        this._freeType = freeType;
        this._upVotes = upVotes;
        this._downVotes = downVotes;
        this._creationEdit = creationEdit;
        this._recentEdit = recentEdit;
        this._active = active;
    }
    Object.defineProperty(Post.prototype, "uid", {
        get: function () {
            return this._uid;
        },
        set: function (value) {
            this._uid = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "postId", {
        get: function () {
            return this._postId;
        },
        set: function (value) {
            this._postId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "imageFile", {
        get: function () {
            return this._imageFile;
        },
        set: function (value) {
            this._imageFile = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "expirationDate", {
        get: function () {
            return this._expirationDate;
        },
        set: function (value) {
            this._expirationDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (value) {
            this._location = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (value) {
            this._status = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "freeType", {
        get: function () {
            return this._freeType;
        },
        set: function (value) {
            this._freeType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "upVotes", {
        get: function () {
            return this._upVotes;
        },
        set: function (value) {
            this._upVotes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "downVotes", {
        get: function () {
            return this._downVotes;
        },
        set: function (value) {
            this._downVotes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "creationEdit", {
        get: function () {
            return this._creationEdit;
        },
        set: function (value) {
            this._creationEdit = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "recentEdit", {
        get: function () {
            return this._recentEdit;
        },
        set: function (value) {
            this._recentEdit = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (value) {
            this._active = value;
        },
        enumerable: true,
        configurable: true
    });
    return Post;
}());



/***/ }),

/***/ "./src/app/search-metadata/id-name-pair.ts":
/*!*************************************************!*\
  !*** ./src/app/search-metadata/id-name-pair.ts ***!
  \*************************************************/
/*! exports provided: IdNamePair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdNamePair", function() { return IdNamePair; });
var IdNamePair = /** @class */ (function () {
    function IdNamePair(id, name) {
        this._id = id;
        this._name = name;
    }
    Object.defineProperty(IdNamePair.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IdNamePair.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    return IdNamePair;
}());



/***/ }),

/***/ "./src/app/search-metadata/post-free-type.ts":
/*!***************************************************!*\
  !*** ./src/app/search-metadata/post-free-type.ts ***!
  \***************************************************/
/*! exports provided: PostFreeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostFreeType", function() { return PostFreeType; });
/* harmony import */ var _id_name_pair__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./id-name-pair */ "./src/app/search-metadata/id-name-pair.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PostFreeType = /** @class */ (function (_super) {
    __extends(PostFreeType, _super);
    function PostFreeType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PostFreeType;
}(_id_name_pair__WEBPACK_IMPORTED_MODULE_0__["IdNamePair"]));



/***/ }),

/***/ "./src/app/search-metadata/post-location.ts":
/*!**************************************************!*\
  !*** ./src/app/search-metadata/post-location.ts ***!
  \**************************************************/
/*! exports provided: PostLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostLocation", function() { return PostLocation; });
/* harmony import */ var _id_name_pair__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./id-name-pair */ "./src/app/search-metadata/id-name-pair.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PostLocation = /** @class */ (function (_super) {
    __extends(PostLocation, _super);
    function PostLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PostLocation;
}(_id_name_pair__WEBPACK_IMPORTED_MODULE_0__["IdNamePair"]));



/***/ }),

/***/ "./src/app/search-metadata/post-status.ts":
/*!************************************************!*\
  !*** ./src/app/search-metadata/post-status.ts ***!
  \************************************************/
/*! exports provided: PostStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostStatus", function() { return PostStatus; });
/* harmony import */ var _id_name_pair__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./id-name-pair */ "./src/app/search-metadata/id-name-pair.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PostStatus = /** @class */ (function (_super) {
    __extends(PostStatus, _super);
    function PostStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PostStatus;
}(_id_name_pair__WEBPACK_IMPORTED_MODULE_0__["IdNamePair"]));



/***/ }),

/***/ "./src/app/search-metadata/post-tag.ts":
/*!*********************************************!*\
  !*** ./src/app/search-metadata/post-tag.ts ***!
  \*********************************************/
/*! exports provided: PostTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTag", function() { return PostTag; });
/* harmony import */ var _id_name_pair__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./id-name-pair */ "./src/app/search-metadata/id-name-pair.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PostTag = /** @class */ (function (_super) {
    __extends(PostTag, _super);
    function PostTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PostTag;
}(_id_name_pair__WEBPACK_IMPORTED_MODULE_0__["IdNamePair"]));



/***/ }),

/***/ "./src/app/search-metadata/post-type.ts":
/*!**********************************************!*\
  !*** ./src/app/search-metadata/post-type.ts ***!
  \**********************************************/
/*! exports provided: PostType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostType", function() { return PostType; });
/* harmony import */ var _id_name_pair__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./id-name-pair */ "./src/app/search-metadata/id-name-pair.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PostType = /** @class */ (function (_super) {
    __extends(PostType, _super);
    function PostType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PostType;
}(_id_name_pair__WEBPACK_IMPORTED_MODULE_0__["IdNamePair"]));



/***/ }),

/***/ "./src/app/selection-bar/selection-bar.component.css":
/*!***********************************************************!*\
  !*** ./src/app/selection-bar/selection-bar.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: inline-block;\n  width: 100%;\n}\n\n.search-bar-button {\n  background-color: #FFFFFF;\n  font-family: \"Ubuntu\", sans-serif;\n  color: #292929;\n  height: 6vh;\n  font-size: 1.25em;\n  border: 1px solid #9d9d9d;\n  cursor: text;\n  outline: none;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\ninput {\n  font-family: 'Ubuntu Light', sans-serif;\n  color: black;\n  font-size: 1em;\n  border: none;\n  margin: 0 .1em 0 .5em;\n  outline: none;\n  flex-grow: 1;\n}\n\n.add-button {\n  outline: none;\n  border: none;\n  background-color: white;\n  cursor: pointer;\n  font-family: 'Ubuntu Light', sans-serif;\n  color: black;\n  font-size: 1.5em;\n  font-weight: normal;\n  margin: 0;\n}\n\n.dropdown-list {\n  overflow: visible;\n  position: absolute;\n  right: 15vw;\n  background-color: #FFFFFF;\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n  z-index: 1;\n  min-width: 200px;\n}\n\n.dropdown-list button {\n  color: black;\n  background-color: #FFFFFF;\n  font-family: \"Ubuntu\", sans-serif;\n  min-width: 200px;\n  text-align: left;\n  padding: 1em 1.5em;\n  display: block;\n  border: none;\n  cursor: pointer;\n  outline: none;\n}\n\n.dropdown-list button:hover {\n  background-color: #ddd\n}\n\nh2 {\n  font-family: \"Ubuntu Light\", sans-serif;\n  font-weight: normal;\n  font-size: .8em;\n  margin: 0 0 0 0;\n  display: inline;\n}\n\np {\n  font-family: \"Ubuntu Light\", sans-serif;\n  font-weight: normal;\n  margin: 0;\n  font-size: 1em;\n}\n\n.selected-item {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin: 0 0 0 .5em;\n}\n\n.remove-button {\n  outline: none;\n  border: none;\n  background-color: white;\n  cursor: pointer;\n  margin: 0;\n  align-self: flex-start;\n  -webkit-transform: translateY(-5px);\n          transform: translateY(-5px);\n  padding: 0 0 0 .25em;\n}\n"

/***/ }),

/***/ "./src/app/selection-bar/selection-bar.component.html":
/*!************************************************************!*\
  !*** ./src/app/selection-bar/selection-bar.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"search-bar-button\">\n    <div *ngFor=\"let selectedItem of _selectedItems\" class=\"selected-item\">\n      <h2>{{selectedItem.name}}</h2>\n      <button (click)=\"onSelectedItemRemove($event)\" class=\"remove-button\">\n        <p id=\"{{selectedItem.id}}\">x</p>\n      </button>\n    </div>\n    <input id=\"input-{{_id}}\" type=\"text\" (keydown)=\"onInputKeyDown($event)\">\n    <button\n      id=\"add-button-{{_id}}\"\n      class=\"add-button\">+</button>\n  </div>\n\n  <div id=\"dropdown-list-{{_id}}\" class=\"dropdown-list\" style=\"display: none\">\n    <button\n      id=\"{{item.id}}\"\n      *ngFor=\"let item of _displayList\"\n      (click)=\"onListItemClick($event)\">{{item.name}}</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/selection-bar/selection-bar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/selection-bar/selection-bar.component.ts ***!
  \**********************************************************/
/*! exports provided: SelectionBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionBarComponent", function() { return SelectionBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectionBarComponent = /** @class */ (function () {
    function SelectionBarComponent() {
        this._selectedItems = [];
        this._inputText = '';
        this.selectedItemsEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(SelectionBarComponent.prototype, "id", {
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectionBarComponent.prototype, "items", {
        set: function (items) {
            this._items = items;
        },
        enumerable: true,
        configurable: true
    });
    SelectionBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetDisplayList();
        window.addEventListener('click', function (event) {
            var target = event.target;
            if (target.id === ('add-button-' + _this._id)) {
                _this.onAddClick();
            }
            else {
                _this.onAddFocusOut();
            }
        });
    };
    SelectionBarComponent.prototype.onAddClick = function () {
        this.resetDisplayList();
        this.showList();
    };
    SelectionBarComponent.prototype.onAddFocusOut = function () {
        this.hideList();
    };
    SelectionBarComponent.prototype.onListItemClick = function (event) {
        var clickedItem = this.getClickedItem(event);
        this.addItemToSelected(clickedItem);
        this.hideList();
    };
    SelectionBarComponent.prototype.onSelectedItemRemove = function (event) {
        var clickedItem = this.getClickedItem(event);
        this.removeItemFromSelected(clickedItem);
        if (this._inputText.length > 0) {
            this.filterDisplayList(this._inputText);
        }
    };
    SelectionBarComponent.prototype.onInputKeyDown = function (event) {
        if (event.key === 'Backspace') {
            this.processInputBackspace();
        }
        else if (event.key === 'Enter') {
            this.processInputEnter();
        }
        else {
            this.processInputKeyDown(event.key);
        }
    };
    SelectionBarComponent.prototype.getClickedItem = function (event) {
        var clickedId = Number(event.srcElement.id);
        return this._items.find(function (item) { return item.id === clickedId; });
    };
    SelectionBarComponent.prototype.addItemToSelected = function (item) {
        this._selectedItems.push(item);
        this.selectedItemsEmitter.emit(this._selectedItems);
        this.resetDisplayList();
        this.clearInputText();
    };
    SelectionBarComponent.prototype.removeItemFromSelected = function (item) {
        this._selectedItems.splice(this._selectedItems.indexOf(item), 1);
        this.selectedItemsEmitter.emit(this._selectedItems);
        this.resetDisplayList();
    };
    SelectionBarComponent.prototype.showList = function () {
        if (this._displayList.length > 0) {
            this.setListDisplay('inline');
        }
    };
    SelectionBarComponent.prototype.hideList = function () {
        this.setListDisplay('none');
    };
    SelectionBarComponent.prototype.setListDisplay = function (display) {
        document.getElementById('dropdown-list-' + this._id).style.display = display;
    };
    SelectionBarComponent.prototype.processInputBackspace = function () {
        if (this._inputText.length > 0) {
            this._inputText = this._inputText.substr(0, this._inputText.length - 1);
        }
        this.resetDisplayList();
        if (this._inputText.length === 0) {
            this.hideList();
        }
        else {
            this.filterDisplayList(this._inputText);
        }
    };
    SelectionBarComponent.prototype.processInputEnter = function () {
        if (this._displayList.length > 0) {
            this.addItemToSelected(this._displayList[0]);
            this.hideList();
        }
    };
    SelectionBarComponent.prototype.processInputKeyDown = function (key) {
        this._inputText += key;
        this.filterDisplayList(this._inputText);
        this.showList();
    };
    SelectionBarComponent.prototype.clearInputText = function () {
        this._inputText = '';
        var element = document.getElementById('input-' + this._id);
        element.value = '';
    };
    SelectionBarComponent.prototype.resetDisplayList = function () {
        this._displayList = this._items.slice(0);
        this.removeSelectedFromDisplayList();
        this.sortDisplayList();
    };
    SelectionBarComponent.prototype.sortDisplayList = function () {
        this._displayList.sort(function (o1, o2) { return o1.name.localeCompare(o2.name); });
    };
    SelectionBarComponent.prototype.removeItemFromDisplayList = function (item) {
        var indexInDisplayList = this._displayList.indexOf(item);
        this.removeIndexFromDisplayList(indexInDisplayList);
    };
    SelectionBarComponent.prototype.removeIndexFromDisplayList = function (index) {
        this._displayList.splice(index, 1);
    };
    SelectionBarComponent.prototype.filterDisplayList = function (filter) {
        var originalDisplayList = this._displayList.slice(0);
        var filterLowercase = filter.toLowerCase();
        for (var _i = 0, originalDisplayList_1 = originalDisplayList; _i < originalDisplayList_1.length; _i++) {
            var item = originalDisplayList_1[_i];
            var itemNameLowercase = item.name.toLowerCase();
            if (!itemNameLowercase.startsWith(filterLowercase)) {
                this.removeItemFromDisplayList(item);
            }
        }
    };
    SelectionBarComponent.prototype.removeSelectedFromDisplayList = function () {
        var originalDisplayList = this._displayList.slice(0);
        for (var _i = 0, originalDisplayList_2 = originalDisplayList; _i < originalDisplayList_2.length; _i++) {
            var item = originalDisplayList_2[_i];
            if (this._selectedItems.indexOf(item) > -1) {
                this.removeItemFromDisplayList(item);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SelectionBarComponent.prototype, "selectedItemsEmitter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], SelectionBarComponent.prototype, "id", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], SelectionBarComponent.prototype, "items", null);
    SelectionBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-selection-bar',
            template: __webpack_require__(/*! ./selection-bar.component.html */ "./src/app/selection-bar/selection-bar.component.html"),
            styles: [__webpack_require__(/*! ./selection-bar.component.css */ "./src/app/selection-bar/selection-bar.component.css")]
        })
    ], SelectionBarComponent);
    return SelectionBarComponent;
}());



/***/ }),

/***/ "./src/app/services/post-free-type.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/post-free-type.service.ts ***!
  \****************************************************/
/*! exports provided: PostFreeTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostFreeTypeService", function() { return PostFreeTypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mocks_mock_post_free_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mocks/mock-post-free-types */ "./src/app/mocks/mock-post-free-types.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostFreeTypeService = /** @class */ (function () {
    function PostFreeTypeService() {
    }
    PostFreeTypeService.prototype.getPostFreeTypes = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mocks_mock_post_free_types__WEBPACK_IMPORTED_MODULE_1__["FREE_TYPES"]);
    };
    PostFreeTypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PostFreeTypeService);
    return PostFreeTypeService;
}());



/***/ }),

/***/ "./src/app/services/post-location.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/post-location.service.ts ***!
  \***************************************************/
/*! exports provided: PostLocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostLocationService", function() { return PostLocationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mocks_mock_post_locations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mocks/mock-post-locations */ "./src/app/mocks/mock-post-locations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostLocationService = /** @class */ (function () {
    function PostLocationService() {
    }
    PostLocationService.prototype.getPostLocations = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mocks_mock_post_locations__WEBPACK_IMPORTED_MODULE_2__["LOCATIONS"]);
    };
    PostLocationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PostLocationService);
    return PostLocationService;
}());



/***/ }),

/***/ "./src/app/services/post-status.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/post-status.service.ts ***!
  \*************************************************/
/*! exports provided: PostStatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostStatusService", function() { return PostStatusService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mocks_mock_post_statuses__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mocks/mock-post-statuses */ "./src/app/mocks/mock-post-statuses.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostStatusService = /** @class */ (function () {
    function PostStatusService() {
    }
    PostStatusService.prototype.getPostStatuses = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mocks_mock_post_statuses__WEBPACK_IMPORTED_MODULE_2__["STATUSES"]);
    };
    PostStatusService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PostStatusService);
    return PostStatusService;
}());



/***/ }),

/***/ "./src/app/services/post-tag.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/post-tag.service.ts ***!
  \**********************************************/
/*! exports provided: PostTagService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTagService", function() { return PostTagService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mocks_mock_post_tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mocks/mock-post-tags */ "./src/app/mocks/mock-post-tags.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostTagService = /** @class */ (function () {
    function PostTagService() {
    }
    PostTagService.prototype.getPostTags = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mocks_mock_post_tags__WEBPACK_IMPORTED_MODULE_2__["TAGS"]);
    };
    PostTagService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PostTagService);
    return PostTagService;
}());



/***/ }),

/***/ "./src/app/services/post-type.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/post-type.service.ts ***!
  \***********************************************/
/*! exports provided: PostTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTypeService", function() { return PostTypeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mocks_mock_post_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mocks/mock-post-types */ "./src/app/mocks/mock-post-types.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostTypeService = /** @class */ (function () {
    function PostTypeService() {
    }
    PostTypeService.prototype.getPostTypes = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mocks_mock_post_types__WEBPACK_IMPORTED_MODULE_2__["TYPES"]);
    };
    PostTypeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PostTypeService);
    return PostTypeService;
}());



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mocks_mock_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mocks/mock-posts */ "./src/app/mocks/mock-posts.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostService = /** @class */ (function () {
    function PostService() {
    }
    PostService.prototype.getActivePosts = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mocks_mock_posts__WEBPACK_IMPORTED_MODULE_2__["MOCK_POSTS_ACTIVE"]);
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tyty5949/Desktop/SoonerFoodFinder/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map