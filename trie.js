class Node {
    constructor() {
        this.map = [];
    }
    add(word) {
        let w = word.split('');
        for (let i = 0; i < w.length; i ++) {
            const rest = word.substring(i+1, word.length);
            let key = w[i];
            if (!this.map[key]) {
                this.map[key] =  [];
            }
            this.map[key].push(rest);
        }
        debugger;
    }
}



    let t = new Node();
    t.add('CART');
    t.add('CADDY');
    debugger;

