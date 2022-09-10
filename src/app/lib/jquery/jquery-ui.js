!(function (r, h) {
  var t,
    e,
    i = 0,
    s = /^ui-id-\d+$/;
  function n(t, e) {
    var i,
      s,
      n,
      o = t.nodeName.toLowerCase();
    return 'area' === o
      ? ((s = (i = t.parentNode).name),
        !(!t.href || !s || 'map' !== i.nodeName.toLowerCase()) &&
          !!(n = r('img[usemap=#' + s + ']')[0]) &&
          a(n))
      : (/input|select|textarea|button|object/.test(o)
          ? !t.disabled
          : ('a' === o && t.href) || e) && a(t);
  }
  function a(t) {
    return (
      r.expr.filters.visible(t) &&
      !r(t)
        .parents()
        .addBack()
        .filter(function () {
          return 'hidden' === r.css(this, 'visibility');
        }).length
    );
  }
  (r.ui = r.ui || {}),
    r.extend(r.ui, {
      version: '1.10.3',
      keyCode: {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        NUMPAD_ADD: 107,
        NUMPAD_DECIMAL: 110,
        NUMPAD_DIVIDE: 111,
        NUMPAD_ENTER: 108,
        NUMPAD_MULTIPLY: 106,
        NUMPAD_SUBTRACT: 109,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38,
      },
    }),
    r.fn.extend({
      focus:
        ((t = r.fn.focus),
        function (e, i) {
          return 'number' == typeof e
            ? this.each(function () {
                var t = this;
                setTimeout(function () {
                  r(t).focus(), i && i.call(t);
                }, e);
              })
            : t.apply(this, arguments);
        }),
      scrollParent: function () {
        var t;
        return (
          (t =
            (r.ui.ie && /(static|relative)/.test(this.css('position'))) ||
            /absolute/.test(this.css('position'))
              ? this.parents()
                  .filter(function () {
                    return (
                      /(relative|absolute|fixed)/.test(
                        r.css(this, 'position')
                      ) &&
                      /(auto|scroll)/.test(
                        r.css(this, 'overflow') +
                          r.css(this, 'overflow-y') +
                          r.css(this, 'overflow-x')
                      )
                    );
                  })
                  .eq(0)
              : this.parents()
                  .filter(function () {
                    return /(auto|scroll)/.test(
                      r.css(this, 'overflow') +
                        r.css(this, 'overflow-y') +
                        r.css(this, 'overflow-x')
                    );
                  })
                  .eq(0)),
          /fixed/.test(this.css('position')) || !t.length ? r(document) : t
        );
      },
      zIndex: function (t) {
        if (t !== h) return this.css('zIndex', t);
        if (this.length)
          for (var e, i, s = r(this[0]); s.length && s[0] !== document; ) {
            if (
              ('absolute' === (e = s.css('position')) ||
                'relative' === e ||
                'fixed' === e) &&
              ((i = parseInt(s.css('zIndex'), 10)), !isNaN(i) && 0 !== i)
            )
              return i;
            s = s.parent();
          }
        return 0;
      },
      uniqueId: function () {
        return this.each(function () {
          this.id || (this.id = 'ui-id-' + ++i);
        });
      },
      removeUniqueId: function () {
        return this.each(function () {
          s.test(this.id) && r(this).removeAttr('id');
        });
      },
    }),
    r.extend(r.expr[':'], {
      data: r.expr.createPseudo
        ? r.expr.createPseudo(function (e) {
            return function (t) {
              return !!r.data(t, e);
            };
          })
        : function (t, e, i) {
            return !!r.data(t, i[3]);
          },
      focusable: function (t) {
        return n(t, !isNaN(r.attr(t, 'tabindex')));
      },
      tabbable: function (t) {
        var e = r.attr(t, 'tabindex'),
          i = isNaN(e);
        return (i || 0 <= e) && n(t, !i);
      },
    }),
    r('<a>').outerWidth(1).jquery ||
      r.each(['Width', 'Height'], function (t, i) {
        var n = 'Width' === i ? ['Left', 'Right'] : ['Top', 'Bottom'],
          s = i.toLowerCase(),
          o = {
            innerWidth: r.fn.innerWidth,
            innerHeight: r.fn.innerHeight,
            outerWidth: r.fn.outerWidth,
            outerHeight: r.fn.outerHeight,
          };
        function a(t, e, i, s) {
          return (
            r.each(n, function () {
              (e -= parseFloat(r.css(t, 'padding' + this)) || 0),
                i &&
                  (e -= parseFloat(r.css(t, 'border' + this + 'Width')) || 0),
                s && (e -= parseFloat(r.css(t, 'margin' + this)) || 0);
            }),
            e
          );
        }
        (r.fn['inner' + i] = function (t) {
          return t === h
            ? o['inner' + i].call(this)
            : this.each(function () {
                r(this).css(s, a(this, t) + 'px');
              });
        }),
          (r.fn['outer' + i] = function (t, e) {
            return 'number' != typeof t
              ? o['outer' + i].call(this, t)
              : this.each(function () {
                  r(this).css(s, a(this, t, !0, e) + 'px');
                });
          });
      }),
    r.fn.addBack ||
      (r.fn.addBack = function (t) {
        return this.add(
          null == t ? this.prevObject : this.prevObject.filter(t)
        );
      }),
    r('<a>').data('a-b', 'a').removeData('a-b').data('a-b') &&
      (r.fn.removeData =
        ((e = r.fn.removeData),
        function (t) {
          return arguments.length ? e.call(this, r.camelCase(t)) : e.call(this);
        })),
    (r.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
    (r.support.selectstart = 'onselectstart' in document.createElement('div')),
    r.fn.extend({
      disableSelection: function () {
        return this.bind(
          (r.support.selectstart ? 'selectstart' : 'mousedown') +
            '.ui-disableSelection',
          function (t) {
            t.preventDefault();
          }
        );
      },
      enableSelection: function () {
        return this.unbind('.ui-disableSelection');
      },
    }),
    r.extend(r.ui, {
      plugin: {
        add: function (t, e, i) {
          var s,
            n = r.ui[t].prototype;
          for (s in i)
            (n.plugins[s] = n.plugins[s] || []), n.plugins[s].push([e, i[s]]);
        },
        call: function (t, e, i) {
          var s,
            n = t.plugins[e];
          if (
            n &&
            t.element[0].parentNode &&
            11 !== t.element[0].parentNode.nodeType
          )
            for (s = 0; s < n.length; s++)
              t.options[n[s][0]] && n[s][1].apply(t.element, i);
        },
      },
      hasScroll: function (t, e) {
        if ('hidden' === r(t).css('overflow')) return !1;
        var i,
          s = e && 'left' === e ? 'scrollLeft' : 'scrollTop';
        return 0 < t[s] || ((t[s] = 1), (i = 0 < t[s]), (t[s] = 0), i);
      },
    });
})(jQuery),
  (function (c, r) {
    var i = 0,
      h = Array.prototype.slice,
      n = c.cleanData;
    (c.cleanData = function (t) {
      for (var e, i = 0; null != (e = t[i]); i++)
        try {
          c(e).triggerHandler('remove');
        } catch (s) {}
      n(t);
    }),
      (c.widget = function (t, i, e) {
        var s,
          n,
          o,
          a,
          r = {},
          h = t.split('.')[0];
        (t = t.split('.')[1]),
          (s = h + '-' + t),
          e || ((e = i), (i = c.Widget)),
          (c.expr[':'][s.toLowerCase()] = function (t) {
            return !!c.data(t, s);
          }),
          (c[h] = c[h] || {}),
          (n = c[h][t]),
          (o = c[h][t] =
            function (t, e) {
              if (!this._createWidget) return new o(t, e);
              arguments.length && this._createWidget(t, e);
            }),
          c.extend(o, n, {
            version: e.version,
            _proto: c.extend({}, e),
            _childConstructors: [],
          }),
          ((a = new i()).options = c.widget.extend({}, a.options)),
          c.each(e, function (e, s) {
            var n, o;
            c.isFunction(s)
              ? (r[e] =
                  ((n = function () {
                    return i.prototype[e].apply(this, arguments);
                  }),
                  (o = function (t) {
                    return i.prototype[e].apply(this, t);
                  }),
                  function () {
                    var t,
                      e = this._super,
                      i = this._superApply;
                    return (
                      (this._super = n),
                      (this._superApply = o),
                      (t = s.apply(this, arguments)),
                      (this._super = e),
                      (this._superApply = i),
                      t
                    );
                  }))
              : (r[e] = s);
          }),
          (o.prototype = c.widget.extend(
            a,
            { widgetEventPrefix: n ? a.widgetEventPrefix : t },
            r,
            { constructor: o, namespace: h, widgetName: t, widgetFullName: s }
          )),
          n
            ? (c.each(n._childConstructors, function (t, e) {
                var i = e.prototype;
                c.widget(i.namespace + '.' + i.widgetName, o, e._proto);
              }),
              delete n._childConstructors)
            : i._childConstructors.push(o),
          c.widget.bridge(t, o);
      }),
      (c.widget.extend = function (t) {
        for (
          var e, i, s = h.call(arguments, 1), n = 0, o = s.length;
          n < o;
          n++
        )
          for (e in s[n])
            (i = s[n][e]),
              s[n].hasOwnProperty(e) &&
                i !== r &&
                (c.isPlainObject(i)
                  ? (t[e] = c.isPlainObject(t[e])
                      ? c.widget.extend({}, t[e], i)
                      : c.widget.extend({}, i))
                  : (t[e] = i));
        return t;
      }),
      (c.widget.bridge = function (o, e) {
        var a = e.prototype.widgetFullName || o;
        c.fn[o] = function (i) {
          var t = 'string' == typeof i,
            s = h.call(arguments, 1),
            n = this;
          return (
            (i =
              !t && s.length ? c.widget.extend.apply(null, [i].concat(s)) : i),
            t
              ? this.each(function () {
                  var t,
                    e = c.data(this, a);
                  return e
                    ? c.isFunction(e[i]) && '_' !== i.charAt(0)
                      ? (t = e[i].apply(e, s)) !== e && t !== r
                        ? ((n = t && t.jquery ? n.pushStack(t.get()) : t), !1)
                        : void 0
                      : c.error(
                          "no such method '" +
                            i +
                            "' for " +
                            o +
                            ' widget instance'
                        )
                    : c.error(
                        'cannot call methods on ' +
                          o +
                          " prior to initialization; attempted to call method '" +
                          i +
                          "'"
                      );
                })
              : this.each(function () {
                  var t = c.data(this, a);
                  t
                    ? t.option(i || {})._init()
                    : c.data(this, a, new e(i, this));
                }),
            n
          );
        };
      }),
      (c.Widget = function () {}),
      (c.Widget._childConstructors = []),
      (c.Widget.prototype = {
        widgetName: 'widget',
        widgetEventPrefix: '',
        defaultElement: '<div>',
        options: { disabled: !1, create: null },
        _createWidget: function (t, e) {
          (e = c(e || this.defaultElement || this)[0]),
            (this.element = c(e)),
            (this.uuid = i++),
            (this.eventNamespace = '.' + this.widgetName + this.uuid),
            (this.options = c.widget.extend(
              {},
              this.options,
              this._getCreateOptions(),
              t
            )),
            (this.bindings = c()),
            (this.hoverable = c()),
            (this.focusable = c()),
            e !== this &&
              (c.data(e, this.widgetFullName, this),
              this._on(!0, this.element, {
                remove: function (t) {
                  t.target === e && this.destroy();
                },
              }),
              (this.document = c(e.style ? e.ownerDocument : e.document || e)),
              (this.window = c(
                this.document[0].defaultView || this.document[0].parentWindow
              ))),
            this._create(),
            this._trigger('create', null, this._getCreateEventData()),
            this._init();
        },
        _getCreateOptions: c.noop,
        _getCreateEventData: c.noop,
        _create: c.noop,
        _init: c.noop,
        destroy: function () {
          this._destroy(),
            this.element
              .unbind(this.eventNamespace)
              .removeData(this.widgetName)
              .removeData(this.widgetFullName)
              .removeData(c.camelCase(this.widgetFullName)),
            this.widget()
              .unbind(this.eventNamespace)
              .removeAttr('aria-disabled')
              .removeClass(this.widgetFullName + '-disabled ui-state-disabled'),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass('ui-state-hover'),
            this.focusable.removeClass('ui-state-focus');
        },
        _destroy: c.noop,
        widget: function () {
          return this.element;
        },
        option: function (t, e) {
          var i,
            s,
            n,
            o = t;
          if (0 === arguments.length) return c.widget.extend({}, this.options);
          if ('string' == typeof t)
            if (((o = {}), (t = (i = t.split('.')).shift()), i.length)) {
              for (
                s = o[t] = c.widget.extend({}, this.options[t]), n = 0;
                n < i.length - 1;
                n++
              )
                (s[i[n]] = s[i[n]] || {}), (s = s[i[n]]);
              if (((t = i.pop()), e === r)) return s[t] === r ? null : s[t];
              s[t] = e;
            } else {
              if (e === r)
                return this.options[t] === r ? null : this.options[t];
              o[t] = e;
            }
          return this._setOptions(o), this;
        },
        _setOptions: function (t) {
          var e;
          for (e in t) this._setOption(e, t[e]);
          return this;
        },
        _setOption: function (t, e) {
          return (
            (this.options[t] = e),
            'disabled' === t &&
              (this.widget()
                .toggleClass(
                  this.widgetFullName + '-disabled ui-state-disabled',
                  !!e
                )
                .attr('aria-disabled', e),
              this.hoverable.removeClass('ui-state-hover'),
              this.focusable.removeClass('ui-state-focus')),
            this
          );
        },
        enable: function () {
          return this._setOption('disabled', !1);
        },
        disable: function () {
          return this._setOption('disabled', !0);
        },
        _on: function (a, r, t) {
          var h,
            l = this;
          'boolean' != typeof a && ((t = r), (r = a), (a = !1)),
            t
              ? ((r = h = c(r)), (this.bindings = this.bindings.add(r)))
              : ((t = r), (r = this.element), (h = this.widget())),
            c.each(t, function (t, e) {
              function i() {
                if (
                  a ||
                  (!0 !== l.options.disabled &&
                    !c(this).hasClass('ui-state-disabled'))
                )
                  return ('string' == typeof e ? l[e] : e).apply(l, arguments);
              }
              'string' != typeof e &&
                (i.guid = e.guid = e.guid || i.guid || c.guid++);
              var s = t.match(/^(\w+)\s*(.*)$/),
                n = s[1] + l.eventNamespace,
                o = s[2];
              o ? h.delegate(o, n, i) : r.bind(n, i);
            });
        },
        _off: function (t, e) {
          (e =
            (e || '').split(' ').join(this.eventNamespace + ' ') +
            this.eventNamespace),
            t.unbind(e).undelegate(e);
        },
        _delay: function (t, e) {
          var i = this;
          return setTimeout(function s() {
            return ('string' == typeof t ? i[t] : t).apply(i, arguments);
          }, e || 0);
        },
        _hoverable: function (t) {
          (this.hoverable = this.hoverable.add(t)),
            this._on(t, {
              mouseenter: function (t) {
                c(t.currentTarget).addClass('ui-state-hover');
              },
              mouseleave: function (t) {
                c(t.currentTarget).removeClass('ui-state-hover');
              },
            });
        },
        _focusable: function (t) {
          (this.focusable = this.focusable.add(t)),
            this._on(t, {
              focusin: function (t) {
                c(t.currentTarget).addClass('ui-state-focus');
              },
              focusout: function (t) {
                c(t.currentTarget).removeClass('ui-state-focus');
              },
            });
        },
        _trigger: function (t, e, i) {
          var s,
            n,
            o = this.options[t];
          if (
            ((i = i || {}),
            ((e = c.Event(e)).type = (
              t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t
            ).toLowerCase()),
            (e.target = this.element[0]),
            (n = e.originalEvent))
          )
            for (s in n) s in e || (e[s] = n[s]);
          return (
            this.element.trigger(e, i),
            !(
              (c.isFunction(o) &&
                !1 === o.apply(this.element[0], [e].concat(i))) ||
              e.isDefaultPrevented()
            )
          );
        },
      }),
      c.each({ show: 'fadeIn', hide: 'fadeOut' }, function (o, a) {
        c.Widget.prototype['_' + o] = function (e, t, i) {
          'string' == typeof t && (t = { effect: t });
          var s,
            n = t ? (!0 === t || 'number' == typeof t ? a : t.effect || a) : o;
          'number' == typeof (t = t || {}) && (t = { duration: t }),
            (s = !c.isEmptyObject(t)),
            (t.complete = i),
            t.delay && e.delay(t.delay),
            s && c.effects && c.effects.effect[n]
              ? e[o](t)
              : n !== o && e[n]
              ? e[n](t.duration, t.easing, i)
              : e.queue(function (t) {
                  c(this)[o](), i && i.call(e[0]), t();
                });
        };
      });
  })(jQuery),
  (function (n, t) {
    var o = !1;
    n(document).mouseup(function () {
      o = !1;
    }),
      n.widget('ui.mouse', {
        version: '1.10.3',
        options: {
          cancel: 'input,textarea,button,select,option',
          distance: 1,
          delay: 0,
        },
        _mouseInit: function () {
          var e = this;
          this.element
            .bind('mousedown.' + this.widgetName, function (t) {
              return e._mouseDown(t);
            })
            .bind('click.' + this.widgetName, function (t) {
              if (!0 === n.data(t.target, e.widgetName + '.preventClickEvent'))
                return (
                  n.removeData(t.target, e.widgetName + '.preventClickEvent'),
                  t.stopImmediatePropagation(),
                  !1
                );
            }),
            (this.started = !1);
        },
        _mouseDestroy: function () {
          this.element.unbind('.' + this.widgetName),
            this._mouseMoveDelegate &&
              n(document)
                .unbind('mousemove.' + this.widgetName, this._mouseMoveDelegate)
                .unbind('mouseup.' + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function (t) {
          if (!o) {
            this._mouseStarted && this._mouseUp(t), (this._mouseDownEvent = t);
            var e = this,
              i = 1 === t.which,
              s =
                !(
                  'string' != typeof this.options.cancel || !t.target.nodeName
                ) && n(t.target).closest(this.options.cancel).length;
            return (
              !(i && !s && this._mouseCapture(t)) ||
              ((this.mouseDelayMet = !this.options.delay),
              this.mouseDelayMet ||
                (this._mouseDelayTimer = setTimeout(function () {
                  e.mouseDelayMet = !0;
                }, this.options.delay)),
              this._mouseDistanceMet(t) &&
              this._mouseDelayMet(t) &&
              ((this._mouseStarted = !1 !== this._mouseStart(t)),
              !this._mouseStarted)
                ? (t.preventDefault(), !0)
                : (!0 ===
                    n.data(t.target, this.widgetName + '.preventClickEvent') &&
                    n.removeData(
                      t.target,
                      this.widgetName + '.preventClickEvent'
                    ),
                  (this._mouseMoveDelegate = function (t) {
                    return e._mouseMove(t);
                  }),
                  (this._mouseUpDelegate = function (t) {
                    return e._mouseUp(t);
                  }),
                  n(document)
                    .bind(
                      'mousemove.' + this.widgetName,
                      this._mouseMoveDelegate
                    )
                    .bind('mouseup.' + this.widgetName, this._mouseUpDelegate),
                  t.preventDefault(),
                  (o = !0)))
            );
          }
        },
        _mouseMove: function (t) {
          return n.ui.ie &&
            (!document.documentMode || document.documentMode < 9) &&
            !t.button
            ? this._mouseUp(t)
            : this._mouseStarted
            ? (this._mouseDrag(t), t.preventDefault())
            : (this._mouseDistanceMet(t) &&
                this._mouseDelayMet(t) &&
                ((this._mouseStarted =
                  !1 !== this._mouseStart(this._mouseDownEvent, t)),
                this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
              !this._mouseStarted);
        },
        _mouseUp: function (t) {
          return (
            n(document)
              .unbind('mousemove.' + this.widgetName, this._mouseMoveDelegate)
              .unbind('mouseup.' + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted &&
              ((this._mouseStarted = !1),
              t.target === this._mouseDownEvent.target &&
                n.data(t.target, this.widgetName + '.preventClickEvent', !0),
              this._mouseStop(t)),
            !1
          );
        },
        _mouseDistanceMet: function (t) {
          return (
            Math.max(
              Math.abs(this._mouseDownEvent.pageX - t.pageX),
              Math.abs(this._mouseDownEvent.pageY - t.pageY)
            ) >= this.options.distance
          );
        },
        _mouseDelayMet: function () {
          return this.mouseDelayMet;
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
          return !0;
        },
      });
  })(jQuery),
  (function (b, t) {
    b.widget('ui.draggable', b.ui.mouse, {
      version: '1.10.3',
      widgetEventPrefix: 'drag',
      options: {
        addClasses: !0,
        appendTo: 'parent',
        axis: !1,
        connectToSortable: !1,
        containment: !1,
        cursor: 'auto',
        cursorAt: !1,
        grid: !1,
        handle: !1,
        helper: 'original',
        iframeFix: !1,
        opacity: !1,
        refreshPositions: !1,
        revert: !1,
        revertDuration: 500,
        scope: 'default',
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        snap: !1,
        snapMode: 'both',
        snapTolerance: 20,
        stack: !1,
        zIndex: !1,
        drag: null,
        start: null,
        stop: null,
      },
      _create: function () {
        'original' !== this.options.helper ||
          /^(?:r|a|f)/.test(this.element.css('position')) ||
          (this.element[0].style.position = 'relative'),
          this.options.addClasses && this.element.addClass('ui-draggable'),
          this.options.disabled &&
            this.element.addClass('ui-draggable-disabled'),
          this._mouseInit();
      },
      _destroy: function () {
        this.element.removeClass(
          'ui-draggable ui-draggable-dragging ui-draggable-disabled'
        ),
          this._mouseDestroy();
      },
      _mouseCapture: function (t) {
        var e = this.options;
        return (
          !(
            this.helper ||
            e.disabled ||
            0 < b(t.target).closest('.ui-resizable-handle').length
          ) &&
          ((this.handle = this._getHandle(t)),
          !!this.handle &&
            (b(!0 === e.iframeFix ? 'iframe' : e.iframeFix).each(function () {
              b(
                "<div class='ui-draggable-iframeFix' style='background: #fff;'></div>"
              )
                .css({
                  width: this.offsetWidth + 'px',
                  height: this.offsetHeight + 'px',
                  position: 'absolute',
                  opacity: '0.001',
                  zIndex: 1e3,
                })
                .css(b(this).offset())
                .appendTo('body');
            }),
            !0))
        );
      },
      _mouseStart: function (t) {
        var e = this.options;
        return (
          (this.helper = this._createHelper(t)),
          this.helper.addClass('ui-draggable-dragging'),
          this._cacheHelperProportions(),
          b.ui.ddmanager && (b.ui.ddmanager.current = this),
          this._cacheMargins(),
          (this.cssPosition = this.helper.css('position')),
          (this.scrollParent = this.helper.scrollParent()),
          (this.offsetParent = this.helper.offsetParent()),
          (this.offsetParentCssPosition = this.offsetParent.css('position')),
          (this.offset = this.positionAbs = this.element.offset()),
          (this.offset = {
            top: this.offset.top - this.margins.top,
            left: this.offset.left - this.margins.left,
          }),
          (this.offset.scroll = !1),
          b.extend(this.offset, {
            click: {
              left: t.pageX - this.offset.left,
              top: t.pageY - this.offset.top,
            },
            parent: this._getParentOffset(),
            relative: this._getRelativeOffset(),
          }),
          (this.originalPosition = this.position = this._generatePosition(t)),
          (this.originalPageX = t.pageX),
          (this.originalPageY = t.pageY),
          e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt),
          this._setContainment(),
          !1 === this._trigger('start', t)
            ? (this._clear(), !1)
            : (this._cacheHelperProportions(),
              b.ui.ddmanager &&
                !e.dropBehaviour &&
                b.ui.ddmanager.prepareOffsets(this, t),
              this._mouseDrag(t, !0),
              b.ui.ddmanager && b.ui.ddmanager.dragStart(this, t),
              !0)
        );
      },
      _mouseDrag: function (t, e) {
        if (
          ('fixed' === this.offsetParentCssPosition &&
            (this.offset.parent = this._getParentOffset()),
          (this.position = this._generatePosition(t)),
          (this.positionAbs = this._convertPositionTo('absolute')),
          !e)
        ) {
          var i = this._uiHash();
          if (!1 === this._trigger('drag', t, i)) return this._mouseUp({}), !1;
          this.position = i.position;
        }
        return (
          (this.options.axis && 'y' === this.options.axis) ||
            (this.helper[0].style.left = this.position.left + 'px'),
          (this.options.axis && 'x' === this.options.axis) ||
            (this.helper[0].style.top = this.position.top + 'px'),
          b.ui.ddmanager && b.ui.ddmanager.drag(this, t),
          !1
        );
      },
      _mouseStop: function (t) {
        var e = this,
          i = !1;
        return (
          b.ui.ddmanager &&
            !this.options.dropBehaviour &&
            (i = b.ui.ddmanager.drop(this, t)),
          this.dropped && ((i = this.dropped), (this.dropped = !1)),
          ('original' !== this.options.helper ||
            b.contains(this.element[0].ownerDocument, this.element[0])) &&
            (('invalid' === this.options.revert && !i) ||
            ('valid' === this.options.revert && i) ||
            !0 === this.options.revert ||
            (b.isFunction(this.options.revert) &&
              this.options.revert.call(this.element, i))
              ? b(this.helper).animate(
                  this.originalPosition,
                  parseInt(this.options.revertDuration, 10),
                  function () {
                    !1 !== e._trigger('stop', t) && e._clear();
                  }
                )
              : !1 !== this._trigger('stop', t) && this._clear()),
          !1
        );
      },
      _mouseUp: function (t) {
        return (
          b('div.ui-draggable-iframeFix').each(function () {
            this.parentNode.removeChild(this);
          }),
          b.ui.ddmanager && b.ui.ddmanager.dragStop(this, t),
          b.ui.mouse.prototype._mouseUp.call(this, t)
        );
      },
      cancel: function () {
        return (
          this.helper.is('.ui-draggable-dragging')
            ? this._mouseUp({})
            : this._clear(),
          this
        );
      },
      _getHandle: function (t) {
        return (
          !this.options.handle ||
          !!b(t.target).closest(this.element.find(this.options.handle)).length
        );
      },
      _createHelper: function (t) {
        var e = this.options,
          i = b.isFunction(e.helper)
            ? b(e.helper.apply(this.element[0], [t]))
            : 'clone' === e.helper
            ? this.element.clone().removeAttr('id')
            : this.element;
        return (
          i.parents('body').length ||
            i.appendTo(
              'parent' === e.appendTo ? this.element[0].parentNode : e.appendTo
            ),
          i[0] === this.element[0] ||
            /(fixed|absolute)/.test(i.css('position')) ||
            i.css('position', 'absolute'),
          i
        );
      },
      _adjustOffsetFromHelper: function (t) {
        'string' == typeof t && (t = t.split(' ')),
          b.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }),
          'left' in t && (this.offset.click.left = t.left + this.margins.left),
          'right' in t &&
            (this.offset.click.left =
              this.helperProportions.width - t.right + this.margins.left),
          'top' in t && (this.offset.click.top = t.top + this.margins.top),
          'bottom' in t &&
            (this.offset.click.top =
              this.helperProportions.height - t.bottom + this.margins.top);
      },
      _getParentOffset: function () {
        var t = this.offsetParent.offset();
        return (
          'absolute' === this.cssPosition &&
            this.scrollParent[0] !== document &&
            b.contains(this.scrollParent[0], this.offsetParent[0]) &&
            ((t.left += this.scrollParent.scrollLeft()),
            (t.top += this.scrollParent.scrollTop())),
          (this.offsetParent[0] === document.body ||
            (this.offsetParent[0].tagName &&
              'html' === this.offsetParent[0].tagName.toLowerCase() &&
              b.ui.ie)) &&
            (t = { top: 0, left: 0 }),
          {
            top:
              t.top +
              (parseInt(this.offsetParent.css('borderTopWidth'), 10) || 0),
            left:
              t.left +
              (parseInt(this.offsetParent.css('borderLeftWidth'), 10) || 0),
          }
        );
      },
      _getRelativeOffset: function () {
        if ('relative' !== this.cssPosition) return { top: 0, left: 0 };
        var t = this.element.position();
        return {
          top:
            t.top -
            (parseInt(this.helper.css('top'), 10) || 0) +
            this.scrollParent.scrollTop(),
          left:
            t.left -
            (parseInt(this.helper.css('left'), 10) || 0) +
            this.scrollParent.scrollLeft(),
        };
      },
      _cacheMargins: function () {
        this.margins = {
          left: parseInt(this.element.css('marginLeft'), 10) || 0,
          top: parseInt(this.element.css('marginTop'), 10) || 0,
          right: parseInt(this.element.css('marginRight'), 10) || 0,
          bottom: parseInt(this.element.css('marginBottom'), 10) || 0,
        };
      },
      _cacheHelperProportions: function () {
        this.helperProportions = {
          width: this.helper.outerWidth(),
          height: this.helper.outerHeight(),
        };
      },
      _setContainment: function () {
        var t,
          e,
          i,
          s = this.options;
        s.containment
          ? 'window' !== s.containment
            ? 'document' !== s.containment
              ? s.containment.constructor !== Array
                ? ('parent' === s.containment &&
                    (s.containment = this.helper[0].parentNode),
                  (i = (e = b(s.containment))[0]) &&
                    ((t = 'hidden' !== e.css('overflow')),
                    (this.containment = [
                      (parseInt(e.css('borderLeftWidth'), 10) || 0) +
                        (parseInt(e.css('paddingLeft'), 10) || 0),
                      (parseInt(e.css('borderTopWidth'), 10) || 0) +
                        (parseInt(e.css('paddingTop'), 10) || 0),
                      (t
                        ? Math.max(i.scrollWidth, i.offsetWidth)
                        : i.offsetWidth) -
                        (parseInt(e.css('borderRightWidth'), 10) || 0) -
                        (parseInt(e.css('paddingRight'), 10) || 0) -
                        this.helperProportions.width -
                        this.margins.left -
                        this.margins.right,
                      (t
                        ? Math.max(i.scrollHeight, i.offsetHeight)
                        : i.offsetHeight) -
                        (parseInt(e.css('borderBottomWidth'), 10) || 0) -
                        (parseInt(e.css('paddingBottom'), 10) || 0) -
                        this.helperProportions.height -
                        this.margins.top -
                        this.margins.bottom,
                    ]),
                    (this.relative_container = e)))
                : (this.containment = s.containment)
              : (this.containment = [
                  0,
                  0,
                  b(document).width() -
                    this.helperProportions.width -
                    this.margins.left,
                  (b(document).height() ||
                    document.body.parentNode.scrollHeight) -
                    this.helperProportions.height -
                    this.margins.top,
                ])
            : (this.containment = [
                b(window).scrollLeft() -
                  this.offset.relative.left -
                  this.offset.parent.left,
                b(window).scrollTop() -
                  this.offset.relative.top -
                  this.offset.parent.top,
                b(window).scrollLeft() +
                  b(window).width() -
                  this.helperProportions.width -
                  this.margins.left,
                b(window).scrollTop() +
                  (b(window).height() ||
                    document.body.parentNode.scrollHeight) -
                  this.helperProportions.height -
                  this.margins.top,
              ])
          : (this.containment = null);
      },
      _convertPositionTo: function (t, e) {
        e || (e = this.position);
        var i = 'absolute' === t ? 1 : -1,
          s =
            'absolute' !== this.cssPosition ||
            (this.scrollParent[0] !== document &&
              b.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent;
        return (
          this.offset.scroll ||
            (this.offset.scroll = { top: s.scrollTop(), left: s.scrollLeft() }),
          {
            top:
              e.top +
              this.offset.relative.top * i +
              this.offset.parent.top * i -
              ('fixed' === this.cssPosition
                ? -this.scrollParent.scrollTop()
                : this.offset.scroll.top) *
                i,
            left:
              e.left +
              this.offset.relative.left * i +
              this.offset.parent.left * i -
              ('fixed' === this.cssPosition
                ? -this.scrollParent.scrollLeft()
                : this.offset.scroll.left) *
                i,
          }
        );
      },
      _generatePosition: function (t) {
        var e,
          i,
          s,
          n,
          o = this.options,
          a =
            'absolute' !== this.cssPosition ||
            (this.scrollParent[0] !== document &&
              b.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          r = t.pageX,
          h = t.pageY;
        return (
          this.offset.scroll ||
            (this.offset.scroll = { top: a.scrollTop(), left: a.scrollLeft() }),
          this.originalPosition &&
            (this.containment &&
              ((e = this.relative_container
                ? ((i = this.relative_container.offset()),
                  [
                    this.containment[0] + i.left,
                    this.containment[1] + i.top,
                    this.containment[2] + i.left,
                    this.containment[3] + i.top,
                  ])
                : this.containment),
              t.pageX - this.offset.click.left < e[0] &&
                (r = e[0] + this.offset.click.left),
              t.pageY - this.offset.click.top < e[1] &&
                (h = e[1] + this.offset.click.top),
              t.pageX - this.offset.click.left > e[2] &&
                (r = e[2] + this.offset.click.left),
              t.pageY - this.offset.click.top > e[3] &&
                (h = e[3] + this.offset.click.top)),
            o.grid &&
              ((s = o.grid[1]
                ? this.originalPageY +
                  Math.round((h - this.originalPageY) / o.grid[1]) * o.grid[1]
                : this.originalPageY),
              (h = e
                ? s - this.offset.click.top >= e[1] ||
                  s - this.offset.click.top > e[3]
                  ? s
                  : s - this.offset.click.top >= e[1]
                  ? s - o.grid[1]
                  : s + o.grid[1]
                : s),
              (n = o.grid[0]
                ? this.originalPageX +
                  Math.round((r - this.originalPageX) / o.grid[0]) * o.grid[0]
                : this.originalPageX),
              (r = e
                ? n - this.offset.click.left >= e[0] ||
                  n - this.offset.click.left > e[2]
                  ? n
                  : n - this.offset.click.left >= e[0]
                  ? n - o.grid[0]
                  : n + o.grid[0]
                : n))),
          {
            top:
              h -
              this.offset.click.top -
              this.offset.relative.top -
              this.offset.parent.top +
              ('fixed' === this.cssPosition
                ? -this.scrollParent.scrollTop()
                : this.offset.scroll.top),
            left:
              r -
              this.offset.click.left -
              this.offset.relative.left -
              this.offset.parent.left +
              ('fixed' === this.cssPosition
                ? -this.scrollParent.scrollLeft()
                : this.offset.scroll.left),
          }
        );
      },
      _clear: function () {
        this.helper.removeClass('ui-draggable-dragging'),
          this.helper[0] === this.element[0] ||
            this.cancelHelperRemoval ||
            this.helper.remove(),
          (this.helper = null),
          (this.cancelHelperRemoval = !1);
      },
      _trigger: function (t, e, i) {
        return (
          (i = i || this._uiHash()),
          b.ui.plugin.call(this, t, [e, i]),
          'drag' === t &&
            (this.positionAbs = this._convertPositionTo('absolute')),
          b.Widget.prototype._trigger.call(this, t, e, i)
        );
      },
      plugins: {},
      _uiHash: function () {
        return {
          helper: this.helper,
          position: this.position,
          originalPosition: this.originalPosition,
          offset: this.positionAbs,
        };
      },
    }),
      b.ui.plugin.add('draggable', 'connectToSortable', {
        start: function (e, t) {
          var i = b(this).data('ui-draggable'),
            s = i.options,
            n = b.extend({}, t, { item: i.element });
          (i.sortables = []),
            b(s.connectToSortable).each(function () {
              var t = b.data(this, 'ui-sortable');
              t &&
                !t.options.disabled &&
                (i.sortables.push({
                  instance: t,
                  shouldRevert: t.options.revert,
                }),
                t.refreshPositions(),
                t._trigger('activate', e, n));
            });
        },
        stop: function (t, e) {
          var i = b(this).data('ui-draggable'),
            s = b.extend({}, e, { item: i.element });
          b.each(i.sortables, function () {
            this.instance.isOver
              ? ((this.instance.isOver = 0),
                (i.cancelHelperRemoval = !0),
                (this.instance.cancelHelperRemoval = !1),
                this.shouldRevert &&
                  (this.instance.options.revert = this.shouldRevert),
                this.instance._mouseStop(t),
                (this.instance.options.helper = this.instance.options._helper),
                'original' === i.options.helper &&
                  this.instance.currentItem.css({ top: 'auto', left: 'auto' }))
              : ((this.instance.cancelHelperRemoval = !1),
                this.instance._trigger('deactivate', t, s));
          });
        },
        drag: function (i, s) {
          var n = b(this).data('ui-draggable'),
            o = this;
          b.each(n.sortables, function () {
            var t = !1,
              e = this;
            (this.instance.positionAbs = n.positionAbs),
              (this.instance.helperProportions = n.helperProportions),
              (this.instance.offset.click = n.offset.click),
              this.instance._intersectsWith(this.instance.containerCache) &&
                ((t = !0),
                b.each(n.sortables, function () {
                  return (
                    (this.instance.positionAbs = n.positionAbs),
                    (this.instance.helperProportions = n.helperProportions),
                    (this.instance.offset.click = n.offset.click),
                    this !== e &&
                      this.instance._intersectsWith(
                        this.instance.containerCache
                      ) &&
                      b.contains(
                        e.instance.element[0],
                        this.instance.element[0]
                      ) &&
                      (t = !1),
                    t
                  );
                })),
              t
                ? (this.instance.isOver ||
                    ((this.instance.isOver = 1),
                    (this.instance.currentItem = b(o)
                      .clone()
                      .removeAttr('id')
                      .appendTo(this.instance.element)
                      .data('ui-sortable-item', !0)),
                    (this.instance.options._helper =
                      this.instance.options.helper),
                    (this.instance.options.helper = function () {
                      return s.helper[0];
                    }),
                    (i.target = this.instance.currentItem[0]),
                    this.instance._mouseCapture(i, !0),
                    this.instance._mouseStart(i, !0, !0),
                    (this.instance.offset.click.top = n.offset.click.top),
                    (this.instance.offset.click.left = n.offset.click.left),
                    (this.instance.offset.parent.left -=
                      n.offset.parent.left - this.instance.offset.parent.left),
                    (this.instance.offset.parent.top -=
                      n.offset.parent.top - this.instance.offset.parent.top),
                    n._trigger('toSortable', i),
                    (n.dropped = this.instance.element),
                    (n.currentItem = n.element),
                    (this.instance.fromOutside = n)),
                  this.instance.currentItem && this.instance._mouseDrag(i))
                : this.instance.isOver &&
                  ((this.instance.isOver = 0),
                  (this.instance.cancelHelperRemoval = !0),
                  (this.instance.options.revert = !1),
                  this.instance._trigger(
                    'out',
                    i,
                    this.instance._uiHash(this.instance)
                  ),
                  this.instance._mouseStop(i, !0),
                  (this.instance.options.helper =
                    this.instance.options._helper),
                  this.instance.currentItem.remove(),
                  this.instance.placeholder &&
                    this.instance.placeholder.remove(),
                  n._trigger('fromSortable', i),
                  (n.dropped = !1));
          });
        },
      }),
      b.ui.plugin.add('draggable', 'cursor', {
        start: function () {
          var t = b('body'),
            e = b(this).data('ui-draggable').options;
          t.css('cursor') && (e._cursor = t.css('cursor')),
            t.css('cursor', e.cursor);
        },
        stop: function () {
          var t = b(this).data('ui-draggable').options;
          t._cursor && b('body').css('cursor', t._cursor);
        },
      }),
      b.ui.plugin.add('draggable', 'opacity', {
        start: function (t, e) {
          var i = b(e.helper),
            s = b(this).data('ui-draggable').options;
          i.css('opacity') && (s._opacity = i.css('opacity')),
            i.css('opacity', s.opacity);
        },
        stop: function (t, e) {
          var i = b(this).data('ui-draggable').options;
          i._opacity && b(e.helper).css('opacity', i._opacity);
        },
      }),
      b.ui.plugin.add('draggable', 'scroll', {
        start: function () {
          var t = b(this).data('ui-draggable');
          t.scrollParent[0] !== document &&
            'HTML' !== t.scrollParent[0].tagName &&
            (t.overflowOffset = t.scrollParent.offset());
        },
        drag: function (t) {
          var e = b(this).data('ui-draggable'),
            i = e.options,
            s = !1;
          e.scrollParent[0] !== document && 'HTML' !== e.scrollParent[0].tagName
            ? ((i.axis && 'x' === i.axis) ||
                (e.overflowOffset.top +
                  e.scrollParent[0].offsetHeight -
                  t.pageY <
                i.scrollSensitivity
                  ? (e.scrollParent[0].scrollTop = s =
                      e.scrollParent[0].scrollTop + i.scrollSpeed)
                  : t.pageY - e.overflowOffset.top < i.scrollSensitivity &&
                    (e.scrollParent[0].scrollTop = s =
                      e.scrollParent[0].scrollTop - i.scrollSpeed)),
              (i.axis && 'y' === i.axis) ||
                (e.overflowOffset.left +
                  e.scrollParent[0].offsetWidth -
                  t.pageX <
                i.scrollSensitivity
                  ? (e.scrollParent[0].scrollLeft = s =
                      e.scrollParent[0].scrollLeft + i.scrollSpeed)
                  : t.pageX - e.overflowOffset.left < i.scrollSensitivity &&
                    (e.scrollParent[0].scrollLeft = s =
                      e.scrollParent[0].scrollLeft - i.scrollSpeed)))
            : ((i.axis && 'x' === i.axis) ||
                (t.pageY - b(document).scrollTop() < i.scrollSensitivity
                  ? (s = b(document).scrollTop(
                      b(document).scrollTop() - i.scrollSpeed
                    ))
                  : b(window).height() - (t.pageY - b(document).scrollTop()) <
                      i.scrollSensitivity &&
                    (s = b(document).scrollTop(
                      b(document).scrollTop() + i.scrollSpeed
                    ))),
              (i.axis && 'y' === i.axis) ||
                (t.pageX - b(document).scrollLeft() < i.scrollSensitivity
                  ? (s = b(document).scrollLeft(
                      b(document).scrollLeft() - i.scrollSpeed
                    ))
                  : b(window).width() - (t.pageX - b(document).scrollLeft()) <
                      i.scrollSensitivity &&
                    (s = b(document).scrollLeft(
                      b(document).scrollLeft() + i.scrollSpeed
                    )))),
            !1 !== s &&
              b.ui.ddmanager &&
              !i.dropBehaviour &&
              b.ui.ddmanager.prepareOffsets(e, t);
        },
      }),
      b.ui.plugin.add('draggable', 'snap', {
        start: function () {
          var i = b(this).data('ui-draggable'),
            t = i.options;
          (i.snapElements = []),
            b(
              t.snap.constructor !== String
                ? t.snap.items || ':data(ui-draggable)'
                : t.snap
            ).each(function () {
              var t = b(this),
                e = t.offset();
              this !== i.element[0] &&
                i.snapElements.push({
                  item: this,
                  width: t.outerWidth(),
                  height: t.outerHeight(),
                  top: e.top,
                  left: e.left,
                });
            });
        },
        drag: function (t, e) {
          var i,
            s,
            n,
            o,
            a,
            r,
            h,
            l,
            c,
            u,
            d = b(this).data('ui-draggable'),
            p = d.options,
            f = p.snapTolerance,
            g = e.offset.left,
            m = g + d.helperProportions.width,
            v = e.offset.top,
            _ = v + d.helperProportions.height;
          for (c = d.snapElements.length - 1; 0 <= c; c--)
            (r = (a = d.snapElements[c].left) + d.snapElements[c].width),
              (l = (h = d.snapElements[c].top) + d.snapElements[c].height),
              m < a - f ||
              r + f < g ||
              _ < h - f ||
              l + f < v ||
              !b.contains(
                d.snapElements[c].item.ownerDocument,
                d.snapElements[c].item
              )
                ? (d.snapElements[c].snapping &&
                    d.options.snap.release &&
                    d.options.snap.release.call(
                      d.element,
                      t,
                      b.extend(d._uiHash(), {
                        snapItem: d.snapElements[c].item,
                      })
                    ),
                  (d.snapElements[c].snapping = !1))
                : ('inner' !== p.snapMode &&
                    ((i = Math.abs(h - _) <= f),
                    (s = Math.abs(l - v) <= f),
                    (n = Math.abs(a - m) <= f),
                    (o = Math.abs(r - g) <= f),
                    i &&
                      (e.position.top =
                        d._convertPositionTo('relative', {
                          top: h - d.helperProportions.height,
                          left: 0,
                        }).top - d.margins.top),
                    s &&
                      (e.position.top =
                        d._convertPositionTo('relative', { top: l, left: 0 })
                          .top - d.margins.top),
                    n &&
                      (e.position.left =
                        d._convertPositionTo('relative', {
                          top: 0,
                          left: a - d.helperProportions.width,
                        }).left - d.margins.left),
                    o &&
                      (e.position.left =
                        d._convertPositionTo('relative', { top: 0, left: r })
                          .left - d.margins.left)),
                  (u = i || s || n || o),
                  'outer' !== p.snapMode &&
                    ((i = Math.abs(h - v) <= f),
                    (s = Math.abs(l - _) <= f),
                    (n = Math.abs(a - g) <= f),
                    (o = Math.abs(r - m) <= f),
                    i &&
                      (e.position.top =
                        d._convertPositionTo('relative', { top: h, left: 0 })
                          .top - d.margins.top),
                    s &&
                      (e.position.top =
                        d._convertPositionTo('relative', {
                          top: l - d.helperProportions.height,
                          left: 0,
                        }).top - d.margins.top),
                    n &&
                      (e.position.left =
                        d._convertPositionTo('relative', { top: 0, left: a })
                          .left - d.margins.left),
                    o &&
                      (e.position.left =
                        d._convertPositionTo('relative', {
                          top: 0,
                          left: r - d.helperProportions.width,
                        }).left - d.margins.left)),
                  !d.snapElements[c].snapping &&
                    (i || s || n || o || u) &&
                    d.options.snap.snap &&
                    d.options.snap.snap.call(
                      d.element,
                      t,
                      b.extend(d._uiHash(), {
                        snapItem: d.snapElements[c].item,
                      })
                    ),
                  (d.snapElements[c].snapping = i || s || n || o || u));
        },
      }),
      b.ui.plugin.add('draggable', 'stack', {
        start: function () {
          var e,
            t = this.data('ui-draggable').options,
            i = b.makeArray(b(t.stack)).sort(function (t, e) {
              return (
                (parseInt(b(t).css('zIndex'), 10) || 0) -
                (parseInt(b(e).css('zIndex'), 10) || 0)
              );
            });
          i.length &&
            ((e = parseInt(b(i[0]).css('zIndex'), 10) || 0),
            b(i).each(function (t) {
              b(this).css('zIndex', e + t);
            }),
            this.css('zIndex', e + i.length));
        },
      }),
      b.ui.plugin.add('draggable', 'zIndex', {
        start: function (t, e) {
          var i = b(e.helper),
            s = b(this).data('ui-draggable').options;
          i.css('zIndex') && (s._zIndex = i.css('zIndex')),
            i.css('zIndex', s.zIndex);
        },
        stop: function (t, e) {
          var i = b(this).data('ui-draggable').options;
          i._zIndex && b(e.helper).css('zIndex', i._zIndex);
        },
      });
  })(jQuery),
  (function (r, t) {
    function d(t, e, i) {
      return e < t && t < e + i;
    }
    r.widget('ui.droppable', {
      version: '1.10.3',
      widgetEventPrefix: 'drop',
      options: {
        accept: '*',
        activeClass: !1,
        addClasses: !0,
        greedy: !1,
        hoverClass: !1,
        scope: 'default',
        tolerance: 'intersect',
        activate: null,
        deactivate: null,
        drop: null,
        out: null,
        over: null,
      },
      _create: function () {
        var t = this.options,
          e = t.accept;
        (this.isover = !1),
          (this.isout = !0),
          (this.accept = r.isFunction(e)
            ? e
            : function (t) {
                return t.is(e);
              }),
          (this.proportions = {
            width: this.element[0].offsetWidth,
            height: this.element[0].offsetHeight,
          }),
          (r.ui.ddmanager.droppables[t.scope] =
            r.ui.ddmanager.droppables[t.scope] || []),
          r.ui.ddmanager.droppables[t.scope].push(this),
          t.addClasses && this.element.addClass('ui-droppable');
      },
      _destroy: function () {
        for (
          var t = 0, e = r.ui.ddmanager.droppables[this.options.scope];
          t < e.length;
          t++
        )
          e[t] === this && e.splice(t, 1);
        this.element.removeClass('ui-droppable ui-droppable-disabled');
      },
      _setOption: function (t, e) {
        'accept' === t &&
          (this.accept = r.isFunction(e)
            ? e
            : function (t) {
                return t.is(e);
              }),
          r.Widget.prototype._setOption.apply(this, arguments);
      },
      _activate: function (t) {
        var e = r.ui.ddmanager.current;
        this.options.activeClass &&
          this.element.addClass(this.options.activeClass),
          e && this._trigger('activate', t, this.ui(e));
      },
      _deactivate: function (t) {
        var e = r.ui.ddmanager.current;
        this.options.activeClass &&
          this.element.removeClass(this.options.activeClass),
          e && this._trigger('deactivate', t, this.ui(e));
      },
      _over: function (t) {
        var e = r.ui.ddmanager.current;
        e &&
          (e.currentItem || e.element)[0] !== this.element[0] &&
          this.accept.call(this.element[0], e.currentItem || e.element) &&
          (this.options.hoverClass &&
            this.element.addClass(this.options.hoverClass),
          this._trigger('over', t, this.ui(e)));
      },
      _out: function (t) {
        var e = r.ui.ddmanager.current;
        e &&
          (e.currentItem || e.element)[0] !== this.element[0] &&
          this.accept.call(this.element[0], e.currentItem || e.element) &&
          (this.options.hoverClass &&
            this.element.removeClass(this.options.hoverClass),
          this._trigger('out', t, this.ui(e)));
      },
      _drop: function (t, e) {
        var i = e || r.ui.ddmanager.current,
          s = !1;
        return (
          !(!i || (i.currentItem || i.element)[0] === this.element[0]) &&
          (this.element
            .find(':data(ui-droppable)')
            .not('.ui-draggable-dragging')
            .each(function () {
              var t = r.data(this, 'ui-droppable');
              if (
                t.options.greedy &&
                !t.options.disabled &&
                t.options.scope === i.options.scope &&
                t.accept.call(t.element[0], i.currentItem || i.element) &&
                r.ui.intersect(
                  i,
                  r.extend(t, { offset: t.element.offset() }),
                  t.options.tolerance
                )
              )
                return !(s = !0);
            }),
          !s &&
            !!this.accept.call(this.element[0], i.currentItem || i.element) &&
            (this.options.activeClass &&
              this.element.removeClass(this.options.activeClass),
            this.options.hoverClass &&
              this.element.removeClass(this.options.hoverClass),
            this._trigger('drop', t, this.ui(i)),
            this.element))
        );
      },
      ui: function (t) {
        return {
          draggable: t.currentItem || t.element,
          helper: t.helper,
          position: t.position,
          offset: t.positionAbs,
        };
      },
    }),
      (r.ui.intersect = function (t, e, i) {
        if (!e.offset) return !1;
        var s,
          n = (t.positionAbs || t.position.absolute).left,
          o = n + t.helperProportions.width,
          a = (t.positionAbs || t.position.absolute).top,
          r = a + t.helperProportions.height,
          h = e.offset.left,
          l = h + e.proportions.width,
          c = e.offset.top,
          u = c + e.proportions.height;
        switch (i) {
          case 'fit':
            return h <= n && o <= l && c <= a && r <= u;
          case 'intersect':
            return (
              h < n + t.helperProportions.width / 2 &&
              o - t.helperProportions.width / 2 < l &&
              c < a + t.helperProportions.height / 2 &&
              r - t.helperProportions.height / 2 < u
            );
          case 'pointer':
            return (
              (s =
                (t.positionAbs || t.position.absolute).left +
                (t.clickOffset || t.offset.click).left),
              d(
                (t.positionAbs || t.position.absolute).top +
                  (t.clickOffset || t.offset.click).top,
                c,
                e.proportions.height
              ) && d(s, h, e.proportions.width)
            );
          case 'touch':
            return (
              ((c <= a && a <= u) || (c <= r && r <= u) || (a < c && u < r)) &&
              ((h <= n && n <= l) || (h <= o && o <= l) || (n < h && l < o))
            );
          default:
            return !1;
        }
      }),
      (r.ui.ddmanager = {
        current: null,
        droppables: { default: [] },
        prepareOffsets: function (t, e) {
          var i,
            s,
            n = r.ui.ddmanager.droppables[t.options.scope] || [],
            o = e ? e.type : null,
            a = (t.currentItem || t.element)
              .find(':data(ui-droppable)')
              .addBack();
          t: for (i = 0; i < n.length; i++)
            if (
              !(
                n[i].options.disabled ||
                (t &&
                  !n[i].accept.call(
                    n[i].element[0],
                    t.currentItem || t.element
                  ))
              )
            ) {
              for (s = 0; s < a.length; s++)
                if (a[s] === n[i].element[0]) {
                  n[i].proportions.height = 0;
                  continue t;
                }
              (n[i].visible = 'none' !== n[i].element.css('display')),
                n[i].visible &&
                  ('mousedown' === o && n[i]._activate.call(n[i], e),
                  (n[i].offset = n[i].element.offset()),
                  (n[i].proportions = {
                    width: n[i].element[0].offsetWidth,
                    height: n[i].element[0].offsetHeight,
                  }));
            }
        },
        drop: function (t, e) {
          var i = !1;
          return (
            r.each(
              (r.ui.ddmanager.droppables[t.options.scope] || []).slice(),
              function () {
                this.options &&
                  (!this.options.disabled &&
                    this.visible &&
                    r.ui.intersect(t, this, this.options.tolerance) &&
                    (i = this._drop.call(this, e) || i),
                  !this.options.disabled &&
                    this.visible &&
                    this.accept.call(
                      this.element[0],
                      t.currentItem || t.element
                    ) &&
                    ((this.isout = !0),
                    (this.isover = !1),
                    this._deactivate.call(this, e)));
              }
            ),
            i
          );
        },
        dragStart: function (t, e) {
          t.element.parentsUntil('body').bind('scroll.droppable', function () {
            t.options.refreshPositions || r.ui.ddmanager.prepareOffsets(t, e);
          });
        },
        drag: function (o, a) {
          o.options.refreshPositions && r.ui.ddmanager.prepareOffsets(o, a),
            r.each(
              r.ui.ddmanager.droppables[o.options.scope] || [],
              function () {
                if (
                  !this.options.disabled &&
                  !this.greedyChild &&
                  this.visible
                ) {
                  var t,
                    e,
                    i,
                    s = r.ui.intersect(o, this, this.options.tolerance),
                    n =
                      !s && this.isover
                        ? 'isout'
                        : s && !this.isover
                        ? 'isover'
                        : null;
                  n &&
                    (this.options.greedy &&
                      ((e = this.options.scope),
                      (i = this.element
                        .parents(':data(ui-droppable)')
                        .filter(function () {
                          return (
                            r.data(this, 'ui-droppable').options.scope === e
                          );
                        })).length &&
                        ((t = r.data(i[0], 'ui-droppable')).greedyChild =
                          'isover' === n)),
                    t &&
                      'isover' === n &&
                      ((t.isover = !1), (t.isout = !0), t._out.call(t, a)),
                    (this[n] = !0),
                    (this['isout' === n ? 'isover' : 'isout'] = !1),
                    this['isover' === n ? '_over' : '_out'].call(this, a),
                    t &&
                      'isout' === n &&
                      ((t.isout = !1), (t.isover = !0), t._over.call(t, a)));
                }
              }
            );
        },
        dragStop: function (t, e) {
          t.element.parentsUntil('body').unbind('scroll.droppable'),
            t.options.refreshPositions || r.ui.ddmanager.prepareOffsets(t, e);
        },
      });
  })(jQuery),
  (function (v, t) {
    function d(t) {
      return parseInt(t, 10) || 0;
    }
    function u(t) {
      return !isNaN(parseInt(t, 10));
    }
    v.widget('ui.resizable', v.ui.mouse, {
      version: '1.10.3',
      widgetEventPrefix: 'resize',
      options: {
        alsoResize: !1,
        animate: !1,
        animateDuration: 'slow',
        animateEasing: 'swing',
        aspectRatio: !1,
        autoHide: !1,
        containment: !1,
        ghost: !1,
        grid: !1,
        handles: 'e,s,se',
        helper: !1,
        maxHeight: null,
        maxWidth: null,
        minHeight: 10,
        minWidth: 10,
        zIndex: 90,
        resize: null,
        start: null,
        stop: null,
      },
      _create: function () {
        var t,
          e,
          i,
          s,
          n = this,
          o = this.options;
        if (
          (this.element.addClass('ui-resizable'),
          v.extend(this, {
            _aspectRatio: !!o.aspectRatio,
            aspectRatio: o.aspectRatio,
            originalElement: this.element,
            _proportionallyResizeElements: [],
            _helper:
              o.helper || o.ghost || o.animate
                ? o.helper || 'ui-resizable-helper'
                : null,
          }),
          this.element[0].nodeName.match(
            /canvas|textarea|input|select|button|img/i
          ) &&
            (this.element.wrap(
              v("<div class='ui-wrapper' style='overflow: hidden;'></div>").css(
                {
                  position: this.element.css('position'),
                  width: this.element.outerWidth(),
                  height: this.element.outerHeight(),
                  top: this.element.css('top'),
                  left: this.element.css('left'),
                }
              )
            ),
            (this.element = this.element
              .parent()
              .data('ui-resizable', this.element.data('ui-resizable'))),
            (this.elementIsWrapper = !0),
            this.element.css({
              marginLeft: this.originalElement.css('marginLeft'),
              marginTop: this.originalElement.css('marginTop'),
              marginRight: this.originalElement.css('marginRight'),
              marginBottom: this.originalElement.css('marginBottom'),
            }),
            this.originalElement.css({
              marginLeft: 0,
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
            }),
            (this.originalResizeStyle = this.originalElement.css('resize')),
            this.originalElement.css('resize', 'none'),
            this._proportionallyResizeElements.push(
              this.originalElement.css({
                position: 'static',
                zoom: 1,
                display: 'block',
              })
            ),
            this.originalElement.css({
              margin: this.originalElement.css('margin'),
            }),
            this._proportionallyResize()),
          (this.handles =
            o.handles ||
            (v('.ui-resizable-handle', this.element).length
              ? {
                  n: '.ui-resizable-n',
                  e: '.ui-resizable-e',
                  s: '.ui-resizable-s',
                  w: '.ui-resizable-w',
                  se: '.ui-resizable-se',
                  sw: '.ui-resizable-sw',
                  ne: '.ui-resizable-ne',
                  nw: '.ui-resizable-nw',
                }
              : 'e,s,se')),
          this.handles.constructor === String)
        )
          for (
            'all' === this.handles && (this.handles = 'n,e,s,w,se,sw,ne,nw'),
              t = this.handles.split(','),
              this.handles = {},
              e = 0;
            e < t.length;
            e++
          )
            (i = v.trim(t[e])),
              (s = v(
                "<div class='ui-resizable-handle " +
                  ('ui-resizable-' + i) +
                  "'></div>"
              )).css({ zIndex: o.zIndex }),
              'se' === i && s.addClass('ui-icon ui-icon-gripsmall-diagonal-se'),
              (this.handles[i] = '.ui-resizable-' + i),
              this.element.append(s);
        (this._renderAxis = function (t) {
          var e, i, s, n;
          for (e in ((t = t || this.element), this.handles))
            this.handles[e].constructor === String &&
              (this.handles[e] = v(this.handles[e], this.element).show()),
              this.elementIsWrapper &&
                this.originalElement[0].nodeName.match(
                  /textarea|input|select|button/i
                ) &&
                ((i = v(this.handles[e], this.element)),
                (n = /sw|ne|nw|se|n|s/.test(e)
                  ? i.outerHeight()
                  : i.outerWidth()),
                (s = [
                  'padding',
                  /ne|nw|n/.test(e)
                    ? 'Top'
                    : /se|sw|s/.test(e)
                    ? 'Bottom'
                    : /^e$/.test(e)
                    ? 'Right'
                    : 'Left',
                ].join('')),
                t.css(s, n),
                this._proportionallyResize()),
              v(this.handles[e]).length;
        }),
          this._renderAxis(this.element),
          (this._handles = v(
            '.ui-resizable-handle',
            this.element
          ).disableSelection()),
          this._handles.mouseover(function () {
            n.resizing ||
              (this.className &&
                (s = this.className.match(
                  /ui-resizable-(se|sw|ne|nw|n|e|s|w)/i
                )),
              (n.axis = s && s[1] ? s[1] : 'se'));
          }),
          o.autoHide &&
            (this._handles.hide(),
            v(this.element)
              .addClass('ui-resizable-autohide')
              .mouseenter(function () {
                o.disabled ||
                  (v(this).removeClass('ui-resizable-autohide'),
                  n._handles.show());
              })
              .mouseleave(function () {
                o.disabled ||
                  n.resizing ||
                  (v(this).addClass('ui-resizable-autohide'),
                  n._handles.hide());
              })),
          this._mouseInit();
      },
      _destroy: function () {
        this._mouseDestroy();
        var t,
          e = function (t) {
            v(t)
              .removeClass(
                'ui-resizable ui-resizable-disabled ui-resizable-resizing'
              )
              .removeData('resizable')
              .removeData('ui-resizable')
              .unbind('.resizable')
              .find('.ui-resizable-handle')
              .remove();
          };
        return (
          this.elementIsWrapper &&
            (e(this.element),
            (t = this.element),
            this.originalElement
              .css({
                position: t.css('position'),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css('top'),
                left: t.css('left'),
              })
              .insertAfter(t),
            t.remove()),
          this.originalElement.css('resize', this.originalResizeStyle),
          e(this.originalElement),
          this
        );
      },
      _mouseCapture: function (t) {
        var e,
          i,
          s = !1;
        for (e in this.handles)
          ((i = v(this.handles[e])[0]) === t.target ||
            v.contains(i, t.target)) &&
            (s = !0);
        return !this.options.disabled && s;
      },
      _mouseStart: function (t) {
        var e,
          i,
          s,
          n = this.options,
          o = this.element.position(),
          a = this.element;
        return (
          (this.resizing = !0),
          /absolute/.test(a.css('position'))
            ? a.css({
                position: 'absolute',
                top: a.css('top'),
                left: a.css('left'),
              })
            : a.is('.ui-draggable') &&
              a.css({ position: 'absolute', top: o.top, left: o.left }),
          this._renderProxy(),
          (e = d(this.helper.css('left'))),
          (i = d(this.helper.css('top'))),
          n.containment &&
            ((e += v(n.containment).scrollLeft() || 0),
            (i += v(n.containment).scrollTop() || 0)),
          (this.offset = this.helper.offset()),
          (this.position = { left: e, top: i }),
          (this.size = this._helper
            ? { width: a.outerWidth(), height: a.outerHeight() }
            : { width: a.width(), height: a.height() }),
          (this.originalSize = this._helper
            ? { width: a.outerWidth(), height: a.outerHeight() }
            : { width: a.width(), height: a.height() }),
          (this.originalPosition = { left: e, top: i }),
          (this.sizeDiff = {
            width: a.outerWidth() - a.width(),
            height: a.outerHeight() - a.height(),
          }),
          (this.originalMousePosition = { left: t.pageX, top: t.pageY }),
          (this.aspectRatio =
            'number' == typeof n.aspectRatio
              ? n.aspectRatio
              : this.originalSize.width / this.originalSize.height || 1),
          (s = v('.ui-resizable-' + this.axis).css('cursor')),
          v('body').css('cursor', 'auto' === s ? this.axis + '-resize' : s),
          a.addClass('ui-resizable-resizing'),
          this._propagate('start', t),
          !0
        );
      },
      _mouseDrag: function (t) {
        var e,
          i = this.helper,
          s = {},
          n = this.originalMousePosition,
          o = this.axis,
          a = this.position.top,
          r = this.position.left,
          h = this.size.width,
          l = this.size.height,
          c = t.pageX - n.left || 0,
          u = t.pageY - n.top || 0,
          d = this._change[o];
        return (
          d &&
            ((e = d.apply(this, [t, c, u])),
            this._updateVirtualBoundaries(t.shiftKey),
            (this._aspectRatio || t.shiftKey) && (e = this._updateRatio(e, t)),
            (e = this._respectSize(e, t)),
            this._updateCache(e),
            this._propagate('resize', t),
            this.position.top !== a && (s.top = this.position.top + 'px'),
            this.position.left !== r && (s.left = this.position.left + 'px'),
            this.size.width !== h && (s.width = this.size.width + 'px'),
            this.size.height !== l && (s.height = this.size.height + 'px'),
            i.css(s),
            !this._helper &&
              this._proportionallyResizeElements.length &&
              this._proportionallyResize(),
            v.isEmptyObject(s) || this._trigger('resize', t, this.ui())),
          !1
        );
      },
      _mouseStop: function (t) {
        this.resizing = !1;
        var e,
          i,
          s,
          n,
          o,
          a,
          r,
          h = this.options,
          l = this;
        return (
          this._helper &&
            ((s =
              (i =
                (e = this._proportionallyResizeElements).length &&
                /textarea/i.test(e[0].nodeName)) && v.ui.hasScroll(e[0], 'left')
                ? 0
                : l.sizeDiff.height),
            (n = i ? 0 : l.sizeDiff.width),
            (o = {
              width: l.helper.width() - n,
              height: l.helper.height() - s,
            }),
            (a =
              parseInt(l.element.css('left'), 10) +
                (l.position.left - l.originalPosition.left) || null),
            (r =
              parseInt(l.element.css('top'), 10) +
                (l.position.top - l.originalPosition.top) || null),
            h.animate || this.element.css(v.extend(o, { top: r, left: a })),
            l.helper.height(l.size.height),
            l.helper.width(l.size.width),
            this._helper && !h.animate && this._proportionallyResize()),
          v('body').css('cursor', 'auto'),
          this.element.removeClass('ui-resizable-resizing'),
          this._propagate('stop', t),
          this._helper && this.helper.remove(),
          !1
        );
      },
      _updateVirtualBoundaries: function (t) {
        var e,
          i,
          s,
          n,
          o,
          a = this.options;
        (o = {
          minWidth: u(a.minWidth) ? a.minWidth : 0,
          maxWidth: u(a.maxWidth) ? a.maxWidth : Infinity,
          minHeight: u(a.minHeight) ? a.minHeight : 0,
          maxHeight: u(a.maxHeight) ? a.maxHeight : Infinity,
        }),
          (this._aspectRatio || t) &&
            ((e = o.minHeight * this.aspectRatio),
            (s = o.minWidth / this.aspectRatio),
            (i = o.maxHeight * this.aspectRatio),
            (n = o.maxWidth / this.aspectRatio),
            e > o.minWidth && (o.minWidth = e),
            s > o.minHeight && (o.minHeight = s),
            i < o.maxWidth && (o.maxWidth = i),
            n < o.maxHeight && (o.maxHeight = n)),
          (this._vBoundaries = o);
      },
      _updateCache: function (t) {
        (this.offset = this.helper.offset()),
          u(t.left) && (this.position.left = t.left),
          u(t.top) && (this.position.top = t.top),
          u(t.height) && (this.size.height = t.height),
          u(t.width) && (this.size.width = t.width);
      },
      _updateRatio: function (t) {
        var e = this.position,
          i = this.size,
          s = this.axis;
        return (
          u(t.height)
            ? (t.width = t.height * this.aspectRatio)
            : u(t.width) && (t.height = t.width / this.aspectRatio),
          'sw' === s &&
            ((t.left = e.left + (i.width - t.width)), (t.top = null)),
          'nw' === s &&
            ((t.top = e.top + (i.height - t.height)),
            (t.left = e.left + (i.width - t.width))),
          t
        );
      },
      _respectSize: function (t) {
        var e = this._vBoundaries,
          i = this.axis,
          s = u(t.width) && e.maxWidth && e.maxWidth < t.width,
          n = u(t.height) && e.maxHeight && e.maxHeight < t.height,
          o = u(t.width) && e.minWidth && e.minWidth > t.width,
          a = u(t.height) && e.minHeight && e.minHeight > t.height,
          r = this.originalPosition.left + this.originalSize.width,
          h = this.position.top + this.size.height,
          l = /sw|nw|w/.test(i),
          c = /nw|ne|n/.test(i);
        return (
          o && (t.width = e.minWidth),
          a && (t.height = e.minHeight),
          s && (t.width = e.maxWidth),
          n && (t.height = e.maxHeight),
          o && l && (t.left = r - e.minWidth),
          s && l && (t.left = r - e.maxWidth),
          a && c && (t.top = h - e.minHeight),
          n && c && (t.top = h - e.maxHeight),
          t.width || t.height || t.left || !t.top
            ? t.width || t.height || t.top || !t.left || (t.left = null)
            : (t.top = null),
          t
        );
      },
      _proportionallyResize: function () {
        if (this._proportionallyResizeElements.length) {
          var t,
            e,
            i,
            s,
            n,
            o = this.helper || this.element;
          for (t = 0; t < this._proportionallyResizeElements.length; t++) {
            if (((n = this._proportionallyResizeElements[t]), !this.borderDif))
              for (
                this.borderDif = [],
                  i = [
                    n.css('borderTopWidth'),
                    n.css('borderRightWidth'),
                    n.css('borderBottomWidth'),
                    n.css('borderLeftWidth'),
                  ],
                  s = [
                    n.css('paddingTop'),
                    n.css('paddingRight'),
                    n.css('paddingBottom'),
                    n.css('paddingLeft'),
                  ],
                  e = 0;
                e < i.length;
                e++
              )
                this.borderDif[e] =
                  (parseInt(i[e], 10) || 0) + (parseInt(s[e], 10) || 0);
            n.css({
              height: o.height() - this.borderDif[0] - this.borderDif[2] || 0,
              width: o.width() - this.borderDif[1] - this.borderDif[3] || 0,
            });
          }
        }
      },
      _renderProxy: function () {
        var t = this.element,
          e = this.options;
        (this.elementOffset = t.offset()),
          this._helper
            ? ((this.helper =
                this.helper || v("<div style='overflow:hidden;'></div>")),
              this.helper
                .addClass(this._helper)
                .css({
                  width: this.element.outerWidth() - 1,
                  height: this.element.outerHeight() - 1,
                  position: 'absolute',
                  left: this.elementOffset.left + 'px',
                  top: this.elementOffset.top + 'px',
                  zIndex: ++e.zIndex,
                }),
              this.helper.appendTo('body').disableSelection())
            : (this.helper = this.element);
      },
      _change: {
        e: function (t, e) {
          return { width: this.originalSize.width + e };
        },
        w: function (t, e) {
          var i = this.originalSize;
          return { left: this.originalPosition.left + e, width: i.width - e };
        },
        n: function (t, e, i) {
          var s = this.originalSize;
          return { top: this.originalPosition.top + i, height: s.height - i };
        },
        s: function (t, e, i) {
          return { height: this.originalSize.height + i };
        },
        se: function (t, e, i) {
          return v.extend(
            this._change.s.apply(this, arguments),
            this._change.e.apply(this, [t, e, i])
          );
        },
        sw: function (t, e, i) {
          return v.extend(
            this._change.s.apply(this, arguments),
            this._change.w.apply(this, [t, e, i])
          );
        },
        ne: function (t, e, i) {
          return v.extend(
            this._change.n.apply(this, arguments),
            this._change.e.apply(this, [t, e, i])
          );
        },
        nw: function (t, e, i) {
          return v.extend(
            this._change.n.apply(this, arguments),
            this._change.w.apply(this, [t, e, i])
          );
        },
      },
      _propagate: function (t, e) {
        v.ui.plugin.call(this, t, [e, this.ui()]),
          'resize' !== t && this._trigger(t, e, this.ui());
      },
      plugins: {},
      ui: function () {
        return {
          originalElement: this.originalElement,
          element: this.element,
          helper: this.helper,
          position: this.position,
          size: this.size,
          originalSize: this.originalSize,
          originalPosition: this.originalPosition,
        };
      },
    }),
      v.ui.plugin.add('resizable', 'animate', {
        stop: function (e) {
          var i = v(this).data('ui-resizable'),
            t = i.options,
            s = i._proportionallyResizeElements,
            n = s.length && /textarea/i.test(s[0].nodeName),
            o = n && v.ui.hasScroll(s[0], 'left') ? 0 : i.sizeDiff.height,
            a = n ? 0 : i.sizeDiff.width,
            r = { width: i.size.width - a, height: i.size.height - o },
            h =
              parseInt(i.element.css('left'), 10) +
                (i.position.left - i.originalPosition.left) || null,
            l =
              parseInt(i.element.css('top'), 10) +
                (i.position.top - i.originalPosition.top) || null;
          i.element.animate(v.extend(r, l && h ? { top: l, left: h } : {}), {
            duration: t.animateDuration,
            easing: t.animateEasing,
            step: function () {
              var t = {
                width: parseInt(i.element.css('width'), 10),
                height: parseInt(i.element.css('height'), 10),
                top: parseInt(i.element.css('top'), 10),
                left: parseInt(i.element.css('left'), 10),
              };
              s &&
                s.length &&
                v(s[0]).css({ width: t.width, height: t.height }),
                i._updateCache(t),
                i._propagate('resize', e);
            },
          });
        },
      }),
      v.ui.plugin.add('resizable', 'containment', {
        start: function () {
          var i,
            s,
            t,
            e,
            n,
            o,
            a,
            r = v(this).data('ui-resizable'),
            h = r.options,
            l = r.element,
            c = h.containment,
            u =
              c instanceof v
                ? c.get(0)
                : /parent/.test(c)
                ? l.parent().get(0)
                : c;
          u &&
            ((r.containerElement = v(u)),
            /document/.test(c) || c === document
              ? ((r.containerOffset = { left: 0, top: 0 }),
                (r.containerPosition = { left: 0, top: 0 }),
                (r.parentData = {
                  element: v(document),
                  left: 0,
                  top: 0,
                  width: v(document).width(),
                  height:
                    v(document).height() ||
                    document.body.parentNode.scrollHeight,
                }))
              : ((i = v(u)),
                (s = []),
                v(['Top', 'Right', 'Left', 'Bottom']).each(function (t, e) {
                  s[t] = d(i.css('padding' + e));
                }),
                (r.containerOffset = i.offset()),
                (r.containerPosition = i.position()),
                (r.containerSize = {
                  height: i.innerHeight() - s[3],
                  width: i.innerWidth() - s[1],
                }),
                (t = r.containerOffset),
                (e = r.containerSize.height),
                (n = r.containerSize.width),
                (o = v.ui.hasScroll(u, 'left') ? u.scrollWidth : n),
                (a = v.ui.hasScroll(u) ? u.scrollHeight : e),
                (r.parentData = {
                  element: u,
                  left: t.left,
                  top: t.top,
                  width: o,
                  height: a,
                })));
        },
        resize: function (t) {
          var e,
            i,
            s,
            n,
            o = v(this).data('ui-resizable'),
            a = o.options,
            r = o.containerOffset,
            h = o.position,
            l = o._aspectRatio || t.shiftKey,
            c = { top: 0, left: 0 },
            u = o.containerElement;
          u[0] !== document && /static/.test(u.css('position')) && (c = r),
            h.left < (o._helper ? r.left : 0) &&
              ((o.size.width =
                o.size.width +
                (o._helper
                  ? o.position.left - r.left
                  : o.position.left - c.left)),
              l && (o.size.height = o.size.width / o.aspectRatio),
              (o.position.left = a.helper ? r.left : 0)),
            h.top < (o._helper ? r.top : 0) &&
              ((o.size.height =
                o.size.height +
                (o._helper ? o.position.top - r.top : o.position.top)),
              l && (o.size.width = o.size.height * o.aspectRatio),
              (o.position.top = o._helper ? r.top : 0)),
            (o.offset.left = o.parentData.left + o.position.left),
            (o.offset.top = o.parentData.top + o.position.top),
            (e = Math.abs(
              (o._helper, o.offset.left - c.left + o.sizeDiff.width)
            )),
            (i = Math.abs(
              (o._helper ? o.offset.top - c.top : o.offset.top - r.top) +
                o.sizeDiff.height
            )),
            (s = o.containerElement.get(0) === o.element.parent().get(0)),
            (n = /relative|absolute/.test(o.containerElement.css('position'))),
            s && n && (e -= o.parentData.left),
            e + o.size.width >= o.parentData.width &&
              ((o.size.width = o.parentData.width - e),
              l && (o.size.height = o.size.width / o.aspectRatio)),
            i + o.size.height >= o.parentData.height &&
              ((o.size.height = o.parentData.height - i),
              l && (o.size.width = o.size.height * o.aspectRatio));
        },
        stop: function () {
          var t = v(this).data('ui-resizable'),
            e = t.options,
            i = t.containerOffset,
            s = t.containerPosition,
            n = t.containerElement,
            o = v(t.helper),
            a = o.offset(),
            r = o.outerWidth() - t.sizeDiff.width,
            h = o.outerHeight() - t.sizeDiff.height;
          t._helper &&
            !e.animate &&
            /relative/.test(n.css('position')) &&
            v(this).css({
              left: a.left - s.left - i.left,
              width: r,
              height: h,
            }),
            t._helper &&
              !e.animate &&
              /static/.test(n.css('position')) &&
              v(this).css({
                left: a.left - s.left - i.left,
                width: r,
                height: h,
              });
        },
      }),
      v.ui.plugin.add('resizable', 'alsoResize', {
        start: function () {
          var t = v(this).data('ui-resizable').options,
            e = function (t) {
              v(t).each(function () {
                var t = v(this);
                t.data('ui-resizable-alsoresize', {
                  width: parseInt(t.width(), 10),
                  height: parseInt(t.height(), 10),
                  left: parseInt(t.css('left'), 10),
                  top: parseInt(t.css('top'), 10),
                });
              });
            };
          'object' != typeof t.alsoResize || t.alsoResize.parentNode
            ? e(t.alsoResize)
            : t.alsoResize.length
            ? ((t.alsoResize = t.alsoResize[0]), e(t.alsoResize))
            : v.each(t.alsoResize, function (t) {
                e(t);
              });
        },
        resize: function (t, o) {
          var e = v(this).data('ui-resizable'),
            i = e.options,
            s = e.originalSize,
            n = e.originalPosition,
            a = {
              height: e.size.height - s.height || 0,
              width: e.size.width - s.width || 0,
              top: e.position.top - n.top || 0,
              left: e.position.left - n.left || 0,
            },
            r = function (t, i) {
              v(t).each(function () {
                var t = v(this),
                  s = v(this).data('ui-resizable-alsoresize'),
                  n = {},
                  e =
                    i && i.length
                      ? i
                      : t.parents(o.originalElement[0]).length
                      ? ['width', 'height']
                      : ['width', 'height', 'top', 'left'];
                v.each(e, function (t, e) {
                  var i = (s[e] || 0) + (a[e] || 0);
                  i && 0 <= i && (n[e] = i || null);
                }),
                  t.css(n);
              });
            };
          'object' != typeof i.alsoResize || i.alsoResize.nodeType
            ? r(i.alsoResize)
            : v.each(i.alsoResize, function (t, e) {
                r(t, e);
              });
        },
        stop: function () {
          v(this).removeData('resizable-alsoresize');
        },
      }),
      v.ui.plugin.add('resizable', 'ghost', {
        start: function () {
          var t = v(this).data('ui-resizable'),
            e = t.options,
            i = t.size;
          (t.ghost = t.originalElement.clone()),
            t.ghost
              .css({
                opacity: 0.25,
                display: 'block',
                position: 'relative',
                height: i.height,
                width: i.width,
                margin: 0,
                left: 0,
                top: 0,
              })
              .addClass('ui-resizable-ghost')
              .addClass('string' == typeof e.ghost ? e.ghost : ''),
            t.ghost.appendTo(t.helper);
        },
        resize: function () {
          var t = v(this).data('ui-resizable');
          t.ghost &&
            t.ghost.css({
              position: 'relative',
              height: t.size.height,
              width: t.size.width,
            });
        },
        stop: function () {
          var t = v(this).data('ui-resizable');
          t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0));
        },
      }),
      v.ui.plugin.add('resizable', 'grid', {
        resize: function () {
          var t = v(this).data('ui-resizable'),
            e = t.options,
            i = t.size,
            s = t.originalSize,
            n = t.originalPosition,
            o = t.axis,
            a = 'number' == typeof e.grid ? [e.grid, e.grid] : e.grid,
            r = a[0] || 1,
            h = a[1] || 1,
            l = Math.round((i.width - s.width) / r) * r,
            c = Math.round((i.height - s.height) / h) * h,
            u = s.width + l,
            d = s.height + c,
            p = e.maxWidth && e.maxWidth < u,
            f = e.maxHeight && e.maxHeight < d,
            g = e.minWidth && e.minWidth > u,
            m = e.minHeight && e.minHeight > d;
          (e.grid = a),
            g && (u += r),
            m && (d += h),
            p && (u -= r),
            f && (d -= h),
            /^(se|s|e)$/.test(o)
              ? ((t.size.width = u), (t.size.height = d))
              : /^(ne)$/.test(o)
              ? ((t.size.width = u),
                (t.size.height = d),
                (t.position.top = n.top - c))
              : (/^(sw)$/.test(o)
                  ? ((t.size.width = u), (t.size.height = d))
                  : ((t.size.width = u),
                    (t.size.height = d),
                    (t.position.top = n.top - c)),
                (t.position.left = n.left - l));
        },
      });
  })(jQuery),
  (function (l, t) {
    l.widget('ui.selectable', l.ui.mouse, {
      version: '1.10.3',
      options: {
        appendTo: 'body',
        autoRefresh: !0,
        distance: 0,
        filter: '*',
        tolerance: 'touch',
        selected: null,
        selecting: null,
        start: null,
        stop: null,
        unselected: null,
        unselecting: null,
      },
      _create: function () {
        var t,
          e = this;
        this.element.addClass('ui-selectable'),
          (this.dragged = !1),
          (this.refresh = function () {
            (t = l(e.options.filter, e.element[0])).addClass('ui-selectee'),
              t.each(function () {
                var t = l(this),
                  e = t.offset();
                l.data(this, 'selectable-item', {
                  element: this,
                  $element: t,
                  left: e.left,
                  top: e.top,
                  right: e.left + t.outerWidth(),
                  bottom: e.top + t.outerHeight(),
                  startselected: !1,
                  selected: t.hasClass('ui-selected'),
                  selecting: t.hasClass('ui-selecting'),
                  unselecting: t.hasClass('ui-unselecting'),
                });
              });
          }),
          this.refresh(),
          (this.selectees = t.addClass('ui-selectee')),
          this._mouseInit(),
          (this.helper = l("<div class='ui-selectable-helper'></div>"));
      },
      _destroy: function () {
        this.selectees.removeClass('ui-selectee').removeData('selectable-item'),
          this.element.removeClass('ui-selectable ui-selectable-disabled'),
          this._mouseDestroy();
      },
      _mouseStart: function (i) {
        var s = this,
          t = this.options;
        (this.opos = [i.pageX, i.pageY]),
          this.options.disabled ||
            ((this.selectees = l(t.filter, this.element[0])),
            this._trigger('start', i),
            l(t.appendTo).append(this.helper),
            this.helper.css({
              left: i.pageX,
              top: i.pageY,
              width: 0,
              height: 0,
            }),
            t.autoRefresh && this.refresh(),
            this.selectees.filter('.ui-selected').each(function () {
              var t = l.data(this, 'selectable-item');
              (t.startselected = !0),
                i.metaKey ||
                  i.ctrlKey ||
                  (t.$element.removeClass('ui-selected'),
                  (t.selected = !1),
                  t.$element.addClass('ui-unselecting'),
                  (t.unselecting = !0),
                  s._trigger('unselecting', i, { unselecting: t.element }));
            }),
            l(i.target)
              .parents()
              .addBack()
              .each(function () {
                var t,
                  e = l.data(this, 'selectable-item');
                if (e)
                  return (
                    (t =
                      (!i.metaKey && !i.ctrlKey) ||
                      !e.$element.hasClass('ui-selected')),
                    e.$element
                      .removeClass(t ? 'ui-unselecting' : 'ui-selected')
                      .addClass(t ? 'ui-selecting' : 'ui-unselecting'),
                    (e.unselecting = !t),
                    (e.selecting = t),
                    (e.selected = t)
                      ? s._trigger('selecting', i, { selecting: e.element })
                      : s._trigger('unselecting', i, {
                          unselecting: e.element,
                        }),
                    !1
                  );
              }));
      },
      _mouseDrag: function (i) {
        if (((this.dragged = !0), !this.options.disabled)) {
          var t,
            s = this,
            n = this.options,
            o = this.opos[0],
            a = this.opos[1],
            r = i.pageX,
            h = i.pageY;
          return (
            r < o && ((t = r), (r = o), (o = t)),
            h < a && ((t = h), (h = a), (a = t)),
            this.helper.css({ left: o, top: a, width: r - o, height: h - a }),
            this.selectees.each(function () {
              var t = l.data(this, 'selectable-item'),
                e = !1;
              t &&
                t.element !== s.element[0] &&
                ('touch' === n.tolerance
                  ? (e = !(
                      t.left > r ||
                      t.right < o ||
                      t.top > h ||
                      t.bottom < a
                    ))
                  : 'fit' === n.tolerance &&
                    (e =
                      t.left > o && t.right < r && t.top > a && t.bottom < h),
                e
                  ? (t.selected &&
                      (t.$element.removeClass('ui-selected'),
                      (t.selected = !1)),
                    t.unselecting &&
                      (t.$element.removeClass('ui-unselecting'),
                      (t.unselecting = !1)),
                    t.selecting ||
                      (t.$element.addClass('ui-selecting'),
                      (t.selecting = !0),
                      s._trigger('selecting', i, { selecting: t.element })))
                  : (t.selecting &&
                      ((i.metaKey || i.ctrlKey) && t.startselected
                        ? (t.$element.removeClass('ui-selecting'),
                          (t.selecting = !1),
                          t.$element.addClass('ui-selected'),
                          (t.selected = !0))
                        : (t.$element.removeClass('ui-selecting'),
                          (t.selecting = !1),
                          t.startselected &&
                            (t.$element.addClass('ui-unselecting'),
                            (t.unselecting = !0)),
                          s._trigger('unselecting', i, {
                            unselecting: t.element,
                          }))),
                    t.selected &&
                      (i.metaKey ||
                        i.ctrlKey ||
                        t.startselected ||
                        (t.$element.removeClass('ui-selected'),
                        (t.selected = !1),
                        t.$element.addClass('ui-unselecting'),
                        (t.unselecting = !0),
                        s._trigger('unselecting', i, {
                          unselecting: t.element,
                        })))));
            }),
            !1
          );
        }
      },
      _mouseStop: function (e) {
        var i = this;
        return (
          (this.dragged = !1),
          l('.ui-unselecting', this.element[0]).each(function () {
            var t = l.data(this, 'selectable-item');
            t.$element.removeClass('ui-unselecting'),
              (t.unselecting = !1),
              (t.startselected = !1),
              i._trigger('unselected', e, { unselected: t.element });
          }),
          l('.ui-selecting', this.element[0]).each(function () {
            var t = l.data(this, 'selectable-item');
            t.$element.removeClass('ui-selecting').addClass('ui-selected'),
              (t.selecting = !1),
              (t.selected = !0),
              (t.startselected = !0),
              i._trigger('selected', e, { selected: t.element });
          }),
          this._trigger('stop', e),
          this.helper.remove(),
          !1
        );
      },
    });
  })(jQuery),
  (function (p, t) {
    function f(t, e, i) {
      return e < t && t < e + i;
    }
    function g(t) {
      return (
        /left|right/.test(t.css('float')) ||
        /inline|table-cell/.test(t.css('display'))
      );
    }
    p.widget('ui.sortable', p.ui.mouse, {
      version: '1.10.3',
      widgetEventPrefix: 'sort',
      ready: !1,
      options: {
        appendTo: 'parent',
        axis: !1,
        connectWith: !1,
        containment: !1,
        cursor: 'auto',
        cursorAt: !1,
        dropOnEmpty: !0,
        forcePlaceholderSize: !1,
        forceHelperSize: !1,
        grid: !1,
        handle: !1,
        helper: 'original',
        items: '> *',
        opacity: !1,
        placeholder: !1,
        revert: !1,
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        scope: 'default',
        tolerance: 'intersect',
        zIndex: 1e3,
        activate: null,
        beforeStop: null,
        change: null,
        deactivate: null,
        out: null,
        over: null,
        receive: null,
        remove: null,
        sort: null,
        start: null,
        stop: null,
        update: null,
      },
      _create: function () {
        var t = this.options;
        (this.containerCache = {}),
          this.element.addClass('ui-sortable'),
          this.refresh(),
          (this.floating =
            !!this.items.length && ('x' === t.axis || g(this.items[0].item))),
          (this.offset = this.element.offset()),
          this._mouseInit(),
          (this.ready = !0);
      },
      _destroy: function () {
        this.element.removeClass('ui-sortable ui-sortable-disabled'),
          this._mouseDestroy();
        for (var t = this.items.length - 1; 0 <= t; t--)
          this.items[t].item.removeData(this.widgetName + '-item');
        return this;
      },
      _setOption: function (t, e) {
        'disabled' === t
          ? ((this.options[t] = e),
            this.widget().toggleClass('ui-sortable-disabled', !!e))
          : p.Widget.prototype._setOption.apply(this, arguments);
      },
      _mouseCapture: function (t, e) {
        var i = null,
          s = !1,
          n = this;
        return (
          !this.reverting &&
          !this.options.disabled &&
          'static' !== this.options.type &&
          (this._refreshItems(t),
          p(t.target)
            .parents()
            .each(function () {
              if (p.data(this, n.widgetName + '-item') === n)
                return (i = p(this)), !1;
            }),
          p.data(t.target, n.widgetName + '-item') === n && (i = p(t.target)),
          !!i &&
            !(
              this.options.handle &&
              !e &&
              (p(this.options.handle, i)
                .find('*')
                .addBack()
                .each(function () {
                  this === t.target && (s = !0);
                }),
              !s)
            ) &&
            ((this.currentItem = i), this._removeCurrentsFromItems(), !0))
        );
      },
      _mouseStart: function (t, e, i) {
        var s,
          n,
          o = this.options;
        if (
          ((this.currentContainer = this).refreshPositions(),
          (this.helper = this._createHelper(t)),
          this._cacheHelperProportions(),
          this._cacheMargins(),
          (this.scrollParent = this.helper.scrollParent()),
          (this.offset = this.currentItem.offset()),
          (this.offset = {
            top: this.offset.top - this.margins.top,
            left: this.offset.left - this.margins.left,
          }),
          p.extend(this.offset, {
            click: {
              left: t.pageX - this.offset.left,
              top: t.pageY - this.offset.top,
            },
            parent: this._getParentOffset(),
            relative: this._getRelativeOffset(),
          }),
          this.helper.css('position', 'absolute'),
          (this.cssPosition = this.helper.css('position')),
          (this.originalPosition = this._generatePosition(t)),
          (this.originalPageX = t.pageX),
          (this.originalPageY = t.pageY),
          o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt),
          (this.domPosition = {
            prev: this.currentItem.prev()[0],
            parent: this.currentItem.parent()[0],
          }),
          this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
          this._createPlaceholder(),
          o.containment && this._setContainment(),
          o.cursor &&
            'auto' !== o.cursor &&
            ((n = this.document.find('body')),
            (this.storedCursor = n.css('cursor')),
            n.css('cursor', o.cursor),
            (this.storedStylesheet = p(
              '<style>*{ cursor: ' + o.cursor + ' !important; }</style>'
            ).appendTo(n))),
          o.opacity &&
            (this.helper.css('opacity') &&
              (this._storedOpacity = this.helper.css('opacity')),
            this.helper.css('opacity', o.opacity)),
          o.zIndex &&
            (this.helper.css('zIndex') &&
              (this._storedZIndex = this.helper.css('zIndex')),
            this.helper.css('zIndex', o.zIndex)),
          this.scrollParent[0] !== document &&
            'HTML' !== this.scrollParent[0].tagName &&
            (this.overflowOffset = this.scrollParent.offset()),
          this._trigger('start', t, this._uiHash()),
          this._preserveHelperProportions || this._cacheHelperProportions(),
          !i)
        )
          for (s = this.containers.length - 1; 0 <= s; s--)
            this.containers[s]._trigger('activate', t, this._uiHash(this));
        return (
          p.ui.ddmanager && (p.ui.ddmanager.current = this),
          p.ui.ddmanager &&
            !o.dropBehaviour &&
            p.ui.ddmanager.prepareOffsets(this, t),
          (this.dragging = !0),
          this.helper.addClass('ui-sortable-helper'),
          this._mouseDrag(t),
          !0
        );
      },
      _mouseDrag: function (t) {
        var e,
          i,
          s,
          n,
          o = this.options,
          a = !1;
        for (
          this.position = this._generatePosition(t),
            this.positionAbs = this._convertPositionTo('absolute'),
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
            this.options.scroll &&
              (this.scrollParent[0] !== document &&
              'HTML' !== this.scrollParent[0].tagName
                ? (this.overflowOffset.top +
                    this.scrollParent[0].offsetHeight -
                    t.pageY <
                  o.scrollSensitivity
                    ? (this.scrollParent[0].scrollTop = a =
                        this.scrollParent[0].scrollTop + o.scrollSpeed)
                    : t.pageY - this.overflowOffset.top < o.scrollSensitivity &&
                      (this.scrollParent[0].scrollTop = a =
                        this.scrollParent[0].scrollTop - o.scrollSpeed),
                  this.overflowOffset.left +
                    this.scrollParent[0].offsetWidth -
                    t.pageX <
                  o.scrollSensitivity
                    ? (this.scrollParent[0].scrollLeft = a =
                        this.scrollParent[0].scrollLeft + o.scrollSpeed)
                    : t.pageX - this.overflowOffset.left <
                        o.scrollSensitivity &&
                      (this.scrollParent[0].scrollLeft = a =
                        this.scrollParent[0].scrollLeft - o.scrollSpeed))
                : (t.pageY - p(document).scrollTop() < o.scrollSensitivity
                    ? (a = p(document).scrollTop(
                        p(document).scrollTop() - o.scrollSpeed
                      ))
                    : p(window).height() - (t.pageY - p(document).scrollTop()) <
                        o.scrollSensitivity &&
                      (a = p(document).scrollTop(
                        p(document).scrollTop() + o.scrollSpeed
                      )),
                  t.pageX - p(document).scrollLeft() < o.scrollSensitivity
                    ? (a = p(document).scrollLeft(
                        p(document).scrollLeft() - o.scrollSpeed
                      ))
                    : p(window).width() - (t.pageX - p(document).scrollLeft()) <
                        o.scrollSensitivity &&
                      (a = p(document).scrollLeft(
                        p(document).scrollLeft() + o.scrollSpeed
                      ))),
              !1 !== a &&
                p.ui.ddmanager &&
                !o.dropBehaviour &&
                p.ui.ddmanager.prepareOffsets(this, t)),
            this.positionAbs = this._convertPositionTo('absolute'),
            (this.options.axis && 'y' === this.options.axis) ||
              (this.helper[0].style.left = this.position.left + 'px'),
            (this.options.axis && 'x' === this.options.axis) ||
              (this.helper[0].style.top = this.position.top + 'px'),
            e = this.items.length - 1;
          0 <= e;
          e--
        )
          if (
            ((s = (i = this.items[e]).item[0]),
            (n = this._intersectsWithPointer(i)) &&
              i.instance === this.currentContainer &&
              !(
                s === this.currentItem[0] ||
                this.placeholder[1 === n ? 'next' : 'prev']()[0] === s ||
                p.contains(this.placeholder[0], s) ||
                ('semi-dynamic' === this.options.type &&
                  p.contains(this.element[0], s))
              ))
          ) {
            if (
              ((this.direction = 1 === n ? 'down' : 'up'),
              'pointer' !== this.options.tolerance &&
                !this._intersectsWithSides(i))
            )
              break;
            this._rearrange(t, i), this._trigger('change', t, this._uiHash());
            break;
          }
        return (
          this._contactContainers(t),
          p.ui.ddmanager && p.ui.ddmanager.drag(this, t),
          this._trigger('sort', t, this._uiHash()),
          (this.lastPositionAbs = this.positionAbs),
          !1
        );
      },
      _mouseStop: function (t, e) {
        if (t) {
          if (
            (p.ui.ddmanager &&
              !this.options.dropBehaviour &&
              p.ui.ddmanager.drop(this, t),
            this.options.revert)
          ) {
            var i = this,
              s = this.placeholder.offset(),
              n = this.options.axis,
              o = {};
            (n && 'x' !== n) ||
              (o.left =
                s.left -
                this.offset.parent.left -
                this.margins.left +
                (this.offsetParent[0] === document.body
                  ? 0
                  : this.offsetParent[0].scrollLeft)),
              (n && 'y' !== n) ||
                (o.top =
                  s.top -
                  this.offset.parent.top -
                  this.margins.top +
                  (this.offsetParent[0] === document.body
                    ? 0
                    : this.offsetParent[0].scrollTop)),
              (this.reverting = !0),
              p(this.helper).animate(
                o,
                parseInt(this.options.revert, 10) || 500,
                function () {
                  i._clear(t);
                }
              );
          } else this._clear(t, e);
          return !1;
        }
      },
      cancel: function () {
        if (this.dragging) {
          this._mouseUp({ target: null }),
            'original' === this.options.helper
              ? this.currentItem
                  .css(this._storedCSS)
                  .removeClass('ui-sortable-helper')
              : this.currentItem.show();
          for (var t = this.containers.length - 1; 0 <= t; t--)
            this.containers[t]._trigger('deactivate', null, this._uiHash(this)),
              this.containers[t].containerCache.over &&
                (this.containers[t]._trigger('out', null, this._uiHash(this)),
                (this.containers[t].containerCache.over = 0));
        }
        return (
          this.placeholder &&
            (this.placeholder[0].parentNode &&
              this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            'original' !== this.options.helper &&
              this.helper &&
              this.helper[0].parentNode &&
              this.helper.remove(),
            p.extend(this, {
              helper: null,
              dragging: !1,
              reverting: !1,
              _noFinalSort: null,
            }),
            this.domPosition.prev
              ? p(this.domPosition.prev).after(this.currentItem)
              : p(this.domPosition.parent).prepend(this.currentItem)),
          this
        );
      },
      serialize: function (e) {
        var t = this._getItemsAsjQuery(e && e.connected),
          i = [];
        return (
          (e = e || {}),
          p(t).each(function () {
            var t = (p(e.item || this).attr(e.attribute || 'id') || '').match(
              e.expression || /(.+)[\-=_](.+)/
            );
            t &&
              i.push(
                (e.key || t[1] + '[]') +
                  '=' +
                  (e.key && e.expression ? t[1] : t[2])
              );
          }),
          !i.length && e.key && i.push(e.key + '='),
          i.join('&')
        );
      },
      toArray: function (t) {
        var e = this._getItemsAsjQuery(t && t.connected),
          i = [];
        return (
          (t = t || {}),
          e.each(function () {
            i.push(p(t.item || this).attr(t.attribute || 'id') || '');
          }),
          i
        );
      },
      _intersectsWith: function (t) {
        var e = this.positionAbs.left,
          i = e + this.helperProportions.width,
          s = this.positionAbs.top,
          n = s + this.helperProportions.height,
          o = t.left,
          a = o + t.width,
          r = t.top,
          h = r + t.height,
          l = this.offset.click.top,
          c = this.offset.click.left,
          u = 'x' === this.options.axis || (r < s + l && s + l < h),
          d = 'y' === this.options.axis || (o < e + c && e + c < a),
          p = u && d;
        return 'pointer' === this.options.tolerance ||
          this.options.forcePointerForContainers ||
          ('pointer' !== this.options.tolerance &&
            this.helperProportions[this.floating ? 'width' : 'height'] >
              t[this.floating ? 'width' : 'height'])
          ? p
          : o < e + this.helperProportions.width / 2 &&
              i - this.helperProportions.width / 2 < a &&
              r < s + this.helperProportions.height / 2 &&
              n - this.helperProportions.height / 2 < h;
      },
      _intersectsWithPointer: function (t) {
        var e =
            'x' === this.options.axis ||
            f(this.positionAbs.top + this.offset.click.top, t.top, t.height),
          i =
            'y' === this.options.axis ||
            f(this.positionAbs.left + this.offset.click.left, t.left, t.width),
          s = e && i,
          n = this._getDragVerticalDirection(),
          o = this._getDragHorizontalDirection();
        return (
          !!s &&
          (this.floating
            ? (o && 'right' === o) || 'down' === n
              ? 2
              : 1
            : n && ('down' === n ? 2 : 1))
        );
      },
      _intersectsWithSides: function (t) {
        var e = f(
            this.positionAbs.top + this.offset.click.top,
            t.top + t.height / 2,
            t.height
          ),
          i = f(
            this.positionAbs.left + this.offset.click.left,
            t.left + t.width / 2,
            t.width
          ),
          s = this._getDragVerticalDirection(),
          n = this._getDragHorizontalDirection();
        return this.floating && n
          ? ('right' === n && i) || ('left' === n && !i)
          : s && (('down' === s && e) || ('up' === s && !e));
      },
      _getDragVerticalDirection: function () {
        var t = this.positionAbs.top - this.lastPositionAbs.top;
        return 0 !== t && (0 < t ? 'down' : 'up');
      },
      _getDragHorizontalDirection: function () {
        var t = this.positionAbs.left - this.lastPositionAbs.left;
        return 0 !== t && (0 < t ? 'right' : 'left');
      },
      refresh: function (t) {
        return this._refreshItems(t), this.refreshPositions(), this;
      },
      _connectWith: function () {
        var t = this.options;
        return t.connectWith.constructor === String
          ? [t.connectWith]
          : t.connectWith;
      },
      _getItemsAsjQuery: function (t) {
        var e,
          i,
          s,
          n,
          o = [],
          a = [],
          r = this._connectWith();
        if (r && t)
          for (e = r.length - 1; 0 <= e; e--)
            for (i = (s = p(r[e])).length - 1; 0 <= i; i--)
              (n = p.data(s[i], this.widgetFullName)) &&
                n !== this &&
                !n.options.disabled &&
                a.push([
                  p.isFunction(n.options.items)
                    ? n.options.items.call(n.element)
                    : p(n.options.items, n.element)
                        .not('.ui-sortable-helper')
                        .not('.ui-sortable-placeholder'),
                  n,
                ]);
        for (
          a.push([
            p.isFunction(this.options.items)
              ? this.options.items.call(this.element, null, {
                  options: this.options,
                  item: this.currentItem,
                })
              : p(this.options.items, this.element)
                  .not('.ui-sortable-helper')
                  .not('.ui-sortable-placeholder'),
            this,
          ]),
            e = a.length - 1;
          0 <= e;
          e--
        )
          a[e][0].each(function () {
            o.push(this);
          });
        return p(o);
      },
      _removeCurrentsFromItems: function () {
        var i = this.currentItem.find(':data(' + this.widgetName + '-item)');
        this.items = p.grep(this.items, function (t) {
          for (var e = 0; e < i.length; e++) if (i[e] === t.item[0]) return !1;
          return !0;
        });
      },
      _refreshItems: function (t) {
        (this.items = []), (this.containers = [this]);
        var e,
          i,
          s,
          n,
          o,
          a,
          r,
          h,
          l = this.items,
          c = [
            [
              p.isFunction(this.options.items)
                ? this.options.items.call(this.element[0], t, {
                    item: this.currentItem,
                  })
                : p(this.options.items, this.element),
              this,
            ],
          ],
          u = this._connectWith();
        if (u && this.ready)
          for (e = u.length - 1; 0 <= e; e--)
            for (i = (s = p(u[e])).length - 1; 0 <= i; i--)
              (n = p.data(s[i], this.widgetFullName)) &&
                n !== this &&
                !n.options.disabled &&
                (c.push([
                  p.isFunction(n.options.items)
                    ? n.options.items.call(n.element[0], t, {
                        item: this.currentItem,
                      })
                    : p(n.options.items, n.element),
                  n,
                ]),
                this.containers.push(n));
        for (e = c.length - 1; 0 <= e; e--)
          for (o = c[e][1], i = 0, h = (a = c[e][0]).length; i < h; i++)
            (r = p(a[i])).data(this.widgetName + '-item', o),
              l.push({
                item: r,
                instance: o,
                width: 0,
                height: 0,
                left: 0,
                top: 0,
              });
      },
      refreshPositions: function (t) {
        var e, i, s, n;
        for (
          this.offsetParent &&
            this.helper &&
            (this.offset.parent = this._getParentOffset()),
            e = this.items.length - 1;
          0 <= e;
          e--
        )
          ((i = this.items[e]).instance !== this.currentContainer &&
            this.currentContainer &&
            i.item[0] !== this.currentItem[0]) ||
            ((s = this.options.toleranceElement
              ? p(this.options.toleranceElement, i.item)
              : i.item),
            t || ((i.width = s.outerWidth()), (i.height = s.outerHeight())),
            (n = s.offset()),
            (i.left = n.left),
            (i.top = n.top));
        if (this.options.custom && this.options.custom.refreshContainers)
          this.options.custom.refreshContainers.call(this);
        else
          for (e = this.containers.length - 1; 0 <= e; e--)
            (n = this.containers[e].element.offset()),
              (this.containers[e].containerCache.left = n.left),
              (this.containers[e].containerCache.top = n.top),
              (this.containers[e].containerCache.width =
                this.containers[e].element.outerWidth()),
              (this.containers[e].containerCache.height =
                this.containers[e].element.outerHeight());
        return this;
      },
      _createPlaceholder: function (i) {
        var s,
          n = (i = i || this).options;
        (n.placeholder && n.placeholder.constructor !== String) ||
          ((s = n.placeholder),
          (n.placeholder = {
            element: function () {
              var t = i.currentItem[0].nodeName.toLowerCase(),
                e = p('<' + t + '>', i.document[0])
                  .addClass(
                    s || i.currentItem[0].className + ' ui-sortable-placeholder'
                  )
                  .removeClass('ui-sortable-helper');
              return (
                'tr' === t
                  ? i.currentItem.children().each(function () {
                      p('<td>&#160;</td>', i.document[0])
                        .attr('colspan', p(this).attr('colspan') || 1)
                        .appendTo(e);
                    })
                  : 'img' === t && e.attr('src', i.currentItem.attr('src')),
                s || e.css('visibility', 'hidden'),
                e
              );
            },
            update: function (t, e) {
              (s && !n.forcePlaceholderSize) ||
                (e.height() ||
                  e.height(
                    i.currentItem.innerHeight() -
                      parseInt(i.currentItem.css('paddingTop') || 0, 10) -
                      parseInt(i.currentItem.css('paddingBottom') || 0, 10)
                  ),
                e.width() ||
                  e.width(
                    i.currentItem.innerWidth() -
                      parseInt(i.currentItem.css('paddingLeft') || 0, 10) -
                      parseInt(i.currentItem.css('paddingRight') || 0, 10)
                  ));
            },
          })),
          (i.placeholder = p(
            n.placeholder.element.call(i.element, i.currentItem)
          )),
          i.currentItem.after(i.placeholder),
          n.placeholder.update(i, i.placeholder);
      },
      _contactContainers: function (t) {
        var e,
          i,
          s,
          n,
          o,
          a,
          r,
          h,
          l,
          c,
          u = null,
          d = null;
        for (e = this.containers.length - 1; 0 <= e; e--)
          if (!p.contains(this.currentItem[0], this.containers[e].element[0]))
            if (this._intersectsWith(this.containers[e].containerCache)) {
              if (u && p.contains(this.containers[e].element[0], u.element[0]))
                continue;
              (u = this.containers[e]), (d = e);
            } else
              this.containers[e].containerCache.over &&
                (this.containers[e]._trigger('out', t, this._uiHash(this)),
                (this.containers[e].containerCache.over = 0));
        if (u)
          if (1 === this.containers.length)
            this.containers[d].containerCache.over ||
              (this.containers[d]._trigger('over', t, this._uiHash(this)),
              (this.containers[d].containerCache.over = 1));
          else {
            for (
              s = 1e4,
                n = null,
                o = (c = u.floating || g(this.currentItem)) ? 'left' : 'top',
                a = c ? 'width' : 'height',
                r = this.positionAbs[o] + this.offset.click[o],
                i = this.items.length - 1;
              0 <= i;
              i--
            )
              p.contains(
                this.containers[d].element[0],
                this.items[i].item[0]
              ) &&
                this.items[i].item[0] !== this.currentItem[0] &&
                ((c &&
                  !f(
                    this.positionAbs.top + this.offset.click.top,
                    this.items[i].top,
                    this.items[i].height
                  )) ||
                  ((h = this.items[i].item.offset()[o]),
                  (l = !1),
                  Math.abs(h - r) > Math.abs(h + this.items[i][a] - r) &&
                    ((l = !0), (h += this.items[i][a])),
                  Math.abs(h - r) < s &&
                    ((s = Math.abs(h - r)),
                    (n = this.items[i]),
                    (this.direction = l ? 'up' : 'down'))));
            if (!n && !this.options.dropOnEmpty) return;
            if (this.currentContainer === this.containers[d]) return;
            n
              ? this._rearrange(t, n, null, !0)
              : this._rearrange(t, null, this.containers[d].element, !0),
              this._trigger('change', t, this._uiHash()),
              this.containers[d]._trigger('change', t, this._uiHash(this)),
              (this.currentContainer = this.containers[d]),
              this.options.placeholder.update(
                this.currentContainer,
                this.placeholder
              ),
              this.containers[d]._trigger('over', t, this._uiHash(this)),
              (this.containers[d].containerCache.over = 1);
          }
      },
      _createHelper: function (t) {
        var e = this.options,
          i = p.isFunction(e.helper)
            ? p(e.helper.apply(this.element[0], [t, this.currentItem]))
            : 'clone' === e.helper
            ? this.currentItem.clone()
            : this.currentItem;
        return (
          i.parents('body').length ||
            p(
              'parent' !== e.appendTo
                ? e.appendTo
                : this.currentItem[0].parentNode
            )[0].appendChild(i[0]),
          i[0] === this.currentItem[0] &&
            (this._storedCSS = {
              width: this.currentItem[0].style.width,
              height: this.currentItem[0].style.height,
              position: this.currentItem.css('position'),
              top: this.currentItem.css('top'),
              left: this.currentItem.css('left'),
            }),
          (i[0].style.width && !e.forceHelperSize) ||
            i.width(this.currentItem.width()),
          (i[0].style.height && !e.forceHelperSize) ||
            i.height(this.currentItem.height()),
          i
        );
      },
      _adjustOffsetFromHelper: function (t) {
        'string' == typeof t && (t = t.split(' ')),
          p.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }),
          'left' in t && (this.offset.click.left = t.left + this.margins.left),
          'right' in t &&
            (this.offset.click.left =
              this.helperProportions.width - t.right + this.margins.left),
          'top' in t && (this.offset.click.top = t.top + this.margins.top),
          'bottom' in t &&
            (this.offset.click.top =
              this.helperProportions.height - t.bottom + this.margins.top);
      },
      _getParentOffset: function () {
        this.offsetParent = this.helper.offsetParent();
        var t = this.offsetParent.offset();
        return (
          'absolute' === this.cssPosition &&
            this.scrollParent[0] !== document &&
            p.contains(this.scrollParent[0], this.offsetParent[0]) &&
            ((t.left += this.scrollParent.scrollLeft()),
            (t.top += this.scrollParent.scrollTop())),
          (this.offsetParent[0] === document.body ||
            (this.offsetParent[0].tagName &&
              'html' === this.offsetParent[0].tagName.toLowerCase() &&
              p.ui.ie)) &&
            (t = { top: 0, left: 0 }),
          {
            top:
              t.top +
              (parseInt(this.offsetParent.css('borderTopWidth'), 10) || 0),
            left:
              t.left +
              (parseInt(this.offsetParent.css('borderLeftWidth'), 10) || 0),
          }
        );
      },
      _getRelativeOffset: function () {
        if ('relative' !== this.cssPosition) return { top: 0, left: 0 };
        var t = this.currentItem.position();
        return {
          top:
            t.top -
            (parseInt(this.helper.css('top'), 10) || 0) +
            this.scrollParent.scrollTop(),
          left:
            t.left -
            (parseInt(this.helper.css('left'), 10) || 0) +
            this.scrollParent.scrollLeft(),
        };
      },
      _cacheMargins: function () {
        this.margins = {
          left: parseInt(this.currentItem.css('marginLeft'), 10) || 0,
          top: parseInt(this.currentItem.css('marginTop'), 10) || 0,
        };
      },
      _cacheHelperProportions: function () {
        this.helperProportions = {
          width: this.helper.outerWidth(),
          height: this.helper.outerHeight(),
        };
      },
      _setContainment: function () {
        var t,
          e,
          i,
          s = this.options;
        'parent' === s.containment &&
          (s.containment = this.helper[0].parentNode),
          ('document' !== s.containment && 'window' !== s.containment) ||
            (this.containment = [
              0 - this.offset.relative.left - this.offset.parent.left,
              0 - this.offset.relative.top - this.offset.parent.top,
              p('document' === s.containment ? document : window).width() -
                this.helperProportions.width -
                this.margins.left,
              (p('document' === s.containment ? document : window).height() ||
                document.body.parentNode.scrollHeight) -
                this.helperProportions.height -
                this.margins.top,
            ]),
          /^(document|window|parent)$/.test(s.containment) ||
            ((t = p(s.containment)[0]),
            (e = p(s.containment).offset()),
            (i = 'hidden' !== p(t).css('overflow')),
            (this.containment = [
              e.left +
                (parseInt(p(t).css('borderLeftWidth'), 10) || 0) +
                (parseInt(p(t).css('paddingLeft'), 10) || 0) -
                this.margins.left,
              e.top +
                (parseInt(p(t).css('borderTopWidth'), 10) || 0) +
                (parseInt(p(t).css('paddingTop'), 10) || 0) -
                this.margins.top,
              e.left +
                (i ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) -
                (parseInt(p(t).css('borderLeftWidth'), 10) || 0) -
                (parseInt(p(t).css('paddingRight'), 10) || 0) -
                this.helperProportions.width -
                this.margins.left,
              e.top +
                (i
                  ? Math.max(t.scrollHeight, t.offsetHeight)
                  : t.offsetHeight) -
                (parseInt(p(t).css('borderTopWidth'), 10) || 0) -
                (parseInt(p(t).css('paddingBottom'), 10) || 0) -
                this.helperProportions.height -
                this.margins.top,
            ]));
      },
      _convertPositionTo: function (t, e) {
        e || (e = this.position);
        var i = 'absolute' === t ? 1 : -1,
          s =
            'absolute' !== this.cssPosition ||
            (this.scrollParent[0] !== document &&
              p.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          n = /(html|body)/i.test(s[0].tagName);
        return {
          top:
            e.top +
            this.offset.relative.top * i +
            this.offset.parent.top * i -
            ('fixed' === this.cssPosition
              ? -this.scrollParent.scrollTop()
              : n
              ? 0
              : s.scrollTop()) *
              i,
          left:
            e.left +
            this.offset.relative.left * i +
            this.offset.parent.left * i -
            ('fixed' === this.cssPosition
              ? -this.scrollParent.scrollLeft()
              : n
              ? 0
              : s.scrollLeft()) *
              i,
        };
      },
      _generatePosition: function (t) {
        var e,
          i,
          s = this.options,
          n = t.pageX,
          o = t.pageY,
          a =
            'absolute' !== this.cssPosition ||
            (this.scrollParent[0] !== document &&
              p.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          r = /(html|body)/i.test(a[0].tagName);
        return (
          'relative' !== this.cssPosition ||
            (this.scrollParent[0] !== document &&
              this.scrollParent[0] !== this.offsetParent[0]) ||
            (this.offset.relative = this._getRelativeOffset()),
          this.originalPosition &&
            (this.containment &&
              (t.pageX - this.offset.click.left < this.containment[0] &&
                (n = this.containment[0] + this.offset.click.left),
              t.pageY - this.offset.click.top < this.containment[1] &&
                (o = this.containment[1] + this.offset.click.top),
              t.pageX - this.offset.click.left > this.containment[2] &&
                (n = this.containment[2] + this.offset.click.left),
              t.pageY - this.offset.click.top > this.containment[3] &&
                (o = this.containment[3] + this.offset.click.top)),
            s.grid &&
              ((e =
                this.originalPageY +
                Math.round((o - this.originalPageY) / s.grid[1]) * s.grid[1]),
              (o = this.containment
                ? e - this.offset.click.top >= this.containment[1] &&
                  e - this.offset.click.top <= this.containment[3]
                  ? e
                  : e - this.offset.click.top >= this.containment[1]
                  ? e - s.grid[1]
                  : e + s.grid[1]
                : e),
              (i =
                this.originalPageX +
                Math.round((n - this.originalPageX) / s.grid[0]) * s.grid[0]),
              (n = this.containment
                ? i - this.offset.click.left >= this.containment[0] &&
                  i - this.offset.click.left <= this.containment[2]
                  ? i
                  : i - this.offset.click.left >= this.containment[0]
                  ? i - s.grid[0]
                  : i + s.grid[0]
                : i))),
          {
            top:
              o -
              this.offset.click.top -
              this.offset.relative.top -
              this.offset.parent.top +
              ('fixed' === this.cssPosition
                ? -this.scrollParent.scrollTop()
                : r
                ? 0
                : a.scrollTop()),
            left:
              n -
              this.offset.click.left -
              this.offset.relative.left -
              this.offset.parent.left +
              ('fixed' === this.cssPosition
                ? -this.scrollParent.scrollLeft()
                : r
                ? 0
                : a.scrollLeft()),
          }
        );
      },
      _rearrange: function (t, e, i, s) {
        i
          ? i[0].appendChild(this.placeholder[0])
          : e.item[0].parentNode.insertBefore(
              this.placeholder[0],
              'down' === this.direction ? e.item[0] : e.item[0].nextSibling
            ),
          (this.counter = this.counter ? ++this.counter : 1);
        var n = this.counter;
        this._delay(function () {
          n === this.counter && this.refreshPositions(!s);
        });
      },
      _clear: function (t, e) {
        this.reverting = !1;
        var i,
          s = [];
        if (
          (!this._noFinalSort &&
            this.currentItem.parent().length &&
            this.placeholder.before(this.currentItem),
          (this._noFinalSort = null),
          this.helper[0] === this.currentItem[0])
        ) {
          for (i in this._storedCSS)
            ('auto' !== this._storedCSS[i] &&
              'static' !== this._storedCSS[i]) ||
              (this._storedCSS[i] = '');
          this.currentItem
            .css(this._storedCSS)
            .removeClass('ui-sortable-helper');
        } else this.currentItem.show();
        for (
          this.fromOutside &&
            !e &&
            s.push(function (t) {
              this._trigger('receive', t, this._uiHash(this.fromOutside));
            }),
            (!this.fromOutside &&
              this.domPosition.prev ===
                this.currentItem.prev().not('.ui-sortable-helper')[0] &&
              this.domPosition.parent === this.currentItem.parent()[0]) ||
              e ||
              s.push(function (t) {
                this._trigger('update', t, this._uiHash());
              }),
            this !== this.currentContainer &&
              (e ||
                (s.push(function (t) {
                  this._trigger('remove', t, this._uiHash());
                }),
                s.push(
                  function (e) {
                    return function (t) {
                      e._trigger('receive', t, this._uiHash(this));
                    };
                  }.call(this, this.currentContainer)
                ),
                s.push(
                  function (e) {
                    return function (t) {
                      e._trigger('update', t, this._uiHash(this));
                    };
                  }.call(this, this.currentContainer)
                ))),
            i = this.containers.length - 1;
          0 <= i;
          i--
        )
          e ||
            s.push(
              function (e) {
                return function (t) {
                  e._trigger('deactivate', t, this._uiHash(this));
                };
              }.call(this, this.containers[i])
            ),
            this.containers[i].containerCache.over &&
              (s.push(
                function (e) {
                  return function (t) {
                    e._trigger('out', t, this._uiHash(this));
                  };
                }.call(this, this.containers[i])
              ),
              (this.containers[i].containerCache.over = 0));
        if (
          (this.storedCursor &&
            (this.document.find('body').css('cursor', this.storedCursor),
            this.storedStylesheet.remove()),
          this._storedOpacity &&
            this.helper.css('opacity', this._storedOpacity),
          this._storedZIndex &&
            this.helper.css(
              'zIndex',
              'auto' === this._storedZIndex ? '' : this._storedZIndex
            ),
          (this.dragging = !1),
          this.cancelHelperRemoval)
        ) {
          if (!e) {
            for (
              this._trigger('beforeStop', t, this._uiHash()), i = 0;
              i < s.length;
              i++
            )
              s[i].call(this, t);
            this._trigger('stop', t, this._uiHash());
          }
          return (this.fromOutside = !1);
        }
        if (
          (e || this._trigger('beforeStop', t, this._uiHash()),
          this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
          this.helper[0] !== this.currentItem[0] && this.helper.remove(),
          (this.helper = null),
          !e)
        ) {
          for (i = 0; i < s.length; i++) s[i].call(this, t);
          this._trigger('stop', t, this._uiHash());
        }
        return !(this.fromOutside = !1);
      },
      _trigger: function () {
        !1 === p.Widget.prototype._trigger.apply(this, arguments) &&
          this.cancel();
      },
      _uiHash: function (t) {
        var e = t || this;
        return {
          helper: e.helper,
          placeholder: e.placeholder || p([]),
          position: e.position,
          originalPosition: e.originalPosition,
          offset: e.positionAbs,
          item: e.currentItem,
          sender: t ? t.element : null,
        };
      },
    });
  })(jQuery),
  (function (c, t) {
    var i,
      r = 'ui-effects-';
    (c.effects = { effect: {} }),
      (function (c, u) {
        var l,
          d = /^([\-+])=\s*(\d+\.?\d*)/,
          t = [
            {
              re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              parse: function (t) {
                return [t[1], t[2], t[3], t[4]];
              },
            },
            {
              re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              parse: function (t) {
                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]];
              },
            },
            {
              re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
              parse: function (t) {
                return [
                  parseInt(t[1], 16),
                  parseInt(t[2], 16),
                  parseInt(t[3], 16),
                ];
              },
            },
            {
              re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
              parse: function (t) {
                return [
                  parseInt(t[1] + t[1], 16),
                  parseInt(t[2] + t[2], 16),
                  parseInt(t[3] + t[3], 16),
                ];
              },
            },
            {
              re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              space: 'hsla',
              parse: function (t) {
                return [t[1], t[2] / 100, t[3] / 100, t[4]];
              },
            },
          ],
          p = (c.Color = function (t, e, i, s) {
            return new c.Color.fn.parse(t, e, i, s);
          }),
          f = {
            rgba: {
              props: {
                red: { idx: 0, type: 'byte' },
                green: { idx: 1, type: 'byte' },
                blue: { idx: 2, type: 'byte' },
              },
            },
            hsla: {
              props: {
                hue: { idx: 0, type: 'degrees' },
                saturation: { idx: 1, type: 'percent' },
                lightness: { idx: 2, type: 'percent' },
              },
            },
          },
          g = {
            byte: { floor: !0, max: 255 },
            percent: { max: 1 },
            degrees: { mod: 360, floor: !0 },
          },
          r = (p.support = {}),
          e = c('<p>')[0],
          m = c.each;
        function v(t, e, i) {
          var s = g[e.type] || {};
          return null == t
            ? i || !e.def
              ? null
              : e.def
            : ((t = s.floor ? ~~t : parseFloat(t)),
              isNaN(t)
                ? e.def
                : s.mod
                ? (t + s.mod) % s.mod
                : t < 0
                ? 0
                : s.max < t
                ? s.max
                : t);
        }
        function h(a) {
          var r = p(),
            h = (r._rgba = []);
          return (
            (a = a.toLowerCase()),
            m(t, function (t, e) {
              var i,
                s = e.re.exec(a),
                n = s && e.parse(s),
                o = e.space || 'rgba';
              if (n)
                return (
                  (i = r[o](n)),
                  (r[f[o].cache] = i[f[o].cache]),
                  (h = r._rgba = i._rgba),
                  !1
                );
            }),
            h.length
              ? ('0,0,0,0' === h.join() && c.extend(h, l.transparent), r)
              : l[a]
          );
        }
        function _(t, e, i) {
          return 6 * (i = (i + 1) % 1) < 1
            ? t + (e - t) * i * 6
            : 2 * i < 1
            ? e
            : 3 * i < 2
            ? t + (e - t) * (2 / 3 - i) * 6
            : t;
        }
        (e.style.cssText = 'background-color:rgba(1,1,1,.5)'),
          (r.rgba = -1 < e.style.backgroundColor.indexOf('rgba')),
          m(f, function (t, e) {
            (e.cache = '_' + t),
              (e.props.alpha = { idx: 3, type: 'percent', def: 1 });
          }),
          (p.fn = c.extend(p.prototype, {
            parse: function (n, t, e, i) {
              if (n === u) return (this._rgba = [null, null, null, null]), this;
              (n.jquery || n.nodeType) && ((n = c(n).css(t)), (t = u));
              var o = this,
                s = c.type(n),
                a = (this._rgba = []);
              return (
                t !== u && ((n = [n, t, e, i]), (s = 'array')),
                'string' === s
                  ? this.parse(h(n) || l._default)
                  : 'array' === s
                  ? (m(f.rgba.props, function (t, e) {
                      a[e.idx] = v(n[e.idx], e);
                    }),
                    this)
                  : 'object' === s
                  ? (m(
                      f,
                      n instanceof p
                        ? function (t, e) {
                            n[e.cache] && (o[e.cache] = n[e.cache].slice());
                          }
                        : function (t, i) {
                            var s = i.cache;
                            m(i.props, function (t, e) {
                              if (!o[s] && i.to) {
                                if ('alpha' === t || null == n[t]) return;
                                o[s] = i.to(o._rgba);
                              }
                              o[s][e.idx] = v(n[t], e, !0);
                            }),
                              o[s] &&
                                c.inArray(null, o[s].slice(0, 3)) < 0 &&
                                ((o[s][3] = 1),
                                i.from && (o._rgba = i.from(o[s])));
                          }
                    ),
                    this)
                  : void 0
              );
            },
            is: function (t) {
              var n = p(t),
                o = !0,
                a = this;
              return (
                m(f, function (t, e) {
                  var i,
                    s = n[e.cache];
                  return (
                    s &&
                      ((i = a[e.cache] || (e.to && e.to(a._rgba)) || []),
                      m(e.props, function (t, e) {
                        if (null != s[e.idx])
                          return (o = s[e.idx] === i[e.idx]);
                      })),
                    o
                  );
                }),
                o
              );
            },
            _space: function () {
              var i = [],
                s = this;
              return (
                m(f, function (t, e) {
                  s[e.cache] && i.push(t);
                }),
                i.pop()
              );
            },
            transition: function (t, a) {
              var r = p(t),
                e = r._space(),
                i = f[e],
                s = 0 === this.alpha() ? p('transparent') : this,
                h = s[i.cache] || i.to(s._rgba),
                l = h.slice();
              return (
                (r = r[i.cache]),
                m(i.props, function (t, e) {
                  var i = e.idx,
                    s = h[i],
                    n = r[i],
                    o = g[e.type] || {};
                  null !== n &&
                    (l[i] =
                      null === s
                        ? n
                        : (o.mod &&
                            (n - s > o.mod / 2
                              ? (s += o.mod)
                              : s - n > o.mod / 2 && (s -= o.mod)),
                          v((n - s) * a + s, e)));
                }),
                this[e](l)
              );
            },
            blend: function (t) {
              if (1 === this._rgba[3]) return this;
              var e = this._rgba.slice(),
                i = e.pop(),
                s = p(t)._rgba;
              return p(
                c.map(e, function (t, e) {
                  return (1 - i) * s[e] + i * t;
                })
              );
            },
            toRgbaString: function () {
              var t = 'rgba(',
                e = c.map(this._rgba, function (t, e) {
                  return null == t ? (2 < e ? 1 : 0) : t;
                });
              return 1 === e[3] && (e.pop(), (t = 'rgb(')), t + e.join() + ')';
            },
            toHslaString: function () {
              var t = 'hsla(',
                e = c.map(this.hsla(), function (t, e) {
                  return (
                    null == t && (t = 2 < e ? 1 : 0),
                    e && e < 3 && (t = Math.round(100 * t) + '%'),
                    t
                  );
                });
              return 1 === e[3] && (e.pop(), (t = 'hsl(')), t + e.join() + ')';
            },
            toHexString: function (t) {
              var e = this._rgba.slice(),
                i = e.pop();
              return (
                t && e.push(~~(255 * i)),
                '#' +
                  c
                    .map(e, function (t) {
                      return 1 === (t = (t || 0).toString(16)).length
                        ? '0' + t
                        : t;
                    })
                    .join('')
              );
            },
            toString: function () {
              return 0 === this._rgba[3] ? 'transparent' : this.toRgbaString();
            },
          })),
          (p.fn.parse.prototype = p.fn),
          (f.hsla.to = function (t) {
            if (null == t[0] || null == t[1] || null == t[2])
              return [null, null, null, t[3]];
            var e,
              i,
              s = t[0] / 255,
              n = t[1] / 255,
              o = t[2] / 255,
              a = t[3],
              r = Math.max(s, n, o),
              h = Math.min(s, n, o),
              l = r - h,
              c = r + h,
              u = 0.5 * c;
            return (
              (e =
                h === r
                  ? 0
                  : s === r
                  ? (60 * (n - o)) / l + 360
                  : n === r
                  ? (60 * (o - s)) / l + 120
                  : (60 * (s - n)) / l + 240),
              (i = 0 === l ? 0 : u <= 0.5 ? l / c : l / (2 - c)),
              [Math.round(e) % 360, i, u, null == a ? 1 : a]
            );
          }),
          (f.hsla.from = function (t) {
            if (null == t[0] || null == t[1] || null == t[2])
              return [null, null, null, t[3]];
            var e = t[0] / 360,
              i = t[1],
              s = t[2],
              n = t[3],
              o = s <= 0.5 ? s * (1 + i) : s + i - s * i,
              a = 2 * s - o;
            return [
              Math.round(255 * _(a, o, e + 1 / 3)),
              Math.round(255 * _(a, o, e)),
              Math.round(255 * _(a, o, e - 1 / 3)),
              n,
            ];
          }),
          m(f, function (h, t) {
            var i = t.props,
              a = t.cache,
              r = t.to,
              l = t.from;
            (p.fn[h] = function (t) {
              if ((r && !this[a] && (this[a] = r(this._rgba)), t === u))
                return this[a].slice();
              var e,
                s = c.type(t),
                n = 'array' === s || 'object' === s ? t : arguments,
                o = this[a].slice();
              return (
                m(i, function (t, e) {
                  var i = n['object' === s ? t : e.idx];
                  null == i && (i = o[e.idx]), (o[e.idx] = v(i, e));
                }),
                l ? (((e = p(l(o)))[a] = o), e) : p(o)
              );
            }),
              m(i, function (a, r) {
                p.fn[a] ||
                  (p.fn[a] = function (t) {
                    var e,
                      i = c.type(t),
                      s = 'alpha' === a ? (this._hsla ? 'hsla' : 'rgba') : h,
                      n = this[s](),
                      o = n[r.idx];
                    return 'undefined' === i
                      ? o
                      : ('function' === i &&
                          ((t = t.call(this, o)), (i = c.type(t))),
                        null == t && r.empty
                          ? this
                          : ('string' === i &&
                              (e = d.exec(t)) &&
                              (t =
                                o + parseFloat(e[2]) * ('+' === e[1] ? 1 : -1)),
                            (n[r.idx] = t),
                            this[s](n)));
                  });
              });
          }),
          (p.hook = function (t) {
            var e = t.split(' ');
            m(e, function (t, a) {
              (c.cssHooks[a] = {
                set: function (t, e) {
                  var i,
                    s,
                    n = '';
                  if (
                    'transparent' !== e &&
                    ('string' !== c.type(e) || (i = h(e)))
                  ) {
                    if (((e = p(i || e)), !r.rgba && 1 !== e._rgba[3])) {
                      for (
                        s = 'backgroundColor' === a ? t.parentNode : t;
                        ('' === n || 'transparent' === n) && s && s.style;

                      )
                        try {
                          (n = c.css(s, 'backgroundColor')), (s = s.parentNode);
                        } catch (o) {}
                      e = e.blend(n && 'transparent' !== n ? n : '_default');
                    }
                    e = e.toRgbaString();
                  }
                  try {
                    t.style[a] = e;
                  } catch (o) {}
                },
              }),
                (c.fx.step[a] = function (t) {
                  t.colorInit ||
                    ((t.start = p(t.elem, a)),
                    (t.end = p(t.end)),
                    (t.colorInit = !0)),
                    c.cssHooks[a].set(t.elem, t.start.transition(t.end, t.pos));
                });
            });
          }),
          p.hook(
            'backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor'
          ),
          (c.cssHooks.borderColor = {
            expand: function (i) {
              var s = {};
              return (
                m(['Top', 'Right', 'Bottom', 'Left'], function (t, e) {
                  s['border' + e + 'Color'] = i;
                }),
                s
              );
            },
          }),
          (l = c.Color.names =
            {
              aqua: '#00ffff',
              black: '#000000',
              blue: '#0000ff',
              fuchsia: '#ff00ff',
              gray: '#808080',
              green: '#008000',
              lime: '#00ff00',
              maroon: '#800000',
              navy: '#000080',
              olive: '#808000',
              purple: '#800080',
              red: '#ff0000',
              silver: '#c0c0c0',
              teal: '#008080',
              white: '#ffffff',
              yellow: '#ffff00',
              transparent: [null, null, null, 0],
              _default: '#ffffff',
            });
      })(jQuery),
      (function () {
        var o,
          n,
          a,
          r = ['add', 'remove', 'toggle'],
          h = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1,
          };
        function l(t) {
          var e,
            i,
            s = t.ownerDocument.defaultView
              ? t.ownerDocument.defaultView.getComputedStyle(t, null)
              : t.currentStyle,
            n = {};
          if (s && s.length && s[0] && s[s[0]])
            for (i = s.length; i--; )
              'string' == typeof s[(e = s[i])] && (n[c.camelCase(e)] = s[e]);
          else for (e in s) 'string' == typeof s[e] && (n[e] = s[e]);
          return n;
        }
        c.each(
          [
            'borderLeftStyle',
            'borderRightStyle',
            'borderBottomStyle',
            'borderTopStyle',
          ],
          function (t, e) {
            c.fx.step[e] = function (t) {
              (('none' !== t.end && !t.setAttr) ||
                (1 === t.pos && !t.setAttr)) &&
                (jQuery.style(t.elem, e, t.end), (t.setAttr = !0));
            };
          }
        ),
          c.fn.addBack ||
            (c.fn.addBack = function (t) {
              return this.add(
                null == t ? this.prevObject : this.prevObject.filter(t)
              );
            }),
          (c.effects.animateClass = function (n, t, e, i) {
            var o = c.speed(t, e, i);
            return this.queue(function () {
              var t,
                i = c(this),
                e = i.attr('class') || '',
                s = o.children ? i.find('*').addBack() : i;
              (s = s.map(function () {
                return { el: c(this), start: l(this) };
              })),
                (t = function () {
                  c.each(r, function (t, e) {
                    n[e] && i[e + 'Class'](n[e]);
                  });
                })(),
                (s = s.map(function () {
                  return (
                    (this.end = l(this.el[0])),
                    (this.diff = (function o(t, e) {
                      var i,
                        s,
                        n = {};
                      for (i in e)
                        (s = e[i]),
                          t[i] !== s &&
                            (h[i] ||
                              (!c.fx.step[i] && isNaN(parseFloat(s))) ||
                              (n[i] = s));
                      return n;
                    })(this.start, this.end)),
                    this
                  );
                })),
                i.attr('class', e),
                (s = s.map(function () {
                  var t = this,
                    e = c.Deferred(),
                    i = c.extend({}, o, {
                      queue: !1,
                      complete: function () {
                        e.resolve(t);
                      },
                    });
                  return this.el.animate(this.diff, i), e.promise();
                })),
                c.when.apply(c, s.get()).done(function () {
                  t(),
                    c.each(arguments, function () {
                      var e = this.el;
                      c.each(this.diff, function (t) {
                        e.css(t, '');
                      });
                    }),
                    o.complete.call(i[0]);
                });
            });
          }),
          c.fn.extend({
            addClass:
              ((a = c.fn.addClass),
              function (t, e, i, s) {
                return e
                  ? c.effects.animateClass.call(this, { add: t }, e, i, s)
                  : a.apply(this, arguments);
              }),
            removeClass:
              ((n = c.fn.removeClass),
              function (t, e, i, s) {
                return 1 < arguments.length
                  ? c.effects.animateClass.call(this, { remove: t }, e, i, s)
                  : n.apply(this, arguments);
              }),
            toggleClass:
              ((o = c.fn.toggleClass),
              function (t, e, i, s, n) {
                return 'boolean' == typeof e || void 0 === e
                  ? i
                    ? c.effects.animateClass.call(
                        this,
                        e ? { add: t } : { remove: t },
                        i,
                        s,
                        n
                      )
                    : o.apply(this, arguments)
                  : c.effects.animateClass.call(this, { toggle: t }, e, i, s);
              }),
            switchClass: function (t, e, i, s, n) {
              return c.effects.animateClass.call(
                this,
                { add: e, remove: t },
                i,
                s,
                n
              );
            },
          });
      })(),
      (function () {
        function s(t, e, i, s) {
          return (
            c.isPlainObject(t) && (t = (e = t).effect),
            (t = { effect: t }),
            null == e && (e = {}),
            c.isFunction(e) && ((s = e), (i = null), (e = {})),
            ('number' == typeof e || c.fx.speeds[e]) &&
              ((s = i), (i = e), (e = {})),
            c.isFunction(i) && ((s = i), (i = null)),
            e && c.extend(t, e),
            (i = i || e.duration),
            (t.duration = c.fx.off
              ? 0
              : 'number' == typeof i
              ? i
              : i in c.fx.speeds
              ? c.fx.speeds[i]
              : c.fx.speeds._default),
            (t.complete = s || e.complete),
            t
          );
        }
        function i(t) {
          return (
            !(t && 'number' != typeof t && !c.fx.speeds[t]) ||
            ('string' == typeof t && !c.effects.effect[t]) ||
            !!c.isFunction(t) ||
            ('object' == typeof t && !t.effect)
          );
        }
        var n, o, a;
        c.extend(c.effects, {
          version: '1.10.3',
          save: function (t, e) {
            for (var i = 0; i < e.length; i++)
              null !== e[i] && t.data(r + e[i], t[0].style[e[i]]);
          },
          restore: function (t, e) {
            var i, s;
            for (s = 0; s < e.length; s++)
              null !== e[s] &&
                (void 0 === (i = t.data(r + e[s])) && (i = ''), t.css(e[s], i));
          },
          setMode: function (t, e) {
            return 'toggle' === e && (e = t.is(':hidden') ? 'show' : 'hide'), e;
          },
          getBaseline: function (t, e) {
            var i, s;
            switch (t[0]) {
              case 'top':
                i = 0;
                break;
              case 'middle':
                i = 0.5;
                break;
              case 'bottom':
                i = 1;
                break;
              default:
                i = t[0] / e.height;
            }
            switch (t[1]) {
              case 'left':
                s = 0;
                break;
              case 'center':
                s = 0.5;
                break;
              case 'right':
                s = 1;
                break;
              default:
                s = t[1] / e.width;
            }
            return { x: s, y: i };
          },
          createWrapper: function (i) {
            if (i.parent().is('.ui-effects-wrapper')) return i.parent();
            var s = {
                width: i.outerWidth(!0),
                height: i.outerHeight(!0),
                float: i.css('float'),
              },
              t = c('<div></div>')
                .addClass('ui-effects-wrapper')
                .css({
                  fontSize: '100%',
                  background: 'transparent',
                  border: 'none',
                  margin: 0,
                  padding: 0,
                }),
              e = { width: i.width(), height: i.height() },
              n = document.activeElement;
            try {
              n.id;
            } catch (o) {
              n = document.body;
            }
            return (
              i.wrap(t),
              (i[0] === n || c.contains(i[0], n)) && c(n).focus(),
              (t = i.parent()),
              'static' === i.css('position')
                ? (t.css({ position: 'relative' }),
                  i.css({ position: 'relative' }))
                : (c.extend(s, {
                    position: i.css('position'),
                    zIndex: i.css('z-index'),
                  }),
                  c.each(['top', 'left', 'bottom', 'right'], function (t, e) {
                    (s[e] = i.css(e)),
                      isNaN(parseInt(s[e], 10)) && (s[e] = 'auto');
                  }),
                  i.css({
                    position: 'relative',
                    top: 0,
                    left: 0,
                    right: 'auto',
                    bottom: 'auto',
                  })),
              i.css(e),
              t.css(s).show()
            );
          },
          removeWrapper: function (t) {
            var e = document.activeElement;
            return (
              t.parent().is('.ui-effects-wrapper') &&
                (t.parent().replaceWith(t),
                (t[0] === e || c.contains(t[0], e)) && c(e).focus()),
              t
            );
          },
          setTransition: function (s, t, n, o) {
            return (
              (o = o || {}),
              c.each(t, function (t, e) {
                var i = s.cssUnit(e);
                0 < i[0] && (o[e] = i[0] * n + i[1]);
              }),
              o
            );
          },
        }),
          c.fn.extend({
            effect: function () {
              var o = s.apply(this, arguments),
                t = o.mode,
                e = o.queue,
                a = c.effects.effect[o.effect];
              if (c.fx.off || !a)
                return t
                  ? this[t](o.duration, o.complete)
                  : this.each(function () {
                      o.complete && o.complete.call(this);
                    });
              function i(t) {
                var e = c(this),
                  i = o.complete,
                  s = o.mode;
                function n() {
                  c.isFunction(i) && i.call(e[0]), c.isFunction(t) && t();
                }
                (e.is(':hidden') ? 'hide' === s : 'show' === s)
                  ? (e[s](), n())
                  : a.call(e[0], o, n);
              }
              return !1 === e ? this.each(i) : this.queue(e || 'fx', i);
            },
            show:
              ((a = c.fn.show),
              function (t) {
                if (i(t)) return a.apply(this, arguments);
                var e = s.apply(this, arguments);
                return (e.mode = 'show'), this.effect.call(this, e);
              }),
            hide:
              ((o = c.fn.hide),
              function (t) {
                if (i(t)) return o.apply(this, arguments);
                var e = s.apply(this, arguments);
                return (e.mode = 'hide'), this.effect.call(this, e);
              }),
            toggle:
              ((n = c.fn.toggle),
              function (t) {
                if (i(t) || 'boolean' == typeof t)
                  return n.apply(this, arguments);
                var e = s.apply(this, arguments);
                return (e.mode = 'toggle'), this.effect.call(this, e);
              }),
            cssUnit: function (t) {
              var i = this.css(t),
                s = [];
              return (
                c.each(['em', 'px', '%', 'pt'], function (t, e) {
                  0 < i.indexOf(e) && (s = [parseFloat(i), e]);
                }),
                s
              );
            },
          });
      })(),
      (i = {}),
      c.each(['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'], function (e, t) {
        i[t] = function (t) {
          return Math.pow(t, e + 2);
        };
      }),
      c.extend(i, {
        Sine: function (t) {
          return 1 - Math.cos((t * Math.PI) / 2);
        },
        Circ: function (t) {
          return 1 - Math.sqrt(1 - t * t);
        },
        Elastic: function (t) {
          return 0 === t || 1 === t
            ? t
            : -Math.pow(2, 8 * (t - 1)) *
                Math.sin(((80 * (t - 1) - 7.5) * Math.PI) / 15);
        },
        Back: function (t) {
          return t * t * (3 * t - 2);
        },
        Bounce: function (t) {
          for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11; );
          return (
            1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
          );
        },
      }),
      c.each(i, function (t, e) {
        (c.easing['easeIn' + t] = e),
          (c.easing['easeOut' + t] = function (t) {
            return 1 - e(1 - t);
          }),
          (c.easing['easeInOut' + t] = function (t) {
            return t < 0.5 ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2;
          });
      });
  })(jQuery),
  (function (l, t) {
    var n = 0,
      d = {},
      p = {};
    (d.height =
      d.paddingTop =
      d.paddingBottom =
      d.borderTopWidth =
      d.borderBottomWidth =
        'hide'),
      (p.height =
        p.paddingTop =
        p.paddingBottom =
        p.borderTopWidth =
        p.borderBottomWidth =
          'show'),
      l.widget('ui.accordion', {
        version: '1.10.3',
        options: {
          active: 0,
          animate: {},
          collapsible: !1,
          event: 'click',
          header: '> li > :first-child,> :not(li):even',
          heightStyle: 'auto',
          icons: {
            activeHeader: 'ui-icon-triangle-1-s',
            header: 'ui-icon-triangle-1-e',
          },
          activate: null,
          beforeActivate: null,
        },
        _create: function () {
          var t = this.options;
          (this.prevShow = this.prevHide = l()),
            this.element
              .addClass('ui-accordion ui-widget ui-helper-reset')
              .attr('role', 'tablist'),
            t.collapsible ||
              (!1 !== t.active && null != t.active) ||
              (t.active = 0),
            this._processPanels(),
            t.active < 0 && (t.active += this.headers.length),
            this._refresh();
        },
        _getCreateEventData: function () {
          return {
            header: this.active,
            panel: this.active.length ? this.active.next() : l(),
            content: this.active.length ? this.active.next() : l(),
          };
        },
        _createIcons: function () {
          var t = this.options.icons;
          t &&
            (l('<span>')
              .addClass('ui-accordion-header-icon ui-icon ' + t.header)
              .prependTo(this.headers),
            this.active
              .children('.ui-accordion-header-icon')
              .removeClass(t.header)
              .addClass(t.activeHeader),
            this.headers.addClass('ui-accordion-icons'));
        },
        _destroyIcons: function () {
          this.headers
            .removeClass('ui-accordion-icons')
            .children('.ui-accordion-header-icon')
            .remove();
        },
        _destroy: function () {
          var t;
          this.element
            .removeClass('ui-accordion ui-widget ui-helper-reset')
            .removeAttr('role'),
            this.headers
              .removeClass(
                'ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top'
              )
              .removeAttr('role')
              .removeAttr('aria-selected')
              .removeAttr('aria-controls')
              .removeAttr('tabIndex')
              .each(function () {
                /^ui-accordion/.test(this.id) && this.removeAttribute('id');
              }),
            this._destroyIcons(),
            (t = this.headers
              .next()
              .css('display', '')
              .removeAttr('role')
              .removeAttr('aria-expanded')
              .removeAttr('aria-hidden')
              .removeAttr('aria-labelledby')
              .removeClass(
                'ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled'
              )
              .each(function () {
                /^ui-accordion/.test(this.id) && this.removeAttribute('id');
              })),
            'content' !== this.options.heightStyle && t.css('height', '');
        },
        _setOption: function (t, e) {
          'active' !== t
            ? ('event' === t &&
                (this.options.event &&
                  this._off(this.headers, this.options.event),
                this._setupEvents(e)),
              this._super(t, e),
              'collapsible' !== t ||
                e ||
                !1 !== this.options.active ||
                this._activate(0),
              'icons' === t && (this._destroyIcons(), e && this._createIcons()),
              'disabled' === t &&
                this.headers
                  .add(this.headers.next())
                  .toggleClass('ui-state-disabled', !!e))
            : this._activate(e);
        },
        _keydown: function (t) {
          if (!t.altKey && !t.ctrlKey) {
            var e = l.ui.keyCode,
              i = this.headers.length,
              s = this.headers.index(t.target),
              n = !1;
            switch (t.keyCode) {
              case e.RIGHT:
              case e.DOWN:
                n = this.headers[(s + 1) % i];
                break;
              case e.LEFT:
              case e.UP:
                n = this.headers[(s - 1 + i) % i];
                break;
              case e.SPACE:
              case e.ENTER:
                this._eventHandler(t);
                break;
              case e.HOME:
                n = this.headers[0];
                break;
              case e.END:
                n = this.headers[i - 1];
            }
            n &&
              (l(t.target).attr('tabIndex', -1),
              l(n).attr('tabIndex', 0),
              n.focus(),
              t.preventDefault());
          }
        },
        _panelKeyDown: function (t) {
          t.keyCode === l.ui.keyCode.UP &&
            t.ctrlKey &&
            l(t.currentTarget).prev().focus();
        },
        refresh: function () {
          var t = this.options;
          this._processPanels(),
            (!1 === t.active && !0 === t.collapsible) || !this.headers.length
              ? ((t.active = !1), (this.active = l()))
              : !1 === t.active
              ? this._activate(0)
              : this.active.length &&
                !l.contains(this.element[0], this.active[0])
              ? this.headers.length ===
                this.headers.find('.ui-state-disabled').length
                ? ((t.active = !1), (this.active = l()))
                : this._activate(Math.max(0, t.active - 1))
              : (t.active = this.headers.index(this.active)),
            this._destroyIcons(),
            this._refresh();
        },
        _processPanels: function () {
          (this.headers = this.element
            .find(this.options.header)
            .addClass(
              'ui-accordion-header ui-helper-reset ui-state-default ui-corner-all'
            )),
            this.headers
              .next()
              .addClass(
                'ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom'
              )
              .filter(':not(.ui-accordion-content-active)')
              .hide();
        },
        _refresh: function () {
          var i,
            t = this.options,
            e = t.heightStyle,
            s = this.element.parent(),
            o = (this.accordionId =
              'ui-accordion-' + (this.element.attr('id') || ++n));
          (this.active = this._findActive(t.active)
            .addClass(
              'ui-accordion-header-active ui-state-active ui-corner-top'
            )
            .removeClass('ui-corner-all')),
            this.active.next().addClass('ui-accordion-content-active').show(),
            this.headers
              .attr('role', 'tab')
              .each(function (t) {
                var e = l(this),
                  i = e.attr('id'),
                  s = e.next(),
                  n = s.attr('id');
                i || ((i = o + '-header-' + t), e.attr('id', i)),
                  n || ((n = o + '-panel-' + t), s.attr('id', n)),
                  e.attr('aria-controls', n),
                  s.attr('aria-labelledby', i);
              })
              .next()
              .attr('role', 'tabpanel'),
            this.headers
              .not(this.active)
              .attr({ 'aria-selected': 'false', tabIndex: -1 })
              .next()
              .attr({ 'aria-expanded': 'false', 'aria-hidden': 'true' })
              .hide(),
            this.active.length
              ? this.active
                  .attr({ 'aria-selected': 'true', tabIndex: 0 })
                  .next()
                  .attr({ 'aria-expanded': 'true', 'aria-hidden': 'false' })
              : this.headers.eq(0).attr('tabIndex', 0),
            this._createIcons(),
            this._setupEvents(t.event),
            'fill' === e
              ? ((i = s.height()),
                this.element.siblings(':visible').each(function () {
                  var t = l(this),
                    e = t.css('position');
                  'absolute' !== e && 'fixed' !== e && (i -= t.outerHeight(!0));
                }),
                this.headers.each(function () {
                  i -= l(this).outerHeight(!0);
                }),
                this.headers
                  .next()
                  .each(function () {
                    l(this).height(
                      Math.max(0, i - l(this).innerHeight() + l(this).height())
                    );
                  })
                  .css('overflow', 'auto'))
              : 'auto' === e &&
                ((i = 0),
                this.headers
                  .next()
                  .each(function () {
                    i = Math.max(i, l(this).css('height', '').height());
                  })
                  .height(i));
        },
        _activate: function (t) {
          var e = this._findActive(t)[0];
          e !== this.active[0] &&
            ((e = e || this.active[0]),
            this._eventHandler({
              target: e,
              currentTarget: e,
              preventDefault: l.noop,
            }));
        },
        _findActive: function (t) {
          return 'number' == typeof t ? this.headers.eq(t) : l();
        },
        _setupEvents: function (t) {
          var i = { keydown: '_keydown' };
          t &&
            l.each(t.split(' '), function (t, e) {
              i[e] = '_eventHandler';
            }),
            this._off(this.headers.add(this.headers.next())),
            this._on(this.headers, i),
            this._on(this.headers.next(), { keydown: '_panelKeyDown' }),
            this._hoverable(this.headers),
            this._focusable(this.headers);
        },
        _eventHandler: function (t) {
          var e = this.options,
            i = this.active,
            s = l(t.currentTarget),
            n = s[0] === i[0],
            o = n && e.collapsible,
            a = o ? l() : s.next(),
            r = i.next(),
            h = {
              oldHeader: i,
              oldPanel: r,
              newHeader: o ? l() : s,
              newPanel: a,
            };
          t.preventDefault(),
            (n && !e.collapsible) ||
              !1 === this._trigger('beforeActivate', t, h) ||
              ((e.active = !o && this.headers.index(s)),
              (this.active = n ? l() : s),
              this._toggle(h),
              i.removeClass('ui-accordion-header-active ui-state-active'),
              e.icons &&
                i
                  .children('.ui-accordion-header-icon')
                  .removeClass(e.icons.activeHeader)
                  .addClass(e.icons.header),
              n ||
                (s
                  .removeClass('ui-corner-all')
                  .addClass(
                    'ui-accordion-header-active ui-state-active ui-corner-top'
                  ),
                e.icons &&
                  s
                    .children('.ui-accordion-header-icon')
                    .removeClass(e.icons.header)
                    .addClass(e.icons.activeHeader),
                s.next().addClass('ui-accordion-content-active')));
        },
        _toggle: function (t) {
          var e = t.newPanel,
            i = this.prevShow.length ? this.prevShow : t.oldPanel;
          this.prevShow.add(this.prevHide).stop(!0, !0),
            (this.prevShow = e),
            (this.prevHide = i),
            this.options.animate
              ? this._animate(e, i, t)
              : (i.hide(), e.show(), this._toggleComplete(t)),
            i.attr({ 'aria-expanded': 'false', 'aria-hidden': 'true' }),
            i.prev().attr('aria-selected', 'false'),
            e.length && i.length
              ? i.prev().attr('tabIndex', -1)
              : e.length &&
                this.headers
                  .filter(function () {
                    return 0 === l(this).attr('tabIndex');
                  })
                  .attr('tabIndex', -1),
            e
              .attr({ 'aria-expanded': 'true', 'aria-hidden': 'false' })
              .prev()
              .attr({ 'aria-selected': 'true', tabIndex: 0 });
        },
        _animate: function (t, i, e) {
          var s,
            n,
            o,
            a = this,
            r = 0,
            h = t.length && (!i.length || t.index() < i.index()),
            l = this.options.animate || {},
            c = (h && l.down) || l,
            u = function () {
              a._toggleComplete(e);
            };
          return (
            'number' == typeof c && (o = c),
            'string' == typeof c && (n = c),
            (n = n || c.easing || l.easing),
            (o = o || c.duration || l.duration),
            i.length
              ? t.length
                ? ((s = t.show().outerHeight()),
                  i.animate(d, {
                    duration: o,
                    easing: n,
                    step: function (t, e) {
                      e.now = Math.round(t);
                    },
                  }),
                  void t.hide().animate(p, {
                    duration: o,
                    easing: n,
                    complete: u,
                    step: function (t, e) {
                      (e.now = Math.round(t)),
                        'height' !== e.prop
                          ? (r += e.now)
                          : 'content' !== a.options.heightStyle &&
                            ((e.now = Math.round(s - i.outerHeight() - r)),
                            (r = 0));
                    },
                  }))
                : i.animate(d, o, n, u)
              : t.animate(p, o, n, u)
          );
        },
        _toggleComplete: function (t) {
          var e = t.oldPanel;
          e
            .removeClass('ui-accordion-content-active')
            .prev()
            .removeClass('ui-corner-top')
            .addClass('ui-corner-all'),
            e.length && (e.parent()[0].className = e.parent()[0].className),
            this._trigger('activate', null, t);
        },
      });
  })(jQuery),
  (function (a, t) {
    var s = 0;
    a.widget('ui.autocomplete', {
      version: '1.10.3',
      defaultElement: '<input>',
      options: {
        appendTo: null,
        autoFocus: !1,
        delay: 300,
        minLength: 1,
        position: { my: 'left top', at: 'left bottom', collision: 'none' },
        source: null,
        change: null,
        close: null,
        focus: null,
        open: null,
        response: null,
        search: null,
        select: null,
      },
      pending: 0,
      _create: function () {
        var i,
          s,
          n,
          t = this.element[0].nodeName.toLowerCase(),
          e = 'textarea' === t,
          o = 'input' === t;
        (this.isMultiLine =
          !!e || (!o && this.element.prop('isContentEditable'))),
          (this.valueMethod = this.element[e || o ? 'val' : 'text']),
          (this.isNewMenu = !0),
          this.element
            .addClass('ui-autocomplete-input')
            .attr('autocomplete', 'off'),
          this._on(this.element, {
            keydown: function (t) {
              if (this.element.prop('readOnly')) s = n = i = !0;
              else {
                s = n = i = !1;
                var e = a.ui.keyCode;
                switch (t.keyCode) {
                  case e.PAGE_UP:
                    (i = !0), this._move('previousPage', t);
                    break;
                  case e.PAGE_DOWN:
                    (i = !0), this._move('nextPage', t);
                    break;
                  case e.UP:
                    (i = !0), this._keyEvent('previous', t);
                    break;
                  case e.DOWN:
                    (i = !0), this._keyEvent('next', t);
                    break;
                  case e.ENTER:
                  case e.NUMPAD_ENTER:
                    this.menu.active &&
                      ((i = !0), t.preventDefault(), this.menu.select(t));
                    break;
                  case e.TAB:
                    this.menu.active && this.menu.select(t);
                    break;
                  case e.ESCAPE:
                    this.menu.element.is(':visible') &&
                      (this._value(this.term),
                      this.close(t),
                      t.preventDefault());
                    break;
                  default:
                    (s = !0), this._searchTimeout(t);
                }
              }
            },
            keypress: function (t) {
              if (i)
                return (
                  (i = !1),
                  void (
                    (this.isMultiLine && !this.menu.element.is(':visible')) ||
                    t.preventDefault()
                  )
                );
              if (!s) {
                var e = a.ui.keyCode;
                switch (t.keyCode) {
                  case e.PAGE_UP:
                    this._move('previousPage', t);
                    break;
                  case e.PAGE_DOWN:
                    this._move('nextPage', t);
                    break;
                  case e.UP:
                    this._keyEvent('previous', t);
                    break;
                  case e.DOWN:
                    this._keyEvent('next', t);
                }
              }
            },
            input: function (t) {
              if (n) return (n = !1), void t.preventDefault();
              this._searchTimeout(t);
            },
            focus: function () {
              (this.selectedItem = null), (this.previous = this._value());
            },
            blur: function (t) {
              this.cancelBlur
                ? delete this.cancelBlur
                : (clearTimeout(this.searching),
                  this.close(t),
                  this._change(t));
            },
          }),
          this._initSource(),
          (this.menu = a('<ul>')
            .addClass('ui-autocomplete ui-front')
            .appendTo(this._appendTo())
            .menu({ role: null })
            .hide()
            .data('ui-menu')),
          this._on(this.menu.element, {
            mousedown: function (t) {
              t.preventDefault(),
                (this.cancelBlur = !0),
                this._delay(function () {
                  delete this.cancelBlur;
                });
              var i = this.menu.element[0];
              a(t.target).closest('.ui-menu-item').length ||
                this._delay(function () {
                  var e = this;
                  this.document.one('mousedown', function (t) {
                    t.target === e.element[0] ||
                      t.target === i ||
                      a.contains(i, t.target) ||
                      e.close();
                  });
                });
            },
            menufocus: function (t, e) {
              if (
                this.isNewMenu &&
                ((this.isNewMenu = !1),
                t.originalEvent && /^mouse/.test(t.originalEvent.type))
              )
                return (
                  this.menu.blur(),
                  void this.document.one('mousemove', function () {
                    a(t.target).trigger(t.originalEvent);
                  })
                );
              var i = e.item.data('ui-autocomplete-item');
              !1 !== this._trigger('focus', t, { item: i })
                ? t.originalEvent &&
                  /^key/.test(t.originalEvent.type) &&
                  this._value(i.value)
                : this.liveRegion.text(i.value);
            },
            menuselect: function (t, e) {
              var i = e.item.data('ui-autocomplete-item'),
                s = this.previous;
              this.element[0] !== this.document[0].activeElement &&
                (this.element.focus(),
                (this.previous = s),
                this._delay(function () {
                  (this.previous = s), (this.selectedItem = i);
                })),
                !1 !== this._trigger('select', t, { item: i }) &&
                  this._value(i.value),
                (this.term = this._value()),
                this.close(t),
                (this.selectedItem = i);
            },
          }),
          (this.liveRegion = a('<span>', {
            role: 'status',
            'aria-live': 'polite',
          })
            .addClass('ui-helper-hidden-accessible')
            .insertBefore(this.element)),
          this._on(this.window, {
            beforeunload: function () {
              this.element.removeAttr('autocomplete');
            },
          });
      },
      _destroy: function () {
        clearTimeout(this.searching),
          this.element
            .removeClass('ui-autocomplete-input')
            .removeAttr('autocomplete'),
          this.menu.element.remove(),
          this.liveRegion.remove();
      },
      _setOption: function (t, e) {
        this._super(t, e),
          'source' === t && this._initSource(),
          'appendTo' === t && this.menu.element.appendTo(this._appendTo()),
          'disabled' === t && e && this.xhr && this.xhr.abort();
      },
      _appendTo: function () {
        var t = this.options.appendTo;
        return (
          t &&
            (t = t.jquery || t.nodeType ? a(t) : this.document.find(t).eq(0)),
          t || (t = this.element.closest('.ui-front')),
          t.length || (t = this.document[0].body),
          t
        );
      },
      _initSource: function () {
        var i,
          s,
          n = this;
        a.isArray(this.options.source)
          ? ((i = this.options.source),
            (this.source = function (t, e) {
              e(a.ui.autocomplete.filter(i, t.term));
            }))
          : 'string' == typeof this.options.source
          ? ((s = this.options.source),
            (this.source = function (t, e) {
              n.xhr && n.xhr.abort(),
                (n.xhr = a.ajax({
                  url: s,
                  data: t,
                  dataType: 'json',
                  success: function (t) {
                    e(t);
                  },
                  error: function () {
                    e([]);
                  },
                }));
            }))
          : (this.source = this.options.source);
      },
      _searchTimeout: function (t) {
        clearTimeout(this.searching),
          (this.searching = this._delay(function () {
            this.term !== this._value() &&
              ((this.selectedItem = null), this.search(null, t));
          }, this.options.delay));
      },
      search: function (t, e) {
        return (
          (t = null != t ? t : this._value()),
          (this.term = this._value()),
          t.length < this.options.minLength
            ? this.close(e)
            : !1 !== this._trigger('search', e)
            ? this._search(t)
            : void 0
        );
      },
      _search: function (t) {
        this.pending++,
          this.element.addClass('ui-autocomplete-loading'),
          (this.cancelSearch = !1),
          this.source({ term: t }, this._response());
      },
      _response: function () {
        var e = this,
          i = ++s;
        return function (t) {
          i === s && e.__response(t),
            e.pending--,
            e.pending || e.element.removeClass('ui-autocomplete-loading');
        };
      },
      __response: function (t) {
        t && (t = this._normalize(t)),
          this._trigger('response', null, { content: t }),
          !this.options.disabled && t && t.length && !this.cancelSearch
            ? (this._suggest(t), this._trigger('open'))
            : this._close();
      },
      close: function (t) {
        (this.cancelSearch = !0), this._close(t);
      },
      _close: function (t) {
        this.menu.element.is(':visible') &&
          (this.menu.element.hide(),
          this.menu.blur(),
          (this.isNewMenu = !0),
          this._trigger('close', t));
      },
      _change: function (t) {
        this.previous !== this._value() &&
          this._trigger('change', t, { item: this.selectedItem });
      },
      _normalize: function (t) {
        return t.length && t[0].label && t[0].value
          ? t
          : a.map(t, function (t) {
              return 'string' == typeof t
                ? { label: t, value: t }
                : a.extend(
                    { label: t.label || t.value, value: t.value || t.label },
                    t
                  );
            });
      },
      _suggest: function (t) {
        var e = this.menu.element.empty();
        this._renderMenu(e, t),
          (this.isNewMenu = !0),
          this.menu.refresh(),
          e.show(),
          this._resizeMenu(),
          e.position(a.extend({ of: this.element }, this.options.position)),
          this.options.autoFocus && this.menu.next();
      },
      _resizeMenu: function () {
        var t = this.menu.element;
        t.outerWidth(
          Math.max(t.width('').outerWidth() + 1, this.element.outerWidth())
        );
      },
      _renderMenu: function (i, t) {
        var s = this;
        a.each(t, function (t, e) {
          s._renderItemData(i, e);
        });
      },
      _renderItemData: function (t, e) {
        return this._renderItem(t, e).data('ui-autocomplete-item', e);
      },
      _renderItem: function (t, e) {
        return a('<li>').append(a('<a>').text(e.label)).appendTo(t);
      },
      _move: function (t, e) {
        if (this.menu.element.is(':visible'))
          return (this.menu.isFirstItem() && /^previous/.test(t)) ||
            (this.menu.isLastItem() && /^next/.test(t))
            ? (this._value(this.term), void this.menu.blur())
            : void this.menu[t](e);
        this.search(null, e);
      },
      widget: function () {
        return this.menu.element;
      },
      _value: function () {
        return this.valueMethod.apply(this.element, arguments);
      },
      _keyEvent: function (t, e) {
        (this.isMultiLine && !this.menu.element.is(':visible')) ||
          (this._move(t, e), e.preventDefault());
      },
    }),
      a.extend(a.ui.autocomplete, {
        escapeRegex: function (t) {
          return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
        },
        filter: function (t, e) {
          var i = new RegExp(a.ui.autocomplete.escapeRegex(e), 'i');
          return a.grep(t, function (t) {
            return i.test(t.label || t.value || t);
          });
        },
      }),
      a.widget('ui.autocomplete', a.ui.autocomplete, {
        options: {
          messages: {
            noResults: 'No search results.',
            results: function (t) {
              return (
                t +
                (1 < t ? ' results are' : ' result is') +
                ' available, use up and down arrow keys to navigate.'
              );
            },
          },
        },
        __response: function (t) {
          var e;
          this._superApply(arguments),
            this.options.disabled ||
              this.cancelSearch ||
              ((e =
                t && t.length
                  ? this.options.messages.results(t.length)
                  : this.options.messages.noResults),
              this.liveRegion.text(e));
        },
      });
  })(jQuery),
  (function (o, t) {
    var a,
      r,
      h,
      l,
      c = 'ui-button ui-widget ui-state-default ui-corner-all',
      u =
        'ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only',
      d = function () {
        var t = o(this);
        setTimeout(function () {
          t.find(':ui-button').button('refresh');
        }, 1);
      },
      p = function (t) {
        var e = t.name,
          i = t.form,
          s = o([]);
        return (
          e &&
            ((e = e.replace(/'/g, "\\'")),
            (s = i
              ? o(i).find("[name='" + e + "']")
              : o("[name='" + e + "']", t.ownerDocument).filter(function () {
                  return !this.form;
                }))),
          s
        );
      };
    o.widget('ui.button', {
      version: '1.10.3',
      defaultElement: '<button>',
      options: {
        disabled: null,
        text: !0,
        label: null,
        icons: { primary: null, secondary: null },
      },
      _create: function () {
        this.element
          .closest('form')
          .unbind('reset' + this.eventNamespace)
          .bind('reset' + this.eventNamespace, d),
          'boolean' != typeof this.options.disabled
            ? (this.options.disabled = !!this.element.prop('disabled'))
            : this.element.prop('disabled', this.options.disabled),
          this._determineButtonType(),
          (this.hasTitle = !!this.buttonElement.attr('title'));
        var e = this,
          i = this.options,
          t = 'checkbox' === this.type || 'radio' === this.type,
          s = t ? '' : 'ui-state-active',
          n = 'ui-state-focus';
        null === i.label &&
          (i.label =
            'input' === this.type
              ? this.buttonElement.val()
              : this.buttonElement.html()),
          this._hoverable(this.buttonElement),
          this.buttonElement
            .addClass(c)
            .attr('role', 'button')
            .bind('mouseenter' + this.eventNamespace, function () {
              i.disabled || (this === a && o(this).addClass('ui-state-active'));
            })
            .bind('mouseleave' + this.eventNamespace, function () {
              i.disabled || o(this).removeClass(s);
            })
            .bind('click' + this.eventNamespace, function (t) {
              i.disabled && (t.preventDefault(), t.stopImmediatePropagation());
            }),
          this.element
            .bind('focus' + this.eventNamespace, function () {
              e.buttonElement.addClass(n);
            })
            .bind('blur' + this.eventNamespace, function () {
              e.buttonElement.removeClass(n);
            }),
          t &&
            (this.element.bind('change' + this.eventNamespace, function () {
              l || e.refresh();
            }),
            this.buttonElement
              .bind('mousedown' + this.eventNamespace, function (t) {
                i.disabled || ((l = !1), (r = t.pageX), (h = t.pageY));
              })
              .bind('mouseup' + this.eventNamespace, function (t) {
                i.disabled || (r === t.pageX && h === t.pageY) || (l = !0);
              })),
          'checkbox' === this.type
            ? this.buttonElement.bind(
                'click' + this.eventNamespace,
                function () {
                  if (i.disabled || l) return !1;
                }
              )
            : 'radio' === this.type
            ? this.buttonElement.bind(
                'click' + this.eventNamespace,
                function () {
                  if (i.disabled || l) return !1;
                  o(this).addClass('ui-state-active'),
                    e.buttonElement.attr('aria-pressed', 'true');
                  var t = e.element[0];
                  p(t)
                    .not(t)
                    .map(function () {
                      return o(this).button('widget')[0];
                    })
                    .removeClass('ui-state-active')
                    .attr('aria-pressed', 'false');
                }
              )
            : (this.buttonElement
                .bind('mousedown' + this.eventNamespace, function () {
                  if (i.disabled) return !1;
                  o(this).addClass('ui-state-active'),
                    (a = this),
                    e.document.one('mouseup', function () {
                      a = null;
                    });
                })
                .bind('mouseup' + this.eventNamespace, function () {
                  if (i.disabled) return !1;
                  o(this).removeClass('ui-state-active');
                })
                .bind('keydown' + this.eventNamespace, function (t) {
                  if (i.disabled) return !1;
                  (t.keyCode !== o.ui.keyCode.SPACE &&
                    t.keyCode !== o.ui.keyCode.ENTER) ||
                    o(this).addClass('ui-state-active');
                })
                .bind(
                  'keyup' + this.eventNamespace + ' blur' + this.eventNamespace,
                  function () {
                    o(this).removeClass('ui-state-active');
                  }
                ),
              this.buttonElement.is('a') &&
                this.buttonElement.keyup(function (t) {
                  t.keyCode === o.ui.keyCode.SPACE && o(this).click();
                })),
          this._setOption('disabled', i.disabled),
          this._resetButton();
      },
      _determineButtonType: function () {
        var t, e, i;
        this.element.is('[type=checkbox]')
          ? (this.type = 'checkbox')
          : this.element.is('[type=radio]')
          ? (this.type = 'radio')
          : this.element.is('input')
          ? (this.type = 'input')
          : (this.type = 'button'),
          'checkbox' === this.type || 'radio' === this.type
            ? ((t = this.element.parents().last()),
              (e = "label[for='" + this.element.attr('id') + "']"),
              (this.buttonElement = t.find(e)),
              this.buttonElement.length ||
                ((t = t.length ? t.siblings() : this.element.siblings()),
                (this.buttonElement = t.filter(e)),
                this.buttonElement.length || (this.buttonElement = t.find(e))),
              this.element.addClass('ui-helper-hidden-accessible'),
              (i = this.element.is(':checked')) &&
                this.buttonElement.addClass('ui-state-active'),
              this.buttonElement.prop('aria-pressed', i))
            : (this.buttonElement = this.element);
      },
      widget: function () {
        return this.buttonElement;
      },
      _destroy: function () {
        this.element.removeClass('ui-helper-hidden-accessible'),
          this.buttonElement
            .removeClass(c + ' ui-state-hover ui-state-active  ' + u)
            .removeAttr('role')
            .removeAttr('aria-pressed')
            .html(this.buttonElement.find('.ui-button-text').html()),
          this.hasTitle || this.buttonElement.removeAttr('title');
      },
      _setOption: function (t, e) {
        this._super(t, e),
          'disabled' !== t
            ? this._resetButton()
            : e
            ? this.element.prop('disabled', !0)
            : this.element.prop('disabled', !1);
      },
      refresh: function () {
        var t = this.element.is('input, button')
          ? this.element.is(':disabled')
          : this.element.hasClass('ui-button-disabled');
        t !== this.options.disabled && this._setOption('disabled', t),
          'radio' === this.type
            ? p(this.element[0]).each(function () {
                o(this).is(':checked')
                  ? o(this)
                      .button('widget')
                      .addClass('ui-state-active')
                      .attr('aria-pressed', 'true')
                  : o(this)
                      .button('widget')
                      .removeClass('ui-state-active')
                      .attr('aria-pressed', 'false');
              })
            : 'checkbox' === this.type &&
              (this.element.is(':checked')
                ? this.buttonElement
                    .addClass('ui-state-active')
                    .attr('aria-pressed', 'true')
                : this.buttonElement
                    .removeClass('ui-state-active')
                    .attr('aria-pressed', 'false'));
      },
      _resetButton: function () {
        if ('input' !== this.type) {
          var t = this.buttonElement.removeClass(u),
            e = o('<span></span>', this.document[0])
              .addClass('ui-button-text')
              .html(this.options.label)
              .appendTo(t.empty())
              .text(),
            i = this.options.icons,
            s = i.primary && i.secondary,
            n = [];
          i.primary || i.secondary
            ? (this.options.text &&
                n.push(
                  'ui-button-text-icon' +
                    (s ? 's' : i.primary ? '-primary' : '-secondary')
                ),
              i.primary &&
                t.prepend(
                  "<span class='ui-button-icon-primary ui-icon " +
                    i.primary +
                    "'></span>"
                ),
              i.secondary &&
                t.append(
                  "<span class='ui-button-icon-secondary ui-icon " +
                    i.secondary +
                    "'></span>"
                ),
              this.options.text ||
                (n.push(s ? 'ui-button-icons-only' : 'ui-button-icon-only'),
                this.hasTitle || t.attr('title', o.trim(e))))
            : n.push('ui-button-text-only'),
            t.addClass(n.join(' '));
        } else this.options.label && this.element.val(this.options.label);
      },
    }),
      o.widget('ui.buttonset', {
        version: '1.10.3',
        options: {
          items:
            'button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)',
        },
        _create: function () {
          this.element.addClass('ui-buttonset');
        },
        _init: function () {
          this.refresh();
        },
        _setOption: function (t, e) {
          'disabled' === t && this.buttons.button('option', t, e),
            this._super(t, e);
        },
        refresh: function () {
          var t = 'rtl' === this.element.css('direction');
          this.buttons = this.element
            .find(this.options.items)
            .filter(':ui-button')
            .button('refresh')
            .end()
            .not(':ui-button')
            .button()
            .end()
            .map(function () {
              return o(this).button('widget')[0];
            })
            .removeClass('ui-corner-all ui-corner-left ui-corner-right')
            .filter(':first')
            .addClass(t ? 'ui-corner-right' : 'ui-corner-left')
            .end()
            .filter(':last')
            .addClass(t ? 'ui-corner-left' : 'ui-corner-right')
            .end()
            .end();
        },
        _destroy: function () {
          this.element.removeClass('ui-buttonset'),
            this.buttons
              .map(function () {
                return o(this).button('widget')[0];
              })
              .removeClass('ui-corner-left ui-corner-right')
              .end()
              .button('destroy');
        },
      });
  })(jQuery),
  (function (x, h) {
    x.extend(x.ui, { datepicker: { version: '1.10.3' } });
    var n,
      u = 'datepicker';
    function t() {
      (this._curInst = null),
        (this._keyEvent = !1),
        (this._disabledInputs = []),
        (this._datepickerShowing = !1),
        (this._inDialog = !1),
        (this._mainDivId = 'ui-datepicker-div'),
        (this._inlineClass = 'ui-datepicker-inline'),
        (this._appendClass = 'ui-datepicker-append'),
        (this._triggerClass = 'ui-datepicker-trigger'),
        (this._dialogClass = 'ui-datepicker-dialog'),
        (this._disableClass = 'ui-datepicker-disabled'),
        (this._unselectableClass = 'ui-datepicker-unselectable'),
        (this._currentClass = 'ui-datepicker-current-day'),
        (this._dayOverClass = 'ui-datepicker-days-cell-over'),
        (this.regional = []),
        (this.regional[''] = {
          closeText: 'Done',
          prevText: 'Prev',
          nextText: 'Next',
          currentText: 'Today',
          monthNames: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
          monthNamesShort: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          dayNames: [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
          weekHeader: 'Wk',
          dateFormat: 'mm/dd/yy',
          firstDay: 0,
          isRTL: !1,
          showMonthAfterYear: !1,
          yearSuffix: '',
        }),
        (this._defaults = {
          showOn: 'focus',
          showAnim: 'fadeIn',
          showOptions: {},
          defaultDate: null,
          appendText: '',
          buttonText: '...',
          buttonImage: '',
          buttonImageOnly: !1,
          hideIfNoPrevNext: !1,
          navigationAsDateFormat: !1,
          gotoCurrent: !1,
          changeMonth: !1,
          changeYear: !1,
          yearRange: 'c-10:c+10',
          showOtherMonths: !1,
          selectOtherMonths: !1,
          showWeek: !1,
          calculateWeek: this.iso8601Week,
          shortYearCutoff: '+10',
          minDate: null,
          maxDate: null,
          duration: 'fast',
          beforeShowDay: null,
          beforeShow: null,
          onSelect: null,
          onChangeMonthYear: null,
          onClose: null,
          numberOfMonths: 1,
          showCurrentAtPos: 0,
          stepMonths: 1,
          stepBigMonths: 12,
          altField: '',
          altFormat: '',
          constrainInput: !0,
          showButtonPanel: !1,
          autoSize: !1,
          disabled: !1,
        }),
        x.extend(this._defaults, this.regional['']),
        (this.dpDiv = i(
          x(
            "<div id='" +
              this._mainDivId +
              "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
          )
        ));
    }
    function i(t) {
      var e =
        'button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a';
      return t
        .delegate(e, 'mouseout', function () {
          x(this).removeClass('ui-state-hover'),
            -1 !== this.className.indexOf('ui-datepicker-prev') &&
              x(this).removeClass('ui-datepicker-prev-hover'),
            -1 !== this.className.indexOf('ui-datepicker-next') &&
              x(this).removeClass('ui-datepicker-next-hover');
        })
        .delegate(e, 'mouseover', function () {
          x.datepicker._isDisabledDatepicker(
            n.inline ? t.parent()[0] : n.input[0]
          ) ||
            (x(this)
              .parents('.ui-datepicker-calendar')
              .find('a')
              .removeClass('ui-state-hover'),
            x(this).addClass('ui-state-hover'),
            -1 !== this.className.indexOf('ui-datepicker-prev') &&
              x(this).addClass('ui-datepicker-prev-hover'),
            -1 !== this.className.indexOf('ui-datepicker-next') &&
              x(this).addClass('ui-datepicker-next-hover'));
        });
    }
    function d(t, e) {
      for (var i in (x.extend(t, e), e)) null == e[i] && (t[i] = e[i]);
      return t;
    }
    x.extend(t.prototype, {
      markerClassName: 'hasDatepicker',
      maxRows: 4,
      _widgetDatepicker: function () {
        return this.dpDiv;
      },
      setDefaults: function (t) {
        return d(this._defaults, t || {}), this;
      },
      _attachDatepicker: function (t, e) {
        var i, s, n;
        (s = 'div' === (i = t.nodeName.toLowerCase()) || 'span' === i),
          t.id || ((this.uuid += 1), (t.id = 'dp' + this.uuid)),
          ((n = this._newInst(x(t), s)).settings = x.extend({}, e || {})),
          'input' === i
            ? this._connectDatepicker(t, n)
            : s && this._inlineDatepicker(t, n);
      },
      _newInst: function (t, e) {
        return {
          id: t[0].id.replace(/([^A-Za-z0-9_\-])/g, '\\\\$1'),
          input: t,
          selectedDay: 0,
          selectedMonth: 0,
          selectedYear: 0,
          drawMonth: 0,
          drawYear: 0,
          inline: e,
          dpDiv: e
            ? i(
                x(
                  "<div class='" +
                    this._inlineClass +
                    " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
                )
              )
            : this.dpDiv,
        };
      },
      _connectDatepicker: function (t, e) {
        var i = x(t);
        (e.append = x([])),
          (e.trigger = x([])),
          i.hasClass(this.markerClassName) ||
            (this._attachments(i, e),
            i
              .addClass(this.markerClassName)
              .keydown(this._doKeyDown)
              .keypress(this._doKeyPress)
              .keyup(this._doKeyUp),
            this._autoSize(e),
            x.data(t, u, e),
            e.settings.disabled && this._disableDatepicker(t));
      },
      _attachments: function (t, e) {
        var i,
          s,
          n,
          o = this._get(e, 'appendText'),
          a = this._get(e, 'isRTL');
        e.append && e.append.remove(),
          o &&
            ((e.append = x(
              "<span class='" + this._appendClass + "'>" + o + '</span>'
            )),
            t[a ? 'before' : 'after'](e.append)),
          t.unbind('focus', this._showDatepicker),
          e.trigger && e.trigger.remove(),
          ('focus' !== (i = this._get(e, 'showOn')) && 'both' !== i) ||
            t.focus(this._showDatepicker),
          ('button' !== i && 'both' !== i) ||
            ((s = this._get(e, 'buttonText')),
            (n = this._get(e, 'buttonImage')),
            (e.trigger = x(
              this._get(e, 'buttonImageOnly')
                ? x('<img/>')
                    .addClass(this._triggerClass)
                    .attr({ src: n, alt: s, title: s })
                : x("<button type='button'></button>")
                    .addClass(this._triggerClass)
                    .html(
                      n ? x('<img/>').attr({ src: n, alt: s, title: s }) : s
                    )
            )),
            t[a ? 'before' : 'after'](e.trigger),
            e.trigger.click(function () {
              return (
                x.datepicker._datepickerShowing &&
                x.datepicker._lastInput === t[0]
                  ? x.datepicker._hideDatepicker()
                  : (x.datepicker._datepickerShowing &&
                      x.datepicker._lastInput !== t[0] &&
                      x.datepicker._hideDatepicker(),
                    x.datepicker._showDatepicker(t[0])),
                !1
              );
            }));
      },
      _autoSize: function (t) {
        if (this._get(t, 'autoSize') && !t.inline) {
          var e,
            i,
            s,
            n,
            o = new Date(2009, 11, 20),
            a = this._get(t, 'dateFormat');
          a.match(/[DM]/) &&
            ((e = function (t) {
              for (n = s = i = 0; n < t.length; n++)
                t[n].length > i && ((i = t[n].length), (s = n));
              return s;
            }),
            o.setMonth(
              e(this._get(t, a.match(/MM/) ? 'monthNames' : 'monthNamesShort'))
            ),
            o.setDate(
              e(this._get(t, a.match(/DD/) ? 'dayNames' : 'dayNamesShort')) +
                20 -
                o.getDay()
            )),
            t.input.attr('size', this._formatDate(t, o).length);
        }
      },
      _inlineDatepicker: function (t, e) {
        var i = x(t);
        i.hasClass(this.markerClassName) ||
          (i.addClass(this.markerClassName).append(e.dpDiv),
          x.data(t, u, e),
          this._setDate(e, this._getDefaultDate(e), !0),
          this._updateDatepicker(e),
          this._updateAlternate(e),
          e.settings.disabled && this._disableDatepicker(t),
          e.dpDiv.css('display', 'block'));
      },
      _dialogDatepicker: function (t, e, i, s, n) {
        var o,
          a,
          r,
          h,
          l,
          c = this._dialogInst;
        return (
          c ||
            ((this.uuid += 1),
            (o = 'dp' + this.uuid),
            (this._dialogInput = x(
              "<input type='text' id='" +
                o +
                "' style='position: absolute; top: -100px; width: 0px;'/>"
            )),
            this._dialogInput.keydown(this._doKeyDown),
            x('body').append(this._dialogInput),
            ((c = this._dialogInst =
              this._newInst(this._dialogInput, !1)).settings = {}),
            x.data(this._dialogInput[0], u, c)),
          d(c.settings, s || {}),
          (e = e && e.constructor === Date ? this._formatDate(c, e) : e),
          this._dialogInput.val(e),
          (this._pos = n ? (n.length ? n : [n.pageX, n.pageY]) : null),
          this._pos ||
            ((a = document.documentElement.clientWidth),
            (r = document.documentElement.clientHeight),
            (h =
              document.documentElement.scrollLeft || document.body.scrollLeft),
            (l = document.documentElement.scrollTop || document.body.scrollTop),
            (this._pos = [a / 2 - 100 + h, r / 2 - 150 + l])),
          this._dialogInput
            .css('left', this._pos[0] + 20 + 'px')
            .css('top', this._pos[1] + 'px'),
          (c.settings.onSelect = i),
          (this._inDialog = !0),
          this.dpDiv.addClass(this._dialogClass),
          this._showDatepicker(this._dialogInput[0]),
          x.blockUI && x.blockUI(this.dpDiv),
          x.data(this._dialogInput[0], u, c),
          this
        );
      },
      _destroyDatepicker: function (t) {
        var e,
          i = x(t),
          s = x.data(t, u);
        i.hasClass(this.markerClassName) &&
          ((e = t.nodeName.toLowerCase()),
          x.removeData(t, u),
          'input' === e
            ? (s.append.remove(),
              s.trigger.remove(),
              i
                .removeClass(this.markerClassName)
                .unbind('focus', this._showDatepicker)
                .unbind('keydown', this._doKeyDown)
                .unbind('keypress', this._doKeyPress)
                .unbind('keyup', this._doKeyUp))
            : ('div' !== e && 'span' !== e) ||
              i.removeClass(this.markerClassName).empty());
      },
      _enableDatepicker: function (e) {
        var t,
          i,
          s = x(e),
          n = x.data(e, u);
        s.hasClass(this.markerClassName) &&
          ('input' === (t = e.nodeName.toLowerCase())
            ? ((e.disabled = !1),
              n.trigger
                .filter('button')
                .each(function () {
                  this.disabled = !1;
                })
                .end()
                .filter('img')
                .css({ opacity: '1.0', cursor: '' }))
            : ('div' !== t && 'span' !== t) ||
              ((i = s.children('.' + this._inlineClass))
                .children()
                .removeClass('ui-state-disabled'),
              i
                .find('select.ui-datepicker-month, select.ui-datepicker-year')
                .prop('disabled', !1)),
          (this._disabledInputs = x.map(this._disabledInputs, function (t) {
            return t === e ? null : t;
          })));
      },
      _disableDatepicker: function (e) {
        var t,
          i,
          s = x(e),
          n = x.data(e, u);
        s.hasClass(this.markerClassName) &&
          ('input' === (t = e.nodeName.toLowerCase())
            ? ((e.disabled = !0),
              n.trigger
                .filter('button')
                .each(function () {
                  this.disabled = !0;
                })
                .end()
                .filter('img')
                .css({ opacity: '0.5', cursor: 'default' }))
            : ('div' !== t && 'span' !== t) ||
              ((i = s.children('.' + this._inlineClass))
                .children()
                .addClass('ui-state-disabled'),
              i
                .find('select.ui-datepicker-month, select.ui-datepicker-year')
                .prop('disabled', !0)),
          (this._disabledInputs = x.map(this._disabledInputs, function (t) {
            return t === e ? null : t;
          })),
          (this._disabledInputs[this._disabledInputs.length] = e));
      },
      _isDisabledDatepicker: function (t) {
        if (!t) return !1;
        for (var e = 0; e < this._disabledInputs.length; e++)
          if (this._disabledInputs[e] === t) return !0;
        return !1;
      },
      _getInst: function (t) {
        try {
          return x.data(t, u);
        } catch (e) {
          throw 'Missing instance data for this datepicker';
        }
      },
      _optionDatepicker: function (t, e, i) {
        var s,
          n,
          o,
          a,
          r = this._getInst(t);
        if (2 === arguments.length && 'string' == typeof e)
          return 'defaults' === e
            ? x.extend({}, x.datepicker._defaults)
            : r
            ? 'all' === e
              ? x.extend({}, r.settings)
              : this._get(r, e)
            : null;
        (s = e || {}),
          'string' == typeof e && ((s = {})[e] = i),
          r &&
            (this._curInst === r && this._hideDatepicker(),
            (n = this._getDateDatepicker(t, !0)),
            (o = this._getMinMaxDate(r, 'min')),
            (a = this._getMinMaxDate(r, 'max')),
            d(r.settings, s),
            null !== o &&
              s.dateFormat !== h &&
              s.minDate === h &&
              (r.settings.minDate = this._formatDate(r, o)),
            null !== a &&
              s.dateFormat !== h &&
              s.maxDate === h &&
              (r.settings.maxDate = this._formatDate(r, a)),
            'disabled' in s &&
              (s.disabled
                ? this._disableDatepicker(t)
                : this._enableDatepicker(t)),
            this._attachments(x(t), r),
            this._autoSize(r),
            this._setDate(r, n),
            this._updateAlternate(r),
            this._updateDatepicker(r));
      },
      _changeDatepicker: function (t, e, i) {
        this._optionDatepicker(t, e, i);
      },
      _refreshDatepicker: function (t) {
        var e = this._getInst(t);
        e && this._updateDatepicker(e);
      },
      _setDateDatepicker: function (t, e) {
        var i = this._getInst(t);
        i &&
          (this._setDate(i, e),
          this._updateDatepicker(i),
          this._updateAlternate(i));
      },
      _getDateDatepicker: function (t, e) {
        var i = this._getInst(t);
        return (
          i && !i.inline && this._setDateFromField(i, e),
          i ? this._getDate(i) : null
        );
      },
      _doKeyDown: function (t) {
        var e,
          i,
          s,
          n = x.datepicker._getInst(t.target),
          o = !0,
          a = n.dpDiv.is('.ui-datepicker-rtl');
        if (((n._keyEvent = !0), x.datepicker._datepickerShowing))
          switch (t.keyCode) {
            case 9:
              x.datepicker._hideDatepicker(), (o = !1);
              break;
            case 13:
              return (
                (s = x(
                  'td.' +
                    x.datepicker._dayOverClass +
                    ':not(.' +
                    x.datepicker._currentClass +
                    ')',
                  n.dpDiv
                ))[0] &&
                  x.datepicker._selectDay(
                    t.target,
                    n.selectedMonth,
                    n.selectedYear,
                    s[0]
                  ),
                (e = x.datepicker._get(n, 'onSelect'))
                  ? ((i = x.datepicker._formatDate(n)),
                    e.apply(n.input ? n.input[0] : null, [i, n]))
                  : x.datepicker._hideDatepicker(),
                !1
              );
            case 27:
              x.datepicker._hideDatepicker();
              break;
            case 33:
              x.datepicker._adjustDate(
                t.target,
                t.ctrlKey
                  ? -x.datepicker._get(n, 'stepBigMonths')
                  : -x.datepicker._get(n, 'stepMonths'),
                'M'
              );
              break;
            case 34:
              x.datepicker._adjustDate(
                t.target,
                t.ctrlKey
                  ? +x.datepicker._get(n, 'stepBigMonths')
                  : +x.datepicker._get(n, 'stepMonths'),
                'M'
              );
              break;
            case 35:
              (t.ctrlKey || t.metaKey) && x.datepicker._clearDate(t.target),
                (o = t.ctrlKey || t.metaKey);
              break;
            case 36:
              (t.ctrlKey || t.metaKey) && x.datepicker._gotoToday(t.target),
                (o = t.ctrlKey || t.metaKey);
              break;
            case 37:
              (t.ctrlKey || t.metaKey) &&
                x.datepicker._adjustDate(t.target, a ? 1 : -1, 'D'),
                (o = t.ctrlKey || t.metaKey),
                t.originalEvent.altKey &&
                  x.datepicker._adjustDate(
                    t.target,
                    t.ctrlKey
                      ? -x.datepicker._get(n, 'stepBigMonths')
                      : -x.datepicker._get(n, 'stepMonths'),
                    'M'
                  );
              break;
            case 38:
              (t.ctrlKey || t.metaKey) &&
                x.datepicker._adjustDate(t.target, -7, 'D'),
                (o = t.ctrlKey || t.metaKey);
              break;
            case 39:
              (t.ctrlKey || t.metaKey) &&
                x.datepicker._adjustDate(t.target, a ? -1 : 1, 'D'),
                (o = t.ctrlKey || t.metaKey),
                t.originalEvent.altKey &&
                  x.datepicker._adjustDate(
                    t.target,
                    t.ctrlKey
                      ? +x.datepicker._get(n, 'stepBigMonths')
                      : +x.datepicker._get(n, 'stepMonths'),
                    'M'
                  );
              break;
            case 40:
              (t.ctrlKey || t.metaKey) &&
                x.datepicker._adjustDate(t.target, 7, 'D'),
                (o = t.ctrlKey || t.metaKey);
              break;
            default:
              o = !1;
          }
        else
          36 === t.keyCode && t.ctrlKey
            ? x.datepicker._showDatepicker(this)
            : (o = !1);
        o && (t.preventDefault(), t.stopPropagation());
      },
      _doKeyPress: function (t) {
        var e,
          i,
          s = x.datepicker._getInst(t.target);
        if (x.datepicker._get(s, 'constrainInput'))
          return (
            (e = x.datepicker._possibleChars(
              x.datepicker._get(s, 'dateFormat')
            )),
            (i = String.fromCharCode(
              null == t.charCode ? t.keyCode : t.charCode
            )),
            t.ctrlKey || t.metaKey || i < ' ' || !e || -1 < e.indexOf(i)
          );
      },
      _doKeyUp: function (t) {
        var e = x.datepicker._getInst(t.target);
        if (e.input.val() !== e.lastVal)
          try {
            x.datepicker.parseDate(
              x.datepicker._get(e, 'dateFormat'),
              e.input ? e.input.val() : null,
              x.datepicker._getFormatConfig(e)
            ) &&
              (x.datepicker._setDateFromField(e),
              x.datepicker._updateAlternate(e),
              x.datepicker._updateDatepicker(e));
          } catch (i) {}
        return !0;
      },
      _showDatepicker: function (t) {
        var e, i, s, n, o, a, r;
        ('input' !== (t = t.target || t).nodeName.toLowerCase() &&
          (t = x('input', t.parentNode)[0]),
        x.datepicker._isDisabledDatepicker(t) ||
          x.datepicker._lastInput === t) ||
          ((e = x.datepicker._getInst(t)),
          x.datepicker._curInst &&
            x.datepicker._curInst !== e &&
            (x.datepicker._curInst.dpDiv.stop(!0, !0),
            e &&
              x.datepicker._datepickerShowing &&
              x.datepicker._hideDatepicker(x.datepicker._curInst.input[0])),
          !1 !==
            (s = (i = x.datepicker._get(e, 'beforeShow'))
              ? i.apply(t, [t, e])
              : {}) &&
            (d(e.settings, s),
            (e.lastVal = null),
            (x.datepicker._lastInput = t),
            x.datepicker._setDateFromField(e),
            x.datepicker._inDialog && (t.value = ''),
            x.datepicker._pos ||
              ((x.datepicker._pos = x.datepicker._findPos(t)),
              (x.datepicker._pos[1] += t.offsetHeight)),
            (n = !1),
            x(t)
              .parents()
              .each(function () {
                return !(n |= 'fixed' === x(this).css('position'));
              }),
            (o = { left: x.datepicker._pos[0], top: x.datepicker._pos[1] }),
            (x.datepicker._pos = null),
            e.dpDiv.empty(),
            e.dpDiv.css({
              position: 'absolute',
              display: 'block',
              top: '-1000px',
            }),
            x.datepicker._updateDatepicker(e),
            (o = x.datepicker._checkOffset(e, o, n)),
            e.dpDiv.css({
              position:
                x.datepicker._inDialog && x.blockUI
                  ? 'static'
                  : n
                  ? 'fixed'
                  : 'absolute',
              display: 'none',
              left: o.left + 'px',
              top: o.top + 'px',
            }),
            e.inline ||
              ((a = x.datepicker._get(e, 'showAnim')),
              (r = x.datepicker._get(e, 'duration')),
              e.dpDiv.zIndex(x(t).zIndex() + 1),
              (x.datepicker._datepickerShowing = !0),
              x.effects && x.effects.effect[a]
                ? e.dpDiv.show(a, x.datepicker._get(e, 'showOptions'), r)
                : e.dpDiv[a || 'show'](a ? r : null),
              x.datepicker._shouldFocusInput(e) && e.input.focus(),
              (x.datepicker._curInst = e))));
      },
      _updateDatepicker: function (t) {
        (this.maxRows = 4),
          (n = t).dpDiv.empty().append(this._generateHTML(t)),
          this._attachHandlers(t),
          t.dpDiv.find('.' + this._dayOverClass + ' a').mouseover();
        var e,
          i = this._getNumberOfMonths(t),
          s = i[1];
        t.dpDiv
          .removeClass(
            'ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4'
          )
          .width(''),
          1 < s &&
            t.dpDiv
              .addClass('ui-datepicker-multi-' + s)
              .css('width', 17 * s + 'em'),
          t.dpDiv[(1 !== i[0] || 1 !== i[1] ? 'add' : 'remove') + 'Class'](
            'ui-datepicker-multi'
          ),
          t.dpDiv[(this._get(t, 'isRTL') ? 'add' : 'remove') + 'Class'](
            'ui-datepicker-rtl'
          ),
          t === x.datepicker._curInst &&
            x.datepicker._datepickerShowing &&
            x.datepicker._shouldFocusInput(t) &&
            t.input.focus(),
          t.yearshtml &&
            ((e = t.yearshtml),
            setTimeout(function () {
              e === t.yearshtml &&
                t.yearshtml &&
                t.dpDiv
                  .find('select.ui-datepicker-year:first')
                  .replaceWith(t.yearshtml),
                (e = t.yearshtml = null);
            }, 0));
      },
      _shouldFocusInput: function (t) {
        return (
          t.input &&
          t.input.is(':visible') &&
          !t.input.is(':disabled') &&
          !t.input.is(':focus')
        );
      },
      _checkOffset: function (t, e, i) {
        var s = t.dpDiv.outerWidth(),
          n = t.dpDiv.outerHeight(),
          o = t.input ? t.input.outerWidth() : 0,
          a = t.input ? t.input.outerHeight() : 0,
          r =
            document.documentElement.clientWidth +
            (i ? 0 : x(document).scrollLeft()),
          h =
            document.documentElement.clientHeight +
            (i ? 0 : x(document).scrollTop());
        return (
          (e.left -= this._get(t, 'isRTL') ? s - o : 0),
          (e.left -=
            i && e.left === t.input.offset().left
              ? x(document).scrollLeft()
              : 0),
          (e.top -=
            i && e.top === t.input.offset().top + a
              ? x(document).scrollTop()
              : 0),
          (e.left -= Math.min(
            e.left,
            e.left + s > r && s < r ? Math.abs(e.left + s - r) : 0
          )),
          (e.top -= Math.min(
            e.top,
            e.top + n > h && n < h ? Math.abs(n + a) : 0
          )),
          e
        );
      },
      _findPos: function (t) {
        for (
          var e, i = this._getInst(t), s = this._get(i, 'isRTL');
          t &&
          ('hidden' === t.type || 1 !== t.nodeType || x.expr.filters.hidden(t));

        )
          t = t[s ? 'previousSibling' : 'nextSibling'];
        return [(e = x(t).offset()).left, e.top];
      },
      _hideDatepicker: function (t) {
        var e,
          i,
          s,
          n,
          o = this._curInst;
        !o ||
          (t && o !== x.data(t, u)) ||
          (this._datepickerShowing &&
            ((e = this._get(o, 'showAnim')),
            (i = this._get(o, 'duration')),
            (s = function () {
              x.datepicker._tidyDialog(o);
            }),
            x.effects && (x.effects.effect[e] || x.effects[e])
              ? o.dpDiv.hide(e, x.datepicker._get(o, 'showOptions'), i, s)
              : o.dpDiv[
                  'slideDown' === e
                    ? 'slideUp'
                    : 'fadeIn' === e
                    ? 'fadeOut'
                    : 'hide'
                ](e ? i : null, s),
            e || s(),
            (this._datepickerShowing = !1),
            (n = this._get(o, 'onClose')) &&
              n.apply(o.input ? o.input[0] : null, [
                o.input ? o.input.val() : '',
                o,
              ]),
            (this._lastInput = null),
            this._inDialog &&
              (this._dialogInput.css({
                position: 'absolute',
                left: '0',
                top: '-100px',
              }),
              x.blockUI && (x.unblockUI(), x('body').append(this.dpDiv))),
            (this._inDialog = !1)));
      },
      _tidyDialog: function (t) {
        t.dpDiv
          .removeClass(this._dialogClass)
          .unbind('.ui-datepicker-calendar');
      },
      _checkExternalClick: function (t) {
        if (x.datepicker._curInst) {
          var e = x(t.target),
            i = x.datepicker._getInst(e[0]);
          ((e[0].id === x.datepicker._mainDivId ||
            0 !== e.parents('#' + x.datepicker._mainDivId).length ||
            e.hasClass(x.datepicker.markerClassName) ||
            e.closest('.' + x.datepicker._triggerClass).length ||
            !x.datepicker._datepickerShowing ||
            (x.datepicker._inDialog && x.blockUI)) &&
            (!e.hasClass(x.datepicker.markerClassName) ||
              x.datepicker._curInst === i)) ||
            x.datepicker._hideDatepicker();
        }
      },
      _adjustDate: function (t, e, i) {
        var s = x(t),
          n = this._getInst(s[0]);
        this._isDisabledDatepicker(s[0]) ||
          (this._adjustInstDate(
            n,
            e + ('M' === i ? this._get(n, 'showCurrentAtPos') : 0),
            i
          ),
          this._updateDatepicker(n));
      },
      _gotoToday: function (t) {
        var e,
          i = x(t),
          s = this._getInst(i[0]);
        this._get(s, 'gotoCurrent') && s.currentDay
          ? ((s.selectedDay = s.currentDay),
            (s.drawMonth = s.selectedMonth = s.currentMonth),
            (s.drawYear = s.selectedYear = s.currentYear))
          : ((e = new Date()),
            (s.selectedDay = e.getDate()),
            (s.drawMonth = s.selectedMonth = e.getMonth()),
            (s.drawYear = s.selectedYear = e.getFullYear())),
          this._notifyChange(s),
          this._adjustDate(i);
      },
      _selectMonthYear: function (t, e, i) {
        var s = x(t),
          n = this._getInst(s[0]);
        (n['selected' + ('M' === i ? 'Month' : 'Year')] = n[
          'draw' + ('M' === i ? 'Month' : 'Year')
        ] =
          parseInt(e.options[e.selectedIndex].value, 10)),
          this._notifyChange(n),
          this._adjustDate(s);
      },
      _selectDay: function (t, e, i, s) {
        var n,
          o = x(t);
        x(s).hasClass(this._unselectableClass) ||
          this._isDisabledDatepicker(o[0]) ||
          (((n = this._getInst(o[0])).selectedDay = n.currentDay =
            x('a', s).html()),
          (n.selectedMonth = n.currentMonth = e),
          (n.selectedYear = n.currentYear = i),
          this._selectDate(
            t,
            this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)
          ));
      },
      _clearDate: function (t) {
        var e = x(t);
        this._selectDate(e, '');
      },
      _selectDate: function (t, e) {
        var i,
          s = x(t),
          n = this._getInst(s[0]);
        (e = null != e ? e : this._formatDate(n)),
          n.input && n.input.val(e),
          this._updateAlternate(n),
          (i = this._get(n, 'onSelect'))
            ? i.apply(n.input ? n.input[0] : null, [e, n])
            : n.input && n.input.trigger('change'),
          n.inline
            ? this._updateDatepicker(n)
            : (this._hideDatepicker(),
              (this._lastInput = n.input[0]),
              'object' != typeof n.input[0] && n.input.focus(),
              (this._lastInput = null));
      },
      _updateAlternate: function (t) {
        var e,
          i,
          s,
          n = this._get(t, 'altField');
        n &&
          ((e = this._get(t, 'altFormat') || this._get(t, 'dateFormat')),
          (i = this._getDate(t)),
          (s = this.formatDate(e, i, this._getFormatConfig(t))),
          x(n).each(function () {
            x(this).val(s);
          }));
      },
      noWeekends: function (t) {
        var e = t.getDay();
        return [0 < e && e < 6, ''];
      },
      iso8601Week: function (t) {
        var e,
          i = new Date(t.getTime());
        return (
          i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
          (e = i.getTime()),
          i.setMonth(0),
          i.setDate(1),
          Math.floor(Math.round((e - i) / 864e5) / 7) + 1
        );
      },
      parseDate: function (i, o, t) {
        if (null == i || null == o) throw 'Invalid arguments';
        if ('' === (o = 'object' == typeof o ? o.toString() : o + ''))
          return null;
        var s,
          e,
          n,
          a,
          r = 0,
          h = (t ? t.shortYearCutoff : null) || this._defaults.shortYearCutoff,
          l =
            'string' != typeof h
              ? h
              : (new Date().getFullYear() % 100) + parseInt(h, 10),
          c = (t ? t.dayNamesShort : null) || this._defaults.dayNamesShort,
          u = (t ? t.dayNames : null) || this._defaults.dayNames,
          d = (t ? t.monthNamesShort : null) || this._defaults.monthNamesShort,
          p = (t ? t.monthNames : null) || this._defaults.monthNames,
          f = -1,
          g = -1,
          m = -1,
          v = -1,
          _ = !1,
          b = function (t) {
            var e = s + 1 < i.length && i.charAt(s + 1) === t;
            return e && s++, e;
          },
          y = function (t) {
            var e = b(t),
              i = new RegExp(
                '^\\d{1,' +
                  ('@' === t
                    ? 14
                    : '!' === t
                    ? 20
                    : 'y' === t && e
                    ? 4
                    : 'o' === t
                    ? 3
                    : 2) +
                  '}'
              ),
              s = o.substring(r).match(i);
            if (!s) throw 'Missing number at position ' + r;
            return (r += s[0].length), parseInt(s[0], 10);
          },
          w = function (t, e, i) {
            var s = -1,
              n = x
                .map(b(t) ? i : e, function (t, e) {
                  return [[e, t]];
                })
                .sort(function (t, e) {
                  return -(t[1].length - e[1].length);
                });
            if (
              (x.each(n, function (t, e) {
                var i = e[1];
                if (o.substr(r, i.length).toLowerCase() === i.toLowerCase())
                  return (s = e[0]), (r += i.length), !1;
              }),
              -1 !== s)
            )
              return s + 1;
            throw 'Unknown name at position ' + r;
          },
          k = function () {
            if (o.charAt(r) !== i.charAt(s))
              throw 'Unexpected literal at position ' + r;
            r++;
          };
        for (s = 0; s < i.length; s++)
          if (_) "'" !== i.charAt(s) || b("'") ? k() : (_ = !1);
          else
            switch (i.charAt(s)) {
              case 'd':
                m = y('d');
                break;
              case 'D':
                w('D', c, u);
                break;
              case 'o':
                v = y('o');
                break;
              case 'm':
                g = y('m');
                break;
              case 'M':
                g = w('M', d, p);
                break;
              case 'y':
                f = y('y');
                break;
              case '@':
                (f = (a = new Date(y('@'))).getFullYear()),
                  (g = a.getMonth() + 1),
                  (m = a.getDate());
                break;
              case '!':
                (f = (a = new Date(
                  (y('!') - this._ticksTo1970) / 1e4
                )).getFullYear()),
                  (g = a.getMonth() + 1),
                  (m = a.getDate());
                break;
              case "'":
                b("'") ? k() : (_ = !0);
                break;
              default:
                k();
            }
        if (r < o.length && ((n = o.substr(r)), !/^\s+/.test(n)))
          throw 'Extra/unparsed characters found in date: ' + n;
        if (
          (-1 === f
            ? (f = new Date().getFullYear())
            : f < 100 &&
              (f +=
                new Date().getFullYear() -
                (new Date().getFullYear() % 100) +
                (f <= l ? 0 : -100)),
          -1 < v)
        )
          for (g = 1, m = v; ; ) {
            if (m <= (e = this._getDaysInMonth(f, g - 1))) break;
            g++, (m -= e);
          }
        if (
          (a = this._daylightSavingAdjust(
            new Date(f, g - 1, m)
          )).getFullYear() !== f ||
          a.getMonth() + 1 !== g ||
          a.getDate() !== m
        )
          throw 'Invalid date';
        return a;
      },
      ATOM: 'yy-mm-dd',
      COOKIE: 'D, dd M yy',
      ISO_8601: 'yy-mm-dd',
      RFC_822: 'D, d M y',
      RFC_850: 'DD, dd-M-y',
      RFC_1036: 'D, d M y',
      RFC_1123: 'D, d M yy',
      RFC_2822: 'D, d M yy',
      RSS: 'D, d M y',
      TICKS: '!',
      TIMESTAMP: '@',
      W3C: 'yy-mm-dd',
      _ticksTo1970:
        24 *
        (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) *
        60 *
        60 *
        1e7,
      formatDate: function (i, t, e) {
        if (!t) return '';
        var s,
          n = (e ? e.dayNamesShort : null) || this._defaults.dayNamesShort,
          o = (e ? e.dayNames : null) || this._defaults.dayNames,
          a = (e ? e.monthNamesShort : null) || this._defaults.monthNamesShort,
          r = (e ? e.monthNames : null) || this._defaults.monthNames,
          h = function (t) {
            var e = s + 1 < i.length && i.charAt(s + 1) === t;
            return e && s++, e;
          },
          l = function (t, e, i) {
            var s = '' + e;
            if (h(t)) for (; s.length < i; ) s = '0' + s;
            return s;
          },
          c = function (t, e, i, s) {
            return h(t) ? s[e] : i[e];
          },
          u = '',
          d = !1;
        if (t)
          for (s = 0; s < i.length; s++)
            if (d)
              "'" !== i.charAt(s) || h("'") ? (u += i.charAt(s)) : (d = !1);
            else
              switch (i.charAt(s)) {
                case 'd':
                  u += l('d', t.getDate(), 2);
                  break;
                case 'D':
                  u += c('D', t.getDay(), n, o);
                  break;
                case 'o':
                  u += l(
                    'o',
                    Math.round(
                      (new Date(
                        t.getFullYear(),
                        t.getMonth(),
                        t.getDate()
                      ).getTime() -
                        new Date(t.getFullYear(), 0, 0).getTime()) /
                        864e5
                    ),
                    3
                  );
                  break;
                case 'm':
                  u += l('m', t.getMonth() + 1, 2);
                  break;
                case 'M':
                  u += c('M', t.getMonth(), a, r);
                  break;
                case 'y':
                  u += h('y')
                    ? t.getFullYear()
                    : (t.getYear() % 100 < 10 ? '0' : '') + (t.getYear() % 100);
                  break;
                case '@':
                  u += t.getTime();
                  break;
                case '!':
                  u += 1e4 * t.getTime() + this._ticksTo1970;
                  break;
                case "'":
                  h("'") ? (u += "'") : (d = !0);
                  break;
                default:
                  u += i.charAt(s);
              }
        return u;
      },
      _possibleChars: function (i) {
        var s,
          t = '',
          e = !1,
          n = function (t) {
            var e = s + 1 < i.length && i.charAt(s + 1) === t;
            return e && s++, e;
          };
        for (s = 0; s < i.length; s++)
          if (e) "'" !== i.charAt(s) || n("'") ? (t += i.charAt(s)) : (e = !1);
          else
            switch (i.charAt(s)) {
              case 'd':
              case 'm':
              case 'y':
              case '@':
                t += '0123456789';
                break;
              case 'D':
              case 'M':
                return null;
              case "'":
                n("'") ? (t += "'") : (e = !0);
                break;
              default:
                t += i.charAt(s);
            }
        return t;
      },
      _get: function (t, e) {
        return t.settings[e] !== h ? t.settings[e] : this._defaults[e];
      },
      _setDateFromField: function (t, e) {
        if (t.input.val() !== t.lastVal) {
          var i = this._get(t, 'dateFormat'),
            s = (t.lastVal = t.input ? t.input.val() : null),
            n = this._getDefaultDate(t),
            o = n,
            a = this._getFormatConfig(t);
          try {
            o = this.parseDate(i, s, a) || n;
          } catch (r) {
            s = e ? '' : s;
          }
          (t.selectedDay = o.getDate()),
            (t.drawMonth = t.selectedMonth = o.getMonth()),
            (t.drawYear = t.selectedYear = o.getFullYear()),
            (t.currentDay = s ? o.getDate() : 0),
            (t.currentMonth = s ? o.getMonth() : 0),
            (t.currentYear = s ? o.getFullYear() : 0),
            this._adjustInstDate(t);
        }
      },
      _getDefaultDate: function (t) {
        return this._restrictMinMax(
          t,
          this._determineDate(t, this._get(t, 'defaultDate'), new Date())
        );
      },
      _determineDate: function (h, t, e) {
        var i,
          s,
          n =
            null == t || '' === t
              ? e
              : 'string' == typeof t
              ? (function (t) {
                  try {
                    return x.datepicker.parseDate(
                      x.datepicker._get(h, 'dateFormat'),
                      t,
                      x.datepicker._getFormatConfig(h)
                    );
                  } catch (r) {}
                  for (
                    var e =
                        (t.toLowerCase().match(/^c/)
                          ? x.datepicker._getDate(h)
                          : null) || new Date(),
                      i = e.getFullYear(),
                      s = e.getMonth(),
                      n = e.getDate(),
                      o = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                      a = o.exec(t);
                    a;

                  ) {
                    switch (a[2] || 'd') {
                      case 'd':
                      case 'D':
                        n += parseInt(a[1], 10);
                        break;
                      case 'w':
                      case 'W':
                        n += 7 * parseInt(a[1], 10);
                        break;
                      case 'm':
                      case 'M':
                        (s += parseInt(a[1], 10)),
                          (n = Math.min(n, x.datepicker._getDaysInMonth(i, s)));
                        break;
                      case 'y':
                      case 'Y':
                        (i += parseInt(a[1], 10)),
                          (n = Math.min(n, x.datepicker._getDaysInMonth(i, s)));
                    }
                    a = o.exec(t);
                  }
                  return new Date(i, s, n);
                })(t)
              : 'number' == typeof t
              ? isNaN(t)
                ? e
                : ((i = t), (s = new Date()).setDate(s.getDate() + i), s)
              : new Date(t.getTime());
        return (
          (n = n && 'Invalid Date' === n.toString() ? e : n) &&
            (n.setHours(0),
            n.setMinutes(0),
            n.setSeconds(0),
            n.setMilliseconds(0)),
          this._daylightSavingAdjust(n)
        );
      },
      _daylightSavingAdjust: function (t) {
        return t
          ? (t.setHours(12 < t.getHours() ? t.getHours() + 2 : 0), t)
          : null;
      },
      _setDate: function (t, e, i) {
        var s = !e,
          n = t.selectedMonth,
          o = t.selectedYear,
          a = this._restrictMinMax(t, this._determineDate(t, e, new Date()));
        (t.selectedDay = t.currentDay = a.getDate()),
          (t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth()),
          (t.drawYear = t.selectedYear = t.currentYear = a.getFullYear()),
          (n === t.selectedMonth && o === t.selectedYear) ||
            i ||
            this._notifyChange(t),
          this._adjustInstDate(t),
          t.input && t.input.val(s ? '' : this._formatDate(t));
      },
      _getDate: function (t) {
        return !t.currentYear || (t.input && '' === t.input.val())
          ? null
          : this._daylightSavingAdjust(
              new Date(t.currentYear, t.currentMonth, t.currentDay)
            );
      },
      _attachHandlers: function (t) {
        var e = this._get(t, 'stepMonths'),
          i = '#' + t.id.replace(/\\\\/g, '\\');
        t.dpDiv.find('[data-handler]').map(function () {
          var t = {
            prev: function () {
              x.datepicker._adjustDate(i, -e, 'M');
            },
            next: function () {
              x.datepicker._adjustDate(i, +e, 'M');
            },
            hide: function () {
              x.datepicker._hideDatepicker();
            },
            today: function () {
              x.datepicker._gotoToday(i);
            },
            selectDay: function () {
              return (
                x.datepicker._selectDay(
                  i,
                  +this.getAttribute('data-month'),
                  +this.getAttribute('data-year'),
                  this
                ),
                !1
              );
            },
            selectMonth: function () {
              return x.datepicker._selectMonthYear(i, this, 'M'), !1;
            },
            selectYear: function () {
              return x.datepicker._selectMonthYear(i, this, 'Y'), !1;
            },
          };
          x(this).bind(
            this.getAttribute('data-event'),
            t[this.getAttribute('data-handler')]
          );
        });
      },
      _generateHTML: function (t) {
        var e,
          i,
          s,
          n,
          o,
          a,
          r,
          h,
          l,
          c,
          u,
          d,
          p,
          f,
          g,
          m,
          v,
          _,
          b,
          y,
          w,
          k,
          x,
          D,
          C,
          I,
          P,
          T,
          M,
          S,
          z,
          A,
          H,
          W,
          E,
          N,
          O,
          F,
          R,
          L = new Date(),
          j = this._daylightSavingAdjust(
            new Date(L.getFullYear(), L.getMonth(), L.getDate())
          ),
          Y = this._get(t, 'isRTL'),
          B = this._get(t, 'showButtonPanel'),
          K = this._get(t, 'hideIfNoPrevNext'),
          U = this._get(t, 'navigationAsDateFormat'),
          q = this._getNumberOfMonths(t),
          V = this._get(t, 'showCurrentAtPos'),
          Q = this._get(t, 'stepMonths'),
          X = 1 !== q[0] || 1 !== q[1],
          $ = this._daylightSavingAdjust(
            t.currentDay
              ? new Date(t.currentYear, t.currentMonth, t.currentDay)
              : new Date(9999, 9, 9)
          ),
          G = this._getMinMaxDate(t, 'min'),
          J = this._getMinMaxDate(t, 'max'),
          Z = t.drawMonth - V,
          tt = t.drawYear;
        if ((Z < 0 && ((Z += 12), tt--), J))
          for (
            e = this._daylightSavingAdjust(
              new Date(
                J.getFullYear(),
                J.getMonth() - q[0] * q[1] + 1,
                J.getDate()
              )
            ),
              e = G && e < G ? G : e;
            this._daylightSavingAdjust(new Date(tt, Z, 1)) > e;

          )
            --Z < 0 && ((Z = 11), tt--);
        for (
          t.drawMonth = Z,
            t.drawYear = tt,
            i = this._get(t, 'prevText'),
            i = U
              ? this.formatDate(
                  i,
                  this._daylightSavingAdjust(new Date(tt, Z - Q, 1)),
                  this._getFormatConfig(t)
                )
              : i,
            s = this._canAdjustMonth(t, -1, tt, Z)
              ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
                i +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (Y ? 'e' : 'w') +
                "'>" +
                i +
                '</span></a>'
              : K
              ? ''
              : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" +
                i +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (Y ? 'e' : 'w') +
                "'>" +
                i +
                '</span></a>',
            n = this._get(t, 'nextText'),
            n = U
              ? this.formatDate(
                  n,
                  this._daylightSavingAdjust(new Date(tt, Z + Q, 1)),
                  this._getFormatConfig(t)
                )
              : n,
            o = this._canAdjustMonth(t, 1, tt, Z)
              ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" +
                n +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (Y ? 'w' : 'e') +
                "'>" +
                n +
                '</span></a>'
              : K
              ? ''
              : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" +
                n +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (Y ? 'w' : 'e') +
                "'>" +
                n +
                '</span></a>',
            a = this._get(t, 'currentText'),
            r = this._get(t, 'gotoCurrent') && t.currentDay ? $ : j,
            a = U ? this.formatDate(a, r, this._getFormatConfig(t)) : a,
            h = t.inline
              ? ''
              : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
                this._get(t, 'closeText') +
                '</button>',
            l = B
              ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
                (Y ? h : '') +
                (this._isInRange(t, r)
                  ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
                    a +
                    '</button>'
                  : '') +
                (Y ? '' : h) +
                '</div>'
              : '',
            c = parseInt(this._get(t, 'firstDay'), 10),
            c = isNaN(c) ? 0 : c,
            u = this._get(t, 'showWeek'),
            d = this._get(t, 'dayNames'),
            p = this._get(t, 'dayNamesMin'),
            f = this._get(t, 'monthNames'),
            g = this._get(t, 'monthNamesShort'),
            m = this._get(t, 'beforeShowDay'),
            v = this._get(t, 'showOtherMonths'),
            _ = this._get(t, 'selectOtherMonths'),
            b = this._getDefaultDate(t),
            y = '',
            k = 0;
          k < q[0];
          k++
        ) {
          for (x = '', this.maxRows = 4, D = 0; D < q[1]; D++) {
            if (
              ((C = this._daylightSavingAdjust(new Date(tt, Z, t.selectedDay))),
              (I = ' ui-corner-all'),
              (P = ''),
              X)
            ) {
              if (((P += "<div class='ui-datepicker-group"), 1 < q[1]))
                switch (D) {
                  case 0:
                    (P += ' ui-datepicker-group-first'),
                      (I = ' ui-corner-' + (Y ? 'right' : 'left'));
                    break;
                  case q[1] - 1:
                    (P += ' ui-datepicker-group-last'),
                      (I = ' ui-corner-' + (Y ? 'left' : 'right'));
                    break;
                  default:
                    (P += ' ui-datepicker-group-middle'), (I = '');
                }
              P += "'>";
            }
            for (
              P +=
                "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
                I +
                "'>" +
                (/all|left/.test(I) && 0 === k ? (Y ? o : s) : '') +
                (/all|right/.test(I) && 0 === k ? (Y ? s : o) : '') +
                this._generateMonthYearHeader(
                  t,
                  Z,
                  tt,
                  G,
                  J,
                  0 < k || 0 < D,
                  f,
                  g
                ) +
                "</div><table class='ui-datepicker-calendar'><thead><tr>",
                T = u
                  ? "<th class='ui-datepicker-week-col'>" +
                    this._get(t, 'weekHeader') +
                    '</th>'
                  : '',
                w = 0;
              w < 7;
              w++
            )
              T +=
                '<th' +
                (5 <= (w + c + 6) % 7
                  ? " class='ui-datepicker-week-end'"
                  : '') +
                "><span title='" +
                d[(M = (w + c) % 7)] +
                "'>" +
                p[M] +
                '</span></th>';
            for (
              P += T + '</tr></thead><tbody>',
                S = this._getDaysInMonth(tt, Z),
                tt === t.selectedYear &&
                  Z === t.selectedMonth &&
                  (t.selectedDay = Math.min(t.selectedDay, S)),
                z = (this._getFirstDayOfMonth(tt, Z) - c + 7) % 7,
                A = Math.ceil((z + S) / 7),
                H = X && this.maxRows > A ? this.maxRows : A,
                this.maxRows = H,
                W = this._daylightSavingAdjust(new Date(tt, Z, 1 - z)),
                E = 0;
              E < H;
              E++
            ) {
              for (
                P += '<tr>',
                  N = u
                    ? "<td class='ui-datepicker-week-col'>" +
                      this._get(t, 'calculateWeek')(W) +
                      '</td>'
                    : '',
                  w = 0;
                w < 7;
                w++
              )
                (O = m ? m.apply(t.input ? t.input[0] : null, [W]) : [!0, '']),
                  (R =
                    ((F = W.getMonth() !== Z) && !_) ||
                    !O[0] ||
                    (G && W < G) ||
                    (J && J < W)),
                  (N +=
                    "<td class='" +
                    (5 <= (w + c + 6) % 7 ? ' ui-datepicker-week-end' : '') +
                    (F ? ' ui-datepicker-other-month' : '') +
                    ((W.getTime() === C.getTime() &&
                      Z === t.selectedMonth &&
                      t._keyEvent) ||
                    (b.getTime() === W.getTime() && b.getTime() === C.getTime())
                      ? ' ' + this._dayOverClass
                      : '') +
                    (R
                      ? ' ' + this._unselectableClass + ' ui-state-disabled'
                      : '') +
                    (F && !v
                      ? ''
                      : ' ' +
                        O[1] +
                        (W.getTime() === $.getTime()
                          ? ' ' + this._currentClass
                          : '') +
                        (W.getTime() === j.getTime()
                          ? ' ui-datepicker-today'
                          : '')) +
                    "'" +
                    ((F && !v) || !O[2]
                      ? ''
                      : " title='" + O[2].replace(/'/g, '&#39;') + "'") +
                    (R
                      ? ''
                      : " data-handler='selectDay' data-event='click' data-month='" +
                        W.getMonth() +
                        "' data-year='" +
                        W.getFullYear() +
                        "'") +
                    '>' +
                    (F && !v
                      ? '&#xa0;'
                      : R
                      ? "<span class='ui-state-default'>" +
                        W.getDate() +
                        '</span>'
                      : "<a class='ui-state-default" +
                        (W.getTime() === j.getTime()
                          ? ' ui-state-highlight'
                          : '') +
                        (W.getTime() === $.getTime()
                          ? ' ui-state-active'
                          : '') +
                        (F ? ' ui-priority-secondary' : '') +
                        "' href='#'>" +
                        W.getDate() +
                        '</a>') +
                    '</td>'),
                  W.setDate(W.getDate() + 1),
                  (W = this._daylightSavingAdjust(W));
              P += N + '</tr>';
            }
            11 < ++Z && ((Z = 0), tt++),
              (x += P +=
                '</tbody></table>' +
                (X
                  ? '</div>' +
                    (0 < q[0] && D === q[1] - 1
                      ? "<div class='ui-datepicker-row-break'></div>"
                      : '')
                  : ''));
          }
          y += x;
        }
        return (y += l), (t._keyEvent = !1), y;
      },
      _generateMonthYearHeader: function (t, e, i, s, n, o, a, r) {
        var h,
          l,
          c,
          u,
          d,
          p,
          f,
          g,
          m = this._get(t, 'changeMonth'),
          v = this._get(t, 'changeYear'),
          _ = this._get(t, 'showMonthAfterYear'),
          b = "<div class='ui-datepicker-title'>",
          y = '';
        if (o || !m)
          y += "<span class='ui-datepicker-month'>" + a[e] + '</span>';
        else {
          for (
            h = s && s.getFullYear() === i,
              l = n && n.getFullYear() === i,
              y +=
                "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
              c = 0;
            c < 12;
            c++
          )
            (!h || c >= s.getMonth()) &&
              (!l || c <= n.getMonth()) &&
              (y +=
                "<option value='" +
                c +
                "'" +
                (c === e ? " selected='selected'" : '') +
                '>' +
                r[c] +
                '</option>');
          y += '</select>';
        }
        if ((_ || (b += y + (!o && m && v ? '' : '&#xa0;')), !t.yearshtml))
          if (((t.yearshtml = ''), o || !v))
            b += "<span class='ui-datepicker-year'>" + i + '</span>';
          else {
            for (
              u = this._get(t, 'yearRange').split(':'),
                d = new Date().getFullYear(),
                f = (p = function (t) {
                  var e = t.match(/c[+\-].*/)
                    ? i + parseInt(t.substring(1), 10)
                    : t.match(/[+\-].*/)
                    ? d + parseInt(t, 10)
                    : parseInt(t, 10);
                  return isNaN(e) ? d : e;
                })(u[0]),
                g = Math.max(f, p(u[1] || '')),
                f = s ? Math.max(f, s.getFullYear()) : f,
                g = n ? Math.min(g, n.getFullYear()) : g,
                t.yearshtml +=
                  "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
              f <= g;
              f++
            )
              t.yearshtml +=
                "<option value='" +
                f +
                "'" +
                (f === i ? " selected='selected'" : '') +
                '>' +
                f +
                '</option>';
            (t.yearshtml += '</select>'),
              (b += t.yearshtml),
              (t.yearshtml = null);
          }
        return (
          (b += this._get(t, 'yearSuffix')),
          _ && (b += (!o && m && v ? '' : '&#xa0;') + y),
          (b += '</div>')
        );
      },
      _adjustInstDate: function (t, e, i) {
        var s = t.drawYear + ('Y' === i ? e : 0),
          n = t.drawMonth + ('M' === i ? e : 0),
          o =
            Math.min(t.selectedDay, this._getDaysInMonth(s, n)) +
            ('D' === i ? e : 0),
          a = this._restrictMinMax(
            t,
            this._daylightSavingAdjust(new Date(s, n, o))
          );
        (t.selectedDay = a.getDate()),
          (t.drawMonth = t.selectedMonth = a.getMonth()),
          (t.drawYear = t.selectedYear = a.getFullYear()),
          ('M' !== i && 'Y' !== i) || this._notifyChange(t);
      },
      _restrictMinMax: function (t, e) {
        var i = this._getMinMaxDate(t, 'min'),
          s = this._getMinMaxDate(t, 'max'),
          n = i && e < i ? i : e;
        return s && s < n ? s : n;
      },
      _notifyChange: function (t) {
        var e = this._get(t, 'onChangeMonthYear');
        e &&
          e.apply(t.input ? t.input[0] : null, [
            t.selectedYear,
            t.selectedMonth + 1,
            t,
          ]);
      },
      _getNumberOfMonths: function (t) {
        var e = this._get(t, 'numberOfMonths');
        return null == e ? [1, 1] : 'number' == typeof e ? [1, e] : e;
      },
      _getMinMaxDate: function (t, e) {
        return this._determineDate(t, this._get(t, e + 'Date'), null);
      },
      _getDaysInMonth: function (t, e) {
        return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
      },
      _getFirstDayOfMonth: function (t, e) {
        return new Date(t, e, 1).getDay();
      },
      _canAdjustMonth: function (t, e, i, s) {
        var n = this._getNumberOfMonths(t),
          o = this._daylightSavingAdjust(
            new Date(i, s + (e < 0 ? e : n[0] * n[1]), 1)
          );
        return (
          e < 0 &&
            o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())),
          this._isInRange(t, o)
        );
      },
      _isInRange: function (t, e) {
        var i,
          s,
          n = this._getMinMaxDate(t, 'min'),
          o = this._getMinMaxDate(t, 'max'),
          a = null,
          r = null,
          h = this._get(t, 'yearRange');
        return (
          h &&
            ((i = h.split(':')),
            (s = new Date().getFullYear()),
            (a = parseInt(i[0], 10)),
            (r = parseInt(i[1], 10)),
            i[0].match(/[+\-].*/) && (a += s),
            i[1].match(/[+\-].*/) && (r += s)),
          (!n || e.getTime() >= n.getTime()) &&
            (!o || e.getTime() <= o.getTime()) &&
            (!a || e.getFullYear() >= a) &&
            (!r || e.getFullYear() <= r)
        );
      },
      _getFormatConfig: function (t) {
        var e = this._get(t, 'shortYearCutoff');
        return {
          shortYearCutoff: (e =
            'string' != typeof e
              ? e
              : (new Date().getFullYear() % 100) + parseInt(e, 10)),
          dayNamesShort: this._get(t, 'dayNamesShort'),
          dayNames: this._get(t, 'dayNames'),
          monthNamesShort: this._get(t, 'monthNamesShort'),
          monthNames: this._get(t, 'monthNames'),
        };
      },
      _formatDate: function (t, e, i, s) {
        e ||
          ((t.currentDay = t.selectedDay),
          (t.currentMonth = t.selectedMonth),
          (t.currentYear = t.selectedYear));
        var n = e
          ? 'object' == typeof e
            ? e
            : this._daylightSavingAdjust(new Date(s, i, e))
          : this._daylightSavingAdjust(
              new Date(t.currentYear, t.currentMonth, t.currentDay)
            );
        return this.formatDate(
          this._get(t, 'dateFormat'),
          n,
          this._getFormatConfig(t)
        );
      },
    }),
      (x.fn.datepicker = function (t) {
        if (!this.length) return this;
        x.datepicker.initialized ||
          (x(document).mousedown(x.datepicker._checkExternalClick),
          (x.datepicker.initialized = !0)),
          0 === x('#' + x.datepicker._mainDivId).length &&
            x('body').append(x.datepicker.dpDiv);
        var e = Array.prototype.slice.call(arguments, 1);
        return 'string' != typeof t ||
          ('isDisabled' !== t && 'getDate' !== t && 'widget' !== t)
          ? 'option' === t &&
            2 === arguments.length &&
            'string' == typeof arguments[1]
            ? x.datepicker['_' + t + 'Datepicker'].apply(
                x.datepicker,
                [this[0]].concat(e)
              )
            : this.each(function () {
                'string' == typeof t
                  ? x.datepicker['_' + t + 'Datepicker'].apply(
                      x.datepicker,
                      [this].concat(e)
                    )
                  : x.datepicker._attachDatepicker(this, t);
              })
          : x.datepicker['_' + t + 'Datepicker'].apply(
              x.datepicker,
              [this[0]].concat(e)
            );
      }),
      (x.datepicker = new t()),
      (x.datepicker.initialized = !1),
      (x.datepicker.uuid = new Date().getTime()),
      (x.datepicker.version = '1.10.3');
  })(jQuery),
  (function (a, t) {
    var o = {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0,
      },
      r = { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 };
    a.widget('ui.dialog', {
      version: '1.10.3',
      options: {
        appendTo: 'body',
        autoOpen: !0,
        buttons: [],
        closeOnEscape: !0,
        closeText: 'close',
        dialogClass: '',
        draggable: !0,
        hide: null,
        height: 'auto',
        maxHeight: null,
        maxWidth: null,
        minHeight: 150,
        minWidth: 150,
        modal: !1,
        position: {
          my: 'center',
          at: 'center',
          of: window,
          collision: 'fit',
          using: function (t) {
            var e = a(this).css(t).offset().top;
            e < 0 && a(this).css('top', t.top - e);
          },
        },
        resizable: !0,
        show: null,
        title: null,
        width: 300,
        beforeClose: null,
        close: null,
        drag: null,
        dragStart: null,
        dragStop: null,
        focus: null,
        open: null,
        resize: null,
        resizeStart: null,
        resizeStop: null,
      },
      _create: function () {
        (this.originalCss = {
          display: this.element[0].style.display,
          width: this.element[0].style.width,
          minHeight: this.element[0].style.minHeight,
          maxHeight: this.element[0].style.maxHeight,
          height: this.element[0].style.height,
        }),
          (this.originalPosition = {
            parent: this.element.parent(),
            index: this.element.parent().children().index(this.element),
          }),
          (this.originalTitle = this.element.attr('title')),
          (this.options.title = this.options.title || this.originalTitle),
          this._createWrapper(),
          this.element
            .show()
            .removeAttr('title')
            .addClass('ui-dialog-content ui-widget-content')
            .appendTo(this.uiDialog),
          this._createTitlebar(),
          this._createButtonPane(),
          this.options.draggable && a.fn.draggable && this._makeDraggable(),
          this.options.resizable && a.fn.resizable && this._makeResizable(),
          (this._isOpen = !1);
      },
      _init: function () {
        this.options.autoOpen && this.open();
      },
      _appendTo: function () {
        var t = this.options.appendTo;
        return t && (t.jquery || t.nodeType)
          ? a(t)
          : this.document.find(t || 'body').eq(0);
      },
      _destroy: function () {
        var t,
          e = this.originalPosition;
        this._destroyOverlay(),
          this.element
            .removeUniqueId()
            .removeClass('ui-dialog-content ui-widget-content')
            .css(this.originalCss)
            .detach(),
          this.uiDialog.stop(!0, !0).remove(),
          this.originalTitle && this.element.attr('title', this.originalTitle),
          (t = e.parent.children().eq(e.index)).length &&
          t[0] !== this.element[0]
            ? t.before(this.element)
            : e.parent.append(this.element);
      },
      widget: function () {
        return this.uiDialog;
      },
      disable: a.noop,
      enable: a.noop,
      close: function (t) {
        var e = this;
        this._isOpen &&
          !1 !== this._trigger('beforeClose', t) &&
          ((this._isOpen = !1),
          this._destroyOverlay(),
          this.opener.filter(':focusable').focus().length ||
            a(this.document[0].activeElement).blur(),
          this._hide(this.uiDialog, this.options.hide, function () {
            e._trigger('close', t);
          }));
      },
      isOpen: function () {
        return this._isOpen;
      },
      moveToTop: function () {
        this._moveToTop();
      },
      _moveToTop: function (t, e) {
        var i = !!this.uiDialog.nextAll(':visible').insertBefore(this.uiDialog)
          .length;
        return i && !e && this._trigger('focus', t), i;
      },
      open: function () {
        var t = this;
        this._isOpen
          ? this._moveToTop() && this._focusTabbable()
          : ((this._isOpen = !0),
            (this.opener = a(this.document[0].activeElement)),
            this._size(),
            this._position(),
            this._createOverlay(),
            this._moveToTop(null, !0),
            this._show(this.uiDialog, this.options.show, function () {
              t._focusTabbable(), t._trigger('focus');
            }),
            this._trigger('open'));
      },
      _focusTabbable: function () {
        var t = this.element.find('[autofocus]');
        t.length || (t = this.element.find(':tabbable')),
          t.length || (t = this.uiDialogButtonPane.find(':tabbable')),
          t.length || (t = this.uiDialogTitlebarClose.filter(':tabbable')),
          t.length || (t = this.uiDialog),
          t.eq(0).focus();
      },
      _keepFocus: function (t) {
        function e() {
          var t = this.document[0].activeElement;
          this.uiDialog[0] === t ||
            a.contains(this.uiDialog[0], t) ||
            this._focusTabbable();
        }
        t.preventDefault(), e.call(this), this._delay(e);
      },
      _createWrapper: function () {
        (this.uiDialog = a('<div>')
          .addClass(
            'ui-dialog ui-widget ui-widget-content ui-corner-all ui-front ' +
              this.options.dialogClass
          )
          .hide()
          .attr({ tabIndex: -1, role: 'dialog' })
          .appendTo(this._appendTo())),
          this._on(this.uiDialog, {
            keydown: function (t) {
              if (
                this.options.closeOnEscape &&
                !t.isDefaultPrevented() &&
                t.keyCode &&
                t.keyCode === a.ui.keyCode.ESCAPE
              )
                return t.preventDefault(), void this.close(t);
              if (t.keyCode === a.ui.keyCode.TAB) {
                var e = this.uiDialog.find(':tabbable'),
                  i = e.filter(':first'),
                  s = e.filter(':last');
                (t.target !== s[0] && t.target !== this.uiDialog[0]) ||
                t.shiftKey
                  ? (t.target !== i[0] && t.target !== this.uiDialog[0]) ||
                    !t.shiftKey ||
                    (s.focus(1), t.preventDefault())
                  : (i.focus(1), t.preventDefault());
              }
            },
            mousedown: function (t) {
              this._moveToTop(t) && this._focusTabbable();
            },
          }),
          this.element.find('[aria-describedby]').length ||
            this.uiDialog.attr({
              'aria-describedby': this.element.uniqueId().attr('id'),
            });
      },
      _createTitlebar: function () {
        var t;
        (this.uiDialogTitlebar = a('<div>')
          .addClass(
            'ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix'
          )
          .prependTo(this.uiDialog)),
          this._on(this.uiDialogTitlebar, {
            mousedown: function (t) {
              a(t.target).closest('.ui-dialog-titlebar-close') ||
                this.uiDialog.focus();
            },
          }),
          (this.uiDialogTitlebarClose = a('<button></button>')
            .button({
              label: this.options.closeText,
              icons: { primary: 'ui-icon-closethick' },
              text: !1,
            })
            .addClass('ui-dialog-titlebar-close')
            .appendTo(this.uiDialogTitlebar)),
          this._on(this.uiDialogTitlebarClose, {
            click: function (t) {
              t.preventDefault(), this.close(t);
            },
          }),
          (t = a('<span>')
            .uniqueId()
            .addClass('ui-dialog-title')
            .prependTo(this.uiDialogTitlebar)),
          this._title(t),
          this.uiDialog.attr({ 'aria-labelledby': t.attr('id') });
      },
      _title: function (t) {
        this.options.title || t.html('&#160;'), t.text(this.options.title);
      },
      _createButtonPane: function () {
        (this.uiDialogButtonPane = a('<div>').addClass(
          'ui-dialog-buttonpane ui-widget-content ui-helper-clearfix'
        )),
          (this.uiButtonSet = a('<div>')
            .addClass('ui-dialog-buttonset')
            .appendTo(this.uiDialogButtonPane)),
          this._createButtons();
      },
      _createButtons: function () {
        var n = this,
          t = this.options.buttons;
        this.uiDialogButtonPane.remove(),
          this.uiButtonSet.empty(),
          a.isEmptyObject(t) || (a.isArray(t) && !t.length)
            ? this.uiDialog.removeClass('ui-dialog-buttons')
            : (a.each(t, function (t, e) {
                var i, s;
                (e = a.isFunction(e) ? { click: e, text: t } : e),
                  (e = a.extend({ type: 'button' }, e)),
                  (i = e.click),
                  (e.click = function () {
                    i.apply(n.element[0], arguments);
                  }),
                  (s = { icons: e.icons, text: e.showText }),
                  delete e.icons,
                  delete e.showText,
                  a('<button></button>', e).button(s).appendTo(n.uiButtonSet);
              }),
              this.uiDialog.addClass('ui-dialog-buttons'),
              this.uiDialogButtonPane.appendTo(this.uiDialog));
      },
      _makeDraggable: function () {
        var i = this,
          s = this.options;
        function n(t) {
          return { position: t.position, offset: t.offset };
        }
        this.uiDialog.draggable({
          cancel: '.ui-dialog-content, .ui-dialog-titlebar-close',
          handle: '.ui-dialog-titlebar',
          containment: 'document',
          start: function (t, e) {
            a(this).addClass('ui-dialog-dragging'),
              i._blockFrames(),
              i._trigger('dragStart', t, n(e));
          },
          drag: function (t, e) {
            i._trigger('drag', t, n(e));
          },
          stop: function (t, e) {
            (s.position = [
              e.position.left - i.document.scrollLeft(),
              e.position.top - i.document.scrollTop(),
            ]),
              a(this).removeClass('ui-dialog-dragging'),
              i._unblockFrames(),
              i._trigger('dragStop', t, n(e));
          },
        });
      },
      _makeResizable: function () {
        var i = this,
          s = this.options,
          t = s.resizable,
          e = this.uiDialog.css('position'),
          n = 'string' == typeof t ? t : 'n,e,s,w,se,sw,ne,nw';
        function o(t) {
          return {
            originalPosition: t.originalPosition,
            originalSize: t.originalSize,
            position: t.position,
            size: t.size,
          };
        }
        this.uiDialog
          .resizable({
            cancel: '.ui-dialog-content',
            containment: 'document',
            alsoResize: this.element,
            maxWidth: s.maxWidth,
            maxHeight: s.maxHeight,
            minWidth: s.minWidth,
            minHeight: this._minHeight(),
            handles: n,
            start: function (t, e) {
              a(this).addClass('ui-dialog-resizing'),
                i._blockFrames(),
                i._trigger('resizeStart', t, o(e));
            },
            resize: function (t, e) {
              i._trigger('resize', t, o(e));
            },
            stop: function (t, e) {
              (s.height = a(this).height()),
                (s.width = a(this).width()),
                a(this).removeClass('ui-dialog-resizing'),
                i._unblockFrames(),
                i._trigger('resizeStop', t, o(e));
            },
          })
          .css('position', e);
      },
      _minHeight: function () {
        var t = this.options;
        return 'auto' === t.height
          ? t.minHeight
          : Math.min(t.minHeight, t.height);
      },
      _position: function () {
        var t = this.uiDialog.is(':visible');
        t || this.uiDialog.show(),
          this.uiDialog.position(this.options.position),
          t || this.uiDialog.hide();
      },
      _setOptions: function (t) {
        var i = this,
          s = !1,
          n = {};
        a.each(t, function (t, e) {
          i._setOption(t, e), t in o && (s = !0), t in r && (n[t] = e);
        }),
          s && (this._size(), this._position()),
          this.uiDialog.is(':data(ui-resizable)') &&
            this.uiDialog.resizable('option', n);
      },
      _setOption: function (t, e) {
        var i,
          s,
          n = this.uiDialog;
        'dialogClass' === t &&
          n.removeClass(this.options.dialogClass).addClass(e),
          'disabled' !== t &&
            (this._super(t, e),
            'appendTo' === t && this.uiDialog.appendTo(this._appendTo()),
            'buttons' === t && this._createButtons(),
            'closeText' === t &&
              this.uiDialogTitlebarClose.button({ label: '' + e }),
            'draggable' === t &&
              ((i = n.is(':data(ui-draggable)')) &&
                !e &&
                n.draggable('destroy'),
              !i && e && this._makeDraggable()),
            'position' === t && this._position(),
            'resizable' === t &&
              ((s = n.is(':data(ui-resizable)')) &&
                !e &&
                n.resizable('destroy'),
              s && 'string' == typeof e && n.resizable('option', 'handles', e),
              s || !1 === e || this._makeResizable()),
            'title' === t &&
              this._title(this.uiDialogTitlebar.find('.ui-dialog-title')));
      },
      _size: function () {
        var t,
          e,
          i,
          s = this.options;
        this.element
          .show()
          .css({ width: 'auto', minHeight: 0, maxHeight: 'none', height: 0 }),
          s.minWidth > s.width && (s.width = s.minWidth),
          (t = this.uiDialog
            .css({ height: 'auto', width: s.width })
            .outerHeight()),
          (e = Math.max(0, s.minHeight - t)),
          (i =
            'number' == typeof s.maxHeight
              ? Math.max(0, s.maxHeight - t)
              : 'none'),
          'auto' === s.height
            ? this.element.css({ minHeight: e, maxHeight: i, height: 'auto' })
            : this.element.height(Math.max(0, s.height - t)),
          this.uiDialog.is(':data(ui-resizable)') &&
            this.uiDialog.resizable('option', 'minHeight', this._minHeight());
      },
      _blockFrames: function () {
        this.iframeBlocks = this.document.find('iframe').map(function () {
          var t = a(this);
          return a('<div>')
            .css({
              position: 'absolute',
              width: t.outerWidth(),
              height: t.outerHeight(),
            })
            .appendTo(t.parent())
            .offset(t.offset())[0];
        });
      },
      _unblockFrames: function () {
        this.iframeBlocks &&
          (this.iframeBlocks.remove(), delete this.iframeBlocks);
      },
      _allowInteraction: function (t) {
        return (
          !!a(t.target).closest('.ui-dialog').length ||
          !!a(t.target).closest('.ui-datepicker').length
        );
      },
      _createOverlay: function () {
        if (this.options.modal) {
          var e = this,
            i = this.widgetFullName;
          a.ui.dialog.overlayInstances ||
            this._delay(function () {
              a.ui.dialog.overlayInstances &&
                this.document.bind('focusin.dialog', function (t) {
                  e._allowInteraction(t) ||
                    (t.preventDefault(),
                    a('.ui-dialog:visible:last .ui-dialog-content')
                      .data(i)
                      ._focusTabbable());
                });
            }),
            (this.overlay = a('<div>')
              .addClass('ui-widget-overlay ui-front')
              .appendTo(this._appendTo())),
            this._on(this.overlay, { mousedown: '_keepFocus' }),
            a.ui.dialog.overlayInstances++;
        }
      },
      _destroyOverlay: function () {
        this.options.modal &&
          this.overlay &&
          (a.ui.dialog.overlayInstances--,
          a.ui.dialog.overlayInstances ||
            this.document.unbind('focusin.dialog'),
          this.overlay.remove(),
          (this.overlay = null));
      },
    }),
      (a.ui.dialog.overlayInstances = 0),
      !1 !== a.uiBackCompat &&
        a.widget('ui.dialog', a.ui.dialog, {
          _position: function () {
            var t,
              e = this.options.position,
              i = [],
              s = [0, 0];
            (e = e
              ? (('string' == typeof e || ('object' == typeof e && '0' in e)) &&
                  (1 === (i = e.split ? e.split(' ') : [e[0], e[1]]).length &&
                    (i[1] = i[0]),
                  a.each(['left', 'top'], function (t, e) {
                    +i[t] === i[t] && ((s[t] = i[t]), (i[t] = e));
                  }),
                  (e = {
                    my:
                      i[0] +
                      (s[0] < 0 ? s[0] : '+' + s[0]) +
                      ' ' +
                      i[1] +
                      (s[1] < 0 ? s[1] : '+' + s[1]),
                    at: i.join(' '),
                  })),
                a.extend({}, a.ui.dialog.prototype.options.position, e))
              : a.ui.dialog.prototype.options.position),
              (t = this.uiDialog.is(':visible')) || this.uiDialog.show(),
              this.uiDialog.position(e),
              t || this.uiDialog.hide();
          },
        });
  })(jQuery),
  (function (g, t) {
    var m = /up|down|vertical/,
      v = /up|left|vertical|horizontal/;
    g.effects.effect.blind = function (t, e) {
      var i,
        s,
        n,
        o = g(this),
        a = ['position', 'top', 'bottom', 'left', 'right', 'height', 'width'],
        r = g.effects.setMode(o, t.mode || 'hide'),
        h = t.direction || 'up',
        l = m.test(h),
        c = l ? 'height' : 'width',
        u = l ? 'top' : 'left',
        d = v.test(h),
        p = {},
        f = 'show' === r;
      o.parent().is('.ui-effects-wrapper')
        ? g.effects.save(o.parent(), a)
        : g.effects.save(o, a),
        o.show(),
        (s = (i = g.effects.createWrapper(o).css({ overflow: 'hidden' }))[c]()),
        (n = parseFloat(i.css(u)) || 0),
        (p[c] = f ? s : 0),
        d ||
          (o
            .css(l ? 'bottom' : 'right', 0)
            .css(l ? 'top' : 'left', 'auto')
            .css({ position: 'absolute' }),
          (p[u] = f ? n : s + n)),
        f && (i.css(c, 0), d || i.css(u, n + s)),
        i.animate(p, {
          duration: t.duration,
          easing: t.easing,
          queue: !1,
          complete: function () {
            'hide' === r && o.hide(),
              g.effects.restore(o, a),
              g.effects.removeWrapper(o),
              e();
          },
        });
    };
  })(jQuery),
  (function (y, t) {
    y.effects.effect.bounce = function (t, e) {
      var i,
        s,
        n,
        o = y(this),
        a = ['position', 'top', 'bottom', 'left', 'right', 'height', 'width'],
        r = y.effects.setMode(o, t.mode || 'effect'),
        h = 'hide' === r,
        l = 'show' === r,
        c = t.direction || 'up',
        u = t.distance,
        d = t.times || 5,
        p = 2 * d + (l || h ? 1 : 0),
        f = t.duration / p,
        g = t.easing,
        m = 'up' === c || 'down' === c ? 'top' : 'left',
        v = 'up' === c || 'left' === c,
        _ = o.queue(),
        b = _.length;
      for (
        (l || h) && a.push('opacity'),
          y.effects.save(o, a),
          o.show(),
          y.effects.createWrapper(o),
          u || (u = o['top' === m ? 'outerHeight' : 'outerWidth']() / 3),
          l &&
            (((n = { opacity: 1 })[m] = 0),
            o
              .css('opacity', 0)
              .css(m, v ? 2 * -u : 2 * u)
              .animate(n, f, g)),
          h && (u /= Math.pow(2, d - 1)),
          i = (n = {})[m] = 0;
        i < d;
        i++
      )
        ((s = {})[m] = (v ? '-=' : '+=') + u),
          o.animate(s, f, g).animate(n, f, g),
          (u = h ? 2 * u : u / 2);
      h &&
        (((s = { opacity: 0 })[m] = (v ? '-=' : '+=') + u), o.animate(s, f, g)),
        o.queue(function () {
          h && o.hide(),
            y.effects.restore(o, a),
            y.effects.removeWrapper(o),
            e();
        }),
        1 < b && _.splice.apply(_, [1, 0].concat(_.splice(b, p + 1))),
        o.dequeue();
    };
  })(jQuery),
  (function (d, t) {
    d.effects.effect.clip = function (t, e) {
      var i,
        s,
        n,
        o = d(this),
        a = ['position', 'top', 'bottom', 'left', 'right', 'height', 'width'],
        r = 'show' === d.effects.setMode(o, t.mode || 'hide'),
        h = 'vertical' === (t.direction || 'vertical'),
        l = h ? 'height' : 'width',
        c = h ? 'top' : 'left',
        u = {};
      d.effects.save(o, a),
        o.show(),
        (i = d.effects.createWrapper(o).css({ overflow: 'hidden' })),
        (n = (s = 'IMG' === o[0].tagName ? i : o)[l]()),
        r && (s.css(l, 0), s.css(c, n / 2)),
        (u[l] = r ? n : 0),
        (u[c] = r ? 0 : n / 2),
        s.animate(u, {
          queue: !1,
          duration: t.duration,
          easing: t.easing,
          complete: function () {
            r || o.hide(),
              d.effects.restore(o, a),
              d.effects.removeWrapper(o),
              e();
          },
        });
    };
  })(jQuery),
  (function (u, t) {
    u.effects.effect.drop = function (t, e) {
      var i,
        s = u(this),
        n = [
          'position',
          'top',
          'bottom',
          'left',
          'right',
          'opacity',
          'height',
          'width',
        ],
        o = u.effects.setMode(s, t.mode || 'hide'),
        a = 'show' === o,
        r = t.direction || 'left',
        h = 'up' === r || 'down' === r ? 'top' : 'left',
        l = 'up' === r || 'left' === r ? 'pos' : 'neg',
        c = { opacity: a ? 1 : 0 };
      u.effects.save(s, n),
        s.show(),
        u.effects.createWrapper(s),
        (i =
          t.distance || s['top' === h ? 'outerHeight' : 'outerWidth'](!0) / 2),
        a && s.css('opacity', 0).css(h, 'pos' === l ? -i : i),
        (c[h] =
          (a ? ('pos' === l ? '+=' : '-=') : 'pos' === l ? '-=' : '+=') + i),
        s.animate(c, {
          queue: !1,
          duration: t.duration,
          easing: t.easing,
          complete: function () {
            'hide' === o && s.hide(),
              u.effects.restore(s, n),
              u.effects.removeWrapper(s),
              e();
          },
        });
    };
  })(jQuery),
  (function (v, t) {
    v.effects.effect.explode = function (t, e) {
      var i,
        s,
        n,
        o,
        a,
        r,
        h = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
        l = h,
        c = v(this),
        u = 'show' === v.effects.setMode(c, t.mode || 'hide'),
        d = c.show().css('visibility', 'hidden').offset(),
        p = Math.ceil(c.outerWidth() / l),
        f = Math.ceil(c.outerHeight() / h),
        g = [];
      function m() {
        g.push(this),
          g.length === h * l &&
            (function t() {
              c.css({ visibility: 'visible' }), v(g).remove(), u || c.hide();
              e();
            })();
      }
      for (i = 0; i < h; i++)
        for (o = d.top + i * f, r = i - (h - 1) / 2, s = 0; s < l; s++)
          (n = d.left + s * p),
            (a = s - (l - 1) / 2),
            c
              .clone()
              .appendTo('body')
              .wrap('<div></div>')
              .css({
                position: 'absolute',
                visibility: 'visible',
                left: -s * p,
                top: -i * f,
              })
              .parent()
              .addClass('ui-effects-explode')
              .css({
                position: 'absolute',
                overflow: 'hidden',
                width: p,
                height: f,
                left: n + (u ? a * p : 0),
                top: o + (u ? r * f : 0),
                opacity: u ? 0 : 1,
              })
              .animate(
                {
                  left: n + (u ? 0 : a * p),
                  top: o + (u ? 0 : r * f),
                  opacity: u ? 1 : 0,
                },
                t.duration || 500,
                t.easing,
                m
              );
    };
  })(jQuery),
  (function (n, t) {
    n.effects.effect.fade = function (t, e) {
      var i = n(this),
        s = n.effects.setMode(i, t.mode || 'toggle');
      i.animate(
        { opacity: s },
        { queue: !1, duration: t.duration, easing: t.easing, complete: e }
      );
    };
  })(jQuery),
  (function (v, t) {
    v.effects.effect.fold = function (t, e) {
      var i,
        s,
        n = v(this),
        o = ['position', 'top', 'bottom', 'left', 'right', 'height', 'width'],
        a = v.effects.setMode(n, t.mode || 'hide'),
        r = 'show' === a,
        h = 'hide' === a,
        l = t.size || 15,
        c = /([0-9]+)%/.exec(l),
        u = !!t.horizFirst,
        d = r !== u,
        p = d ? ['width', 'height'] : ['height', 'width'],
        f = t.duration / 2,
        g = {},
        m = {};
      v.effects.save(n, o),
        n.show(),
        (i = v.effects.createWrapper(n).css({ overflow: 'hidden' })),
        (s = d ? [i.width(), i.height()] : [i.height(), i.width()]),
        c && (l = (parseInt(c[1], 10) / 100) * s[h ? 0 : 1]),
        r && i.css(u ? { height: 0, width: l } : { height: l, width: 0 }),
        (g[p[0]] = r ? s[0] : l),
        (m[p[1]] = r ? s[1] : 0),
        i.animate(g, f, t.easing).animate(m, f, t.easing, function () {
          h && n.hide(),
            v.effects.restore(n, o),
            v.effects.removeWrapper(n),
            e();
        });
    };
  })(jQuery),
  (function (a, t) {
    a.effects.effect.highlight = function (t, e) {
      var i = a(this),
        s = ['backgroundImage', 'backgroundColor', 'opacity'],
        n = a.effects.setMode(i, t.mode || 'show'),
        o = { backgroundColor: i.css('backgroundColor') };
      'hide' === n && (o.opacity = 0),
        a.effects.save(i, s),
        i
          .show()
          .css({
            backgroundImage: 'none',
            backgroundColor: t.color || '#ffff99',
          })
          .animate(o, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function () {
              'hide' === n && i.hide(), a.effects.restore(i, s), e();
            },
          });
    };
  })(jQuery),
  (function (p, t) {
    p.effects.effect.pulsate = function (t, e) {
      var i,
        s = p(this),
        n = p.effects.setMode(s, t.mode || 'show'),
        o = 'show' === n,
        a = 'hide' === n,
        r = o || 'hide' === n,
        h = 2 * (t.times || 5) + (r ? 1 : 0),
        l = t.duration / h,
        c = 0,
        u = s.queue(),
        d = u.length;
      for (
        (!o && s.is(':visible')) || (s.css('opacity', 0).show(), (c = 1)),
          i = 1;
        i < h;
        i++
      )
        s.animate({ opacity: c }, l, t.easing), (c = 1 - c);
      s.animate({ opacity: c }, l, t.easing),
        s.queue(function () {
          a && s.hide(), e();
        }),
        1 < d && u.splice.apply(u, [1, 0].concat(u.splice(d, h + 1))),
        s.dequeue();
    };
  })(jQuery),
  (function (_, t) {
    (_.effects.effect.puff = function (t, e) {
      var i = _(this),
        s = _.effects.setMode(i, t.mode || 'hide'),
        n = 'hide' === s,
        o = parseInt(t.percent, 10) || 150,
        a = o / 100,
        r = {
          height: i.height(),
          width: i.width(),
          outerHeight: i.outerHeight(),
          outerWidth: i.outerWidth(),
        };
      _.extend(t, {
        effect: 'scale',
        queue: !1,
        fade: !0,
        mode: s,
        complete: e,
        percent: n ? o : 100,
        from: n
          ? r
          : {
              height: r.height * a,
              width: r.width * a,
              outerHeight: r.outerHeight * a,
              outerWidth: r.outerWidth * a,
            },
      }),
        i.effect(t);
    }),
      (_.effects.effect.scale = function (t, e) {
        var i = _(this),
          s = _.extend(!0, {}, t),
          n = _.effects.setMode(i, t.mode || 'effect'),
          o =
            parseInt(t.percent, 10) ||
            (0 === parseInt(t.percent, 10) ? 0 : 'hide' === n ? 0 : 100),
          a = t.direction || 'both',
          r = t.origin,
          h = {
            height: i.height(),
            width: i.width(),
            outerHeight: i.outerHeight(),
            outerWidth: i.outerWidth(),
          },
          l = 'horizontal' !== a ? o / 100 : 1,
          c = 'vertical' !== a ? o / 100 : 1;
        (s.effect = 'size'),
          (s.queue = !1),
          (s.complete = e),
          'effect' !== n &&
            ((s.origin = r || ['middle', 'center']), (s.restore = !0)),
          (s.from =
            t.from ||
            ('show' === n
              ? { height: 0, width: 0, outerHeight: 0, outerWidth: 0 }
              : h)),
          (s.to = {
            height: h.height * l,
            width: h.width * c,
            outerHeight: h.outerHeight * l,
            outerWidth: h.outerWidth * c,
          }),
          s.fade &&
            ('show' === n && ((s.from.opacity = 0), (s.to.opacity = 1)),
            'hide' === n && ((s.from.opacity = 1), (s.to.opacity = 0))),
          i.effect(s);
      }),
      (_.effects.effect.size = function (o, t) {
        var e,
          i,
          a,
          r = _(this),
          s = [
            'position',
            'top',
            'bottom',
            'left',
            'right',
            'width',
            'height',
            'overflow',
            'opacity',
          ],
          h = ['width', 'height', 'overflow'],
          n = ['fontSize'],
          l = [
            'borderTopWidth',
            'borderBottomWidth',
            'paddingTop',
            'paddingBottom',
          ],
          c = [
            'borderLeftWidth',
            'borderRightWidth',
            'paddingLeft',
            'paddingRight',
          ],
          u = _.effects.setMode(r, o.mode || 'effect'),
          d = o.restore || 'effect' !== u,
          p = o.scale || 'both',
          f = o.origin || ['middle', 'center'],
          g = r.css('position'),
          m = d
            ? s
            : [
                'position',
                'top',
                'bottom',
                'left',
                'right',
                'overflow',
                'opacity',
              ],
          v = { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
        'show' === u && r.show(),
          (e = {
            height: r.height(),
            width: r.width(),
            outerHeight: r.outerHeight(),
            outerWidth: r.outerWidth(),
          }),
          'toggle' === o.mode && 'show' === u
            ? ((r.from = o.to || v), (r.to = o.from || e))
            : ((r.from = o.from || ('show' === u ? v : e)),
              (r.to = o.to || ('hide' === u ? v : e))),
          (a = {
            from: { y: r.from.height / e.height, x: r.from.width / e.width },
            to: { y: r.to.height / e.height, x: r.to.width / e.width },
          }),
          ('box' !== p && 'both' !== p) ||
            (a.from.y !== a.to.y &&
              ((m = m.concat(l)),
              (r.from = _.effects.setTransition(r, l, a.from.y, r.from)),
              (r.to = _.effects.setTransition(r, l, a.to.y, r.to))),
            a.from.x !== a.to.x &&
              ((m = m.concat(c)),
              (r.from = _.effects.setTransition(r, c, a.from.x, r.from)),
              (r.to = _.effects.setTransition(r, c, a.to.x, r.to)))),
          ('content' !== p && 'both' !== p) ||
            (a.from.y !== a.to.y &&
              ((m = m.concat(n).concat(h)),
              (r.from = _.effects.setTransition(r, n, a.from.y, r.from)),
              (r.to = _.effects.setTransition(r, n, a.to.y, r.to)))),
          _.effects.save(r, m),
          r.show(),
          _.effects.createWrapper(r),
          r.css('overflow', 'hidden').css(r.from),
          f &&
            ((i = _.effects.getBaseline(f, e)),
            (r.from.top = (e.outerHeight - r.outerHeight()) * i.y),
            (r.from.left = (e.outerWidth - r.outerWidth()) * i.x),
            (r.to.top = (e.outerHeight - r.to.outerHeight) * i.y),
            (r.to.left = (e.outerWidth - r.to.outerWidth) * i.x)),
          r.css(r.from),
          ('content' !== p && 'both' !== p) ||
            ((l = l.concat(['marginTop', 'marginBottom']).concat(n)),
            (c = c.concat(['marginLeft', 'marginRight'])),
            (h = s.concat(l).concat(c)),
            r.find('*[width]').each(function () {
              var t = _(this),
                e = t.height(),
                i = t.width(),
                s = t.outerHeight(),
                n = t.outerWidth();
              d && _.effects.save(t, h),
                (t.from = {
                  height: e * a.from.y,
                  width: i * a.from.x,
                  outerHeight: s * a.from.y,
                  outerWidth: n * a.from.x,
                }),
                (t.to = {
                  height: e * a.to.y,
                  width: i * a.to.x,
                  outerHeight: e * a.to.y,
                  outerWidth: i * a.to.x,
                }),
                a.from.y !== a.to.y &&
                  ((t.from = _.effects.setTransition(t, l, a.from.y, t.from)),
                  (t.to = _.effects.setTransition(t, l, a.to.y, t.to))),
                a.from.x !== a.to.x &&
                  ((t.from = _.effects.setTransition(t, c, a.from.x, t.from)),
                  (t.to = _.effects.setTransition(t, c, a.to.x, t.to))),
                t.css(t.from),
                t.animate(t.to, o.duration, o.easing, function () {
                  d && _.effects.restore(t, h);
                });
            })),
          r.animate(r.to, {
            queue: !1,
            duration: o.duration,
            easing: o.easing,
            complete: function () {
              0 === r.to.opacity && r.css('opacity', r.from.opacity),
                'hide' === u && r.hide(),
                _.effects.restore(r, m),
                d ||
                  ('static' === g
                    ? r.css({
                        position: 'relative',
                        top: r.to.top,
                        left: r.to.left,
                      })
                    : _.each(['top', 'left'], function (n, t) {
                        r.css(t, function (t, e) {
                          var i = parseInt(e, 10),
                            s = n ? r.to.left : r.to.top;
                          return 'auto' === e ? s + 'px' : i + s + 'px';
                        });
                      })),
                _.effects.removeWrapper(r),
                t();
            },
          });
      });
  })(jQuery),
  (function (_, t) {
    _.effects.effect.shake = function (t, e) {
      var i,
        s = _(this),
        n = ['position', 'top', 'bottom', 'left', 'right', 'height', 'width'],
        o = _.effects.setMode(s, t.mode || 'effect'),
        a = t.direction || 'left',
        r = t.distance || 20,
        h = t.times || 3,
        l = 2 * h + 1,
        c = Math.round(t.duration / l),
        u = 'up' === a || 'down' === a ? 'top' : 'left',
        d = 'up' === a || 'left' === a,
        p = {},
        f = {},
        g = {},
        m = s.queue(),
        v = m.length;
      for (
        _.effects.save(s, n),
          s.show(),
          _.effects.createWrapper(s),
          p[u] = (d ? '-=' : '+=') + r,
          f[u] = (d ? '+=' : '-=') + 2 * r,
          g[u] = (d ? '-=' : '+=') + 2 * r,
          s.animate(p, c, t.easing),
          i = 1;
        i < h;
        i++
      )
        s.animate(f, c, t.easing).animate(g, c, t.easing);
      s
        .animate(f, c, t.easing)
        .animate(p, c / 2, t.easing)
        .queue(function () {
          'hide' === o && s.hide(),
            _.effects.restore(s, n),
            _.effects.removeWrapper(s),
            e();
        }),
        1 < v && m.splice.apply(m, [1, 0].concat(m.splice(v, l + 1))),
        s.dequeue();
    };
  })(jQuery),
  (function (u, t) {
    u.effects.effect.slide = function (t, e) {
      var i,
        s = u(this),
        n = ['position', 'top', 'bottom', 'left', 'right', 'width', 'height'],
        o = u.effects.setMode(s, t.mode || 'show'),
        a = 'show' === o,
        r = t.direction || 'left',
        h = 'up' === r || 'down' === r ? 'top' : 'left',
        l = 'up' === r || 'left' === r,
        c = {};
      u.effects.save(s, n),
        s.show(),
        (i = t.distance || s['top' === h ? 'outerHeight' : 'outerWidth'](!0)),
        u.effects.createWrapper(s).css({ overflow: 'hidden' }),
        a && s.css(h, l ? (isNaN(i) ? '-' + i : -i) : i),
        (c[h] = (a ? (l ? '+=' : '-=') : l ? '-=' : '+=') + i),
        s.animate(c, {
          queue: !1,
          duration: t.duration,
          easing: t.easing,
          complete: function () {
            'hide' === o && s.hide(),
              u.effects.restore(s, n),
              u.effects.removeWrapper(s),
              e();
          },
        });
    };
  })(jQuery),
  (function (d, t) {
    d.effects.effect.transfer = function (t, e) {
      var i = d(this),
        s = d(t.to),
        n = 'fixed' === s.css('position'),
        o = d('body'),
        a = n ? o.scrollTop() : 0,
        r = n ? o.scrollLeft() : 0,
        h = s.offset(),
        l = {
          top: h.top - a,
          left: h.left - r,
          height: s.innerHeight(),
          width: s.innerWidth(),
        },
        c = i.offset(),
        u = d("<div class='ui-effects-transfer'></div>")
          .appendTo(document.body)
          .addClass(t.className)
          .css({
            top: c.top - a,
            left: c.left - r,
            height: i.innerHeight(),
            width: i.innerWidth(),
            position: n ? 'fixed' : 'absolute',
          })
          .animate(l, t.duration, t.easing, function () {
            u.remove(), e();
          });
    };
  })(jQuery),
  (function (h, t) {
    h.widget('ui.menu', {
      version: '1.10.3',
      defaultElement: '<ul>',
      delay: 300,
      options: {
        icons: { submenu: 'ui-icon-carat-1-e' },
        menus: 'ul',
        position: { my: 'left top', at: 'right top' },
        role: 'menu',
        blur: null,
        focus: null,
        select: null,
      },
      _create: function () {
        (this.activeMenu = this.element),
          (this.mouseHandled = !1),
          this.element
            .uniqueId()
            .addClass('ui-menu ui-widget ui-widget-content ui-corner-all')
            .toggleClass(
              'ui-menu-icons',
              !!this.element.find('.ui-icon').length
            )
            .attr({ role: this.options.role, tabIndex: 0 })
            .bind(
              'click' + this.eventNamespace,
              h.proxy(function (t) {
                this.options.disabled && t.preventDefault();
              }, this)
            ),
          this.options.disabled &&
            this.element
              .addClass('ui-state-disabled')
              .attr('aria-disabled', 'true'),
          this._on({
            'mousedown .ui-menu-item > a': function (t) {
              t.preventDefault();
            },
            'click .ui-state-disabled > a': function (t) {
              t.preventDefault();
            },
            'click .ui-menu-item:has(a)': function (t) {
              var e = h(t.target).closest('.ui-menu-item');
              !this.mouseHandled &&
                e.not('.ui-state-disabled').length &&
                ((this.mouseHandled = !0),
                this.select(t),
                e.has('.ui-menu').length
                  ? this.expand(t)
                  : this.element.is(':focus') ||
                    (this.element.trigger('focus', [!0]),
                    this.active &&
                      1 === this.active.parents('.ui-menu').length &&
                      clearTimeout(this.timer)));
            },
            'mouseenter .ui-menu-item': function (t) {
              var e = h(t.currentTarget);
              e
                .siblings()
                .children('.ui-state-active')
                .removeClass('ui-state-active'),
                this.focus(t, e);
            },
            mouseleave: 'collapseAll',
            'mouseleave .ui-menu': 'collapseAll',
            focus: function (t, e) {
              var i =
                this.active || this.element.children('.ui-menu-item').eq(0);
              e || this.focus(t, i);
            },
            blur: function (t) {
              this._delay(function () {
                h.contains(this.element[0], this.document[0].activeElement) ||
                  this.collapseAll(t);
              });
            },
            keydown: '_keydown',
          }),
          this.refresh(),
          this._on(this.document, {
            click: function (t) {
              h(t.target).closest('.ui-menu').length || this.collapseAll(t),
                (this.mouseHandled = !1);
            },
          });
      },
      _destroy: function () {
        this.element
          .removeAttr('aria-activedescendant')
          .find('.ui-menu')
          .addBack()
          .removeClass(
            'ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons'
          )
          .removeAttr('role')
          .removeAttr('tabIndex')
          .removeAttr('aria-labelledby')
          .removeAttr('aria-expanded')
          .removeAttr('aria-hidden')
          .removeAttr('aria-disabled')
          .removeUniqueId()
          .show(),
          this.element
            .find('.ui-menu-item')
            .removeClass('ui-menu-item')
            .removeAttr('role')
            .removeAttr('aria-disabled')
            .children('a')
            .removeUniqueId()
            .removeClass('ui-corner-all ui-state-hover')
            .removeAttr('tabIndex')
            .removeAttr('role')
            .removeAttr('aria-haspopup')
            .children()
            .each(function () {
              var t = h(this);
              t.data('ui-menu-submenu-carat') && t.remove();
            }),
          this.element
            .find('.ui-menu-divider')
            .removeClass('ui-menu-divider ui-widget-content');
      },
      _keydown: function (t) {
        var e,
          i,
          s,
          n,
          o,
          a = !0;
        function r(t) {
          return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
        }
        switch (t.keyCode) {
          case h.ui.keyCode.PAGE_UP:
            this.previousPage(t);
            break;
          case h.ui.keyCode.PAGE_DOWN:
            this.nextPage(t);
            break;
          case h.ui.keyCode.HOME:
            this._move('first', 'first', t);
            break;
          case h.ui.keyCode.END:
            this._move('last', 'last', t);
            break;
          case h.ui.keyCode.UP:
            this.previous(t);
            break;
          case h.ui.keyCode.DOWN:
            this.next(t);
            break;
          case h.ui.keyCode.LEFT:
            this.collapse(t);
            break;
          case h.ui.keyCode.RIGHT:
            this.active &&
              !this.active.is('.ui-state-disabled') &&
              this.expand(t);
            break;
          case h.ui.keyCode.ENTER:
          case h.ui.keyCode.SPACE:
            this._activate(t);
            break;
          case h.ui.keyCode.ESCAPE:
            this.collapse(t);
            break;
          default:
            (a = !1),
              (i = this.previousFilter || ''),
              (s = String.fromCharCode(t.keyCode)),
              (n = !1),
              clearTimeout(this.filterTimer),
              s === i ? (n = !0) : (s = i + s),
              (o = new RegExp('^' + r(s), 'i')),
              (e = this.activeMenu
                .children('.ui-menu-item')
                .filter(function () {
                  return o.test(h(this).children('a').text());
                })),
              (e =
                n && -1 !== e.index(this.active.next())
                  ? this.active.nextAll('.ui-menu-item')
                  : e).length ||
                ((s = String.fromCharCode(t.keyCode)),
                (o = new RegExp('^' + r(s), 'i')),
                (e = this.activeMenu
                  .children('.ui-menu-item')
                  .filter(function () {
                    return o.test(h(this).children('a').text());
                  }))),
              e.length
                ? (this.focus(t, e),
                  1 < e.length
                    ? ((this.previousFilter = s),
                      (this.filterTimer = this._delay(function () {
                        delete this.previousFilter;
                      }, 1e3)))
                    : delete this.previousFilter)
                : delete this.previousFilter;
        }
        a && t.preventDefault();
      },
      _activate: function (t) {
        this.active.is('.ui-state-disabled') ||
          (this.active.children("a[aria-haspopup='true']").length
            ? this.expand(t)
            : this.select(t));
      },
      refresh: function () {
        var t,
          s = this.options.icons.submenu,
          e = this.element.find(this.options.menus);
        e
          .filter(':not(.ui-menu)')
          .addClass('ui-menu ui-widget ui-widget-content ui-corner-all')
          .hide()
          .attr({
            role: this.options.role,
            'aria-hidden': 'true',
            'aria-expanded': 'false',
          })
          .each(function () {
            var t = h(this),
              e = t.prev('a'),
              i = h('<span>')
                .addClass('ui-menu-icon ui-icon ' + s)
                .data('ui-menu-submenu-carat', !0);
            e.attr('aria-haspopup', 'true').prepend(i),
              t.attr('aria-labelledby', e.attr('id'));
          }),
          (t = e.add(this.element))
            .children(':not(.ui-menu-item):has(a)')
            .addClass('ui-menu-item')
            .attr('role', 'presentation')
            .children('a')
            .uniqueId()
            .addClass('ui-corner-all')
            .attr({ tabIndex: -1, role: this._itemRole() }),
          t.children(':not(.ui-menu-item)').each(function () {
            var t = h(this);
            /[^\-\u2014\u2013\s]/.test(t.text()) ||
              t.addClass('ui-widget-content ui-menu-divider');
          }),
          t.children('.ui-state-disabled').attr('aria-disabled', 'true'),
          this.active &&
            !h.contains(this.element[0], this.active[0]) &&
            this.blur();
      },
      _itemRole: function () {
        return { menu: 'menuitem', listbox: 'option' }[this.options.role];
      },
      _setOption: function (t, e) {
        'icons' === t &&
          this.element
            .find('.ui-menu-icon')
            .removeClass(this.options.icons.submenu)
            .addClass(e.submenu),
          this._super(t, e);
      },
      focus: function (t, e) {
        var i, s;
        this.blur(t, t && 'focus' === t.type),
          this._scrollIntoView(e),
          (this.active = e.first()),
          (s = this.active.children('a').addClass('ui-state-focus')),
          this.options.role &&
            this.element.attr('aria-activedescendant', s.attr('id')),
          this.active
            .parent()
            .closest('.ui-menu-item')
            .children('a:first')
            .addClass('ui-state-active'),
          t && 'keydown' === t.type
            ? this._close()
            : (this.timer = this._delay(function () {
                this._close();
              }, this.delay)),
          (i = e.children('.ui-menu')).length &&
            /^mouse/.test(t.type) &&
            this._startOpening(i),
          (this.activeMenu = e.parent()),
          this._trigger('focus', t, { item: e });
      },
      _scrollIntoView: function (t) {
        var e, i, s, n, o, a;
        this._hasScroll() &&
          ((e = parseFloat(h.css(this.activeMenu[0], 'borderTopWidth')) || 0),
          (i = parseFloat(h.css(this.activeMenu[0], 'paddingTop')) || 0),
          (s = t.offset().top - this.activeMenu.offset().top - e - i),
          (n = this.activeMenu.scrollTop()),
          (o = this.activeMenu.height()),
          (a = t.height()),
          s < 0
            ? this.activeMenu.scrollTop(n + s)
            : o < s + a && this.activeMenu.scrollTop(n + s - o + a));
      },
      blur: function (t, e) {
        e || clearTimeout(this.timer),
          this.active &&
            (this.active.children('a').removeClass('ui-state-focus'),
            (this.active = null),
            this._trigger('blur', t, { item: this.active }));
      },
      _startOpening: function (t) {
        clearTimeout(this.timer),
          'true' === t.attr('aria-hidden') &&
            (this.timer = this._delay(function () {
              this._close(), this._open(t);
            }, this.delay));
      },
      _open: function (t) {
        var e = h.extend({ of: this.active }, this.options.position);
        clearTimeout(this.timer),
          this.element
            .find('.ui-menu')
            .not(t.parents('.ui-menu'))
            .hide()
            .attr('aria-hidden', 'true'),
          t
            .show()
            .removeAttr('aria-hidden')
            .attr('aria-expanded', 'true')
            .position(e);
      },
      collapseAll: function (e, i) {
        clearTimeout(this.timer),
          (this.timer = this._delay(function () {
            var t = i
              ? this.element
              : h(e && e.target).closest(this.element.find('.ui-menu'));
            t.length || (t = this.element),
              this._close(t),
              this.blur(e),
              (this.activeMenu = t);
          }, this.delay));
      },
      _close: function (t) {
        t || (t = this.active ? this.active.parent() : this.element),
          t
            .find('.ui-menu')
            .hide()
            .attr('aria-hidden', 'true')
            .attr('aria-expanded', 'false')
            .end()
            .find('a.ui-state-active')
            .removeClass('ui-state-active');
      },
      collapse: function (t) {
        var e =
          this.active &&
          this.active.parent().closest('.ui-menu-item', this.element);
        e && e.length && (this._close(), this.focus(t, e));
      },
      expand: function (t) {
        var e =
          this.active &&
          this.active.children('.ui-menu ').children('.ui-menu-item').first();
        e &&
          e.length &&
          (this._open(e.parent()),
          this._delay(function () {
            this.focus(t, e);
          }));
      },
      next: function (t) {
        this._move('next', 'first', t);
      },
      previous: function (t) {
        this._move('prev', 'last', t);
      },
      isFirstItem: function () {
        return this.active && !this.active.prevAll('.ui-menu-item').length;
      },
      isLastItem: function () {
        return this.active && !this.active.nextAll('.ui-menu-item').length;
      },
      _move: function (t, e, i) {
        var s;
        this.active &&
          (s =
            'first' === t || 'last' === t
              ? this.active['first' === t ? 'prevAll' : 'nextAll'](
                  '.ui-menu-item'
                ).eq(-1)
              : this.active[t + 'All']('.ui-menu-item').eq(0)),
          (s && s.length && this.active) ||
            (s = this.activeMenu.children('.ui-menu-item')[e]()),
          this.focus(i, s);
      },
      nextPage: function (t) {
        var e, i, s;
        this.active
          ? this.isLastItem() ||
            (this._hasScroll()
              ? ((i = this.active.offset().top),
                (s = this.element.height()),
                this.active.nextAll('.ui-menu-item').each(function () {
                  return (e = h(this)).offset().top - i - s < 0;
                }),
                this.focus(t, e))
              : this.focus(
                  t,
                  this.activeMenu
                    .children('.ui-menu-item')
                    [this.active ? 'last' : 'first']()
                ))
          : this.next(t);
      },
      previousPage: function (t) {
        var e, i, s;
        this.active
          ? this.isFirstItem() ||
            (this._hasScroll()
              ? ((i = this.active.offset().top),
                (s = this.element.height()),
                this.active.prevAll('.ui-menu-item').each(function () {
                  return 0 < (e = h(this)).offset().top - i + s;
                }),
                this.focus(t, e))
              : this.focus(
                  t,
                  this.activeMenu.children('.ui-menu-item').first()
                ))
          : this.next(t);
      },
      _hasScroll: function () {
        return this.element.outerHeight() < this.element.prop('scrollHeight');
      },
      select: function (t) {
        this.active = this.active || h(t.target).closest('.ui-menu-item');
        var e = { item: this.active };
        this.active.has('.ui-menu').length || this.collapseAll(t, !0),
          this._trigger('select', t, e);
      },
    });
  })(jQuery),
  (function (k, t) {
    k.ui = k.ui || {};
    var n,
      x = Math.max,
      D = Math.abs,
      C = Math.round,
      s = /left|center|right/,
      o = /top|center|bottom/,
      a = /[\+\-]\d+(\.[\d]+)?%?/,
      r = /^\w+/,
      h = /%$/,
      e = k.fn.position;
    function I(t, e, i) {
      return [
        parseFloat(t[0]) * (h.test(t[0]) ? e / 100 : 1),
        parseFloat(t[1]) * (h.test(t[1]) ? i / 100 : 1),
      ];
    }
    function P(t, e) {
      return parseInt(k.css(t, e), 10) || 0;
    }
    (k.position = {
      scrollbarWidth: function () {
        if (void 0 !== n) return n;
        var t,
          e,
          i = k(
            "<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
          ),
          s = i.children()[0];
        return (
          k('body').append(i),
          (t = s.offsetWidth),
          i.css('overflow', 'scroll'),
          t === (e = s.offsetWidth) && (e = i[0].clientWidth),
          i.remove(),
          (n = t - e)
        );
      },
      getScrollInfo: function (t) {
        var e = t.isWindow ? '' : t.element.css('overflow-x'),
          i = t.isWindow ? '' : t.element.css('overflow-y'),
          s =
            'scroll' === e ||
            ('auto' === e && t.width < t.element[0].scrollWidth);
        return {
          width:
            'scroll' === i ||
            ('auto' === i && t.height < t.element[0].scrollHeight)
              ? k.position.scrollbarWidth()
              : 0,
          height: s ? k.position.scrollbarWidth() : 0,
        };
      },
      getWithinInfo: function (t) {
        var e = k(t || window),
          i = k.isWindow(e[0]);
        return {
          element: e,
          isWindow: i,
          offset: e.offset() || { left: 0, top: 0 },
          scrollLeft: e.scrollLeft(),
          scrollTop: e.scrollTop(),
          width: i ? e.width() : e.outerWidth(),
          height: i ? e.height() : e.outerHeight(),
        };
      },
    }),
      (k.fn.position = function (u) {
        if (!u || !u.of) return e.apply(this, arguments);
        u = k.extend({}, u);
        var d,
          p,
          f,
          g,
          m,
          t,
          v = k(u.of),
          _ = k.position.getWithinInfo(u.within),
          b = k.position.getScrollInfo(_),
          y = (u.collision || 'flip').split(' '),
          w = {};
        return (
          (t = (function i(t) {
            var e = t[0];
            return 9 === e.nodeType
              ? {
                  width: t.width(),
                  height: t.height(),
                  offset: { top: 0, left: 0 },
                }
              : k.isWindow(e)
              ? {
                  width: t.width(),
                  height: t.height(),
                  offset: { top: t.scrollTop(), left: t.scrollLeft() },
                }
              : e.preventDefault
              ? { width: 0, height: 0, offset: { top: e.pageY, left: e.pageX } }
              : {
                  width: t.outerWidth(),
                  height: t.outerHeight(),
                  offset: t.offset(),
                };
          })(v)),
          v[0].preventDefault && (u.at = 'left top'),
          (p = t.width),
          (f = t.height),
          (g = t.offset),
          (m = k.extend({}, g)),
          k.each(['my', 'at'], function () {
            var t,
              e,
              i = (u[this] || '').split(' ');
            1 === i.length &&
              (i = s.test(i[0])
                ? i.concat(['center'])
                : o.test(i[0])
                ? ['center'].concat(i)
                : ['center', 'center']),
              (i[0] = s.test(i[0]) ? i[0] : 'center'),
              (i[1] = o.test(i[1]) ? i[1] : 'center'),
              (t = a.exec(i[0])),
              (e = a.exec(i[1])),
              (w[this] = [t ? t[0] : 0, e ? e[0] : 0]),
              (u[this] = [r.exec(i[0])[0], r.exec(i[1])[0]]);
          }),
          1 === y.length && (y[1] = y[0]),
          'right' === u.at[0]
            ? (m.left += p)
            : 'center' === u.at[0] && (m.left += p / 2),
          'bottom' === u.at[1]
            ? (m.top += f)
            : 'center' === u.at[1] && (m.top += f / 2),
          (d = I(w.at, p, f)),
          (m.left += d[0]),
          (m.top += d[1]),
          this.each(function () {
            var i,
              t,
              a = k(this),
              r = a.outerWidth(),
              h = a.outerHeight(),
              e = P(this, 'marginLeft'),
              s = P(this, 'marginTop'),
              n = r + e + P(this, 'marginRight') + b.width,
              o = h + s + P(this, 'marginBottom') + b.height,
              l = k.extend({}, m),
              c = I(w.my, a.outerWidth(), a.outerHeight());
            'right' === u.my[0]
              ? (l.left -= r)
              : 'center' === u.my[0] && (l.left -= r / 2),
              'bottom' === u.my[1]
                ? (l.top -= h)
                : 'center' === u.my[1] && (l.top -= h / 2),
              (l.left += c[0]),
              (l.top += c[1]),
              k.support.offsetFractions ||
                ((l.left = C(l.left)), (l.top = C(l.top))),
              (i = { marginLeft: e, marginTop: s }),
              k.each(['left', 'top'], function (t, e) {
                k.ui.position[y[t]] &&
                  k.ui.position[y[t]][e](l, {
                    targetWidth: p,
                    targetHeight: f,
                    elemWidth: r,
                    elemHeight: h,
                    collisionPosition: i,
                    collisionWidth: n,
                    collisionHeight: o,
                    offset: [d[0] + c[0], d[1] + c[1]],
                    my: u.my,
                    at: u.at,
                    within: _,
                    elem: a,
                  });
              }),
              u.using &&
                (t = function (t) {
                  var e = g.left - l.left,
                    i = e + p - r,
                    s = g.top - l.top,
                    n = s + f - h,
                    o = {
                      target: {
                        element: v,
                        left: g.left,
                        top: g.top,
                        width: p,
                        height: f,
                      },
                      element: {
                        element: a,
                        left: l.left,
                        top: l.top,
                        width: r,
                        height: h,
                      },
                      horizontal: i < 0 ? 'left' : 0 < e ? 'right' : 'center',
                      vertical: n < 0 ? 'top' : 0 < s ? 'bottom' : 'middle',
                    };
                  p < r && D(e + i) < p && (o.horizontal = 'center'),
                    f < h && D(s + n) < f && (o.vertical = 'middle'),
                    x(D(e), D(i)) > x(D(s), D(n))
                      ? (o.important = 'horizontal')
                      : (o.important = 'vertical'),
                    u.using.call(this, t, o);
                }),
              a.offset(k.extend(l, { using: t }));
          })
        );
      }),
      (k.ui.position = {
        fit: {
          left: function (t, e) {
            var i,
              s = e.within,
              n = s.isWindow ? s.scrollLeft : s.offset.left,
              o = s.width,
              a = t.left - e.collisionPosition.marginLeft,
              r = n - a,
              h = a + e.collisionWidth - o - n;
            e.collisionWidth > o
              ? 0 < r && h <= 0
                ? ((i = t.left + r + e.collisionWidth - o - n),
                  (t.left += r - i))
                : (t.left =
                    0 < h && r <= 0 ? n : h < r ? n + o - e.collisionWidth : n)
              : 0 < r
              ? (t.left += r)
              : 0 < h
              ? (t.left -= h)
              : (t.left = x(t.left - a, t.left));
          },
          top: function (t, e) {
            var i,
              s = e.within,
              n = s.isWindow ? s.scrollTop : s.offset.top,
              o = e.within.height,
              a = t.top - e.collisionPosition.marginTop,
              r = n - a,
              h = a + e.collisionHeight - o - n;
            e.collisionHeight > o
              ? 0 < r && h <= 0
                ? ((i = t.top + r + e.collisionHeight - o - n),
                  (t.top += r - i))
                : (t.top =
                    0 < h && r <= 0 ? n : h < r ? n + o - e.collisionHeight : n)
              : 0 < r
              ? (t.top += r)
              : 0 < h
              ? (t.top -= h)
              : (t.top = x(t.top - a, t.top));
          },
        },
        flip: {
          left: function (t, e) {
            var i,
              s,
              n = e.within,
              o = n.offset.left + n.scrollLeft,
              a = n.width,
              r = n.isWindow ? n.scrollLeft : n.offset.left,
              h = t.left - e.collisionPosition.marginLeft,
              l = h - r,
              c = h + e.collisionWidth - a - r,
              u =
                'left' === e.my[0]
                  ? -e.elemWidth
                  : 'right' === e.my[0]
                  ? e.elemWidth
                  : 0,
              d =
                'left' === e.at[0]
                  ? e.targetWidth
                  : 'right' === e.at[0]
                  ? -e.targetWidth
                  : 0,
              p = -2 * e.offset[0];
            l < 0
              ? ((i = t.left + u + d + p + e.collisionWidth - a - o) < 0 ||
                  i < D(l)) &&
                (t.left += u + d + p)
              : 0 < c &&
                (0 <
                  (s =
                    t.left - e.collisionPosition.marginLeft + u + d + p - r) ||
                  D(s) < c) &&
                (t.left += u + d + p);
          },
          top: function (t, e) {
            var i,
              s,
              n = e.within,
              o = n.offset.top + n.scrollTop,
              a = n.height,
              r = n.isWindow ? n.scrollTop : n.offset.top,
              h = t.top - e.collisionPosition.marginTop,
              l = h - r,
              c = h + e.collisionHeight - a - r,
              u =
                'top' === e.my[1]
                  ? -e.elemHeight
                  : 'bottom' === e.my[1]
                  ? e.elemHeight
                  : 0,
              d =
                'top' === e.at[1]
                  ? e.targetHeight
                  : 'bottom' === e.at[1]
                  ? -e.targetHeight
                  : 0,
              p = -2 * e.offset[1];
            l < 0
              ? ((s = t.top + u + d + p + e.collisionHeight - a - o),
                t.top + u + d + p > l &&
                  (s < 0 || s < D(l)) &&
                  (t.top += u + d + p))
              : 0 < c &&
                ((i = t.top - e.collisionPosition.marginTop + u + d + p - r),
                t.top + u + d + p > c &&
                  (0 < i || D(i) < c) &&
                  (t.top += u + d + p));
          },
        },
        flipfit: {
          left: function () {
            k.ui.position.flip.left.apply(this, arguments),
              k.ui.position.fit.left.apply(this, arguments);
          },
          top: function () {
            k.ui.position.flip.top.apply(this, arguments),
              k.ui.position.fit.top.apply(this, arguments);
          },
        },
      }),
      (function () {
        var t,
          e,
          i,
          s,
          n,
          o = document.getElementsByTagName('body')[0],
          a = document.createElement('div');
        for (n in ((t = document.createElement(o ? 'div' : 'body')),
        (i = {
          visibility: 'hidden',
          width: 0,
          height: 0,
          border: 0,
          margin: 0,
          background: 'none',
        }),
        o &&
          k.extend(i, {
            position: 'absolute',
            left: '-1000px',
            top: '-1000px',
          }),
        i))
          t.style[n] = i[n];
        t.appendChild(a),
          (e = o || document.documentElement).insertBefore(t, e.firstChild),
          (a.style.cssText = 'position: absolute; left: 10.7432222px;'),
          (s = k(a).offset().left),
          (k.support.offsetFractions = 10 < s && s < 11),
          (t.innerHTML = ''),
          e.removeChild(t);
      })();
  })(jQuery),
  (function (i, t) {
    i.widget('ui.progressbar', {
      version: '1.10.3',
      options: { max: 100, value: 0, change: null, complete: null },
      min: 0,
      _create: function () {
        (this.oldValue = this.options.value = this._constrainedValue()),
          this.element
            .addClass(
              'ui-progressbar ui-widget ui-widget-content ui-corner-all'
            )
            .attr({ role: 'progressbar', 'aria-valuemin': this.min }),
          (this.valueDiv = i(
            "<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>"
          ).appendTo(this.element)),
          this._refreshValue();
      },
      _destroy: function () {
        this.element
          .removeClass(
            'ui-progressbar ui-widget ui-widget-content ui-corner-all'
          )
          .removeAttr('role')
          .removeAttr('aria-valuemin')
          .removeAttr('aria-valuemax')
          .removeAttr('aria-valuenow'),
          this.valueDiv.remove();
      },
      value: function (t) {
        if (void 0 === t) return this.options.value;
        (this.options.value = this._constrainedValue(t)), this._refreshValue();
      },
      _constrainedValue: function (t) {
        return (
          void 0 === t && (t = this.options.value),
          (this.indeterminate = !1 === t),
          'number' != typeof t && (t = 0),
          !this.indeterminate &&
            Math.min(this.options.max, Math.max(this.min, t))
        );
      },
      _setOptions: function (t) {
        var e = t.value;
        delete t.value,
          this._super(t),
          (this.options.value = this._constrainedValue(e)),
          this._refreshValue();
      },
      _setOption: function (t, e) {
        'max' === t && (e = Math.max(this.min, e)), this._super(t, e);
      },
      _percentage: function () {
        return this.indeterminate
          ? 100
          : (100 * (this.options.value - this.min)) /
              (this.options.max - this.min);
      },
      _refreshValue: function () {
        var t = this.options.value,
          e = this._percentage();
        this.valueDiv
          .toggle(this.indeterminate || t > this.min)
          .toggleClass('ui-corner-right', t === this.options.max)
          .width(e.toFixed(0) + '%'),
          this.element.toggleClass(
            'ui-progressbar-indeterminate',
            this.indeterminate
          ),
          this.indeterminate
            ? (this.element.removeAttr('aria-valuenow'),
              this.overlayDiv ||
                (this.overlayDiv = i(
                  "<div class='ui-progressbar-overlay'></div>"
                ).appendTo(this.valueDiv)))
            : (this.element.attr({
                'aria-valuemax': this.options.max,
                'aria-valuenow': t,
              }),
              this.overlayDiv &&
                (this.overlayDiv.remove(), (this.overlayDiv = null))),
          this.oldValue !== t && ((this.oldValue = t), this._trigger('change')),
          t === this.options.max && this._trigger('complete');
      },
    });
  })(jQuery),
  (function (c, t) {
    c.widget('ui.slider', c.ui.mouse, {
      version: '1.10.3',
      widgetEventPrefix: 'slide',
      options: {
        animate: !1,
        distance: 0,
        max: 100,
        min: 0,
        orientation: 'horizontal',
        range: !1,
        step: 1,
        value: 0,
        values: null,
        change: null,
        slide: null,
        start: null,
        stop: null,
      },
      _create: function () {
        (this._keySliding = !1),
          (this._mouseSliding = !1),
          (this._animateOff = !0),
          (this._handleIndex = null),
          this._detectOrientation(),
          this._mouseInit(),
          this.element.addClass(
            'ui-slider ui-slider-' +
              this.orientation +
              ' ui-widget ui-widget-content ui-corner-all'
          ),
          this._refresh(),
          this._setOption('disabled', this.options.disabled),
          (this._animateOff = !1);
      },
      _refresh: function () {
        this._createRange(),
          this._createHandles(),
          this._setupEvents(),
          this._refreshValue();
      },
      _createHandles: function () {
        var t,
          e,
          i = this.options,
          s = this.element
            .find('.ui-slider-handle')
            .addClass('ui-state-default ui-corner-all'),
          n = [];
        for (
          e = (i.values && i.values.length) || 1,
            s.length > e && (s.slice(e).remove(), (s = s.slice(0, e))),
            t = s.length;
          t < e;
          t++
        )
          n.push(
            "<a class='ui-slider-handle ui-state-default ui-corner-all' href='javascript:void'></a>"
          );
        (this.handles = s.add(c(n.join('')).appendTo(this.element))),
          (this.handle = this.handles.eq(0)),
          this.handles.each(function (t) {
            c(this).data('ui-slider-handle-index', t);
          });
      },
      _createRange: function () {
        var t = this.options,
          e = '';
        t.range
          ? (!0 === t.range &&
              (t.values
                ? t.values.length && 2 !== t.values.length
                  ? (t.values = [t.values[0], t.values[0]])
                  : c.isArray(t.values) && (t.values = t.values.slice(0))
                : (t.values = [this._valueMin(), this._valueMin()])),
            this.range && this.range.length
              ? this.range
                  .removeClass('ui-slider-range-min ui-slider-range-max')
                  .css({ left: '', bottom: '' })
              : ((this.range = c('<div></div>').appendTo(this.element)),
                (e = 'ui-slider-range ui-widget-header ui-corner-all')),
            this.range.addClass(
              e +
                ('min' === t.range || 'max' === t.range
                  ? ' ui-slider-range-' + t.range
                  : '')
            ))
          : (this.range = c([]));
      },
      _setupEvents: function () {
        var t = this.handles.add(this.range).filter('a');
        this._off(t),
          this._on(t, this._handleEvents),
          this._hoverable(t),
          this._focusable(t);
      },
      _destroy: function () {
        this.handles.remove(),
          this.range.remove(),
          this.element.removeClass(
            'ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all'
          ),
          this._mouseDestroy();
      },
      _mouseCapture: function (t) {
        var e,
          i,
          s,
          n,
          o,
          a,
          r,
          h = this,
          l = this.options;
        return (
          !l.disabled &&
          ((this.elementSize = {
            width: this.element.outerWidth(),
            height: this.element.outerHeight(),
          }),
          (this.elementOffset = this.element.offset()),
          (e = { x: t.pageX, y: t.pageY }),
          (i = this._normValueFromMouse(e)),
          (s = this._valueMax() - this._valueMin() + 1),
          this.handles.each(function (t) {
            var e = Math.abs(i - h.values(t));
            (e < s ||
              (s === e &&
                (t === h._lastChangedValue || h.values(t) === l.min))) &&
              ((s = e), (n = c(this)), (o = t));
          }),
          !1 !== this._start(t, o) &&
            ((this._mouseSliding = !0),
            (this._handleIndex = o),
            n.addClass('ui-state-active').focus(),
            (a = n.offset()),
            (r = !c(t.target).parents().addBack().is('.ui-slider-handle')),
            (this._clickOffset = r
              ? { left: 0, top: 0 }
              : {
                  left: t.pageX - a.left - n.width() / 2,
                  top:
                    t.pageY -
                    a.top -
                    n.height() / 2 -
                    (parseInt(n.css('borderTopWidth'), 10) || 0) -
                    (parseInt(n.css('borderBottomWidth'), 10) || 0) +
                    (parseInt(n.css('marginTop'), 10) || 0),
                }),
            this.handles.hasClass('ui-state-hover') || this._slide(t, o, i),
            (this._animateOff = !0)))
        );
      },
      _mouseStart: function () {
        return !0;
      },
      _mouseDrag: function (t) {
        var e = { x: t.pageX, y: t.pageY },
          i = this._normValueFromMouse(e);
        return this._slide(t, this._handleIndex, i), !1;
      },
      _mouseStop: function (t) {
        return (
          this.handles.removeClass('ui-state-active'),
          (this._mouseSliding = !1),
          this._stop(t, this._handleIndex),
          this._change(t, this._handleIndex),
          (this._handleIndex = null),
          (this._clickOffset = null),
          (this._animateOff = !1)
        );
      },
      _detectOrientation: function () {
        this.orientation =
          'vertical' === this.options.orientation ? 'vertical' : 'horizontal';
      },
      _normValueFromMouse: function (t) {
        var e, i, s, n;
        return (
          1 <
            (i =
              ('horizontal' === this.orientation
                ? ((e = this.elementSize.width),
                  t.x -
                    this.elementOffset.left -
                    (this._clickOffset ? this._clickOffset.left : 0))
                : ((e = this.elementSize.height),
                  t.y -
                    this.elementOffset.top -
                    (this._clickOffset ? this._clickOffset.top : 0))) / e) &&
            (i = 1),
          i < 0 && (i = 0),
          'vertical' === this.orientation && (i = 1 - i),
          (s = this._valueMax() - this._valueMin()),
          (n = this._valueMin() + i * s),
          this._trimAlignValue(n)
        );
      },
      _start: function (t, e) {
        var i = { handle: this.handles[e], value: this.value() };
        return (
          this.options.values &&
            this.options.values.length &&
            ((i.value = this.values(e)), (i.values = this.values())),
          this._trigger('start', t, i)
        );
      },
      _slide: function (t, e, i) {
        var s, n, o;
        this.options.values && this.options.values.length
          ? ((s = this.values(e ? 0 : 1)),
            2 === this.options.values.length &&
              !0 === this.options.range &&
              ((0 === e && s < i) || (1 === e && i < s)) &&
              (i = s),
            i !== this.values(e) &&
              (((n = this.values())[e] = i),
              (o = this._trigger('slide', t, {
                handle: this.handles[e],
                value: i,
                values: n,
              })),
              (s = this.values(e ? 0 : 1)),
              !1 !== o && this.values(e, i, !0)))
          : i !== this.value() &&
            !1 !==
              (o = this._trigger('slide', t, {
                handle: this.handles[e],
                value: i,
              })) &&
            this.value(i);
      },
      _stop: function (t, e) {
        var i = { handle: this.handles[e], value: this.value() };
        this.options.values &&
          this.options.values.length &&
          ((i.value = this.values(e)), (i.values = this.values())),
          this._trigger('stop', t, i);
      },
      _change: function (t, e) {
        if (!this._keySliding && !this._mouseSliding) {
          var i = { handle: this.handles[e], value: this.value() };
          this.options.values &&
            this.options.values.length &&
            ((i.value = this.values(e)), (i.values = this.values())),
            (this._lastChangedValue = e),
            this._trigger('change', t, i);
        }
      },
      value: function (t) {
        return arguments.length
          ? ((this.options.value = this._trimAlignValue(t)),
            this._refreshValue(),
            void this._change(null, 0))
          : this._value();
      },
      values: function (t, e) {
        var i, s, n;
        if (1 < arguments.length)
          return (
            (this.options.values[t] = this._trimAlignValue(e)),
            this._refreshValue(),
            void this._change(null, t)
          );
        if (!arguments.length) return this._values();
        if (!c.isArray(t))
          return this.options.values && this.options.values.length
            ? this._values(t)
            : this.value();
        for (i = this.options.values, s = t, n = 0; n < i.length; n += 1)
          (i[n] = this._trimAlignValue(s[n])), this._change(null, n);
        this._refreshValue();
      },
      _setOption: function (t, e) {
        var i,
          s = 0;
        switch (
          ('range' === t &&
            !0 === this.options.range &&
            ('min' === e
              ? ((this.options.value = this._values(0)),
                (this.options.values = null))
              : 'max' === e &&
                ((this.options.value = this._values(
                  this.options.values.length - 1
                )),
                (this.options.values = null))),
          c.isArray(this.options.values) && (s = this.options.values.length),
          c.Widget.prototype._setOption.apply(this, arguments),
          t)
        ) {
          case 'orientation':
            this._detectOrientation(),
              this.element
                .removeClass('ui-slider-horizontal ui-slider-vertical')
                .addClass('ui-slider-' + this.orientation),
              this._refreshValue();
            break;
          case 'value':
            (this._animateOff = !0),
              this._refreshValue(),
              this._change(null, 0),
              (this._animateOff = !1);
            break;
          case 'values':
            for (
              this._animateOff = !0, this._refreshValue(), i = 0;
              i < s;
              i += 1
            )
              this._change(null, i);
            this._animateOff = !1;
            break;
          case 'min':
          case 'max':
            (this._animateOff = !0),
              this._refreshValue(),
              (this._animateOff = !1);
            break;
          case 'range':
            (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
        }
      },
      _value: function () {
        var t = this.options.value;
        return (t = this._trimAlignValue(t));
      },
      _values: function (t) {
        var e, i, s;
        if (arguments.length)
          return (e = this.options.values[t]), (e = this._trimAlignValue(e));
        if (this.options.values && this.options.values.length) {
          for (i = this.options.values.slice(), s = 0; s < i.length; s += 1)
            i[s] = this._trimAlignValue(i[s]);
          return i;
        }
        return [];
      },
      _trimAlignValue: function (t) {
        if (t <= this._valueMin()) return this._valueMin();
        if (t >= this._valueMax()) return this._valueMax();
        var e = 0 < this.options.step ? this.options.step : 1,
          i = (t - this._valueMin()) % e,
          s = t - i;
        return (
          2 * Math.abs(i) >= e && (s += 0 < i ? e : -e),
          parseFloat(s.toFixed(5))
        );
      },
      _valueMin: function () {
        return this.options.min;
      },
      _valueMax: function () {
        return this.options.max;
      },
      _refreshValue: function () {
        var e,
          i,
          t,
          s,
          n,
          o = this.options.range,
          a = this.options,
          r = this,
          h = !this._animateOff && a.animate,
          l = {};
        this.options.values && this.options.values.length
          ? this.handles.each(function (t) {
              (i =
                ((r.values(t) - r._valueMin()) /
                  (r._valueMax() - r._valueMin())) *
                100),
                (l['horizontal' === r.orientation ? 'left' : 'bottom'] =
                  i + '%'),
                c(this).stop(1, 1)[h ? 'animate' : 'css'](l, a.animate),
                !0 === r.options.range &&
                  ('horizontal' === r.orientation
                    ? (0 === t &&
                        r.range
                          .stop(1, 1)
                          [h ? 'animate' : 'css']({ left: i + '%' }, a.animate),
                      1 === t &&
                        r.range[h ? 'animate' : 'css'](
                          { width: i - e + '%' },
                          { queue: !1, duration: a.animate }
                        ))
                    : (0 === t &&
                        r.range
                          .stop(1, 1)
                          [h ? 'animate' : 'css'](
                            { bottom: i + '%' },
                            a.animate
                          ),
                      1 === t &&
                        r.range[h ? 'animate' : 'css'](
                          { height: i - e + '%' },
                          { queue: !1, duration: a.animate }
                        ))),
                (e = i);
            })
          : ((t = this.value()),
            (s = this._valueMin()),
            (n = this._valueMax()),
            (i = n !== s ? ((t - s) / (n - s)) * 100 : 0),
            (l['horizontal' === this.orientation ? 'left' : 'bottom'] =
              i + '%'),
            this.handle.stop(1, 1)[h ? 'animate' : 'css'](l, a.animate),
            'min' === o &&
              'horizontal' === this.orientation &&
              this.range
                .stop(1, 1)
                [h ? 'animate' : 'css']({ width: i + '%' }, a.animate),
            'max' === o &&
              'horizontal' === this.orientation &&
              this.range[h ? 'animate' : 'css'](
                { width: 100 - i + '%' },
                { queue: !1, duration: a.animate }
              ),
            'min' === o &&
              'vertical' === this.orientation &&
              this.range
                .stop(1, 1)
                [h ? 'animate' : 'css']({ height: i + '%' }, a.animate),
            'max' === o &&
              'vertical' === this.orientation &&
              this.range[h ? 'animate' : 'css'](
                { height: 100 - i + '%' },
                { queue: !1, duration: a.animate }
              ));
      },
      _handleEvents: {
        keydown: function (t) {
          var e,
            i,
            s,
            n = c(t.target).data('ui-slider-handle-index');
          switch (t.keyCode) {
            case c.ui.keyCode.HOME:
            case c.ui.keyCode.END:
            case c.ui.keyCode.PAGE_UP:
            case c.ui.keyCode.PAGE_DOWN:
            case c.ui.keyCode.UP:
            case c.ui.keyCode.RIGHT:
            case c.ui.keyCode.DOWN:
            case c.ui.keyCode.LEFT:
              if (
                (t.preventDefault(),
                !this._keySliding &&
                  ((this._keySliding = !0),
                  c(t.target).addClass('ui-state-active'),
                  !1 === this._start(t, n)))
              )
                return;
          }
          switch (
            ((s = this.options.step),
            (e = i =
              this.options.values && this.options.values.length
                ? this.values(n)
                : this.value()),
            t.keyCode)
          ) {
            case c.ui.keyCode.HOME:
              i = this._valueMin();
              break;
            case c.ui.keyCode.END:
              i = this._valueMax();
              break;
            case c.ui.keyCode.PAGE_UP:
              i = this._trimAlignValue(
                e + (this._valueMax() - this._valueMin()) / 5
              );
              break;
            case c.ui.keyCode.PAGE_DOWN:
              i = this._trimAlignValue(
                e - (this._valueMax() - this._valueMin()) / 5
              );
              break;
            case c.ui.keyCode.UP:
            case c.ui.keyCode.RIGHT:
              if (e === this._valueMax()) return;
              i = this._trimAlignValue(e + s);
              break;
            case c.ui.keyCode.DOWN:
            case c.ui.keyCode.LEFT:
              if (e === this._valueMin()) return;
              i = this._trimAlignValue(e - s);
          }
          this._slide(t, n, i);
        },
        click: function (t) {
          t.preventDefault();
        },
        keyup: function (t) {
          var e = c(t.target).data('ui-slider-handle-index');
          this._keySliding &&
            ((this._keySliding = !1),
            this._stop(t, e),
            this._change(t, e),
            c(t.target).removeClass('ui-state-active'));
        },
      },
    });
  })(jQuery),
  (function (o) {
    function e(e) {
      return function () {
        var t = this.element.val();
        e.apply(this, arguments),
          this._refresh(),
          t !== this.element.val() && this._trigger('change');
      };
    }
    o.widget('ui.spinner', {
      version: '1.10.3',
      defaultElement: '<input>',
      widgetEventPrefix: 'spin',
      options: {
        culture: null,
        icons: { down: 'ui-icon-triangle-1-s', up: 'ui-icon-triangle-1-n' },
        incremental: !0,
        max: null,
        min: null,
        numberFormat: null,
        page: 10,
        step: 1,
        change: null,
        spin: null,
        start: null,
        stop: null,
      },
      _create: function () {
        this._setOption('max', this.options.max),
          this._setOption('min', this.options.min),
          this._setOption('step', this.options.step),
          this._value(this.element.val(), !0),
          this._draw(),
          this._on(this._events),
          this._refresh(),
          this._on(this.window, {
            beforeunload: function () {
              this.element.removeAttr('autocomplete');
            },
          });
      },
      _getCreateOptions: function () {
        var s = {},
          n = this.element;
        return (
          o.each(['min', 'max', 'step'], function (t, e) {
            var i = n.attr(e);
            i !== undefined && i.length && (s[e] = i);
          }),
          s
        );
      },
      _events: {
        keydown: function (t) {
          this._start(t) && this._keydown(t) && t.preventDefault();
        },
        keyup: '_stop',
        focus: function () {
          this.previous = this.element.val();
        },
        blur: function (t) {
          this.cancelBlur
            ? delete this.cancelBlur
            : (this._stop(),
              this._refresh(),
              this.previous !== this.element.val() &&
                this._trigger('change', t));
        },
        mousewheel: function (t, e) {
          if (e) {
            if (!this.spinning && !this._start(t)) return !1;
            this._spin((0 < e ? 1 : -1) * this.options.step, t),
              clearTimeout(this.mousewheelTimer),
              (this.mousewheelTimer = this._delay(function () {
                this.spinning && this._stop(t);
              }, 100)),
              t.preventDefault();
          }
        },
        'mousedown .ui-spinner-button': function (t) {
          var e;
          function i() {
            this.element[0] === this.document[0].activeElement ||
              (this.element.focus(),
              (this.previous = e),
              this._delay(function () {
                this.previous = e;
              }));
          }
          (e =
            this.element[0] === this.document[0].activeElement
              ? this.previous
              : this.element.val()),
            t.preventDefault(),
            i.call(this),
            (this.cancelBlur = !0),
            this._delay(function () {
              delete this.cancelBlur, i.call(this);
            }),
            !1 !== this._start(t) &&
              this._repeat(
                null,
                o(t.currentTarget).hasClass('ui-spinner-up') ? 1 : -1,
                t
              );
        },
        'mouseup .ui-spinner-button': '_stop',
        'mouseenter .ui-spinner-button': function (t) {
          if (o(t.currentTarget).hasClass('ui-state-active'))
            return (
              !1 !== this._start(t) &&
              void this._repeat(
                null,
                o(t.currentTarget).hasClass('ui-spinner-up') ? 1 : -1,
                t
              )
            );
        },
        'mouseleave .ui-spinner-button': '_stop',
      },
      _draw: function () {
        var t = (this.uiSpinner = this.element
          .addClass('ui-spinner-input')
          .attr('autocomplete', 'off')
          .wrap(this._uiSpinnerHtml())
          .parent()
          .append(this._buttonHtml()));
        this.element.attr('role', 'spinbutton'),
          (this.buttons = t
            .find('.ui-spinner-button')
            .attr('tabIndex', -1)
            .button()
            .removeClass('ui-corner-all')),
          this.buttons.height() > Math.ceil(0.5 * t.height()) &&
            0 < t.height() &&
            t.height(t.height()),
          this.options.disabled && this.disable();
      },
      _keydown: function (t) {
        var e = this.options,
          i = o.ui.keyCode;
        switch (t.keyCode) {
          case i.UP:
            return this._repeat(null, 1, t), !0;
          case i.DOWN:
            return this._repeat(null, -1, t), !0;
          case i.PAGE_UP:
            return this._repeat(null, e.page, t), !0;
          case i.PAGE_DOWN:
            return this._repeat(null, -e.page, t), !0;
        }
        return !1;
      },
      _uiSpinnerHtml: function () {
        return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>";
      },
      _buttonHtml: function () {
        return (
          "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " +
          this.options.icons.up +
          "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " +
          this.options.icons.down +
          "'>&#9660;</span></a>"
        );
      },
      _start: function (t) {
        return (
          !(!this.spinning && !1 === this._trigger('start', t)) &&
          (this.counter || (this.counter = 1), (this.spinning = !0))
        );
      },
      _repeat: function (t, e, i) {
        (t = t || 500),
          clearTimeout(this.timer),
          (this.timer = this._delay(function () {
            this._repeat(40, e, i);
          }, t)),
          this._spin(e * this.options.step, i);
      },
      _spin: function (t, e) {
        var i = this.value() || 0;
        this.counter || (this.counter = 1),
          (i = this._adjustValue(i + t * this._increment(this.counter))),
          (this.spinning && !1 === this._trigger('spin', e, { value: i })) ||
            (this._value(i), this.counter++);
      },
      _increment: function (t) {
        var e = this.options.incremental;
        return e
          ? o.isFunction(e)
            ? e(t)
            : Math.floor((t * t * t) / 5e4 - (t * t) / 500 + (17 * t) / 200 + 1)
          : 1;
      },
      _precision: function () {
        var t = this._precisionOf(this.options.step);
        return (
          null !== this.options.min &&
            (t = Math.max(t, this._precisionOf(this.options.min))),
          t
        );
      },
      _precisionOf: function (t) {
        var e = t.toString(),
          i = e.indexOf('.');
        return -1 === i ? 0 : e.length - i - 1;
      },
      _adjustValue: function (t) {
        var e,
          i,
          s = this.options;
        return (
          (i = t - (e = null !== s.min ? s.min : 0)),
          (t = e + (i = Math.round(i / s.step) * s.step)),
          (t = parseFloat(t.toFixed(this._precision()))),
          null !== s.max && t > s.max
            ? s.max
            : null !== s.min && t < s.min
            ? s.min
            : t
        );
      },
      _stop: function (t) {
        this.spinning &&
          (clearTimeout(this.timer),
          clearTimeout(this.mousewheelTimer),
          (this.counter = 0),
          (this.spinning = !1),
          this._trigger('stop', t));
      },
      _setOption: function (t, e) {
        if ('culture' === t || 'numberFormat' === t) {
          var i = this._parse(this.element.val());
          return (this.options[t] = e), void this.element.val(this._format(i));
        }
        ('max' !== t && 'min' !== t && 'step' !== t) ||
          ('string' == typeof e && (e = this._parse(e))),
          'icons' === t &&
            (this.buttons
              .first()
              .find('.ui-icon')
              .removeClass(this.options.icons.up)
              .addClass(e.up),
            this.buttons
              .last()
              .find('.ui-icon')
              .removeClass(this.options.icons.down)
              .addClass(e.down)),
          this._super(t, e),
          'disabled' === t &&
            (e
              ? (this.element.prop('disabled', !0),
                this.buttons.button('disable'))
              : (this.element.prop('disabled', !1),
                this.buttons.button('enable')));
      },
      _setOptions: e(function (t) {
        this._super(t), this._value(this.element.val());
      }),
      _parse: function (t) {
        return (
          'string' == typeof t &&
            '' !== t &&
            (t =
              window.Globalize && this.options.numberFormat
                ? Globalize.parseFloat(t, 10, this.options.culture)
                : +t),
          '' === t || isNaN(t) ? null : t
        );
      },
      _format: function (t) {
        return '' === t
          ? ''
          : window.Globalize && this.options.numberFormat
          ? Globalize.format(t, this.options.numberFormat, this.options.culture)
          : t;
      },
      _refresh: function () {
        this.element.attr({
          'aria-valuemin': this.options.min,
          'aria-valuemax': this.options.max,
          'aria-valuenow': this._parse(this.element.val()),
        });
      },
      _value: function (t, e) {
        var i;
        '' !== t &&
          null !== (i = this._parse(t)) &&
          (e || (i = this._adjustValue(i)), (t = this._format(i))),
          this.element.val(t),
          this._refresh();
      },
      _destroy: function () {
        this.element
          .removeClass('ui-spinner-input')
          .prop('disabled', !1)
          .removeAttr('autocomplete')
          .removeAttr('role')
          .removeAttr('aria-valuemin')
          .removeAttr('aria-valuemax')
          .removeAttr('aria-valuenow'),
          this.uiSpinner.replaceWith(this.element);
      },
      stepUp: e(function (t) {
        this._stepUp(t);
      }),
      _stepUp: function (t) {
        this._start() &&
          (this._spin((t || 1) * this.options.step), this._stop());
      },
      stepDown: e(function (t) {
        this._stepDown(t);
      }),
      _stepDown: function (t) {
        this._start() &&
          (this._spin((t || 1) * -this.options.step), this._stop());
      },
      pageUp: e(function (t) {
        this._stepUp((t || 1) * this.options.page);
      }),
      pageDown: e(function (t) {
        this._stepDown((t || 1) * this.options.page);
      }),
      value: function (t) {
        if (!arguments.length) return this._parse(this.element.val());
        e(this._value).call(this, t);
      },
      widget: function () {
        return this.uiSpinner;
      },
    });
  })(jQuery),
  (function (l, t) {
    var i = 0,
      e = /#.*$/;
    function c(t) {
      return (
        1 < t.hash.length &&
        decodeURIComponent(t.href.replace(e, '')) ===
          decodeURIComponent(location.href.replace(e, ''))
      );
    }
    l.widget('ui.tabs', {
      version: '1.10.3',
      delay: 300,
      options: {
        active: null,
        collapsible: !1,
        event: 'click',
        heightStyle: 'content',
        hide: null,
        show: null,
        activate: null,
        beforeActivate: null,
        beforeLoad: null,
        load: null,
      },
      _create: function () {
        var e = this,
          t = this.options;
        (this.running = !1),
          this.element
            .addClass('ui-tabs ui-widget ui-widget-content ui-corner-all')
            .toggleClass('ui-tabs-collapsible', t.collapsible)
            .delegate(
              '.ui-tabs-nav > li',
              'mousedown' + this.eventNamespace,
              function (t) {
                l(this).is('.ui-state-disabled') && t.preventDefault();
              }
            )
            .delegate(
              '.ui-tabs-anchor',
              'focus' + this.eventNamespace,
              function () {
                l(this).closest('li').is('.ui-state-disabled') && this.blur();
              }
            ),
          this._processTabs(),
          (t.active = this._initialActive()),
          l.isArray(t.disabled) &&
            (t.disabled = l
              .unique(
                t.disabled.concat(
                  l.map(this.tabs.filter('.ui-state-disabled'), function (t) {
                    return e.tabs.index(t);
                  })
                )
              )
              .sort()),
          !1 !== this.options.active && this.anchors.length
            ? (this.active = this._findActive(t.active))
            : (this.active = l()),
          this._refresh(),
          this.active.length && this.load(t.active);
      },
      _initialActive: function () {
        var i = this.options.active,
          t = this.options.collapsible,
          s = location.hash.substring(1);
        return (
          null === i &&
            (s &&
              this.tabs.each(function (t, e) {
                if (l(e).attr('aria-controls') === s) return (i = t), !1;
              }),
            null === i &&
              (i = this.tabs.index(this.tabs.filter('.ui-tabs-active'))),
            (null !== i && -1 !== i) || (i = !!this.tabs.length && 0)),
          !1 !== i &&
            -1 === (i = this.tabs.index(this.tabs.eq(i))) &&
            (i = !t && 0),
          !t && !1 === i && this.anchors.length && (i = 0),
          i
        );
      },
      _getCreateEventData: function () {
        return {
          tab: this.active,
          panel: this.active.length ? this._getPanelForTab(this.active) : l(),
        };
      },
      _tabKeydown: function (t) {
        var e = l(this.document[0].activeElement).closest('li'),
          i = this.tabs.index(e),
          s = !0;
        if (!this._handlePageNav(t)) {
          switch (t.keyCode) {
            case l.ui.keyCode.RIGHT:
            case l.ui.keyCode.DOWN:
              i++;
              break;
            case l.ui.keyCode.UP:
            case l.ui.keyCode.LEFT:
              (s = !1), i--;
              break;
            case l.ui.keyCode.END:
              i = this.anchors.length - 1;
              break;
            case l.ui.keyCode.HOME:
              i = 0;
              break;
            case l.ui.keyCode.SPACE:
              return (
                t.preventDefault(),
                clearTimeout(this.activating),
                void this._activate(i)
              );
            case l.ui.keyCode.ENTER:
              return (
                t.preventDefault(),
                clearTimeout(this.activating),
                void this._activate(i !== this.options.active && i)
              );
            default:
              return;
          }
          t.preventDefault(),
            clearTimeout(this.activating),
            (i = this._focusNextTab(i, s)),
            t.ctrlKey ||
              (e.attr('aria-selected', 'false'),
              this.tabs.eq(i).attr('aria-selected', 'true'),
              (this.activating = this._delay(function () {
                this.option('active', i);
              }, this.delay)));
        }
      },
      _panelKeydown: function (t) {
        this._handlePageNav(t) ||
          (t.ctrlKey &&
            t.keyCode === l.ui.keyCode.UP &&
            (t.preventDefault(), this.active.focus()));
      },
      _handlePageNav: function (t) {
        return t.altKey && t.keyCode === l.ui.keyCode.PAGE_UP
          ? (this._activate(this._focusNextTab(this.options.active - 1, !1)),
            !0)
          : t.altKey && t.keyCode === l.ui.keyCode.PAGE_DOWN
          ? (this._activate(this._focusNextTab(this.options.active + 1, !0)),
            !0)
          : void 0;
      },
      _findNextTab: function (t, e) {
        var i = this.tabs.length - 1;
        for (
          ;
          -1 !==
          l.inArray(
            (i < t && (t = 0), t < 0 && (t = i), t),
            this.options.disabled
          );

        )
          t = e ? t + 1 : t - 1;
        return t;
      },
      _focusNextTab: function (t, e) {
        return (t = this._findNextTab(t, e)), this.tabs.eq(t).focus(), t;
      },
      _setOption: function (t, e) {
        'active' !== t
          ? 'disabled' !== t
            ? (this._super(t, e),
              'collapsible' === t &&
                (this.element.toggleClass('ui-tabs-collapsible', e),
                e || !1 !== this.options.active || this._activate(0)),
              'event' === t && this._setupEvents(e),
              'heightStyle' === t && this._setupHeightStyle(e))
            : this._setupDisabled(e)
          : this._activate(e);
      },
      _tabId: function (t) {
        return (
          t.attr('aria-controls') ||
          'ui-tabs-' +
            (function e() {
              return ++i;
            })()
        );
      },
      _sanitizeSelector: function (t) {
        return t
          ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, '\\$&')
          : '';
      },
      refresh: function () {
        var t = this.options,
          e = this.tablist.children(':has(a[href])');
        (t.disabled = l.map(e.filter('.ui-state-disabled'), function (t) {
          return e.index(t);
        })),
          this._processTabs(),
          !1 !== t.active && this.anchors.length
            ? this.active.length && !l.contains(this.tablist[0], this.active[0])
              ? this.tabs.length === t.disabled.length
                ? ((t.active = !1), (this.active = l()))
                : this._activate(
                    this._findNextTab(Math.max(0, t.active - 1), !1)
                  )
              : (t.active = this.tabs.index(this.active))
            : ((t.active = !1), (this.active = l())),
          this._refresh();
      },
      _refresh: function () {
        this._setupDisabled(this.options.disabled),
          this._setupEvents(this.options.event),
          this._setupHeightStyle(this.options.heightStyle),
          this.tabs
            .not(this.active)
            .attr({ 'aria-selected': 'false', tabIndex: -1 }),
          this.panels
            .not(this._getPanelForTab(this.active))
            .hide()
            .attr({ 'aria-expanded': 'false', 'aria-hidden': 'true' }),
          this.active.length
            ? (this.active
                .addClass('ui-tabs-active ui-state-active')
                .attr({ 'aria-selected': 'true', tabIndex: 0 }),
              this._getPanelForTab(this.active)
                .show()
                .attr({ 'aria-expanded': 'true', 'aria-hidden': 'false' }))
            : this.tabs.eq(0).attr('tabIndex', 0);
      },
      _processTabs: function () {
        var h = this;
        (this.tablist = this._getList()
          .addClass(
            'ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all'
          )
          .attr('role', 'tablist')),
          (this.tabs = this.tablist
            .find('> li:has(a[href])')
            .addClass('ui-state-default ui-corner-top')
            .attr({ role: 'tab', tabIndex: -1 })),
          (this.anchors = this.tabs
            .map(function () {
              return l('a', this)[0];
            })
            .addClass('ui-tabs-anchor')
            .attr({ role: 'presentation', tabIndex: -1 })),
          (this.panels = l()),
          this.anchors.each(function (t, e) {
            var i,
              s,
              n,
              o = l(e).uniqueId().attr('id'),
              a = l(e).closest('li'),
              r = a.attr('aria-controls');
            c(e)
              ? ((i = e.hash), (s = h.element.find(h._sanitizeSelector(i))))
              : ((i = '#' + (n = h._tabId(a))),
                (s = h.element.find(i)).length ||
                  (s = h._createPanel(n)).insertAfter(
                    h.panels[t - 1] || h.tablist
                  ),
                s.attr('aria-live', 'polite')),
              s.length && (h.panels = h.panels.add(s)),
              r && a.data('ui-tabs-aria-controls', r),
              a.attr({ 'aria-controls': i.substring(1), 'aria-labelledby': o }),
              s.attr('aria-labelledby', o);
          }),
          this.panels
            .addClass('ui-tabs-panel ui-widget-content ui-corner-bottom')
            .attr('role', 'tabpanel');
      },
      _getList: function () {
        return this.element.find('ol,ul').eq(0);
      },
      _createPanel: function (t) {
        return l('<div>')
          .attr('id', t)
          .addClass('ui-tabs-panel ui-widget-content ui-corner-bottom')
          .data('ui-tabs-destroy', !0);
      },
      _setupDisabled: function (t) {
        l.isArray(t) &&
          (t.length ? t.length === this.anchors.length && (t = !0) : (t = !1));
        for (var e, i = 0; (e = this.tabs[i]); i++)
          !0 === t || -1 !== l.inArray(i, t)
            ? l(e).addClass('ui-state-disabled').attr('aria-disabled', 'true')
            : l(e).removeClass('ui-state-disabled').removeAttr('aria-disabled');
        this.options.disabled = t;
      },
      _setupEvents: function (t) {
        var i = {
          click: function (t) {
            t.preventDefault();
          },
        };
        t &&
          l.each(t.split(' '), function (t, e) {
            i[e] = '_eventHandler';
          }),
          this._off(this.anchors.add(this.tabs).add(this.panels)),
          this._on(this.anchors, i),
          this._on(this.tabs, { keydown: '_tabKeydown' }),
          this._on(this.panels, { keydown: '_panelKeydown' }),
          this._focusable(this.tabs),
          this._hoverable(this.tabs);
      },
      _setupHeightStyle: function (t) {
        var i,
          e = this.element.parent();
        'fill' === t
          ? ((i = e.height()),
            (i -= this.element.outerHeight() - this.element.height()),
            this.element.siblings(':visible').each(function () {
              var t = l(this),
                e = t.css('position');
              'absolute' !== e && 'fixed' !== e && (i -= t.outerHeight(!0));
            }),
            this.element
              .children()
              .not(this.panels)
              .each(function () {
                i -= l(this).outerHeight(!0);
              }),
            this.panels
              .each(function () {
                l(this).height(
                  Math.max(0, i - l(this).innerHeight() + l(this).height())
                );
              })
              .css('overflow', 'auto'))
          : 'auto' === t &&
            ((i = 0),
            this.panels
              .each(function () {
                i = Math.max(i, l(this).height('').height());
              })
              .height(i));
      },
      _eventHandler: function (t) {
        var e = this.options,
          i = this.active,
          s = l(t.currentTarget).closest('li'),
          n = s[0] === i[0],
          o = n && e.collapsible,
          a = o ? l() : this._getPanelForTab(s),
          r = i.length ? this._getPanelForTab(i) : l(),
          h = { oldTab: i, oldPanel: r, newTab: o ? l() : s, newPanel: a };
        t.preventDefault(),
          s.hasClass('ui-state-disabled') ||
            s.hasClass('ui-tabs-loading') ||
            this.running ||
            (n && !e.collapsible) ||
            !1 === this._trigger('beforeActivate', t, h) ||
            ((e.active = !o && this.tabs.index(s)),
            (this.active = n ? l() : s),
            this.xhr && this.xhr.abort(),
            r.length ||
              a.length ||
              l.error('jQuery UI Tabs: Mismatching fragment identifier.'),
            a.length && this.load(this.tabs.index(s), t),
            this._toggle(t, h));
      },
      _toggle: function (t, e) {
        var i = this,
          s = e.newPanel,
          n = e.oldPanel;
        function o() {
          (i.running = !1), i._trigger('activate', t, e);
        }
        function a() {
          e.newTab.closest('li').addClass('ui-tabs-active ui-state-active'),
            s.length && i.options.show
              ? i._show(s, i.options.show, o)
              : (s.show(), o());
        }
        (this.running = !0),
          n.length && this.options.hide
            ? this._hide(n, this.options.hide, function () {
                e.oldTab
                  .closest('li')
                  .removeClass('ui-tabs-active ui-state-active'),
                  a();
              })
            : (e.oldTab
                .closest('li')
                .removeClass('ui-tabs-active ui-state-active'),
              n.hide(),
              a()),
          n.attr({ 'aria-expanded': 'false', 'aria-hidden': 'true' }),
          e.oldTab.attr('aria-selected', 'false'),
          s.length && n.length
            ? e.oldTab.attr('tabIndex', -1)
            : s.length &&
              this.tabs
                .filter(function () {
                  return 0 === l(this).attr('tabIndex');
                })
                .attr('tabIndex', -1),
          s.attr({ 'aria-expanded': 'true', 'aria-hidden': 'false' }),
          e.newTab.attr({ 'aria-selected': 'true', tabIndex: 0 });
      },
      _activate: function (t) {
        var e,
          i = this._findActive(t);
        i[0] !== this.active[0] &&
          (i.length || (i = this.active),
          (e = i.find('.ui-tabs-anchor')[0]),
          this._eventHandler({
            target: e,
            currentTarget: e,
            preventDefault: l.noop,
          }));
      },
      _findActive: function (t) {
        return !1 === t ? l() : this.tabs.eq(t);
      },
      _getIndex: function (t) {
        return (
          'string' == typeof t &&
            (t = this.anchors.index(
              this.anchors.filter("[href$='" + t + "']")
            )),
          t
        );
      },
      _destroy: function () {
        this.xhr && this.xhr.abort(),
          this.element.removeClass(
            'ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible'
          ),
          this.tablist
            .removeClass(
              'ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all'
            )
            .removeAttr('role'),
          this.anchors
            .removeClass('ui-tabs-anchor')
            .removeAttr('role')
            .removeAttr('tabIndex')
            .removeUniqueId(),
          this.tabs.add(this.panels).each(function () {
            l.data(this, 'ui-tabs-destroy')
              ? l(this).remove()
              : l(this)
                  .removeClass(
                    'ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel'
                  )
                  .removeAttr('tabIndex')
                  .removeAttr('aria-live')
                  .removeAttr('aria-busy')
                  .removeAttr('aria-selected')
                  .removeAttr('aria-labelledby')
                  .removeAttr('aria-hidden')
                  .removeAttr('aria-expanded')
                  .removeAttr('role');
          }),
          this.tabs.each(function () {
            var t = l(this),
              e = t.data('ui-tabs-aria-controls');
            e
              ? t.attr('aria-controls', e).removeData('ui-tabs-aria-controls')
              : t.removeAttr('aria-controls');
          }),
          this.panels.show(),
          'content' !== this.options.heightStyle &&
            this.panels.css('height', '');
      },
      enable: function (i) {
        var t = this.options.disabled;
        !1 !== t &&
          ((t =
            void 0 !== i &&
            ((i = this._getIndex(i)),
            l.isArray(t)
              ? l.map(t, function (t) {
                  return t !== i ? t : null;
                })
              : l.map(this.tabs, function (t, e) {
                  return e !== i ? e : null;
                }))),
          this._setupDisabled(t));
      },
      disable: function (t) {
        var e = this.options.disabled;
        if (!0 !== e) {
          if (void 0 === t) e = !0;
          else {
            if (((t = this._getIndex(t)), -1 !== l.inArray(t, e))) return;
            e = l.isArray(e) ? l.merge([t], e).sort() : [t];
          }
          this._setupDisabled(e);
        }
      },
      load: function (t, e) {
        t = this._getIndex(t);
        var i = this,
          s = this.tabs.eq(t),
          n = s.find('.ui-tabs-anchor'),
          o = this._getPanelForTab(s),
          a = { tab: s, panel: o };
        c(n[0]) ||
          ((this.xhr = l.ajax(this._ajaxSettings(n, e, a))),
          this.xhr &&
            'canceled' !== this.xhr.statusText &&
            (s.addClass('ui-tabs-loading'),
            o.attr('aria-busy', 'true'),
            this.xhr
              .success(function (t) {
                setTimeout(function () {
                  o.html(t), i._trigger('load', e, a);
                }, 1);
              })
              .complete(function (t, e) {
                setTimeout(function () {
                  'abort' === e && i.panels.stop(!1, !0),
                    s.removeClass('ui-tabs-loading'),
                    o.removeAttr('aria-busy'),
                    t === i.xhr && delete i.xhr;
                }, 1);
              })));
      },
      _ajaxSettings: function (t, i, s) {
        var n = this;
        return {
          url: t.attr('href'),
          beforeSend: function (t, e) {
            return n._trigger(
              'beforeLoad',
              i,
              l.extend({ jqXHR: t, ajaxSettings: e }, s)
            );
          },
        };
      },
      _getPanelForTab: function (t) {
        var e = l(t).attr('aria-controls');
        return this.element.find(this._sanitizeSelector('#' + e));
      },
    });
  })(jQuery),
  (function (l) {
    var s = 0;
    l.widget('ui.tooltip', {
      version: '1.10.3',
      options: {
        content: function () {
          var t = l(this).attr('title') || '';
          return l('<a>').text(t).html();
        },
        hide: !0,
        items: '[title]:not([disabled])',
        position: {
          my: 'left top+15',
          at: 'left bottom',
          collision: 'flipfit flip',
        },
        show: !0,
        tooltipClass: null,
        track: !1,
        close: null,
        open: null,
      },
      _create: function () {
        this._on({ mouseover: 'open', focusin: 'open' }),
          (this.tooltips = {}),
          (this.parents = {}),
          this.options.disabled && this._disable();
      },
      _setOption: function (t, e) {
        var i = this;
        if ('disabled' === t)
          return this[e ? '_disable' : '_enable'](), void (this.options[t] = e);
        this._super(t, e),
          'content' === t &&
            l.each(this.tooltips, function (t, e) {
              i._updateContent(e);
            });
      },
      _disable: function () {
        var s = this;
        l.each(this.tooltips, function (t, e) {
          var i = l.Event('blur');
          (i.target = i.currentTarget = e[0]), s.close(i, !0);
        }),
          this.element
            .find(this.options.items)
            .addBack()
            .each(function () {
              var t = l(this);
              t.is('[title]') &&
                t.data('ui-tooltip-title', t.attr('title')).attr('title', '');
            });
      },
      _enable: function () {
        this.element
          .find(this.options.items)
          .addBack()
          .each(function () {
            var t = l(this);
            t.data('ui-tooltip-title') &&
              t.attr('title', t.data('ui-tooltip-title'));
          });
      },
      open: function (t) {
        var i = this,
          e = l(t ? t.target : this.element).closest(this.options.items);
        e.length &&
          !e.data('ui-tooltip-id') &&
          (e.attr('title') && e.data('ui-tooltip-title', e.attr('title')),
          e.data('ui-tooltip-open', !0),
          t &&
            'mouseover' === t.type &&
            e.parents().each(function () {
              var t,
                e = l(this);
              e.data('ui-tooltip-open') &&
                (((t = l.Event('blur')).target = t.currentTarget = this),
                i.close(t, !0)),
                e.attr('title') &&
                  (e.uniqueId(),
                  (i.parents[this.id] = {
                    element: this,
                    title: e.attr('title'),
                  }),
                  e.attr('title', ''));
            }),
          this._updateContent(e, t));
      },
      _updateContent: function (e, i) {
        var t,
          s = this.options.content,
          n = this,
          o = i ? i.type : null;
        if ('string' == typeof s) return this._open(i, e, s);
        (t = s.call(e[0], function (t) {
          e.data('ui-tooltip-open') &&
            n._delay(function () {
              i && (i.type = o), this._open(i, e, t);
            });
        })) && this._open(i, e, t);
      },
      _open: function (t, i, e) {
        var s,
          n,
          o,
          a = l.extend({}, this.options.position);
        function r(t) {
          (a.of = t), s.is(':hidden') || s.position(a);
        }
        e &&
          ((s = this._find(i)).length
            ? s.find('.ui-tooltip-content').html(e)
            : (i.is('[title]') &&
                (t && 'mouseover' === t.type
                  ? i.attr('title', '')
                  : i.removeAttr('title')),
              (s = this._tooltip(i)),
              (function h(t, e) {
                var i = (t.attr('aria-describedby') || '').split(/\s+/);
                i.push(e),
                  t
                    .data('ui-tooltip-id', e)
                    .attr('aria-describedby', l.trim(i.join(' ')));
              })(i, s.attr('id')),
              s.find('.ui-tooltip-content').html(e),
              this.options.track && t && /^mouse/.test(t.type)
                ? (this._on(this.document, { mousemove: r }), r(t))
                : s.position(l.extend({ of: i }, this.options.position)),
              s.hide(),
              this._show(s, this.options.show),
              this.options.show &&
                this.options.show.delay &&
                (o = this.delayedShow =
                  setInterval(function () {
                    s.is(':visible') && (r(a.of), clearInterval(o));
                  }, l.fx.interval)),
              this._trigger('open', t, { tooltip: s }),
              (n = {
                keyup: function (t) {
                  if (t.keyCode === l.ui.keyCode.ESCAPE) {
                    var e = l.Event(t);
                    (e.currentTarget = i[0]), this.close(e, !0);
                  }
                },
                remove: function () {
                  this._removeTooltip(s);
                },
              }),
              (t && 'mouseover' !== t.type) || (n.mouseleave = 'close'),
              (t && 'focusin' !== t.type) || (n.focusout = 'close'),
              this._on(!0, i, n)));
      },
      close: function (t) {
        var i = this,
          e = l(t ? t.currentTarget : this.element),
          s = this._find(e);
        this.closing ||
          (clearInterval(this.delayedShow),
          e.data('ui-tooltip-title') &&
            e.attr('title', e.data('ui-tooltip-title')),
          (function n(t) {
            var e = t.data('ui-tooltip-id'),
              i = (t.attr('aria-describedby') || '').split(/\s+/),
              s = l.inArray(e, i);
            -1 !== s && i.splice(s, 1),
              t.removeData('ui-tooltip-id'),
              (i = l.trim(i.join(' ')))
                ? t.attr('aria-describedby', i)
                : t.removeAttr('aria-describedby');
          })(e),
          s.stop(!0),
          this._hide(s, this.options.hide, function () {
            i._removeTooltip(l(this));
          }),
          e.removeData('ui-tooltip-open'),
          this._off(e, 'mouseleave focusout keyup'),
          e[0] !== this.element[0] && this._off(e, 'remove'),
          this._off(this.document, 'mousemove'),
          t &&
            'mouseleave' === t.type &&
            l.each(this.parents, function (t, e) {
              l(e.element).attr('title', e.title), delete i.parents[t];
            }),
          (this.closing = !0),
          this._trigger('close', t, { tooltip: s }),
          (this.closing = !1));
      },
      _tooltip: function (t) {
        var e = 'ui-tooltip-' + s++,
          i = l('<div>')
            .attr({ id: e, role: 'tooltip' })
            .addClass(
              'ui-tooltip ui-widget ui-corner-all ui-widget-content ' +
                (this.options.tooltipClass || '')
            );
        return (
          l('<div>').addClass('ui-tooltip-content').appendTo(i),
          i.appendTo(this.document[0].body),
          (this.tooltips[e] = t),
          i
        );
      },
      _find: function (t) {
        var e = t.data('ui-tooltip-id');
        return e ? l('#' + e) : l();
      },
      _removeTooltip: function (t) {
        t.remove(), delete this.tooltips[t.attr('id')];
      },
      _destroy: function () {
        var s = this;
        l.each(this.tooltips, function (t, e) {
          var i = l.Event('blur');
          (i.target = i.currentTarget = e[0]),
            s.close(i, !0),
            l('#' + t).remove(),
            e.data('ui-tooltip-title') &&
              (e.attr('title', e.data('ui-tooltip-title')),
              e.removeData('ui-tooltip-title'));
        });
      },
    });
  })(jQuery);
