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
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");








const urlify = function (a) { return a.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "-").replace(/^-+|-+$/g, ''); };
const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
        data: { projects: _assets_projects__WEBPACK_IMPORTED_MODULE_4__["default"] }
    },
    {
        path: 'edit',
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"]
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
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { useHash: true })],
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
        if (window.location.pathname == "/edit") {
            document.getElementById("main").style.overflowY = "scroll";
            return;
        }
        document.getElementById("main").style.overflowY = "hidden";
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".main[_ngcontent-%COMP%] {\n  display: block;\n  position: fixed;\n  overflow-x: scroll;\n  height: 100vh;\n  width: 100vw;\n  scrollbar-width: none;\n}\n.main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFBRjtBQUdFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAvLyBvdmVyZmxvdy15OiBoaWRkZW47XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAvLyBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgXG4gIC5jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */"], data: { animation: [
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _project_project_component__WEBPACK_IMPORTED_MODULE_6__["ProjectComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _project_project_component__WEBPACK_IMPORTED_MODULE_6__["ProjectComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function EditComponent_div_1_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Token is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditComponent_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditComponent_div_1_div_8_div_1_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.f.username.errors.required);
} }
function EditComponent_div_1_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 14);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function EditComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Github Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditComponent_div_1_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Github Personal Access Token");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, EditComponent_div_1_div_8_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, EditComponent_div_1_span_11_Template, 1, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx_r0.submitted && ctx_r0.f.username.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.username.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
} }
function EditComponent_div_2_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditComponent_div_2_div_1_div_1_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const project_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r11.editProject(project_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r9.images[project_r10.titleImage], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r10.description);
} }
function EditComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditComponent_div_2_div_1_div_1_Template, 9, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.projectsConfigState);
} }
function EditComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditComponent_div_2_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r13.backButton(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Title Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.currentProject.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.currentProject.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r8.images[ctx_r8.currentProject.titleImage], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function EditComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditComponent_div_2_div_1_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EditComponent_div_2_div_2_Template, 10, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.currentProject == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.currentProject != false);
} }
class EditComponent {
    constructor(formBuilder, route, router) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.loading = false;
        this.submitted = false;
        this.loggedIn = false;
        this.currentProject = false;
        this.projectsConfigState = [];
        this.images = {};
        this.URL = 'https://api.github.com';
        this.axios = axios__WEBPACK_IMPORTED_MODULE_3___default.a;
    }
    ngOnInit() {
        this.errorMessage = '';
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    getProjectsConfig() {
        this.axios
            .get(this.URL +
            '/repos/Joshlucpoll/alfred-website/contents/src/assets/projects.ts', this.APIConfig)
            .then((response) => {
            const content = atob(response.data.content);
            let configString = content
                .split('const projects: Projects = ')
                .pop()
                .split(';')[0]
                .trim();
            const lines = configString.split('\n');
            const filteredLines = lines.filter((line) => !line.includes('function()'));
            configString = filteredLines.join('\n');
            const config = JSON.parse(configString);
            this.projectsConfigState = config;
            this.getImages();
        })
            .catch((err) => {
            this.errorMessage = err;
        });
    }
    getImages() {
        console.log(this.projectsConfigState);
        for (let project of this.projectsConfigState) {
            this.images[project.titleImage] = "https://raw.githubusercontent.com/Joshlucpoll/alfred-website/master/src" + project.titleImage;
        }
        console.log(this.images);
    }
    getImageURL(path) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.axios
                .get(this.URL + '/repos/Joshlucpoll/alfred-website/contents/src' + path, this.APIConfig)
                .then((response) => response.data.download_url)
                .catch((err) => {
                console.log(err);
                this.errorMessage = err;
            });
        });
    }
    editProject(project) {
        this.currentProject = project;
    }
    backButton() {
        this.currentProject = false;
    }
    initEditing() {
        this.getProjectsConfig();
        // this.axios
        //   .get(
        //     this.URL +
        //       '/repos/Joshlucpoll/alfred-website/contents/src/assets/corridor/corridor.mp4',
        //     this.APIConfig
        //   )
        //   .then((response) => console.log(response));
    }
    // convenience getter for easy access to form fields
    get f() {
        return this.loginForm.controls;
    }
    onSubmit() {
        this.errorMessage = '';
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        // login here
        this.loading = true;
        this.axios
            .get(this.URL + '/user', {
            headers: {
                Authorization: 'token ' + this.f.username.value,
                Accept: 'application/vnd.github.v3+json',
            },
        })
            .then((response) => {
            const userId = response.data.id;
            this.axios
                .get(this.URL + '/repos/Joshlucpoll/alfred-website/contributors', {
                headers: {
                    Authorization: 'token ' + this.f.username.value,
                    Accept: 'application/vnd.github.v3+json',
                },
            })
                .then((response) => {
                const contributors = response.data;
                console.log(contributors);
                for (let contributor of contributors) {
                    if (userId == contributor.id) {
                        const token = this.f.username.value;
                        this.APIConfig = {
                            headers: {
                                Authorization: 'token ' + token,
                                Accept: 'application/vnd.github.v3+json',
                            },
                        };
                        this.loggedIn = true;
                        this.initEditing();
                        break;
                    }
                }
                if (!this.loggedIn)
                    this.errorMessage = 'You are not authorised to access this page';
            })
                .catch((err) => {
                this.errorMessage = err;
            });
        })
            .catch((err) => {
            this.errorMessage = err;
        });
        this.loading = false;
    }
}
EditComponent.ɵfac = function EditComponent_Factory(t) { return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
EditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditComponent, selectors: [["ng-component"]], decls: 3, vars: 2, consts: [[1, "background"], ["class", "login-form", 4, "ngIf"], ["class", "editScreen", 4, "ngIf"], [1, "login-form"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "username"], ["type", "text", "formControlName", "username", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm mr-1", 4, "ngIf"], [1, "error-message", "text-danger"], [1, "invalid-feedback"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "mr-1"], [1, "editScreen"], ["class", "card", "style", "width: 18rem", 4, "ngFor", "ngForOf"], [1, "card", 2, "width", "18rem"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "hBack", 3, "click"], ["alt", "Responsive image", 1, "img-fluid", 3, "src"]], template: function EditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, EditComponent_div_1_Template, 15, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EditComponent_div_2_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".background[_ngcontent-%COMP%] {\n  background-color: white !important;\n  height: 100%;\n  width: 100%;\n  min-width: 100vw;\n  min-height: 100vh;\n  padding: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwdnc7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBwYWRkaW5nOiA1MHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                templateUrl: 'edit.component.html',
                styleUrls: ['./edit.component.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "View \u27F6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", project_r1.path());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
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
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 20, vars: 6, consts: [[1, "main-section-container"], [1, "main-section-wrapper", 3, "ngStyle"], [1, "title"], [1, "custom-br"], [1, "header"], [1, "navigation"], ["routerLink", "/", "routerLinkActive", "active", "id", "work-link", "alt", "work", 1, "link"], ["routerLink", "/about", "routerLinkActive", "active", "id", "about-link", "alt", "about", 1, "link"], ["routerLink", "/contact", "routerLinkActive", "active", "id", "contact-link", "alt", "contact", 1, "link"], [1, "arrow"], [1, "projects-container"], ["id", "container", 1, "projects"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item", "back-button", 3, "click"], [1, "item"], [3, "routerLink"], [1, "image-container"], [1, "images", 3, "src"], [1, "project-info"], [1, "project-title"], [1, "view-button"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomeComponent_li_17_Template, 9, 3, "li", 12);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".main-section-container[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 40vw;\n  min-width: 400px;\n  height: 100%;\n  display: inline-block;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 50px;\n  font-weight: bold;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .custom-br[_ngcontent-%COMP%] {\n  display: block;\n  width: 25%;\n  height: 2px;\n  opacity: 0.3;\n  background-color: #fff;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-right: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #ffffff88;\n  margin: 20px 0;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:before {\n  position: absolute;\n  opacity: 0;\n  content: attr(alt);\n  overflow: hidden;\n  color: #FFF;\n  transition: transform 500ms ease, opacity 500ms ease;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover:before {\n  transform: translate(-1px, -1px);\n  opacity: 1;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .current-page[_ngcontent-%COMP%]:before {\n  transform: translate(-1px, -1px);\n  opacity: 1;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 40px;\n  animation: arrow 2s ease infinite;\n}\n@keyframes arrow {\n  0% {\n    transform: translateX(0);\n  }\n  12.5% {\n    transform: translateX(50%);\n  }\n  25% {\n    transform: translateX(25%);\n  }\n  37.5% {\n    transform: translateX(50%);\n  }\n  50% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n.projects-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding-left: 40vw;\n  pointer-events: none;\n}\n.projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n}\n.projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  position: relative;\n  width: 40vw;\n  min-width: 400px;\n  height: 100vh;\n  list-style: none;\n  pointer-events: all;\n  cursor: pointer;\n}\n.projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n.projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n  transition: transform 1s cubic-bezier(0.62, 0.09, 0.19, 1.06);\n}\n.projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .project-info[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  background-color: rgba(24, 26, 27, 0);\n  transition: background-color 500ms ease;\n}\n.projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .project-info[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%] {\n  opacity: 0;\n  color: white;\n  padding: 5px;\n  font-size: 30px;\n  font-weight: 100;\n  font-weight: bold;\n  transform: translateY(-20px);\n  transition: opacity 400ms 100ms ease, transform 400ms 100ms ease;\n}\n.projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .project-info[_ngcontent-%COMP%]   .view-button[_ngcontent-%COMP%] {\n  opacity: 0;\n  color: black;\n  background-color: white;\n  padding: 15px 20px;\n  border-radius: 5px;\n  transform: translateY(20px);\n  transition: opacity 400ms 100ms ease, transform 400ms 100ms ease;\n}\n.projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .project-info[_ngcontent-%COMP%] {\n  background-color: #181a1b9a;\n}\n.projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .project-info[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .project-info[_ngcontent-%COMP%]   .view-button[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .image-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n}\n.projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  opacity: 0.5;\n  color: white;\n  background-color: #000000;\n  transition: opacity 500ms ease;\n}\n.projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n@media only screen and (max-width: 1000px) {\n  .projects-container[_ngcontent-%COMP%] {\n    padding-left: 400px;\n  }\n}\n@media (hover: none) {\n  .projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .project-info[_ngcontent-%COMP%] {\n    background-color: #181a1b9a;\n  }\n  .projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .project-info[_ngcontent-%COMP%]   .project-title[_ngcontent-%COMP%] {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  .projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .project-info[_ngcontent-%COMP%]   .view-button[_ngcontent-%COMP%] {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFBSjtBQUVJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFOO0FBR0k7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFETjtBQUlJO0VBQ0UsZUFBQTtBQUZOO0FBSU07RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBSFI7QUFNUTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSlY7QUFNVTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0RBQUE7QUFKWjtBQU9VO0VBQ0UsZ0NBQUE7RUFDQSxVQUFBO0FBTFo7QUFTVTtFQUNFLGdDQUFBO0VBQ0EsVUFBQTtBQVBaO0FBWUk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBVk47QUFlQTtFQUNFO0lBQ0Usd0JBQUE7RUFaRjtFQWNBO0lBQ0UsMEJBQUE7RUFaRjtFQWNBO0lBQ0UsMEJBQUE7RUFaRjtFQWNBO0lBQ0UsMEJBQUE7RUFaRjtFQWNBO0lBQ0Usd0JBQUE7RUFaRjtFQWNBO0lBQ0Usd0JBQUE7RUFaRjtBQUNGO0FBZUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBYkY7QUFlRTtFQUNFLFlBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7QUFkSjtBQWdCSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBZE47QUFnQk07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBZFI7QUFnQlE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsNkRBQUE7QUFkVjtBQWtCTTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFFQSxxQ0FBQTtFQUNBLHVDQUFBO0FBbEJSO0FBb0JRO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSw0QkFBQTtFQUNBLGdFQUFBO0FBbkJWO0FBc0JRO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFFQSwyQkFBQTtFQUNBLGdFQUFBO0FBckJWO0FBeUJNO0VBQ0UsMkJBQUE7QUF2QlI7QUF5QlE7RUFDRSxVQUFBO0VBQ0Esd0JBQUE7QUF2QlY7QUF5QlE7RUFDRSxVQUFBO0VBQ0Esd0JBQUE7QUF2QlY7QUEyQlE7RUFDRSxxQkFBQTtBQXpCVjtBQThCSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFFQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7QUE3Qk47QUErQk07RUFDRSxVQUFBO0FBN0JSO0FBb0NBO0VBQ0U7SUFDRSxtQkFBQTtFQWpDRjtBQUNGO0FBcUNBO0VBSVE7SUFDRSwyQkFBQTtFQXRDUjtFQXdDUTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQXRDVjtFQXdDUTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQXRDVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tc2VjdGlvbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA0MHZ3O1xuICBtaW4td2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAubWFpbi1zZWN0aW9uLXdyYXBwZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXG4gICAgLnRpdGxlIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5jdXN0b20tYnIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMjUlO1xuICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIC5oZWFkZXIge1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgIFxuICAgICAgLm5hdmlnYXRpb24ge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAubGluayB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmODg7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgXG4gICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGF0dHIoYWx0KTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlLCBvcGFjaXR5IDUwMG1zIGVhc2U7XG4gICAgICAgICAgfSBcbiAgICAgICAgICBcbiAgICAgICAgICAmOmhvdmVyOmJlZm9yZSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMXB4KTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5jdXJyZW50LXBhZ2Uge1xuICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0xcHgpO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmFycm93IHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIGFuaW1hdGlvbjogYXJyb3cgMnMgZWFzZSBpbmZpbml0ZTtcbiAgICB9XG4gIH1cbn1cblxuQGtleWZyYW1lcyBhcnJvdyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgMTIuNSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xuICB9XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI1JSk7XG4gIH1cbiAgMzcuNSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxufVxuXG4ucHJvamVjdHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZy1sZWZ0OiA0MHZ3O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgXG4gIC5wcm9qZWN0cyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgLml0ZW0ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDQwdnc7XG4gICAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgXG4gICAgICAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgXG4gICAgICAgIC5pbWFnZXMge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXMgY3ViaWMtYmV6aWVyKC42MiwuMDksLjE5LDEuMDYpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5wcm9qZWN0LWluZm8ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQsIDI2LCAyNywgMCk7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwbXMgZWFzZTtcbiAgICAgICAgXG4gICAgICAgIC5wcm9qZWN0LXRpdGxlIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgMTAwbXMgZWFzZSwgdHJhbnNmb3JtIDQwMG1zIDEwMG1zIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC52aWV3LWJ1dHRvbiB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMTVweCAyMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIDEwMG1zIGVhc2UsIHRyYW5zZm9ybSA0MDBtcyAxMDBtcyBlYXNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgICY6aG92ZXIgLnByb2plY3QtaW5mbyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxODFhMWI5YTtcblxuICAgICAgICAucHJvamVjdC10aXRsZSB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIH1cbiAgICAgICAgLnZpZXctYnV0dG9uIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJjpob3ZlciAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgLmltYWdlcyB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJhY2stYnV0dG9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgXG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuICBcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5wcm9qZWN0cy1jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogNDAwcHg7XG4gIH1cbn1cblxuXG5AbWVkaWEgKGhvdmVyOiBub25lKSB7XG4gIC5wcm9qZWN0cy1jb250YWluZXIge1xuICAgIC5wcm9qZWN0cyB7XG4gICAgICAuaXRlbSB7XG4gICAgICAgIC5wcm9qZWN0LWluZm8ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxODFhMWI5YTtcblxuICAgICAgICAgIC5wcm9qZWN0LXRpdGxlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC52aWV3LWJ1dHRvbiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ== */"] });
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
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_div_22_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.initialiseModel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View in 3D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectComponent_li_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", image_r5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProjectComponent_li_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "video", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const video_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("muted", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", video_r6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
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
                let scene = new three__WEBPACK_IMPORTED_MODULE_1__["Scene"]();
                let renderer = new three__WEBPACK_IMPORTED_MODULE_1__["WebGLRenderer"]({ antialias: true });
                renderer.outputEncoding = three__WEBPACK_IMPORTED_MODULE_1__["sRGBEncoding"];
                renderer.setSize(this.el.getBoundingClientRect().width - 20, this.el.getBoundingClientRect().height - 80);
                this.el.appendChild(renderer.domElement);
                three__WEBPACK_IMPORTED_MODULE_1__["DefaultLoadingManager"].onLoad = function () {
                    pmremGenerator.dispose();
                };
                new three__WEBPACK_IMPORTED_MODULE_1__["TextureLoader"]().load('/assets/envMap.png', function (texture) {
                    texture.encoding = three__WEBPACK_IMPORTED_MODULE_1__["sRGBEncoding"];
                    let pngBackground = pmremGenerator.fromEquirectangular(texture).texture;
                    scene.environment = pngBackground;
                    texture.dispose();
                });
                const pmremGenerator = new three__WEBPACK_IMPORTED_MODULE_1__["PMREMGenerator"](renderer);
                pmremGenerator.compileEquirectangularShader();
                scene.background = new three__WEBPACK_IMPORTED_MODULE_1__["Color"](0xDCDCDC);
                let camera = new three__WEBPACK_IMPORTED_MODULE_1__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 0.1, 1000);
                camera.position.set(this.project.model.cameraPosition.x, this.project.model.cameraPosition.y, this.project.model.cameraPosition.z);
                scene.add(camera);
                var loader = new three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_2__["GLTFLoader"]();
                loader.load(this.project.model.path, function (gltf) {
                    // const newScene = gltf.scene.mater
                    scene.add(gltf.scene);
                }, undefined, function (error) {
                    console.error(error);
                    return null;
                });
                const light = new three__WEBPACK_IMPORTED_MODULE_1__["AmbientLight"](0x404040); // soft white light
                // light.intensity = 10
                scene.add(light);
                var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_3__["OrbitControls"](camera, renderer.domElement);
                controls.target = new three__WEBPACK_IMPORTED_MODULE_1__["Vector3"](0, 0, 0);
                controls.enableDamping = true;
                controls.dampingFactor = 0.07;
                controls.update();
                var windowSize = this.el.getBoundingClientRect().width * this.el.getBoundingClientRect().height;
                const animate = () => {
                    requestAnimationFrame(animate);
                    if (this.el.getBoundingClientRect().width * this.el.getBoundingClientRect().height !== windowSize) {
                        renderer.setSize(this.el.getBoundingClientRect().width - 20, this.el.getBoundingClientRect().height - 80);
                        camera.aspect = (this.el.getBoundingClientRect().width - 20) / (this.el.getBoundingClientRect().height - 80);
                        camera.updateProjectionMatrix();
                    }
                    controls.update();
                    renderer.render(scene, camera);
                };
                animate();
            }
        }
    }
}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectComponent, selectors: [["app-project"]], decls: 35, vars: 12, consts: [["id", "main-section-container", 1, "main-section-container"], [1, "main-section-wrapper", 3, "ngStyle"], [1, "title"], [1, "custom-br"], [1, "header"], [1, "navigation"], ["routerLink", "/", "routerLinkActive", "active", "id", "work-link", "alt", "work", 1, "link"], ["routerLink", "/about", "routerLinkActive", "active", "id", "about-link", "alt", "about", 1, "link"], ["routerLink", "/contact", "routerLinkActive", "active", "id", "contact-link", "alt", "contact", 1, "link"], [1, "arrow"], [1, "images-container"], ["id", "container", 1, "images"], [1, "item"], [1, "description"], ["class", "model-button", 3, "click", 4, "ngIf"], [1, "item", "item-colour"], [1, "image", 3, "src"], ["class", "item item-colour", 4, "ngFor", "ngForOf"], [1, "next-back-buttons", "item"], ["routerLinkActive", "active", 1, "project-buttons", 3, "routerLink"], [1, "next-project-image-container"], [1, "next-image", 3, "src"], [1, "project-buttons", 3, "click"], [1, "model-button", 3, "click"], ["autoplay", "", "loop", "", 1, "image", 3, "muted"], ["type", "video/mp4", 3, "src"]], template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ProjectComponent_li_26_Template, 3, 2, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Next Project \u27F6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_Template_div_click_33_listener() { return ctx.backButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u27F5 Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, ctx.menuOpacity, "scale(" + ctx.menuScale + " )"));
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.project.videos);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.nextProjectURL);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.nextProject.titleImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".main-section-container[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 40vw;\n  min-width: 400px;\n  height: 100%;\n  display: inline-block;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 50px;\n  font-weight: bold;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .custom-br[_ngcontent-%COMP%] {\n  display: block;\n  width: 25%;\n  height: 2px;\n  opacity: 0.3;\n  background-color: #fff;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-right: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #ffffff88;\n  margin: 20px 0;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:before {\n  position: absolute;\n  opacity: 0;\n  content: attr(alt);\n  overflow: hidden;\n  color: #FFF;\n  transition: transform 500ms ease, opacity 500ms ease;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:hover:before {\n  transform: translate(-1px, -1px);\n  opacity: 1;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .current-page[_ngcontent-%COMP%]:before {\n  transform: translate(-1px, -1px);\n  opacity: 1;\n}\n.main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 40px;\n  animation: arrow 2s ease infinite;\n}\n@keyframes arrow {\n  0% {\n    transform: translateX(0);\n  }\n  12.5% {\n    transform: translateX(50%);\n  }\n  25% {\n    transform: translateX(25%);\n  }\n  37.5% {\n    transform: translateX(50%);\n  }\n  50% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n.images-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding-left: 40vw;\n  pointer-events: none;\n  z-index: 1;\n}\n.images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n}\n.images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 100vh;\n  padding: 0 10px;\n  transition: width ease 500ms;\n  list-style: none;\n  background-color: #131414ea;\n  pointer-events: all;\n}\n.images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: calc(100vh - 10vw);\n  width: 40vw;\n  min-width: 400px;\n  color: rgba(255, 255, 255, 0.6);\n  padding: 5vw;\n  font-size: 16px;\n}\n.images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  text-align: start;\n  color: white;\n}\n.images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .model-button[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 40px;\n  padding: 20px;\n  background-color: #fff;\n  color: #000;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  height: 100vh;\n  max-width: 100vw;\n  object-fit: contain;\n}\n.images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .next-back-buttons[_ngcontent-%COMP%] {\n  width: 40vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 0;\n}\n.images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .next-back-buttons[_ngcontent-%COMP%]   .project-buttons[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  opacity: 0.4;\n  color: white;\n  background-color: #000000;\n  transition: all 500ms ease;\n  cursor: pointer;\n}\n.images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .next-back-buttons[_ngcontent-%COMP%]   .project-buttons[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .next-back-buttons[_ngcontent-%COMP%]   .project-buttons[_ngcontent-%COMP%]   .next-project-image-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50%;\n  overflow: hidden;\n}\n.images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .next-back-buttons[_ngcontent-%COMP%]   .project-buttons[_ngcontent-%COMP%]   .next-project-image-container[_ngcontent-%COMP%]   .next-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 1s cubic-bezier(0.62, 0.09, 0.19, 1.06);\n}\n.images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .next-back-buttons[_ngcontent-%COMP%]   .project-buttons[_ngcontent-%COMP%]   .next-project-image-container[_ngcontent-%COMP%]   .next-image[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2);\n}\n.images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%]   .next-back-buttons[_ngcontent-%COMP%]   .project-buttons[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  z-index: 1;\n  background-color: #000000;\n  padding: 5px;\n}\n@media only screen and (max-width: 1000px) {\n  .images-container[_ngcontent-%COMP%] {\n    padding-left: 400px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUNGO0FBQ0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFBSjtBQUVJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFOO0FBR0k7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFETjtBQUlJO0VBQ0UsZUFBQTtBQUZOO0FBSU07RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBSFI7QUFLUTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSFY7QUFLVTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0RBQUE7QUFIWjtBQU1VO0VBQ0UsZ0NBQUE7RUFDQSxVQUFBO0FBSlo7QUFRVTtFQUNFLGdDQUFBO0VBQ0EsVUFBQTtBQU5aO0FBV0k7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBVE47QUFjQTtFQUNFO0lBQ0Usd0JBQUE7RUFYRjtFQWFBO0lBQ0UsMEJBQUE7RUFYRjtFQWFBO0lBQ0UsMEJBQUE7RUFYRjtFQWFBO0lBQ0UsMEJBQUE7RUFYRjtFQWFBO0lBQ0Usd0JBQUE7RUFYRjtFQWFBO0lBQ0Usd0JBQUE7RUFYRjtBQUNGO0FBY0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtBQVpGO0FBY0U7RUFDRSxZQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0FBYko7QUFlSTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFiTjtBQWdCTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUVBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFmUjtBQWlCUTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBZlY7QUFrQlE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQWhCVjtBQW9CTTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBbEJSO0FBc0JJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtBQXBCTjtBQXNCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUVBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUFyQlI7QUF1QlE7RUFDRSxVQUFBO0FBckJWO0FBd0JRO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUF0QlY7QUF3QlU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkRBQUE7QUF0Qlo7QUF3Qlk7RUFDRSxxQkFBQTtBQXRCZDtBQTBCUTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUF4QlY7QUFnQ0E7RUFDRTtJQUNFLG1CQUFBO0VBN0JGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1zZWN0aW9uLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDQwdnc7XG4gIG1pbi13aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gIC5tYWluLXNlY3Rpb24td3JhcHBlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXG4gICAgLnRpdGxlIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5jdXN0b20tYnIge1xuICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgIHdpZHRoOiAyNSU7XG4gICAgICBoZWlnaHQ6IDJweDtcbiAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgLmhlYWRlciB7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgXG4gICAgICAubmF2aWdhdGlvbiB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIFxuICAgICAgICAubGluayB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmODg7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgXG4gICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIGNvbnRlbnQ6IGF0dHIoYWx0KTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA1MDBtcyBlYXNlLCBvcGFjaXR5IDUwMG1zIGVhc2U7XG4gICAgICAgICAgfSBcbiAgICAgICAgICBcbiAgICAgICAgICAmOmhvdmVyOmJlZm9yZSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LCAtMXB4KTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5jdXJyZW50LXBhZ2Uge1xuICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0xcHgpO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmFycm93IHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIGFuaW1hdGlvbjogYXJyb3cgMnMgZWFzZSBpbmZpbml0ZTtcbiAgICB9XG4gIH1cbn1cbiAgXG5Aa2V5ZnJhbWVzIGFycm93IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICAxMi41JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG4gIH1cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjUlKTtcbiAgfVxuICAzNy41JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5cbi5pbWFnZXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZy1sZWZ0OiA0MHZ3O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgei1pbmRleDogMTtcbiAgXG4gIC5pbWFnZXMge1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBcbiAgICAuaXRlbSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggZWFzZSA1MDBtcztcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxNDE0ZWE7XG4gICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuXG4gICAgICBcbiAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMHZ3KTtcbiAgICAgICAgd2lkdGg6IDQwdnc7XG4gICAgICAgIG1pbi13aWR0aDogNDAwcHg7XG4gICAgICAgIFxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICAgICAgICBwYWRkaW5nOiA1dnc7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAubW9kZWwtYnV0dG9uIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAuaW1hZ2Uge1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5uZXh0LWJhY2stYnV0dG9ucyB7XG4gICAgICB3aWR0aDogNDB2dztcbiAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBcbiAgICAgIC5wcm9qZWN0LWJ1dHRvbnMge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcblxuICAgICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAubmV4dC1wcm9qZWN0LWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgICAubmV4dC1pbWFnZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGN1YmljLWJlemllciguNjIsLjA5LC4xOSwxLjA2KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC5pbWFnZXMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwMHB4O1xuICB9XG59Il19 */"] });
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
const urlify = function (a) {
    return a
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '-')
        .replace(/^-+|-+$/g, '');
};
//test
const projects = [
    {
        title: "Single Cover for Charlie Hilton's 'CEREBRAL'",
        path: function () {
            return '/' + urlify(this.title);
        },
        model: false,
        titleImage: '/assets/Cerebral/Cerebral11.png',
        images: [
            '/assets/Cerebral/Cerebral3.png',
            '/assets/Cerebral/Cerebral4.png',
            '/assets/Cerebral/Cerebral5.png',
            '/assets/Cerebral/Cerebral9.png',
            '/assets/Cerebral/Cerebral6.png',
            '/assets/Cerebral/Cerebral7.png',
            '/assets/Cerebral/Cerebral8.png',
            '/assets/Cerebral/Cerebral10.png',
        ],
        videos: [],
        description: "A cover commisioned for Charlie Hilton for his single 'Cerebral'. Created using a Z-brush -> Blender -> Substance Painter -> Unreal 5 pipeline. I began by using a laser scanner to map Hilton's face. Using Z-brush, I sculpted the rest of his head, due to only having the face scan. I then baked the captured textures onto the model and matched the rest of his skin, creating pores. Once exported to Blender, I used the hair particle editor to create his hair. When exported to Unreal 5.1, I used the groom tools to make the hair look realistic. The environment was created with composited quixel assets. Bespoke models were designed in Blender and exported to Unreal, such as the conveyor flaps, that utilised cloth simulations. I used Nanite and Lumen, to create a realtime photorealistic style. I finalised the Scene with Niagra particle systems (sparks and dust) and volumetic fog. The final design was colour graded in Photoshop.",
    },
    {
        title: 'R5 Astromech Droid',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: {
            path: '/assets/R5/R5 Astro.glb',
            cameraPosition: {
                x: 1,
                y: 4,
                z: 1,
            },
        },
        titleImage: '/assets/R5/R5_9.png',
        images: [
            '/assets/R5/R5_10.png',
            '/assets/R5/R5_13.png',
            '/assets/R5/R5_12.png',
            '/assets/R5/R5_4.png',
            '/assets/R5/R5.png',
        ],
        videos: [],
        description: 'R5 Astromech droid modelled in Blender and textured in Substance Painter. This was my first time using the Blender -> Substance pipeline. Notable uses of normal maps to create detail without additional poligons, with a high to low poly bake. Scenes were created and rendered in Blender. ',
    },
    {
        title: 'Dalek',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: {
            path: '/assets/Dalek/Dalek.glb',
            cameraPosition: {
                x: 1,
                y: 4,
                z: 1,
            },
        },
        titleImage: '/assets/Dalek/Dalek 4.png',
        images: [
            '/assets/Dalek/Dalek5.png',
            '/assets/Dalek/Dalek 3.png',
            '/assets/Dalek/Dalek 1.png',
            '/assets/Dalek/Dalek 2.png',
        ],
        videos: [],
        description: 'The infamous antagonists of the Doctor Who franchise. Made using a Blender -> Substance -> Unreal 5 pipeline. Low and high poly models designed in blender, then exported to substance painter. Baked the high poly mesh to the low poly, to generate normals. Exported the textures to Unreal 5.1 and composed a scene using Quixel assets.',
    },
    {
        title: 'Orcs',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: false,
        titleImage: '/assets/Orcs/orcs7.png',
        images: [
            '/assets/Orcs/Shagflak.png',
            '/assets/Orcs/Flarg.png',
            '/assets/Orcs/Targul.png',
            '/assets/Orcs/Regrodz.png',
            '/assets/Orcs/Gorlog.png',
            '/assets/Orcs/Bolg.png',
        ],
        videos: [],
        description: 'A group of orcs inspired by the Lord of the Rings trilogy and games. Sculpted and textured in Z-brush. Rendered and retopologized in Blender. Bolg is inspired by the character of the same name in the Hobbit trilogy.',
    },
    {
        title: 'Everus Harbor',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: {
            path: '/assets/everus-harbor/everus harbor.glb',
            cameraPosition: {
                x: 1,
                y: 4,
                z: 1,
            },
        },
        titleImage: '/assets/everus-harbor/everus_harbor1.png',
        images: [
            '/assets/everus-harbor/everus_harbor2.png',
            '/assets/everus-harbor/everus_harbor3.png',
        ],
        videos: ['/assets/everus-harbor/everus_vid1.mp4'],
        description: 'Inspired by Everus Harbor spacestation from the Star Citizen MMO Videogame. The design utilizes a streamlined workflow, by using generated textures with alpha maps, to create the illusion of layered 3D modelling. This reduced the modelling time and poly count significantly',
    },
    {
        title: 'Battle of the Zomme',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: false,
        titleImage: '/assets/Zombies/zomme4.png',
        images: [
            '/assets/Zombies/zomme1.png',
            '/assets/Zombies/zomme2.png',
            '/assets/Zombies/zomme3.png',
            '/assets/Zombies/zomme5.png',
        ],
        videos: ['/assets/Zombies/Zombies.mp4'],
        description: ' This level was presented for Level Design Fundametals module, which scored a mark of 84%. The level is based around COD zombies and inspired by the Somme battlefield. Software used: Asset modelling - Maya, Blender ; Asset texturing - Sunstance Painter, Substance Designer ; Scene composition - Unreal Engine 4 ; Programming and blueprints - Unreal Engine 4 ; Cinematics - Unreal Engine 4.',
    },
    {
        title: 'Fishing Fiasco',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: false,
        titleImage: '/assets/Fishing_Diorama/FishingFiasco10.png',
        images: [
            '/assets/Fishing_Diorama/FishingFiasco7.png',
            '/assets/Fishing_Diorama/FishingFiasco5.png',
            '/assets/Fishing_Diorama/FishingFiasco4.png',
            '/assets/Fishing_Diorama/FishingFiasco1.png',
            '/assets/Fishing_Diorama/DNDelephant2.png',
        ],
        videos: [],
        description: 'A Diorama of a scene from a Dungeons and Dragons campaign. The elephant character was sculpted in Z-brush, then retopologized and rigged in Blender. Modelling, texturing, cloth simulation, scene composition and rendering were done in Blender. The environment was created with some imported assets from Megascans. Humanoid character creations were created with MetaHuman and rigged in Blender. Postprocessing and colour grading were done in Photoshop. ',
    },
    {
        title: 'Lancia Stratos',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: {
            path: '/assets/Lancia/Lancia Stratos.glb',
            cameraPosition: {
                x: 1,
                y: 4,
                z: 1,
            },
        },
        titleImage: '/assets/Lancia/Lancia.png',
        images: ['/assets/Lancia/Lancia2.png', '/assets/Lancia/Lancia3.png'],
        videos: [],
        description: 'Replica of a Lancia Stratos, made for the Lighting and Texturing module. Given a First. A low poly 15k poly, that was created using a low to high poly workflow. Optimized for games Modelled in Maya and textured in Sunstance painter using the Unreal engine -> substance bridge. Rendered in Blender.',
    },
    {
        title: 'Black Cabin Blunder',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: false,
        titleImage: '/assets/Cabin/BlackCabinBlunder8.png',
        images: [
            '/assets/Cabin/BlackCabinBlunder5.png',
            '/assets/Cabin/BlackCabinBlunder4.png',
            '/assets/Cabin/BlackCabinBlunder.png',
        ],
        videos: [],
        description: 'A Diorama of a scene from a Dungeons and Dragons campaign. The elephant character was sculpted in Z-brush, then retopologized and rigged in Blender. Modelling, texturing, cloth simulation, scene composition and rendering were done in Blender. Notable use of particle hair simulations for the trees. Humanoid character creations were created with MetaHuman and rigged in Blender. Postprocessing and colour grading were done in Photoshop.  ',
    },
    {
        title: 'TIE Fighter',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: {
            path: '/assets/tie-fighter/tie-fighter.glb',
            cameraPosition: {
                x: 3,
                y: 3,
                z: 10,
            },
        },
        titleImage: '/assets/tie-fighter/tie-fighter.png',
        images: [
            '/assets/tie-fighter/tie-fighter2.png',
            '/assets/tie-fighter/tie-fighter3.png',
            '/assets/tie-fighter/tie-fighter4.png',
        ],
        videos: [],
        description: 'A 3D model of a TIE Fighter from the Star Wars franchise. Modelled and textured to a very high degree of acuracy in Blender. Uses colour ramp nodes in conjuction with edge detection to create the metal edgware effect',
    },
    {
        title: 'Bog Fisher (Bournemouth Modelling Competition Winner)',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: {
            path: '/assets/BogFisher/BogFisher.glb',
            cameraPosition: {
                x: 0,
                y: 6,
                z: 0,
            },
        },
        titleImage: '/assets/BogFisher/Bog Fisher3.png',
        images: [
            '/assets/BogFisher/Bog Fisher5.png',
            '/assets/BogFisher/Bog Fisher1.png',
        ],
        videos: [],
        description: "Winning design for Bournemouth University first year game modelling competition. Descibed as:'An inpired design using great low poly modelling techniques'. The competition was to model a new mode of transport. I decided on a distopian stilt walker design that uses wind power to move. Modelled in Maya, with scene composition, texturing and rendering done in Blender",
    },
    {
        title: 'Spartan Helmet',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: {
            path: '/assets/Spartan/Spartan Vader.glb',
            cameraPosition: {
                x: 1,
                y: 4,
                z: 1,
            },
        },
        titleImage: '/assets/Spartan/Spartan Vader.png',
        images: [
            '/assets/Spartan/Spartan Vader1.png',
            '/assets/Spartan/Spartan Vader2.png',
        ],
        videos: [],
        description: 'Original design inspired by the Spartan helmet. Modelled in Blender and textured in Substance painter. particle hair simulation done in Blender.',
    },
    {
        title: 'Black Hole',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: false,
        titleImage: '/assets/black-hole/blackhole.png',
        images: [
            '/assets/black-hole/blackhole1.png',
            '/assets/black-hole/blackhole2.png',
        ],
        videos: [],
        description: "Inspired by Interstellar's Gargantua Spinning Black Hole. Uses volumetrics and some camera normals effects.",
    },
    {
        title: 'DeLorean',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: {
            path: '/assets/DMC/DMC.glb',
            cameraPosition: {
                x: 1,
                y: 4,
                z: 1,
            },
        },
        titleImage: '/assets/DMC/DMC3.png',
        images: ['/assets/DMC/DMC2.png', '/assets/DMC/DMC.png'],
        videos: [],
        description: 'Model of the DMC DeLorean, designed for the Game Modelling Fundamentals module. Received a First. Under 10k poly for game optimisation. Created using a low to high poly workflow with a high poly bake to the low poly. Modelled in Maya, textured in Substance Painter and rendered in Blender.',
    },
    {
        title: 'Seismic Charge',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: {
            path: '/assets/Seismic/charge.glb',
            cameraPosition: {
                x: 0,
                y: 4,
                z: 0,
            },
        },
        titleImage: '/assets/Seismic/seismic charge4.png',
        images: [
            '/assets/Seismic/seismic charge8.png',
            '/assets/Seismic/seismic charge.png',
        ],
        videos: [],
        description: 'Replica of the siemic charge from Star Wars: Attack of The Clones. Modelled and textured in Blender',
    },
    {
        title: 'Tardis Console',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: false,
        titleImage: '/assets/Tardis/tardis42.png',
        images: [
            "/assets/Tardis/lara's sonic.png",
            '/assets/Tardis/tardis.png',
            '/assets/Tardis/tardis2.png',
            '/assets/Tardis/tardis3.png',
        ],
        videos: [],
        description: ' Renewed design of the original 1963 Tardis console from Dr who. Modelled and textured in Blender. Post processing and colour grading were done in Photoshop.',
    },
    {
        title: 'Rings of Power',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: false,
        titleImage: '/assets/Rings/Rings of power7.png',
        images: [
            '/assets/Rings/Rings of power6.png',
            '/assets/Rings/Rings of power.png',
        ],
        videos: [],
        description: ' Rings inspired by the Lord of the Rings trilogy. Modelled and textured in Blender. Some testing with LOD creation with a high to low poly work flow.',
    },
    {
        title: "Man O' War",
        path: function () {
            return '/' + urlify(this.title);
        },
        model: {
            path: "/assets/man-o'-war/Man o' war.glb",
            cameraPosition: {
                x: 1,
                y: 4,
                z: 1,
            },
        },
        titleImage: "/assets/man-o'-war/man-o'-war1.png",
        images: [],
        videos: [],
        description: 'A depiction of the Portuguese Man-O-War Siphonophore. Sculpted and Textured in Blender',
    },
    {
        title: 'Vader',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: {
            path: '/assets/vader/vader.glb',
            cameraPosition: {
                x: 1,
                y: 4,
                z: 1,
            },
        },
        titleImage: '/assets/vader/vader.png',
        images: ['/assets/vader/vader2.png', '/assets/vader/vader3.png'],
        videos: [],
        description: "Darth Vader's helmet from 'Star Wars: Episode III – Revenge of the Sith'. Modelled using primitive, box and edge modelling techniques, in Blender",
    },
    {
        title: 'Starkiller Base',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: false,
        titleImage: '/assets/StarKiller/starkiller_base3.png',
        images: ['/assets/StarKiller/starkiller base2-4.png'],
        videos: ['/assets/StarKiller/0000-02805.mp4'],
        description: 'Origninal design inspired by Starkiller base from Starwars The Force Awakens. Modelled in Blender using alpha maps to produce low poly complicated designs to replicate complex extrusions. The postprocessing and colour grading were done in Photoshop.  ',
    },
    {
        title: 'Sci-fi Mask Design',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: {
            path: '/assets/Custom_mask_design/Jegrah Fough helmet.glb',
            cameraPosition: {
                x: 1,
                y: 4,
                z: 1,
            },
        },
        titleImage: '/assets/Custom_mask_design/Jegrah_fough_helmet2.png',
        images: [],
        videos: [],
        description: 'Custom Designed Sci-fi helmet. Mostly using edge modelling methods',
    },
    {
        title: 'Ocean in a Box',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: {
            path: '/assets/ocean-diorama/oceandiorama.glb',
            cameraPosition: {
                x: 1,
                y: 4,
                z: 1,
            },
        },
        titleImage: '/assets/ocean-diorama/oceandiorama1.png',
        images: ['/assets/ocean-diorama/oceandiorama2.png'],
        videos: [],
        description: 'A diorama of a raft lost at sea. The water effect was created with the ocean modifier; this was used in conjuction with caustic effects to show the refraction of light without increasing render time. Modelled. textured and lit in Blender. ',
    },
    {
        title: 'The World is on the Corner',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: false,
        titleImage: '/assets/ricochet/Ricochet2.jpg',
        images: [],
        videos: [],
        description: 'Art render, depicting a Line from Ricochet-David Bowie. Uses volumetric raytracing and shot compositional techniques.',
    },
    {
        title: 'Corridor',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: false,
        titleImage: '/assets/corridor/corridor.png',
        images: [],
        videos: ['/assets/corridor/corridor.mp4'],
        description: 'Infinite corridor animation made and rendered in Blender.',
    },
    {
        title: 'Phasmophobia Lobby',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: false,
        titleImage: '/assets/phasmo/phasmo.png',
        images: [
            '/assets/phasmo/phasmo2.png',
            '/assets/phasmo/phasmo3.png',
            '/assets/phasmo/phasmo4.png',
            '/assets/phasmo/phasmo5.png',
        ],
        videos: [],
        description: 'A redesign of the lobby from the game Phasmophobia. As a fan of the game, I created a design of higher aesthetic fidelity, utilizing my level design skills. This was to see if I could make a more coherent design, enabling a chilling atmosphere.',
    },
    {
        title: 'Mandalorian',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: {
            path: '/assets/mando/mando.glb',
            cameraPosition: {
                x: 1,
                y: 4,
                z: 1,
            },
        },
        titleImage: '/assets/mando/mando.png',
        images: ['/assets/mando/mando2.png', '/assets/mando/mando3.png'],
        videos: [],
        description: "The Mandolorian's helmet from 'Star Wars: The Mandalorian'",
    },
    {
        title: 'Bergmann',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: false,
        titleImage: '/assets/bergman/bergman.jpg',
        images: ['/assets/bergman/bergman2.jpg'],
        videos: [],
        description: 'A digital replica of a Bergman pistol on a beach. Mostly using primitive and edge modelling techniques to achieve the iconic form  of the weapon. hair particle effects were used to make a realistic distribution for the grass.',
    },
    {
        title: 'Wands',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: {
            path: '/assets/wands/wands.glb',
            cameraPosition: {
                x: 1,
                y: 4,
                z: 1,
            },
        },
        titleImage: '/assets/wands/wands.png',
        images: ['/assets/wands/wands2.png', '/assets/wands/wands3.png'],
        videos: [],
        description: 'Custom designed and made Harry Potter inspired Wands. Modelled and textured in Blender',
    },
    {
        title: 'Sabers',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: {
            path: '/assets/sabers/sabers.glb',
            cameraPosition: {
                x: 1,
                y: 5,
                z: 1,
            },
        },
        titleImage: '/assets/sabers/sabers.png',
        images: [
            '/assets/sabers/sabers1.png',
            '/assets/sabers/sabers2.png',
            '/assets/sabers/sabers3.png',
            '/assets/sabers/sabers4.png',
        ],
        videos: [],
        description: 'Original designs based of the weapons from Star Wars. Modelled and textured in Blender',
    },
    {
        title: 'Sonic Screwdrivers',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: {
            path: '/assets/screw-drivers/sonic.glb',
            cameraPosition: {
                x: 3,
                y: 3,
                z: 0,
            },
        },
        titleImage: '/assets/screw-drivers/sonic.png',
        images: [
            '/assets/screw-drivers/sonic1.png',
            '/assets/screw-drivers/sonic2.png',
            '/assets/screw-drivers/sonic3.png',
            '/assets/screw-drivers/sonic4.png',
            '/assets/screw-drivers/sonic5.png',
            '/assets/screw-drivers/sonic6.png',
            '/assets/screw-drivers/sonic7.png',
            '/assets/screw-drivers/sonic8.png',
            '/assets/screw-drivers/sonic9.png',
            '/assets/screw-drivers/sonic10.png',
            '/assets/screw-drivers/sonic11.png',
        ],
        videos: [],
        description: "Original Designs of Sonic screwdrivers from the show 'Doctor Who. Modelled and textured in Blender'",
    },
    {
        title: 'Catwalk',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: {
            path: '/assets/catwalk/catwalk.glb',
            cameraPosition: {
                x: 10,
                y: 3,
                z: 0,
            },
        },
        titleImage: '/assets/catwalk/catwalk.png',
        images: ['/assets/catwalk/catwalk2.png', '/assets/catwalk/catwalk3.png'],
        videos: [],
        description: "Inspired by Star Wars 'I am your father' scene in Episode V: The Empire Strikes Back. Smoke simulations were used to recreate this iconic environment",
    },
    {
        title: 'Sci-fi Gun',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: {
            path: '/assets/sonic-gun/sonicgun.glb',
            cameraPosition: {
                x: 2,
                y: 3,
                z: 2,
            },
        },
        titleImage: '/assets/sonic-gun/sonicgun.png',
        images: [
            '/assets/sonic-gun/sonicgun1.png',
            '/assets/sonic-gun/sonicgun2.png',
            '/assets/sonic-gun/sonicgun3.png',
        ],
        videos: [],
        description: 'A Sci-fi gun designed in Blender using primitive modelling methods.',
    },
    {
        title: 'Sofa',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: false,
        titleImage: '/assets/sofa/sofa.png',
        images: ['/assets/sofa/sofa1.png', '/assets/sofa/sofa2.png'],
        videos: [],
        description: 'High poly sofa model with cloth simulation and the inflate modifier to create organic looking cloth.',
    },
    {
        title: 'Bulb Table',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: {
            path: '/assets/bulb-table/bulbtable.glb',
            cameraPosition: {
                x: 2,
                y: 2,
                z: 2,
            },
        },
        titleImage: '/assets/bulb-table/bulbtable.png',
        images: [
            '/assets/bulb-table/bulbtable1.png',
            '/assets/bulb-table/bulbtable2.png',
            '/assets/bulb-table/bulbtable3.png',
            '/assets/bulb-table/bulbtable4.png',
        ],
        videos: [],
        description: 'Used in design ideas of A Level Design and Technology. Bulb table is a table made of reused bulbs. Utilizes transparent materials to create refreactive light effects.',
    },
    {
        title: 'Bic Pen',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: {
            path: '/assets/bic-pen/bicpen.glb',
            cameraPosition: {
                x: 3,
                y: 10,
                z: 3,
            },
        },
        titleImage: '/assets/bic-pen/bicpen.png',
        images: ['/assets/bic-pen/bicpen1.png'],
        videos: [],
        description: 'Recreation of Bic Pen in Blender. Includes pot and multi-coloured pens',
    },
    {
        title: 'S and N UI Elements',
        path: function () {
            return '/' + urlify(this.title);
        },
        model: false,
        titleImage: '/assets/SandN UI/SandN_Template.png',
        images: [
            '/assets/SandN UI/Background 1 Intro.png',
            '/assets/SandN UI/Background 2 precinct.png',
            '/assets/SandN UI/Background 3 the Hub.png',
            "/assets/SandN UI/Background 4 Vicars' flashback.png",
            '/assets/SandN UI/Background 5 Car Chase.png',
            '/assets/SandN UI/Background 6 Casino.png',
            '/assets/SandN UI/Background 7 Ginger Factory.png',
            '/assets/SandN UI/Background 8 Gingerbread House.png',
            '/assets/SandN UI/Background 9 Gingerbread interior.png',
            '/assets/SandN UI/Background 10 Docks.png',
            '/assets/SandN UI/Boarder.png',
            '/assets/SandN UI/Character info Empty.png',
            '/assets/SandN UI/Character info 1 Vicars.png',
            '/assets/SandN UI/Character info 2 Witch.png',
            '/assets/SandN UI/Character info 3 Guy.png',
            '/assets/SandN UI/Character info 4 Nero.png',
            '/assets/SandN UI/Character info 5 Hunt.png',
            '/assets/SandN UI/Character info 6 Byrd.png',
            '/assets/SandN UI/Character info 7 New kid.png',
            '/assets/SandN UI/Character info Deceased.png',
            '/assets/SandN UI/Character info Deceased2.png',
            '/assets/SandN UI/Character info Deceased3.png',
            '/assets/SandN UI/Player Gretel.png',
            '/assets/SandN UI/Player Hansel.png',
            '/assets/SandN UI/Player Both.png',
            '/assets/SandN UI/Player Vicars.png',
            '/assets/SandN UI/Controlls.png',
            '/assets/SandN UI/Intel sheet 1.png',
            '/assets/SandN UI/Intel sheet 2.png',
            '/assets/SandN UI/Intel sheet 3.png',
            '/assets/SandN UI/Intel sheet Empty.png',
        ],
        videos: [],
        description: '',
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

module.exports = __webpack_require__(/*! /home/runner/work/alfred-website/alfred-website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map