"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "INITIALIZER_TYPES_THAT_REQUIRE_THREE", {
  enumerable: true,
  get: function get() {
    return _types2.INITIALIZER_TYPES_THAT_REQUIRE_THREE;
  }
});
exports.SUPPORTED_JSON_ZONE_TYPES = exports.SUPPORTED_JSON_RENDERER_TYPES = exports.SUPPORTED_JSON_BEHAVIOUR_TYPES = exports.SUPPORTED_JSON_INITIALIZER_TYPES = exports.DEFAULT_SYSTEM_DELTA = exports.DEFAULT_EASING = exports.DEFAULT_USE_ALPHA = exports.DEFAULT_USE_COLOR = exports.DEFAULT_SCALE = exports.DEFAULT_ALPHA = exports.DEFAULT_RADIUS = exports.DEFAULT_MASS = exports.DEFAULT_PARENT = exports.DEFAULT_BODY = exports.DEFAULT_INDEX = exports.DEFAULT_SLEEP = exports.DEFAULT_DEAD = exports.DEFAULT_ENERGY = exports.DEFAULT_AGE = exports.DEFAULT_LIFE = void 0;

var _types = require("../behaviour/types");

var _types2 = require("../initializer/types");

var _types3 = require("../zone/types");

var _types4 = require("../renderer/types");

var _ease = require("../ease");

/**
 * @desc Default particle life
 * @type {number}
 */
var DEFAULT_LIFE = Infinity;
/**
 * @desc Default particle age
 * @type {number}
 */

exports.DEFAULT_LIFE = DEFAULT_LIFE;
var DEFAULT_AGE = 0;
/**
 * @desc Default particle energy
 * @type {number}
 */

exports.DEFAULT_AGE = DEFAULT_AGE;
var DEFAULT_ENERGY = 1;
/**
 * @desc Default particle dead
 * @type {boolean}
 */

exports.DEFAULT_ENERGY = DEFAULT_ENERGY;
var DEFAULT_DEAD = false;
/**
 * @desc Default particle sleep
 * @type {boolean}
 */

exports.DEFAULT_DEAD = DEFAULT_DEAD;
var DEFAULT_SLEEP = false;
/**
 * @desc Default particle index
 * @type {number}
 */

exports.DEFAULT_SLEEP = DEFAULT_SLEEP;
var DEFAULT_INDEX = 0;
/**
 * @desc Default particle body
 * @type {?object}
 */

exports.DEFAULT_INDEX = DEFAULT_INDEX;
var DEFAULT_BODY = null;
/**
 * @desc Default particle parent
 * @type {?Emitter}
 */

exports.DEFAULT_BODY = DEFAULT_BODY;
var DEFAULT_PARENT = null;
/**
 * @desc Default particle mass
 * @type {number}
 */

exports.DEFAULT_PARENT = DEFAULT_PARENT;
var DEFAULT_MASS = 1;
/**
 * @desc Default particle radius
 * @type {number}
 */

exports.DEFAULT_MASS = DEFAULT_MASS;
var DEFAULT_RADIUS = 10;
/**
 * @desc Default particle alpha
 * @type {number}
 */

exports.DEFAULT_RADIUS = DEFAULT_RADIUS;
var DEFAULT_ALPHA = 1;
/**
 * @desc Default particle scale
 * @type {number}
 */

exports.DEFAULT_ALPHA = DEFAULT_ALPHA;
var DEFAULT_SCALE = 1;
/**
 * @desc Default particle useColor
 * @type {boolean}
 */

exports.DEFAULT_SCALE = DEFAULT_SCALE;
var DEFAULT_USE_COLOR = false;
/**
 * @desc Default particle useAlpha
 * @type {boolean}
 */

exports.DEFAULT_USE_COLOR = DEFAULT_USE_COLOR;
var DEFAULT_USE_ALPHA = false;
/**
 * @desc Default particle easing
 * @type {function}
 */

exports.DEFAULT_USE_ALPHA = DEFAULT_USE_ALPHA;
var DEFAULT_EASING = _ease.easeLinear;
/**
 * @desc The default delta provided to the System instance
 * @type {number}
 */

exports.DEFAULT_EASING = DEFAULT_EASING;
var DEFAULT_SYSTEM_DELTA = 0.0167;
/**
 * @desc The types of initializers supported by the System.fromJSON method.
 * @type {array<string>}
 */

exports.DEFAULT_SYSTEM_DELTA = DEFAULT_SYSTEM_DELTA;
var SUPPORTED_JSON_INITIALIZER_TYPES = [_types2.INITIALIZER_TYPE_POSITION, _types2.INITIALIZER_TYPE_LIFE, _types2.INITIALIZER_TYPE_RADIUS, _types2.INITIALIZER_TYPE_MASS, _types2.INITIALIZER_TYPE_BODY, _types2.INITIALIZER_TYPE_BODY_SPRITE, _types2.INITIALIZER_TYPE_TEXTURE, _types2.INITIALIZER_TYPE_POLAR_VELOCITY, _types2.INITIALIZER_TYPE_RADIAL_VELOCITY, _types2.INITIALIZER_TYPE_VECTOR_VELOCITY];
/**
 * @desc The types of behaviours supported by the System.fromJSON method.
 * @type {array<string>}
 */

exports.SUPPORTED_JSON_INITIALIZER_TYPES = SUPPORTED_JSON_INITIALIZER_TYPES;
var SUPPORTED_JSON_BEHAVIOUR_TYPES = [_types.BEHAVIOUR_TYPE_ALPHA, _types.BEHAVIOUR_TYPE_ATTRACTION, _types.BEHAVIOUR_TYPE_COLOR, _types.BEHAVIOUR_TYPE_CROSS_ZONE, _types.BEHAVIOUR_TYPE_FORCE, _types.BEHAVIOUR_TYPE_GRAVITY, _types.BEHAVIOUR_TYPE_RANDOM_DRIFT, _types.BEHAVIOUR_TYPE_REPULSION, _types.BEHAVIOUR_TYPE_ROTATE, _types.BEHAVIOUR_TYPE_SCALE, _types.BEHAVIOUR_TYPE_SPRING];
/**
 * @desc The types of renderers supported by the System.fromJSON method.
 * @type {array<string>}
 */

exports.SUPPORTED_JSON_BEHAVIOUR_TYPES = SUPPORTED_JSON_BEHAVIOUR_TYPES;
var SUPPORTED_JSON_RENDERER_TYPES = [_types4.RENDERER_TYPE_SPRITE];
/**
 * @desc The types of zones supported by the System.fromJSON method.
 * @type {array<string>}
 */

exports.SUPPORTED_JSON_RENDERER_TYPES = SUPPORTED_JSON_RENDERER_TYPES;
var SUPPORTED_JSON_ZONE_TYPES = [_types3.ZONE_TYPE_BOX, _types3.ZONE_TYPE_LINE, _types3.ZONE_TYPE_MESH, _types3.ZONE_TYPE_POINT, _types3.ZONE_TYPE_SPHERE];
exports.SUPPORTED_JSON_ZONE_TYPES = SUPPORTED_JSON_ZONE_TYPES;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2NvbnN0YW50cy5qcyJdLCJuYW1lcyI6WyJERUZBVUxUX0xJRkUiLCJJbmZpbml0eSIsIkRFRkFVTFRfQUdFIiwiREVGQVVMVF9FTkVSR1kiLCJERUZBVUxUX0RFQUQiLCJERUZBVUxUX1NMRUVQIiwiREVGQVVMVF9JTkRFWCIsIkRFRkFVTFRfQk9EWSIsIkRFRkFVTFRfUEFSRU5UIiwiREVGQVVMVF9NQVNTIiwiREVGQVVMVF9SQURJVVMiLCJERUZBVUxUX0FMUEhBIiwiREVGQVVMVF9TQ0FMRSIsIkRFRkFVTFRfVVNFX0NPTE9SIiwiREVGQVVMVF9VU0VfQUxQSEEiLCJERUZBVUxUX0VBU0lORyIsImVhc2VMaW5lYXIiLCJERUZBVUxUX1NZU1RFTV9ERUxUQSIsIlNVUFBPUlRFRF9KU09OX0lOSVRJQUxJWkVSX1RZUEVTIiwiSU5JVElBTElaRVJfVFlQRV9QT1NJVElPTiIsIklOSVRJQUxJWkVSX1RZUEVfTElGRSIsIklOSVRJQUxJWkVSX1RZUEVfUkFESVVTIiwiSU5JVElBTElaRVJfVFlQRV9NQVNTIiwiSU5JVElBTElaRVJfVFlQRV9CT0RZIiwiSU5JVElBTElaRVJfVFlQRV9CT0RZX1NQUklURSIsIklOSVRJQUxJWkVSX1RZUEVfVEVYVFVSRSIsIklOSVRJQUxJWkVSX1RZUEVfUE9MQVJfVkVMT0NJVFkiLCJJTklUSUFMSVpFUl9UWVBFX1JBRElBTF9WRUxPQ0lUWSIsIklOSVRJQUxJWkVSX1RZUEVfVkVDVE9SX1ZFTE9DSVRZIiwiU1VQUE9SVEVEX0pTT05fQkVIQVZJT1VSX1RZUEVTIiwiQkVIQVZJT1VSX1RZUEVfQUxQSEEiLCJCRUhBVklPVVJfVFlQRV9BVFRSQUNUSU9OIiwiQkVIQVZJT1VSX1RZUEVfQ09MT1IiLCJCRUhBVklPVVJfVFlQRV9DUk9TU19aT05FIiwiQkVIQVZJT1VSX1RZUEVfRk9SQ0UiLCJCRUhBVklPVVJfVFlQRV9HUkFWSVRZIiwiQkVIQVZJT1VSX1RZUEVfUkFORE9NX0RSSUZUIiwiQkVIQVZJT1VSX1RZUEVfUkVQVUxTSU9OIiwiQkVIQVZJT1VSX1RZUEVfUk9UQVRFIiwiQkVIQVZJT1VSX1RZUEVfU0NBTEUiLCJCRUhBVklPVVJfVFlQRV9TUFJJTkciLCJTVVBQT1JURURfSlNPTl9SRU5ERVJFUl9UWVBFUyIsIlJFTkRFUkVSX1RZUEVfU1BSSVRFIiwiU1VQUE9SVEVEX0pTT05fWk9ORV9UWVBFUyIsIlpPTkVfVFlQRV9CT1giLCJaT05FX1RZUEVfTElORSIsIlpPTkVfVFlQRV9NRVNIIiwiWk9ORV9UWVBFX1BPSU5UIiwiWk9ORV9UWVBFX1NQSEVSRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQWFBOztBQVlBOztBQVFBOztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsWUFBWSxHQUFHQyxRQUFyQjtBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNQyxXQUFXLEdBQUcsQ0FBcEI7QUFDUDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUMsY0FBYyxHQUFHLENBQXZCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLFlBQVksR0FBRyxLQUFyQjtBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNQyxhQUFhLEdBQUcsS0FBdEI7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUMsYUFBYSxHQUFHLENBQXRCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLFlBQVksR0FBRyxJQUFyQjtBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNQyxjQUFjLEdBQUcsSUFBdkI7QUFDUDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUMsWUFBWSxHQUFHLENBQXJCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLGNBQWMsR0FBRyxFQUF2QjtBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNQyxhQUFhLEdBQUcsQ0FBdEI7QUFDUDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUMsYUFBYSxHQUFHLENBQXRCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLGlCQUFpQixHQUFHLEtBQTFCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLGlCQUFpQixHQUFHLEtBQTFCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLGNBQWMsR0FBR0MsZ0JBQXZCO0FBRVA7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLG9CQUFvQixHQUFHLE1BQTdCO0FBRVA7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLGdDQUFnQyxHQUFHLENBQzlDQyxpQ0FEOEMsRUFFOUNDLDZCQUY4QyxFQUc5Q0MsK0JBSDhDLEVBSTlDQyw2QkFKOEMsRUFLOUNDLDZCQUw4QyxFQU05Q0Msb0NBTjhDLEVBTzlDQyxnQ0FQOEMsRUFROUNDLHVDQVI4QyxFQVM5Q0Msd0NBVDhDLEVBVTlDQyx3Q0FWOEMsQ0FBekM7QUFhUDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sSUFBTUMsOEJBQThCLEdBQUcsQ0FDNUNDLDJCQUQ0QyxFQUU1Q0MsZ0NBRjRDLEVBRzVDQywyQkFINEMsRUFJNUNDLGdDQUo0QyxFQUs1Q0MsMkJBTDRDLEVBTTVDQyw2QkFONEMsRUFPNUNDLGtDQVA0QyxFQVE1Q0MsK0JBUjRDLEVBUzVDQyw0QkFUNEMsRUFVNUNDLDJCQVY0QyxFQVc1Q0MsNEJBWDRDLENBQXZDO0FBY1A7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLDZCQUE2QixHQUFHLENBQUNDLDRCQUFELENBQXRDO0FBRVA7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLElBQU1DLHlCQUF5QixHQUFHLENBQ3ZDQyxxQkFEdUMsRUFFdkNDLHNCQUZ1QyxFQUd2Q0Msc0JBSHVDLEVBSXZDQyx1QkFKdUMsRUFLdkNDLHdCQUx1QyxDQUFsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJFSEFWSU9VUl9UWVBFX0FMUEhBLFxuICBCRUhBVklPVVJfVFlQRV9BVFRSQUNUSU9OLFxuICBCRUhBVklPVVJfVFlQRV9DT0xPUixcbiAgQkVIQVZJT1VSX1RZUEVfQ1JPU1NfWk9ORSxcbiAgQkVIQVZJT1VSX1RZUEVfRk9SQ0UsXG4gIEJFSEFWSU9VUl9UWVBFX0dSQVZJVFksXG4gIEJFSEFWSU9VUl9UWVBFX1JBTkRPTV9EUklGVCxcbiAgQkVIQVZJT1VSX1RZUEVfUkVQVUxTSU9OLFxuICBCRUhBVklPVVJfVFlQRV9ST1RBVEUsXG4gIEJFSEFWSU9VUl9UWVBFX1NDQUxFLFxuICBCRUhBVklPVVJfVFlQRV9TUFJJTkcsXG59IGZyb20gJy4uL2JlaGF2aW91ci90eXBlcyc7XG5pbXBvcnQge1xuICBJTklUSUFMSVpFUl9UWVBFX0JPRFksXG4gIElOSVRJQUxJWkVSX1RZUEVfQk9EWV9TUFJJVEUsXG4gIElOSVRJQUxJWkVSX1RZUEVfTElGRSxcbiAgSU5JVElBTElaRVJfVFlQRV9NQVNTLFxuICBJTklUSUFMSVpFUl9UWVBFX1BPTEFSX1ZFTE9DSVRZLFxuICBJTklUSUFMSVpFUl9UWVBFX1BPU0lUSU9OLFxuICBJTklUSUFMSVpFUl9UWVBFX1JBRElBTF9WRUxPQ0lUWSxcbiAgSU5JVElBTElaRVJfVFlQRV9SQURJVVMsXG4gIElOSVRJQUxJWkVSX1RZUEVfVEVYVFVSRSxcbiAgSU5JVElBTElaRVJfVFlQRV9WRUNUT1JfVkVMT0NJVFksXG59IGZyb20gJy4uL2luaXRpYWxpemVyL3R5cGVzJztcbmltcG9ydCB7XG4gIFpPTkVfVFlQRV9CT1gsXG4gIFpPTkVfVFlQRV9MSU5FLFxuICBaT05FX1RZUEVfTUVTSCxcbiAgWk9ORV9UWVBFX1BPSU5ULFxuICBaT05FX1RZUEVfU1BIRVJFLFxufSBmcm9tICcuLi96b25lL3R5cGVzJztcblxuaW1wb3J0IHsgUkVOREVSRVJfVFlQRV9TUFJJVEUgfSBmcm9tICcuLi9yZW5kZXJlci90eXBlcyc7XG5pbXBvcnQgeyBlYXNlTGluZWFyIH0gZnJvbSAnLi4vZWFzZSc7XG5cbi8qKlxuICogQGRlc2MgRGVmYXVsdCBwYXJ0aWNsZSBsaWZlXG4gKiBAdHlwZSB7bnVtYmVyfVxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9MSUZFID0gSW5maW5pdHk7XG4vKipcbiAqIEBkZXNjIERlZmF1bHQgcGFydGljbGUgYWdlXG4gKiBAdHlwZSB7bnVtYmVyfVxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9BR0UgPSAwO1xuLyoqXG4gKiBAZGVzYyBEZWZhdWx0IHBhcnRpY2xlIGVuZXJneVxuICogQHR5cGUge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfRU5FUkdZID0gMTtcbi8qKlxuICogQGRlc2MgRGVmYXVsdCBwYXJ0aWNsZSBkZWFkXG4gKiBAdHlwZSB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfREVBRCA9IGZhbHNlO1xuLyoqXG4gKiBAZGVzYyBEZWZhdWx0IHBhcnRpY2xlIHNsZWVwXG4gKiBAdHlwZSB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfU0xFRVAgPSBmYWxzZTtcblxuLyoqXG4gKiBAZGVzYyBEZWZhdWx0IHBhcnRpY2xlIGluZGV4XG4gKiBAdHlwZSB7bnVtYmVyfVxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9JTkRFWCA9IDA7XG4vKipcbiAqIEBkZXNjIERlZmF1bHQgcGFydGljbGUgYm9keVxuICogQHR5cGUgez9vYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0JPRFkgPSBudWxsO1xuLyoqXG4gKiBAZGVzYyBEZWZhdWx0IHBhcnRpY2xlIHBhcmVudFxuICogQHR5cGUgez9FbWl0dGVyfVxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9QQVJFTlQgPSBudWxsO1xuLyoqXG4gKiBAZGVzYyBEZWZhdWx0IHBhcnRpY2xlIG1hc3NcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX01BU1MgPSAxO1xuLyoqXG4gKiBAZGVzYyBEZWZhdWx0IHBhcnRpY2xlIHJhZGl1c1xuICogQHR5cGUge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUkFESVVTID0gMTA7XG4vKipcbiAqIEBkZXNjIERlZmF1bHQgcGFydGljbGUgYWxwaGFcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0FMUEhBID0gMTtcbi8qKlxuICogQGRlc2MgRGVmYXVsdCBwYXJ0aWNsZSBzY2FsZVxuICogQHR5cGUge251bWJlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfU0NBTEUgPSAxO1xuLyoqXG4gKiBAZGVzYyBEZWZhdWx0IHBhcnRpY2xlIHVzZUNvbG9yXG4gKiBAdHlwZSB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfVVNFX0NPTE9SID0gZmFsc2U7XG4vKipcbiAqIEBkZXNjIERlZmF1bHQgcGFydGljbGUgdXNlQWxwaGFcbiAqIEB0eXBlIHtib29sZWFufVxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9VU0VfQUxQSEEgPSBmYWxzZTtcbi8qKlxuICogQGRlc2MgRGVmYXVsdCBwYXJ0aWNsZSBlYXNpbmdcbiAqIEB0eXBlIHtmdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfRUFTSU5HID0gZWFzZUxpbmVhcjtcblxuLyoqXG4gKiBAZGVzYyBUaGUgZGVmYXVsdCBkZWx0YSBwcm92aWRlZCB0byB0aGUgU3lzdGVtIGluc3RhbmNlXG4gKiBAdHlwZSB7bnVtYmVyfVxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9TWVNURU1fREVMVEEgPSAwLjAxNjc7XG5cbi8qKlxuICogQGRlc2MgVGhlIHR5cGVzIG9mIGluaXRpYWxpemVycyBzdXBwb3J0ZWQgYnkgdGhlIFN5c3RlbS5mcm9tSlNPTiBtZXRob2QuXG4gKiBAdHlwZSB7YXJyYXk8c3RyaW5nPn1cbiAqL1xuZXhwb3J0IGNvbnN0IFNVUFBPUlRFRF9KU09OX0lOSVRJQUxJWkVSX1RZUEVTID0gW1xuICBJTklUSUFMSVpFUl9UWVBFX1BPU0lUSU9OLFxuICBJTklUSUFMSVpFUl9UWVBFX0xJRkUsXG4gIElOSVRJQUxJWkVSX1RZUEVfUkFESVVTLFxuICBJTklUSUFMSVpFUl9UWVBFX01BU1MsXG4gIElOSVRJQUxJWkVSX1RZUEVfQk9EWSxcbiAgSU5JVElBTElaRVJfVFlQRV9CT0RZX1NQUklURSxcbiAgSU5JVElBTElaRVJfVFlQRV9URVhUVVJFLFxuICBJTklUSUFMSVpFUl9UWVBFX1BPTEFSX1ZFTE9DSVRZLFxuICBJTklUSUFMSVpFUl9UWVBFX1JBRElBTF9WRUxPQ0lUWSxcbiAgSU5JVElBTElaRVJfVFlQRV9WRUNUT1JfVkVMT0NJVFksXG5dO1xuXG4vKipcbiAqIEBkZXNjIFRoZSB0eXBlcyBvZiBiZWhhdmlvdXJzIHN1cHBvcnRlZCBieSB0aGUgU3lzdGVtLmZyb21KU09OIG1ldGhvZC5cbiAqIEB0eXBlIHthcnJheTxzdHJpbmc+fVxuICovXG5leHBvcnQgY29uc3QgU1VQUE9SVEVEX0pTT05fQkVIQVZJT1VSX1RZUEVTID0gW1xuICBCRUhBVklPVVJfVFlQRV9BTFBIQSxcbiAgQkVIQVZJT1VSX1RZUEVfQVRUUkFDVElPTixcbiAgQkVIQVZJT1VSX1RZUEVfQ09MT1IsXG4gIEJFSEFWSU9VUl9UWVBFX0NST1NTX1pPTkUsXG4gIEJFSEFWSU9VUl9UWVBFX0ZPUkNFLFxuICBCRUhBVklPVVJfVFlQRV9HUkFWSVRZLFxuICBCRUhBVklPVVJfVFlQRV9SQU5ET01fRFJJRlQsXG4gIEJFSEFWSU9VUl9UWVBFX1JFUFVMU0lPTixcbiAgQkVIQVZJT1VSX1RZUEVfUk9UQVRFLFxuICBCRUhBVklPVVJfVFlQRV9TQ0FMRSxcbiAgQkVIQVZJT1VSX1RZUEVfU1BSSU5HLFxuXTtcblxuLyoqXG4gKiBAZGVzYyBUaGUgdHlwZXMgb2YgcmVuZGVyZXJzIHN1cHBvcnRlZCBieSB0aGUgU3lzdGVtLmZyb21KU09OIG1ldGhvZC5cbiAqIEB0eXBlIHthcnJheTxzdHJpbmc+fVxuICovXG5leHBvcnQgY29uc3QgU1VQUE9SVEVEX0pTT05fUkVOREVSRVJfVFlQRVMgPSBbUkVOREVSRVJfVFlQRV9TUFJJVEVdO1xuXG4vKipcbiAqIEBkZXNjIFRoZSB0eXBlcyBvZiB6b25lcyBzdXBwb3J0ZWQgYnkgdGhlIFN5c3RlbS5mcm9tSlNPTiBtZXRob2QuXG4gKiBAdHlwZSB7YXJyYXk8c3RyaW5nPn1cbiAqL1xuZXhwb3J0IGNvbnN0IFNVUFBPUlRFRF9KU09OX1pPTkVfVFlQRVMgPSBbXG4gIFpPTkVfVFlQRV9CT1gsXG4gIFpPTkVfVFlQRV9MSU5FLFxuICBaT05FX1RZUEVfTUVTSCxcbiAgWk9ORV9UWVBFX1BPSU5ULFxuICBaT05FX1RZUEVfU1BIRVJFLFxuXTtcblxuZXhwb3J0IHsgSU5JVElBTElaRVJfVFlQRVNfVEhBVF9SRVFVSVJFX1RIUkVFIH0gZnJvbSAnLi4vaW5pdGlhbGl6ZXIvdHlwZXMnO1xuIl19