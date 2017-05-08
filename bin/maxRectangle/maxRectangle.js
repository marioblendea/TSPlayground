"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MaxRectangle {
    static getMaxRectangle(input) {
        this._input = input;
        let max = -1;
        max = MaxRectangle.getMax(0, input.length - 1, max);
        return max;
    }
    static getMax(start, end, max) {
        if (start > end) {
            return -1;
        }
        if (start === end) {
            return this._input[start];
        }
        let min = MaxRectangle.findMin(start, end);
        const maxLeft = MaxRectangle.getMax(start, min.index - 1, max);
        const maxRight = MaxRectangle.getMax(min.index + 1, end, max);
        return Math.max(maxLeft, maxRight, min.value * (end - start + 1));
    }
    static findMin(start, end) {
        let min = {
            value: Number.MAX_SAFE_INTEGER,
            index: -1
        };
        for (let i = start; i <= end; i++) {
            if (this._input[i] < min.value) {
                min.value = this._input[i];
                min.index = i;
            }
        }
        return min;
    }
}
exports.MaxRectangle = MaxRectangle;
//# sourceMappingURL=maxRectangle.js.map