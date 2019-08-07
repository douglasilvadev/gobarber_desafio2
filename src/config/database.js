module.exports = {
  dialect: 'postgres',
  host: '192.168.99.102',
  port: '5432',
  username: 'postgres',
  password: 'docker',
  database: 'gobaberdesafio',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
