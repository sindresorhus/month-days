import {expectType} from 'tsd';
import monthDays = require('.');

expectType<number>(monthDays());
expectType<number>(monthDays(1));
expectType<number>(monthDays(1, 2016));
expectType<number>(monthDays(null, 2016));
expectType<number>(monthDays(undefined, 2016));
