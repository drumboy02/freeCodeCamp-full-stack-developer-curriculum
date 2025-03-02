const permuteString = (string, prefix='', results=[]) => {
  const len = string.length;
  console.log("string:", string);
  if (len === 0) {
    results.push(prefix);
    console.log("results:", results);
    return results;
  }

  for (let i = 0; i < len; i++) {
    const currentChar = string[i];
    const remaining = string.slice(0, i) + string.slice(i + 1);
    console.log("prefix:", prefix + currentChar);
    permuteString(remaining, prefix + currentChar, results)
  }

  return Array.from(new Set(results));
}

console.log(permuteString("101"));