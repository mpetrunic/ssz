import {List} from "../../interface";
import {BasicListType, CompositeListType} from "../../types";
import {mixInLength} from "../../util/compat";
import {BasicArrayByteArrayHandler, CompositeArrayByteArrayHandler} from "./array";
import {ByteArrayBacking} from "./abstract";

export class BasicListByteArrayHandler<T extends List<unknown>> extends BasicArrayByteArrayHandler<T> {
  _type: BasicListType<T>;
  constructor(type: BasicListType<T>) {
    super();
    this._type = type;
  }
  defaultBacking(): ByteArrayBacking {
    return new Uint8Array(0);
  }
  hashTreeRoot(target: ByteArrayBacking): Uint8Array {
    return mixInLength(super.hashTreeRoot(target), this.getLength(target));
  }
}

export class CompositeListByteArrayHandler<T extends List<object>> extends CompositeArrayByteArrayHandler<T> {
  _type: CompositeListType<T>;
  constructor(type: CompositeListType<T>) {
    super();
    this._type = type;
  }
  defaultBacking(): ByteArrayBacking {
    return new Uint8Array(0);
  }
  hashTreeRoot(target: ByteArrayBacking): Uint8Array {
    return mixInLength(super.hashTreeRoot(target), this.getLength(target));
  }
}

