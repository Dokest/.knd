import { Parser } from "../../src/Parser.ts";
import { TitleComponent } from "../../src/components/TitleComponent.ts";
import { assertEquals } from "../../dev_deps.ts";


Deno.test("Test title only", () => {
	const parser = new Parser({
		title: new TitleComponent(1),
	});

	const result = parser.parse("title{Hello title}");

	assertEquals(result, "<h1>Hello title</h1>");
});


Deno.test("Test title with prefix", () => {
	const parser = new Parser({
		title: new TitleComponent(1),
	});

	const result = parser.parse("Hello title{title}");

	assertEquals(result, "Hello <h1>title</h1>");
});


Deno.test("Test title with suffix", () => {
	const parser = new Parser({
		title: new TitleComponent(1),
	});

	const result = parser.parse("title{Hello} title");

	assertEquals(result, "<h1>Hello</h1> title");
});
