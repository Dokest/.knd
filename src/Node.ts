export class Node {
	args: Record<string, string | number> = {};
	
	constructor(readonly type: string, public contents: string = "")
		{ }
}
