"use strict";

console.log("***Welcome to Stock Management System ***");

const stock = [];
class Stock {
  constructor(name, category, price, quantity) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.quantity = quantity;
  }

  addStock(item) {
    stock.push(item);
    console.log("Item added successfully");
    console.log("--------------------------------------------");
  }

  updateItem(name, category, price, quantity) {
    let item_needed = stock.findIndex(
      (item) => item.name == name && item.category == category
    );
    if (item_needed != -1) {
      stock[item_needed].price = price;
      stock[item_needed].quantity = quantity;
      console.log("Stock updated");
      console.log(stock[item_needed]);
    } else {
      console.log(`${name} and ${category} not found in stock!!`);
    }
    console.log("-------------------------------------------");
  }

  removeItem(name, category) {
    let item_needed = stock.findIndex(
      (item) => item.name == name && item.category == category
    );
    if (item_needed == -1) {
      console.log("The item is not present in the stock");
    } else {
      stock.splice(item_needed, 1);
      console.log("The item has been removed");
      this.viewStock();
    }
    console.log("--------------------------------------------");
  }

  viewStock() {
    if (stock.length == 0) {
      console.log("No items found in the stock");
    } else {
      stock.forEach((item) =>
        console.log(
          `Item_name: ${item.name}, Category: ${item.category}, Price: ${item.price}, Quantity: ${item.quantity}`
        )
      );
    }
    console.log("-------------------------------------------");
  }

  getItemsByPriceRange(start, end) {
    const result = stock.filter(
      (item) => item.price >= start && item.price <= end
    );
    result.forEach((item) => console.log(item));
    console.log("--------------------------------------------");
  }

  sortItemsByQuantity() {
    const sorted_items = stock.sort((a, b) => a.quantity - b.quantity);
    sorted_items.forEach((item) => console.log(item));
    console.log("--------------------------------------------");
  }
}

const obj = new Stock("Milk", "Diary", 25.0, 10);
const obj2 = new Stock("Apple", "Fruits", 35.0, 50);
const obj3 = new Stock("Rice", "Grocery", 10.0, 200);
const obj4 = new Stock("Oil", "Grocery", 25.0, 500);
const obj5 = new Stock("Pen", "Stationary", 100.0, 100);
const obj6 = new Stock("Curd", "Diary", 50.0, 300);

obj.addStock(obj);
obj.addStock(obj2);
obj.addStock(obj3);
obj.addStock(obj4);
obj.addStock(obj5);
obj.addStock(obj6);
obj.updateItem("Apple", "Fruits", 50.0, 250);
obj.viewStock();
obj.removeItem("Curd", "Diary");
obj.getItemsByPriceRange(30, 50);
obj.sortItemsByQuantity();
