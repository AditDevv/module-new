"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * This is a TypeScript port of the original Java version, which was written by
 * Gil Tene as described in
 * https://github.com/HdrHistogram/HdrHistogram
 * and released to the public domain, as explained at
 * http://creativecommons.org/publicdomain/zero/1.0/
 */
const TypedArrayHistogram_1 = require("./TypedArrayHistogram");
class Int32Histogram extends TypedArrayHistogram_1.default {
    constructor(lowestDiscernibleValue, highestTrackableValue, numberOfSignificantValueDigits) {
        super(Uint32Array, lowestDiscernibleValue, highestTrackableValue, numberOfSignificantValueDigits);
    }
}
exports.default = Int32Histogram;
//# sourceMappingURL=Int32Histogram.js.map