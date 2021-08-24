# Studienarbeit-OCR

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

## About The Project

This app was developed alongside our project-thesis for OCR (optical character recognition). The goal within the time we were given was to create a simple app, which allows the user to read text within images. These images come from either their gallery or their camera.

### Built with

This project was built with

- React-Native
- Expo
- [react-native-tesseract-ocr](https://github.com/jonathanpalma/react-native-tesseract-ocr)

## Getting Started

### Prerequisites

- Android / iOS phone or emulator
- react native
- npm
- Java (preferably Java 8)

If you don't have a React Native development environment for android or iOS setup you can follow the steps found [here](https://reactnative.dev/docs/environment-setup).

### Installation

1. Clone the repository
2. Install the required NPM-packages via


```sh
npm install
```

## Usage

This app can be used to read texts in images.
To run the app on an Android device or emulator simply run

```sh
npm run android
```

Similarily to run the app on an iOS device or emulator simply run

```sh
npm run ios
```

This should start up the react-native metro-service and start the app on your device.

---

Optionally you could also manually start the react-native environment by first starting the metro-service.
Open a terminal and proceed with the following:

```sh
react-native start
```

In another terminal you may start to load the actual app.
In order to do so you have to run

```sh
react-native run-android
```

or

```sh
react-native run-ios
```

for your operating system respectively.

In the first terminal, where we started the metro-service, we can now see everything our app logs, as well as error messages and warnings. That might come in handy for debugging.

## Roadmap

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a list of proposed features (and known issues).

## Contributing

This is only the project of two students with limited time, so any contributions are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Jannik Schwarz - inf18147@lehre.dhbw-stuttgart.de

Alireza Gholami - inf18154@lehre.dhbw-stuttgart.de

Project Link: https://github.com/jschwarz98/Studienarbeit-OCR

## Acknowledgements

- [README-Template](https://github.com/othneildrew/Best-README-Template/blob/master/README.md)
