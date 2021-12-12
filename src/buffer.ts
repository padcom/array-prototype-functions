import './blank-module'

declare global {
  interface Array<T> {
    /**
     * Adds an unsigned byte to this array
     */
     pushUInt8(val: number): number[]
    /**
     * Adds an unsigned word to this array
     */
     pushUInt16(val: number): number[]
    /**
     * Adds an unsigned dword to this array
     */
     pushUInt32(val: number): number[]
    /**
     * Adds an float to this array
     */
     pushFloat(val: number): number[]
    /**
     * Adds a string to this array
     */
     pushString(val: string): number[]
    /**
     * Adds a zero-terminated string to this array
     */
     pushString0(val: string): number[]
  }
}

if (Array.prototype.pushUInt8 === undefined) {
  Array.prototype.pushUInt8 = function(
    this: number[],
    val: number
  ) {
    this.push(0xFF & val)
    return this
  }
}

if (Array.prototype.pushUInt16 === undefined) {
  Array.prototype.pushUInt16 = function(
    this: number[],
    val: number
  ) {
    this.pushUInt8(val)
    this.pushUInt8(val >> 8)
    return this
  }
}

if (Array.prototype.pushUInt32 === undefined) {
  Array.prototype.pushUInt32 = function(
    this: number[],
    val: number
  ) {
    this.pushUInt8(val)
    this.pushUInt8(val >> 8)
    this.pushUInt8(val >> 16)
    this.pushUInt8(val >> 24)
    return this
  }
}

if (!Array.prototype.pushFloat) {
  Array.prototype.pushFloat = function(val) {
    const buffer = new DataView(new Uint8Array(4).buffer)
    buffer.setFloat32(0, val, true)
    this.pushUInt8(buffer.getUint8(0))
    this.pushUInt8(buffer.getUint8(1))
    this.pushUInt8(buffer.getUint8(2))
    this.pushUInt8(buffer.getUint8(3))
    return this
  }
}

if (!Array.prototype.pushString) {
  Array.prototype.pushString = function(val) {
    for (let i = 0; i < val.length; i++) {
      this.pushUInt8(val.charCodeAt(i))
    }
    return this
  }
}

if (!Array.prototype.pushString0) {
  Array.prototype.pushString0 = function(val) {
    for (let i = 0; i < val.length; i++) {
      this.pushUInt8(val.charCodeAt(i))
    }
    this.pushUInt8(0)
    return this
  }
}
