const Beehive = require("../models/Beehive");

exports.getAll = () => Beehive.find({}).lean();

exports.getOne = (beehiveId) => Beehive.findById(beehiveId).lean();

exports.create = (ownerId, beehiveData) =>
  Beehive.create({ ...beehiveData, owner: ownerId });

exports.edit = (beehiveId, beehiveData) =>
  Beehive.findByIdAndUpdate(beehiveId, beehiveData, { runValidators: true });

exports.delete = (beehiveId) => Beehive.findByIdAndDelete(beehiveId);
