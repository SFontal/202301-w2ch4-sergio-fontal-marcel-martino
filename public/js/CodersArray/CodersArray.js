class CodersArray {
  constructor(...numbers) {
    let propertyName = 0;
    for (const number of numbers) {
      this[propertyName] = number;
      propertyName++;
    }
  }
}

export default CodersArray;
