class CodersArray {
  length = 0;
  constructor(...numbers) {
    let propertyName = 0;
    for (const number of numbers) {
      this[propertyName] = number;
      propertyName++;
      this.length++;
    }
  }
}

export default CodersArray;
