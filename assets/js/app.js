/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let iconMenu = document.querySelector('.header__burger')\r\nlet menuBody = document.querySelector('.header__list')\r\n\r\niconMenu.addEventListener('click', navMenu)\r\n\r\nfunction navMenu() {\r\n   document.body.classList.toggle('lock')\r\n   iconMenu.classList.toggle('active')\r\n   menuBody.classList.toggle('active')\r\n}\r\n\r\nconst navLink = document.querySelectorAll('.header__link')\r\n\r\nnavLink.forEach(n => n.addEventListener('click', closeMenu))\r\n\r\nfunction closeMenu() {\r\n   document.body.classList.remove('lock')\r\n   iconMenu.classList.remove('active')\r\n   menuBody.classList.remove('active')\r\n}\r\n\r\n\r\n//if (iconMenu) {\r\n//   iconMenu.addEventListener('click', (e) => {\r\n//      document.body.classList.toggle('lock')\r\n//      iconMenu.classList.toggle('active')\r\n//      menuBody.classList.toggle('active')\r\n//   })\r\n//}\r\n//if (iconMenu.classList.contains('active')) {\r\n//   iconMenu.addEventListener('click', (e) => {\r\n//      document.body.classList.remove('lock')\r\n//      iconMenu.classList.remove('active')\r\n//      menuBody.classList.remove('active')\r\n//   })\r\n//}\r\n\r\n\r\n\r\nwindow.addEventListener(('scroll'), () => {\r\n   const header = document.querySelector(\"header\")\r\n   header.classList.toggle(\"sticky\", window.scrollY > 0)\r\n});\r\n\r\nnew Swiper('.swiper', {\r\n\r\n   autoplay: {\r\n      delay: 2000,\r\n   },\r\n   speed: 800,\r\n   effect: 'fade',\r\n   fadeEffect: {\r\n      crossFade: true\r\n   },\r\n   loop: true,\r\n   pagination: {\r\n      el: '.swiper-pagination',\r\n\r\n   },\r\n   breakpoints: {\r\n      429: {\r\n         slidesPerView: 1,\r\n      },\r\n\r\n   }\r\n})\r\n\r\nlet btnTop = document.querySelector('.btn__top')\r\nfunction magicBtn() {\r\n   if (window.pageYOffset > 20) {\r\n      btnTop.style.opacity = '1'\r\n   }\r\n   else { btnTop.style.opacity = '0' }\r\n}\r\nbtnTop.onclick = function () {\r\n   window.scrollTo(0, 0)\r\n}\r\nwindow.onscroll = magicBtn\r\n\r\n\r\n\r\n\r\n\r\n$(document).ready(function () {\r\n   $('.rates__btn').click(function (e) {\r\n      e.preventDefault();\r\n\r\n      $('.rates__btn').removeClass('rates__btn-active')\r\n      $('.rates__content').removeClass('rates__content-active')\r\n\r\n\r\n      $(this).addClass('rates__btn-active')\r\n      $($(this).attr('href')).addClass('rates__content-active')\r\n   })\r\n   $('.rates__btn:first').click()\r\n})\r\n\r\n\r\n\r\n\r\n$(function () {\r\n   let Accordion = function (el, multiple) {\r\n      this.el = el || {};\r\n      this.multiple = multiple || false\r\n\r\n      let dropdownlink = this.el.find('.accardion__dropdown')\r\n      dropdownlink.on('click',\r\n         { el: this.el, multiple: this.multiple },\r\n         this.dropdown)\r\n   }\r\n   Accordion.prototype.dropdown = function (e) {\r\n      let $el = e.data.el,\r\n         $this = $(this),\r\n\r\n         $next = $this.next()\r\n\r\n      $next.slideToggle()\r\n      $this.parent().toggleClass('open')\r\n\r\n      if (!e.data.multiple) {\r\n\r\n         $el.find('.accardion__text').not($next).slideUp().parent().removeClass('open')\r\n      }\r\n   }\r\n\r\n   let accordion = new Accordion($('.accardion__list'), false)\r\n})\r\n\r\n\r\n/*-----------------------------------------------------------------*/\r\nconst modalBtn = document.querySelectorAll('[data-modal]');\r\nconst body = document.body;\r\nconst modalClose = document.querySelectorAll('.modal__close');\r\nconst modal = document.querySelectorAll('.modal');\r\n\r\n\r\nmodalBtn.forEach(item => {\r\n   item.addEventListener('click', event => {\r\n      let $this = event.currentTarget;\r\n      let modalId = $this.getAttribute('data-modal');\r\n      let modal = document.getElementById(modalId);\r\n      let modalContent = modal.querySelector('.modal__content');\r\n\r\n      modalContent.addEventListener('click', event => {\r\n         event.stopPropagation();\r\n      });\r\n\r\n      modal.classList.add('show');\r\n      body.classList.add('no-scroll');\r\n\r\n      setTimeout(() => {\r\n         modalContent.style.transform = 'none';\r\n         modalContent.style.opacity = '1';\r\n      }, 1);\r\n\r\n   });\r\n});\r\n\r\n\r\nmodalClose.forEach(item => {\r\n   item.addEventListener('click', event => {\r\n      let currentModal = event.currentTarget.closest('.modal');\r\n\r\n      closeModal(currentModal);\r\n   });\r\n});\r\n\r\n\r\nmodal.forEach(item => {\r\n   item.addEventListener('click', event => {\r\n      let currentModal = event.currentTarget;\r\n\r\n      closeModal(currentModal);\r\n   });\r\n});\r\n\r\n\r\nfunction closeModal(currentModal) {\r\n   let modalContent = currentModal.querySelector('.modal__content');\r\n   modalContent.removeAttribute('style');\r\n\r\n   setTimeout(() => {\r\n      currentModal.classList.remove('show');\r\n      body.classList.remove('no-scroll');\r\n   }, 200);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

/******/ });