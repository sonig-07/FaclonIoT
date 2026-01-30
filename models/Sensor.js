const mongoose = require("mongoose");

const sensorSchema = new mongoose.Schema({
 deviceId:String,
 temperature:Number,
 timestamp:Number,
 createdAt:{
  type:Date,
  default:Date.now
 }
});

module.exports = mongoose.model("Sensor", sensorSchema);