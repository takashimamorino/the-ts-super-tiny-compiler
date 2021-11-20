import { deepEqual } from "assert";
import { tokenizer } from "./index";

const input = "(add 2 (subtract 4 2))";
const tokens = [
	{ type: "paren", value: "(" },
	{ type: "name", value: "add" },
	{ type: "number", value: "2" },
	{ type: "paren", value: "(" },
	{ type: "name", value: "subtract" },
	{ type: "number", value: "4" },
	{ type: "number", value: "2" },
	{ type: "paren", value: ")" },
	{ type: "paren", value: ")" },
];

deepEqual(tokenizer(input), tokens, "no match");
console.log("success!");
