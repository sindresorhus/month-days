import test from 'ava';
import monthDays from './index.js';

test('main', t => {
	t.throws(() => {
		monthDays({month: '5'});
	}, {
		instanceOf: TypeError,
	});

	t.throws(() => {
		monthDays({month: false});
	}, {
		instanceOf: TypeError,
	});

	t.throws(() => {
		monthDays({month: 5, year: true});
	}, {
		instanceOf: TypeError,
	});

	t.is(monthDays({month: 5, year: 2014}), 30);
	t.is(monthDays({month: 5}), 30);
	t.true(monthDays() >= 28);
	t.is(monthDays({month: 0, year: 2015}), 31);
});
