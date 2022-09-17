(function reactNativeLogTime() {
    if (console.time)
        return;

    console.time = (timeStart, message) => {
        const timeEnd = new Date();
        console.log(`Time Spent: ${timeEnd - timeStart} ms; \n${message}`)
    }
});