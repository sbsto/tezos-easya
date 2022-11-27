/**
 * Map of particle IDs to integer ids
 */
export class UniqueList {
  constructor(max = Infinity) {
    this.max = max;
    this.count = 0;
    this._items = {};
  }

  add(item) {
    if (this._items[item] !== undefined) {
      return;
    }

    this._items[item] = this.count++;
  }

  find(item) {
    return this._items[item];
  }

  destroy() {
    this._items = {};
    this.count = 0;
  }

}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9yZW5kZXJlci9HUFVSZW5kZXJlci9jb21tb24vc3RvcmVzL1VuaXF1ZUxpc3QuanMiXSwibmFtZXMiOlsiVW5pcXVlTGlzdCIsImNvbnN0cnVjdG9yIiwibWF4IiwiSW5maW5pdHkiLCJjb3VudCIsIl9pdGVtcyIsImFkZCIsIml0ZW0iLCJ1bmRlZmluZWQiLCJmaW5kIiwiZGVzdHJveSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxNQUFNQSxVQUFOLENBQWlCO0FBQ3RCQyxFQUFBQSxXQUFXLENBQUNDLEdBQUcsR0FBR0MsUUFBUCxFQUFpQjtBQUMxQixTQUFLRCxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLRSxLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0Q7O0FBRURDLEVBQUFBLEdBQUcsQ0FBQ0MsSUFBRCxFQUFPO0FBQ1IsUUFBSSxLQUFLRixNQUFMLENBQVlFLElBQVosTUFBc0JDLFNBQTFCLEVBQXFDO0FBQ25DO0FBQ0Q7O0FBRUQsU0FBS0gsTUFBTCxDQUFZRSxJQUFaLElBQW9CLEtBQUtILEtBQUwsRUFBcEI7QUFDRDs7QUFFREssRUFBQUEsSUFBSSxDQUFDRixJQUFELEVBQU87QUFDVCxXQUFPLEtBQUtGLE1BQUwsQ0FBWUUsSUFBWixDQUFQO0FBQ0Q7O0FBRURHLEVBQUFBLE9BQU8sR0FBRztBQUNSLFNBQUtMLE1BQUwsR0FBYyxFQUFkO0FBQ0EsU0FBS0QsS0FBTCxHQUFhLENBQWI7QUFDRDs7QUF0QnFCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNYXAgb2YgcGFydGljbGUgSURzIHRvIGludGVnZXIgaWRzXG4gKi9cbmV4cG9ydCBjbGFzcyBVbmlxdWVMaXN0IHtcbiAgY29uc3RydWN0b3IobWF4ID0gSW5maW5pdHkpIHtcbiAgICB0aGlzLm1heCA9IG1heDtcbiAgICB0aGlzLmNvdW50ID0gMDtcbiAgICB0aGlzLl9pdGVtcyA9IHt9O1xuICB9XG5cbiAgYWRkKGl0ZW0pIHtcbiAgICBpZiAodGhpcy5faXRlbXNbaXRlbV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2l0ZW1zW2l0ZW1dID0gdGhpcy5jb3VudCsrO1xuICB9XG5cbiAgZmluZChpdGVtKSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zW2l0ZW1dO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLl9pdGVtcyA9IHt9O1xuICAgIHRoaXMuY291bnQgPSAwO1xuICB9XG59XG4iXX0=