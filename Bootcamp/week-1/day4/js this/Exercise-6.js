const coffeeShop = {
  beans: 40,
  money: 10,

  drinkRequirements: {
    latte: { beanRequirement: 10, price: 5 },
    americano: { beanRequirement: 5, price: 5 },
    doubleShot: { beanRequirement: 15, price: 5 },
    frenchPress: { beanRequirement: 12, price: 5 },
  },

// makeDrinkExsist : function (currentValue) {
//   return this.drinkRequirements[currentValue] !=undefined

//   //anoter apsthion 
// },

  makeDrink: function (drinkType) {
    if (this.isExists(drinkType)) {
      this.countBeans(drinkType);
    } else {
      console.log(`Sorry, we don’t make ${drinkType}`);
    }
  },
  isExists: function (currentValue) {
    for (let item in this.drinkRequirements) {
      if (item === currentValue) {
        return true;
      }
    }
  },
  countBeans: function (drinkType) {
    let beanRequirement = this.drinkRequirements[drinkType].beanRequirement
    if (this.beans >= beanRequirement) {
      this.beans -= beanRequirement;
      console.log(`we make ${drinkType}`);
      this.money += this.drinkRequirements[drinkType].price;
    } else {
      console.log("Sorry, we’re all out of beans!");
    }
  },
  addMoney: function (money) {},
  buyBeans: function (sumOfBeans) {
    let subtract = sumOfBeans / 5;
    if (subtract <= this.money) {
      this.money -= subtract;
      this.beans += sumOfBeans;
    } else {
      console.log("you not have enough money");
    }
  },
};
//coffeeShop.buyBeans(10)
//coffeeShop.makeDrink("latte");
 //coffeeShop.makeDrink("americano");
//coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
 //coffeeShop.makeDrink("doubleShot");
// coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
// console.log(`we have ${coffeeShop.money} money`);
// console.log(`we have ${coffeeShop.beans} beans left`);


// console.log(coffeeShop.makeDrinkExsist("latte"));