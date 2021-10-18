# month-days

> Get the number of days in a month

## Install

```sh
npm install month-days
```

## Usage

```js
import monthDays from 'month-days';

monthDays({month: 1, year: 2016});
//=> 29
```

## API

### monthDays(options?)

#### options

Type: `object`

##### month

Type: `number`\
Default: Current UTC month

Note that the month is zero-index to be consistent with the native date methods.

##### year

Type: `number`\
Default: Current UTC year
