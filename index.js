const isDefined = value => value !== undefined;

export default function monthDays({month, year} = {}) {
	if (isDefined(month) && typeof month !== 'number') {
		throw new TypeError(`Expected \`month\` to be of type \`number\`, got \`${typeof month}\``);
	}

	if (isDefined(year) && typeof year !== 'number') {
		throw new TypeError(`Expected \`year\` to be of type \`number\`, got \`${typeof year}\``);
	}

	const now = new Date();
	month = isDefined(month) ? month : now.getUTCMonth();
	year = isDefined(year) ? year : now.getUTCFullYear();

	return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
}
