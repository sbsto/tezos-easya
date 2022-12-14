import { MathUtils, Vector3D, createSpan } from '../math';
import Behaviour from './Behaviour';
import { DEFAULT_RANDOM_DRIFT_DELAY } from './constants';
import { getEasingByName } from '../ease';
import { BEHAVIOUR_TYPE_RANDOM_DRIFT as type } from './types';
/**
 * Behaviour that causes particles to drift to random coordinates in 3D space.
 *
 */

export default class RandomDrift extends Behaviour {
  /**
   * Constructs a RandomDrift behaviour instance.
   *
   * @param {number} driftX - x axis drift
   * @param {number} driftY - y axis drift
   * @param {number} driftZ - z axis drift
   * @param {number} [delay=DEFAULT_RANDOM_DRIFT_DELAY] - drift delay
   * @param {number} life - The life of the particle
   * @param {function} easing - The behaviour's decaying trend
   * @return void
   */
  constructor(driftX, driftY, driftZ, delay = DEFAULT_RANDOM_DRIFT_DELAY, life, easing, isEnabled = true) {
    super(life, easing, type, isEnabled);
    this.reset(driftX, driftY, driftZ, delay);
    /**
     * @desc Internal time used for calculating drift vs internal delay.
     * @type {number}
     */

    this.time = 0;
  }
  /**
   * Resets the behaviour properties.
   *
   * @param {number} driftX - x axis drift
   * @param {number} driftY - y axis drift
   * @param {number} driftZ - z axis drift
   * @param {number} [delay=DEFAULT_RANDOM_DRIFT_DELAY] - drift delay
   * @param {number} life - The life of the particle
   * @param {function} easing - The behaviour's decaying trend
   */


  reset(driftX, driftY, driftZ, delay = DEFAULT_RANDOM_DRIFT_DELAY, life, easing) {
    /**
     * @desc A Vector3D that stores the drift properties.
     * @type {Vector3D}
     */
    this.randomForce = this.normalizeForce(new Vector3D(driftX, driftY, driftZ));
    /**
     * @desc A Span containing the delay supplied.
     * @type {Span}
     */

    this.delayPan = createSpan(delay);
    this.time = 0;
    life && super.reset(life, easing);
  }
  /**
   * Mutates the particle.acceleration property.
   *
   * @param {object} particle - the particle to apply the behaviour to
   * @param {number} time - engine time
   * @param {integer} index - the particle index
   * @return void
   */


  mutate(particle, time, index) {
    this.energize(particle, time, index);
    this.time += time;

    if (this.time >= this.delayPan.getValue()) {
      const ax = MathUtils.randomAToB(-this.randomForce.x, this.randomForce.x);
      const ay = MathUtils.randomAToB(-this.randomForce.y, this.randomForce.y);
      const az = MathUtils.randomAToB(-this.randomForce.z, this.randomForce.z);
      particle.acceleration.addValue(ax, ay, az);
      this.time = 0;
    }
  }

  static fromJSON(json) {
    const {
      x,
      y,
      z,
      delay,
      life,
      easing,
      isEnabled = true
    } = json;
    return new RandomDrift(x, y, z, delay, life, getEasingByName(easing), isEnabled);
  }

}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iZWhhdmlvdXIvUmFuZG9tRHJpZnQuanMiXSwibmFtZXMiOlsiTWF0aFV0aWxzIiwiVmVjdG9yM0QiLCJjcmVhdGVTcGFuIiwiQmVoYXZpb3VyIiwiREVGQVVMVF9SQU5ET01fRFJJRlRfREVMQVkiLCJnZXRFYXNpbmdCeU5hbWUiLCJCRUhBVklPVVJfVFlQRV9SQU5ET01fRFJJRlQiLCJ0eXBlIiwiUmFuZG9tRHJpZnQiLCJjb25zdHJ1Y3RvciIsImRyaWZ0WCIsImRyaWZ0WSIsImRyaWZ0WiIsImRlbGF5IiwibGlmZSIsImVhc2luZyIsImlzRW5hYmxlZCIsInJlc2V0IiwidGltZSIsInJhbmRvbUZvcmNlIiwibm9ybWFsaXplRm9yY2UiLCJkZWxheVBhbiIsIm11dGF0ZSIsInBhcnRpY2xlIiwiaW5kZXgiLCJlbmVyZ2l6ZSIsImdldFZhbHVlIiwiYXgiLCJyYW5kb21BVG9CIiwieCIsImF5IiwieSIsImF6IiwieiIsImFjY2VsZXJhdGlvbiIsImFkZFZhbHVlIiwiZnJvbUpTT04iLCJqc29uIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxTQUFULEVBQW9CQyxRQUFwQixFQUE4QkMsVUFBOUIsUUFBZ0QsU0FBaEQ7QUFFQSxPQUFPQyxTQUFQLE1BQXNCLGFBQXRCO0FBQ0EsU0FBU0MsMEJBQVQsUUFBMkMsYUFBM0M7QUFDQSxTQUFTQyxlQUFULFFBQWdDLFNBQWhDO0FBQ0EsU0FBU0MsMkJBQTJCLElBQUlDLElBQXhDLFFBQW9ELFNBQXBEO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsZUFBZSxNQUFNQyxXQUFOLFNBQTBCTCxTQUExQixDQUFvQztBQUNqRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0VNLEVBQUFBLFdBQVcsQ0FDVEMsTUFEUyxFQUVUQyxNQUZTLEVBR1RDLE1BSFMsRUFJVEMsS0FBSyxHQUFHVCwwQkFKQyxFQUtUVSxJQUxTLEVBTVRDLE1BTlMsRUFPVEMsU0FBUyxHQUFHLElBUEgsRUFRVDtBQUNBLFVBQU1GLElBQU4sRUFBWUMsTUFBWixFQUFvQlIsSUFBcEIsRUFBMEJTLFNBQTFCO0FBRUEsU0FBS0MsS0FBTCxDQUFXUCxNQUFYLEVBQW1CQyxNQUFuQixFQUEyQkMsTUFBM0IsRUFBbUNDLEtBQW5DO0FBRUE7QUFDSjtBQUNBO0FBQ0E7O0FBQ0ksU0FBS0ssSUFBTCxHQUFZLENBQVo7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDRUQsRUFBQUEsS0FBSyxDQUNIUCxNQURHLEVBRUhDLE1BRkcsRUFHSEMsTUFIRyxFQUlIQyxLQUFLLEdBQUdULDBCQUpMLEVBS0hVLElBTEcsRUFNSEMsTUFORyxFQU9IO0FBQ0E7QUFDSjtBQUNBO0FBQ0E7QUFDSSxTQUFLSSxXQUFMLEdBQW1CLEtBQUtDLGNBQUwsQ0FDakIsSUFBSW5CLFFBQUosQ0FBYVMsTUFBYixFQUFxQkMsTUFBckIsRUFBNkJDLE1BQTdCLENBRGlCLENBQW5CO0FBR0E7QUFDSjtBQUNBO0FBQ0E7O0FBQ0ksU0FBS1MsUUFBTCxHQUFnQm5CLFVBQVUsQ0FBQ1csS0FBRCxDQUExQjtBQUNBLFNBQUtLLElBQUwsR0FBWSxDQUFaO0FBRUFKLElBQUFBLElBQUksSUFBSSxNQUFNRyxLQUFOLENBQVlILElBQVosRUFBa0JDLE1BQWxCLENBQVI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFTyxFQUFBQSxNQUFNLENBQUNDLFFBQUQsRUFBV0wsSUFBWCxFQUFpQk0sS0FBakIsRUFBd0I7QUFDNUIsU0FBS0MsUUFBTCxDQUFjRixRQUFkLEVBQXdCTCxJQUF4QixFQUE4Qk0sS0FBOUI7QUFFQSxTQUFLTixJQUFMLElBQWFBLElBQWI7O0FBRUEsUUFBSSxLQUFLQSxJQUFMLElBQWEsS0FBS0csUUFBTCxDQUFjSyxRQUFkLEVBQWpCLEVBQTJDO0FBQ3pDLFlBQU1DLEVBQUUsR0FBRzNCLFNBQVMsQ0FBQzRCLFVBQVYsQ0FBcUIsQ0FBQyxLQUFLVCxXQUFMLENBQWlCVSxDQUF2QyxFQUEwQyxLQUFLVixXQUFMLENBQWlCVSxDQUEzRCxDQUFYO0FBQ0EsWUFBTUMsRUFBRSxHQUFHOUIsU0FBUyxDQUFDNEIsVUFBVixDQUFxQixDQUFDLEtBQUtULFdBQUwsQ0FBaUJZLENBQXZDLEVBQTBDLEtBQUtaLFdBQUwsQ0FBaUJZLENBQTNELENBQVg7QUFDQSxZQUFNQyxFQUFFLEdBQUdoQyxTQUFTLENBQUM0QixVQUFWLENBQXFCLENBQUMsS0FBS1QsV0FBTCxDQUFpQmMsQ0FBdkMsRUFBMEMsS0FBS2QsV0FBTCxDQUFpQmMsQ0FBM0QsQ0FBWDtBQUVBVixNQUFBQSxRQUFRLENBQUNXLFlBQVQsQ0FBc0JDLFFBQXRCLENBQStCUixFQUEvQixFQUFtQ0csRUFBbkMsRUFBdUNFLEVBQXZDO0FBRUEsV0FBS2QsSUFBTCxHQUFZLENBQVo7QUFDRDtBQUNGOztBQUVjLFNBQVJrQixRQUFRLENBQUNDLElBQUQsRUFBTztBQUNwQixVQUFNO0FBQUVSLE1BQUFBLENBQUY7QUFBS0UsTUFBQUEsQ0FBTDtBQUFRRSxNQUFBQSxDQUFSO0FBQVdwQixNQUFBQSxLQUFYO0FBQWtCQyxNQUFBQSxJQUFsQjtBQUF3QkMsTUFBQUEsTUFBeEI7QUFBZ0NDLE1BQUFBLFNBQVMsR0FBRztBQUE1QyxRQUFxRHFCLElBQTNEO0FBRUEsV0FBTyxJQUFJN0IsV0FBSixDQUNMcUIsQ0FESyxFQUVMRSxDQUZLLEVBR0xFLENBSEssRUFJTHBCLEtBSkssRUFLTEMsSUFMSyxFQU1MVCxlQUFlLENBQUNVLE1BQUQsQ0FOVixFQU9MQyxTQVBLLENBQVA7QUFTRDs7QUF2R2dEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWF0aFV0aWxzLCBWZWN0b3IzRCwgY3JlYXRlU3BhbiB9IGZyb20gJy4uL21hdGgnO1xuXG5pbXBvcnQgQmVoYXZpb3VyIGZyb20gJy4vQmVoYXZpb3VyJztcbmltcG9ydCB7IERFRkFVTFRfUkFORE9NX0RSSUZUX0RFTEFZIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0RWFzaW5nQnlOYW1lIH0gZnJvbSAnLi4vZWFzZSc7XG5pbXBvcnQgeyBCRUhBVklPVVJfVFlQRV9SQU5ET01fRFJJRlQgYXMgdHlwZSB9IGZyb20gJy4vdHlwZXMnO1xuXG4vKipcbiAqIEJlaGF2aW91ciB0aGF0IGNhdXNlcyBwYXJ0aWNsZXMgdG8gZHJpZnQgdG8gcmFuZG9tIGNvb3JkaW5hdGVzIGluIDNEIHNwYWNlLlxuICpcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuZG9tRHJpZnQgZXh0ZW5kcyBCZWhhdmlvdXIge1xuICAvKipcbiAgICogQ29uc3RydWN0cyBhIFJhbmRvbURyaWZ0IGJlaGF2aW91ciBpbnN0YW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRyaWZ0WCAtIHggYXhpcyBkcmlmdFxuICAgKiBAcGFyYW0ge251bWJlcn0gZHJpZnRZIC0geSBheGlzIGRyaWZ0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkcmlmdFogLSB6IGF4aXMgZHJpZnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtkZWxheT1ERUZBVUxUX1JBTkRPTV9EUklGVF9ERUxBWV0gLSBkcmlmdCBkZWxheVxuICAgKiBAcGFyYW0ge251bWJlcn0gbGlmZSAtIFRoZSBsaWZlIG9mIHRoZSBwYXJ0aWNsZVxuICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBlYXNpbmcgLSBUaGUgYmVoYXZpb3VyJ3MgZGVjYXlpbmcgdHJlbmRcbiAgICogQHJldHVybiB2b2lkXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBkcmlmdFgsXG4gICAgZHJpZnRZLFxuICAgIGRyaWZ0WixcbiAgICBkZWxheSA9IERFRkFVTFRfUkFORE9NX0RSSUZUX0RFTEFZLFxuICAgIGxpZmUsXG4gICAgZWFzaW5nLFxuICAgIGlzRW5hYmxlZCA9IHRydWVcbiAgKSB7XG4gICAgc3VwZXIobGlmZSwgZWFzaW5nLCB0eXBlLCBpc0VuYWJsZWQpO1xuXG4gICAgdGhpcy5yZXNldChkcmlmdFgsIGRyaWZ0WSwgZHJpZnRaLCBkZWxheSk7XG5cbiAgICAvKipcbiAgICAgKiBAZGVzYyBJbnRlcm5hbCB0aW1lIHVzZWQgZm9yIGNhbGN1bGF0aW5nIGRyaWZ0IHZzIGludGVybmFsIGRlbGF5LlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICovXG4gICAgdGhpcy50aW1lID0gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIGJlaGF2aW91ciBwcm9wZXJ0aWVzLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gZHJpZnRYIC0geCBheGlzIGRyaWZ0XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkcmlmdFkgLSB5IGF4aXMgZHJpZnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRyaWZ0WiAtIHogYXhpcyBkcmlmdFxuICAgKiBAcGFyYW0ge251bWJlcn0gW2RlbGF5PURFRkFVTFRfUkFORE9NX0RSSUZUX0RFTEFZXSAtIGRyaWZ0IGRlbGF5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBsaWZlIC0gVGhlIGxpZmUgb2YgdGhlIHBhcnRpY2xlXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGVhc2luZyAtIFRoZSBiZWhhdmlvdXIncyBkZWNheWluZyB0cmVuZFxuICAgKi9cbiAgcmVzZXQoXG4gICAgZHJpZnRYLFxuICAgIGRyaWZ0WSxcbiAgICBkcmlmdFosXG4gICAgZGVsYXkgPSBERUZBVUxUX1JBTkRPTV9EUklGVF9ERUxBWSxcbiAgICBsaWZlLFxuICAgIGVhc2luZ1xuICApIHtcbiAgICAvKipcbiAgICAgKiBAZGVzYyBBIFZlY3RvcjNEIHRoYXQgc3RvcmVzIHRoZSBkcmlmdCBwcm9wZXJ0aWVzLlxuICAgICAqIEB0eXBlIHtWZWN0b3IzRH1cbiAgICAgKi9cbiAgICB0aGlzLnJhbmRvbUZvcmNlID0gdGhpcy5ub3JtYWxpemVGb3JjZShcbiAgICAgIG5ldyBWZWN0b3IzRChkcmlmdFgsIGRyaWZ0WSwgZHJpZnRaKVxuICAgICk7XG4gICAgLyoqXG4gICAgICogQGRlc2MgQSBTcGFuIGNvbnRhaW5pbmcgdGhlIGRlbGF5IHN1cHBsaWVkLlxuICAgICAqIEB0eXBlIHtTcGFufVxuICAgICAqL1xuICAgIHRoaXMuZGVsYXlQYW4gPSBjcmVhdGVTcGFuKGRlbGF5KTtcbiAgICB0aGlzLnRpbWUgPSAwO1xuXG4gICAgbGlmZSAmJiBzdXBlci5yZXNldChsaWZlLCBlYXNpbmcpO1xuICB9XG5cbiAgLyoqXG4gICAqIE11dGF0ZXMgdGhlIHBhcnRpY2xlLmFjY2VsZXJhdGlvbiBwcm9wZXJ0eS5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcnRpY2xlIC0gdGhlIHBhcnRpY2xlIHRvIGFwcGx5IHRoZSBiZWhhdmlvdXIgdG9cbiAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWUgLSBlbmdpbmUgdGltZVxuICAgKiBAcGFyYW0ge2ludGVnZXJ9IGluZGV4IC0gdGhlIHBhcnRpY2xlIGluZGV4XG4gICAqIEByZXR1cm4gdm9pZFxuICAgKi9cbiAgbXV0YXRlKHBhcnRpY2xlLCB0aW1lLCBpbmRleCkge1xuICAgIHRoaXMuZW5lcmdpemUocGFydGljbGUsIHRpbWUsIGluZGV4KTtcblxuICAgIHRoaXMudGltZSArPSB0aW1lO1xuXG4gICAgaWYgKHRoaXMudGltZSA+PSB0aGlzLmRlbGF5UGFuLmdldFZhbHVlKCkpIHtcbiAgICAgIGNvbnN0IGF4ID0gTWF0aFV0aWxzLnJhbmRvbUFUb0IoLXRoaXMucmFuZG9tRm9yY2UueCwgdGhpcy5yYW5kb21Gb3JjZS54KTtcbiAgICAgIGNvbnN0IGF5ID0gTWF0aFV0aWxzLnJhbmRvbUFUb0IoLXRoaXMucmFuZG9tRm9yY2UueSwgdGhpcy5yYW5kb21Gb3JjZS55KTtcbiAgICAgIGNvbnN0IGF6ID0gTWF0aFV0aWxzLnJhbmRvbUFUb0IoLXRoaXMucmFuZG9tRm9yY2UueiwgdGhpcy5yYW5kb21Gb3JjZS56KTtcblxuICAgICAgcGFydGljbGUuYWNjZWxlcmF0aW9uLmFkZFZhbHVlKGF4LCBheSwgYXopO1xuXG4gICAgICB0aGlzLnRpbWUgPSAwO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgeyB4LCB5LCB6LCBkZWxheSwgbGlmZSwgZWFzaW5nLCBpc0VuYWJsZWQgPSB0cnVlIH0gPSBqc29uO1xuXG4gICAgcmV0dXJuIG5ldyBSYW5kb21EcmlmdChcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgeixcbiAgICAgIGRlbGF5LFxuICAgICAgbGlmZSxcbiAgICAgIGdldEVhc2luZ0J5TmFtZShlYXNpbmcpLFxuICAgICAgaXNFbmFibGVkXG4gICAgKTtcbiAgfVxufVxuIl19