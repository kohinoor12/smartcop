const Destination = require('../model/adminmap');

const createDestination = async (req, res) => {
  try {
    const { user, date, destinations } = req.body;
    if (!user || !date || !destinations || !Array.isArray(destinations)) {
      return res.status(400).json({ message: 'Invalid input data' });
    }

    // Save destinations to the database
    await Destination.create({
      user,
      date,
      destinations,
    });
    res.status(201).json({ message: 'Destination saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  createDestination,
};
