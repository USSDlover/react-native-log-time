function reactNativeLogTime() {
    if (console.time === undefined) {
        // @ts-ignore
        console.time = (timeStart: number, message: string) => {
            const timeEnd = new Date().getDate();
            console.log(`Time Spent: ${Math.abs(timeEnd - timeStart)} ms; \n${message}`)
        }
    }
}