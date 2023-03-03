'use strict';

const isValidTime = require('../lib/validateTimeSlotOpts');

(async () => {

  console.log("\n23:59")
  console.log(await isValidTime("23:59"))

  console.log("\n0:59")
  console.log(await isValidTime("0:59"))

  console.log("\n24:00")
  console.log(await isValidTime("24:00"))

  console.log("\n23:60")
  console.log(await isValidTime("23:60"))

  console.log("\n00:00")
  console.log(await isValidTime("00:00"))

  console.log("\n23")
  console.log(await isValidTime("23"))

})();