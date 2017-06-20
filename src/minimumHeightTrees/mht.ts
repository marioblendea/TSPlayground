export class MHT {
  constructor() {
  }
  getRoots(n: number, edges:number[][]): number[] {
    const heights = new Array(n);
    const heightsWithoutParent = new Map<number, number>();
    const heightsWithoutParent2 = new Map<number, number>();
    const adj = new Array<Set<number>>(n);
    for (let i = 0; i < n; i++) adj[i] = new Set<number>();
    edges.forEach((edge: number[]) => {
      adj[edge[0]].add(edge[1]);
      adj[edge[1]].add(edge[0]);
    });

    this.dfs(0, -1, heights, adj, heightsWithoutParent, heightsWithoutParent2);
    this.dfs2(0, -1, heights, adj, heightsWithoutParent, heightsWithoutParent2);

    let min = heights[0];
    for (let i = 1; i < heights.length; i++) {
      if (heights[i] < min) min = heights[i];
    }

    const res = new Array();
    for (let i = 0; i < heights.length; i++) {
      if (heights[i] === min) res.push(i);
    }
    
    return res;
  }

  private dfs(
    node: number,
    parent: number,
    heights: number[],
    adj: Set<number>[],
    heightsWithoutParent: Map<number, number>,
    heightsWithoutParent2: Map<number, number>) {

    heightsWithoutParent.set(node, -10);
    heightsWithoutParent2.set(node, -10);
    for(let child of adj[node]) {
      if (child === parent) continue;
      this.dfs(child, node, heights, adj, heightsWithoutParent, heightsWithoutParent2);
      let tmp = heightsWithoutParent.get(child) + 1;
      if (tmp > heightsWithoutParent.get(node)) {
        heightsWithoutParent2.set(node, heightsWithoutParent.get(node));
        heightsWithoutParent.set(node, tmp);
      } else if (tmp > heightsWithoutParent2.get(node)) {
        heightsWithoutParent2.set(node, tmp);
      }
    }
    heightsWithoutParent.set(node, Math.max(heightsWithoutParent.get(node), 0));
  }

  private dfs2(
    node: number,
    parent: number,
    heights: number[],
    adj: Set<number>[],
    heightsWithoutParent: Map<number, number>,
    heightsWithoutParent2: Map<number, number>) {
    
    if(parent === -1) {
      heights[node] = heightsWithoutParent.get(node);
    } else {
      if (heightsWithoutParent.get(node) + 1 === heights[parent]) {
        heights[node] = Math.max(heightsWithoutParent.get(node), heightsWithoutParent2.get(parent) + 1);
      } else {
        heights[node] = Math.max(heightsWithoutParent.get(node), heights[parent] + 1);
      }
    }
    
    adj[node].forEach((child: number) => {
      if (child === parent) return;
      else this.dfs2(child, node, heights, adj, heightsWithoutParent, heightsWithoutParent2);
    });

  }
}