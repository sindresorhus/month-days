'use strict';
module.exports = (month, year) => {
	const now = new Date();
	month = (month === null || month === undefined) ? now.getUTCMonth() : month;
	year = (year === null || year === undefined) ? now.getUTCFullYear() : year;

	return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
};
