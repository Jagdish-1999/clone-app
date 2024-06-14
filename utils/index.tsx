type KeyType = { [name: string]: any };

export const inventory = [
	{ name: "asparagus", type: "vegetables", quantity: 5 },
	{ name: "bananas", type: "fruit", quantity: 0 },
	{ name: "goat", type: "meat", quantity: 23 },
	{ name: "cherries", type: "fruit", quantity: 5 },
	{ name: "fish", type: "meat", quantity: 22 },
];

export const groupBy = <T extends KeyType>(arr: T[], key: keyof T) => {
	const result: { [k: string]: T[] } = arr.reduce((acc, cur) => {
		const keyValue = cur[key] as string;
		if (acc[keyValue]) {
			acc[keyValue].push(cur);
		} else {
			acc[keyValue] = [cur];
		}
		return acc;
	}, {} as { [k: string]: T[] });
	return result;
};

const name = "jAGAT pAL"; // Jagat Pal

const toggleChar = function (str: string) {
	const result = [];

	for (let i = 0; i < str.length; i++) {
		const ch: string = str[i];
		if (ch >= "a" && ch <= "z") {
			const uch = 65 + ch.codePointAt(0) - 97;
			result.push(String.fromCharCode(uch));
		} else if (ch >= "A" && ch <= "Z") {
			const lch = 97 + ch.codePointAt(0) - 65;
			result.push(String.fromCharCode(lch));
		} else {
			result.push(ch);
		}
	}
	return result.join("");
};

const res = toggleChar(name);

console.log(res);
