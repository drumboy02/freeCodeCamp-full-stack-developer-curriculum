const inventory = [];

function findProductIndex(name) {
  for (let item of inventory) {
    if (item.name.toLowerCase() === name.toLowerCase()) {
      return inventory.indexOf(item);
    } 
  }
  return -1;
}

function addProduct(product) {
  for (let item of inventory) {
    if (item.name.toLowerCase() === product.name.toLowerCase()) {
      item.quantity += product.quantity;
      console.log(`${item.name} quantity updated`)
      return;
    }
  }
  product.name = product.name.toLowerCase();
  inventory.push(product);
  console.log(`${product.name} added to inventory`);
  return;
}

function removeProduct(product, quantity) {
  for (let item of inventory) {
    if (item.name.toLowerCase() === product.toLowerCase()) {
      if (quantity > item.quantity) {
        console.log(`Not enough ${item.name.toLowerCase()} available, remaining pieces: ${item.quantity}`)
        return;
      }
      item.quantity -= quantity;
      console.log(`Remaining ${product.toLowerCase()} pieces: ${item.quantity}`);
      if (!item.quantity) {
        inventory.splice(inventory.indexOf(item), 1)
      }

      return; 
    }
  }
  console.log(`${product.toLowerCase()} not found`)
}

addProduct({name: 'testProduct1', quantity: 25})
addProduct({name: 'testProduct1', quantity: 25})
addProduct({name: 'testProduct2', quantity: 25})
addProduct({name: 'testProduct3', quantity: 25})
console.log(findProductIndex('testProduct2'))
removeProduct('testProduct2', 13);

console.log(inventory)