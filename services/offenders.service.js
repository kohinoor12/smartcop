// const Offender = require("../model/Offender");

// const addOffender = async (offenderData) => {
//   try {
//     const newOffender = new Offender(offenderData);
//     await newOffender.save();
//     return newOffender;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const searchOffenders = async (searchQuery) => {
//   try {
//     const searchResults = await Offender.find({
//       $text: { $search: searchQuery },
//     });
//     return searchResults;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// const searchVisitors = async (searchQuery) => {
//   try {
//     const searchResults = await Offender.find({
//       $text: { $search: searchQuery },
//     });
//     return searchResults;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// module.exports = {
//   addOffender,
//   searchOffenders,
//   searchVisitors,
// };


const Offender = require("../model/Offender");
class OffenderService {
  static async addOffender(
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
  ) {
    try {
      // const createincdata=new incidentmodel({incidentType,description});
      // return await createincdata.save();
      console.log("Creating offender data:", {
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
      });

      const createOffenderData = new Offender({
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
      });
      console.log("Offender data before save:", createOffenderData);

      const savedOffender = await createOffenderData.save();
      console.log("Incident data after save:", savedOffender);

      return savedOffender;
    } catch (err) {
      console.error("Error in incident service:", err);
      throw new Error("Failed to create incident");
    }
  }
}
module.exports = OffenderService;
