const fruits = ['apple', 'banana', 'orange'];

createOrder(fruits)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayments(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
    return paymentInfo;
  })
  .then(function (paymentInfo) {
    return paymentSummary(paymentInfo);
  })
  .then(function (paymentSummary) {
    console.log(paymentSummary);
  })
  .catch(function (err) {
    console.log(err.message || err);
  });

function createOrder(orderId) {
  return new Promise((resolve, reject) => {
    if (validateOrder(orderId)) {
      const order_status = 'Order placed Successfully';
      resolve(order_status);
    } else {
      const err = new Error('Order was not placed');
      reject(err);
    }
  });
}

function proceedToPayments(orderId) {
  return new Promise((resolve, reject) => {
    if (validateOrder(orderId)) {
      const payment_status = 'payment placed Successfully';
      resolve(payment_status);
    } else {
      const err = new Error('payment was not placed');
      reject(err);
    }
  });
}

function paymentSummary(paymentInfo) {
  return new Promise((resolve, reject) => {
    if (paymentInfo && fruits.length !== 0) {
      const summary = fruits.join(',');
      resolve(`${summary}`);
    } else {
      const err = new Error('Items is null');
      reject(err);
    }
  });
}

// output
// Order placed Successfully
// payment placed Successfully
// apple,banana,orange

function validateOrder(orderId) {
  return true;
}
