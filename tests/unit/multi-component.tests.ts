import { assertEquals } from "../../dev_deps.ts";
import { Parser } from "../../src/Parser.ts";
import { BoldComponent } from "../../src/components/BoldComponent.ts";
import { TitleComponent } from "../../src/components/TitleComponent.ts";


Deno.test("Simple multicomponent", () => {
	const parser = new Parser({
		title: new TitleComponent(1),
		b: new BoldComponent(),
	});

	const result = parser.parse("title,b{Bold title}");

	assertEquals(result, "<h1><b>Bold title</b></h1>");
});


Deno.test("Simple multicomponent reversed", () => {
	const parser = new Parser({
		title: new TitleComponent(1),
		b: new BoldComponent(),
	});

	const result = parser.parse("b,title{Bold title}");

	assertEquals(result, "<b><h1>Bold title</h1></b>");
});
