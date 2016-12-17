'use strict';
module.exports = (month = (new Date()).getUTCMonth(), year = (new Date()).getUTCFullYear()) => {
	return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
};
