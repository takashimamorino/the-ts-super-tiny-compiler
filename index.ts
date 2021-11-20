/**
 * 1. 字句解析
 * 文字の並びを解析してある最小単位（トークン）に分解する
 */
export const tokenizer = (input: string): object[] => {
	let current: number = 0;
	let tokens: object[] = [];

	while (current < input.length) {
		let char = input[current];

		if (char === "(") {
			tokens.push({
				type: "paren",
				value: "(",
			});
			current++;
			continue;
		}

		if (char === ")") {
			tokens.push({
				type: "paren",
				value: ")",
			});
			current++;
			continue;
		}

		// 空白はスキップする
		let WHITESPACE = /\s/;
		if (WHITESPACE.test(char)) {
			current++;
			continue;
		}

		// 数字は文字の並び全体を 1 つのトークンとして扱う
		let NUMBERS = /[0-9]/;
		if (NUMBERS.test(char)) {
			let value = "";

			while (NUMBERS.test(char)) {
				value += char;
				char = input[++current];
			}

			tokens.push({
				type: "number",
				value,
			});
			continue;
		}

		// 文字は文字の並び全体を 1 つのトークンとして扱う
		let LETTERS = /[a-z]/;
		if (LETTERS.test(char)) {
			let value = "";

			while (LETTERS.test(char)) {
				value += char;
				char = input[++current];
			}

			tokens.push({
				type: "name",
				value,
			});
			continue;
		}

		// マッチする文字がない場合はエラー
		throw new TypeError("I dont know what this character is: " + char);
	}

	return tokens;
};
