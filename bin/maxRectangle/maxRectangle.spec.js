"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const maxRectangle_1 = require("./maxRectangle");
describe("Maximum size rectangle", () => {
    it("should return the max size", () => {
        chai_1.expect(maxRectangle_1.MaxRectangle.getMaxRectangle([10])).to.be.equal(10);
        chai_1.expect(maxRectangle_1.MaxRectangle.getMaxRectangle([2, 1, 5, 6, 2, 3])).to.be.equal(10);
        chai_1.expect(maxRectangle_1.MaxRectangle.getMaxRectangle([5, 7, 9, 7, 8, 4, 6, 10, 11, 2])).to.be.equal(36);
    });
});
//# sourceMappingURL=maxRectangle.spec.js.map