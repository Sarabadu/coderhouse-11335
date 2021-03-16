export function* gen(init) {
  let i = init;
  while (true) {
    yield factorialize(i);
    i++;
  }
}

function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  // for (let j = 0; j < 1234789978; j++) {}
  return num;
}
