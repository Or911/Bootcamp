const family = function () {
  const members = [];

  const birth = function (name) {
    members.push(name);
    console.log(members);
  };
  return birth;
};

const giveBirth = family();
giveBirth("dad");
giveBirth("lisa");
giveBirth("or");
