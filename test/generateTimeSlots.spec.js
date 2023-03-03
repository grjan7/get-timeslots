'use strict';

const timeslot = require('./index')

const timeslots = timeslot.generateTimeslotFromHoursRange([{ start_time: "9:00", end_time: "11:00" }, { start_time: "17:00", end_time: "22:00" }])
