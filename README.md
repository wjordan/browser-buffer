browser-buffer
=========

[![NPM version](https://badge.fury.io/js/browser-buffer.svg)](http://badge.fury.io/js/browser-buffer)
[![david-dm-status-badge](https://david-dm.org/wjordan/browser-buffer.svg)](https://david-dm.org/wjordan/browser-buffer#info=dependencies&view=table)
[![david-dm-status-badge](https://david-dm.org/wjordan/browser-buffer/dev-status.svg)](https://david-dm.org/wjordan/browser-buffer#info=devDependencies&view=table)

browser-buffer is an in-browser buffer module that emulates the [Node JS Buffer API](https://nodejs.org/docs/v0.10.0/api/buffer.html).

### Using

```
npm install browser-buffer
```

### Building

Prerequisites:

* Node and NPM

Release:
```
npm install
```

The minified release build can be found in `dist/buffer.js`.

### Testing and development

```
npm test
```

**(NOTE: This will launch multiple web browsers!)**. You may need to change `karma.conf.js` if you do not have Firefox installed.

Use `npm start` to run tests incrementally as you develop.

### License

browser-buffer is licensed under the MIT License. See `LICENSE` for details.
