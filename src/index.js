const items = [];

function add(id) {
  items.push(id);
  return items;
}

function remove(id) {
  items.pop(id);
  return items;
}
