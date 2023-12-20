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
        address: '123 Orange street',
        city: 'Los Alamitos',
        state: 'CA',
        country: 'USA',
        lat: 23.56,
        lng: 51.24,
        name: 'Family Home',
        description: 'Charming 3-bed home in serene area, featuring fully equipped kitchen, cozy living room, and lush backyard with BBQ. Ideal for family gatherings, near parks, shops, and attractions for a memorable retreat.',
        price: 500,
        previewImage: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg'
      },

      {
        ownerId: 2,
        address: '234 Citrus street',
        city: 'Cerritos',
        state: 'CA',
        country: 'USA',
        lat: 27.21,
        lng: 54.57,
        name: 'Quiet area',
        description: 'Secluded 10-bed sanctuary in serene locale, featuring spacious rooms, charming communal areas, and a tranquil garden. Enjoy privacy amidst nearby attractions, an ideal haven for a luxurious, peaceful getaway.',
        price: 600,
        previewImage: 'https://www.jamesedition.com/stories/wp-content/uploads/2022/03/mansions_main_fin.jpg'
      },
      {
        ownerId: 3,
        address: '456 Lime street',
        city: 'Cypress',
        state: 'CA',
        country: 'USA',
        lat: 31.5,
        lng: 38.4,
        name: 'Party House',
        description: 'Vibrant 5-bed party house with entertainment area, top-notch sound system, game room, and private patio for lively gatherings. Perfect for embracing a vibrant atmosphere with nearby nightlife and trendy hotspots.',
        price: 500,
        previewImage: 'https://mygate.com/wp-content/uploads/2023/07/110.jpg'
      },
      {
        ownerId: 4,
        address: '678 Apple street',
        city: 'Buena Park',
        state: 'CA',
        country: 'USA',
        lat: 21.23,
        lng: 44.67,
        name: 'Haunted House',
        description: 'Experience spine-tingling chills at our haunted 5-bed manor, steeped in dark legends and eerie period décor. Offering ghostly tours, paranormal activities, and a chilling atmosphere for an unforgettable, hair-raising adventure.',
        price: 300,
        previewImage: 'https://cdn.captivatinghouses.com/wp-content/uploads/2023/06/IMG_1543.jpeg'
      },
      {
        ownerId: 5,
        address: '237 Beach street',
        city: 'Seal Beach',
        state: 'CA',
        country: 'USA',
        lat: 27.23,
        lng: 55.67,
        name: 'Beach House',
        description: 'Immerse in a coastal paradise! 3-bed beachfront house with panoramic ocean views, direct beach access, and a sun-drenched patio for stunning sunsets. Experience seaside tranquility, water sports, and create cherished memories in this idyllic haven.',
        price: 1000,
        previewImage: 'https://hips.hearstapps.com/hmg-prod/images/cayman-islands-villa-kempa-kai-2020-021-1616076929.jpg'
      },
      {
        ownerId: 6,
        address: '487 Sunset street',
        city: 'Lakewood',
        state: 'CA',
        country: 'USA',
        lat: 33.23,
        lng: 36.69,
        name: 'Woodland retreat',
        description: 'Escape to a serene woodland hideaway! Cozy 4-bed cabin with panoramic forest views, crackling fireplace, and a charming outdoor deck. Embrace nature`s tranquility, explore nearby hiking trails, and relish a peaceful retreat in this enchanting forest getaway',
        price: 200,
        previewImage: 'https://www.neighbor.com/storage-blog/wp-content/uploads/2020/03/AdobeStock_89298214-min_8421efb06b9d433a6f2f17d886703510_2000-550x367.jpeg'
      }

    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      city: { [Op.in]: ['Los Alamitos', 'Cerritos', 'Cypress', 'Buena Park', 'Seal Beach', 'Lakewood'] }
    }, {});
  }
};
