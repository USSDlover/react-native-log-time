## ReactNative Log Time

console.time is only available when connecting to chrome dev tools, and that will affect the performance, so we wrote this solution to make it available.

### Install

```bash
npm install -D react-native-log-time
```

### Example

```javascript
const timeStart = new Date()

for(let i = 0; i < 2000000000; i++) {
    // some calculation
}

console.time(timeStart, 'Calculation is done');
```

###### Output

```text
Time Spent: 250 ms;
Calculation is done
```

## Contributing

Make sure to follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)