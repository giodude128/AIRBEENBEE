'use strict';

const { Spot } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Spot.bulkCreate([
      {
        ownerId: 1,
        address: '12345 Orange street',
        city: 'Los Alamitos',
        state: 'CA',
        country: 'USA',
        lat: 23.56,
        lng: 51.24,
        name: 'Family Home',
        description: 'somewhere',
        price: 500,
        // previewImage: 'https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg'
      },
      {
        ownerId: 2,
        address: '23456 Citrus street',
        city: 'Cerritos',
        state: 'CA',
        country: 'USA',
        lat: 27.21,
        lng: 54.57,
        name: 'Matt',
        description: 'Ranch',
        price: 600,
        // previewImage: 'https://www.shutterstock.com/image-photo/luxurious-new-construction-home-bellevue-600nw-555325381.jpg'
      },
      {
        ownerId: 3,
        address: '45678 Lime street',
        city: 'Cypress',
        state: 'CA',
        country: 'USA',
        lat: 31.5,
        lng: 38.4,
        name: 'Susy',
        description: 'Family House',
        price: 550,
        // previewImage: 'https://charlotte.axios.com/wp-content/uploads/2022/01/hot-homes-charlotte.jpeg'
      },
      {
        ownerId: 4,
        address: '67890 Apple street',
        city: 'Buena Park',
        state: 'CA',
        country: 'USA',
        lat: 21.23,
        lng: 44.67,
        name: 'Vincent',
        description: 'Cozy House',
        price: 300,
        // previewImage: 'https://images.squarespace-cdn.com/content/v1/61b72f8a523efa519546e0e5/1658765826106-A88HFK5FUVUJ7S9M6VE7/1932+Single+Family+house+New+Orleans+Louisiana+-+front+view+3.jpg'
      },
      {
        ownerId: 5,
        address: '237456 Beach street',
        city: 'Seal Beach',
        state: 'CA',
        country: 'USA',
        lat: 27.23,
        lng: 55.67,
        name: 'Edmarc',
        description: 'Beach House',
        price: 1000,
        // previewImage: 'https://pattersoncustomhomes.com/wp-content/uploads/2018/11/modern-beach-house-exterior-bay.jpg'
      },
      {
        ownerId: 6,
        address: '487 Sunset street',
        city: 'Lakewood',
        state: 'CA',
        country: 'USA',
        lat: 33.23,
        lng: 36.69,
        name: 'Dan',
        description: 'Quiet home',
        price: 250,
        // previewImage: 'https://photos.zillowstatic.com/fp/982b2d08feb1dd79878dadd6f8ae3295-p_e.jpg'
      }
    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      ownerId: { [Op.in]: ['1', '2', '3', '4', '5', '6'] }
    }, {});
  }
};
