// CHOOSE DOCTOR GET THE SLOTS

// list the active doctors
// select the doctor
// click the calendar
// query for unavailable dates
// disable the dates that are unavailable 
// select the available date
// query for active, available date, available consultation_hours,booked_slots
// compare the totalslots and bookedslots and generate available timeslots
// list both the slots which are available and unavailable   
// select the available slot
// to book the slot, send query doctor_id, date, timeslot

// check if the doctor is/has
// --an active practitioner,
// --available on that date
// --providing consultation on the slot chosen,
// --not already been booked for that slot
// insert the appointment details with this data

// CHOOSE THE SLOT, GET THE DOCTORS

// select the date, timeslot
// timeslot must be uniform across doctors
// each slot should last for 15 minutes
// filter doctors by if the doctor is 
// -- an active practitioner
// -- not on leave on that day
// -- providing consultation on that slot
// -- not booked for that slot,
// return the filtered doctors


const generateAvailableTimeSlots = (totalslots, bookedslots) => {
  let bookedDetails = totalslots
  for (let i in totalslots) {
    let start_time = totalslots[i].start_time;
    let end_time = totalslots[i].end_time;
    let is_booked = false;
    for (let j of bookedslots) {
      let booked = (start_time == j.start_time) && (end_time == j.end_time)
      if (booked) {
        is_booked = true;
        break;
      }
    }
    bookedDetails[i]["isBooked"] = is_booked
  }
  return bookedDetails;
}

const totalSlots = [{
  start_time: "9:00",
  end_time: "9:15"
}, {
  start_time: "9:15",
  end_time: "9:30"
}, {
  start_time: "9:30",
  end_time: "9:45"
}, {
  start_time: "9:45",
  end_time: "10:00"
}]

const bookedSlots = [{
  start_time: "9:15",
  end_time: "9:30"
}, {
  start_time: "9:45",
  end_time: "10:00"
}]

generateAvailableTimeSlots(totalSlots, bookedSlots)