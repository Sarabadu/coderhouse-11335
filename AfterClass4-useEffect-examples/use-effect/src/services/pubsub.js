let map = new Map();

export function subscribe(fn) {
  const id = setInterval(() => {
    fn(Math.floor(Math.random() * 100));
  }, 500);
  map.set(fn, id);
}

export function unsubscribe(fn) {
  const int = map.get(fn);
  clearInterval(int);
}
