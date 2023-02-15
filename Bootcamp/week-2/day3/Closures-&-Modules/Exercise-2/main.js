const Bank = function () {
  let _Money = 500;

  const depositCash = function (cash) {
    _Money += cash;
    return "The money has been deposited successfully";
  };

  const showBalance = function () {
    console.log(`now we have ${_Money} in bank`);
  };

  return {
    depositCash,
    showBalance,
  };
};

const bank = Bank();
bank.depositCash(200);
bank.depositCash(250);
bank.showBalance(); //should print 950
