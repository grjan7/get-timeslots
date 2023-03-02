const generateTimeslot = (timeRanges) => {
  let timeslots = [];
  let interval = 15;
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

const generateTimeslotFromHoursRange = (hourRange) => {
  let timeslots = [];
  for (let key of hourRange) {
    let timeslot = generateTimeslot(key);
    timeslots = timeslots.concat(timeslot)
  }
  return timeslots
}

const timeslots = generateTimeslotFromHoursRange([{ start_time: "9:00", end_time: "11:00" }, { start_time: "17:00", end_time: "22:00" }])

const list = `<ul style= 'width:400px;'>
${timeslots.map(it => "<it style='border:1px solid #f0f0f0; padding:5px;display:inline-block; margin:2px;'>" + it + "</it>").join("\n")}
</ul>
`

document.write(list);
