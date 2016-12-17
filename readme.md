# month-days [![Build Status](https://travis-ci.org/sindresorhus/month-days.svg?branch=master)](https://travis-ci.org/sindresorhus/month-days)

> Get the number of days in a month


## Install

```
$ npm install --save month-days
```


## Usage

```js
const monthDays = require('month-days');

monthDays(1, 2016);
//=> 29
```


## API

### monthDays([month], [year])

#### month

Type: `number`<br>
Default: Current UTC month

Note that the month is zero-index to be consistent with the native date methods.

#### year

Type: `number`<br>
Default: Current UTC year


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
