import { Component } from "../Component.ts";
import { Parser } from "../Parser.ts";


export class BoldComponent extends Component {
	render(contents: string, _args: Record<string, string | number>, parser: Parser): string {
		return this.addHtmlElement("b", parser.parse(contents), {});
	}
}
