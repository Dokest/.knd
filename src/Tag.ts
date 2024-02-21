import { Parser } from "./Parser.ts";


export abstract class Tag {
	abstract render(contents: string, args: Record<string, string | number>, parser: Parser): string;


	addHtmlElement(element: string, content: string, attributes: Record<string, string | number>): string {
		return `<${element}>${content}</${element}>`;
	}
}
