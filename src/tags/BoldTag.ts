import { Tag } from "../Tag.ts";
import { Parser } from "../Parser.ts";


export class BoldTag extends Tag {
	render(contents: string, _args: Record<string, string | number>, parser: Parser): string {
		return this.addHtmlElement("b", parser.parse(contents), {});
	}
}
