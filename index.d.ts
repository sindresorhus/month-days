/**
Get the number of days in a month.

@param month - Note that the month is zero-index to be consistent with the native date methods. Default: Current UTC month.
@param year - Default: Current UTC year.

@example
```
import monthDays = require('month-days');

monthDays(1, 2016);
//=> 29
```
*/
declare function monthDays(month?: number | null, year?: number): number;

export = monthDays;
