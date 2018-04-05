const d3 = require('d3');

module.exports = (d, color = '#B0CDD6') => {
  let duration = 0.001;
  setInterval((date = new Date(), datetime) => {
    datetime = date
      .toLocaleString()
      .split(', ')
      .join(' | ');
    d3
      .select(d)
      .text(datetime)
      .attr('style', `color:${color}`);
    duration = 100;
  }, duration);
};
