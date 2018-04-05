const { dateTime, funcBasic } = require('./src');

const colorDefault = '#1776B3';

dateTime('#date');

funcBasic({ color: colorDefault })
  .headline('Func Basic')
  .description('You are in func-basic module bn-d-00')
  .render();
