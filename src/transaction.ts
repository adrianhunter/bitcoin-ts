import { Script } from "./script.js";

export class Transaction {
  constructor(
    public id: string,
    public version: number = 1,
    public inputs: Input[] = [],
    public outputs: Output[] = [],
    public locktime: number = 0,
  ) {
  }
}

export class Input {
  constructor(
    public id: number,
    public tx: Transaction,
    public vout: number,
    public script: Script = new Script,
    public sequence: number,
  ) {
  }
}

export class Output {
  constructor(
    public id: number,
    public tx: Transaction,
    public script: Script = new Script,
    public satoshis: number,
  ) {
  }
}
