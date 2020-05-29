$(document).ready(function () {
  $('#submit').click(function () {
    let hourTime = $('#hours').val();
    let minuteTime = $('#minutes').val();
    let secondTime = $('#seconds').val();
    let distance = $('#distance').val();
    let radioValue = $("input[name='unit']:checked").val();

    const milePace = (m, s, d) => {
      let minute = Math.floor(m / d);
      console.log(minute);
      let minRe = Math.floor((m % d) * 60);
      console.log(minRe);
      let second = Math.floor((parseInt(s) + minRe) / d);
      console.log(second);
      let pace = `Your mile pace was a ${minute}:${second} mile!`;
      $('#output').text(pace);
    };

    if (radioValue === 'mile') {
      milePace(minuteTime, secondTime, distance);
    }
    if (radioValue === 'kilometer') {
      milePace(minuteTime, secondTime, distance * 1.6);
    }
  });
});

//*****Make radio change the html to reflect the distance unit.

// fix so second zere appears in seconds output ie 2:50,

// possible solution below. check seconds to see if it has a toSting().length === 4

// let w = .1
// console.log(w.toString().length);
