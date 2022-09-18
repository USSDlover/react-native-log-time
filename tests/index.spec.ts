import 'mocha';
import { expect } from "chai";
import { reactNativeLogTime } from "../src";

describe('Log Time Cost', function () {
    it('should define `time` function for `console` object', () => {
        if (console.time)
            // @ts-ignore
            console.time = undefined;
        expect(console.time).to.be.undefined;
        reactNativeLogTime();
        expect(console.time).not.to.be.undefined;
    })
});