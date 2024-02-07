export class Draw{
    dungeon=null

    constructor(_dungeon){
        this.dungeon=_dungeon
        this.draw()
    }


    draw() {
        for (let i = 0; i < this.dungeon.dungeonHeight; i++) {
          for (let j = 0; j < this.dungeon.dungeonWidth; j++) {
            const cell = document.createElement('div');
            switch (this.dungeon.dungeonMap[i][j]) {
              case 0: cell.className = 'map-cell-empty'; break;
              case 1: cell.className = 'map-cell'; break;
              case 2: cell.className = 'map-spawn'; break;
            }
            map.appendChild(cell);
          }
        }
      }
}