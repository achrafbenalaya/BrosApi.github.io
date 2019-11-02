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

/***/ "./src/app/Models/bro.code.model.ts":
/*!******************************************!*\
  !*** ./src/app/Models/bro.code.model.ts ***!
  \******************************************/
/*! exports provided: BroCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroCode", function() { return BroCode; });
var BroCode = /** @class */ (function () {
    function BroCode() {
    }
    return BroCode;
}());



/***/ }),

/***/ "./src/app/apidocumentation/apidocumentation.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/apidocumentation/apidocumentation.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwaWRvY3VtZW50YXRpb24vYXBpZG9jdW1lbnRhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/apidocumentation/apidocumentation.component.html":
/*!******************************************************************!*\
  !*** ./src/app/apidocumentation/apidocumentation.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n  <meta name=\"description\" content=\"\">\n  <meta name=\"author\" content=\"\">\n  <link rel=\"icon\" href=\"/docs/4.0/assets/img/favicons/favicon.ico\">\n\n  <title>Checkout example for Bootstrap</title>\n\n  <link rel=\"canonical\" href=\"https://getbootstrap.com/docs/4.0/examples/checkout/\">\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"\n    integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n\n  <!-- Bootstrap core CSS -->\n  <!-- <link href=\"../../dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n\n    <!-- Custom styles for this template -->\n  <!-- <link href=\"form-validation.css\" rel=\"stylesheet\"> --> -->\n\n</head>\n\n\n<body class=\"bg-light\">\n  <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-12 col-md-12\">\n    <br>\n    <div class=\"py-2 text-center\">\n      <img class=\"d-block mx-auto mb-4\" src=\"../assets/images/brocode.gif\" alt=\"\" width=\"360\" height=\"180\">\n      <p><b><a href=\"https://BroCode.com\">BroCode</a></b> is a free JSON API .\n      </p>\n\n      <div id=\"detailed-description\" style=\"\">\n        <p>A way of life between bros. No matter what is going on, the bro code must be followed.</p>\n        <p>It doesn't matter what is in there, the bro code MUST be followed.</p>\n      </div>\n    </div>\n    <h3 style=\"color: red;\">𝓤𝓼𝓪𝓰𝓮</h3>\n    <p>Retrieve a random chuck joke in JSON format.</p>\n    <table class=\"table  table-responsive table-dark\">\n\n      <tr>\n        <td> Get : https://localhost:44394/swagger </td>\n\n      </tr>\n      <tr>\n        <td>\n            <pre class=\"microlight\"><span style=\"color: white;\">{{ '{' }}</span><span style=\"color: white; font-weight: bold;\">\n              </span><span style=\"color: white;\">\"status\"</span><span style=\"color: white;\">:</span><span style=\"color: white; font-weight: bold;\"> </span><span style=\"color: white; font-weight: bold;\">200</span><span style=\"color: white;\">,</span><span style=\"color: white; font-weight: bold;\">\n              </span><span style=\"color: white;\">\"message\"</span><span style=\"color: white;\">:</span><span style=\"color: white; font-weight: bold;\"> </span><span style=\"color: white;\">\"Success\"</span><span style=\"color: white;\">,</span><span style=\"color: white; font-weight: bold;\">\n              </span><span style=\"color: white;\">\"errors\"</span><span style=\"color: white;\">:</span><span style=\"color: white; font-weight: bold;\"> </span><span style=\"color: white;\">null</span><span style=\"color: white;\">,</span><span style=\"color: white; font-weight: bold;\">\n              </span><span style=\"color: white;\">\"data\"</span><span style=\"color: white;\">:</span><span style=\"color: white; font-weight: bold;\"> </span><span style=\"color: white;\">{{ '{' }}</span><span style=\"color: white; font-weight: bold;\">\n                </span><span style=\"color: white;\">\"id\"</span><span style=\"color: white;\">:</span><span style=\"color: white; font-weight: bold;\"> </span><span style=\"color: white; font-weight: bold;\">91</span><span style=\"color: white;\">,</span><span style=\"color: white; font-weight: bold;\">\n                </span><span style=\"color: white;\">\"theCode\"</span><span style=\"color: white;\">:</span><span style=\"color: white; font-weight: bold;\"> </span><span style=\"color: white;\">\"A Bro does not dare or challenge another bro to do anything they wouldn't try themselves.\"</span><span style=\"color: white;\">,</span><span style=\"color: white; font-weight: bold;\">\n                </span><span style=\"color: white;\">\"urd\"</span><span style=\"color: white;\">:</span><span style=\"color: white; font-weight: bold;\"> </span><span style=\"color: white;\">\"2019-10-27T12:19:22.91\"</span><span style=\"color: white;\">,</span><span style=\"color: white; font-weight: bold;\">\n                </span><span style=\"color: white;\">\"isVisible\"</span><span style=\"color: white;\">:</span><span style=\"color: white; font-weight: bold;\"> </span><span style=\"color: white;\">true</span><span style=\"color: white; font-weight: bold;\">\n              </span><span style=\"color: white;\">{{ '}' }}</span><span style=\"color: white; font-weight: bold;\">\n            </span><span style=\"color: white;\">{{ '}' }}</span></pre>\n\n        </td>\n\n      </tr>\n    </table>\n\n\n    <p>Retrieve a list of available categories.</p>\n    <table class=\"table table-bordered table-dark\">\n\n      <tr>\n        <td> Get : https://localhost:44394/swagger </td>\n\n      </tr>\n    </table>\n  </div>\n</div>\n</div>\n\n\n  <div class=\"container\">\n\n\n<!-- Default form subscription -->\n<form class=\"text-center border border-light p-5\" action=\"#!\">\n\n    <p class=\"h4 mb-4\">Subscribe</p>\n\n    <p>Join our mailing list. We write rarely, but only the best content.</p>\n\n\n    <!-- Email -->\n    <input type=\"email\" id=\"defaultSubscriptionFormEmail\" class=\"form-control mb-4\" placeholder=\"E-mail\">\n    <input type=\"text\" id=\"Msg\" class=\"form-control mb-4\" placeholder=\"Your Comment\">\n    <!-- Sign in button -->\n    <button class=\"btn btn-info btn-block\" type=\"button\">Sign in</button>\n\n\n</form>\n<!-- Default form subscription -->\n\n\n\n</div>\n\n\n\n\n\n\n\n  \n  <!-- <script type=\"text/javascript\" >\n  \n    </script> -->\n</body>\n<!-- Footer -->\n<footer class=\"page-footer font-small blue\">\n\n    <!-- Copyright -->\n    <div class=\"footer-copyright text-center py-3\">© 2019 Copyright:\n      <a href=\"http://localhost:4200/\"> BroCode</a>\n    </div>\n    <!-- Copyright -->\n  \n  </footer>\n  <!-- Footer -->\n<script>\n  function toggleMe(target) {\n    var element = document.getElementById(target);\n    if (!element) {\n      return true;\n    }\n    if ('none' == element.style.display) {\n      element.style.display = 'block';\n    } else {\n      element.style.display = 'none';\n    }\n    return true;\n  }</script>\n<script src=\"../assets/js/Functionslocal.js\" type=\"text/javascript\"></script>\n\n</html>\n\n<!-- <script>\n    function toggleMe(obj) {\n      debugger;\n      var x = document.getElementById(\"detailed-description\");\n      if (x.style === \"display: none;\") {\n        x.innerHTML = \"Swapped text!\";\n        document.getElementById(\"detailed-description\").style = \"\";\n      } else {\n        document.getElementById(\"detailed-description\").style = \"display: none;\";\n      }\n    }\n    </script> -->"

/***/ }),

/***/ "./src/app/apidocumentation/apidocumentation.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/apidocumentation/apidocumentation.component.ts ***!
  \****************************************************************/
/*! exports provided: ApidocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApidocumentationComponent", function() { return ApidocumentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ApidocumentationComponent = /** @class */ (function () {
    function ApidocumentationComponent() {
    }
    ApidocumentationComponent.prototype.ngOnInit = function () {
        //   this.TheAPI = "{
        //   "status": 200,
        //     "message": "Success",
        //       "errors": null,
        //         "data": {
        //     "id": 91,
        //       "theCode": "A Bro does not dare or challenge another bro to do anything they wouldn't try themselves.",
        //         "urd": "2019-10-27T12:19:22.91",
        //           "isVisible": true
        //   }
        // } "
    };
    ApidocumentationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-apidocumentation',
            template: __webpack_require__(/*! ./apidocumentation.component.html */ "./src/app/apidocumentation/apidocumentation.component.html"),
            styles: [__webpack_require__(/*! ./apidocumentation.component.css */ "./src/app/apidocumentation/apidocumentation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ApidocumentationComponent);
    return ApidocumentationComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bro_code_bro_code_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bro-code/bro-code.component */ "./src/app/bro-code/bro-code.component.ts");
/* harmony import */ var _apidocumentation_apidocumentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apidocumentation/apidocumentation.component */ "./src/app/apidocumentation/apidocumentation.component.ts");





var routes = [{ path: '', component: _bro_code_bro_code_component__WEBPACK_IMPORTED_MODULE_3__["BroCodeComponent"] },
    { path: 'api', component: _apidocumentation_apidocumentation_component__WEBPACK_IMPORTED_MODULE_4__["ApidocumentationComponent"] },];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_brocode_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/brocode.services */ "./src/app/services/brocode.services.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(broCode, http) {
        this.broCode = broCode;
        this.http = http;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_brocode_services__WEBPACK_IMPORTED_MODULE_2__["BroCodeServices"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _bro_code_bro_code_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bro-code/bro-code.component */ "./src/app/bro-code/bro-code.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apidocumentation_apidocumentation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./apidocumentation/apidocumentation.component */ "./src/app/apidocumentation/apidocumentation.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _bro_code_bro_code_component__WEBPACK_IMPORTED_MODULE_5__["BroCodeComponent"],
                _apidocumentation_apidocumentation_component__WEBPACK_IMPORTED_MODULE_7__["ApidocumentationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bro-code/bro-code.component.css":
/*!*************************************************!*\
  !*** ./src/app/bro-code/bro-code.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jyby1jb2RlL2Jyby1jb2RlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/bro-code/bro-code.component.html":
/*!**************************************************!*\
  !*** ./src/app/bro-code/bro-code.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "The content below is only a placeholder and can be replaced.\r\n<!doctype html>\r\n<html lang=\"en\">\r\n<head>\r\n\t<meta charset=\"utf-8\" />\r\n\t<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\" />\r\n    \r\n    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />\r\n    <meta name=\"viewport\" content=\"width=device-width\" />\r\n    \r\n    <title>THE BRO CODE</title>\r\n    \r\n    <link href=\"../../assets/css/bootstrap.css\" rel=\"stylesheet\" />\r\n\t<link href=\"../../assets/css/coming-sssoon.css\" rel=\"stylesheet\" />    \r\n    \r\n    <!--     Fonts     -->\r\n    <link href=\"http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.css\" rel=\"stylesheet\">\r\n    <link href='http://fonts.googleapis.com/css?family=Grand+Hotel' rel='stylesheet' type='text/css'>\r\n  \r\n</head>\r\n\r\n<body>\r\n<nav class=\"navbar navbar-transparent navbar-fixed-top\" role=\"navigation\">  \r\n  <div class=\"container\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n    </div>\r\n\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <!-- <ul class=\"nav navbar-nav\">\r\n         <li class=\"dropdown\">\r\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> \r\n                <img src=\"../assets/images/flags/US.png\"/>\r\n                English(US) \r\n                <b class=\"caret\"></b>\r\n              </a>\r\n              <ul class=\"dropdown-menu\">\r\n                <li><a href=\"#\"><img src=\"../assets/images/flags/DE.png\"/> Deutsch</a></li>\r\n                <li><a href=\"#\"><img src=\"../assets/images/flags/GB.png\"/> English(UK)</a></li>\r\n                <li><a href=\"#\"><img src=\"../assets/images/flags/FR.png\"/> Français</a></li>\r\n                <li><a href=\"#\"><img src=\"../assets/images/flags/RO.png\"/> Română</a></li>\r\n                <li><a href=\"#\"><img src=\"../assets/images/flags/IT.png\"/> Italiano</a></li>\r\n                \r\n                <li class=\"divider\"></li>\r\n                <li><a href=\"#\"><img src=\"../assets/images/flags/ES.png\"/> Español <span class=\"label label-default\">soon</span></a></li>\r\n                <li><a href=\"#\"><img src=\"../assets/images/flags/BR.png\"/> Português <span class=\"label label-default\">soon</span></a></li>\r\n                <li><a href=\"#\"><img src=\"../assets/images/flags/JP.png\"/> 日本語 <span class=\"label label-default\">soon</span></a></li>\r\n                <li><a href=\"#\"><img src=\"../assets/images/flags/TR.png\"/> Türkçe <span class=\"label label-default\">soon</span></a></li>\r\n             \r\n              </ul>\r\n        </li>\r\n\r\n      </ul> -->\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n            <li>\r\n                <a href=\"#\"> \r\n                    <i class=\"fa fa-facebook-square\"></i>\r\n                    Share\r\n                </a>\r\n            </li>\r\n             <li>\r\n                <a href=\"#\"> \r\n                    <i class=\"fa fa-twitter\"></i>\r\n                    Tweet\r\n                </a>\r\n            </li>\r\n             <li>\r\n                <a routerLink=\"/api\" routerLinkActive=\"active\"> \r\n                    <!-- <i class=\"fa fa-envelope-o\"></i> -->\r\n                    API\r\n                </a>\r\n            </li>\r\n       </ul>\r\n      \r\n    </div><!-- /.navbar-collapse -->\r\n  </div><!-- /.container -->\r\n</nav>\r\n<div class=\"main\" style=\"background-image: url('../assets/images/bortherwallpaper.jpg')\">\r\n\r\n<!--    Change the image source '/images/default.jpg' with your favourite image.     -->\r\n    \r\n    <div class=\"cover black\" data-color=\"black\"></div>\r\n     \r\n<!--   You can change the black color for the filter with those colors: blue, green, red, orange       -->\r\n\r\n    <div class=\"container\">\r\n        <h1 class=\"logo cursive\">\r\n          THE BRO CODE\r\n        </h1>\r\n<!--  H1 can have 2 designs: \"logo\" and \"logo cursive\"           -->\r\n        \r\n        <div class=\"content\">\r\n            <h4 class=\"motto\" id=\"thisisthequote\">\"quote\": {{model.theCode}}</h4>\r\n            <div class=\"subscribe\">\r\n                <h5 class=\"info-text\">\r\n                 Clique to get Random Bro Quote.\r\n                </h5>\r\n                \r\n                <div class=\"container\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col text-center\">\r\n                      <button class=\"btn btn-danger btn-fill\" (click)=\"getdata()\">Get a Bro-code</button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!-- <div class=\"row\">\r\n                    <div class=\"col-md-4 col-md-offset-4 col-sm6-6 col-sm-offset-3 \">\r\n                        <form class=\"form-inline\" role=\"form\">\r\n                          <div class=\"form-group\">\r\n                            <label class=\"sr-only\" for=\"exampleInputEmail2\">Email address</label>\r\n                            \r\n                            <label class=\"sr-only\" for=\"exampleInputEmail2\">\"quote\":</label>\r\n                          </div>\r\n                          <button type=\"button\" class=\"btn btn-danger btn-fill\"> Get a Bro-code </button>\r\n                        </form>\r\n\r\n                    </div>\r\n                </div> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"footer\">\r\n      <div class=\"container\">\r\n          <!-- <i class=\"fa fa-heart heart\"></i> -->\r\n             Made <i class=\"fas fa-shield-alt\"></i>  For Bro's\r\n      </div>\r\n    </div>\r\n </div>\r\n </body>\r\n   <script src=\"../../assets/js/jquery-1.10.2.js\" type=\"text/javascript\"></script>\r\n   <script src=\"../../assets/js/bootstrap.min.js\" type=\"text/javascript\"></script>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/bro-code/bro-code.component.ts":
/*!************************************************!*\
  !*** ./src/app/bro-code/bro-code.component.ts ***!
  \************************************************/
/*! exports provided: BroCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroCodeComponent", function() { return BroCodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_brocode_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/brocode.services */ "./src/app/services/brocode.services.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Models_bro_code_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Models/bro.code.model */ "./src/app/Models/bro.code.model.ts");





var BroCodeComponent = /** @class */ (function () {
    function BroCodeComponent(broCode, http) {
        this.broCode = broCode;
        this.http = http;
    }
    BroCodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model = new _Models_bro_code_model__WEBPACK_IMPORTED_MODULE_4__["BroCode"]();
        this.broCode.getRandom().subscribe(function (result) {
            _this.model = result.data;
            // this.id = this.model.id;
            console.log("res", _this.model);
            //debugger;
        }, function (error) {
            console.log("error", error);
        });
    };
    BroCodeComponent.prototype.getdata = function () {
        var _this = this;
        this.model = new _Models_bro_code_model__WEBPACK_IMPORTED_MODULE_4__["BroCode"]();
        this.broCode.getRandom().subscribe(function (result) {
            _this.model = result.data;
            // this.id = this.model.id;
            // thisisthequote.text="";
            console.log("res", _this.model);
            //debugger;
        }, function (error) {
            console.log("error", error);
        });
    };
    BroCodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bro-code',
            template: __webpack_require__(/*! ./bro-code.component.html */ "./src/app/bro-code/bro-code.component.html"),
            styles: [__webpack_require__(/*! ./bro-code.component.css */ "./src/app/bro-code/bro-code.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_brocode_services__WEBPACK_IMPORTED_MODULE_2__["BroCodeServices"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], BroCodeComponent);
    return BroCodeComponent;
}());



/***/ }),

/***/ "./src/app/services/brocode.services.ts":
/*!**********************************************!*\
  !*** ./src/app/services/brocode.services.ts ***!
  \**********************************************/
/*! exports provided: BroCodeServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroCodeServices", function() { return BroCodeServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var BroCodeServices = /** @class */ (function () {
    function BroCodeServices(http) {
        this.http = http;
    }
    BroCodeServices.prototype.getRandom = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "Bro/GetRandom");
    };
    BroCodeServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BroCodeServices);
    return BroCodeServices;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    apiUrl: "https://localhost:44321/api/",
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Achraf ben alaya\bootstrapStudioTest\angularTheme\coming-sssoon-page-master\Angularbro\Brocodetest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map