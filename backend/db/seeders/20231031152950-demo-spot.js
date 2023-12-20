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
        description: 'Welcome to our charming family home nestled in a tranquil neighborhood! This spacious and inviting three-bedroom property boasts a fully equipped kitchen, a cozy living room perfect for family gatherings, and a lush backyard with a barbecue area ideal for outdoor fun. Conveniently located near parks, shops, and local attractions, our home offers the perfect retreat for families looking to create lasting memories together.',
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
        description: 'Escape to tranquility in this expansive 10-bedroom residence nestled in a serene and secluded neighborhood. With ample space for relaxation and privacy, this retreat offers a peaceful haven away from the hustle and bustle, boasting spacious rooms, charming communal areas, and a serene garden ideal for unwinding. Experience the luxury of seclusion while still being conveniently close to nearby attractions, making this the perfect spot for a tranquil getaway',
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
        description: 'Step into the ultimate party haven at our vibrant and spacious residence designed for unforgettable celebrations! This five-bedroom home features a lively entertainment area complete with a state-of-the-art sound system, a game room equipped with a pool table, and a private outdoor patio perfect for hosting lively gatherings. Embrace the lively atmosphere of this party-centric space, where vibrant nightlife, trendy bars, and local hotspots are just around the corner.',
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
        description: 'Welcome to a spine-tingling adventure at our haunted manor, where history and mystery converge! This eerie five-bedroom estate boasts dark legends, ghostly tales, and original period décor that will send shivers down your spine. Experience an otherworldly stay with nightly tours, paranormal activities, and a truly haunting atmosphere that promises an unforgettable, hair-raising experience for the bravest of souls.',
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
        description: 'Indulge in the ultimate coastal retreat at our exquisite beachfront oasis! This charming three-bedroom house offers stunning panoramic views of the ocean, direct beach access, and a spacious sun-drenched patio perfect for savoring breathtaking sunsets. Immerse yourself in the soothing sounds of the waves, enjoy water sports just steps away, and create unforgettable seaside memories in this idyllic haven.',
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
        description: 'Welcome to our enchanting woodland retreat, nestled amidst a lush and serene forest setting! This cozy four-bedroom cabin offers a rustic yet modern escape, complete with panoramic forest views, a crackling fireplace, and a charming outdoor deck for savoring nature`s tranquility. Immerse yourself in the beauty of the surrounding woods, enjoy hiking trails right at your doorstep, and experience a peaceful getaway in this idyllic forest hideaway.',
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
