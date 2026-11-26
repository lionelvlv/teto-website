class FileNode {
    constructor(key, value=null) {
			  this.key = key;
        this.value = value;
        this.children = [];
    }
    
		setValue(value) {
			this.value = value;
		}

		addChild(element, value=null) { 
			var newFileNode = new FileNode(element, value);
			this.children.push(newFileNode);
		}
		
		isLeaf() {
			return this.children == [];
		}
		
		get(key) {
			if (this.key == key) {
				return this.value;
			}

			if (isLeaf()) {
				return null;
			}

			for (let child of this.children) {
				let currVar = child.get(key);
				if (currVar != null) {
					return currVar;
				}
			}
		}

}

var thisPC = new FileNode("C:");
thisPC.addChild("Apps");
thisPC.addChild("Desktop");
thisPC.addChild("Games");
thisPC.addChild("Users");
thisPC.addChild("Program Files");
thisPC.addChild("tetoOS");

