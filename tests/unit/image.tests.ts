import { Parser } from "../../src/Parser.ts";
import { assertEquals } from "../../dev_deps.ts";
import { ImageComponent } from "../../src/components/ImageComponent.ts";


Deno.test("Test single image", () => {
	const parser = new Parser({
		img: new ImageComponent(),
	});

	const result = parser.parse("img{/images/nothing.png}");

	assertEquals(result, "<img src=\"/images/nothing.png\" />");
});
 
