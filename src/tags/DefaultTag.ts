import { Tag } from "../Tag.ts";
import { Parser } from "../Parser.ts";


export class DefaultTag extends Tag {
	render(contents: string, _args: Record<string, string | number>, _parser: Parser): string {
		return contents;
	}
}
