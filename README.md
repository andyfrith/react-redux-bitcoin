# React Redux Bitcoin

This demo is a React Redux application that provides current and historical _Bitcoin Price Index (BPI)_ data.

The BPI will be shown for the _USD_ currency.

_Bitcoin Monitor_ makes use of the _[CoinDesk Bitcoin Price Index API]_. Go [here](https://www.coindesk.com/price/) for more price information by CoinDesk.

Features:

* Show Current BPI for USD currency
* Show BPI for the past seven days for USD currency

This project also demonstrates:

* a typcial React project layout structure
* babel setup and configuration
* webpack setup and configuration
* eslint setup and configuration
* SCSS setup and configuration
* [CoinDesk Bitcoin Price Index API] integration
* Redux state management
* Redux promise middleware

**Screenshots:**

![](https://github.com/andyfrith/react-bitcoin-monitor/blob/master/public/img/ReactBitcoinMonitor.png)

---

## Developed With

* [Node.js](https://nodejs.org/en/) - Javascript runtime
* [React](https://reactjs.org/) - A javascript library for building user interfaces
* [Redux](https://redux.js.org/) - A predictable state management implementation
* [Redux-Promise-Middleware](https://github.com/pburtchaell/redux-promise-middleware) - FSA compliant Redux middleware for promises, async functions and conditional optimistic updates
* [Babel](https://babeljs.io/) - A transpiler for javascript
* [Webpack](https://webpack.js.org/) - A module bundler
* [SCSS](http://sass-lang.com/) - A css metalanguage
* [Bootstrap 4](https://getbootstrap.com/) - Bootstrap is an open source toolkit for developing with HTML, CSS, and JS
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* [CoinDesk Bitcoin Price Index API] - Provides Bitcoin Price Index data

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The following software is required to be installed on your system:

* Node 8.x
* Npm 3.x

Type the following commands in the terminal to verify your node and npm versions

```bash
node -v
npm -v
```

### Install

Follow the following steps to get development environment running.

* Clone _'react-redux-bitcoin'_ repository from GitHub

  ```bash
  git clone git@github.com:andyfrith/react-redux-bitcoin.git
  ```

* Install node modules

  ```bash
  cd react-redux-bitcoin
  yarn install
  ```

### Run

* Run start

  ```bash
  yarn start
  ```

---

## Links

* [**Portfolio**](http://goodapplemedia.com): Visit portfolio site at http://goodapplemedia.com.
* [**Andy Frith**](http://andyfrith.com): Learn more about the site developer at http://andyfrith.com.

[coindesk bitcoin price index api]: https://www.coindesk.com/api/
