import { Component } from "../Component.ts";
import { Parser } from "../Parser.ts";


export class DefaultComponent extends Component {
	render(contents: string, _args: Record<string, string | number>, _parser: Parser): string {
		return contents;
	}
}
