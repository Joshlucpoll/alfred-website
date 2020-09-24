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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function AppComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", project_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.title);
} }
class AppComponent {
    constructor() {
        this.MainTitle = 'Alfred Portfolio';
        this.projects = [
            {
                title: "Black Hole",
                image: "/assets/images/black_hole.png"
            },
            {
                title: "Bulb Table",
                image: "/assets/images/bulb_table2.png"
            },
            {
                title: "Catwalk",
                image: "/assets/images/catwalk.png"
            },
            {
                title: "Rapier Wand",
                image: "/assets/images/rapier_wand.png"
            },
            {
                title: "Sofa",
                image: "/assets/images/sofa_cloth_sim.png"
            },
            {
                title: "Sonic Screwdrivers",
                image: "/assets/images/sonics.png"
            },
            {
                title: "Wands",
                image: "/assets/images/wands.png"
            },
        ];
    }
    ngOnInit() {
        function scrollHorizontally(e) {
            e = window.event || e;
            var direction = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
            document.getElementById('main').scrollLeft -= (direction * 80);
            e.preventDefault();
        }
        // IE9, Chrome, Safari, Opera
        document.getElementById('main').addEventListener('mousewheel', scrollHorizontally, false);
        // Firefox
        document.getElementById('main').addEventListener('DOMMouseScroll', scrollHorizontally, false);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 18, vars: 2, consts: [["id", "main", 1, "main"], [1, "content"], [1, "main-section-container"], [1, "main-section-wrapper"], [1, "title"], [1, "custom-br"], [1, "header"], [1, "navigation"], ["href", "/", 1, "link"], ["href", "/about", 1, "link"], ["href", "/contact", 1, "link"], [1, "projects-container"], [1, "projects"], ["class", "project", 4, "ngFor", "ngForOf"], [1, "project"], [1, "images", 3, "src"], [1, "project-info"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppComponent_li_17_Template, 4, 2, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.MainTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["@media only screen and (min-width: 600px) {\n  .main[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    height: 100vh;\n    width: 100vw;\n  }\n  .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    height: 100vh;\n    width: 100%;\n  }\n  .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .main-section-container[_ngcontent-%COMP%] {\n    position: fixed;\n    width: 50vw;\n    height: 100%;\n    display: inline-block;\n  }\n  .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n  }\n  .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    color: white;\n    font-size: 50px;\n    font-weight: bold;\n  }\n  .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .custom-br[_ngcontent-%COMP%] {\n    display: block;\n    width: 25%;\n    height: 2px;\n    opacity: 0.3;\n    background-color: #fff;\n  }\n  .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%] {\n    height: 100%;\n    margin-right: 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-end;\n  }\n  .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .main-section-container[_ngcontent-%COMP%]   .main-section-wrapper[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .navigation[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: white;\n    margin: 20px 0;\n  }\n  .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .projects-container[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-left: 50vw;\n  }\n  .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n  }\n  .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%] {\n    position: relative;\n    width: 25vw;\n    height: 100vh;\n    transition: width ease 500ms;\n    list-style: none;\n  }\n  .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%]:hover {\n    width: 50vw;\n    height: 100vh;\n  }\n  .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%]:hover   .project-info[_ngcontent-%COMP%] {\n    opacity: 0.7;\n    width: 15vh;\n  }\n  .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    object-fit: cover;\n  }\n  .main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .projects-container[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]   .project[_ngcontent-%COMP%]   .project-info[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    height: 100%;\n    width: 0;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    padding-bottom: 20px;\n    opacity: 0;\n    background-color: black;\n    color: rgba(255, 255, 255, 0.6);\n    font-size: 50px;\n    writing-mode: vertical-lr;\n    -webkit-text-orientation: mixed;\n            text-orientation: mixed;\n    transition: opacity 200ms 100ms ease, width 500ms ease;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUU7SUFDRSxjQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0lBQ0Esa0JBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtFQUFGO0VBRUU7SUFDRSxhQUFBO0lBQ0EsV0FBQTtFQUFKO0VBRUk7SUFDRSxlQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxxQkFBQTtFQUFOO0VBRU07SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUVBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsNkJBQUE7RUFEUjtFQUdRO0lBQ0UsWUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQURWO0VBSVE7SUFDRSxjQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0Esc0JBQUE7RUFGVjtFQUtRO0lBQ0UsZUFBQTtFQUhWO0VBS1U7SUFDRSxZQUFBO0lBQ0Esa0JBQUE7SUFFQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLHlCQUFBO0VBSlo7RUFNWTtJQUNFLHFCQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7RUFKZDtFQVdJO0lBQ0UscUJBQUE7SUFDQSxpQkFBQTtFQVROO0VBV007SUFDRSxrQkFBQTtJQUNBLE1BQUE7SUFDQSxZQUFBO0lBRUEsYUFBQTtJQUNBLG1CQUFBO0VBVlI7RUFZUTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLGFBQUE7SUFDQSw0QkFBQTtJQUNBLGdCQUFBO0VBVlY7RUFZVTtJQUNFLFdBQUE7SUFDQSxhQUFBO0VBVlo7RUFhVTtJQUNFLFlBQUE7SUFDQSxXQUFBO0VBWFo7RUFjVTtJQUNFLFlBQUE7SUFDQSxXQUFBO0lBQ0EsaUJBQUE7RUFaWjtFQWVVO0lBQ0Usa0JBQUE7SUFDQSxPQUFBO0lBQ0EsU0FBQTtJQUNBLFlBQUE7SUFDQSxRQUFBO0lBRUEsYUFBQTtJQUNBLG1CQUFBO0lBQ0EseUJBQUE7SUFDQSxvQkFBQTtJQUVBLFVBQUE7SUFDQSx1QkFBQTtJQUNBLCtCQUFBO0lBRUEsZUFBQTtJQUNBLHlCQUFBO0lBQ0EsK0JBQUE7WUFBQSx1QkFBQTtJQUNBLHNEQUFBO0VBaEJaO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG5cbiAgLm1haW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIFxuICAgIC5jb250ZW50IHtcbiAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIFxuICAgICAgLm1haW4tc2VjdGlvbi1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHdpZHRoOiA1MHZ3O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICAgICAubWFpbi1zZWN0aW9uLXdyYXBwZXIge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jdXN0b20tYnIge1xuICAgICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlYWRlciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICAgICAgXG4gICAgICAgICAgICAubmF2aWdhdGlvbiB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgIFxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIFxuICAgICAgICAgICAgICAubGluayB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAucHJvamVjdHMtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tbGVmdDogNTB2dztcbiAgICAgICAgXG4gICAgICAgIC5wcm9qZWN0cyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gIFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgXG4gICAgICAgICAgLnByb2plY3Qge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDI1dnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggZWFzZSA1MDBtcztcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICB3aWR0aDogNTB2dztcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpob3ZlciAucHJvamVjdC1pbmZvIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICAgICAgICB3aWR0aDogMTV2aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLmltYWdlcyB7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIC5wcm9qZWN0LWluZm8ge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICB3aWR0aDogMDtcblxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcblxuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcblxuICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XG4gICAgICAgICAgICAgIHRleHQtb3JpZW50YXRpb246IG1peGVkO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zIDEwMG1zIGVhc2UsIHdpZHRoIDUwMG1zIGVhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");




class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


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