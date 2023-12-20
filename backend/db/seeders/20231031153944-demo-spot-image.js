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
        url: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://www.jamesedition.com/stories/wp-content/uploads/2022/03/mansions_main_fin.jpg',
        preview: true
      },
      {
        spotId: 3,
        url: 'https://mygate.com/wp-content/uploads/2023/07/110.jpg',
        preview: true
      },
      {
        spotId: 4,
        url: 'https://cdn.captivatinghouses.com/wp-content/uploads/2023/06/IMG_1543.jpeg',
        preview: true
      },
      {
        spotId: 5,
        url: 'https://hips.hearstapps.com/hmg-prod/images/cayman-islands-villa-kempa-kai-2020-021-1616076929.jpg',
        preview: true
      },
      {
        spotId: 6,
        url: 'https://www.neighbor.com/storage-blog/wp-content/uploads/2020/03/AdobeStock_89298214-min_8421efb06b9d433a6f2f17d886703510_2000-550x367.jpeg',
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
