import { assertEquals } from "../../dev_deps.ts";
import { Parser } from "../../src/Parser.ts";


Deno.test("Test word", () => {
	const parser = new Parser({});

	const result = parser.parse("Hello");
	assertEquals(result, "Hello");
});


Deno.test("Test sentence", () => {
	const parser = new Parser({});

	const result = parser.parse("Hello World, this is a test");
	assertEquals(result, "Hello World, this is a test");
});
