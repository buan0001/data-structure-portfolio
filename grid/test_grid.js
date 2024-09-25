import Grid from "./grid.js";
window.addEventListener("load", start);

function start() {
//   const grid = new Grid(8, 8);
    const grid = new Grid(10, 10);
  const tileObj = { row: 3, col: 5 };
  // grid.dump()
  // grid.fill(5)
  grid.set(1, 2, 3);
  grid.set(tileObj, 6);
  //   grid.get(-4, 4);
  console.log(grid.get({ row: -1, col: 2 }));
  console.log(grid.indexFor(4, 2));
  console.log(grid.rowColFor(34));
  grid.set(0, 1, 1);
  grid.set(1, 1, 2);
  grid.set(1, 0, 3);
  console.log(grid.neighbours(0, 0));
  console.log(grid.neighbourValues(0, 0));

  grid.dump();
  window.grid = grid
}
