# hello-react

React starter with ES6, grunt and webpack.

## What you get

- React 0.14
- ES6 and JSX to ES5 via babel
- ES6 and JSX validation via ESLint
- webpack with react hot loader
- Grunt tasks

## Build

- Have [NodeJS](http://nodejs.org/) installed.
- Run these lines:

```bash
npm install -g grunt-cli
npm install
npm start
```

  Note: `npm start` will open [localhost:3000](http://localhost:3000) in Chrome.
  If you do not install Chrome, you can use the [no-chrome branch][no-chrome].

[no-chrome]: https://github.com/rhcad/hello-react/tree/no-chrome

- Other build tasks:

  - `grunt build`: Build the project for distributing.
  - `grunt dev`: Build the project for developing or debugging.
  - `grunt`: Validate all script files.
  - `grunt serve`: Build and preview the project for developing.
  - `grunt serve:dist`  Build and preview the project for distributing.

## License

This project and code is available under the [MIT license](LICENSE).

## Further reading

- [React Documents](http://facebook.github.io/react/docs/) or [中文版](http://reactjs.cn)
- [Grunt Tasks](http://gruntjs.com/configuring-tasks) or [中文版](http://www.gruntjs.net/configuring-tasks)
- [Webpack Configuration](http://webpack.github.io/docs/configuration.html)
- [Babel Presets](http://babeljs.io/docs/plugins)
- React template projects:
  - [webpack/react-starter](https://github.com/webpack/react-starter)
  - [kriasoft/react-starter-kit](https://github.com/kriasoft/react-starter-kit)
  - [badsyntax/react-seed](https://github.com/badsyntax/react-seed)
  - [ameyms/react-seed](https://github.com/ameyms/react-seed)
