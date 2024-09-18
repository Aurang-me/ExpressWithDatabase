module.exports = {
    development: {
      username: 'postgres', // replace with your DB username
      password: '11223344', // replace with your DB password
      database: 'ExpressPlayGround', // replace with your DB name
      host: '127.0.0.1',
      dialect: 'postgres', // or 'postgres', 'sqlite', etc.
    },
    test: {
      username: 'root',
      password: 'password',
      database: 'database_test',
      host: '127.0.0.1',
      dialect: 'mysql',
    },
    production: {
      username: 'root',
      password: 'password',
      database: 'database_production',
      host: '127.0.0.1',
      dialect: 'mysql',
    },
  };
  