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
        data: { project: project }
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
        this.currentTile = 0;
        router.events.subscribe((val) => {
            this.currentTile = 0;
            if (window.innerWidth > 600) {
                setTimeout(() => {
                    document.getElementById("main").scroll({
                        top: 0,
                        left: 0,
                    });
                    window.scroll({
                        top: 0,
                        left: 0,
                    });
                }, 250);
            }
            else {
                document.getElementById("main").scroll({
                    top: 0,
                    left: 0,
                });
                window.scroll({
                    top: 0,
                    left: 0,
                });
            }
        });
    }
    getRouterOutletState(outlet) {
        if (window.innerWidth > 600) {
            return outlet.isActivated ? outlet.activatedRoute : '';
        }
    }
    scrollHorizontally($event) {
        if (window.innerWidth > 600) {
            console.log("scrilliong");
            const tiles = document.getElementsByClassName("item");
            $event = window.event || $event;
            $event.preventDefault();
            var direction = Math.max(-1, Math.min(1, ($event.wheelDelta || -$event.detail)));
            this.currentTile -= direction;
            if (this.currentTile >= tiles.length) {
                this.currentTile = tiles.length - 1;
            }
            if (this.currentTile < 0) {
                this.currentTile = 0;
            }
            if (this.currentTile === 0) {
                document.getElementById("main").scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                });
            }
            else {
                document.getElementsByClassName("item")[this.currentTile].scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["@media only screen and (min-width: 600px) {\n  .main[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    height: 100vh;\n    width: 100vw;\n    scrollbar-width: none;\n  }\n  .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    height: 100vh;\n    width: 100%;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .main[_ngcontent-%COMP%] {\n    display: block;\n    height: 100vh;\n    width: 100vw;\n  }\n  .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUU7SUFDRSxjQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLHFCQUFBO0VBQUY7RUFFRTtJQUNFLGFBQUE7SUFDQSxXQUFBO0VBQUo7QUFDRjtBQUlBO0VBRUU7SUFDRSxjQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7RUFIRjtFQUtFO0lBQ0UsWUFBQTtJQUNBLFdBQUE7RUFISjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuXG4gIC5tYWluIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gICAgXG4gICAgLmNvbnRlbnQge1xuICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cbiAgLm1haW4geyAgXG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgXG4gICAgLmNvbnRlbnQge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59Il19 */"], data: { animation: [
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




function HomeComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_li_15_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const project_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onClick(project_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", project_r1.titleImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.title);
} }
class HomeComponent {
    constructor(router, activatedroute) {
        this.router = router;
        this.activatedroute = activatedroute;
        this.MainTitle = 'Alfie Hilton';
        this.currentImage = 0;
    }
    onClick(project) {
        const urlify = function (a) { return a.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "-").replace(/^-+|-+$/g, ''); };
        const url = '/' + urlify(project.title);
        this.router.navigateByUrl(url);
    }
    ngOnInit() {
        this.activatedroute.data.subscribe(data => {
            this.projects = data.projects;
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 16, vars: 2, consts: [[1, "main-section-container"], [1, "main-section-wrapper"], [1, "title"], [1, "custom-br"], [1, "header"], [1, "navigation"], ["routerLink", "/", "routerLinkActive", "active", 1, "link"], ["routerLink", "/about", "routerLinkActive", "active", 1, "link"], ["routerLink", "/contact", "routerLinkActive", "active", 1, "link"], [1, "projects-container"], [1, "projects"], ["class", "item", 3, "click", 4, "ngFor", "ngForOf"], [1, "item", 3, "click"], [1, "images", 3, "src"], [1, "project-info"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HomeComponent_li_15_Template, 4, 2, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.MainTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["@media only screen and (min-width: 600px) {\n  .main-section-container[_ngcontent-%COMP%] {\n    position: fixed;\n    width: 40vw;\n    height: 100%;\n    display: inline-block;\n  }\n  .main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n  }\n  .main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 50px;\n    font-weight: bold;\n  }\n  .main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .custom-br[_ngcontent-%COMP%] {\n    display: block;\n    width: 25%;\n    height: 2px;\n    opacity: 0.3;\n    background-color: #fff;\n  }\n  .main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  .main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    height: 100%;\n    margin-right: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-end;\n  }\n  .main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: white;\n    margin: 20px 0;\n  }\n\n  .projects-container[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-left: 40vw;\n  }\n  .projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n  }\n  .projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    position: relative;\n    width: 25vw;\n    height: 100vh;\n    transition: width ease 500ms;\n    list-style: none;\n    cursor: pointer;\n  }\n  .projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n    width: 50vw;\n    height: 100vh;\n  }\n  .projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .project-info[_ngcontent-%COMP%] {\n    opacity: 0.7;\n    width: 15vh;\n  }\n  .projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n  }\n  .projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .project-info[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    height: 100%;\n    width: 0;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    padding-bottom: 20px;\n    opacity: 0;\n    background-color: black;\n    color: rgba(255, 255, 255, 0.8);\n    font-size: 50px;\n    writing-mode: vertical-lr;\n    -webkit-text-orientation: mixed;\n            text-orientation: mixed;\n    transition: opacity 200ms 100ms ease, width 500ms ease;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .main-section-container[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 50vh;\n  }\n  .main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n  }\n  .main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 50px;\n    font-weight: bold;\n  }\n  .main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .custom-br[_ngcontent-%COMP%] {\n    display: block;\n    width: 25%;\n    height: 2px;\n    opacity: 0.3;\n    background-color: #fff;\n  }\n  .main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  .main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    height: 100%;\n    margin-right: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-end;\n  }\n  .main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: white;\n    margin: 20px 0;\n  }\n\n  .projects-container[_ngcontent-%COMP%] {\n    margin-top: 50vh;\n  }\n  .projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  .projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    list-style: none;\n    background-color: #181A1B;\n    cursor: pointer;\n  }\n  .projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n  }\n  .projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .project-info[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    bottom: 20px;\n    width: calc(100% - 20px);\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    padding: 20px;\n    padding-left: 0;\n    background-color: #00000099;\n    color: rgba(255, 255, 255, 0.8);\n    font-size: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUU7SUFDRSxlQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxxQkFBQTtFQUFGO0VBRUU7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUVBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsNkJBQUE7RUFESjtFQUdJO0lBQ0UsWUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQUROO0VBSUk7SUFDRSxjQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0Esc0JBQUE7RUFGTjtFQUtJO0lBQ0UsZUFBQTtFQUhOO0VBS007SUFDRSxZQUFBO0lBQ0Esa0JBQUE7SUFFQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQUFBO0VBSlI7RUFNUTtJQUNFLHFCQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUFKVjs7RUFXQTtJQUNFLHFCQUFBO0lBQ0EsaUJBQUE7RUFSRjtFQVVFO0lBQ0Usa0JBQUE7SUFDQSxNQUFBO0lBQ0EsWUFBQTtJQUVBLGFBQUE7SUFDQSxtQkFBQTtFQVRKO0VBV0k7SUFDRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0EsNEJBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7RUFUTjtFQVdNO0lBQ0UsV0FBQTtJQUNBLGFBQUE7RUFUUjtFQVlNO0lBQ0UsWUFBQTtJQUNBLFdBQUE7RUFWUjtFQWFNO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtFQVhSO0VBY007SUFDRSxrQkFBQTtJQUNBLE9BQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtJQUNBLFFBQUE7SUFFQSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtJQUNBLG9CQUFBO0lBRUEsVUFBQTtJQUNBLHVCQUFBO0lBQ0EsK0JBQUE7SUFFQSxlQUFBO0lBQ0EseUJBQUE7SUFDQSwrQkFBQTtZQUFBLHVCQUFBO0lBQ0Esc0RBQUE7RUFmUjtBQUNGO0FBcUJBO0VBRUU7SUFDRSxlQUFBO0lBQ0EsTUFBQTtJQUNBLE9BQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQXBCRjtFQXNCRTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBRUEsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSw2QkFBQTtFQXJCSjtFQXVCSTtJQUNFLFlBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUFyQk47RUF3Qkk7SUFDRSxjQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0Esc0JBQUE7RUF0Qk47RUF5Qkk7SUFDRSxlQUFBO0VBdkJOO0VBeUJNO0lBQ0UsWUFBQTtJQUNBLGtCQUFBO0lBRUEsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSx5QkFBQTtFQXhCUjtFQTBCUTtJQUNFLHFCQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUF4QlY7O0VBK0JBO0lBQ0UsZ0JBQUE7RUE1QkY7RUE4QkU7SUFDRSxXQUFBO0lBRUEsYUFBQTtJQUNBLHNCQUFBO0VBN0JKO0VBK0JJO0lBQ0Usa0JBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSx5QkFBQTtJQUNBLGVBQUE7RUE3Qk47RUErQk07SUFDRSxZQUFBO0lBQ0EsV0FBQTtFQTdCUjtFQWdDTTtJQUNFLGtCQUFBO0lBQ0EsT0FBQTtJQUNBLFlBQUE7SUFDQSx3QkFBQTtJQUVBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQUFBO0lBQ0EsYUFBQTtJQUNBLGVBQUE7SUFFQSwyQkFBQTtJQUNBLCtCQUFBO0lBRUEsZUFBQTtFQWpDUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAgICAgXG4gIC5tYWluLXNlY3Rpb24tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDQwdnc7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgIC5tYWluLXNlY3Rpb24td3JhcHBlciB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cblxuICAgICAgLmN1c3RvbS1iciB7XG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICB9XG5cbiAgICAgIC5oZWFkZXIge1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICBcbiAgICAgICAgLm5hdmlnYXRpb24ge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICBcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgXG4gICAgICAgICAgLmxpbmsge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAucHJvamVjdHMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDQwdnc7XG4gICAgXG4gICAgLnByb2plY3RzIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgIC5pdGVtIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMjV2dztcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggZWFzZSA1MDBtcztcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgd2lkdGg6IDUwdnc7XG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIgLnByb2plY3QtaW5mbyB7XG4gICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgIHdpZHRoOiAxNXZoO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuaW1hZ2VzIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAucHJvamVjdC1pbmZvIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAwO1xuXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG5cbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XG5cbiAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbiAgICAgICAgICB0ZXh0LW9yaWVudGF0aW9uOiBtaXhlZDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIDEwMG1zIGVhc2UsIHdpZHRoIDUwMG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuXG4gIC5tYWluLXNlY3Rpb24tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHZoO1xuXG4gICAgLm1haW4tc2VjdGlvbi13cmFwcGVyIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuXG4gICAgICAuY3VzdG9tLWJyIHtcbiAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIH1cblxuICAgICAgLmhlYWRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIFxuICAgICAgICAubmF2aWdhdGlvbiB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgIFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBcbiAgICAgICAgICAubGluayB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5wcm9qZWN0cy1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDUwdmg7XG5cbiAgICAucHJvamVjdHMge1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAuaXRlbSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxODFBMUI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgXG4gICAgICAgIC5pbWFnZXMge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9qZWN0LWluZm8ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG5cbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcblxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA5OTtcbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xuXG4gICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
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







function ProjectComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_div_20_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.initialiseModel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View in 3D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectComponent_li_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", image_r4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ProjectComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe(data => {
            this.project = data.project;
        });
    }
    initialiseModel() {
        if (!document.getElementById("model-container")) {
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
            scene.background = new three__WEBPACK_IMPORTED_MODULE_1__["Color"](0x320E3B);
            let camera = new three__WEBPACK_IMPORTED_MODULE_1__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(2, 1, 2);
            scene.add(camera);
            var loader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__["GLTFLoader"]();
            loader.load('../../assets/models/scene.gltf', function (gltf) {
                scene.add(gltf.scene);
            }, undefined, function (error) {
                console.error(error);
                return null;
            });
            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__["OrbitControls"](camera, renderer.domElement);
            controls.target = new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 0, 0);
            controls.enableDamping = true;
            var pointLight = new three__WEBPACK_IMPORTED_MODULE_1__["PointLight"](0xffffff, 5, 100);
            pointLight.position.set(10, 10, 10);
            scene.add(pointLight);
            var pointLight = new three__WEBPACK_IMPORTED_MODULE_1__["PointLight"](0xffffff, 5, 100);
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
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectComponent, selectors: [["app-project"]], decls: 24, vars: 5, consts: [["id", "main-section-container", 1, "main-section-container"], [1, "main-section-wrapper"], [1, "title"], [1, "custom-br"], [1, "header"], [1, "navigation"], ["routerLink", "/", "routerLinkActive", "active", 1, "link"], ["routerLink", "/about", "routerLinkActive", "active", 1, "link"], ["routerLink", "/contact", "routerLinkActive", "active", 1, "link"], [1, "images-container"], [1, "images"], [1, "item"], [1, "description"], ["class", "model-button", 3, "click", 4, "ngIf"], [1, "item", "item-colour"], [1, "image", 3, "src"], ["class", "item item-colour", 4, "ngFor", "ngForOf"], [1, "model-button", 3, "click"]], template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProjectComponent_div_20_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProjectComponent_li_23_Template, 2, 1, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.project.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project.model === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.project.titleImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.project.images);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: ["@media only screen and (min-width: 600px) {\n  .main-section-container[_ngcontent-%COMP%] {\n    position: fixed;\n    width: 40vw;\n    height: 100%;\n    display: inline-block;\n  }\n  .main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n  }\n  .main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 50px;\n    font-weight: bold;\n  }\n  .main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .custom-br[_ngcontent-%COMP%] {\n    display: block;\n    width: 25%;\n    height: 2px;\n    opacity: 0.3;\n    background-color: #fff;\n  }\n  .main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  .main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    height: 100%;\n    margin-right: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-end;\n  }\n  .main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: white;\n    margin: 20px 0;\n  }\n\n  .images-container[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-left: 40vw;\n  }\n  .images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n  }\n  .images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    position: relative;\n    width: 50vw;\n    height: 100vh;\n    transition: width ease 500ms;\n    list-style: none;\n  }\n  .images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    height: calc(100% - 10vw);\n    width: calc(100% - 10vw);\n    color: rgba(255, 255, 255, 0.6);\n    padding: 5vw;\n    font-size: 16px;\n    background-color: #131414ea;\n  }\n  .images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    text-align: start;\n    color: white;\n  }\n  .images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .model-button[_ngcontent-%COMP%] {\n    position: relative;\n    margin-top: 40px;\n    padding: 20px;\n    background-color: #fff;\n    color: #000;\n    border-radius: 5px;\n    cursor: pointer;\n  }\n  .images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .main-section-container[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 50vh;\n  }\n  .main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n  }\n  .main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 50px;\n    font-weight: bold;\n  }\n  .main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .custom-br[_ngcontent-%COMP%] {\n    display: block;\n    width: 25%;\n    height: 2px;\n    opacity: 0.3;\n    background-color: #fff;\n  }\n  .main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  .main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    height: 100%;\n    margin-right: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-end;\n  }\n  .main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: white;\n    margin: 20px 0;\n  }\n\n  .images-container[_ngcontent-%COMP%] {\n    margin-top: 50vh;\n  }\n  .images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  .images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .item-colour[_ngcontent-%COMP%] {\n    background-color: #181A1B;\n  }\n  .images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    list-style: none;\n    cursor: pointer;\n  }\n  .images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    height: calc(100% - 10vw);\n    width: calc(100% - 10vw);\n    color: rgba(255, 255, 255, 0.6);\n    padding: 5vw;\n    font-size: 16px;\n    background-color: #131414ea;\n  }\n  .images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    text-align: start;\n    color: white;\n  }\n  .images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .model-button[_ngcontent-%COMP%] {\n    position: relative;\n    margin-top: 40px;\n    padding: 20px;\n    background-color: #fff;\n    color: #000;\n    border-radius: 5px;\n    cursor: pointer;\n  }\n  .images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUU7SUFDRSxlQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxxQkFBQTtFQUFGO0VBRUU7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUVBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsNkJBQUE7RUFESjtFQUdJO0lBQ0UsWUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQUROO0VBSUk7SUFDRSxjQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0Esc0JBQUE7RUFGTjtFQUtJO0lBQ0UsZUFBQTtFQUhOO0VBS007SUFDRSxZQUFBO0lBQ0Esa0JBQUE7SUFFQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQUFBO0VBSlI7RUFNUTtJQUNFLHFCQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUFKVjs7RUFXQTtJQUNFLHFCQUFBO0lBQ0EsaUJBQUE7RUFSRjtFQVVFO0lBQ0Usa0JBQUE7SUFDQSxNQUFBO0lBQ0EsWUFBQTtJQUVBLGFBQUE7SUFDQSxtQkFBQTtFQVRKO0VBV0k7SUFDRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0EsNEJBQUE7SUFDQSxnQkFBQTtFQVROO0VBV007SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLHNCQUFBO0lBQ0EseUJBQUE7SUFDQSx3QkFBQTtJQUVBLCtCQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFFQSwyQkFBQTtFQVhSO0VBYVE7SUFDRSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtFQVhWO0VBY1E7SUFDRSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtFQVpWO0VBZ0JNO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtFQWRSO0FBQ0Y7QUFxQkE7RUFFRTtJQUNFLGVBQUE7SUFDQSxNQUFBO0lBQ0EsT0FBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBcEJGO0VBc0JFO0lBQ0UsWUFBQTtJQUNBLFdBQUE7SUFFQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLDZCQUFBO0VBckJKO0VBdUJJO0lBQ0UsWUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQXJCTjtFQXdCSTtJQUNFLGNBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxzQkFBQTtFQXRCTjtFQXlCSTtJQUNFLGVBQUE7RUF2Qk47RUF5Qk07SUFDRSxZQUFBO0lBQ0Esa0JBQUE7SUFFQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQUFBO0VBeEJSO0VBMEJRO0lBQ0UscUJBQUE7SUFDQSxZQUFBO0lBQ0EsY0FBQTtFQXhCVjs7RUErQkE7SUFDRSxnQkFBQTtFQTVCRjtFQThCRTtJQUNFLFdBQUE7SUFFQSxhQUFBO0lBQ0Esc0JBQUE7RUE3Qko7RUErQkk7SUFDRSx5QkFBQTtFQTdCTjtFQWdDSTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtFQTlCTjtFQWdDTTtJQUNFLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0Esc0JBQUE7SUFDQSx5QkFBQTtJQUNBLHdCQUFBO0lBRUEsK0JBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUVBLDJCQUFBO0VBaENSO0VBa0NRO0lBQ0UsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLFlBQUE7RUFoQ1Y7RUFtQ1E7SUFDRSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtFQWpDVjtFQXFDTTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0EsaUJBQUE7RUFuQ1I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAgIFxuICAubWFpbi1zZWN0aW9uLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiA0MHZ3O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICAubWFpbi1zZWN0aW9uLXdyYXBwZXIge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXG4gICAgICAudGl0bGUge1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG5cbiAgICAgIC5jdXN0b20tYnIge1xuICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgfVxuXG4gICAgICAuaGVhZGVyIHtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgXG4gICAgICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIFxuICAgICAgICAgIC5saW5rIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgLmltYWdlcy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogNDB2dztcbiAgICBcbiAgICAuaW1hZ2VzIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgIC5pdGVtIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogNTB2dztcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggZWFzZSA1MDBtcztcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMHZ3KTtcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTB2dyk7XG5cbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICAgICAgICAgIHBhZGRpbmc6IDV2dztcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG5cbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxNDE0ZWE7XG5cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubW9kZWwtYnV0dG9uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgXG4gIC5tYWluLXNlY3Rpb24tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHZoO1xuXG4gICAgLm1haW4tc2VjdGlvbi13cmFwcGVyIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuXG4gICAgICAuY3VzdG9tLWJyIHtcbiAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIH1cblxuICAgICAgLmhlYWRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIFxuICAgICAgICAubmF2aWdhdGlvbiB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgIFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBcbiAgICAgICAgICAubGluayB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5pbWFnZXMtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA1MHZoO1xuICAgIFxuICAgIC5pbWFnZXMge1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAuaXRlbS1jb2xvdXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgxQTFCO1xuICAgICAgfVxuXG4gICAgICAuaXRlbSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMHZ3KTtcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTB2dyk7XG5cbiAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICAgICAgICAgIHBhZGRpbmc6IDV2dztcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG5cbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxNDE0ZWE7XG5cbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubW9kZWwtYnV0dG9uIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
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
        model: true,
        titleImage: "/assets/images/black_hole.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut metus quis dui ultrices iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent sagittis dui a ligula accumsan scelerisque. Duis varius at dui quis gravida. Nullam iaculis, nisi vitae dictum tempor, lorem dolor accumsan sapien, id porta justo libero non tortor. Aenean luctus at quam nec elementum. Morbi ut orci sed felis placerat eleifend quis eget elit. Cras finibus venenatis metus eget lacinia. Duis vehicula placerat lorem, ut facilisis nisi tristique ac. Nullam in ante nulla. Morbi vel vehicula nunc. Nunc fermentum purus sed ex maximus pulvinar. Etiam dictum ante ac nisi dapibus tristique. Sed vel elit sit amet urna aliquam tristique. Cras enim nunc, imperdiet maximus urna sed, consectetur efficitur lacus. In in suscipit lacus. Vivamus efficitur ultrices libero vitae vulputate. Sed at mattis ligula. Ut tempor ultricies accumsan. Morbi ultricies magna nec tortor tincidunt fringilla. Donec convallis risus ac metus luctus cursus. Duis tempus purus odio, ac varius leo aliquam nec. Aliquam dapibus tincidunt lacus, quis elementum dui vehicula et. In non condimentum risus. Nunc vitae lacinia massa. Proin porttitor ultricies nisl, vel imperdiet eros pulvinar quis. Curabitur egestas, lorem vel vestibulum pharetra, sapien enim hendrerit nulla, in rutrum ligula eros a ipsum. Vestibulum in ligula sed metus commodo egestas."
    },
    {
        title: "Bulb Table",
        model: true,
        titleImage: "/assets/images/bulb_table2.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut metus quis dui ultrices iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent sagittis dui a ligula accumsan scelerisque. Duis varius at dui quis gravida. Nullam iaculis, nisi vitae dictum tempor, lorem dolor accumsan sapien, id porta justo libero non tortor. Aenean luctus at quam nec elementum. Morbi ut orci sed felis placerat eleifend quis eget elit. Cras finibus venenatis metus eget lacinia. Duis vehicula placerat lorem, ut facilisis nisi tristique ac. Nullam in ante nulla. Morbi vel vehicula nunc. Nunc fermentum purus sed ex maximus pulvinar. Etiam dictum ante ac nisi dapibus tristique. Sed vel elit sit amet urna aliquam tristique. Cras enim nunc, imperdiet maximus urna sed, consectetur efficitur lacus. In in suscipit lacus. Vivamus efficitur ultrices libero vitae vulputate. Sed at mattis ligula. Ut tempor ultricies accumsan. Morbi ultricies magna nec tortor tincidunt fringilla. Donec convallis risus ac metus luctus cursus. Duis tempus purus odio, ac varius leo aliquam nec. Aliquam dapibus tincidunt lacus, quis elementum dui vehicula et. In non condimentum risus. Nunc vitae lacinia massa. Proin porttitor ultricies nisl, vel imperdiet eros pulvinar quis. Curabitur egestas, lorem vel vestibulum pharetra, sapien enim hendrerit nulla, in rutrum ligula eros a ipsum. Vestibulum in ligula sed metus commodo egestas."
    },
    {
        title: "Catwalk",
        model: true,
        titleImage: "/assets/images/catwalk.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut metus quis dui ultrices iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent sagittis dui a ligula accumsan scelerisque. Duis varius at dui quis gravida. Nullam iaculis, nisi vitae dictum tempor, lorem dolor accumsan sapien, id porta justo libero non tortor. Aenean luctus at quam nec elementum. Morbi ut orci sed felis placerat eleifend quis eget elit. Cras finibus venenatis metus eget lacinia. Duis vehicula placerat lorem, ut facilisis nisi tristique ac. Nullam in ante nulla. Morbi vel vehicula nunc. Nunc fermentum purus sed ex maximus pulvinar. Etiam dictum ante ac nisi dapibus tristique. Sed vel elit sit amet urna aliquam tristique. Cras enim nunc, imperdiet maximus urna sed, consectetur efficitur lacus. In in suscipit lacus. Vivamus efficitur ultrices libero vitae vulputate. Sed at mattis ligula. Ut tempor ultricies accumsan. Morbi ultricies magna nec tortor tincidunt fringilla. Donec convallis risus ac metus luctus cursus. Duis tempus purus odio, ac varius leo aliquam nec. Aliquam dapibus tincidunt lacus, quis elementum dui vehicula et. In non condimentum risus. Nunc vitae lacinia massa. Proin porttitor ultricies nisl, vel imperdiet eros pulvinar quis. Curabitur egestas, lorem vel vestibulum pharetra, sapien enim hendrerit nulla, in rutrum ligula eros a ipsum. Vestibulum in ligula sed metus commodo egestas."
    },
    {
        title: "Rapier Wand",
        model: true,
        titleImage: "/assets/images/rapier_wand.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut metus quis dui ultrices iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent sagittis dui a ligula accumsan scelerisque. Duis varius at dui quis gravida. Nullam iaculis, nisi vitae dictum tempor, lorem dolor accumsan sapien, id porta justo libero non tortor. Aenean luctus at quam nec elementum. Morbi ut orci sed felis placerat eleifend quis eget elit. Cras finibus venenatis metus eget lacinia. Duis vehicula placerat lorem, ut facilisis nisi tristique ac. Nullam in ante nulla. Morbi vel vehicula nunc. Nunc fermentum purus sed ex maximus pulvinar. Etiam dictum ante ac nisi dapibus tristique. Sed vel elit sit amet urna aliquam tristique. Cras enim nunc, imperdiet maximus urna sed, consectetur efficitur lacus. In in suscipit lacus. Vivamus efficitur ultrices libero vitae vulputate. Sed at mattis ligula. Ut tempor ultricies accumsan. Morbi ultricies magna nec tortor tincidunt fringilla. Donec convallis risus ac metus luctus cursus. Duis tempus purus odio, ac varius leo aliquam nec. Aliquam dapibus tincidunt lacus, quis elementum dui vehicula et. In non condimentum risus. Nunc vitae lacinia massa. Proin porttitor ultricies nisl, vel imperdiet eros pulvinar quis. Curabitur egestas, lorem vel vestibulum pharetra, sapien enim hendrerit nulla, in rutrum ligula eros a ipsum. Vestibulum in ligula sed metus commodo egestas."
    },
    {
        title: "Sofa",
        model: true,
        titleImage: "/assets/images/sofa_cloth_sim.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut metus quis dui ultrices iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent sagittis dui a ligula accumsan scelerisque. Duis varius at dui quis gravida. Nullam iaculis, nisi vitae dictum tempor, lorem dolor accumsan sapien, id porta justo libero non tortor. Aenean luctus at quam nec elementum. Morbi ut orci sed felis placerat eleifend quis eget elit. Cras finibus venenatis metus eget lacinia. Duis vehicula placerat lorem, ut facilisis nisi tristique ac. Nullam in ante nulla. Morbi vel vehicula nunc. Nunc fermentum purus sed ex maximus pulvinar. Etiam dictum ante ac nisi dapibus tristique. Sed vel elit sit amet urna aliquam tristique. Cras enim nunc, imperdiet maximus urna sed, consectetur efficitur lacus. In in suscipit lacus. Vivamus efficitur ultrices libero vitae vulputate. Sed at mattis ligula. Ut tempor ultricies accumsan. Morbi ultricies magna nec tortor tincidunt fringilla. Donec convallis risus ac metus luctus cursus. Duis tempus purus odio, ac varius leo aliquam nec. Aliquam dapibus tincidunt lacus, quis elementum dui vehicula et. In non condimentum risus. Nunc vitae lacinia massa. Proin porttitor ultricies nisl, vel imperdiet eros pulvinar quis. Curabitur egestas, lorem vel vestibulum pharetra, sapien enim hendrerit nulla, in rutrum ligula eros a ipsum. Vestibulum in ligula sed metus commodo egestas."
    },
    {
        title: "Sonic Screwdrivers",
        model: true,
        titleImage: "/assets/images/sonics.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut metus quis dui ultrices iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent sagittis dui a ligula accumsan scelerisque. Duis varius at dui quis gravida. Nullam iaculis, nisi vitae dictum tempor, lorem dolor accumsan sapien, id porta justo libero non tortor. Aenean luctus at quam nec elementum. Morbi ut orci sed felis placerat eleifend quis eget elit. Cras finibus venenatis metus eget lacinia. Duis vehicula placerat lorem, ut facilisis nisi tristique ac. Nullam in ante nulla. Morbi vel vehicula nunc. Nunc fermentum purus sed ex maximus pulvinar. Etiam dictum ante ac nisi dapibus tristique. Sed vel elit sit amet urna aliquam tristique. Cras enim nunc, imperdiet maximus urna sed, consectetur efficitur lacus. In in suscipit lacus. Vivamus efficitur ultrices libero vitae vulputate. Sed at mattis ligula. Ut tempor ultricies accumsan. Morbi ultricies magna nec tortor tincidunt fringilla. Donec convallis risus ac metus luctus cursus. Duis tempus purus odio, ac varius leo aliquam nec. Aliquam dapibus tincidunt lacus, quis elementum dui vehicula et. In non condimentum risus. Nunc vitae lacinia massa. Proin porttitor ultricies nisl, vel imperdiet eros pulvinar quis. Curabitur egestas, lorem vel vestibulum pharetra, sapien enim hendrerit nulla, in rutrum ligula eros a ipsum. Vestibulum in ligula sed metus commodo egestas."
    },
    {
        title: "Wands",
        model: true,
        titleImage: "/assets/images/wands.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut metus quis dui ultrices iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent sagittis dui a ligula accumsan scelerisque. Duis varius at dui quis gravida. Nullam iaculis, nisi vitae dictum tempor, lorem dolor accumsan sapien, id porta justo libero non tortor. Aenean luctus at quam nec elementum. Morbi ut orci sed felis placerat eleifend quis eget elit. Cras finibus venenatis metus eget lacinia. Duis vehicula placerat lorem, ut facilisis nisi tristique ac. Nullam in ante nulla. Morbi vel vehicula nunc. Nunc fermentum purus sed ex maximus pulvinar. Etiam dictum ante ac nisi dapibus tristique. Sed vel elit sit amet urna aliquam tristique. Cras enim nunc, imperdiet maximus urna sed, consectetur efficitur lacus. In in suscipit lacus. Vivamus efficitur ultrices libero vitae vulputate. Sed at mattis ligula. Ut tempor ultricies accumsan. Morbi ultricies magna nec tortor tincidunt fringilla. Donec convallis risus ac metus luctus cursus. Duis tempus purus odio, ac varius leo aliquam nec. Aliquam dapibus tincidunt lacus, quis elementum dui vehicula et. In non condimentum risus. Nunc vitae lacinia massa. Proin porttitor ultricies nisl, vel imperdiet eros pulvinar quis. Curabitur egestas, lorem vel vestibulum pharetra, sapien enim hendrerit nulla, in rutrum ligula eros a ipsum. Vestibulum in ligula sed metus commodo egestas."
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