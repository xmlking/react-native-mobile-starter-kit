Mobile Starter Kit
==================

Mobile Starter Kit for [React Native](https://facebook.github.io/react-native/) + [NativeBase](http://nativebase.io/) + [Redux](http://redux.js.org) + [CodePush](https://github.com/Microsoft/react-native-code-push) + [TypeScript](https://www.typescriptlang.org/) Apps (iOS & Android).

### Getting Started

Clone or fork this repository:

```sh
git clone https://github.com/xmlking/mobile-starter-kit.git
cd mobile-starter-kit
```

Install dependencies:

> one time only

```sh
yarn
react-native link
```


Build the source-code with TypeScript:

```sh
# Build once
yarn run build

# Build and watch for changes
yarn run watch
```

Start React Native Server:

```sh
yarn start
```

### Debug
http://localhost:8081/debugger-ui
```
react-native log-ios
react-native log-android
```

### Test 

### Run 

#### iOS Simulator

```sh
yarn run ios
```

#### Android Simulator

```sh
yarn run android
```

### Reset 

```sh
react-native upgrade
react-native link
```

### CodePush