function toCamelCase(str) {
  const arr = str.split(/[-_]/);
  firstWord = arr.shift();

  const string = arr.reduce(
    (acc, el) => acc + el[0].toUpperCase() + el.slice(1),
    firstWord
  );

  return string;
}
