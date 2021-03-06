"use strict";

const orderCoffee = require("./orderCoffee");
const greetUser = require("./greetUser");
const orderFood = require("./orderFood");
const getStoreInfo = require("./storeInfo");

module.exports = async function (intentRequest, callback) {
  console.log(
    `dispatch userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}`
  );
  const intentName = intentRequest.currentIntent.name;

  if (intentName === "CoffeeOrder") {
    console.log(intentName + "was called");
    const result = await orderCoffee(intentRequest);
    console.log(result);
    callback(result);
  } else if (intentName === "Greeting") {
    console.log(intentName + "was called");
    const response = await greetUser(intentRequest);
    console.log(response);
    callback(response);
  } else if (intentName === "FoodOrder") {
    console.log(intentName + "was called");
    const response = await orderFood(intentRequest);
    console.log(response);
    callback(response);
  }  else if (intentName === "StoreInformation") {
    console.log(intentName + "was called");
    const response = await getStoreInfo(intentRequest);
    console.log(response);
    callback(response)
  } else {
    throw new Error(`Intent with name ${intentName} not supported`);
  }
};
