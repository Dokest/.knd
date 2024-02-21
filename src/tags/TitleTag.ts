import { Tag } from "../Tag.ts";
import { Parser } from "../Parser.ts";


export class TitleTag extends Tag {
	constructor(private readonly header: number) {
		super();
	}


	render(contents: string, _args: Record<string, string | number>, parser: Parser): string {
		return this.addHtmlElement(`h${this.header}`, parser.parse(contents), {});
    }
}
