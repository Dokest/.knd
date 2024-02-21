import { assertEquals } from "../../dev_deps.ts";
import { Parser } from "../../src/Parser.ts";
import { BoldTag } from "../../src/tags/BoldTag.ts";
import { TitleTag } from "../../src/tags/TitleTag.ts";


Deno.test("Simple multicomponent", () => {
	const parser = new Parser({
		title: new TitleTag(1),
		b: new BoldTag(),
	});

	const result = parser.parse("title,b{Bold title}");

	assertEquals(result, "<h1><b>Bold title</b></h1>");
});


Deno.test("Simple multicomponent reversed", () => {
	const parser = new Parser({
		title: new TitleTag(1),
		b: new BoldTag(),
	});

	const result = parser.parse("b,title{Bold title}");

	assertEquals(result, "<b><h1>Bold title</h1></b>");
});
