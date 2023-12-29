// const offenderService = require("../services/offenders.service");

// const addOffender = async (req, res) => {
//   try {
//     const newOffender = await offenderService.addOffender(req.body);
//     res
//       .status(201)
//       .json({ message: "Offender added successfully", data: newOffender });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// const searchOffenders = async (req, res) => {
//   try {
//     const searchQuery = req.query.searchQuery; // Example: /offenders?searchQuery=JohnDoe
//     const searchResults = await offenderService.searchOffenders(searchQuery);
//     res.json({ data: searchResults });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// const searchVisitors = async (req, res) => {
//   try {
//     const searchQuery = req.query.searchQuery; // Example: /visitors?searchQuery=JohnDoe
//     const searchResults = await offenderService.searchVisitors(searchQuery);
//     res.json({ data: searchResults });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Implement other controller functions as needed

// module.exports = {
//   addOffender,
//   searchOffenders,
//   searchVisitors,
//   // Other controller functions
// };

const OffenderService = require("../services/offenders.service");

exports.offenderData = async (req, res, next) => {
  try {
    const {
      name,
      aliasName,
      crimeHead,
      crimeSubHead,
      mo,
      crimeNumber,
      fpsNumber,
      state,
      district,
      policeStation,
      latLon,
    } = req.body;

    console.log(
      "Received incident data:",
      name,
      aliasName,
      crimeHead,
      crimeSubHead,
      mo,
      crimeNumber,
      fpsNumber,
      state,
      district,
      policeStation,
      latLon
    );
    const successRes = await OffenderService.addOffender(
      name,
      aliasName,
      crimeHead,
      crimeSubHead,
      mo,
      crimeNumber,
      fpsNumber,
      state,
      district,
      policeStation,
      latLon
    );
    res.json({ status: true, succes: "Offender Data" });
  } catch (error) {
    console.log(error);
  }
};
