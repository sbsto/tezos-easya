"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("../constants");

var _default = {
  randomAToB: function randomAToB(a, b, INT) {
    if (!INT) return a + Math.random() * (b - a);else return (Math.random() * (b - a) >> 0) + a;
  },
  randomFloating: function randomFloating(center, f, INT) {
    return this.randomAToB(center - f, center + f, INT);
  },
  randomZone: function randomZone(display) {},
  //eslint-disable-line
  degreeTransform: function degreeTransform(a) {
    return a * _constants.PI / 180;
  },
  toColor16: function getRGB(num) {
    return '#' + num.toString(16);
  },
  randomColor: function randomColor() {
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
  },
  lerp: function lerp(a, b, energy) {
    return b + (a - b) * energy;
  },
  getNormal: function getNormal(v, n) {
    if (v.x == 0 && v.y == 0) {
      if (v.z == 0) n.set(1, 0, 1);else n.set(1, 1, -v.y / v.z);
    } else {
      if (v.x == 0) n.set(1, 0, 1);else n.set(-v.y / v.x, 1, 1);
    }

    return n.normalize();
  },

  /**
   * Rodrigues' Rotation Formula
   * https://en.wikipedia.org/wiki/Rodrigues%27_rotation_formula
   * v′ = vcos(θ) + k(k⋅v)(1−cos(θ)) + (k*v)sin(θ)
   */
  axisRotate: function axisRotate(v0, v, k, tha) {
    var cos = Math.cos(tha);
    var sin = Math.sin(tha);
    var p = k.dot(v) * (1 - cos);
    v0.copy(k);
    v0.cross(v).scalar(sin);
    v0.addValue(v.x * cos, v.y * cos, v.z * cos);
    v0.addValue(k.x * p, k.y * p, k.z * p);
  }
};
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYXRoL01hdGhVdGlscy5qcyJdLCJuYW1lcyI6WyJyYW5kb21BVG9CIiwiYSIsImIiLCJJTlQiLCJNYXRoIiwicmFuZG9tIiwicmFuZG9tRmxvYXRpbmciLCJjZW50ZXIiLCJmIiwicmFuZG9tWm9uZSIsImRpc3BsYXkiLCJkZWdyZWVUcmFuc2Zvcm0iLCJQSSIsInRvQ29sb3IxNiIsImdldFJHQiIsIm51bSIsInRvU3RyaW5nIiwicmFuZG9tQ29sb3IiLCJzbGljZSIsImxlcnAiLCJlbmVyZ3kiLCJnZXROb3JtYWwiLCJ2IiwibiIsIngiLCJ5IiwieiIsInNldCIsIm5vcm1hbGl6ZSIsImF4aXNSb3RhdGUiLCJ2MCIsImsiLCJ0aGEiLCJjb3MiLCJzaW4iLCJwIiwiZG90IiwiY29weSIsImNyb3NzIiwic2NhbGFyIiwiYWRkVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7ZUFFZTtBQUNiQSxFQUFBQSxVQUFVLEVBQUUsb0JBQVNDLENBQVQsRUFBWUMsQ0FBWixFQUFlQyxHQUFmLEVBQW9CO0FBQzlCLFFBQUksQ0FBQ0EsR0FBTCxFQUFVLE9BQU9GLENBQUMsR0FBR0csSUFBSSxDQUFDQyxNQUFMLE1BQWlCSCxDQUFDLEdBQUdELENBQXJCLENBQVgsQ0FBVixLQUNLLE9BQU8sQ0FBRUcsSUFBSSxDQUFDQyxNQUFMLE1BQWlCSCxDQUFDLEdBQUdELENBQXJCLENBQUQsSUFBNkIsQ0FBOUIsSUFBbUNBLENBQTFDO0FBQ04sR0FKWTtBQUtiSyxFQUFBQSxjQUFjLEVBQUUsd0JBQVNDLE1BQVQsRUFBaUJDLENBQWpCLEVBQW9CTCxHQUFwQixFQUF5QjtBQUN2QyxXQUFPLEtBQUtILFVBQUwsQ0FBZ0JPLE1BQU0sR0FBR0MsQ0FBekIsRUFBNEJELE1BQU0sR0FBR0MsQ0FBckMsRUFBd0NMLEdBQXhDLENBQVA7QUFDRCxHQVBZO0FBU2JNLEVBQUFBLFVBQVUsRUFBRSxvQkFBU0MsT0FBVCxFQUFrQixDQUFFLENBVG5CO0FBU3FC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cyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tQVRvQjogZnVuY3Rpb24oYSwgYiwgSU5UKSB7XG4gICAgaWYgKCFJTlQpIHJldHVybiBhICsgTWF0aC5yYW5kb20oKSAqIChiIC0gYSk7XG4gICAgZWxzZSByZXR1cm4gKChNYXRoLnJhbmRvbSgpICogKGIgLSBhKSkgPj4gMCkgKyBhO1xuICB9LFxuICByYW5kb21GbG9hdGluZzogZnVuY3Rpb24oY2VudGVyLCBmLCBJTlQpIHtcbiAgICByZXR1cm4gdGhpcy5yYW5kb21BVG9CKGNlbnRlciAtIGYsIGNlbnRlciArIGYsIElOVCk7XG4gIH0sXG5cbiAgcmFuZG9tWm9uZTogZnVuY3Rpb24oZGlzcGxheSkge30sIC8vZXNsaW50LWRpc2FibGUtbGluZVxuXG4gIGRlZ3JlZVRyYW5zZm9ybTogZnVuY3Rpb24oYSkge1xuICAgIHJldHVybiAoYSAqIFBJKSAvIDE4MDtcbiAgfSxcblxuICB0b0NvbG9yMTY6IGZ1bmN0aW9uIGdldFJHQihudW0pIHtcbiAgICByZXR1cm4gJyMnICsgbnVtLnRvU3RyaW5nKDE2KTtcbiAgfSxcblxuICByYW5kb21Db2xvcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICcjJyArXG4gICAgICAoJzAwMDAwJyArICgoTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMCkgPDwgMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtNilcbiAgICApO1xuICB9LFxuXG4gIGxlcnA6IGZ1bmN0aW9uKGEsIGIsIGVuZXJneSkge1xuICAgIHJldHVybiBiICsgKGEgLSBiKSAqIGVuZXJneTtcbiAgfSxcblxuICBnZXROb3JtYWw6IGZ1bmN0aW9uKHYsIG4pIHtcbiAgICBpZiAodi54ID09IDAgJiYgdi55ID09IDApIHtcbiAgICAgIGlmICh2LnogPT0gMCkgbi5zZXQoMSwgMCwgMSk7XG4gICAgICBlbHNlIG4uc2V0KDEsIDEsIC12LnkgLyB2LnopO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodi54ID09IDApIG4uc2V0KDEsIDAsIDEpO1xuICAgICAgZWxzZSBuLnNldCgtdi55IC8gdi54LCAxLCAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbi5ub3JtYWxpemUoKTtcbiAgfSxcblxuICAvKipcbiAgICogUm9kcmlndWVzJyBSb3RhdGlvbiBGb3JtdWxhXG4gICAqIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1JvZHJpZ3VlcyUyN19yb3RhdGlvbl9mb3JtdWxhXG4gICAqIHbigLIgPSB2Y29zKM64KSArIGsoa+KLhXYpKDHiiJJjb3MozrgpKSArIChrKnYpc2luKM64KVxuICAgKi9cbiAgYXhpc1JvdGF0ZTogZnVuY3Rpb24odjAsIHYsIGssIHRoYSkge1xuICAgIHZhciBjb3MgPSBNYXRoLmNvcyh0aGEpO1xuICAgIHZhciBzaW4gPSBNYXRoLnNpbih0aGEpO1xuICAgIHZhciBwID0gay5kb3QodikgKiAoMSAtIGNvcyk7XG5cbiAgICB2MC5jb3B5KGspO1xuICAgIHYwLmNyb3NzKHYpLnNjYWxhcihzaW4pO1xuICAgIHYwLmFkZFZhbHVlKHYueCAqIGNvcywgdi55ICogY29zLCB2LnogKiBjb3MpO1xuICAgIHYwLmFkZFZhbHVlKGsueCAqIHAsIGsueSAqIHAsIGsueiAqIHApO1xuICB9XG59O1xuIl19