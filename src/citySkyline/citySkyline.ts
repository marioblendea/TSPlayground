"use strict";

export interface Building{
  leftX: number;
  height: number;
  rightX: number;
}

export interface Point{
  x: number;
  y: number;
}

export class CitySkyline{
  private static signficantXs: Point[];
  private static maxHeap: MaxHeap;

  public static get(buildings: Building[]): Point[] {
    this.signficantXs = new Array<Point>();
    this.maxHeap = new MaxHeap();
    let res: Point[] = new Array();
    let current = {x:0, y:0};

    buildings.forEach((bld) => {
      this.addToSignficantXs(bld);
    });

    while (this.signficantXs.length > 0) {
      let point = this.signficantXs[0];
      this.signficantXs.splice(0, 1);
      if (point.y > 0) {
        // start point
        this.maxHeap.insert(point.y);
        if (point.y > current.y) {
          res.push(point);
          current = point;
        }
      } else {
        // end point
        this.maxHeap.remove(-point.y);
        const height = this.maxHeap.getMax();
        if (current.y > height) {
          if (height === 0 && this.signficantXs.length === 0) break;
          res.push({x: point.x, y: height});
          current = {x: point.x, y: height};
        }
      }
    }
    return res;
  }

  private static addToSignficantXs(bld: Building) {
    let pointToInsert = {x:bld.leftX, y: bld.height};
    let pos = [-1, -1];
    let j = 0;
    for(let i = 0; i < this.signficantXs.length; i++) {
      if (this.signficantXs[i].x > pointToInsert.x) {
        pos[j++] = i;
        if (j === 2) break;
        pointToInsert = {x: bld.rightX, y: bld.height};
      }
    }
    if (pos[0] === -1) pos[0] = this.signficantXs.length;
    if (pos[1] === -1) pos[1] = this.signficantXs.length;
    this.signficantXs.splice(pos[0], 0, {x:bld.leftX, y: bld.height});
    this.signficantXs.splice(pos[1] + 1, 0, {x:bld.rightX, y: -bld.height});
  }
}

class Node {
  left: Node;
  right: Node;
  height: number;
}

export class MaxHeap {
  private data: number[];
  constructor() {
    this.data = new Array();
  }

  public insert(val: number) {
    let pos = -1;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] <= val) {
        pos = i;
        break;
      }
    }
    if (pos === -1) pos = this.data.length;
    this.data.splice(pos, 0, val);
  }

  public getMax(): number {
    return this.data[0] || 0;
  }

  public remove(val: number) {
    let pos = -1;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === val) {
        pos = i;
        break;
      }
    }
    if (pos === -1) throw "WTF";
    this.data.splice(pos, 1);
  }
}