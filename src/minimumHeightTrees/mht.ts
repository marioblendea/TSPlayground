export class MHT {
  constructor() {
  }
  getRoots(n: number, edges:number[][]): number[] {
    const heights = new Array(n);
    const heightsWithoutParent = new Map<number, number>();
    const adj = new Array<Set<number>>(n);
    for (let i = 0; i < n; i++) adj[i] = new Set<number>();
    edges.forEach((edge: number[]) => {
      adj[edge[0]].add(edge[1]);
      adj[edge[1]].add(edge[0]);
    });

    heights[0] = this.dfs(0, -1, heights, adj, heightsWithoutParent);
    this.dfs2(0, -1, heights, adj, heightsWithoutParent);

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
    heightsWithoutParent: Map<number, number>): number {
    
    adj[node].forEach((child: number) => {
      if (child === parent) return;
      if(adj[child].size === 1) {
        heightsWithoutParent.set(child, 0);
      } else {
        heightsWithoutParent.set(child, this.dfs(child, node, heights, adj, heightsWithoutParent));
      }
    });
    
    let max = Number.MIN_VALUE;
    heightsWithoutParent.forEach((value: number, key: number) => {
      if (value > max) max = value;
    });

    return max + 1;
  }

  private dfs2(
    node: number,
    parent: number,
    heights: number[],
    adj: Set<number>[],
    heightsWithoutParent: Map<number, number>) {
    
    heights[node] = Math.max(heightsWithoutParent.get(node), heights[parent] + 1);
    
    adj[node].forEach((child: number) => {
      if (child === parent) return;
      else this.dfs2(child, node, heights, adj, heightsWithoutParent);
    });

  }
}