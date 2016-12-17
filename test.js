import test from 'ava';
import m from './';

test(t => {
	t.is(m(5, 2014), 30);
	t.is(m(5), 30);
	t.true(m() >= 28);
	t.is(m(0, 2015), 31);
});
