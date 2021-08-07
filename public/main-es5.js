(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\proyectos_2021\imca-frontend\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "3VUJ":
    /*!*******************************************!*\
      !*** ./src/app/services/cajas.service.ts ***!
      \*******************************************/

    /*! exports provided: CajasService */

    /***/
    function VUJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CajasService", function () {
        return CajasService;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var CajasService = /*#__PURE__*/function () {
        function CajasService(http) {
          _classCallCheck(this, CajasService);

          this.http = http;
          this.caja = [];
          this.saldo = 0;
        }

        _createClass(CajasService, [{
          key: "getMovimientos",
          value: function getMovimientos() {
            var _this = this;

            this.obtieneMovimientos$().subscribe(function (resp) {
              _this.caja = resp.devol.datos;
              _this.saldo = resp.devol.suma;
            });
          }
        }, {
          key: "obtieneMovimientos$",
          value: function obtieneMovimientos$() {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/api/saldo"));
          }
        }, {
          key: "nuevoMovimiento$",
          value: function nuevoMovimiento$(movimiento) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/api/movimientoCaja"), movimiento);
          }
        }]);

        return CajasService;
      }();

      CajasService.ɵfac = function CajasService_Factory(t) {
        return new (t || CajasService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      CajasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: CajasService,
        factory: CajasService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "7ULm":
    /*!***************************************************!*\
      !*** ./src/app/components/caja/caja.component.ts ***!
      \***************************************************/

    /*! exports provided: CajaComponent */

    /***/
    function ULm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CajaComponent", function () {
        return CajaComponent;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_cajas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/cajas.service */
      "3VUJ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @auth0/auth0-angular */
      "2beD");
      /* harmony import */


      var _cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../cabecera/cabecera.component */
      "SfOs");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      "hrlM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function CajaComponent_div_2_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.errores.detalle.message);
        }
      }

      function CajaComponent_div_2_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.errores.importe.message);
        }
      }

      function CajaComponent_div_2_h5_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h5", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("SALDO CAJA: ", ctx_r4.caja.saldo, "");
        }
      }

      function CajaComponent_div_2_h5_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h5", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("SALDO CAJA: ", ctx_r5.caja.saldo, "");
        }
      }

      function CajaComponent_div_2_div_18_tr_13_td_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var a_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](a_r8.importe);
        }
      }

      function CajaComponent_div_2_div_18_tr_13_td_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var a_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](a_r8.importe);
        }
      }

      function CajaComponent_div_2_div_18_tr_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CajaComponent_div_2_div_18_tr_13_td_6_Template, 2, 1, "td", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CajaComponent_div_2_div_18_tr_13_td_7_Template, 2, 1, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var a_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 4, a_r8.fecha, "dd/MM/yyyy"));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](a_r8.detalle);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", a_r8.movimiento == "D");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", a_r8.movimiento == "C");
        }
      }

      function CajaComponent_div_2_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "table", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "FECHA");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "DETALLE");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "IMPORTE");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CajaComponent_div_2_div_18_tr_13_Template, 8, 7, "tr", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.caja.caja);
        }
      }

      var _c0 = function _c0(a0, a1) {
        return {
          "input-importe-negativo": a0,
          "input-importe": a1
        };
      };

      function CajaComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h5", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Agregue cualquier movimiento de Caja");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CajaComponent_div_2_Template_form_ngSubmit_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r13.procesar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CajaComponent_div_2_div_8_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function CajaComponent_div_2_Template_input_input_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r15.cambiaInput($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CajaComponent_div_2_div_11_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Confirmar");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CajaComponent_div_2_h5_16_Template, 2, 1, "h5", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, CajaComponent_div_2_h5_17_Template, 2, 1, "h5", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, CajaComponent_div_2_div_18_Template, 14, 1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.forma);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.errores.detalle);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](7, _c0, ctx_r0.valor, !ctx_r0.valor));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.errores.importe);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.caja.saldo > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.caja.saldo < 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.caja.caja.length > 0);
        }
      }

      function CajaComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " \xC1rea de acceso restringido! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var CajaComponent = /*#__PURE__*/function () {
        function CajaComponent(caja, route, fb, auth) {
          _classCallCheck(this, CajaComponent);

          this.caja = caja;
          this.route = route;
          this.fb = fb;
          this.auth = auth;
          this.movcaja = {};
          this.valor = false;
          this.errores = '';
          this.valido = false;
        }

        _createClass(CajaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.auth.user$.subscribe(function (resp) {
              if (resp['email'] == _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].jana || resp['email'] == _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].gabo) {
                _this2.valido = true;

                _this2.crearFormulario();

                _this2.caja.getMovimientos();
              }
            });
          }
        }, {
          key: "crearFormulario",
          value: function crearFormulario() {
            this.forma = this.fb.group({
              detalle: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
              importe: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required])
            });
          }
        }, {
          key: "procesar",
          value: function procesar() {
            var _this3 = this;

            this.movcaja.detalle = this.forma.controls['detalle'].value;

            if (this.forma.controls['importe'].value >= 0) {
              this.movcaja.movimiento = "C";
            } else {
              this.movcaja.movimiento = "D";
            }

            this.movcaja.importe = parseFloat(this.forma.controls['importe'].value);
            this.caja.nuevoMovimiento$(this.movcaja).subscribe(function (resp) {
              console.log(resp);

              if (resp['errors']) {
                console.log(resp['errors']);
                _this3.errores = resp['errors'];
              }

              _this3.caja.getMovimientos();
            });
          }
        }, {
          key: "cambiaInput",
          value: function cambiaInput(e) {
            if (this.forma.controls['importe'].value < 0) {
              this.valor = true;
            } else {
              this.valor = false;
            }
          }
        }]);

        return CajaComponent;
      }();

      CajaComponent.ɵfac = function CajaComponent_Factory(t) {
        return new (t || CajaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_cajas_service__WEBPACK_IMPORTED_MODULE_3__["CajasService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_5__["AuthService"]));
      };

      CajaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CajaComponent,
        selectors: [["app-caja"]],
        decls: 4,
        vars: 2,
        consts: [["class", "contenido", 4, "ngIf"], [1, "contenido"], [1, "titulo"], [1, "formulario"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-lg-9"], ["formControlName", "detalle", "type", "text", "placeholder", "Detalle del Movimiento", 1, "input-detalle"], ["class", "error", 4, "ngIf"], [1, "col-lg-3"], ["formControlName", "importe", "type", "text", "placeholder", "Importe (negativo para gastos)", 3, "ngClass", "input"], [1, "botonera"], ["type", "submit", 1, "btn", "btn-outline-primary"], [1, "saldo1"], ["class", "positivo", 4, "ngIf"], ["class", "negativo", 4, "ngIf"], [4, "ngIf"], [1, "error"], [1, "positivo"], [1, "negativo"], [1, "table", "table-striped"], ["scope", "col", 2, "display", "none"], ["scope", "col", 1, "fecha"], ["scope", "col", 1, "detalle"], ["scope", "col", 1, "importe"], [4, "ngFor", "ngForOf"], [1, "fecha"], ["class", "debito", 4, "ngIf"], ["class", "movimiento", 4, "ngIf"], [1, "debito"], [1, "movimiento"], ["role", "alert", 1, "alert", "alert-primary"]],
        template: function CajaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-cabecera");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CajaComponent_div_2_Template, 19, 10, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CajaComponent_div_3_Template, 3, 0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.valido);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.valido);
          }
        },
        directives: [_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_6__["CabeceraComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]],
        styles: [".contenido[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 80vw;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.debito[_ngcontent-%COMP%] {\r\n    color: red;\r\n    width: 15%;\r\n}\r\n\r\n.fecha[_ngcontent-%COMP%] {\r\n    width: 15%;\r\n}\r\n\r\n.detalle[_ngcontent-%COMP%] {\r\n    width: 60%;\r\n}\r\n\r\n.movimiento[_ngcontent-%COMP%] {\r\n    width: 15;\r\n}\r\n\r\n.saldo[_ngcontent-%COMP%] {\r\n    width: 15;\r\n}\r\n\r\n.titulo[_ngcontent-%COMP%] {\r\n    color: rgba(77, 76, 73, 0.933);\r\n}\r\n\r\n.formulario[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    width: 80vw;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    justify-items: flex-end;\r\n}\r\n\r\n.formulario[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    line-height: 1.3;\r\n    border: 1px solid cornflowerblue;\r\n    padding-top: 0.4em;\r\n    padding-bottom: 0.6em;\r\n    border-radius: 5px;\r\n    flex-grow: 1;\r\n}\r\n\r\n.input-detalle[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-right: 23px;\r\n}\r\n\r\n.input-importe[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.input-importe-negativo[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    color: crimson;\r\n}\r\n\r\n.botonera[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    margin-top: 1em;\r\n}\r\n\r\n.error[_ngcontent-%COMP%] {\r\n    color: rgb(185, 44, 44);\r\n    font-style: italic;\r\n    font-weight: bold;\r\n}\r\n\r\n.saldo1[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    width: 80vw;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.saldo1[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], h5[_ngcontent-%COMP%] {\r\n    display: inline;\r\n}\r\n\r\n.negativo[_ngcontent-%COMP%] {\r\n    color: crimson;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhamEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoiY2FqYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbmlkbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5kZWJpdG8ge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIHdpZHRoOiAxNSU7XHJcbn1cclxuXHJcbi5mZWNoYSB7XHJcbiAgICB3aWR0aDogMTUlO1xyXG59XHJcblxyXG4uZGV0YWxsZSB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4ubW92aW1pZW50byB7XHJcbiAgICB3aWR0aDogMTU7XHJcbn1cclxuXHJcbi5zYWxkbyB7XHJcbiAgICB3aWR0aDogMTU7XHJcbn1cclxuXHJcbi50aXR1bG8ge1xyXG4gICAgY29sb3I6IHJnYmEoNzcsIDc2LCA3MywgMC45MzMpO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktaXRlbXM6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uZm9ybXVsYXJpbyBpbnB1dCB7XHJcbiAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgY29ybmZsb3dlcmJsdWU7XHJcbiAgICBwYWRkaW5nLXRvcDogMC40ZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC42ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5pbnB1dC1kZXRhbGxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyM3B4O1xyXG59XHJcblxyXG4uaW5wdXQtaW1wb3J0ZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmlucHV0LWltcG9ydGUtbmVnYXRpdm8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogY3JpbXNvbjtcclxufVxyXG5cclxuLmJvdG9uZXJhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gICAgY29sb3I6IHJnYigxODUsIDQ0LCA0NCk7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNhbGRvMSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnNhbGRvMSBoMixcclxuaDUge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4ubmVnYXRpdm8ge1xyXG4gICAgY29sb3I6IGNyaW1zb247XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        apiUrl: 'http://localhost:3000',
        jana: 'janapuig@gmail.com',
        gabo: 'ghgarciar@gmail.com',
        puerto: 4200,
        auth0: {
          domain: 'dev-f2jjpzr8.us.auth0.com',
          clientId: 'vim5AGvqZrgHxputbbRSUNRW73SuzI4C'
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Dg2J":
    /*!*********************************************************!*\
      !*** ./src/app/components/portada/portada.component.ts ***!
      \*********************************************************/

    /*! exports provided: PortadaComponent */

    /***/
    function Dg2J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortadaComponent", function () {
        return PortadaComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @auth0/auth0-angular */
      "2beD");

      var PortadaComponent = /*#__PURE__*/function () {
        function PortadaComponent(router, auth) {
          _classCallCheck(this, PortadaComponent);

          this.router = router;
          this.auth = auth;
        }

        _createClass(PortadaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "usuario",
          value: function usuario() {
            this.router.navigate(['/user']);
          }
        }, {
          key: "imprimir",
          value: function imprimir() {}
        }, {
          key: "cobrar",
          value: function cobrar() {
            this.router.navigate(['/caja']);
          }
        }]);

        return PortadaComponent;
      }();

      PortadaComponent.ɵfac = function PortadaComponent_Factory(t) {
        return new (t || PortadaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
      };

      PortadaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PortadaComponent,
        selectors: [["app-portada"]],
        decls: 8,
        vars: 0,
        consts: [[1, "contenedor"], [1, "portada"], ["src", "../../../assets/portada.jpg", 1, "foto"], [1, "pagina1"], ["type", "button", 3, "click"], ["src", "../../../assets/usuario.png"], ["src", "../../../assets/cashier.png"]],
        template: function PortadaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortadaComponent_Template_button_click_4_listener() {
              return ctx.usuario();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortadaComponent_Template_button_click_6_listener() {
              return ctx.cobrar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".contenedor[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.portada[_ngcontent-%COMP%] {\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n.portada[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\r\n\r\n.pagina1[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    padding: 1em;\r\n    width: 100vw;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.pagina1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    padding: 1em;\r\n    margin: 1em;\r\n}\r\n\r\n.pagina1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 15vw;\r\n    max-height: 15vh;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRhZGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InBvcnRhZGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5lZG9yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ucG9ydGFkYSB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ucG9ydGFkYSBpbWcge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLnBhZ2luYTEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnBhZ2luYTEgYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIG1hcmdpbjogMWVtO1xyXG59XHJcblxyXG4ucGFnaW5hMSBpbWcge1xyXG4gICAgd2lkdGg6IDE1dnc7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNXZoO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "EEp1":
    /*!*********************************************!*\
      !*** ./src/app/services/alumnos.service.ts ***!
      \*********************************************/

    /*! exports provided: AlumnosService */

    /***/
    function EEp1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlumnosService", function () {
        return AlumnosService;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var AlumnosService = /*#__PURE__*/function () {
        function AlumnosService(http) {
          _classCallCheck(this, AlumnosService);

          this.http = http;
          this.nrodni = 0;
          this.usuario = [];
          this.alumnos = [];
          this.alumno = {};
        }

        _createClass(AlumnosService, [{
          key: "getUsuario",
          value: function getUsuario(dni) {
            var _this4 = this;

            this.nrodni = dni;
            this.consultaUsuario$().subscribe(function (resp) {
              if (!resp["user"]) {
                console.log(resp.message);
                return false;
              } else {
                _this4.usuario = resp['user'];
                return true;
              }
            });
          }
        }, {
          key: "consultaUsuario$",
          value: function consultaUsuario$() {
            var param = this.nrodni;
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/api/usuario?email=").concat(this.nrodni));
          }
        }, {
          key: "obtieneUsuarios$",
          value: function obtieneUsuarios$() {
            return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/api/usuarios"));
          }
        }, {
          key: "getUsuarios",
          value: function getUsuarios() {
            var _this5 = this;

            this.obtieneUsuarios$().subscribe(function (resp) {
              if (!resp["alumnos"]) {
                console.log(resp.message);
                return false;
              } else {
                _this5.alumnos = resp['alumnos'];
                return true;
              }
            });
          }
        }, {
          key: "nuevoUsuario$",
          value: function nuevoUsuario$(alumno) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/api/nuevoAlumno"), alumno);
          }
        }, {
          key: "editaUsuario$",
          value: function editaUsuario$(alumno) {
            return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/api/editaAlumno"), alumno);
          }
        }]);

        return AlumnosService;
      }();

      AlumnosService.ɵfac = function AlumnosService_Factory(t) {
        return new (t || AlumnosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      AlumnosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AlumnosService,
        factory: AlumnosService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "FudU":
    /*!*******************************************************!*\
      !*** ./src/app/components/cobrar/cobrar.component.ts ***!
      \*******************************************************/

    /*! exports provided: CobrarComponent */

    /***/
    function FudU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CobrarComponent", function () {
        return CobrarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_alumnos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../services/alumnos.service */
      "EEp1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_recibos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/recibos.service */
      "uwue");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_cajas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/cajas.service */
      "3VUJ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function CobrarComponent_div_36_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var detalle_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detalle_r7);
        }
      }

      function CobrarComponent_div_36_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var importe_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](importe_r8);
        }
      }

      function CobrarComponent_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CobrarComponent_div_36_div_4_Template, 3, 1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CobrarComponent_div_36_div_6_Template, 3, 1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.detalles1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.importes1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.total);
        }
      }

      function CobrarComponent_div_37_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "textarea", 41, 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r12 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", i_r12);
        }
      }

      function CobrarComponent_div_37_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r15 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", i_r15);
        }
      }

      function CobrarComponent_div_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CobrarComponent_div_37_div_4_Template, 3, 1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CobrarComponent_div_37_div_6_Template, 2, 1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Total");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.detalles.controls);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.importes.controls);
        }
      }

      function CobrarComponent_button_44_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CobrarComponent_button_44_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.imprimir();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Imprimir");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CobrarComponent_div_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var detalle_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detalle_r18);
        }
      }

      function CobrarComponent_div_86_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var importe_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](importe_r19);
        }
      }

      var CobrarComponent = /*#__PURE__*/function () {
        function CobrarComponent(alumnos, fb, recibos, route, caja) {
          _classCallCheck(this, CobrarComponent);

          this.alumnos = alumnos;
          this.fb = fb;
          this.recibos = recibos;
          this.route = route;
          this.caja = caja;
          this.recibo = {};
          this.total = 0;
          this.indice = 0;
          this.botonera = true;
          this.borders = true;
          this.print = false;
          this.movCaja = {};

          if (this.alumnos.alumno._id == undefined) {
            this.route.navigate(['/user']);
          }
        }

        _createClass(CobrarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.crearFormulario();
            this.fecha = new Date();
            console.log(this.fecha);
          }
        }, {
          key: "procesar",
          value: function procesar() {} //getters

        }, {
          key: "detalles",
          get: function get() {
            return this.forma.get('detalles');
          }
        }, {
          key: "importes",
          get: function get() {
            return this.forma.get('importes');
          }
        }, {
          key: "setTotal",
          value: function setTotal() {
            this.forma.controls['totalimporte'].setValue(this.total);
          }
        }, {
          key: "crearFormulario",
          value: function crearFormulario() {
            this.forma = this.fb.group({
              detalles: this.fb.array([]),
              importes: this.fb.array([]),
              totalimporte: this.fb.control('')
            });
          }
        }, {
          key: "agregarFila",
          value: function agregarFila(valor) {
            this.print = false;
            this.detalles.push(this.fb.control(''));
            this.importes.push(this.fb.control(''));
          }
        }, {
          key: "agregaTotal",
          value: function agregaTotal(e) {
            this.total = this.total + +e.value;
          }
        }, {
          key: "cobrar",
          value: function cobrar() {
            var _this6 = this;

            var _a;

            this.recibo.idUsuario = this.alumnos.alumno._id;
            this.recibo.detalles = this.forma.controls['detalles'].value;
            this.recibo.importes = this.forma.controls['importes'].value;
            this.detalles1 = this.forma.controls['detalles'].value;
            this.importes1 = this.forma.controls['importes'].value;
            (_a = this.recibo.importes) === null || _a === void 0 ? void 0 : _a.forEach(function (e) {
              _this6.total = _this6.total + e;
            });
            this.setTotal();
            this.recibo.total = this.forma.controls['totalimporte'].value;
            this.recibos.obtieneRecibo$(this.recibo).subscribe(function (resp) {
              if (resp['errors']) {
                console.log(resp['errors']);
              }

              _this6.recibo.nroRecibo = resp.recibo.nroRecibo;

              _this6.movimientoCaja();

              _this6.caja.nuevoMovimiento$(_this6.movCaja).subscribe(function (resp) {
                _this6.print = true;
              });
            });
          }
        }, {
          key: "imprimir",
          value: function imprimir() {
            window.print();
          }
        }, {
          key: "volver",
          value: function volver() {
            this.route.navigate(['/user']);
          }
        }, {
          key: "movimientoCaja",
          value: function movimientoCaja() {
            this.movCaja.movimiento = "C";
            this.movCaja.importe = this.recibo.total;
            this.movCaja.detalle = "Recibo ".concat(this.recibo.nroRecibo);
          }
        }]);

        return CobrarComponent;
      }();

      CobrarComponent.ɵfac = function CobrarComponent_Factory(t) {
        return new (t || CobrarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alumnos_service__WEBPACK_IMPORTED_MODULE_1__["AlumnosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_recibos_service__WEBPACK_IMPORTED_MODULE_3__["RecibosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cajas_service__WEBPACK_IMPORTED_MODULE_5__["CajasService"]));
      };

      CobrarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CobrarComponent,
        selectors: [["app-cobrar"]],
        decls: 92,
        vars: 37,
        consts: [[1, "marco"], ["id", "remito", 1, "remito"], [1, "cabecera"], ["src", "../../../assets/banner.jpg"], [1, "cuerpo"], [1, "recibo1"], [1, "recibo"], [1, "datos"], [1, "datosAlumno"], [1, "datosEscuela"], [1, "detalle"], ["autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "fecha"], ["name", "dia", "type", "text", "placeholder", "D\xEDa", 1, "form-control", 3, "value"], ["name", "mes", "type", "text", "placeholder", "Mes", 1, "form-control", 3, "value"], ["name", "anio", "type", "text", "placeholder", "A\xF1o", 1, "form-control", 3, "value"], [1, "titulos"], [4, "ngIf"], ["data-html2canvas-ignore", "", 1, "botonera"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click"], ["type", "submit", 1, "btn", "btn-outline-primary", 3, "click"], ["type", "submit", "class", "btn btn-outline-primary", 3, "click", 4, "ngIf"], [1, "remitoCopia"], [1, "cuerpoRemito"], [1, "fila"], [1, "detalles"], ["class", "detallesCopia", 4, "ngFor", "ngForOf"], [1, "importesCopia"], ["class", "inputs", 4, "ngFor", "ngForOf"], [1, "row"], [1, "total"], ["for", "total", 1, "col-sm-2", "col-form-label"], ["type", "number", "id", "total", "placeholder", "total", 1, "form-control", 3, "value"], [1, "detallesCopia"], [1, "inputs"], ["formArrayName", "detalles", 1, "detalles"], ["class", "textareas", 4, "ngFor", "ngForOf"], ["formArrayName", "importes", 1, "importes"], ["for", "totalimporte", 1, "col-sm-2", "col-form-label"], ["formControlName", "totalimporte", "name", "totalimporte", "type", "number", "id", "total", "placeholder", "total", 1, "form-control"], [1, "textareas"], ["autosize", "", "name", "detalle", "type", "textarea", "placeholder", "Detalle", 1, "form-control", 3, "formControlName"], ["detalle", ""], ["name", "importe", "type", "number", "placeholder", "Importes", 1, "form-control", 3, "formControlName"]],
        template: function CobrarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Instituto Municipal de Cer\xE1mica");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Direcci\xF3n: Av. Mitre 2724 - Tel.: 7720-3942");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "form", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CobrarComponent_Template_form_ngSubmit_20_listener() {
              return ctx.procesar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Fecha");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Descripci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Importes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, CobrarComponent_div_36_Template, 12, 3, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, CobrarComponent_div_37_Template, 12, 2, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CobrarComponent_Template_button_click_40_listener() {
              return ctx.agregarFila(ctx.valor);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Agregar Fila");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CobrarComponent_Template_button_click_42_listener() {
              return ctx.cobrar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Cobrar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, CobrarComponent_button_44_Template, 2, 0, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CobrarComponent_Template_button_click_45_listener() {
              return ctx.volver();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Volver");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Instituto Municipal de Cer\xE1mica");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Direcci\xF3n: Av. Mitre 2724 - Tel.: 4204-8223");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Fecha");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](70, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](72, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](74, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Descripci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Importes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, CobrarComponent_div_84_Template, 3, 1, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, CobrarComponent_div_86_Template, 3, 1, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Total");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Recibo N\xB0 ", ctx.recibo.nroRecibo, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Nombre: ", ctx.alumnos.alumno.nombre + " " + ctx.alumnos.alumno.apellido, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Direcci\xF3n: ", ctx.alumnos.alumno.direccion, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forma);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](25, 19, ctx.fecha, "dd"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](27, 22, ctx.fecha, "MM"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](29, 25, ctx.fecha, "yy"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.print);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.print);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.recibo.nroRecibo !== undefined);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Recibo N\xB0 ", ctx.recibo.nroRecibo, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Nombre: ", ctx.alumnos.alumno.nombre + " " + ctx.alumnos.alumno.apellido, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Direcci\xF3n: ", ctx.alumnos.alumno.direccion, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](70, 28, ctx.fecha, "dd"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](72, 31, ctx.fecha, "MM"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](74, 34, ctx.fecha, "yy"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.detalles1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.importes1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.total);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
        styles: [".marco[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    width: 98vw;\r\n    flex-direction: row;\r\n}\r\n\r\n.remito[_ngcontent-%COMP%], .remitoCopia[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 60vw;\r\n    height: 95vh;\r\n    line-height: 1;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    border: solid 1px black;\r\n}\r\n\r\n.cabecera[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.cabecera[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: fill;\r\n    max-height: 150px;\r\n}\r\n\r\n.cuerpo[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-top: 1em;\r\n    width: 80%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n}\r\n\r\n.recibo1[_ngcontent-%COMP%] {\r\n    justify-content: center;\r\n}\r\n\r\n.recibo[_ngcontent-%COMP%] {\r\n    color: black;\r\n    font-weight: bold;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    border: 2px solid black;\r\n    padding: 0.5em;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n.datos[_ngcontent-%COMP%] {\r\n    margin-top: 2em;\r\n    width: 100%;\r\n    line-height: 1.2;\r\n    text-align: left;\r\n}\r\n\r\n.datos[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-size: 1em;\r\n    font-weight: 500;\r\n}\r\n\r\n.datosAlumno[_ngcontent-%COMP%] {\r\n    float: left;\r\n    width: 50%;\r\n    text-align: left;\r\n}\r\n\r\n.datosEscuela[_ngcontent-%COMP%] {\r\n    float: left;\r\n    padding-left: 1em;\r\n    width: 50%;\r\n    text-align: left;\r\n}\r\n\r\n.detalle[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    flex-grow: 1;\r\n}\r\n\r\n.fecha[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.fecha[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 15%;\r\n    margin: 5px 0px 5px 5px;\r\n}\r\n\r\n.total[_ngcontent-%COMP%] {\r\n    margin-top: 2em;\r\n    display: flex;\r\n    width: 100vw;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.total[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    margin: 2px 5px 5px 5px;\r\n}\r\n\r\n.cuerpoRemito[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    height: 35vh;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.fila[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    width: 100%;\r\n    justify-content: space-between;\r\n}\r\n\r\n.detalles[_ngcontent-%COMP%] {\r\n    justify-self: end;\r\n    flex-grow: 1;\r\n    text-align: left;\r\n}\r\n\r\n.detallesCopia[_ngcontent-%COMP%] {\r\n    width: 40vw;\r\n    text-align: left;\r\n    line-height: 1.2;\r\n}\r\n\r\n.titulos[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    margin-right: 20px;\r\n}\r\n\r\n.importes[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 15%;\r\n    flex-basis: content;\r\n    border: solid 1px grey;\r\n    text-align: center;\r\n}\r\n\r\n.importesCopia[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 8vw;\r\n    flex-basis: content;\r\n    border: solid 1px grey;\r\n    text-align: center;\r\n}\r\n\r\n.importes[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    flex-grow: 1;\r\n}\r\n\r\n.botonera[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.remitoCopia[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.numero[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n    font-weight: bold;\r\n}\r\n\r\n.fecha[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    font-weight: bold;\r\n}\r\n\r\n@media print {\r\n    .marco[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        width: 100vw;\r\n        flex-direction: row;\r\n    }\r\n    .remito[_ngcontent-%COMP%], .remitoCopia[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-direction: column;\r\n        width: 49vw;\r\n        height: 95vh;\r\n        line-height: 1;\r\n        border: solid 1px black;\r\n    }\r\n    .cabecera[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        width: 80%;\r\n        height: 100px;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        justify-content: center;\r\n        border: 1px solid black;\r\n    }\r\n    .cabecera[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        object-fit: fill;\r\n        max-height: 120px;\r\n    }\r\n    .cuerpo[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-direction: column;\r\n        padding-top: 1em;\r\n        width: 80%;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        text-align: center;\r\n    }\r\n    .recibo1[_ngcontent-%COMP%] {\r\n        justify-content: center;\r\n    }\r\n    .recibo[_ngcontent-%COMP%] {\r\n        color: black;\r\n        font-weight: bold;\r\n        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n        border: 2px solid black;\r\n        padding: 0.5em;\r\n        margin-bottom: 1em;\r\n    }\r\n    .datos[_ngcontent-%COMP%] {\r\n        margin-top: 2em;\r\n        width: 100%;\r\n        line-height: 1.2;\r\n        text-align: left;\r\n        border: solid 1px black;\r\n    }\r\n    .datos[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n        font-size: 12px;\r\n        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    }\r\n    .datosAlumno[_ngcontent-%COMP%] {\r\n        float: left;\r\n        width: 50%;\r\n        text-align: left;\r\n    }\r\n    .datosEscuela[_ngcontent-%COMP%] {\r\n        float: left;\r\n        padding-left: 1em;\r\n        width: 50%;\r\n        text-align: left;\r\n    }\r\n    .detalle[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-direction: column;\r\n        width: 100%;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n    }\r\n    .fecha[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: flex-end;\r\n    }\r\n    .fecha[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n        width: 15%;\r\n        margin: 5px 0px 5px 5px;\r\n    }\r\n    .total[_ngcontent-%COMP%] {\r\n        margin-top: 2em;\r\n        display: flex;\r\n        width: 100vw;\r\n        justify-content: flex-end;\r\n    }\r\n    .total[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n        width: 30%;\r\n        margin: 2px 5px 5px 5px;\r\n    }\r\n    .cuerpoRemito[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-direction: column;\r\n        width: 100%;\r\n        height: 35vh;\r\n        overflow-y: hidden;\r\n    }\r\n    .fila[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-direction: row;\r\n        width: 100%;\r\n        justify-content: space-between;\r\n    }\r\n    .detalles[_ngcontent-%COMP%] {\r\n        justify-self: end;\r\n        flex-grow: 1;\r\n    }\r\n    .titulos[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: space-between;\r\n        margin-right: 20px;\r\n    }\r\n    .importes[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        flex-direction: column;\r\n        width: 20%;\r\n        flex-basis: content;\r\n        border: solid 1px grey;\r\n    }\r\n    .importes[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n        flex-grow: 1;\r\n    }\r\n    .botonera[_ngcontent-%COMP%] {\r\n        display: none;\r\n        margin-top: auto;\r\n        margin-bottom: 5px;\r\n    }\r\n    .fecha[_ngcontent-%COMP%] {\r\n        align-items: center;\r\n        font-weight: bold;\r\n    }\r\n    .detallesCopia[_ngcontent-%COMP%] {\r\n        width: 80%;\r\n        text-align: left;\r\n        line-height: 1.2;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvYnJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixzSEFBc0g7SUFDdEgsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixZQUFZO1FBQ1osbUJBQW1CO0lBQ3ZCO0lBQ0E7O1FBRUksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixXQUFXO1FBQ1gsWUFBWTtRQUNaLGNBQWM7UUFDZCx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGFBQWE7UUFDYixVQUFVO1FBQ1YsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixnQkFBZ0I7UUFDaEIsVUFBVTtRQUNWLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsc0hBQXNIO1FBQ3RILHVCQUF1QjtRQUN2QixjQUFjO1FBQ2Qsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxlQUFlO1FBQ2Ysc0hBQXNIO0lBQzFIO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsVUFBVTtRQUNWLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksV0FBVztRQUNYLGlCQUFpQjtRQUNqQixVQUFVO1FBQ1YsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0ksVUFBVTtRQUNWLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGFBQWE7UUFDYixZQUFZO1FBQ1oseUJBQXlCO0lBQzdCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCw4QkFBOEI7SUFDbEM7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLDhCQUE4QjtRQUM5QixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsVUFBVTtRQUNWLG1CQUFtQjtRQUNuQixzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6ImNvYnJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmNvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogOTh2dztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5yZW1pdG8sXHJcbi5yZW1pdG9Db3BpYSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA2MHZ3O1xyXG4gICAgaGVpZ2h0OiA5NXZoO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xyXG59XHJcblxyXG4uY2FiZWNlcmEge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uY2FiZWNlcmEgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogZmlsbDtcclxuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xyXG59XHJcblxyXG4uY3VlcnBvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZy10b3A6IDFlbTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJlY2libzEge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZWNpYm8ge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG5cclxuLmRhdG9zIHtcclxuICAgIG1hcmdpbi10b3A6IDJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5kYXRvcyBoNSB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5kYXRvc0FsdW1ubyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uZGF0b3NFc2N1ZWxhIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmRldGFsbGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uZmVjaGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uZmVjaGEgaW5wdXQge1xyXG4gICAgd2lkdGg6IDE1JTtcclxuICAgIG1hcmdpbjogNXB4IDBweCA1cHggNXB4O1xyXG59XHJcblxyXG4udG90YWwge1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi50b3RhbCBpbnB1dCB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luOiAycHggNXB4IDVweCA1cHg7XHJcbn1cclxuXHJcbi5jdWVycG9SZW1pdG8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzV2aDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLmZpbGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmRldGFsbGVzIHtcclxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmRldGFsbGVzQ29waWEge1xyXG4gICAgd2lkdGg6IDQwdnc7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5cclxuLnRpdHVsb3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5pbXBvcnRlcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBmbGV4LWJhc2lzOiBjb250ZW50O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmltcG9ydGVzQ29waWEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogOHZ3O1xyXG4gICAgZmxleC1iYXNpczogY29udGVudDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IGdyZXk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbXBvcnRlcyBkaXYge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uYm90b25lcmEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcblxyXG4ucmVtaXRvQ29waWEge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLm51bWVybyB7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmZlY2hhIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuQG1lZGlhIHByaW50IHtcclxuICAgIC5tYXJjbyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuICAgIC5yZW1pdG8sXHJcbiAgICAucmVtaXRvQ29waWEge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB3aWR0aDogNDl2dztcclxuICAgICAgICBoZWlnaHQ6IDk1dmg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XHJcbiAgICB9XHJcbiAgICAuY2FiZWNlcmEge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIH1cclxuICAgIC5jYWJlY2VyYSBpbWcge1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGZpbGw7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMTIwcHg7XHJcbiAgICB9XHJcbiAgICAuY3VlcnBvIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDFlbTtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAucmVjaWJvMSB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAucmVjaWJvIHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgICAgICBwYWRkaW5nOiAwLjVlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICB9XHJcbiAgICAuZGF0b3Mge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJlbTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XHJcbiAgICB9XHJcbiAgICAuZGF0b3MgaDUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgLmRhdG9zQWx1bW5vIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAuZGF0b3NFc2N1ZWxhIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAuZGV0YWxsZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIH1cclxuICAgIC5mZWNoYSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB9XHJcbiAgICAuZmVjaGEgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMHB4IDVweCA1cHg7XHJcbiAgICB9XHJcbiAgICAudG90YWwge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG4gICAgLnRvdGFsIGlucHV0IHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIG1hcmdpbjogMnB4IDVweCA1cHggNXB4O1xyXG4gICAgfVxyXG4gICAgLmN1ZXJwb1JlbWl0byB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMzV2aDtcclxuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAuZmlsYSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuICAgIC5kZXRhbGxlcyB7XHJcbiAgICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgfVxyXG4gICAgLnRpdHVsb3Mge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmltcG9ydGVzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICBmbGV4LWJhc2lzOiBjb250ZW50O1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4IGdyZXk7XHJcbiAgICB9XHJcbiAgICAuaW1wb3J0ZXMgZGl2IHtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICB9XHJcbiAgICAuYm90b25lcmEge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbiAgICAuZmVjaGEge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAuZGV0YWxsZXNDb3BpYSB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICB9XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../components/navbar/navbar.component */
      "hrlM");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../components/cabecera/cabecera.component */
      "SfOs");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_3__["CabeceraComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
          exports: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _components_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_3__["CabeceraComponent"]]
        });
      })();
      /***/

    },

    /***/
    "SfOs":
    /*!***********************************************************!*\
      !*** ./src/app/components/cabecera/cabecera.component.ts ***!
      \***********************************************************/

    /*! exports provided: CabeceraComponent */

    /***/
    function SfOs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CabeceraComponent", function () {
        return CabeceraComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CabeceraComponent = /*#__PURE__*/function () {
        function CabeceraComponent() {
          _classCallCheck(this, CabeceraComponent);
        }

        _createClass(CabeceraComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CabeceraComponent;
      }();

      CabeceraComponent.ɵfac = function CabeceraComponent_Factory(t) {
        return new (t || CabeceraComponent)();
      };

      CabeceraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CabeceraComponent,
        selectors: [["app-cabecera"]],
        decls: 2,
        vars: 0,
        consts: [[1, "cabecera"], ["src", "../../../assets/banner.jpg"]],
        template: function CabeceraComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".cabecera[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 80vw;\r\n    max-height: 200px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.cabecera[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: fill;\r\n    max-height: 200px;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background-color: rgb(91, 143, 113);\r\n    margin-bottom: 2em;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline;\r\n}\r\n\r\n.fecha[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row,\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhYmVjZXJhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQ0FBbUM7SUFDbkMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYjtBQUNKIiwiZmlsZSI6ImNhYmVjZXJhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FiZWNlcmEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5jYWJlY2VyYSBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBmaWxsO1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTEsIDE0MywgMTEzKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxufVxyXG5cclxuLm5hdmJhciBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbi5mZWNoYSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyxcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'imca';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: [".cabecera[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 80vw;\r\n    max-height: 200px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.cabecera[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: fill;\r\n    max-height: 200px;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background-color: rgb(91, 143, 113);\r\n    margin-bottom: 2em;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: inline;\r\n}\r\n\r\n.fecha[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row,\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2I7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWJlY2VyYSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmNhYmVjZXJhIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGZpbGw7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MSwgMTQzLCAxMTMpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG59XHJcblxyXG4ubmF2YmFyIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLmZlY2hhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LFxyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "V1YL":
    /*!************************************************!*\
      !*** ./src/app/components/user/user.module.ts ***!
      \************************************************/

    /*! exports provided: UserModule */

    /***/
    function V1YL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserModule", function () {
        return UserModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _nuevo_usuario_nuevo_usuario_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./nuevo-usuario/nuevo-usuario.component */
      "zRoz");
      /* harmony import */


      var _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./usuarios/usuarios.component */
      "pYZC");
      /* harmony import */


      var _editar_usuario_editar_usuario_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./editar-usuario/editar-usuario.component */
      "sGXS");
      /* harmony import */


      var _formulario_usuario_formulario_usuario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./formulario-usuario/formulario-usuario.component */
      "nUR7");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng2-search-filter */
      "cZdB");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UserModule = function UserModule() {
        _classCallCheck(this, UserModule);
      };

      UserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
        type: UserModule
      });
      UserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
        factory: function UserModule_Factory(t) {
          return new (t || UserModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](UserModule, {
          declarations: [_nuevo_usuario_nuevo_usuario_component__WEBPACK_IMPORTED_MODULE_1__["NuevoUsuarioComponent"], _usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_2__["UsuariosComponent"], _editar_usuario_editar_usuario_component__WEBPACK_IMPORTED_MODULE_3__["EditarUsuarioComponent"], _formulario_usuario_formulario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["FormularioUsuarioComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]]
        });
      })();
      /***/

    },

    /***/
    "Xl6J":
    /*!************************************************************************!*\
      !*** ./src/app/components/caja/cabecer-caja/cabecer-caja.component.ts ***!
      \************************************************************************/

    /*! exports provided: CabecerCajaComponent */

    /***/
    function Xl6J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CabecerCajaComponent", function () {
        return CabecerCajaComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CabecerCajaComponent = /*#__PURE__*/function () {
        function CabecerCajaComponent() {
          _classCallCheck(this, CabecerCajaComponent);
        }

        _createClass(CabecerCajaComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CabecerCajaComponent;
      }();

      CabecerCajaComponent.ɵfac = function CabecerCajaComponent_Factory(t) {
        return new (t || CabecerCajaComponent)();
      };

      CabecerCajaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CabecerCajaComponent,
        selectors: [["app-cabecer-caja"]],
        decls: 2,
        vars: 0,
        consts: [[1, "cabecera"], ["src", "../../../assets/banner.jpg"]],
        template: function CabecerCajaComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".cabecera[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 80vw;\r\n    max-height: 200px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.cabecera[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: fill;\r\n    max-height: 200px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhYmVjZXItY2FqYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckIiLCJmaWxlIjoiY2FiZWNlci1jYWphLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FiZWNlcmEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogODB2dztcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5jYWJlY2VyYSBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBmaWxsO1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng2-search-filter */
      "cZdB");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_portada_portada_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/portada/portada.component */
      "Dg2J");
      /* harmony import */


      var _components_user_user_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/user/user.module */
      "V1YL");
      /* harmony import */


      var _components_cobrar_cobrar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/cobrar/cobrar.component */
      "FudU");
      /* harmony import */


      var _components_caja_caja_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/caja/caja.module */
      "t8NN");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./shared/shared.module */
      "PCNd");
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      "vxfF");
      /* harmony import */


      var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @auth0/auth0-angular */
      "2beD");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _components_user_user_module__WEBPACK_IMPORTED_MODULE_7__["UserModule"], _components_caja_caja_module__WEBPACK_IMPORTED_MODULE_9__["CajaModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__["Ng2SearchPipeModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["ScrollingModule"], _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_12__["AuthModule"].forRoot({
          domain: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].auth0.domain,
          clientId: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].auth0.clientId
        })], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["ScrollingModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_portada_portada_component__WEBPACK_IMPORTED_MODULE_6__["PortadaComponent"], _components_cobrar_cobrar_component__WEBPACK_IMPORTED_MODULE_8__["CobrarComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _components_user_user_module__WEBPACK_IMPORTED_MODULE_7__["UserModule"], _components_caja_caja_module__WEBPACK_IMPORTED_MODULE_9__["CajaModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__["Ng2SearchPipeModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["ScrollingModule"], _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_12__["AuthModule"]],
          exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["ScrollingModule"]]
        });
      })();
      /***/

    },

    /***/
    "hrlM":
    /*!*******************************************************!*\
      !*** ./src/app/components/navbar/navbar.component.ts ***!
      \*******************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function hrlM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @auth0/auth0-angular */
      "2beD");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function NavbarComponent_ng_container_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_ng_container_16_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.auth.logout({
              returnTo: ctx_r3.baseUrl
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Salir ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }
      }

      function NavbarComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_ng_template_18_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.auth.loginWithRedirect({
              appState: {
                target: ctx_r5.route.url
              }
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ingresar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(route, auth, location) {
          _classCallCheck(this, NavbarComponent);

          this.route = route;
          this.auth = auth;
          this.location = location;
          this.backendUri = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl;
          this.baseUrl = window.location.origin;
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]));
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 20,
        vars: 4,
        consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNav", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item", "active"], ["routerLinkActive", "active", "routerLink", "/home", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["routerLinkActive", "active", "routerLink", "/user", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "/caja", 1, "nav-link"], [4, "ngIf", "ngIfElse"], ["loggedOut", ""], [1, "btn", "btn-primary", "boton", 3, "click"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Home ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "(current)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Usuario");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Caja");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, NavbarComponent_ng_container_16_Template, 3, 0, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, NavbarComponent_ng_template_18_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 2, ctx.auth.isAuthenticated$))("ngIfElse", _r1);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
        styles: [".navbar[_ngcontent-%COMP%] {\r\n    width: 80vw;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICAgIHdpZHRoOiA4MHZ3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "nUR7":
    /*!************************************************************************************!*\
      !*** ./src/app/components/user/formulario-usuario/formulario-usuario.component.ts ***!
      \************************************************************************************/

    /*! exports provided: FormularioUsuarioComponent */

    /***/
    function nUR7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormularioUsuarioComponent", function () {
        return FormularioUsuarioComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_alumnos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/alumnos.service */
      "EEp1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../cabecera/cabecera.component */
      "SfOs");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../navbar/navbar.component */
      "hrlM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function FormularioUsuarioComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errores.nombre.message);
        }
      }

      function FormularioUsuarioComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.errores.apellido.message);
        }
      }

      function FormularioUsuarioComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.errores.dni.message);
        }
      }

      function FormularioUsuarioComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.errores.edad.message);
        }
      }

      function FormularioUsuarioComponent_div_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.errores.direccion.message);
        }
      }

      function FormularioUsuarioComponent_div_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.errores.email.message);
        }
      }

      function FormularioUsuarioComponent_div_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r6.imgPreview, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var FormularioUsuarioComponent = /*#__PURE__*/function () {
        function FormularioUsuarioComponent(alumnos, route) {
          _classCallCheck(this, FormularioUsuarioComponent);

          this.alumnos = alumnos;
          this.route = route;
          this.forma = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            apellido: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            dni: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            edad: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            img: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
          });
          this.alumno = {};
          this.imgPreview = '';
          this.propagar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.errores = '';
          console.log(this.alumnos.alumno);
          this.alumno = this.alumnos.alumno;
        }

        _createClass(FormularioUsuarioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "selectImage",
          value: function selectImage(e) {}
        }, {
          key: "enviar",
          value: function enviar() {
            var _this7 = this;

            this.alumno.nombre = this.forma.controls['nombre'].value;
            this.alumno.apellido = this.forma.controls['apellido'].value;
            this.alumno.dni = this.forma.controls['dni'].value;
            this.alumno.edad = this.forma.controls['edad'].value;
            this.alumno.email = this.forma.controls['email'].value;
            this.alumno.direccion = this.forma.controls['direccion'].value;
            this.alumno.telefono = this.forma.controls['telefono'].value;
            this.alumno.img = this.forma.controls['img'].value;

            if (this.alumno._id === undefined) {
              this.alumnos.nuevoUsuario$(this.alumno).subscribe(function (resp) {
                if (resp['errors']) {
                  _this7.errores = resp['errors'];
                  console.log(_this7.errores);
                } else {
                  _this7.route.navigate(['/user']);
                }
              });
            } else {
              //this.alumnos.nuevoUsuario$(this.alumno).subscribe( (resp)=>{
              this.alumnos.editaUsuario$(this.alumno).subscribe(function (resp) {
                if (resp['errors']) {
                  _this7.errores = resp['errors'];
                  console.log(_this7.errores);
                } else {
                  console.log(resp);
                  _this7.alumno;

                  _this7.route.navigate(['/user']);
                }
              });
            } //this.imgPreview = null;

          }
        }]);

        return FormularioUsuarioComponent;
      }();

      FormularioUsuarioComponent.ɵfac = function FormularioUsuarioComponent_Factory(t) {
        return new (t || FormularioUsuarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alumnos_service__WEBPACK_IMPORTED_MODULE_2__["AlumnosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      FormularioUsuarioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FormularioUsuarioComponent,
        selectors: [["app-formulario-usuario"]],
        outputs: {
          propagar: "propagar"
        },
        decls: 50,
        vars: 15,
        consts: [[1, "contenido"], [3, "formGroup", "ngSubmit"], ["name", "Nombre", 1, "col-2", "col-form-label"], ["formControlName", "nombre", "name", "nombre", "type", "text", "placeholder", "Nombre", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "error", 4, "ngIf"], ["name", "Apellido", 1, "col-2", "col-form-label"], ["formControlName", "apellido", "name", "apellido", "type", "text", "placeholder", "Apellido", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formControlName", "dni", "name", "dni", "type", "text", "placeholder", "Nombre", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "Edad", 1, "col-2", "col-form-label"], ["formControlName", "edad", "name", "edad", "type", "text", "placeholder", "Edad", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "nombre", "formControlName", "direccion", "type", "text", "placeholder", "Direcci\xF3n", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "email", "formControlName", "email", "type", "text", "placeholder", "Email", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "telefono", "formControlName", "telefono", "type", "text", "placeholder", "Tel\xE9fono", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "foto", 1, "col-2", "col-form-label"], ["name", "img", "formControlName", "img", "accept", ".png,.jpg,.jpeg", "type", "file", "placeholder", "Foto", 1, "form-control", 3, "change"], [4, "ngIf"], ["type", "submit", 1, "btn", "btn-outline-primary"], [1, "error"], [3, "src"]],
        template: function FormularioUsuarioComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-cabecera");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Datos del Alumne");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormularioUsuarioComponent_Template_form_ngSubmit_6_listener() {
              return ctx.enviar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormularioUsuarioComponent_Template_input_ngModelChange_9_listener($event) {
              return ctx.alumno.nombre = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FormularioUsuarioComponent_div_10_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Apellido");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormularioUsuarioComponent_Template_input_ngModelChange_14_listener($event) {
              return ctx.alumno.apellido = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FormularioUsuarioComponent_div_15_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "DNI");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormularioUsuarioComponent_Template_input_ngModelChange_19_listener($event) {
              return ctx.alumno.dni = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FormularioUsuarioComponent_div_20_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Edad");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormularioUsuarioComponent_Template_input_ngModelChange_24_listener($event) {
              return ctx.alumno.edad = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, FormularioUsuarioComponent_div_25_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Direcci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormularioUsuarioComponent_Template_input_ngModelChange_29_listener($event) {
              return ctx.alumno.direccion = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, FormularioUsuarioComponent_div_30_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormularioUsuarioComponent_Template_input_ngModelChange_34_listener($event) {
              return ctx.alumno.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, FormularioUsuarioComponent_div_35_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Tel\xE9fono");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormularioUsuarioComponent_Template_input_ngModelChange_39_listener($event) {
              return ctx.alumno.telefono = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Foto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FormularioUsuarioComponent_Template_input_change_43_listener($event) {
              return ctx.selectImage($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, FormularioUsuarioComponent_div_44_Template, 2, 1, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Guardar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forma);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.alumno.nombre);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errores.nombre);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.alumno.apellido);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errores.apellido);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.alumno.dni);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errores.dni);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.alumno.edad);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errores.edad);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.alumno.direccion);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errores.direccion);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.alumno.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errores.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.alumno.telefono);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imgPreview != null);
          }
        },
        directives: [_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_4__["CabeceraComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
        styles: [".contenido[_ngcontent-%COMP%] {\r\n    background-color: antiquewhite;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding: 5px;\r\n    width: 80vw;\r\n}\r\n\r\ndiv.error[_ngcontent-%COMP%] {\r\n    background-color: #ff0800;\r\n    line-height: 1.2;\r\n    opacity: 0.8;\r\n    padding: 1em;\r\n}\r\n\r\n.error[_ngcontent-%COMP%] {\r\n    color: rgb(253, 253, 253);\r\n    font-style: italic;\r\n    font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm11bGFyaW8tdXN1YXJpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJmb3JtdWxhcmlvLXVzdWFyaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5pZG8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB3aWR0aDogODB2dztcclxufVxyXG5cclxuZGl2LmVycm9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjA4MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gICAgY29sb3I6IHJnYigyNTMsIDI1MywgMjUzKTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    "pYZC":
    /*!****************************************************************!*\
      !*** ./src/app/components/user/usuarios/usuarios.component.ts ***!
      \****************************************************************/

    /*! exports provided: UsuariosComponent */

    /***/
    function pYZC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsuariosComponent", function () {
        return UsuariosComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_services_alumnos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/alumnos.service */
      "EEp1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../cabecera/cabecera.component */
      "SfOs");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../navbar/navbar.component */
      "hrlM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng2-search-filter */
      "cZdB");

      function UsuariosComponent_div_8_tr_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsuariosComponent_div_8_tr_25_Template_a_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var a_r4 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r6.cobrar(a_r4._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsuariosComponent_div_8_tr_25_Template_a_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var a_r4 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.editar(a_r4._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var a_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r4._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r4.nombre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r4.apellido);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r4.dni);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r4.edad);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r4.direccion);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r4.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r4.telefono);
        }
      }

      function UsuariosComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "NOMBRE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "APELLIDO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "DNI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "EDAD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "DIRECCION");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "EMAIL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "TEL\xC9FONO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "COBRAR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "EDITAR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, UsuariosComponent_div_8_tr_25_Template, 24, 8, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 1, ctx_r1.alumnos.alumnos, ctx_r1.filtrar));
        }
      }

      function UsuariosComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No hay alumnos cargados, quieres cargar uno?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsuariosComponent_div_9_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.cargarNuevoAlumno();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "S\xED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var UsuariosComponent = /*#__PURE__*/function () {
        function UsuariosComponent(fb, alumnos, route) {
          _classCallCheck(this, UsuariosComponent);

          this.fb = fb;
          this.alumnos = alumnos;
          this.route = route;
          this.existe = false;
        }

        _createClass(UsuariosComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.alumnos.getUsuarios();
          }
        }, {
          key: "cargarNuevoAlumno",
          value: function cargarNuevoAlumno() {
            this.route.navigate(['/user/nuevoUsuario']);
          }
        }, {
          key: "cobrar",
          value: function cobrar(id) {
            this.buscaAlumno(id);
            /*  this.alumnos.alumnos.forEach((element) => {
                if( element._id == id){
                          this.alumnos.alumno = element;
                };
              });*/

            this.route.navigate(['/cobrar']);
          }
        }, {
          key: "editar",
          value: function editar(id) {
            this.buscaAlumno(id);
            this.route.navigate(['/user/editarUsuario']); //console.log(id);
          }
        }, {
          key: "buscaAlumno",
          value: function buscaAlumno(id) {
            var _this8 = this;

            this.alumnos.alumnos.forEach(function (element) {
              if (element._id == id) {
                _this8.alumnos.alumno = element;
              }

              ;
            });
          }
        }]);

        return UsuariosComponent;
      }();

      UsuariosComponent.ɵfac = function UsuariosComponent_Factory(t) {
        return new (t || UsuariosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_alumnos_service__WEBPACK_IMPORTED_MODULE_2__["AlumnosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      UsuariosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UsuariosComponent,
        selectors: [["app-usuarios"]],
        decls: 10,
        vars: 3,
        consts: [[1, "contenido"], [1, "d-flex"], ["type", "text", "name", "search", "placeholder", "Busc\xE1 por Apellido", "aria-label", "Search", 1, "form-control", "me-2", 3, "ngModel", "ngModelChange"], ["buscarDato", ""], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"], [4, "ngIf"], [1, "table", "table-striped"], ["scope", "col", 2, "display", "none"], ["scope", "col"], [4, "ngFor", "ngForOf"], [2, "display", "none"], ["id", ""], ["href", "javascript: void(0);", 3, "click"], [1, "fas", "fa-cash-register"], [1, "fas", "fa-edit"], ["type", "button", 3, "click"]],
        template: function UsuariosComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-cabecera");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UsuariosComponent_Template_input_ngModelChange_4_listener($event) {
              return ctx.filtrar = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsuariosComponent_Template_button_click_6_listener() {
              return ctx.cargarNuevoAlumno();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cargar M\xE1s");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UsuariosComponent_div_8_Template, 27, 4, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UsuariosComponent_div_9_Template, 6, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filtrar);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alumnos.alumnos.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alumnos.alumnos.length == 0);
          }
        },
        directives: [_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_4__["CabeceraComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
        pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipe"]],
        styles: [".contenido[_ngcontent-%COMP%] {\r\n    width: 80vw;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    margin-top: 2em;\r\n    padding-top: 1em;\r\n    width: 100%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\ntd[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzdWFyaW9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoidXN1YXJpb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5pZG8ge1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDFlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbnRkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "sGXS":
    /*!****************************************************************************!*\
      !*** ./src/app/components/user/editar-usuario/editar-usuario.component.ts ***!
      \****************************************************************************/

    /*! exports provided: EditarUsuarioComponent */

    /***/
    function sGXS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditarUsuarioComponent", function () {
        return EditarUsuarioComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_alumnos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/alumnos.service */
      "EEp1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _formulario_usuario_formulario_usuario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../formulario-usuario/formulario-usuario.component */
      "nUR7");

      var EditarUsuarioComponent = /*#__PURE__*/function () {
        function EditarUsuarioComponent(alumnos, fb, route) {
          _classCallCheck(this, EditarUsuarioComponent);

          this.alumnos = alumnos;
          this.fb = fb;
          this.route = route;
          console.log(this.alumnos.alumno);
        }

        _createClass(EditarUsuarioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EditarUsuarioComponent;
      }();

      EditarUsuarioComponent.ɵfac = function EditarUsuarioComponent_Factory(t) {
        return new (t || EditarUsuarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_alumnos_service__WEBPACK_IMPORTED_MODULE_1__["AlumnosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      EditarUsuarioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditarUsuarioComponent,
        selectors: [["app-editar-usuario"]],
        decls: 1,
        vars: 0,
        template: function EditarUsuarioComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-formulario-usuario");
          }
        },
        directives: [_formulario_usuario_formulario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["FormularioUsuarioComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0YXItdXN1YXJpby5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    "t8NN":
    /*!************************************************!*\
      !*** ./src/app/components/caja/caja.module.ts ***!
      \************************************************/

    /*! exports provided: CajaModule */

    /***/
    function t8NN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CajaModule", function () {
        return CajaModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _caja_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./caja.component */
      "7ULm");
      /* harmony import */


      var _cabecer_caja_cabecer_caja_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cabecer-caja/cabecer-caja.component */
      "Xl6J");
      /* harmony import */


      var src_app_services_cajas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/cajas.service */
      "3VUJ");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CajaModule = function CajaModule() {
        _classCallCheck(this, CajaModule);
      };

      CajaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: CajaModule
      });
      CajaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        factory: function CajaModule_Factory(t) {
          return new (t || CajaModule)();
        },
        providers: [src_app_services_cajas_service__WEBPACK_IMPORTED_MODULE_3__["CajasService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CajaModule, {
          declarations: [_caja_component__WEBPACK_IMPORTED_MODULE_1__["CajaComponent"], _cabecer_caja_cabecer_caja_component__WEBPACK_IMPORTED_MODULE_2__["CabecerCajaComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]
        });
      })();
      /***/

    },

    /***/
    "uwue":
    /*!*********************************************!*\
      !*** ./src/app/services/recibos.service.ts ***!
      \*********************************************/

    /*! exports provided: RecibosService */

    /***/
    function uwue(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RecibosService", function () {
        return RecibosService;
      });
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var RecibosService = /*#__PURE__*/function () {
        function RecibosService(http) {
          _classCallCheck(this, RecibosService);

          this.http = http;
        }

        _createClass(RecibosService, [{
          key: "obtieneRecibo$",
          value: function obtieneRecibo$(recibo) {
            return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl, "/api/nuevoRecibo"), recibo);
          }
        }]);

        return RecibosService;
      }();

      RecibosService.ɵfac = function RecibosService_Factory(t) {
        return new (t || RecibosService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      RecibosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: RecibosService,
        factory: RecibosService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_user_nuevo_usuario_nuevo_usuario_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/user/nuevo-usuario/nuevo-usuario.component */
      "zRoz");
      /* harmony import */


      var _components_portada_portada_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/portada/portada.component */
      "Dg2J");
      /* harmony import */


      var _components_user_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/user/usuarios/usuarios.component */
      "pYZC");
      /* harmony import */


      var _components_user_editar_usuario_editar_usuario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/user/editar-usuario/editar-usuario.component */
      "sGXS");
      /* harmony import */


      var _components_cobrar_cobrar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/cobrar/cobrar.component */
      "FudU");
      /* harmony import */


      var _components_caja_caja_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/caja/caja.component */
      "7ULm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: 'home',
        component: _components_portada_portada_component__WEBPACK_IMPORTED_MODULE_2__["PortadaComponent"]
      }, {
        path: 'user',
        component: _components_user_usuarios_usuarios_component__WEBPACK_IMPORTED_MODULE_3__["UsuariosComponent"]
      }, {
        path: 'user/editarUsuario',
        component: _components_user_editar_usuario_editar_usuario_component__WEBPACK_IMPORTED_MODULE_4__["EditarUsuarioComponent"]
      }, {
        path: 'user/nuevoUsuario',
        component: _components_user_nuevo_usuario_nuevo_usuario_component__WEBPACK_IMPORTED_MODULE_1__["NuevoUsuarioComponent"]
      }, {
        path: 'cobrar',
        component: _components_cobrar_cobrar_component__WEBPACK_IMPORTED_MODULE_5__["CobrarComponent"]
      }, {
        path: 'caja',
        component: _components_caja_caja_component__WEBPACK_IMPORTED_MODULE_6__["CajaComponent"]
      }, {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zRoz":
    /*!**************************************************************************!*\
      !*** ./src/app/components/user/nuevo-usuario/nuevo-usuario.component.ts ***!
      \**************************************************************************/

    /*! exports provided: NuevoUsuarioComponent */

    /***/
    function zRoz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NuevoUsuarioComponent", function () {
        return NuevoUsuarioComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_alumnos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/alumnos.service */
      "EEp1");
      /* harmony import */


      var _formulario_usuario_formulario_usuario_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../formulario-usuario/formulario-usuario.component */
      "nUR7");

      var NuevoUsuarioComponent = /*#__PURE__*/function () {
        function NuevoUsuarioComponent(alumnos) {
          _classCallCheck(this, NuevoUsuarioComponent);

          this.alumnos = alumnos;

          if (this.alumnos.alumno !== {}) {
            this.alumnos.alumno = {};
          }
        }

        _createClass(NuevoUsuarioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NuevoUsuarioComponent;
      }();

      NuevoUsuarioComponent.ɵfac = function NuevoUsuarioComponent_Factory(t) {
        return new (t || NuevoUsuarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alumnos_service__WEBPACK_IMPORTED_MODULE_1__["AlumnosService"]));
      };

      NuevoUsuarioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NuevoUsuarioComponent,
        selectors: [["app-nuevo-usuario"]],
        decls: 1,
        vars: 0,
        template: function NuevoUsuarioComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-formulario-usuario");
          }
        },
        directives: [_formulario_usuario_formulario_usuario_component__WEBPACK_IMPORTED_MODULE_2__["FormularioUsuarioComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJudWV2by11c3VhcmlvLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map