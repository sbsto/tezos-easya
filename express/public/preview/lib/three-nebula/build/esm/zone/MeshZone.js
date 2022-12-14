import Zone from './Zone';
import { ZONE_TYPE_MESH as type } from './types';
/**
 * Uses a three THREE.Geometry to determine the zone parameters.
 *
 */

export default class MeshZone extends Zone {
  /**
   * @constructs {MeshZone}
   *
   * @param {THREE.Geometry|Mesh} bounds - the geometry or mesh that will determine the zone bounds
   * @param {number} scale - the zone scale
   * @param {THREE.Geometry} ThreeGeometry - the three geometry class
   * @return void
   */
  constructor(bounds, scale = 1, ThreeGeometry) {
    super(type);
    this.geometry = null;
    this.scale = scale;
    this.supportsCrossing = false;

    if (bounds.type && bounds.type === 'Geometry') {
      this.geometry = bounds;
    }

    if (bounds.geometry) {
      this.geometry = bounds.geometry;
    }

    if (!this.geometry) {
      throw new Error('MeshZone unable to set geometry from the supplied bounds');
    }

    if (this.geometry.isBufferGeometry) {
      this.geometry = new ThreeGeometry().fromBufferGeometry(this.geometry);
    }
  }
  /**
   * Returns true to indicate this is a MeshZone.
   *
   * @return {boolean}
   */


  isMeshZone() {
    return true;
  }

  getPosition() {
    const vertices = this.geometry.vertices;
    const rVector = vertices[vertices.length * Math.random() >> 0];
    this.vector.x = rVector.x * this.scale;
    this.vector.y = rVector.y * this.scale;
    this.vector.z = rVector.z * this.scale;
    return this.vector;
  }

}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy96b25lL01lc2hab25lLmpzIl0sIm5hbWVzIjpbIlpvbmUiLCJaT05FX1RZUEVfTUVTSCIsInR5cGUiLCJNZXNoWm9uZSIsImNvbnN0cnVjdG9yIiwiYm91bmRzIiwic2NhbGUiLCJUaHJlZUdlb21ldHJ5IiwiZ2VvbWV0cnkiLCJzdXBwb3J0c0Nyb3NzaW5nIiwiRXJyb3IiLCJpc0J1ZmZlckdlb21ldHJ5IiwiZnJvbUJ1ZmZlckdlb21ldHJ5IiwiaXNNZXNoWm9uZSIsImdldFBvc2l0aW9uIiwidmVydGljZXMiLCJyVmVjdG9yIiwibGVuZ3RoIiwiTWF0aCIsInJhbmRvbSIsInZlY3RvciIsIngiLCJ5IiwieiJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsSUFBUCxNQUFpQixRQUFqQjtBQUNBLFNBQVNDLGNBQWMsSUFBSUMsSUFBM0IsUUFBdUMsU0FBdkM7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxlQUFlLE1BQU1DLFFBQU4sU0FBdUJILElBQXZCLENBQTRCO0FBQ3pDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRUksRUFBQUEsV0FBVyxDQUFDQyxNQUFELEVBQVNDLEtBQUssR0FBRyxDQUFqQixFQUFvQkMsYUFBcEIsRUFBbUM7QUFDNUMsVUFBTUwsSUFBTjtBQUVBLFNBQUtNLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxTQUFLRixLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLRyxnQkFBTCxHQUF3QixLQUF4Qjs7QUFFQSxRQUFJSixNQUFNLENBQUNILElBQVAsSUFBZUcsTUFBTSxDQUFDSCxJQUFQLEtBQWdCLFVBQW5DLEVBQStDO0FBQzdDLFdBQUtNLFFBQUwsR0FBZ0JILE1BQWhCO0FBQ0Q7O0FBRUQsUUFBSUEsTUFBTSxDQUFDRyxRQUFYLEVBQXFCO0FBQ25CLFdBQUtBLFFBQUwsR0FBZ0JILE1BQU0sQ0FBQ0csUUFBdkI7QUFDRDs7QUFFRCxRQUFJLENBQUMsS0FBS0EsUUFBVixFQUFvQjtBQUNsQixZQUFNLElBQUlFLEtBQUosQ0FDSiwwREFESSxDQUFOO0FBR0Q7O0FBRUQsUUFBSSxLQUFLRixRQUFMLENBQWNHLGdCQUFsQixFQUFvQztBQUNsQyxXQUFLSCxRQUFMLEdBQWdCLElBQUlELGFBQUosR0FBb0JLLGtCQUFwQixDQUF1QyxLQUFLSixRQUE1QyxDQUFoQjtBQUNEO0FBQ0Y7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRUssRUFBQUEsVUFBVSxHQUFHO0FBQ1gsV0FBTyxJQUFQO0FBQ0Q7O0FBRURDLEVBQUFBLFdBQVcsR0FBRztBQUNaLFVBQU1DLFFBQVEsR0FBRyxLQUFLUCxRQUFMLENBQWNPLFFBQS9CO0FBQ0EsVUFBTUMsT0FBTyxHQUFHRCxRQUFRLENBQUVBLFFBQVEsQ0FBQ0UsTUFBVCxHQUFrQkMsSUFBSSxDQUFDQyxNQUFMLEVBQW5CLElBQXFDLENBQXRDLENBQXhCO0FBRUEsU0FBS0MsTUFBTCxDQUFZQyxDQUFaLEdBQWdCTCxPQUFPLENBQUNLLENBQVIsR0FBWSxLQUFLZixLQUFqQztBQUNBLFNBQUtjLE1BQUwsQ0FBWUUsQ0FBWixHQUFnQk4sT0FBTyxDQUFDTSxDQUFSLEdBQVksS0FBS2hCLEtBQWpDO0FBQ0EsU0FBS2MsTUFBTCxDQUFZRyxDQUFaLEdBQWdCUCxPQUFPLENBQUNPLENBQVIsR0FBWSxLQUFLakIsS0FBakM7QUFFQSxXQUFPLEtBQUtjLE1BQVo7QUFDRDs7QUFyRHdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFpvbmUgZnJvbSAnLi9ab25lJztcbmltcG9ydCB7IFpPTkVfVFlQRV9NRVNIIGFzIHR5cGUgfSBmcm9tICcuL3R5cGVzJztcblxuLyoqXG4gKiBVc2VzIGEgdGhyZWUgVEhSRUUuR2VvbWV0cnkgdG8gZGV0ZXJtaW5lIHRoZSB6b25lIHBhcmFtZXRlcnMuXG4gKlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNoWm9uZSBleHRlbmRzIFpvbmUge1xuICAvKipcbiAgICogQGNvbnN0cnVjdHMge01lc2hab25lfVxuICAgKlxuICAgKiBAcGFyYW0ge1RIUkVFLkdlb21ldHJ5fE1lc2h9IGJvdW5kcyAtIHRoZSBnZW9tZXRyeSBvciBtZXNoIHRoYXQgd2lsbCBkZXRlcm1pbmUgdGhlIHpvbmUgYm91bmRzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZSAtIHRoZSB6b25lIHNjYWxlXG4gICAqIEBwYXJhbSB7VEhSRUUuR2VvbWV0cnl9IFRocmVlR2VvbWV0cnkgLSB0aGUgdGhyZWUgZ2VvbWV0cnkgY2xhc3NcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihib3VuZHMsIHNjYWxlID0gMSwgVGhyZWVHZW9tZXRyeSkge1xuICAgIHN1cGVyKHR5cGUpO1xuXG4gICAgdGhpcy5nZW9tZXRyeSA9IG51bGw7XG4gICAgdGhpcy5zY2FsZSA9IHNjYWxlO1xuICAgIHRoaXMuc3VwcG9ydHNDcm9zc2luZyA9IGZhbHNlO1xuXG4gICAgaWYgKGJvdW5kcy50eXBlICYmIGJvdW5kcy50eXBlID09PSAnR2VvbWV0cnknKSB7XG4gICAgICB0aGlzLmdlb21ldHJ5ID0gYm91bmRzO1xuICAgIH1cblxuICAgIGlmIChib3VuZHMuZ2VvbWV0cnkpIHtcbiAgICAgIHRoaXMuZ2VvbWV0cnkgPSBib3VuZHMuZ2VvbWV0cnk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmdlb21ldHJ5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdNZXNoWm9uZSB1bmFibGUgdG8gc2V0IGdlb21ldHJ5IGZyb20gdGhlIHN1cHBsaWVkIGJvdW5kcydcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZ2VvbWV0cnkuaXNCdWZmZXJHZW9tZXRyeSkge1xuICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBUaHJlZUdlb21ldHJ5KCkuZnJvbUJ1ZmZlckdlb21ldHJ5KHRoaXMuZ2VvbWV0cnkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgdG8gaW5kaWNhdGUgdGhpcyBpcyBhIE1lc2hab25lLlxuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNNZXNoWm9uZSgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIGNvbnN0IHZlcnRpY2VzID0gdGhpcy5nZW9tZXRyeS52ZXJ0aWNlcztcbiAgICBjb25zdCByVmVjdG9yID0gdmVydGljZXNbKHZlcnRpY2VzLmxlbmd0aCAqIE1hdGgucmFuZG9tKCkpID4+IDBdO1xuXG4gICAgdGhpcy52ZWN0b3IueCA9IHJWZWN0b3IueCAqIHRoaXMuc2NhbGU7XG4gICAgdGhpcy52ZWN0b3IueSA9IHJWZWN0b3IueSAqIHRoaXMuc2NhbGU7XG4gICAgdGhpcy52ZWN0b3IueiA9IHJWZWN0b3IueiAqIHRoaXMuc2NhbGU7XG5cbiAgICByZXR1cm4gdGhpcy52ZWN0b3I7XG4gIH1cbn1cbiJdfQ==