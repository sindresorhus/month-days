import test from 'ava';
import monthDays from '.';

test('main', t => {
	t.throws(() => monthDays('5'), TypeError);
	t.throws(() => monthDays(false), TypeError);
	t.throws(() => monthDays(5, true), TypeError);
	t.is(monthDays(5, 2014), 30);
	t.is(monthDays(5), 30);
	t.true(monthDays() >= 28);
	t.is(monthDays(0, 2015), 31);
});
