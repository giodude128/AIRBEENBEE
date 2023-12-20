'use strict';


const { SpotImage } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await SpotImage.bulkCreate([
      {
        spotId: 1,
        url: 'https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg',
        preview: false
      },
      {
        spotId: 2,
        url: 'https://www.shutterstock.com/image-photo/luxurious-new-construction-home-bellevue-600nw-555325381.jpg',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://charlotte.axios.com/wp-content/uploads/2022/01/hot-homes-charlotte.jpeg',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://images.squarespace-cdn.com/content/v1/61b72f8a523efa519546e0e5/1658765826106-A88HFK5FUVUJ7S9M6VE7/1932+Single+Family+house+New+Orleans+Louisiana+-+front+view+3.jpg',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://pattersoncustomhomes.com/wp-content/uploads/2018/11/modern-beach-house-exterior-bay.jpg',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://photos.zillowstatic.com/fp/982b2d08feb1dd79878dadd6f8ae3295-p_e.jpg',
        preview: true
      }
    ], options, { validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: ['1', '2', '3', '4', '5', '6'] }
    }, {});
  }
};
