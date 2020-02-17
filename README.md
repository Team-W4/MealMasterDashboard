# MealMaster Frontend Dashboard

<p align="center">
  <img src='https://drive.google.com/u/1/uc?id=175o_El8Mxm_YKVS_sFNkstdXErdeePaI&export=download'
</p>
<p align="center">
  <strong>Plan, Cook, and Savor all your food</strong>
</p>

## Contents

- [Architecture Overview](#-Architecture-Overview)
- [Repository Structure](#-Repository-Structure)
- [Environment Setup](#-Environment-Setup)
- [Development Process](#-Development-Process)
- [More](#-More)

## 🍔 Architecture Overview

Frameworks
- **React Native** - https://facebook.github.io/react-native/
- **Redux** - https://redux.js.org/
- **Styled Components** - https://styled-components.com/
- **Styled System** - https://styled-system.com/

## 🎉 Repository Structure

What's what?

- `/src` => the application source code (entry point for module structure)
- `/public` => static resources (logo, manifest, ...)
- `/android` & `/ios` => build code for respective OS
- `/node_modules` => all current node dependencies

## 📋 Environment Setup

1. For iOS, only available on Mac, Install [XCode][x] from AppStore. For Android, install [Android Studio][a]
2. Follow this [guide][g] from React Native to setup the basic development apps. But TLDR; are ...

- For Mac 🖥, Install Node & Watchman
  ```
  brew install node
  brew install watchman
  ```
  - For iOS, install CocoaPods
    ```
    sudo gem install cocoapods
    ```
  - For Android, install JDK
    ```
    brew tap AdoptOpenJDK/openjdk
    brew cask install adoptopenjdk8
    ```

- For Windows 💻, install Node, Python2, JDK
  ```
  choco install -y nodejs.install python2 jdk8
  ```
  And follow the guide to add env. variables

[x]: https://apps.apple.com/us/app/xcode/id497799835?mt=12
[a]: https://developer.android.com/studio
[g]: https://facebook.github.io/react-native/docs/getting-started

## 🚀 Development Process

1. `npm install`
2. `npm run ios` or `npm run android` 

Naming guidelines:
- All components are named PascalCased, with named folder and an index.ts(x)
- All other directories are camelCased
- Variables & props are camelCased
- Types & interfaces are PascalCased
- Redux actions are UPPERCASED
- String are 'single-quoted', except for string literals in `<Text props="string"/>`

Component guidelines:
- Color palette, spacing, and font styles is available in `/src/styled/variables`. Only these colors should be used, and with proper names.
- All `<Text />`, `<Button />`, and `<Input />` are semantically categorized using `variant="success"` and `size="title"`. Limit custom styling if can.
- Dis-prefer inline styles, use styled-components if can.
- All spaces, fontWeights, fontSizes, colors, and lineHeights are available in `theme` when used in styled-components. Do not use custom pixels. E.g.:
  ```jsx
  const StyledTag = styled.Text`
    color: ${({ theme: { colors } }) => colors.neoncarrot};
  `;
  ```


## 👏 More
Let's do this thing
