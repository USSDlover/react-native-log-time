"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reactNativeLogTime = void 0;
const reactNativeLogTime = () => {
    if (console.time === undefined) {
        // @ts-ignore
        console.time = (timeStart, message) => {
            const timeEnd = new Date().getDate();
            console.log(`Time Spent: ${Math.abs(timeEnd - timeStart)} ms; \n${message}`);
        };
    }
};
exports.reactNativeLogTime = reactNativeLogTime;
