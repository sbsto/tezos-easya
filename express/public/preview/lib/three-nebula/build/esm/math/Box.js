import { MATH_TYPE_BOX as type } from './types';
export default class Box {
  constructor(x, y, z, w, h, d) {
    /**
     * @desc The class type.
     * @type {string}
     */
    this.type = type;
    this.x = x;
    this.y = y;
    this.z = z;
    this.width = w;
    this.height = h;
    this.depth = d;
    this.bottom = this.y + this.height;
    this.right = this.x + this.width;
    this.right = this.x + this.width;
  }

  contains(x, y, z) {
    if (x <= this.right && x >= this.x && y <= this.bottom && y >= this.y && z <= this.depth && z >= this.z) return true;else return false;
  }

}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tYXRoL0JveC5qcyJdLCJuYW1lcyI6WyJNQVRIX1RZUEVfQk9YIiwidHlwZSIsIkJveCIsImNvbnN0cnVjdG9yIiwieCIsInkiLCJ6IiwidyIsImgiLCJkIiwid2lkdGgiLCJoZWlnaHQiLCJkZXB0aCIsImJvdHRvbSIsInJpZ2h0IiwiY29udGFpbnMiXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLGFBQWEsSUFBSUMsSUFBMUIsUUFBc0MsU0FBdEM7QUFFQSxlQUFlLE1BQU1DLEdBQU4sQ0FBVTtBQUN2QkMsRUFBQUEsV0FBVyxDQUFDQyxDQUFELEVBQUlDLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CO0FBQzVCO0FBQ0o7QUFDQTtBQUNBO0FBQ0ksU0FBS1IsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0csQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsU0FBS0ksS0FBTCxHQUFhSCxDQUFiO0FBQ0EsU0FBS0ksTUFBTCxHQUFjSCxDQUFkO0FBQ0EsU0FBS0ksS0FBTCxHQUFhSCxDQUFiO0FBQ0EsU0FBS0ksTUFBTCxHQUFjLEtBQUtSLENBQUwsR0FBUyxLQUFLTSxNQUE1QjtBQUNBLFNBQUtHLEtBQUwsR0FBYSxLQUFLVixDQUFMLEdBQVMsS0FBS00sS0FBM0I7QUFDQSxTQUFLSSxLQUFMLEdBQWEsS0FBS1YsQ0FBTCxHQUFTLEtBQUtNLEtBQTNCO0FBQ0Q7O0FBRURLLEVBQUFBLFFBQVEsQ0FBQ1gsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLENBQVAsRUFBVTtBQUNoQixRQUNFRixDQUFDLElBQUksS0FBS1UsS0FBVixJQUNBVixDQUFDLElBQUksS0FBS0EsQ0FEVixJQUVBQyxDQUFDLElBQUksS0FBS1EsTUFGVixJQUdBUixDQUFDLElBQUksS0FBS0EsQ0FIVixJQUlBQyxDQUFDLElBQUksS0FBS00sS0FKVixJQUtBTixDQUFDLElBQUksS0FBS0EsQ0FOWixFQVFFLE9BQU8sSUFBUCxDQVJGLEtBU0ssT0FBTyxLQUFQO0FBQ047O0FBN0JzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1BVEhfVFlQRV9CT1ggYXMgdHlwZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3gge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCB6LCB3LCBoLCBkKSB7XG4gICAgLyoqXG4gICAgICogQGRlc2MgVGhlIGNsYXNzIHR5cGUuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLnogPSB6O1xuICAgIHRoaXMud2lkdGggPSB3O1xuICAgIHRoaXMuaGVpZ2h0ID0gaDtcbiAgICB0aGlzLmRlcHRoID0gZDtcbiAgICB0aGlzLmJvdHRvbSA9IHRoaXMueSArIHRoaXMuaGVpZ2h0O1xuICAgIHRoaXMucmlnaHQgPSB0aGlzLnggKyB0aGlzLndpZHRoO1xuICAgIHRoaXMucmlnaHQgPSB0aGlzLnggKyB0aGlzLndpZHRoO1xuICB9XG5cbiAgY29udGFpbnMoeCwgeSwgeikge1xuICAgIGlmIChcbiAgICAgIHggPD0gdGhpcy5yaWdodCAmJlxuICAgICAgeCA+PSB0aGlzLnggJiZcbiAgICAgIHkgPD0gdGhpcy5ib3R0b20gJiZcbiAgICAgIHkgPj0gdGhpcy55ICYmXG4gICAgICB6IDw9IHRoaXMuZGVwdGggJiZcbiAgICAgIHogPj0gdGhpcy56XG4gICAgKVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==