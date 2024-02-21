import { Component } from "../Component.ts";


export class ImageComponent extends Component {
	render(contents: string, _args: Record<string, string | number>): string {
		return `<img src="${contents}" />`;
	}
}
