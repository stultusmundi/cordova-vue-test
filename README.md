# Cordova Vue Android Example

A sample project demonstrating the integration of Apache Cordova with Vue 3 for Android app development.

## Features

- Vue 3 single file components
- Cordova device information display
- Error logging to file system
- Native alerts
- Splash screen and status bar integration

## Prerequisites

- Node.js and npm
- Android SDK and tools
- Java Development Kit (JDK)
- Gradle

## Project Setup

```
npm install
```

## Development Workflow

### Browser Development (without Cordova features)

```
npm run serve
```

### Android Development

Build and run on connected Android device or emulator:

```
npm run cordova-run-android
```

Live-reload during development:

```
npm run cordova-serve-android
```

### Building for Production

Build for Android:

```
npm run cordova-build-android
```

## Additional Commands

### Prepare Cordova resources
```
npm run cordova-prepare
```

### Lint and Fix Files
```
npm run lint
```

## Project Structure

- `src/` - Vue application source files
- `www/` - Build output directory 
- `platforms/` - Platform-specific code
- `plugins/` - Cordova plugins

## Customize Configuration
See [Vue CLI Configuration Reference](https://cli.vuejs.org/config/) and 
[Cordova Config Reference](https://cordova.apache.org/docs/en/latest/config_ref/)