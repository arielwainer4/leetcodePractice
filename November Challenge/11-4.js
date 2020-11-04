// A tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.

// Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where edges[i] = [ai, bi] indicates that there is an undirected edge between the two nodes ai and bi in the tree, you can choose any node of the tree as the root. When you select a node x as the root, the result tree has height h. Among all possible rooted trees, those with minimum height (i.e. min(h))  are called minimum height trees (MHTs).

// Return a list of all MHTs' root labels. You can return the answer in any order.

// The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
  let adj={};
  for(let i=0;i<n;i++) adj[i]=new Set;
  for(let [a,b] of edges){
      adj[a].add(b);
      adj[b].add(a);
  }
  while(Object.keys(adj).length > 2){
      Object.keys(adj).filter(key => adj[key].size<2)
          .forEach(key => {
          adj[key].forEach(val => adj[val].delete(parseInt(key)));
          delete adj[key];
      })
  }
  return Object.keys(adj);
};
