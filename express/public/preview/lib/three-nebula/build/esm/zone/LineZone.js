import Vector3D from '../math/Vector3D';
import Zone from './Zone';
import { ZONE_TYPE_LINE as type } from './types';
export default class LineZone extends Zone {
  /**
   * LineZone is a 3d line zone
   * @param {Number|Vector3D} x1 - the line's start point of x value or a Vector3D Object
   * @param {Number|Vector3D} y1 - the line's start point of y value or a Vector3D Object
   * @param {Number} z1 - the line's start point of z value
   * @param {Number} x2 - the line's end point of x value
   * @param {Number} y2 - the line's end point of y value
   * @param {Number} z2 - the line's end point of z value
   * @example
   * var lineZone = new System.LineZone(0,0,0,100,100,0);
   * or
   * var lineZone = new System.LineZone(new System.Vector3D(0,0,0),new System.Vector3D(100,100,0));
   * @extends {Zone}
   * @constructor
   */
  constructor(x1, y1, z1, x2, y2, z2) {
    super(type);

    if (x1 instanceof Vector3D) {
      this.x1 = x1.x;
      this.y1 = x1.y;
      this.z1 = x1.z;
      this.x2 = x2.x;
      this.y2 = x2.y;
      this.z2 = x2.z;
    } else {
      this.x1 = x1;
      this.y1 = y1;
      this.z1 = z1;
      this.x2 = x2;
      this.y2 = y2;
      this.z2 = z2;
    }

    this.supportsCrossing = false;
  }
  /**
   * Returns true to indicate this is a LineZone.
   *
   * @return {boolean}
   */


  isLineZone() {
    return true;
  }

  getPosition() {
    this.random = Math.random();
    this.vector.x = this.x1 + this.random * (this.x2 - this.x1);
    this.vector.y = this.y1 + this.random * (this.y2 - this.y1);
    this.vector.z = this.z1 + this.random * (this.z2 - this.z1);
    return this.vector;
  }

}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy96b25lL0xpbmVab25lLmpzIl0sIm5hbWVzIjpbIlZlY3RvcjNEIiwiWm9uZSIsIlpPTkVfVFlQRV9MSU5FIiwidHlwZSIsIkxpbmVab25lIiwiY29uc3RydWN0b3IiLCJ4MSIsInkxIiwiejEiLCJ4MiIsInkyIiwiejIiLCJ4IiwieSIsInoiLCJzdXBwb3J0c0Nyb3NzaW5nIiwiaXNMaW5lWm9uZSIsImdldFBvc2l0aW9uIiwicmFuZG9tIiwiTWF0aCIsInZlY3RvciJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsUUFBUCxNQUFxQixrQkFBckI7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLFFBQWpCO0FBQ0EsU0FBU0MsY0FBYyxJQUFJQyxJQUEzQixRQUF1QyxTQUF2QztBQUVBLGVBQWUsTUFBTUMsUUFBTixTQUF1QkgsSUFBdkIsQ0FBNEI7QUFDekM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0VJLEVBQUFBLFdBQVcsQ0FBQ0MsRUFBRCxFQUFLQyxFQUFMLEVBQVNDLEVBQVQsRUFBYUMsRUFBYixFQUFpQkMsRUFBakIsRUFBcUJDLEVBQXJCLEVBQXlCO0FBQ2xDLFVBQU1SLElBQU47O0FBRUEsUUFBSUcsRUFBRSxZQUFZTixRQUFsQixFQUE0QjtBQUMxQixXQUFLTSxFQUFMLEdBQVVBLEVBQUUsQ0FBQ00sQ0FBYjtBQUNBLFdBQUtMLEVBQUwsR0FBVUQsRUFBRSxDQUFDTyxDQUFiO0FBQ0EsV0FBS0wsRUFBTCxHQUFVRixFQUFFLENBQUNRLENBQWI7QUFFQSxXQUFLTCxFQUFMLEdBQVVBLEVBQUUsQ0FBQ0csQ0FBYjtBQUNBLFdBQUtGLEVBQUwsR0FBVUQsRUFBRSxDQUFDSSxDQUFiO0FBQ0EsV0FBS0YsRUFBTCxHQUFVRixFQUFFLENBQUNLLENBQWI7QUFDRCxLQVJELE1BUU87QUFDTCxXQUFLUixFQUFMLEdBQVVBLEVBQVY7QUFDQSxXQUFLQyxFQUFMLEdBQVVBLEVBQVY7QUFDQSxXQUFLQyxFQUFMLEdBQVVBLEVBQVY7QUFFQSxXQUFLQyxFQUFMLEdBQVVBLEVBQVY7QUFDQSxXQUFLQyxFQUFMLEdBQVVBLEVBQVY7QUFDQSxXQUFLQyxFQUFMLEdBQVVBLEVBQVY7QUFDRDs7QUFFRCxTQUFLSSxnQkFBTCxHQUF3QixLQUF4QjtBQUNEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0VDLEVBQUFBLFVBQVUsR0FBRztBQUNYLFdBQU8sSUFBUDtBQUNEOztBQUVEQyxFQUFBQSxXQUFXLEdBQUc7QUFDWixTQUFLQyxNQUFMLEdBQWNDLElBQUksQ0FBQ0QsTUFBTCxFQUFkO0FBQ0EsU0FBS0UsTUFBTCxDQUFZUixDQUFaLEdBQWdCLEtBQUtOLEVBQUwsR0FBVSxLQUFLWSxNQUFMLElBQWUsS0FBS1QsRUFBTCxHQUFVLEtBQUtILEVBQTlCLENBQTFCO0FBQ0EsU0FBS2MsTUFBTCxDQUFZUCxDQUFaLEdBQWdCLEtBQUtOLEVBQUwsR0FBVSxLQUFLVyxNQUFMLElBQWUsS0FBS1IsRUFBTCxHQUFVLEtBQUtILEVBQTlCLENBQTFCO0FBQ0EsU0FBS2EsTUFBTCxDQUFZTixDQUFaLEdBQWdCLEtBQUtOLEVBQUwsR0FBVSxLQUFLVSxNQUFMLElBQWUsS0FBS1AsRUFBTCxHQUFVLEtBQUtILEVBQTlCLENBQTFCO0FBRUEsV0FBTyxLQUFLWSxNQUFaO0FBQ0Q7O0FBeER3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWZWN0b3IzRCBmcm9tICcuLi9tYXRoL1ZlY3RvcjNEJztcbmltcG9ydCBab25lIGZyb20gJy4vWm9uZSc7XG5pbXBvcnQgeyBaT05FX1RZUEVfTElORSBhcyB0eXBlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVab25lIGV4dGVuZHMgWm9uZSB7XG4gIC8qKlxuICAgKiBMaW5lWm9uZSBpcyBhIDNkIGxpbmUgem9uZVxuICAgKiBAcGFyYW0ge051bWJlcnxWZWN0b3IzRH0geDEgLSB0aGUgbGluZSdzIHN0YXJ0IHBvaW50IG9mIHggdmFsdWUgb3IgYSBWZWN0b3IzRCBPYmplY3RcbiAgICogQHBhcmFtIHtOdW1iZXJ8VmVjdG9yM0R9IHkxIC0gdGhlIGxpbmUncyBzdGFydCBwb2ludCBvZiB5IHZhbHVlIG9yIGEgVmVjdG9yM0QgT2JqZWN0XG4gICAqIEBwYXJhbSB7TnVtYmVyfSB6MSAtIHRoZSBsaW5lJ3Mgc3RhcnQgcG9pbnQgb2YgeiB2YWx1ZVxuICAgKiBAcGFyYW0ge051bWJlcn0geDIgLSB0aGUgbGluZSdzIGVuZCBwb2ludCBvZiB4IHZhbHVlXG4gICAqIEBwYXJhbSB7TnVtYmVyfSB5MiAtIHRoZSBsaW5lJ3MgZW5kIHBvaW50IG9mIHkgdmFsdWVcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHoyIC0gdGhlIGxpbmUncyBlbmQgcG9pbnQgb2YgeiB2YWx1ZVxuICAgKiBAZXhhbXBsZVxuICAgKiB2YXIgbGluZVpvbmUgPSBuZXcgU3lzdGVtLkxpbmVab25lKDAsMCwwLDEwMCwxMDAsMCk7XG4gICAqIG9yXG4gICAqIHZhciBsaW5lWm9uZSA9IG5ldyBTeXN0ZW0uTGluZVpvbmUobmV3IFN5c3RlbS5WZWN0b3IzRCgwLDAsMCksbmV3IFN5c3RlbS5WZWN0b3IzRCgxMDAsMTAwLDApKTtcbiAgICogQGV4dGVuZHMge1pvbmV9XG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3IoeDEsIHkxLCB6MSwgeDIsIHkyLCB6Mikge1xuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgaWYgKHgxIGluc3RhbmNlb2YgVmVjdG9yM0QpIHtcbiAgICAgIHRoaXMueDEgPSB4MS54O1xuICAgICAgdGhpcy55MSA9IHgxLnk7XG4gICAgICB0aGlzLnoxID0geDEuejtcblxuICAgICAgdGhpcy54MiA9IHgyLng7XG4gICAgICB0aGlzLnkyID0geDIueTtcbiAgICAgIHRoaXMuejIgPSB4Mi56O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLngxID0geDE7XG4gICAgICB0aGlzLnkxID0geTE7XG4gICAgICB0aGlzLnoxID0gejE7XG5cbiAgICAgIHRoaXMueDIgPSB4MjtcbiAgICAgIHRoaXMueTIgPSB5MjtcbiAgICAgIHRoaXMuejIgPSB6MjtcbiAgICB9XG5cbiAgICB0aGlzLnN1cHBvcnRzQ3Jvc3NpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgdG8gaW5kaWNhdGUgdGhpcyBpcyBhIExpbmVab25lLlxuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNMaW5lWm9uZSgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHRoaXMucmFuZG9tID0gTWF0aC5yYW5kb20oKTtcbiAgICB0aGlzLnZlY3Rvci54ID0gdGhpcy54MSArIHRoaXMucmFuZG9tICogKHRoaXMueDIgLSB0aGlzLngxKTtcbiAgICB0aGlzLnZlY3Rvci55ID0gdGhpcy55MSArIHRoaXMucmFuZG9tICogKHRoaXMueTIgLSB0aGlzLnkxKTtcbiAgICB0aGlzLnZlY3Rvci56ID0gdGhpcy56MSArIHRoaXMucmFuZG9tICogKHRoaXMuejIgLSB0aGlzLnoxKTtcblxuICAgIHJldHVybiB0aGlzLnZlY3RvcjtcbiAgfVxufVxuIl19