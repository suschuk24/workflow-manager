module.exports = {
    HOST: "localhost",
    USER: "seth",
    PASSWORD: "pass",
    DB: "tracs-test-db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };