(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _assets_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/projects */ "./src/assets/projects.ts");







const urlify = function (a) { return a.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "-").replace(/^-+|-+$/g, ''); };
const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
        data: { projects: _assets_projects__WEBPACK_IMPORTED_MODULE_4__["default"] }
    },
    {
        path: '**',
        redirectTo: '',
    },
];
_assets_projects__WEBPACK_IMPORTED_MODULE_4__["default"].forEach((project) => {
    routes.unshift({
        path: urlify(project.title),
        component: _project_project_component__WEBPACK_IMPORTED_MODULE_0__["ProjectComponent"],
        data: { project: project, projects: _assets_projects__WEBPACK_IMPORTED_MODULE_4__["default"] }
    });
});
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
                declarations: [],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor(router) {
        this.router = router;
        this.currentScrollValue = 0;
        router.events.subscribe((val) => {
            setTimeout(() => {
                this.currentScrollValue = 0;
                document.getElementById("main").scroll({
                    top: 0,
                    left: 0,
                });
                window.scroll({
                    top: 0,
                    left: 0,
                });
            }, 250);
        });
    }
    getRouterOutletState(outlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }
    scrollHorizontally($event) {
        const main = document.getElementById("main");
        this.currentScrollValue = main.scrollLeft;
        $event = window.event || $event;
        $event.preventDefault();
        var direction = Math.max(-1, Math.min(1, ($event.wheelDelta || -$event.detail)));
        var limit = Math.max(document.body.scrollWidth, document.body.offsetWidth, main.scrollWidth, main.offsetWidth);
        var position = this.currentScrollValue - (direction * 50);
        if (position < 0) {
            position = 0;
        }
        if (position > limit) {
            position = limit;
        }
        this.currentScrollValue = position;
        main.scroll({
            top: 0,
            left: this.currentScrollValue,
        });
    }
    ngOnInit() {
        // IE9, Chrome, Safari, Opera
        document.getElementById('main').addEventListener('mousewheel', ($event) => this.scrollHorizontally($event));
        // Firefox
        document.getElementById('main').addEventListener('DOMMouseScroll', ($event) => this.scrollHorizontally($event));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 1, consts: [["id", "main", 1, "main"], [1, "content"], ["o", "outlet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", ctx.getRouterOutletState(_r0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".main[_ngcontent-%COMP%] {\n  display: block;\n  position: fixed;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  height: 100vh;\n  width: 100vw;\n  scrollbar-width: none;\n}\n.main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUNGO0FBRUU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtBQUFKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gIC8vIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICBcbiAgLmNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })
                    ], { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, position: "absolute" }))
                    ], { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms 200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                    ], { optional: true })
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeAnimation', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })
                            ], { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':leave', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, position: "absolute" }))
                            ], { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["query"])(':enter', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms 200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                            ], { optional: true })
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _project_project_component__WEBPACK_IMPORTED_MODULE_5__["ProjectComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _project_project_component__WEBPACK_IMPORTED_MODULE_5__["ProjectComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function HomeComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_li_17_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const project_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onClick(project_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", project_r1.titleImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.title);
} }
const _c0 = function (a0, a1) { return { "opacity": a0, "transform": a1 }; };
class HomeComponent {
    constructor(router, activatedroute) {
        this.router = router;
        this.activatedroute = activatedroute;
        this.MainTitle = 'Alfie Hilton';
        this.currentImage = 0;
        this.menuOpacity = 1;
        this.menuScale = 1;
    }
    onClick(project) {
        const urlify = function (a) { return a.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "-").replace(/^-+|-+$/g, ''); };
        const url = '/' + urlify(project.title);
        this.router.navigateByUrl(url);
    }
    backButton() {
        document.getElementById('main').scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }
    updateScroll(event) {
        const el = document.getElementById('main');
        const scrollRatio = el.scrollLeft / Math.max(window.innerWidth / 40, 400);
        this.menuOpacity = 1 - scrollRatio;
        this.menuScale = 1 - scrollRatio / 20;
    }
    ngOnInit() {
        this.activatedroute.data.subscribe(data => {
            this.projects = data.projects;
        });
        setTimeout(() => {
            document.getElementById("work-link").classList.add("current-page");
        }, 700);
        document.getElementById('main').addEventListener('scroll', ($event) => this.updateScroll($event));
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 20, vars: 6, consts: [[1, "main-section-container"], [1, "main-section-wrapper", 3, "ngStyle"], [1, "title"], [1, "custom-br"], [1, "header"], [1, "navigation"], ["routerLink", "/", "routerLinkActive", "active", "id", "work-link", "alt", "work", 1, "link"], ["routerLink", "/about", "routerLinkActive", "active", "id", "about-link", "alt", "about", 1, "link"], ["routerLink", "/contact", "routerLinkActive", "active", "id", "contact-link", "alt", "contact", 1, "link"], [1, "arrow"], [1, "projects-container"], ["id", "container", 1, "projects"], ["class", "item", 3, "click", 4, "ngFor", "ngForOf"], [1, "item", "back-button", 3, "click"], [1, "item", 3, "click"], [1, "images", 3, "src"], [1, "project-info"], [1, "project-title"], [1, "view-button"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u27F6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomeComponent_li_17_Template, 7, 2, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_li_click_18_listener() { return ctx.backButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u27F5 Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx.menuOpacity, "scale(" + ctx.menuScale + " )"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.MainTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".main-section-container[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 40vw;\n  min-width: 400px;\n  height: 100%;\n  display: inline-block;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 50px;\n  font-weight: bold;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .custom-br[_ngcontent-%COMP%] {\n  display: block;\n  width: 25%;\n  height: 2px;\n  opacity: 0.3;\n  background-color: #fff;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-right: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #ffffff88;\n  margin: 20px 0;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:before {\n  position: absolute;\n  opacity: 0;\n  content: attr(alt);\n  overflow: hidden;\n  color: #FFF;\n  transition: transform 500ms ease, opacity 500ms ease;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover:before {\n  transform: translate(-1px, -1px);\n  opacity: 1;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .current-page[_ngcontent-%COMP%]:before {\n  transform: translate(-1px, -1px);\n  opacity: 1;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 40px;\n  animation: arrow 2s ease infinite;\n}\n@keyframes arrow {\n  0% {\n    transform: translateX(0);\n  }\n  12.5% {\n    transform: translateX(50%);\n  }\n  25% {\n    transform: translateX(25%);\n  }\n  37.5% {\n    transform: translateX(50%);\n  }\n  50% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n.projects-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 40vw;\n}\n.projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n}\n.projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  position: relative;\n  width: 40vw;\n  min-width: 400px;\n  height: 100vh;\n  list-style: none;\n  cursor: pointer;\n}\n.projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n.projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .project-info[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  background-color: rgba(24, 26, 27, 0);\n  transition: background-color 500ms ease;\n}\n.projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .project-info[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%] {\n  opacity: 0;\n  color: white;\n  font-size: 30px;\n  font-weight: 100;\n  transform: translateY(-20px);\n  transition: opacity 400ms 100ms ease, transform 400ms 100ms ease;\n}\n.projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .project-info[_ngcontent-%COMP%]   .view-button[_ngcontent-%COMP%] {\n  opacity: 0;\n  color: white;\n  background-color: black;\n  padding: 15px 20px;\n  border-radius: 5px;\n  transform: translateY(20px);\n  transition: opacity 400ms 100ms ease, transform 400ms 100ms ease;\n}\n.projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .project-info[_ngcontent-%COMP%] {\n  background-color: #181a1b9a;\n}\n.projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .project-info[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .project-info[_ngcontent-%COMP%]   .view-button[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  opacity: 0.5;\n  color: white;\n  background-color: #000000;\n  transition: opacity 500ms ease;\n}\n.projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n@media only screen and (max-width: 1000px) {\n  .projects-container[_ngcontent-%COMP%] {\n    margin-left: 400px;\n  }\n}\n@media (hover: none) {\n  .projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .project-info[_ngcontent-%COMP%] {\n    background-color: #181a1b9a;\n  }\n  .projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .project-info[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%] {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  .projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .project-info[_ngcontent-%COMP%]   .view-button[_ngcontent-%COMP%] {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFBSjtBQUVJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFOO0FBR0k7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFETjtBQUlJO0VBQ0UsZUFBQTtBQUZOO0FBSU07RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBSFI7QUFNUTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSlY7QUFNVTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0RBQUE7QUFKWjtBQU9VO0VBQ0UsZ0NBQUE7RUFDQSxVQUFBO0FBTFo7QUFTVTtFQUNFLGdDQUFBO0VBQ0EsVUFBQTtBQVBaO0FBWUk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBVk47QUFlQTtFQUNFO0lBQ0Usd0JBQUE7RUFaRjtFQWNBO0lBQ0UsMEJBQUE7RUFaRjtFQWNBO0lBQ0UsMEJBQUE7RUFaRjtFQWNBO0lBQ0UsMEJBQUE7RUFaRjtFQWNBO0lBQ0Usd0JBQUE7RUFaRjtFQWNBO0lBQ0Usd0JBQUE7RUFaRjtBQUNGO0FBZUE7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0FBYkY7QUFlRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7QUFkSjtBQWdCSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQWROO0FBaUJNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQWZSO0FBa0JNO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUVBLHFDQUFBO0VBQ0EsdUNBQUE7QUFsQlI7QUFvQlE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUVBLDRCQUFBO0VBQ0EsZ0VBQUE7QUFuQlY7QUFzQlE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLDJCQUFBO0VBQ0EsZ0VBQUE7QUFyQlY7QUF5Qk07RUFDRSwyQkFBQTtBQXZCUjtBQXlCUTtFQUNFLFVBQUE7RUFDQSx3QkFBQTtBQXZCVjtBQXlCUTtFQUNFLFVBQUE7RUFDQSx3QkFBQTtBQXZCVjtBQTRCSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFFQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7QUEzQk47QUE2Qk07RUFDRSxVQUFBO0FBM0JSO0FBa0NBO0VBQ0U7SUFDRSxrQkFBQTtFQS9CRjtBQUNGO0FBbUNBO0VBSVE7SUFDRSwyQkFBQTtFQXBDUjtFQXNDUTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQXBDVjtFQXNDUTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQXBDVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tc2VjdGlvbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA0MHZ3O1xuICBtaW4td2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAubWFpbi1zZWN0aW9uLXdyYXBwZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXG4gICAgLnRpdGxlIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5jdXN0b20tYnIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMjUlO1xuICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIC5oZWFkZXIge1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgIFxuICAgICAgLm5hdmlnYXRpb24ge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAubGluayB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmODg7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgXG4gICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGF0dHIoYWx0KTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlLCBvcGFjaXR5IDUwMG1zIGVhc2U7XG4gICAgICAgICAgfSBcbiAgICAgICAgICBcbiAgICAgICAgICAmOmhvdmVyOmJlZm9yZSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMXB4KTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5jdXJyZW50LXBhZ2Uge1xuICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0xcHgpO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmFycm93IHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIGFuaW1hdGlvbjogYXJyb3cgMnMgZWFzZSBpbmZpbml0ZTtcbiAgICB9XG4gIH1cbn1cblxuQGtleWZyYW1lcyBhcnJvdyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgMTIuNSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xuICB9XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI1JSk7XG4gIH1cbiAgMzcuNSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuXG4ucHJvamVjdHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogNDB2dztcbiAgXG4gIC5wcm9qZWN0cyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAuaXRlbSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogNDB2dztcbiAgICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIFxuICAgICAgXG4gICAgICAuaW1hZ2VzIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICB9XG5cbiAgICAgIC5wcm9qZWN0LWluZm8ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQsIDI2LCAyNywgMCk7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwbXMgZWFzZTtcbiAgICAgICAgXG4gICAgICAgIC5wcm9qZWN0LXRpdGxlIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcblxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtcyAxMDBtcyBlYXNlLCB0cmFuc2Zvcm0gNDAwbXMgMTAwbXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLnZpZXctYnV0dG9uIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgMTAwbXMgZWFzZSwgdHJhbnNmb3JtIDQwMG1zIDEwMG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgJjpob3ZlciAucHJvamVjdC1pbmZvIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWExYjlhO1xuXG4gICAgICAgIC5wcm9qZWN0LXRpdGxlIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgICAudmlldy1idXR0b24ge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJhY2stYnV0dG9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgXG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuICBcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5wcm9qZWN0cy1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiA0MDBweDtcbiAgfVxufVxuXG5cbkBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgLnByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgLnByb2plY3RzIHtcbiAgICAgIC5pdGVtIHtcbiAgICAgICAgLnByb2plY3QtaW5mbyB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MWExYjlhO1xuXG4gICAgICAgICAgLnByb2plY3QtdGl0bGUge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnZpZXctYnV0dG9uIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function ProjectComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_div_22_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.initialiseModel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View in 3D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectComponent_li_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", image_r4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0, a1) { return { "opacity": a0, "transform": a1 }; };
class ProjectComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.menuOpacity = 1;
        this.menuScale = 1;
    }
    updateScroll(event) {
        const main = document.getElementById('main');
        var limit = Math.max(document.body.scrollWidth, document.body.offsetWidth, main.scrollWidth, main.offsetWidth);
        const startScrollRatio = main.scrollLeft / Math.max(window.innerWidth / 40, 400);
        this.menuOpacity = 1 - startScrollRatio;
        this.menuScale = 1 - startScrollRatio / 20;
        const endScrollRatio = (limit - main.scrollLeft) / (window.innerWidth / 2);
    }
    backButton() {
        document.getElementById('main').scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(data => {
            this.project = data.project;
            this.projects = data.projects;
        });
        const urlify = function (a) { return a.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "-").replace(/^-+|-+$/g, ''); };
        const currentProjectIndex = this.projects.findIndex(project => project === this.project);
        const nextIndex = (currentProjectIndex + 1) % this.projects.length;
        this.nextProject = this.projects[nextIndex];
        this.nextProjectURL = "/" + urlify(this.nextProject.title);
        Array.from(document.getElementsByClassName("link")).forEach(element => {
            element.classList.remove("current-page");
        });
        document.getElementById('main').addEventListener('scroll', ($event) => this.updateScroll($event));
    }
    initialiseModel() {
        if (!document.getElementById("model-container")) {
            if (this.project.model !== false) {
                this.el = document.createElement("div");
                this.el.id = "model-container";
                let closeButton = document.createElement("img");
                closeButton.id = "model-close-button";
                closeButton.src = "https://img.icons8.com/metro/52/000000/close-window.png";
                closeButton.addEventListener('click', () => {
                    renderer.dispose();
                    this.el.parentNode.removeChild(this.el);
                });
                document.getElementById("main").appendChild(this.el);
                this.el.appendChild(closeButton);
                let renderer = new three__WEBPACK_IMPORTED_MODULE_1__["WebGLRenderer"]({ antialias: true });
                renderer.setSize(this.el.getBoundingClientRect().width - 20, this.el.getBoundingClientRect().height - 80);
                this.el.appendChild(renderer.domElement);
                let scene = new three__WEBPACK_IMPORTED_MODULE_1__["Scene"]();
                // scene.fog = new THREE.Fog(new THREE.Color(0xffffff), 0, 20)
                scene.background = new three__WEBPACK_IMPORTED_MODULE_1__["Color"](0xDCDCDC);
                let camera = new three__WEBPACK_IMPORTED_MODULE_1__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 1000);
                camera.position.set(this.project.model.cameraPosition.x, this.project.model.cameraPosition.y, this.project.model.cameraPosition.z);
                scene.add(camera);
                var loader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__["GLTFLoader"]();
                loader.load(this.project.model.path, function (gltf) {
                    scene.add(gltf.scene);
                }, undefined, function (error) {
                    console.error(error);
                    return null;
                });
                var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__["OrbitControls"](camera, renderer.domElement);
                controls.target = new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 0, 0);
                controls.enableDamping = true;
                var pointLight = new three__WEBPACK_IMPORTED_MODULE_1__["PointLight"](0xffffff, this.project.lightIntensity, 100);
                pointLight.position.set(10, 10, 10);
                scene.add(pointLight);
                var pointLight = new three__WEBPACK_IMPORTED_MODULE_1__["PointLight"](0xffffff, this.project.lightIntensity, 100);
                pointLight.position.set(-10, 10, -10);
                scene.add(pointLight);
                controls.update();
                var windowSize = this.el.getBoundingClientRect().width * this.el.getBoundingClientRect().height;
                const animate = () => {
                    requestAnimationFrame(animate);
                    if (this.el.getBoundingClientRect().width * this.el.getBoundingClientRect().height !== windowSize) {
                        renderer.setSize(this.el.getBoundingClientRect().width - 20, this.el.getBoundingClientRect().height - 80);
                        camera.aspect = (this.el.getBoundingClientRect().width - 20) / (this.el.getBoundingClientRect().height - 80);
                        camera.updateProjectionMatrix();
                        controls.update();
                    }
                    renderer.render(scene, camera);
                };
                animate();
            }
        }
    }
}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectComponent, selectors: [["app-project"]], decls: 33, vars: 11, consts: [["id", "main-section-container", 1, "main-section-container"], [1, "main-section-wrapper", 3, "ngStyle"], [1, "title"], [1, "custom-br"], [1, "header"], [1, "navigation"], ["routerLink", "/", "routerLinkActive", "active", "id", "work-link", "alt", "work", 1, "link"], ["routerLink", "/about", "routerLinkActive", "active", "id", "about-link", "alt", "about", 1, "link"], ["routerLink", "/contact", "routerLinkActive", "active", "id", "contact-link", "alt", "contact", 1, "link"], [1, "arrow"], [1, "images-container"], ["id", "container", 1, "images"], [1, "item"], [1, "description"], ["class", "model-button", 3, "click", 4, "ngIf"], [1, "item", "item-colour"], [1, "image", 3, "src"], ["class", "item item-colour", 4, "ngFor", "ngForOf"], [1, "next-back-buttons", "item"], ["routerLinkActive", "active", 1, "project-buttons", 3, "routerLink"], [1, "next-image", 3, "src"], [1, "project-buttons", 3, "click"], [1, "model-button", 3, "click"]], template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u27F6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProjectComponent_div_22_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ProjectComponent_li_25_Template, 2, 1, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Next Project \u27F6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_Template_div_click_31_listener() { return ctx.backButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u27F5 Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c0, ctx.menuOpacity, "scale(" + ctx.menuScale + " )"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.project.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project.model !== false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.project.titleImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.project.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.nextProjectURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.nextProject.titleImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".main-section-container[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 40vw;\n  min-width: 400px;\n  height: 100%;\n  display: inline-block;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 50px;\n  font-weight: bold;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .custom-br[_ngcontent-%COMP%] {\n  display: block;\n  width: 25%;\n  height: 2px;\n  opacity: 0.3;\n  background-color: #fff;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-right: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #ffffff88;\n  margin: 20px 0;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:before {\n  position: absolute;\n  opacity: 0;\n  content: attr(alt);\n  overflow: hidden;\n  color: #FFF;\n  transition: transform 500ms ease, opacity 500ms ease;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover:before {\n  transform: translate(-2px, -2px);\n  opacity: 1;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .current-page[_ngcontent-%COMP%]:before {\n  transform: translate(-2px, -2px);\n  opacity: 1;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 40px;\n  animation: arrow 2s ease infinite;\n}\n@keyframes arrow {\n  0% {\n    transform: translateX(0);\n  }\n  12.5% {\n    transform: translateX(50%);\n  }\n  25% {\n    transform: translateX(25%);\n  }\n  37.5% {\n    transform: translateX(50%);\n  }\n  50% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n.images-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 40vw;\n}\n.images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  height: 100vh;\n  display: flex;\n  flex-direction: row;\n}\n.images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  position: relative;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 100vh;\n  padding: 0 10px;\n  transition: width ease 500ms;\n  list-style: none;\n  background-color: #131414ea;\n}\n.images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: calc(100vh - 10vw);\n  width: 40vw;\n  min-width: 400px;\n  color: rgba(255, 255, 255, 0.6);\n  padding: 5vw;\n  font-size: 16px;\n}\n.images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  text-align: start;\n  color: white;\n}\n.images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .model-button[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 40px;\n  padding: 20px;\n  background-color: #fff;\n  color: #000;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  height: 100vh;\n  max-width: 100vw;\n  object-fit: contain;\n}\n.images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .next-back-buttons[_ngcontent-%COMP%] {\n  width: 40vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 0;\n}\n.images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .next-back-buttons[_ngcontent-%COMP%]   .project-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  opacity: 0.4;\n  color: white;\n  background-color: #000000;\n  transition: opacity 500ms ease;\n  cursor: pointer;\n}\n.images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .next-back-buttons[_ngcontent-%COMP%]   .project-buttons[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .next-back-buttons[_ngcontent-%COMP%]   .project-buttons[_ngcontent-%COMP%]   .next-image[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50%;\n  object-fit: cover;\n}\n.images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .next-back-buttons[_ngcontent-%COMP%]   .project-buttons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  z-index: 1;\n  background-color: #000000;\n  padding: 5px;\n}\n@media only screen and (max-width: 1000px) {\n  .images-container[_ngcontent-%COMP%] {\n    margin-left: 400px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFBSjtBQUVJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFOO0FBR0k7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFETjtBQUlJO0VBQ0UsZUFBQTtBQUZOO0FBSU07RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBSFI7QUFLUTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSFY7QUFLVTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0RBQUE7QUFIWjtBQU1VO0VBQ0UsZ0NBQUE7RUFDQSxVQUFBO0FBSlo7QUFRVTtFQUNFLGdDQUFBO0VBQ0EsVUFBQTtBQU5aO0FBV0k7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBVE47QUFjQTtFQUNFO0lBQ0Usd0JBQUE7RUFYRjtFQWFBO0lBQ0UsMEJBQUE7RUFYRjtFQWFBO0lBQ0UsMEJBQUE7RUFYRjtFQWFBO0lBQ0UsMEJBQUE7RUFYRjtFQWFBO0lBQ0Usd0JBQUE7RUFYRjtFQWFBO0lBQ0Usd0JBQUE7RUFYRjtBQUNGO0FBY0E7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0FBWkY7QUFjRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7QUFiSjtBQWVJO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtBQWJOO0FBZ0JNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBRUEsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQWZSO0FBaUJRO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFmVjtBQWtCUTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBaEJWO0FBb0JNO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFsQlI7QUFzQkk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FBcEJOO0FBc0JNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQXJCUjtBQXVCUTtFQUNFLFVBQUE7QUFyQlY7QUF3QlE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQXRCVjtBQXdCUTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUF0QlY7QUE4QkE7RUFDRTtJQUNFLGtCQUFBO0VBM0JGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1zZWN0aW9uLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDQwdnc7XG4gIG1pbi13aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gIC5tYWluLXNlY3Rpb24td3JhcHBlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXG4gICAgLnRpdGxlIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5jdXN0b20tYnIge1xuICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgIHdpZHRoOiAyNSU7XG4gICAgICBoZWlnaHQ6IDJweDtcbiAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgLmhlYWRlciB7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgXG4gICAgICAubmF2aWdhdGlvbiB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIFxuICAgICAgICAubGluayB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmODg7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgXG4gICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGF0dHIoYWx0KTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlLCBvcGFjaXR5IDUwMG1zIGVhc2U7XG4gICAgICAgICAgfSBcbiAgICAgICAgICBcbiAgICAgICAgICAmOmhvdmVyOmJlZm9yZSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAtMnB4KTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5jdXJyZW50LXBhZ2Uge1xuICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0ycHgsIC0ycHgpO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmFycm93IHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIGFuaW1hdGlvbjogYXJyb3cgMnMgZWFzZSBpbmZpbml0ZTtcbiAgICB9XG4gIH1cbn1cbiAgXG5Aa2V5ZnJhbWVzIGFycm93IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICAxMi41JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG4gIH1cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjUlKTtcbiAgfVxuICAzNy41JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5cbi5pbWFnZXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogNDB2dztcbiAgXG4gIC5pbWFnZXMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBcbiAgICAuaXRlbSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggZWFzZSA1MDBtcztcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxNDE0ZWE7XG5cbiAgICAgIFxuICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEwdncpO1xuICAgICAgICB3aWR0aDogNDB2dztcbiAgICAgICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICAgICAgXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG4gICAgICAgIHBhZGRpbmc6IDV2dztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5tb2RlbC1idXR0b24ge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5pbWFnZSB7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5leHQtYmFjay1idXR0b25zIHtcbiAgICAgIHdpZHRoOiA0MHZ3O1xuICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIFxuICAgICAgLnByb2plY3QtYnV0dG9ucyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXG4gICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2U7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAubmV4dC1pbWFnZSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAuaW1hZ2VzLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDQwMHB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project',
                templateUrl: './project.component.html',
                styleUrls: ['./project.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/assets/projects.ts":
/*!********************************!*\
  !*** ./src/assets/projects.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const projects = [
    {
        title: "Black Hole",
        model: false,
        titleImage: "/assets/black-hole/blackhole.png",
        images: [
            "/assets/black-hole/blackhole1.png",
            "/assets/black-hole/blackhole2.png"
        ],
        description: "Inspired by Interstellar's Gargantua Spinning Black Hole"
    },
    {
        title: "Wands",
        model: {
            path: "/assets/wands/wands.glb",
            cameraPosition: {
                x: 1,
                y: 4,
                z: 1
            },
            lightIntensity: 3,
        },
        titleImage: "/assets/wands/wands.png",
        images: [
            "/assets/wands/wands2.png",
            "/assets/wands/wands3.png"
        ],
        description: "Custom designed and made Harry Potter inspired Wands"
    },
    {
        title: "Sabers",
        model: {
            path: "/assets/sabers/sabers.glb",
            cameraPosition: {
                x: 1,
                y: 5,
                z: 1
            },
            lightIntensity: 1,
        },
        titleImage: "/assets/sabers/sabers.png",
        images: [
            "/assets/sabers/sabers1.png",
            "/assets/sabers/sabers2.png",
            "/assets/sabers/sabers3.png",
            "/assets/sabers/sabers4.png"
        ],
        description: "Lightsabers from the movie Star Wars."
    },
    {
        title: "Screw Drivers",
        model: {
            path: "/assets/screw-drivers/sonic.glb",
            cameraPosition: {
                x: 3,
                y: 3,
                z: 0
            },
            lightIntensity: 1,
        },
        titleImage: "/assets/screw-drivers/sonic.png",
        images: [
            "/assets/screw-drivers/sonic1.png",
            "/assets/screw-drivers/sonic2.png",
            "/assets/screw-drivers/sonic3.png",
            "/assets/screw-drivers/sonic4.png",
            "/assets/screw-drivers/sonic5.png",
            "/assets/screw-drivers/sonic6.png",
            "/assets/screw-drivers/sonic7.png",
            "/assets/screw-drivers/sonic8.png",
            "/assets/screw-drivers/sonic9.png",
            "/assets/screw-drivers/sonic10.png",
            "/assets/screw-drivers/sonic11.png"
        ],
        description: "Sonic screwdrivers from the show 'Doctor Who'"
    },
    {
        title: "Catwalk",
        model: {
            path: "/assets/catwalk/catwalk.glb",
            cameraPosition: {
                x: 10,
                y: 3,
                z: 0
            },
            lightIntensity: 5,
        },
        titleImage: "/assets/catwalk/catwalk.png",
        images: [
            "/assets/catwalk/catwalk2.png",
            "/assets/catwalk/catwalk3.png"
        ],
        description: "Inspired by Star Wars 'I am your father' scene in Episode V: The Empire Strikes Back. Smoke simulation was used to recreate this iconic environment"
    },
    {
        title: "Sonic Gun",
        model: {
            path: "/assets/sonic-gun/sonicgun.glb",
            cameraPosition: {
                x: 2,
                y: 3,
                z: 2
            },
            lightIntensity: 50,
        },
        titleImage: "/assets/sonic-gun/sonicgun.png",
        images: [
            "/assets/sonic-gun/sonicgun1.png",
            "/assets/sonic-gun/sonicgun2.png",
            "/assets/sonic-gun/sonicgun3.png"
        ],
        description: "A combination of lightsaber, sonic screwdriver and sci-fi shit"
    },
    {
        title: "Sofa",
        model: false,
        titleImage: "/assets/sofa/sofa.png",
        images: [
            "/assets/sofa/sofa1.png",
            "/assets/sofa/sofa2.png"
        ],
        description: "Sofa model with cloth simulation and inflation algorithms"
    },
    {
        title: "Bulb Table",
        model: {
            path: "/assets/bulb-table/bulbtable.glb",
            cameraPosition: {
                x: 2,
                y: 2,
                z: 2
            },
            lightIntensity: 1,
        },
        titleImage: "/assets/bulb-table/bulbtable.png",
        images: [
            "/assets/bulb-table/bulbtable1.png",
            "/assets/bulb-table/bulbtable2.png",
            "/assets/bulb-table/bulbtable3.png",
            "/assets/bulb-table/bulbtable4.png"
        ],
        description: "Used in design ideas of A Level Design and Technology. Bulb table is a table made of reused bulbs"
    },
    {
        title: "Bic Pen",
        model: {
            path: "/assets/bic-pen/bicpen.glb",
            cameraPosition: {
                x: 3,
                y: 10,
                z: 3
            },
            lightIntensity: 1,
        },
        titleImage: "/assets/bic-pen/bicpen.png",
        images: [
            "/assets/bic-pen/bicpen1.png",
        ],
        description: "Recreation of Bic Pen in Blender. Includes pot and multi-coloured pens"
    },
    {
        title: "Bin",
        model: false,
        titleImage: "/assets/dt-bin/dtbin.png",
        images: [
            "/assets/dt-bin/dtbin1.png",
            "/assets/dt-bin/dtbin2.png"
        ],
        description: "Used in design ideas of A Level Design and Technology. Modular bin with expandable and contractable compartments along with magnetic slider for separation of ferrous metals"
    },
];
/* harmony default export */ __webpack_exports__["default"] = (projects);


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/joshlucpoll/repos/alfred-website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map