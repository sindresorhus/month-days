import test from 'ava';
import m from './';

test(t => {
	t.throws(() => m('5'), TypeError);
	t.throws(() => m(false), TypeError);
	t.throws(() => m(5, true), TypeError);
	t.is(m(5, 2014), 30);
	t.is(m(5), 30);
	t.true(m() >= 28);
	t.is(m(0, 2015), 31);
});
