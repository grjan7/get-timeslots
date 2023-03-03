const generateTimeslot = async (timeRanges, interval = 15) => {
  let timeslots = [];
  //let interval = 15;
  let slot = timeRanges.start_time
  while (slot != timeRanges.end_time) {
    timeslots.push(slot);
    let [h, m] = slot.split(":");
    if ((parseInt(m) + interval) == 60) {
      h = parseInt(h) + 1;
      m = "00";
    } else {
      m = parseInt(m) + interval;
    }
    slot = `${h}:${m}`;
  }
  timeslots.push(slot);
  return timeslots
}

const generateTimeslotFromHoursRange = async (hourRange) => {
  let timeslots = [];
  for (let key of hourRange) {
    let timeslot = await generateTimeslot(key);
    timeslots = timeslots.concat(timeslot)
  }
  return timeslots
}

