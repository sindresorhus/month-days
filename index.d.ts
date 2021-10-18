export interface Options {
	/**
	Note that the month is zero-index to be consistent with the native date methods.

	@default (new Date()).getUTCMonth()
	*/
	readonly month?: number;

	/**
	@default (new Date).getUTCFullYear()
	*/
	readonly year?: number;
}

/**
Get the number of days in a month.

@example
```
import monthDays from 'month-days';

monthDays({month: 1, year: 2016});
//=> 29
```
*/
export default function monthDays(options?: Options): number;
