class CodersArray {
  length;
  constructor(...numbers) {
    let propertyName = 0;
    for (const number of numbers) {
      this[propertyName] = number;
      propertyName++;
    }
    this.setLength();
  }

  setLength() {
    let properties = this;
    let totalProperties = 0;
    for (let property in properties) {
      totalProperties++;
    }
    this.length = totalProperties;
  }
}

export default CodersArray;
