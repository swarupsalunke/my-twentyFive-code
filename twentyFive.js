function isValidBST(root) {
    let prev = -Infinity;

    function inorder(node) {
        if (!node) return true;
        if (!inorder(node.left)) return false;
        if (node.val <= prev) return false;
        prev = node.val;
        return inorder(node.right);
    }

    return inorder(root);
}

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
console.log(isValidBST(root)); 
