'use strict';

const isString = async (input) => (typeof input == 'string')
const isValidHour = async (hour) => ((hour >= 0) && (hour < 24))
const isValidMinute = async (min) => ((min >= 0) && (min < 60))

const isValidTime = async (time) => {
  let _isValidTime = false;
  try {
    const _isString = await isString(time);
    if (_isString) {
      const colonSplit = time.split(":");
      if (colonSplit.length == 2) {
        const [hour, min] = colonSplit.map(it => parseInt(it));
        const _isValidHour = await isValidHour(hour);
        const _isValidMinute = await isValidMinute(min);
        if (_isValidHour && _isValidMinute) {
          _isValidTime = true;
        }
      }
    }
  } catch (e) {
    throw e;
  }
  return _isValidTime;
}

module.exports = isValidTime;