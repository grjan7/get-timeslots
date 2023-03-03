'use strict';

class TimeSlot {

  static generateTimeslot = async (opts) => {

    let startTime = opts.startTime;
    let endTime = opts.endTime;
    let interval = opts.interval;

    let timeslots = [];
    let slot = startTime
    while (slot != endTime) {
      timeslots.push(slot);
      let [h, m] = slot.split(":");
      if ((parseInt(m) + interval) == 60) {
        h = parseInt(h) + 1;
        m = "00";
      } else {
        m = parseInt(m) + opts.interval;
      }
      slot = `${h}:${m}`;
    }
    timeslots.push(slot);
    return timeslots
  }

  static generateTimeslotFromHoursRange = async (hourRange, range) => {
    let timeslots = [];
    for (let key of hourRange) {
      let timeslot = await generateTimeslot(key);
      timeslots = timeslots.concat(timeslot)
    }
    return timeslots
  }
}

module.exports = TimeSlot;
