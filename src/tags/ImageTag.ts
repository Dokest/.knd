import { Tag } from "../Tag.ts";


export class ImageTag extends Tag {
	render(contents: string, _args: Record<string, string | number>): string {
		return `<img src="${contents}" />`;
	}
}
