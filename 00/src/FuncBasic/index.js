const d3 = require('d3');

module.exports = element => {
  const instance = {};

  instance.headline = h => {
    () => !arguments.length && headline;
    headline = h;
    return instance;
  };
  instance.description = d => {
    () => !arguments.length && description;
    description = d;
    return instance;
  };
  instance.render = div => {
    div = d3.select('body').append('div');
    div.append('h3').text(headline);
    div
      .attr('class', 'box')
      .attr('style', `color:${element.color}`)
      .append('p')
      .text(description);
    return instance;
  };

  return instance;
};
