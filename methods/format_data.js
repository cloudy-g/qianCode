var format = function (data) {
  for (let i = 0; i < data.length; i++) {
    data[i] = Math.abs(data[i])
  }
}
module.exports = {
  format
}