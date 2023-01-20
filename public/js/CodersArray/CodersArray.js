class CodersArray {
  length = 0;
  constructor(...values) {
    this.push(...values);
  }

  setLength() {
    let totalProperties = 0;
    for (let property in this) {
      totalProperties++;
    }
    this.length = totalProperties - 1;
  }

  push(...values) {
    for (const value of values) {
      this[this.length] = value;
      this.length++;
    }
  }
}

export default CodersArray;
