const {janan, getDecimal} = require("./index.js");

if(janan() !== 42) {
  throw new Error("should return 42");
}

if(getDecimal(0,0) !== 0.611471121798010465) {
  throw new Error("token 0, first decimal should be 0.611471121798010465, not: " + getDecimal(0,0));
}

if(getDecimal(1,0) !== 0.630605505055178664) {
  throw new Error("token 0, first decimal should be 0.630605505055178664, not: " + getDecimal(1,0));
}

if(getDecimal(7,0) !== 0.971030700389748681) {
  throw new Error("token 0, first decimal should be 0.971030700389748681, not: " + getDecimal(7,0));
}

if(getDecimal(0,8888) !== 0.274313647052086752) {
  throw new Error("token 8888, first decimal should be 0.274313647052086752, not: " + getDecimal(0,8888));
}

if(getDecimal(7,8888) !== 0.251862286670101823) {
  throw new Error("token 8888, first decimal should be 0.251862286670101823, not: " + getDecimal(7,8888));
}