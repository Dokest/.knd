import { Tag } from "./Tag.ts";
import { Node } from "./Node.ts";
import { DefaultTag } from "./tags/DefaultTag.ts";


export const DEFAULT_NODE_NAME = "__DEFAULT__";


export const SEPARATORS = [" ", "\n"];


export class Parser {
	constructor(private readonly components: Record<string, Tag>) {
		this.components[DEFAULT_NODE_NAME] = new DefaultTag();
	}
	
	
	private convertToAST(contents: string): Node[] {
		let lastToken = "";
		const mainNode = new Node(DEFAULT_NODE_NAME);
		const nodes: Node[] = [mainNode];
		let currentNode = mainNode;
		let depth = 0;
		let keepClosingBracket = false;
		
		for (const char of contents) {
			if (SEPARATORS.includes(char)) {
				currentNode.contents += lastToken + char;
				lastToken = "";
			} else if (char === "{") {
				if (depth === 0) {
					const multicomponents = lastToken.split(",");
					const firstMultiComponent = multicomponents.shift()!;
					
					const newNode = new Node(firstMultiComponent);
					
					if (multicomponents.length > 0) {
						newNode.contents += multicomponents.join(",") + "{";
						keepClosingBracket = true;
					}
					
					nodes.push(newNode);
					currentNode = newNode;
					
					lastToken = "";
				} else {
					lastToken += char;
				}
				
				depth += 1;
			} else if (char === "}") {
				depth -= 1;
				
				if (depth === 0) {
					currentNode.contents += lastToken + (keepClosingBracket ? "}" : "");
					lastToken = "";
					keepClosingBracket = false;
					
					currentNode = new Node(DEFAULT_NODE_NAME);
					nodes.push(currentNode);
				} else {
					lastToken += char;
				}
			} else {
				lastToken += char;
			}
		}
		
		currentNode.contents += lastToken;
		
		return nodes;
	}
	
	
	parse(text: string): string {
		if (text === "") {
			return "";
		}
		
		const ast = this.convertToAST(text);
		
		return this.transformASTToHTML(ast);
	}
	
	
	parseParagraph(text: string): string {
		const paragraphNode = new Node("p");
		paragraphNode.contents = text;
		
		return this.transformASTToHTML([paragraphNode]);
	}
	
	
	private transformASTToHTML(ast: Node[]): string {
		let html = "";
		
		for (const node of ast) {
			html += this.components[node.type].render(node.contents, node.args, this);
		}
		
		return html;
	}
}

