'use strict';

const { Review } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Review.bulkCreate([
      {
        spotId: 1,
        userId: 1,
        review: '"Serene location but outdated amenities & discrepancies. Potential with improvements."',
        stars: 3
      },
      {
        spotId: 2,
        userId: 2,
        review: 'This secluded 10-bed sanctuary is an absolute dream! The spacious rooms and charming communal areas create an atmosphere of luxury and comfort. The tranquil garden adds to the serene setting, offering privacy and relaxation. Perfectly situated near attractions, it`s an ideal haven for a peaceful and indulgent getaway.',
        stars: 5
      },
      {
        spotId: 3,
        userId: 3,
        review: 'This place was a complete disaster! The description promised a vibrant party house, but it was nothing more than a rundown, chaotic mess. The so-called entertainment area was dilapidated, the sound system barely worked, and the private patio was more of a neglected corner. Definitely not worth it for any lively gatherings!',
        stars: 1
      },
      {
        spotId: 4,
        userId: 4,
        review: 'Absolutely dreadful experience! This so-called haunted manor was nothing short of a scam. No ghostly tours, no paranormal activities—just a decrepit, poorly-maintained house with tacky decorations. Save yourself from this disappointing and far from `hair-raising` nightmare!',
        stars: 1
      },
      {
        spotId: 5,
        userId: 5,
        review: 'What an incredible coastal paradise! The 3-bed beachfront house offered breathtaking panoramic views of the ocean, and the direct beach access made our stay unforgettable. The sun-drenched patio was perfect for witnessing stunning sunsets, and the tranquil atmosphere provided the ideal setting for a memorable seaside retreat. We thoroughly enjoyed the water sports and left with cherished memories of this idyllic haven.',
        stars: 4
      },
      {
        spotId: 6,
        userId: 6,
        review: 'What a delightful woodland escape! The cozy 4-bed cabin provided stunning panoramic views of the forest, complemented by a crackling fireplace that added to the cozy ambiance. The charming outdoor deck was a perfect spot to soak in nature`s tranquility, and the nearby hiking trails offered an enchanting exploration. It was indeed a peaceful retreat in this idyllic forest getaway that left us refreshed and reconnected with nature',
        stars: 5
      }
    ], options, { validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Reviews';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: ['1', '2', '3', '4', '5', '6'] }
    }, {});

  }
};
