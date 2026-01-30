const Sensor = require("../models/Sensor");

exports.ingest = async(req,res)=>{
 const {deviceId,temperature,timestamp} = req.body;

 if(!deviceId || !temperature){
  return res.status(400).json({message:"Missing fields"});
 }

 const sensor = await Sensor.create({
  deviceId,
  temperature,
  timestamp: timestamp || Date.now()
 });

 res.json(sensor);
};

exports.latest = async(req,res)=>{
 const data = await Sensor.findOne({deviceId:req.params.deviceId})
 .sort({timestamp:-1});

 res.json(data);
};