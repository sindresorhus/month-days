# month-days

> Get the number of days in a month


## Install

```
$ npm install month-days
```


## Usage

```js
const monthDays = require('month-days');

monthDays({month: 1, year: 2016});
//=> 29
```


## API

### monthDays([options])

#### options

Type: `object`

##### month

Type: `number`<br>
Default: Current UTC month

Note that the month is zero-index to be consistent with the native date methods.

##### year

Type: `number`<br>
Default: Current UTC year


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
