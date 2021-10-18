import {expectType} from 'tsd';
import monthDays from './index.js';

expectType<number>(monthDays());
expectType<number>(monthDays({month: 1}));
expectType<number>(monthDays({month: 1, year: 2016}));
expectType<number>(monthDays({year: 2016}));
