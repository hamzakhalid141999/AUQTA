async function convertTimeStampIntoDate(unixTimestamp) {
  if (unixTimestamp) {
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var date = new Date(unixTimestamp * 1000);
    var fullDateTime =
      date.getDate() +
      " " +
      months[date.getMonth()] +
      ", " +
      date.getFullYear();
    return fullDateTime;
  }
}

export { convertTimeStampIntoDate };
