# Web Components Tutorial Repository

These are sources for tutorials published at [Alex Tech Adventures](http://alex-tech-adventures.com) and
[YouTube](https://www.youtube.com/playlist?list=PLXRC3l-ZhN3oVg9Wk7A7i6Qv_BXTrntZb).
The tutorial is derived from Admin LTE template at [AdminLTE repository](https://github.com/almasaeed2010/AdminLTE). The idea is to convert the template into reusable components without a framework, only HTML standards.

You can use issue tracker to report problems or suggestions.

---

Before starting the application install [Node.js](https://nodejs.org), [Yarn](https://yarnpkg.com), and [Browsersync](https://browsersync.io).

To start application, from within `src` directory run

```shell
browser-sync start --server --files="**/*"
```

To run unit tests, install needed dependencies with

```shell
yarn install
```

then run tests from within IDE or with

```shell
yarn test
```
