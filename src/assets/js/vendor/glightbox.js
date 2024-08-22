!(function (e, t) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = t())
		: 'function' == typeof define && define.amd
		? define(t)
		: ((e = e || self).GLightbox = t());
})(this, function () {
	'use strict';
	function e(t) {
		return (e =
			'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
				? function (e) {
						return typeof e;
				  }
				: function (e) {
						return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
							? 'symbol'
							: typeof e;
				  })(t);
	}
	function t(e, t) {
		if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
	}
	function i(e, t) {
		for (var i = 0; i < t.length; i++) {
			var n = t[i];
			(n.enumerable = n.enumerable || !1),
				(n.configurable = !0),
				'value' in n && (n.writable = !0),
				Object.defineProperty(e, n.key, n);
		}
	}
	function n(e, t, n) {
		return t && i(e.prototype, t), n && i(e, n), e;
	}
	var s = Date.now();
	function l() {
		var e = {},
			t = !0,
			i = 0,
			n = arguments.length;
		for (
			'[object Boolean]' === Object.prototype.toString.call(arguments[0]) && ((t = arguments[0]), i++);
			i < n;
			i++
		) {
			var s = arguments[i];
			!(function i(n) {
				for (var s in n)
					Object.prototype.hasOwnProperty.call(n, s) &&
						(t && '[object Object]' === Object.prototype.toString.call(n[s])
							? (e[s] = l(!0, e[s], n[s]))
							: (e[s] = n[s]));
			})(s);
		}
		return e;
	}
	function r(e, t) {
		if (((w(e) || e === window || e === document) && (e = [e]), k(e) || T(e) || (e = [e]), 0 != L(e))) {
			if (k(e) && !T(e)) for (var i = e.length, n = 0; n < i && !1 !== t.call(e[n], e[n], n, e); n++);
			else if (T(e)) {
				for (var s in e) if (A(e, s) && !1 === t.call(e[s], e[s], s, e)) break;
			}
		}
	}
	function o(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
			i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
			n = (e[s] = e[s] || []),
			l = { all: n, evt: null, found: null };
		return (
			t &&
				i &&
				L(n) > 0 &&
				r(n, function (e, n) {
					if (e.eventName == t && e.fn.toString() == i.toString()) return (l.found = !0), (l.evt = n), !1;
				}),
			l
		);
	}
	function a(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
			i = t.onElement,
			n = t.withCallback,
			s = t.avoidDuplicate,
			l = void 0 === s || s,
			a = t.once,
			h = void 0 !== a && a,
			d = t.useCapture,
			c = void 0 !== d && d,
			u = arguments.length > 2 ? arguments[2] : void 0,
			g = i || [];
		function v(e) {
			b(n) && n.call(u, e, this), h && v.destroy();
		}
		return (
			S(g) && (g = document.querySelectorAll(g)),
			(v.destroy = function () {
				r(g, function (t) {
					var i = o(t, e, v);
					i.found && i.all.splice(i.evt, 1), t.removeEventListener && t.removeEventListener(e, v, c);
				});
			}),
			r(g, function (t) {
				var i = o(t, e, v);
				((t.addEventListener && l && !i.found) || !l) &&
					(t.addEventListener(e, v, c), i.all.push({ eventName: e, fn: v }));
			}),
			v
		);
	}
	function h(e, t) {
		r(t.split(' '), function (t) {
			return e.classList.add(t);
		});
	}
	function d(e, t) {
		r(t.split(' '), function (t) {
			return e.classList.remove(t);
		});
	}
	function c(e, t) {
		return e.classList.contains(t);
	}
	function u(e, t) {
		for (; e !== document.body; ) {
			if (!(e = e.parentElement)) return !1;
			if ('function' == typeof e.matches ? e.matches(t) : e.msMatchesSelector(t)) return e;
		}
	}
	function g(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
			i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
		if (!e || '' === t) return !1;
		if ('none' === t) return b(i) && i(), !1;
		var n = (function e() {
				var t,
					i = document.createElement('fakeelement'),
					n = {
						animation: 'animationend',
						OAnimation: 'oAnimationEnd',
						MozAnimation: 'animationend',
						WebkitAnimation: 'webkitAnimationEnd',
					};
				for (t in n) if (void 0 !== i.style[t]) return n[t];
			})(),
			s = t.split(' ');
		r(s, function (t) {
			h(e, 'g' + t);
		}),
			a(n, {
				onElement: e,
				avoidDuplicate: !1,
				once: !0,
				withCallback: function e(t, n) {
					r(s, function (e) {
						d(n, 'g' + e);
					}),
						b(i) && i();
				},
			});
	}
	function v(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';
		if ('' === t)
			return (
				(e.style.webkitTransform = ''),
				(e.style.MozTransform = ''),
				(e.style.msTransform = ''),
				(e.style.OTransform = ''),
				(e.style.transform = ''),
				!1
			);
		(e.style.webkitTransform = t),
			(e.style.MozTransform = t),
			(e.style.msTransform = t),
			(e.style.OTransform = t),
			(e.style.transform = t);
	}
	function f(e) {
		e.style.display = 'block';
	}
	function p(e) {
		e.style.display = 'none';
	}
	function y(e) {
		var t = document.createDocumentFragment(),
			i = document.createElement('div');
		for (i.innerHTML = e; i.firstChild; ) t.appendChild(i.firstChild);
		return t;
	}
	function m() {
		return {
			width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
			height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
		};
	}
	function $(e, t, i, n) {
		if (e()) {
			t();
			return;
		}
		i || (i = 100);
		var s,
			l = setInterval(function () {
				e() && (clearInterval(l), s && clearTimeout(s), t());
			}, i);
		n &&
			(s = setTimeout(function () {
				clearInterval(l);
			}, n));
	}
	function _(e, t, i) {
		if (E(e)) {
			console.error('Inject assets error');
			return;
		}
		if ((b(t) && ((i = t), (t = !1)), S(t) && t in window)) {
			b(i) && i();
			return;
		}
		if (-1 !== e.indexOf('.css')) {
			if ((n = document.querySelectorAll('link[href="' + e + '"]')) && n.length > 0) {
				b(i) && i();
				return;
			}
			var n,
				s = document.getElementsByTagName('head')[0],
				l = s.querySelectorAll('link[rel="stylesheet"]'),
				r = document.createElement('link');
			(r.rel = 'stylesheet'),
				(r.type = 'text/css'),
				(r.href = e),
				(r.media = 'all'),
				l ? s.insertBefore(r, l[0]) : s.appendChild(r),
				b(i) && i();
			return;
		}
		if ((n = document.querySelectorAll('script[src="' + e + '"]')) && n.length > 0) {
			if (b(i)) {
				if (S(t))
					return (
						$(
							function () {
								return void 0 !== window[t];
							},
							function () {
								i();
							}
						),
						!1
					);
				i();
			}
			return;
		}
		var o = document.createElement('script');
		(o.type = 'text/javascript'),
			(o.src = e),
			(o.onload = function () {
				if (b(i)) {
					if (S(t))
						return (
							$(
								function () {
									return void 0 !== window[t];
								},
								function () {
									i();
								}
							),
							!1
						);
					i();
				}
			}),
			document.body.appendChild(o);
	}
	function x() {
		return (
			'navigator' in window &&
			window.navigator.userAgent.match(
				/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i
			)
		);
	}
	function b(e) {
		return 'function' == typeof e;
	}
	function S(e) {
		return 'string' == typeof e;
	}
	function w(e) {
		return !!(e && e.nodeType && 1 == e.nodeType);
	}
	function C(e) {
		return Array.isArray(e);
	}
	function k(e) {
		return e && e.length && isFinite(e.length);
	}
	function T(t) {
		return 'object' === e(t) && null != t && !b(t) && !C(t);
	}
	function E(e) {
		return null == e;
	}
	function A(e, t) {
		return null !== e && hasOwnProperty.call(e, t);
	}
	function L(e) {
		if (!T(e)) return e.length;
		if (e.keys) return e.keys().length;
		var t = 0;
		for (var i in e) A(e, i) && t++;
		return t;
	}
	function O(e) {
		return !isNaN(parseFloat(e)) && isFinite(e);
	}
	function P() {
		var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
			t = document.querySelectorAll('.gbtn[data-taborder]:not(.disabled)');
		if (!t.length) return !1;
		if (1 == t.length) return t[0];
		'string' == typeof e && (e = parseInt(e));
		var i = [];
		r(t, function (e) {
			i.push(e.getAttribute('data-taborder'));
		});
		var n = Math.max.apply(
				Math,
				i.map(function (e) {
					return parseInt(e);
				})
			),
			s = e < 0 ? 1 : e + 1;
		s > n && (s = '1');
		var l = i
			.filter(function (e) {
				return e >= parseInt(s);
			})
			.sort()[0];
		return document.querySelector('.gbtn[data-taborder="'.concat(l, '"]'));
	}
	function I(e) {
		return Math.sqrt(e.x * e.x + e.y * e.y);
	}
	var z = (function () {
		function e(i) {
			t(this, e), (this.handlers = []), (this.el = i);
		}
		return (
			n(e, [
				{
					key: 'add',
					value: function e(t) {
						this.handlers.push(t);
					},
				},
				{
					key: 'del',
					value: function e(t) {
						t || (this.handlers = []);
						for (var i = this.handlers.length; i >= 0; i--)
							this.handlers[i] === t && this.handlers.splice(i, 1);
					},
				},
				{
					key: 'dispatch',
					value: function e() {
						for (var t = 0, i = this.handlers.length; t < i; t++) {
							var n = this.handlers[t];
							'function' == typeof n && n.apply(this.el, arguments);
						}
					},
				},
			]),
			e
		);
	})();
	function X(e, t) {
		var i = new z(e);
		return i.add(t), i;
	}
	var Y = (function () {
		function e(i, n) {
			t(this, e),
				(this.element = 'string' == typeof i ? document.querySelector(i) : i),
				(this.start = this.start.bind(this)),
				(this.move = this.move.bind(this)),
				(this.end = this.end.bind(this)),
				(this.cancel = this.cancel.bind(this)),
				this.element.addEventListener('touchstart', this.start, !1),
				this.element.addEventListener('touchmove', this.move, !1),
				this.element.addEventListener('touchend', this.end, !1),
				this.element.addEventListener('touchcancel', this.cancel, !1),
				(this.preV = { x: null, y: null }),
				(this.pinchStartLen = null),
				(this.zoom = 1),
				(this.isDoubleTap = !1);
			var s = function e() {};
			(this.rotate = X(this.element, n.rotate || s)),
				(this.touchStart = X(this.element, n.touchStart || s)),
				(this.multipointStart = X(this.element, n.multipointStart || s)),
				(this.multipointEnd = X(this.element, n.multipointEnd || s)),
				(this.pinch = X(this.element, n.pinch || s)),
				(this.swipe = X(this.element, n.swipe || s)),
				(this.tap = X(this.element, n.tap || s)),
				(this.doubleTap = X(this.element, n.doubleTap || s)),
				(this.longTap = X(this.element, n.longTap || s)),
				(this.singleTap = X(this.element, n.singleTap || s)),
				(this.pressMove = X(this.element, n.pressMove || s)),
				(this.twoFingerPressMove = X(this.element, n.twoFingerPressMove || s)),
				(this.touchMove = X(this.element, n.touchMove || s)),
				(this.touchEnd = X(this.element, n.touchEnd || s)),
				(this.touchCancel = X(this.element, n.touchCancel || s)),
				(this.translateContainer = this.element),
				(this._cancelAllHandler = this.cancelAll.bind(this)),
				window.addEventListener('scroll', this._cancelAllHandler),
				(this.delta = null),
				(this.last = null),
				(this.now = null),
				(this.tapTimeout = null),
				(this.singleTapTimeout = null),
				(this.longTapTimeout = null),
				(this.swipeTimeout = null),
				(this.x1 = this.x2 = this.y1 = this.y2 = null),
				(this.preTapPosition = { x: null, y: null });
		}
		return (
			n(e, [
				{
					key: 'start',
					value: function e(t) {
						if (t.touches) {
							if (
								t.target &&
								t.target.nodeName &&
								['a', 'button', 'input'].indexOf(t.target.nodeName.toLowerCase()) >= 0
							) {
								console.log('ignore drag for this touched element', t.target.nodeName.toLowerCase());
								return;
							}
							(this.now = Date.now()),
								(this.x1 = t.touches[0].pageX),
								(this.y1 = t.touches[0].pageY),
								(this.delta = this.now - (this.last || this.now)),
								this.touchStart.dispatch(t, this.element),
								null !== this.preTapPosition.x &&
									((this.isDoubleTap =
										this.delta > 0 &&
										this.delta <= 250 &&
										30 > Math.abs(this.preTapPosition.x - this.x1) &&
										30 > Math.abs(this.preTapPosition.y - this.y1)),
									this.isDoubleTap && clearTimeout(this.singleTapTimeout)),
								(this.preTapPosition.x = this.x1),
								(this.preTapPosition.y = this.y1),
								(this.last = this.now);
							var i = this.preV;
							if (t.touches.length > 1) {
								this._cancelLongTap(), this._cancelSingleTap();
								var n = { x: t.touches[1].pageX - this.x1, y: t.touches[1].pageY - this.y1 };
								(i.x = n.x),
									(i.y = n.y),
									(this.pinchStartLen = I(i)),
									this.multipointStart.dispatch(t, this.element);
							}
							(this._preventTap = !1),
								(this.longTapTimeout = setTimeout(
									function () {
										this.longTap.dispatch(t, this.element), (this._preventTap = !0);
									}.bind(this),
									750
								));
						}
					},
				},
				{
					key: 'move',
					value: function e(t) {
						if (t.touches) {
							var i = this.preV,
								n = t.touches.length,
								s = t.touches[0].pageX,
								l = t.touches[0].pageY;
							if (((this.isDoubleTap = !1), n > 1)) {
								var r,
									o,
									a,
									h,
									d,
									c = t.touches[1].pageX,
									u = t.touches[1].pageY,
									g = { x: t.touches[1].pageX - s, y: t.touches[1].pageY - l };
								null !== i.x &&
									(this.pinchStartLen > 0 &&
										((t.zoom = I(g) / this.pinchStartLen), this.pinch.dispatch(t, this.element)),
									(t.angle =
										((r = g),
										(o = i),
										(d = (function e(t, i) {
											var n = I(t) * I(i);
											if (0 === n) return 0;
											var s,
												l,
												r = ((s = t), (l = i), (s.x * l.x + s.y * l.y) / n);
											return r > 1 && (r = 1), Math.acos(r);
										})(r, o)),
										(a = r),
										(h = o),
										a.x * h.y - h.x * a.y > 0 && (d *= -1),
										(180 * d) / Math.PI)),
									this.rotate.dispatch(t, this.element)),
									(i.x = g.x),
									(i.y = g.y),
									null !== this.x2 && null !== this.sx2
										? ((t.deltaX = (s - this.x2 + c - this.sx2) / 2),
										  (t.deltaY = (l - this.y2 + u - this.sy2) / 2))
										: ((t.deltaX = 0), (t.deltaY = 0)),
									this.twoFingerPressMove.dispatch(t, this.element),
									(this.sx2 = c),
									(this.sy2 = u);
							} else {
								if (null !== this.x2) {
									(t.deltaX = s - this.x2), (t.deltaY = l - this.y2);
									var v = Math.abs(this.x1 - this.x2),
										f = Math.abs(this.y1 - this.y2);
									(v > 10 || f > 10) && (this._preventTap = !0);
								} else (t.deltaX = 0), (t.deltaY = 0);
								this.pressMove.dispatch(t, this.element);
							}
							this.touchMove.dispatch(t, this.element),
								this._cancelLongTap(),
								(this.x2 = s),
								(this.y2 = l),
								n > 1 && t.preventDefault();
						}
					},
				},
				{
					key: 'end',
					value: function e(t) {
						if (t.changedTouches) {
							this._cancelLongTap();
							var i = this;
							t.touches.length < 2 &&
								(this.multipointEnd.dispatch(t, this.element), (this.sx2 = this.sy2 = null)),
								(this.x2 && Math.abs(this.x1 - this.x2) > 30) ||
								(this.y2 && Math.abs(this.y1 - this.y2) > 30)
									? ((t.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2)),
									  (this.swipeTimeout = setTimeout(function () {
											i.swipe.dispatch(t, i.element);
									  }, 0)))
									: ((this.tapTimeout = setTimeout(function () {
											i._preventTap || i.tap.dispatch(t, i.element),
												i.isDoubleTap &&
													(i.doubleTap.dispatch(t, i.element), (i.isDoubleTap = !1));
									  }, 0)),
									  i.isDoubleTap ||
											(i.singleTapTimeout = setTimeout(function () {
												i.singleTap.dispatch(t, i.element);
											}, 250))),
								this.touchEnd.dispatch(t, this.element),
								(this.preV.x = 0),
								(this.preV.y = 0),
								(this.zoom = 1),
								(this.pinchStartLen = null),
								(this.x1 = this.x2 = this.y1 = this.y2 = null);
						}
					},
				},
				{
					key: 'cancelAll',
					value: function e() {
						(this._preventTap = !0),
							clearTimeout(this.singleTapTimeout),
							clearTimeout(this.tapTimeout),
							clearTimeout(this.longTapTimeout),
							clearTimeout(this.swipeTimeout);
					},
				},
				{
					key: 'cancel',
					value: function e(t) {
						this.cancelAll(), this.touchCancel.dispatch(t, this.element);
					},
				},
				{
					key: '_cancelLongTap',
					value: function e() {
						clearTimeout(this.longTapTimeout);
					},
				},
				{
					key: '_cancelSingleTap',
					value: function e() {
						clearTimeout(this.singleTapTimeout);
					},
				},
				{
					key: '_swipeDirection',
					value: function e(t, i, n, s) {
						return Math.abs(t - i) >= Math.abs(n - s)
							? t - i > 0
								? 'Left'
								: 'Right'
							: n - s > 0
							? 'Up'
							: 'Down';
					},
				},
				{
					key: 'on',
					value: function e(t, i) {
						this[t] && this[t].add(i);
					},
				},
				{
					key: 'off',
					value: function e(t, i) {
						this[t] && this[t].del(i);
					},
				},
				{
					key: 'destroy',
					value: function e() {
						return (
							this.singleTapTimeout && clearTimeout(this.singleTapTimeout),
							this.tapTimeout && clearTimeout(this.tapTimeout),
							this.longTapTimeout && clearTimeout(this.longTapTimeout),
							this.swipeTimeout && clearTimeout(this.swipeTimeout),
							this.element.removeEventListener('touchstart', this.start),
							this.element.removeEventListener('touchmove', this.move),
							this.element.removeEventListener('touchend', this.end),
							this.element.removeEventListener('touchcancel', this.cancel),
							this.rotate.del(),
							this.touchStart.del(),
							this.multipointStart.del(),
							this.multipointEnd.del(),
							this.pinch.del(),
							this.swipe.del(),
							this.tap.del(),
							this.doubleTap.del(),
							this.longTap.del(),
							this.singleTap.del(),
							this.pressMove.del(),
							this.twoFingerPressMove.del(),
							this.touchMove.del(),
							this.touchEnd.del(),
							this.touchCancel.del(),
							(this.preV =
								this.pinchStartLen =
								this.zoom =
								this.isDoubleTap =
								this.delta =
								this.last =
								this.now =
								this.tapTimeout =
								this.singleTapTimeout =
								this.longTapTimeout =
								this.swipeTimeout =
								this.x1 =
								this.x2 =
								this.y1 =
								this.y2 =
								this.preTapPosition =
								this.rotate =
								this.touchStart =
								this.multipointStart =
								this.multipointEnd =
								this.pinch =
								this.swipe =
								this.tap =
								this.doubleTap =
								this.longTap =
								this.singleTap =
								this.pressMove =
								this.touchMove =
								this.touchEnd =
								this.touchCancel =
								this.twoFingerPressMove =
									null),
							window.removeEventListener('scroll', this._cancelAllHandler),
							null
						);
					},
				},
			]),
			e
		);
	})();
	function q(e) {
		var t = (function e() {
				var t,
					i = document.createElement('fakeelement'),
					n = {
						transition: 'transitionend',
						OTransition: 'oTransitionEnd',
						MozTransition: 'transitionend',
						WebkitTransition: 'webkitTransitionEnd',
					};
				for (t in n) if (void 0 !== i.style[t]) return n[t];
			})(),
			i = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
			n = c(e, 'gslide-media') ? e : e.querySelector('.gslide-media'),
			s = u(n, '.ginner-container'),
			l = e.querySelector('.gslide-description');
		i > 769 && (n = s),
			h(n, 'greset'),
			v(n, 'translate3d(0, 0, 0)'),
			a(t, {
				onElement: n,
				once: !0,
				withCallback: function e(t, i) {
					d(n, 'greset');
				},
			}),
			(n.style.opacity = ''),
			l && (l.style.opacity = '');
	}
	var N = (function () {
			function e(i, n) {
				var s = this,
					l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
				if ((t(this, e), (this.img = i), (this.slide = n), (this.onclose = l), this.img.setZoomEvents))
					return !1;
				(this.active = !1),
					(this.zoomedIn = !1),
					(this.dragging = !1),
					(this.currentX = null),
					(this.currentY = null),
					(this.initialX = null),
					(this.initialY = null),
					(this.xOffset = 0),
					(this.yOffset = 0),
					this.img.addEventListener(
						'mousedown',
						function (e) {
							return s.dragStart(e);
						},
						!1
					),
					this.img.addEventListener(
						'mouseup',
						function (e) {
							return s.dragEnd(e);
						},
						!1
					),
					this.img.addEventListener(
						'mousemove',
						function (e) {
							return s.drag(e);
						},
						!1
					),
					this.img.addEventListener(
						'click',
						function (e) {
							return s.slide.classList.contains('dragging-nav')
								? (s.zoomOut(), !1)
								: s.zoomedIn
								? void (s.zoomedIn && !s.dragging && s.zoomOut())
								: s.zoomIn();
						},
						!1
					),
					(this.img.setZoomEvents = !0);
			}
			return (
				n(e, [
					{
						key: 'zoomIn',
						value: function e() {
							var t = this.widowWidth();
							if (!this.zoomedIn && !(t <= 768)) {
								var i = this.img;
								if (
									(i.setAttribute('data-style', i.getAttribute('style')),
									(i.style.maxWidth = i.naturalWidth + 'px'),
									(i.style.maxHeight = i.naturalHeight + 'px'),
									i.naturalWidth > t)
								) {
									var n = t / 2 - i.naturalWidth / 2;
									this.setTranslate(this.img.parentNode, n, 0);
								}
								this.slide.classList.add('zoomed'), (this.zoomedIn = !0);
							}
						},
					},
					{
						key: 'zoomOut',
						value: function e() {
							this.img.parentNode.setAttribute('style', ''),
								this.img.setAttribute('style', this.img.getAttribute('data-style')),
								this.slide.classList.remove('zoomed'),
								(this.zoomedIn = !1),
								(this.currentX = null),
								(this.currentY = null),
								(this.initialX = null),
								(this.initialY = null),
								(this.xOffset = 0),
								(this.yOffset = 0),
								this.onclose && 'function' == typeof this.onclose && this.onclose();
						},
					},
					{
						key: 'dragStart',
						value: function e(t) {
							if ((t.preventDefault(), !this.zoomedIn)) {
								this.active = !1;
								return;
							}
							'touchstart' === t.type
								? ((this.initialX = t.touches[0].clientX - this.xOffset),
								  (this.initialY = t.touches[0].clientY - this.yOffset))
								: ((this.initialX = t.clientX - this.xOffset),
								  (this.initialY = t.clientY - this.yOffset)),
								t.target === this.img && ((this.active = !0), this.img.classList.add('dragging'));
						},
					},
					{
						key: 'dragEnd',
						value: function e(t) {
							var i = this;
							t.preventDefault(),
								(this.initialX = this.currentX),
								(this.initialY = this.currentY),
								(this.active = !1),
								setTimeout(function () {
									(i.dragging = !1), (i.img.isDragging = !1), i.img.classList.remove('dragging');
								}, 100);
						},
					},
					{
						key: 'drag',
						value: function e(t) {
							this.active &&
								(t.preventDefault(),
								'touchmove' === t.type
									? ((this.currentX = t.touches[0].clientX - this.initialX),
									  (this.currentY = t.touches[0].clientY - this.initialY))
									: ((this.currentX = t.clientX - this.initialX),
									  (this.currentY = t.clientY - this.initialY)),
								(this.xOffset = this.currentX),
								(this.yOffset = this.currentY),
								(this.img.isDragging = !0),
								(this.dragging = !0),
								this.setTranslate(this.img, this.currentX, this.currentY));
						},
					},
					{
						key: 'onMove',
						value: function e(t) {
							if (this.zoomedIn) {
								var i = t.clientX - this.img.naturalWidth / 2,
									n = t.clientY - this.img.naturalHeight / 2;
								this.setTranslate(this.img, i, n);
							}
						},
					},
					{
						key: 'setTranslate',
						value: function e(t, i, n) {
							t.style.transform = 'translate3d(' + i + 'px, ' + n + 'px, 0)';
						},
					},
					{
						key: 'widowWidth',
						value: function e() {
							return (
								window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
							);
						},
					},
				]),
				e
			);
		})(),
		D = (function () {
			function e() {
				var i = this,
					n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				t(this, e);
				var s = n.dragEl,
					l = n.toleranceX,
					r = n.toleranceY,
					o = n.slide,
					a = n.instance;
				(this.el = s),
					(this.active = !1),
					(this.dragging = !1),
					(this.currentX = null),
					(this.currentY = null),
					(this.initialX = null),
					(this.initialY = null),
					(this.xOffset = 0),
					(this.yOffset = 0),
					(this.direction = null),
					(this.lastDirection = null),
					(this.toleranceX = void 0 === l ? 40 : l),
					(this.toleranceY = void 0 === r ? 65 : r),
					(this.toleranceReached = !1),
					(this.dragContainer = this.el),
					(this.slide = void 0 === o ? null : o),
					(this.instance = void 0 === a ? null : a),
					this.el.addEventListener(
						'mousedown',
						function (e) {
							return i.dragStart(e);
						},
						!1
					),
					this.el.addEventListener(
						'mouseup',
						function (e) {
							return i.dragEnd(e);
						},
						!1
					),
					this.el.addEventListener(
						'mousemove',
						function (e) {
							return i.drag(e);
						},
						!1
					);
			}
			return (
				n(e, [
					{
						key: 'dragStart',
						value: function e(t) {
							if (this.slide.classList.contains('zoomed')) {
								this.active = !1;
								return;
							}
							'touchstart' === t.type
								? ((this.initialX = t.touches[0].clientX - this.xOffset),
								  (this.initialY = t.touches[0].clientY - this.yOffset))
								: ((this.initialX = t.clientX - this.xOffset),
								  (this.initialY = t.clientY - this.yOffset));
							var i = t.target.nodeName.toLowerCase();
							if (
								t.target.classList.contains('nodrag') ||
								u(t.target, '.nodrag') ||
								-1 !== ['input', 'select', 'textarea', 'button', 'a'].indexOf(i)
							) {
								this.active = !1;
								return;
							}
							t.preventDefault(),
								(t.target === this.el || ('img' !== i && u(t.target, '.gslide-inline'))) &&
									((this.active = !0),
									this.el.classList.add('dragging'),
									(this.dragContainer = u(t.target, '.ginner-container')));
						},
					},
					{
						key: 'dragEnd',
						value: function e(t) {
							var i = this;
							t && t.preventDefault(),
								(this.initialX = 0),
								(this.initialY = 0),
								(this.currentX = null),
								(this.currentY = null),
								(this.initialX = null),
								(this.initialY = null),
								(this.xOffset = 0),
								(this.yOffset = 0),
								(this.active = !1),
								this.doSlideChange &&
									((this.instance.preventOutsideClick = !0),
									'right' == this.doSlideChange && this.instance.prevSlide(),
									'left' == this.doSlideChange && this.instance.nextSlide()),
								this.doSlideClose && this.instance.close(),
								this.toleranceReached || this.setTranslate(this.dragContainer, 0, 0, !0),
								setTimeout(function () {
									(i.instance.preventOutsideClick = !1),
										(i.toleranceReached = !1),
										(i.lastDirection = null),
										(i.dragging = !1),
										(i.el.isDragging = !1),
										i.el.classList.remove('dragging'),
										i.slide.classList.remove('dragging-nav'),
										(i.dragContainer.style.transform = ''),
										(i.dragContainer.style.transition = '');
								}, 100);
						},
					},
					{
						key: 'drag',
						value: function e(t) {
							if (this.active) {
								t.preventDefault(),
									this.slide.classList.add('dragging-nav'),
									'touchmove' === t.type
										? ((this.currentX = t.touches[0].clientX - this.initialX),
										  (this.currentY = t.touches[0].clientY - this.initialY))
										: ((this.currentX = t.clientX - this.initialX),
										  (this.currentY = t.clientY - this.initialY)),
									(this.xOffset = this.currentX),
									(this.yOffset = this.currentY),
									(this.el.isDragging = !0),
									(this.dragging = !0),
									(this.doSlideChange = !1),
									(this.doSlideClose = !1);
								var i = Math.abs(this.currentX),
									n = Math.abs(this.currentY);
								if (
									i > 0 &&
									i >= Math.abs(this.currentY) &&
									(!this.lastDirection || 'x' == this.lastDirection)
								) {
									(this.yOffset = 0),
										(this.lastDirection = 'x'),
										this.setTranslate(this.dragContainer, this.currentX, 0);
									var s = this.shouldChange();
									if (
										(!this.instance.settings.dragAutoSnap && s && (this.doSlideChange = s),
										this.instance.settings.dragAutoSnap && s)
									) {
										(this.instance.preventOutsideClick = !0),
											(this.toleranceReached = !0),
											(this.active = !1),
											(this.instance.preventOutsideClick = !0),
											this.dragEnd(null),
											'right' == s && this.instance.prevSlide(),
											'left' == s && this.instance.nextSlide();
										return;
									}
								}
								if (
									this.toleranceY > 0 &&
									n > 0 &&
									n >= i &&
									(!this.lastDirection || 'y' == this.lastDirection)
								) {
									(this.xOffset = 0),
										(this.lastDirection = 'y'),
										this.setTranslate(this.dragContainer, 0, this.currentY);
									var l = this.shouldClose();
									!this.instance.settings.dragAutoSnap && l && (this.doSlideClose = !0),
										this.instance.settings.dragAutoSnap && l && this.instance.close();
									return;
								}
							}
						},
					},
					{
						key: 'shouldChange',
						value: function e() {
							var t = !1;
							if (Math.abs(this.currentX) >= this.toleranceX) {
								var i = this.currentX > 0 ? 'right' : 'left';
								(('left' == i && this.slide !== this.slide.parentNode.lastChild) ||
									('right' == i && this.slide !== this.slide.parentNode.firstChild)) &&
									(t = i);
							}
							return t;
						},
					},
					{
						key: 'shouldClose',
						value: function e() {
							var t = !1;
							return Math.abs(this.currentY) >= this.toleranceY && (t = !0), t;
						},
					},
					{
						key: 'setTranslate',
						value: function e(t, i, n) {
							var s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
							s ? (t.style.transition = 'all .2s ease') : (t.style.transition = ''),
								(t.style.transform = 'translate3d('.concat(i, 'px, ').concat(n, 'px, 0)'));
						},
					},
				]),
				e
			);
		})();
	function M(e, t, i, n) {
		var s = this,
			l = e.querySelector('.ginner-container'),
			r = 'gvideo' + i,
			o = e.querySelector('.gslide-media'),
			a = this.getAllPlayers();
		h(l, 'gvideo-container'), o.insertBefore(y('<div class="gvideo-wrapper"></div>'), o.firstChild);
		var d = e.querySelector('.gvideo-wrapper');
		_(this.settings.plyr.css, 'Plyr');
		var c = t.href,
			u = null == t ? void 0 : t.videoProvider,
			g = !1;
		(o.style.maxWidth = t.width),
			_(this.settings.plyr.js, 'Plyr', function () {
				if (
					(!u && c.match(/vimeo\.com\/([0-9]*)/) && (u = 'vimeo'),
					!u &&
						(c.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) ||
							c.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) ||
							c.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) &&
						(u = 'youtube'),
					'local' === u || !u)
				) {
					u = 'local';
					var l = '<video id="' + r + '" ';
					(l += 'style="background:#000; max-width: '.concat(t.width, ';" ')),
						(l += 'preload="metadata" '),
						(l += 'x-webkit-airplay="allow" '),
						(l += 'playsinline '),
						(l += 'controls '),
						(l += 'class="gvideo-local">'),
						(l += '<source src="'.concat(c, '">')),
						(l += '</video>'),
						(g = y(l));
				}
				var o =
					g ||
					y(
						'<div id="'
							.concat(r, '" data-plyr-provider="')
							.concat(u, '" data-plyr-embed-id="')
							.concat(c, '"></div>')
					);
				h(d, ''.concat(u, '-video gvideo')),
					d.appendChild(o),
					d.setAttribute('data-id', r),
					d.setAttribute('data-index', i);
				var v = A(s.settings.plyr, 'config') ? s.settings.plyr.config : {},
					f = new Plyr('#' + r, v);
				f.on('ready', function (e) {
					(a[r] = e.detail.plyr), b(n) && n();
				}),
					$(
						function () {
							return e.querySelector('iframe') && 'true' == e.querySelector('iframe').dataset.ready;
						},
						function () {
							s.resize(e);
						}
					),
					f.on('enterfullscreen', W),
					f.on('exitfullscreen', W);
			});
	}
	function W(e) {
		var t = u(e.target, '.gslide-media');
		'enterfullscreen' === e.type && h(t, 'fullscreen'), 'exitfullscreen' === e.type && d(t, 'fullscreen');
	}
	function B(e, t, i, n) {
		var s,
			l = this,
			r = e.querySelector('.gslide-media'),
			o = !!A(t, 'href') && !!t.href && t.href.split('#').pop().trim(),
			d = !!A(t, 'content') && !!t.content && t.content;
		if (d && (S(d) && (s = y('<div class="ginlined-content">'.concat(d, '</div>'))), w(d))) {
			'none' == d.style.display && (d.style.display = 'block');
			var c = document.createElement('div');
			(c.className = 'ginlined-content'), c.appendChild(d), (s = c);
		}
		if (o) {
			var u = document.getElementById(o);
			if (!u) return !1;
			var g = u.cloneNode(!0);
			(g.style.height = t.height), (g.style.maxWidth = t.width), h(g, 'ginlined-content'), (s = g);
		}
		if (!s) return console.error('Unable to append inline slide content', t), !1;
		(r.style.height = t.height),
			(r.style.width = t.width),
			r.appendChild(s),
			(this.events['inlineclose' + o] = a('click', {
				onElement: r.querySelectorAll('.gtrigger-close'),
				withCallback: function e(t) {
					t.preventDefault(), l.close();
				},
			})),
			b(n) && n();
	}
	function H(e, t, i, n) {
		var s,
			l,
			r,
			o,
			a,
			d,
			c = e.querySelector('.gslide-media'),
			u =
				((l = (s = { url: t.href, callback: n }).url),
				(r = s.allow),
				(o = s.callback),
				(a = s.appendTo),
				((d = document.createElement('iframe')).className = 'vimeo-video gvideo'),
				(d.src = l),
				(d.style.width = '100%'),
				(d.style.height = '100%'),
				r && d.setAttribute('allow', r),
				(d.onload = function () {
					(d.onload = null), h(d, 'node-ready'), b(o) && o();
				}),
				a && a.appendChild(d),
				d);
		(c.parentNode.style.maxWidth = t.width), (c.parentNode.style.height = t.height), c.appendChild(u);
	}
	var V = (function () {
			function e() {
				var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				t(this, e),
					(this.defaults = {
						href: '',
						sizes: '',
						srcset: '',
						title: '',
						type: '',
						videoProvider: '',
						description: '',
						alt: '',
						descPosition: 'bottom',
						effect: '',
						width: '',
						height: '',
						content: !1,
						zoomable: !0,
						draggable: !0,
					}),
					T(i) && (this.defaults = l(this.defaults, i));
			}
			return (
				n(e, [
					{
						key: 'stripTags',
						value: function e(input) {
							var allowed = (
								('<a><br><b><i><u><p><ol><ul><li><strong><small>' + '')
									.toLowerCase()
									.match(/<[a-z][a-z0-9]*>/g) || []
							).join('');
							const tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
								commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
							return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
								return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
							});
						},
					},
					{
						key: 'sourceType',
						value: function e(t) {
							var i = t;
							return null !== (t = t.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/)
								? 'image'
								: t.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) ||
								  t.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) ||
								  t.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/) ||
								  t.match(/vimeo\.com\/([0-9]*)/) ||
								  null !== t.match(/\.(mp4|ogg|webm|mov)/)
								? 'video'
								: null !== t.match(/\.(mp3|wav|wma|aac|ogg)/)
								? 'audio'
								: t.indexOf('#') > -1 && '' !== i.split('#').pop().trim()
								? 'inline'
								: t.indexOf('goajax=true') > -1
								? 'ajax'
								: 'external';
						},
					},
					{
						key: 'parseConfig',
						value: function e(t, i) {
							var n,
								s = this,
								o = l({ descPosition: i.descPosition }, this.defaults);
							if (T(t) && !w(t)) {
								!A(t, 'type') &&
									(A(t, 'content') && t.content
										? (t.type = 'inline')
										: A(t, 'href') && (t.type = this.sourceType(t.href)));
								var a = l(o, t);
								return this.setSize(a, i), a;
							}
							var h = '',
								d = t.getAttribute('data-glightbox'),
								c = t.nodeName.toLowerCase();
							if (
								('a' === c && (h = t.href),
								'img' === c && ((h = t.src), (o.alt = t.alt)),
								(o.href = h),
								r(o, function (e, n) {
									A(i, n) && 'width' !== n && (o[n] = i[n]);
									var l = t.dataset[n];
									E(l) || (o[n] = s.sanitizeValue(l));
								}),
								o.content && (o.type = 'inline'),
								!o.type && h && (o.type = this.sourceType(h)),
								E(d))
							) {
								if (!o.title && 'a' == c) {
									var u = t.title;
									E(u) || '' === u || (o.title = u);
								}
								if (!o.title && 'img' == c) {
									var g = t.alt;
									E(g) || '' === g || (o.title = g);
								}
							} else {
								var v = [];
								r(o, function (e, t) {
									v.push(';\\s?' + t);
								}),
									(v = v.join('\\s?:|')),
									'' !== d.trim() &&
										r(o, function (e, t) {
											var i = RegExp('s?' + t + 's?:s?(.*?)(' + v + 's?:|$)'),
												n = d.match(i);
											if (n && n.length && n[1]) {
												var l = n[1].trim().replace(/;\s*$/, '');
												o[t] = s.sanitizeValue(l);
											}
										});
							}
							if (o.description && '.' === o.description.substring(0, 1)) {
								try {
									n = document.querySelector(o.description).innerHTML;
								} catch (f) {
									if (!(f instanceof DOMException)) throw f;
								}
								n && (o.description = n);
							}
							if (!o.description) {
								var p = t.querySelector('.glightbox-desc');
								p && (o.description = p.innerHTML);
							}
							if (o.description) {
								o.description = this.stripTags(o.description);
							}
							return this.setSize(o, i, t), (this.slideConfig = o), o;
						},
					},
					{
						key: 'setSize',
						value: function e(t, i) {
							var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
								s = 'video' == t.type ? this.checkSize(i.videosWidth) : this.checkSize(i.width),
								l = this.checkSize(i.height);
							return (
								(t.width = A(t, 'width') && '' !== t.width ? this.checkSize(t.width) : s),
								(t.height = A(t, 'height') && '' !== t.height ? this.checkSize(t.height) : l),
								n &&
									'image' == t.type &&
									((t._hasCustomWidth = !!n.dataset.width),
									(t._hasCustomHeight = !!n.dataset.height)),
								t
							);
						},
					},
					{
						key: 'checkSize',
						value: function e(t) {
							return O(t) ? ''.concat(t, 'px') : t;
						},
					},
					{
						key: 'sanitizeValue',
						value: function e(t) {
							return 'true' !== t && 'false' !== t ? t : 'true' === t;
						},
					},
				]),
				e
			);
		})(),
		j = (function () {
			function e(i, n, s) {
				t(this, e), (this.element = i), (this.instance = n), (this.index = s);
			}
			return (
				n(e, [
					{
						key: 'setContent',
						value: function e() {
							var t,
								i,
								n,
								s,
								l,
								r,
								o = this,
								a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
								d = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
							if (c(a, 'loaded')) return !1;
							var u = this.instance.settings,
								g = this.slideConfig,
								v = x();
							b(u.beforeSlideLoad) && u.beforeSlideLoad({ index: this.index, slide: a, player: !1 });
							var f = g.type,
								p = g.descPosition,
								y = a.querySelector('.gslide-media'),
								m = a.querySelector('.gslide-title'),
								$ = a.querySelector('.gslide-desc'),
								_ = a.querySelector('.gdesc-inner'),
								S = d,
								w = 'gSlideTitle_' + this.index,
								C = 'gSlideDesc_' + this.index;
							if (
								(b(u.afterSlideLoad) &&
									(S = function e() {
										b(d) && d(),
											u.afterSlideLoad({
												index: o.index,
												slide: a,
												player: o.instance.getSlidePlayerInstance(o.index),
											});
									}),
								'' == g.title && '' == g.description
									? _ && _.parentNode.parentNode.removeChild(_.parentNode)
									: (m && '' !== g.title
											? ((m.id = w), (m.innerHTML = g.title))
											: m.parentNode.removeChild(m),
									  $ && '' !== g.description
											? (($.id = C),
											  v && u.moreLength > 0
													? ((g.smallDescription = this.slideShortDesc(
															g.description,
															u.moreLength,
															u.moreText
													  )),
													  ($.innerHTML = g.smallDescription),
													  this.descriptionEvents($, g))
													: ($.innerHTML = g.description))
											: $.parentNode.removeChild($),
									  h(y.parentNode, 'desc-'.concat(p)),
									  h(_.parentNode, 'description-'.concat(p))),
								h(y, 'gslide-'.concat(f)),
								h(a, 'loaded'),
								'video' === f)
							) {
								M.apply(this.instance, [a, g, this.index, S]);
								return;
							}
							if ('external' === f) {
								H.apply(this, [a, g, this.index, S]);
								return;
							}
							if ('inline' === f) {
								B.apply(this.instance, [a, g, this.index, S]),
									g.draggable &&
										new D({
											dragEl: a.querySelector('.gslide-inline'),
											toleranceX: u.dragToleranceX,
											toleranceY: u.dragToleranceY,
											slide: a,
											instance: this.instance,
										});
								return;
							}
							if ('image' === f) {
								(t = a),
									(i = g),
									(n = this.index),
									(s = function () {
										var e = a.querySelector('img');
										g.draggable &&
											new D({
												dragEl: e,
												toleranceX: u.dragToleranceX,
												toleranceY: u.dragToleranceY,
												slide: a,
												instance: o.instance,
											}),
											g.zoomable &&
												e.naturalWidth > e.offsetWidth &&
												(h(e, 'zoomable'),
												new N(e, a, function () {
													o.instance.resize();
												})),
											b(S) && S();
									}),
									(l = t.querySelector('.gslide-media')),
									(r = new Image()).addEventListener(
										'load',
										function () {
											b(s) && s();
										},
										!1
									),
									(r.src = i.href),
									'' != i.sizes && '' != i.srcset && ((r.sizes = i.sizes), (r.srcset = i.srcset)),
									(r.alt = ''),
									E(i.alt) || '' === i.alt || (r.alt = i.alt),
									'' !== i.title && r.setAttribute('aria-labelledby', 'gSlideTitle_' + n),
									'' !== i.description && r.setAttribute('aria-describedby', 'gSlideDesc_' + n),
									i.hasOwnProperty('_hasCustomWidth') &&
										i._hasCustomWidth &&
										(r.style.width = i.width),
									i.hasOwnProperty('_hasCustomHeight') &&
										i._hasCustomHeight &&
										(r.style.height = i.height),
									l.insertBefore(r, l.firstChild);
								return;
							}
							b(S) && S();
						},
					},
					{
						key: 'slideShortDesc',
						value: function e(t) {
							var i,
								n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50,
								s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
								l = document.createElement('div');
							if (((l.innerHTML = t), (t = l.innerText.trim()).length <= n)) return t;
							var r = t.substr(0, n - 1);
							return s ? ((l = null), r + '... <a href="#" class="desc-more">' + s + '</a>') : r;
						},
					},
					{
						key: 'descriptionEvents',
						value: function e(t, i) {
							var n = this,
								s = t.querySelector('.desc-more');
							if (!s) return !1;
							a('click', {
								onElement: s,
								withCallback: function e(t, s) {
									t.preventDefault();
									var l = document.body,
										r = u(s, '.gslide-desc');
									if (!r) return !1;
									(r.innerHTML = i.description), h(l, 'gdesc-open');
									var o = a('click', {
										onElement: [l, u(r, '.gslide-description')],
										withCallback: function e(t, s) {
											'a' !== t.target.nodeName.toLowerCase() &&
												(d(l, 'gdesc-open'),
												h(l, 'gdesc-closed'),
												(r.innerHTML = i.smallDescription),
												n.descriptionEvents(r, i),
												setTimeout(function () {
													d(l, 'gdesc-closed');
												}, 400),
												o.destroy());
										},
									});
								},
							});
						},
					},
					{
						key: 'create',
						value: function e() {
							return y(this.instance.settings.slideHTML);
						},
					},
					{
						key: 'getConfig',
						value: function e() {
							w(this.element) ||
								this.element.hasOwnProperty('draggable') ||
								(this.element.draggable = this.instance.settings.draggable);
							var t = new V(this.instance.settings.slideExtraAttributes);
							return (
								(this.slideConfig = t.parseConfig(this.element, this.instance.settings)),
								this.slideConfig
							);
						},
					},
				]),
				e
			);
		})(),
		R = x(),
		G =
			null !== x() ||
			void 0 !== document.createTouch ||
			'ontouchstart' in window ||
			'onmsgesturechange' in window ||
			navigator.msMaxTouchPoints,
		F = document.getElementsByTagName('html')[0],
		Z = {
			selector: '.glightbox',
			elements: null,
			skin: 'clean',
			theme: 'clean',
			closeButton: !0,
			startAt: null,
			autoplayVideos: !0,
			autofocusVideos: !0,
			descPosition: 'bottom',
			width: '900px',
			height: '506px',
			videosWidth: '960px',
			beforeSlideChange: null,
			afterSlideChange: null,
			beforeSlideLoad: null,
			afterSlideLoad: null,
			slideInserted: null,
			slideRemoved: null,
			slideExtraAttributes: null,
			onOpen: null,
			onClose: null,
			loop: !1,
			zoomable: !0,
			draggable: !0,
			dragAutoSnap: !1,
			dragToleranceX: 40,
			dragToleranceY: 65,
			preload: !0,
			oneSlidePerOpen: !1,
			touchNavigation: !0,
			touchFollowAxis: !0,
			keyboardNavigation: !0,
			closeOnOutsideClick: !0,
			plugins: !1,
			plyr: {
				css: 'https://cdn.plyr.io/3.6.12/plyr.css',
				js: 'https://cdn.plyr.io/3.6.12/plyr.js',
				config: {
					ratio: '16:9',
					fullscreen: { enabled: !0, iosNative: !0 },
					youtube: { noCookie: !0, rel: 0, showinfo: 0, iv_load_policy: 3 },
					vimeo: { byline: !1, portrait: !1, title: !1, transparent: !1 },
				},
			},
			openEffect: 'zoom',
			closeEffect: 'zoom',
			slideEffect: 'slide',
			moreText: 'See more',
			moreLength: 60,
			cssEfects: {
				fade: { in: 'fadeIn', out: 'fadeOut' },
				zoom: { in: 'zoomIn', out: 'zoomOut' },
				slide: { in: 'slideInRight', out: 'slideOutLeft' },
				slideBack: { in: 'slideInLeft', out: 'slideOutRight' },
				none: { in: 'none', out: 'none' },
			},
			svg: {
				close: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
				next: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
				prev: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>',
			},
		};
	(Z.slideHTML =
		'<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>'),
		(Z.lightboxHTML =
			'<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>');
	var U = (function () {
		function e() {
			var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
			t(this, e),
				(this.customOptions = i),
				(this.settings = l(Z, i)),
				(this.effectsClasses = this.getAnimationClasses()),
				(this.videoPlayers = {}),
				(this.apiEvents = []),
				(this.fullElementsList = !1);
		}
		return (
			n(e, [
				{
					key: 'init',
					value: function e() {
						var t = this,
							i = this.getSelector();
						i &&
							(this.baseEvents = a('click', {
								onElement: i,
								withCallback: function e(i, n) {
									i.preventDefault(), t.open(n);
								},
							})),
							(this.elements = this.getElements());
					},
				},
				{
					key: 'open',
					value: function e() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
							i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
						if (0 === this.elements.length) return !1;
						(this.activeSlide = null), (this.prevActiveSlideIndex = null), (this.prevActiveSlide = null);
						var n = O(i) ? i : this.settings.startAt;
						if (w(t)) {
							var s = t.getAttribute('data-gallery');
							s &&
								((this.fullElementsList = this.elements),
								(this.elements = this.getGalleryElements(this.elements, s))),
								E(n) && (n = this.getElementIndex(t)) < 0 && (n = 0);
						}
						O(n) || (n = 0),
							this.build(),
							g(
								this.overlay,
								'none' === this.settings.openEffect ? 'none' : this.settings.cssEfects.fade.in
							);
						var l = document.body,
							r = window.innerWidth - document.documentElement.clientWidth;
						if (r > 0) {
							var o = document.createElement('style');
							(o.type = 'text/css'),
								(o.className = 'gcss-styles'),
								(o.innerText = '.gscrollbar-fixer {margin-right: '.concat(r, 'px}')),
								document.head.appendChild(o),
								h(l, 'gscrollbar-fixer');
						}
						h(l, 'glightbox-open'),
							h(F, 'glightbox-open'),
							R && (h(document.body, 'glightbox-mobile'), (this.settings.slideEffect = 'slide')),
							this.showSlide(n, !0),
							1 === this.elements.length
								? (h(this.prevButton, 'glightbox-button-hidden'),
								  h(this.nextButton, 'glightbox-button-hidden'))
								: (d(this.prevButton, 'glightbox-button-hidden'),
								  d(this.nextButton, 'glightbox-button-hidden')),
							(this.lightboxOpen = !0),
							this.trigger('open'),
							b(this.settings.onOpen) && this.settings.onOpen(),
							G &&
								this.settings.touchNavigation &&
								(function e(t) {
									if (t.events.hasOwnProperty('touch')) return !1;
									var i,
										n,
										s,
										l = m(),
										r = l.width,
										o = l.height,
										a = !1,
										g = null,
										f = null,
										p = null,
										y = !1,
										$ = 1,
										_ = 1,
										x = !1,
										b = !1,
										S = null,
										w = null,
										C = null,
										k = null,
										T = 0,
										E = 0,
										A = !1,
										L = !1,
										O = {},
										P = {},
										I = 0,
										z = 0,
										X = document.getElementById('glightbox-slider'),
										N = document.querySelector('.goverlay'),
										D = new Y(X, {
											touchStart: function e(i) {
												(a = !0),
													(c(i.targetTouches[0].target, 'ginner-container') ||
														u(i.targetTouches[0].target, '.gslide-desc') ||
														'a' == i.targetTouches[0].target.nodeName.toLowerCase()) &&
														(a = !1),
													u(i.targetTouches[0].target, '.gslide-inline') &&
														!c(i.targetTouches[0].target.parentNode, 'gslide-inline') &&
														(a = !1),
													a &&
														((P = i.targetTouches[0]),
														(O.pageX = i.targetTouches[0].pageX),
														(O.pageY = i.targetTouches[0].pageY),
														(I = i.targetTouches[0].clientX),
														(z = i.targetTouches[0].clientY),
														(f = (g = t.activeSlide).querySelector('.gslide-media')),
														(s = g.querySelector('.gslide-inline')),
														(p = null),
														c(f, 'gslide-image') && (p = f.querySelector('img')),
														(window.innerWidth ||
															document.documentElement.clientWidth ||
															document.body.clientWidth) > 769 &&
															(f = g.querySelector('.ginner-container')),
														d(N, 'greset'),
														(!(i.pageX > 20) || !(i.pageX < window.innerWidth - 20)) &&
															i.preventDefault());
											},
											touchMove: function e(l) {
												if (a) {
													if (((P = l.targetTouches[0]), !x && !b)) {
														if (
															s &&
															s.offsetHeight > o &&
															13 >= Math.abs(O.pageX - P.pageX)
														)
															return !1;
														y = !0;
														var h,
															d,
															c = l.targetTouches[0].clientX;
														if (
															(Math.abs(I - c) > Math.abs(z - l.targetTouches[0].clientY)
																? ((A = !1), (L = !0))
																: ((L = !1), (A = !0)),
															(T = (100 * (i = P.pageX - O.pageX)) / r),
															(E = (100 * (n = P.pageY - O.pageY)) / o),
															A &&
																p &&
																((h = 1 - Math.abs(n) / o),
																(N.style.opacity = h),
																t.settings.touchFollowAxis && (T = 0)),
															L &&
																((h = 1 - Math.abs(i) / r),
																(f.style.opacity = h),
																t.settings.touchFollowAxis && (E = 0)),
															!p)
														)
															return v(f, 'translate3d('.concat(T, '%, 0, 0)'));
														v(f, 'translate3d('.concat(T, '%, ').concat(E, '%, 0)'));
													}
												}
											},
											touchEnd: function e() {
												if (a) {
													if (((y = !1), b || x)) {
														(C = S), (k = w);
														return;
													}
													var i = Math.abs(parseInt(E)),
														n = Math.abs(parseInt(T));
													if (i > 29 && p) {
														t.close();
														return;
													}
													if (i < 29 && n < 25)
														return h(N, 'greset'), (N.style.opacity = 1), q(f);
												}
											},
											multipointEnd: function e() {
												setTimeout(function () {
													x = !1;
												}, 50);
											},
											multipointStart: function e() {
												(x = !0), ($ = _ || 1);
											},
											pinch: function e(t) {
												if (!p || y) return !1;
												(x = !0), (p.scaleX = p.scaleY = $ * t.zoom);
												var i = $ * t.zoom;
												if (((b = !0), i <= 1)) {
													(b = !1),
														(i = 1),
														(k = null),
														(C = null),
														(S = null),
														(w = null),
														p.setAttribute('style', '');
													return;
												}
												i > 4.5 && (i = 4.5),
													(p.style.transform = 'scale3d('.concat(i, ', ').concat(i, ', 1)')),
													(_ = i);
											},
											pressMove: function e(t) {
												if (b && !x) {
													var i = P.pageX - O.pageX,
														n = P.pageY - O.pageY;
													C && (i += C), k && (n += k), (S = i), (w = n);
													var s = 'translate3d('.concat(i, 'px, ').concat(n, 'px, 0)');
													_ && (s += ' scale3d('.concat(_, ', ').concat(_, ', 1)')), v(p, s);
												}
											},
											swipe: function e(i) {
												if (!b) {
													if (x) {
														x = !1;
														return;
													}
													if ('Left' == i.direction) {
														if (t.index == t.elements.length - 1 && !t.loop()) return q(f);
														t.nextSlide();
													}
													if ('Right' == i.direction) {
														if (0 == t.index && !t.loop()) return q(f);
														t.prevSlide();
													}
												}
											},
										});
									t.events.touch = D;
								})(this),
							this.settings.keyboardNavigation && ! this.settings.autofocusVideos &&
								(function e(t) {
									if (t.events.hasOwnProperty('keyboard')) return !1;
									t.events.keyboard = a('keydown', {
										onElement: window,
										withCallback: function e(i, n) {
											var s = (i = i || window.event).keyCode;
											if (9 == s) {
												// If not a video player.
												var l = document.querySelector('.gbtn.focused');
												if (!l) {
													var r =
														!!document.activeElement &&
														!!document.activeElement.nodeName &&
														document.activeElement.nodeName.toLocaleLowerCase();
													if ('input' == r || 'textarea' == r || 'button' == r) return;
												}
												i.preventDefault();
												var o = document.querySelectorAll('.gbtn[data-taborder]');
												if (!o || o.length <= 0) return;
												if (!l) {
													var a = P();
													a && (a.focus(), h(a, 'focused'));
													return;
												}
												var c = P(l.getAttribute('data-taborder'));
												d(l, 'focused'), c && (c.focus(), h(c, 'focused'));
											}
											39 == s && t.nextSlide(), 37 == s && t.prevSlide(), 27 == s && t.close();
										},
									});
								})(this);
							this.settings.keyboardNavigation && this.settings.autofocusVideos &&
								(function e(t) {
									if (t.events.hasOwnProperty('keyboard')) return !1;
									t.events.keyboard = a('keydown', {
										onElement: window,
										withCallback: function e(i, n) {
											var s = (i = i || window.event).keyCode;
											if (9 == s) {
												const focusableElementsString =
													'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]):not(.disabled):not(hidden):not([data-plyr=airplay]):not([data-plyr=captions]):not([data-plyr=pip])';
												let offCanvasArea = document.querySelector('.glightbox-container');
												let focusableElements = offCanvasArea.querySelectorAll(focusableElementsString);
												focusableElements = Array.prototype.slice.call(focusableElements);
												let firstFocusableElement = focusableElements[0];
												let lastFocusableElement = focusableElements[focusableElements.length - 1];
												if (i.shiftKey) {
													if (document.activeElement === firstFocusableElement) {
														i.preventDefault();
														lastFocusableElement.focus();
													}
												} else {
													if (document.activeElement === lastFocusableElement) {
														i.preventDefault();
														firstFocusableElement.focus();
													}
												}
												if ( i.target.hasAttribute('data-plyr') && i.target.getAttribute('data-plyr') === 'fullscreen' ) {
													// Move to large play button.
													let largePlayButton = document.querySelector('button.plyr__control.plyr__control--overlaid:not(.plyr__control--pressed)');
													if ( largePlayButton ) {
														largePlayButton.focus();
													}
												}
											}
											39 == s && t.nextSlide(), 37 == s && t.prevSlide(), 27 == s && t.close();
										},
									});
								})(this);
					},
				},
				{
					key: 'openAt',
					value: function e() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
						this.open(null, t);
					},
				},
				{
					key: 'showSlide',
					value: function e() {
						var t = this,
							i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
							n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
						f(this.loader), (this.index = parseInt(i));
						var s = this.slidesContainer.querySelector('.current');
						s && d(s, 'current'), this.slideAnimateOut();
						var l = this.slidesContainer.querySelectorAll('.gslide')[i];
						if (c(l, 'loaded')) this.slideAnimateIn(l, n), p(this.loader);
						else {
							f(this.loader);
							var r = this.elements[i],
								o = {
									index: this.index,
									slide: l,
									slideNode: l,
									slideConfig: r.slideConfig,
									slideIndex: this.index,
									trigger: r.node,
									player: null,
								};
							this.trigger('slide_before_load', o),
								r.instance.setContent(l, function () {
									p(t.loader), t.resize(), t.slideAnimateIn(l, n), t.trigger('slide_after_load', o);
								});
						}
						(this.slideDescription = l.querySelector('.gslide-description')),
							(this.slideDescriptionContained =
								this.slideDescription && c(this.slideDescription.parentNode, 'gslide-media')),
							this.settings.preload && (this.preloadSlide(i + 1), this.preloadSlide(i - 1)),
							this.updateNavigationClasses(),
							(this.activeSlide = l);
					},
				},
				{
					key: 'preloadSlide',
					value: function e(t) {
						var i = this;
						if (t < 0 || t > this.elements.length - 1 || E(this.elements[t])) return !1;
						var n = this.slidesContainer.querySelectorAll('.gslide')[t];
						if (c(n, 'loaded')) return !1;
						var s = this.elements[t],
							l = s.type,
							r = {
								index: t,
								slide: n,
								slideNode: n,
								slideConfig: s.slideConfig,
								slideIndex: t,
								trigger: s.node,
								player: null,
							};
						this.trigger('slide_before_load', r),
							'video' === l || 'external' === l
								? setTimeout(function () {
										s.instance.setContent(n, function () {
											i.trigger('slide_after_load', r);
										});
								  }, 200)
								: s.instance.setContent(n, function () {
										i.trigger('slide_after_load', r);
								  });
					},
				},
				{
					key: 'prevSlide',
					value: function e() {
						this.goToSlide(this.index - 1);
					},
				},
				{
					key: 'nextSlide',
					value: function e() {
						this.goToSlide(this.index + 1);
					},
				},
				{
					key: 'goToSlide',
					value: function e() {
						var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						if (
							((this.prevActiveSlide = this.activeSlide),
							(this.prevActiveSlideIndex = this.index),
							!this.loop() && (t < 0 || t > this.elements.length - 1))
						)
							return !1;
						t < 0 ? (t = this.elements.length - 1) : t >= this.elements.length && (t = 0),
							this.showSlide(t);
					},
				},
				{
					key: 'insertSlide',
					value: function e() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
							i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
						i < 0 && (i = this.elements.length);
						var n = new j(t, this, i),
							s = n.getConfig(),
							r = l({}, s),
							o = n.create(),
							a = this.elements.length - 1;
						(r.index = i),
							(r.node = !1),
							(r.instance = n),
							(r.slideConfig = s),
							this.elements.splice(i, 0, r);
						var h = null,
							d = null;
						if (this.slidesContainer) {
							if (i > a) this.slidesContainer.appendChild(o);
							else {
								var c = this.slidesContainer.querySelectorAll('.gslide')[i];
								this.slidesContainer.insertBefore(o, c);
							}
							((this.settings.preload && 0 == this.index && 0 == i) ||
								this.index - 1 == i ||
								this.index + 1 == i) &&
								this.preloadSlide(i),
								0 === this.index && 0 === i && (this.index = 1),
								this.updateNavigationClasses(),
								(h = this.slidesContainer.querySelectorAll('.gslide')[i]),
								(d = this.getSlidePlayerInstance(i)),
								(r.slideNode = h);
						}
						this.trigger('slide_inserted', {
							index: i,
							slide: h,
							slideNode: h,
							slideConfig: s,
							slideIndex: i,
							trigger: null,
							player: d,
						}),
							b(this.settings.slideInserted) &&
								this.settings.slideInserted({ index: i, slide: h, player: d });
					},
				},
				{
					key: 'removeSlide',
					value: function e() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
						if (t < 0 || t > this.elements.length - 1) return !1;
						var i = this.slidesContainer && this.slidesContainer.querySelectorAll('.gslide')[t];
						i &&
							(this.getActiveSlideIndex() == t &&
								(t == this.elements.length - 1 ? this.prevSlide() : this.nextSlide()),
							i.parentNode.removeChild(i)),
							this.elements.splice(t, 1),
							this.trigger('slide_removed', t),
							b(this.settings.slideRemoved) && this.settings.slideRemoved(t);
					},
				},
				{
					key: 'slideAnimateIn',
					value: function e(t, i) {
						var n = this,
							s = t.querySelector('.gslide-media'),
							l = t.querySelector('.gslide-description'),
							r = {
								index: this.prevActiveSlideIndex,
								slide: this.prevActiveSlide,
								slideNode: this.prevActiveSlide,
								slideIndex: this.prevActiveSlide,
								slideConfig: E(this.prevActiveSlideIndex)
									? null
									: this.elements[this.prevActiveSlideIndex].slideConfig,
								trigger: E(this.prevActiveSlideIndex)
									? null
									: this.elements[this.prevActiveSlideIndex].node,
								player: this.getSlidePlayerInstance(this.prevActiveSlideIndex),
							},
							o = {
								index: this.index,
								slide: this.activeSlide,
								slideNode: this.activeSlide,
								slideConfig: this.elements[this.index].slideConfig,
								slideIndex: this.index,
								trigger: this.elements[this.index].node,
								player: this.getSlidePlayerInstance(this.index),
							};
						if ((s.offsetWidth > 0 && l && (p(l), (l.style.display = '')), d(t, this.effectsClasses), i))
							g(t, this.settings.cssEfects[this.settings.openEffect].in, function () {
								n.settings.autoplayVideos && n.slidePlayerPlay(t),
									n.trigger('slide_changed', { prev: r, current: o }),
									b(n.settings.afterSlideChange) && n.settings.afterSlideChange.apply(n, [r, o]);
							});
						else {
							var a = this.settings.slideEffect,
								c = 'none' !== a ? this.settings.cssEfects[a].in : a;
							this.prevActiveSlideIndex > this.index &&
								'slide' == this.settings.slideEffect &&
								(c = this.settings.cssEfects.slideBack.in),
								g(t, c, function () {
									n.settings.autoplayVideos && n.slidePlayerPlay(t),
										n.trigger('slide_changed', { prev: r, current: o }),
										b(n.settings.afterSlideChange) && n.settings.afterSlideChange.apply(n, [r, o]);
								});
						}
						setTimeout(function () {
							n.resize(t);
						}, 100),
							h(t, 'current');
					},
				},
				{
					key: 'slideAnimateOut',
					value: function e() {
						if (!this.prevActiveSlide) return !1;
						var t = this.prevActiveSlide;
						d(t, this.effectsClasses), h(t, 'prev');
						var i = this.settings.slideEffect,
							n = 'none' !== i ? this.settings.cssEfects[i].out : i;
						this.slidePlayerPause(t),
							this.trigger('slide_before_change', {
								prev: {
									index: this.prevActiveSlideIndex,
									slide: this.prevActiveSlide,
									slideNode: this.prevActiveSlide,
									slideIndex: this.prevActiveSlideIndex,
									slideConfig: E(this.prevActiveSlideIndex)
										? null
										: this.elements[this.prevActiveSlideIndex].slideConfig,
									trigger: E(this.prevActiveSlideIndex)
										? null
										: this.elements[this.prevActiveSlideIndex].node,
									player: this.getSlidePlayerInstance(this.prevActiveSlideIndex),
								},
								current: {
									index: this.index,
									slide: this.activeSlide,
									slideNode: this.activeSlide,
									slideIndex: this.index,
									slideConfig: this.elements[this.index].slideConfig,
									trigger: this.elements[this.index].node,
									player: this.getSlidePlayerInstance(this.index),
								},
							}),
							b(this.settings.beforeSlideChange) &&
								this.settings.beforeSlideChange.apply(this, [
									{
										index: this.prevActiveSlideIndex,
										slide: this.prevActiveSlide,
										player: this.getSlidePlayerInstance(this.prevActiveSlideIndex),
									},
									{
										index: this.index,
										slide: this.activeSlide,
										player: this.getSlidePlayerInstance(this.index),
									},
								]),
							this.prevActiveSlideIndex > this.index &&
								'slide' == this.settings.slideEffect &&
								(n = this.settings.cssEfects.slideBack.out),
							g(t, n, function () {
								var e = t.querySelector('.ginner-container'),
									i = t.querySelector('.gslide-media'),
									n = t.querySelector('.gslide-description');
								(e.style.transform = ''),
									(i.style.transform = ''),
									d(i, 'greset'),
									(i.style.opacity = ''),
									n && (n.style.opacity = ''),
									d(t, 'prev');
							});
					},
				},
				{
					key: 'getAllPlayers',
					value: function e() {
						return this.videoPlayers;
					},
				},
				{
					key: 'getSlidePlayerInstance',
					value: function e(t) {
						var i = 'gvideo' + t,
							n = this.getAllPlayers();
						return !!A(n, i) && !!n[i] && n[i];
					},
				},
				{
					key: 'stopSlideVideo',
					value: function e(t) {
						if (w(t)) {
							var i = t.querySelector('.gvideo-wrapper');
							i && (t = i.getAttribute('data-index'));
						}
						console.log('stopSlideVideo is deprecated, use slidePlayerPause');
						var n = this.getSlidePlayerInstance(t);
						n && n.playing && n.pause();
					},
				},
				{
					key: 'slidePlayerPause',
					value: function e(t) {
						if (w(t)) {
							var i = t.querySelector('.gvideo-wrapper');
							i && (t = i.getAttribute('data-index'));
						}
						var n = this.getSlidePlayerInstance(t);
						n && n.playing && n.pause();
					},
				},
				{
					key: 'playSlideVideo',
					value: function e(t) {
						if (w(t)) {
							var i = t.querySelector('.gvideo-wrapper');
							i && (t = i.getAttribute('data-index'));
						}
						console.log('playSlideVideo is deprecated, use slidePlayerPlay');
						var n = this.getSlidePlayerInstance(t);
						n && !n.playing && n.play();
					},
				},
				{
					key: 'slidePlayerPlay',
					value: function e(t) {
						if (!R || (null !== (i = this.settings.plyr.config) && void 0 !== i && i.muted)) {
							if (w(t)) {
								var i,
									n = t.querySelector('.gvideo-wrapper');
								n && (t = n.getAttribute('data-index'));
							}
							var s = this.getSlidePlayerInstance(t);
							s &&
								!s.playing &&
								(s.play(), this.settings.autofocusVideos && s.elements.container.focus());
						}
					},
				},
				{
					key: 'setElements',
					value: function e(t) {
						var i = this;
						this.settings.elements = !1;
						var n = [];
						t &&
							t.length &&
							r(t, function (e, t) {
								var s = new j(e, i, t),
									r = s.getConfig(),
									o = l({}, r);
								(o.slideConfig = r), (o.instance = s), (o.index = t), n.push(o);
							}),
							(this.elements = n),
							this.lightboxOpen &&
								((this.slidesContainer.innerHTML = ''),
								this.elements.length &&
									(r(this.elements, function () {
										var e = y(i.settings.slideHTML);
										i.slidesContainer.appendChild(e);
									}),
									this.showSlide(0, !0)));
					},
				},
				{
					key: 'getElementIndex',
					value: function e(t) {
						var i = !1;
						return (
							r(this.elements, function (e, n) {
								if (A(e, 'node') && e.node == t) return (i = n), !0;
							}),
							i
						);
					},
				},
				{
					key: 'getElements',
					value: function e() {
						var t = this,
							i = [];
						(this.elements = this.elements ? this.elements : []),
							!E(this.settings.elements) &&
								C(this.settings.elements) &&
								this.settings.elements.length &&
								r(this.settings.elements, function (e, n) {
									var s = new j(e, t, n),
										r = s.getConfig(),
										o = l({}, r);
									(o.node = !1), (o.index = n), (o.instance = s), (o.slideConfig = r), i.push(o);
								});
						var n = !1;
						return (
							this.getSelector() && (n = document.querySelectorAll(this.getSelector())),
							n &&
								r(n, function (e, n) {
									var s = new j(e, t, n),
										r = s.getConfig(),
										o = l({}, r);
									(o.node = e),
										(o.index = n),
										(o.instance = s),
										(o.slideConfig = r),
										(o.gallery = e.getAttribute('data-gallery')),
										i.push(o);
								}),
							i
						);
					},
				},
				{
					key: 'getGalleryElements',
					value: function e(t, i) {
						return t.filter(function (e) {
							return e.gallery == i;
						});
					},
				},
				{
					key: 'getSelector',
					value: function e() {
						return (
							!this.settings.elements &&
							(this.settings.selector && 'data-' == this.settings.selector.substring(0, 5)
								? '*['.concat(this.settings.selector, ']')
								: this.settings.selector)
						);
					},
				},
				{
					key: 'getActiveSlide',
					value: function e() {
						return this.slidesContainer.querySelectorAll('.gslide')[this.index];
					},
				},
				{
					key: 'getActiveSlideIndex',
					value: function e() {
						return this.index;
					},
				},
				{
					key: 'getAnimationClasses',
					value: function e() {
						var t = [];
						for (var i in this.settings.cssEfects)
							if (this.settings.cssEfects.hasOwnProperty(i)) {
								var n = this.settings.cssEfects[i];
								t.push('g'.concat(n.in)), t.push('g'.concat(n.out));
							}
						return t.join(' ');
					},
				},
				{
					key: 'build',
					value: function e() {
						var t = this;
						if (this.built) return !1;
						var i = document.body.childNodes,
							n = [];
						r(i, function (e) {
							e.parentNode == document.body &&
								'#' !== e.nodeName.charAt(0) &&
								e.hasAttribute &&
								!e.hasAttribute('aria-hidden') &&
								(n.push(e), e.setAttribute('aria-hidden', 'true'));
						});
						var s = A(this.settings.svg, 'next') ? this.settings.svg.next : '',
							l = A(this.settings.svg, 'prev') ? this.settings.svg.prev : '',
							o = A(this.settings.svg, 'close') ? this.settings.svg.close : '',
							d = this.settings.lightboxHTML;
						(d = (d = (d = d.replace(/{nextSVG}/g, s)).replace(/{prevSVG}/g, l)).replace(/{closeSVG}/g, o)),
							(d = y(d)),
							document.body.appendChild(d);
						var g = document.getElementById('glightbox-body');
						this.modal = g;
						var v = g.querySelector('.gclose');
						(this.prevButton = g.querySelector('.gprev')),
							(this.nextButton = g.querySelector('.gnext')),
							(this.overlay = g.querySelector('.goverlay')),
							(this.loader = g.querySelector('.gloader')),
							(this.slidesContainer = document.getElementById('glightbox-slider')),
							(this.bodyHiddenChildElms = n),
							(this.events = {}),
							h(this.modal, 'glightbox-' + this.settings.skin),
							this.settings.closeButton &&
								v &&
								(this.events.close = a('click', {
									onElement: v,
									withCallback: function e(i, n) {
										i.preventDefault(), t.close();
									},
								})),
							v && !this.settings.closeButton && v.parentNode.removeChild(v),
							this.nextButton &&
								(this.events.next = a('click', {
									onElement: this.nextButton,
									withCallback: function e(i, n) {
										i.preventDefault(), t.nextSlide();
									},
								})),
							this.prevButton &&
								(this.events.prev = a('click', {
									onElement: this.prevButton,
									withCallback: function e(i, n) {
										i.preventDefault(), t.prevSlide();
									},
								})),
							this.settings.closeOnOutsideClick &&
								(this.events.outClose = a('click', {
									onElement: g,
									withCallback: function e(i, n) {
										t.preventOutsideClick ||
											c(document.body, 'glightbox-mobile') ||
											u(i.target, '.ginner-container') ||
											u(i.target, '.gbtn') ||
											c(i.target, 'gnext') ||
											c(i.target, 'gprev') ||
											t.close();
									},
								})),
							r(this.elements, function (e, i) {
								t.slidesContainer.appendChild(e.instance.create()),
									(e.slideNode = t.slidesContainer.querySelectorAll('.gslide')[i]);
							}),
							G && h(document.body, 'glightbox-touch'),
							(this.events.resize = a('resize', {
								onElement: window,
								withCallback: function e() {
									t.resize();
								},
							})),
							(this.built = !0);
					},
				},
				{
					key: 'resize',
					value: function e() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
						if (!(!(t = t || this.activeSlide) || c(t, 'zoomed'))) {
							var i = m(),
								n = t.querySelector('.gvideo-wrapper'),
								s = t.querySelector('.gslide-image'),
								l = this.slideDescription,
								r = i.width,
								o = i.height;
							if (
								(r <= 768 ? h(document.body, 'glightbox-mobile') : d(document.body, 'glightbox-mobile'),
								n || s)
							) {
								var a = !1;
								if (
									(l &&
										(c(l, 'description-bottom') || c(l, 'description-top')) &&
										!c(l, 'gabsolute') &&
										(a = !0),
									s)
								) {
									if (r <= 768) s.querySelector('img');
									else if (a) {
										var u = l.offsetHeight,
											g = s.querySelector('img');
										g.setAttribute('style', 'max-height: calc(100vh - '.concat(u, 'px)')),
											l.setAttribute('style', 'max-width: '.concat(g.offsetWidth, 'px;'));
									}
								}
								if (n) {
									var v = A(this.settings.plyr.config, 'ratio')
										? this.settings.plyr.config.ratio
										: '';
									if (!v) {
										var f = n.clientWidth,
											p = n.clientHeight,
											y = f / p;
										v = ''.concat(f / y, ':').concat(p / y);
									}
									var $ = v.split(':'),
										_ = this.settings.videosWidth,
										x = this.settings.videosWidth,
										b =
											(x =
												O(_) || -1 !== _.indexOf('px')
													? parseInt(_)
													: -1 !== _.indexOf('vw')
													? (r * parseInt(_)) / 100
													: -1 !== _.indexOf('vh')
													? (o * parseInt(_)) / 100
													: -1 !== _.indexOf('%')
													? (r * parseInt(_)) / 100
													: parseInt(n.clientWidth)) /
											(parseInt($[0]) / parseInt($[1]));
									if (
										((b = Math.floor(b)),
										a && (o -= l.offsetHeight),
										x > r || b > o || (o < b && r > x))
									) {
										var S = n.offsetWidth,
											w = n.offsetHeight,
											C = o / w,
											k = { width: S * C, height: w * C };
										n.parentNode.setAttribute('style', 'max-width: '.concat(k.width, 'px')),
											a && l.setAttribute('style', 'max-width: '.concat(k.width, 'px;'));
									} else
										(n.parentNode.style.maxWidth = ''.concat(_)),
											a && l.setAttribute('style', 'max-width: '.concat(_, ';'));
								}
							}
						}
					},
				},
				{
					key: 'reload',
					value: function e() {
						this.init();
					},
				},
				{
					key: 'updateNavigationClasses',
					value: function e() {
						var t = this.loop();
						d(this.nextButton, 'disabled'),
							d(this.prevButton, 'disabled'),
							0 == this.index && this.elements.length - 1 == 0
								? (h(this.prevButton, 'disabled'), h(this.nextButton, 'disabled'))
								: 0 !== this.index || t
								? this.index !== this.elements.length - 1 || t || h(this.nextButton, 'disabled')
								: h(this.prevButton, 'disabled');
					},
				},
				{
					key: 'loop',
					value: function e() {
						var e = A(this.settings, 'loopAtEnd') ? this.settings.loopAtEnd : null;
						return A(this.settings, 'loop') ? this.settings.loop : e;
					},
				},
				{
					key: 'close',
					value: function e() {
						var t = this;
						if (!this.lightboxOpen) {
							if (this.events) {
								for (var i in this.events) this.events.hasOwnProperty(i) && this.events[i].destroy();
								this.events = null;
							}
							return !1;
						}
						if (this.closing) return !1;
						(this.closing = !0),
							this.slidePlayerPause(this.activeSlide),
							this.fullElementsList && (this.elements = this.fullElementsList),
							this.bodyHiddenChildElms.length &&
								r(this.bodyHiddenChildElms, function (e) {
									e.removeAttribute('aria-hidden');
								}),
							h(this.modal, 'glightbox-closing'),
							g(
								this.overlay,
								'none' == this.settings.openEffect ? 'none' : this.settings.cssEfects.fade.out
							),
							g(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, function () {
								if (
									((t.activeSlide = null),
									(t.prevActiveSlideIndex = null),
									(t.prevActiveSlide = null),
									(t.built = !1),
									t.events)
								) {
									for (var e in t.events) t.events.hasOwnProperty(e) && t.events[e].destroy();
									t.events = null;
								}
								var i = document.body;
								d(F, 'glightbox-open'),
									d(
										i,
										'glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer'
									),
									t.modal.parentNode.removeChild(t.modal),
									t.trigger('close'),
									b(t.settings.onClose) && t.settings.onClose();
								var n = document.querySelector('.gcss-styles');
								n && n.parentNode.removeChild(n), (t.lightboxOpen = !1), (t.closing = null);
							});
					},
				},
				{
					key: 'destroy',
					value: function e() {
						this.close(), this.clearAllEvents(), this.baseEvents && this.baseEvents.destroy();
					},
				},
				{
					key: 'on',
					value: function e(t, i) {
						var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
						if (!t || !b(i)) throw TypeError('Event name and callback must be defined');
						this.apiEvents.push({ evt: t, once: n, callback: i });
					},
				},
				{
					key: 'once',
					value: function e(t, i) {
						this.on(t, i, !0);
					},
				},
				{
					key: 'trigger',
					value: function e(t) {
						var i = this,
							n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
							s = [];
						r(this.apiEvents, function (e, i) {
							var l = e.evt,
								r = e.once,
								o = e.callback;
							l == t && (o(n), r && s.push(i));
						}),
							s.length &&
								r(s, function (e) {
									return i.apiEvents.splice(e, 1);
								});
					},
				},
				{
					key: 'clearAllEvents',
					value: function e() {
						this.apiEvents.splice(0, this.apiEvents.length);
					},
				},
				{
					key: 'version',
					value: function e() {
						return '3.1.0';
					},
				},
			]),
			e
		);
	})();
	return function e() {
		var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
			i = new U(t);
		return i.init(), i;
	};
});
