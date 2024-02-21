import { Component } from "../Component.ts";
import { Parser } from "../Parser.ts";


export class TitleComponent extends Component {
	constructor(private readonly header: number) {
		super();
	}


	render(contents: string, _args: Record<string, string | number>, parser: Parser): string {
		return this.addHtmlElement(`h${this.header}`, parser.parse(contents), {});
    }
}
