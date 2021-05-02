module.exports={
    HOST:"localhost",
    USER:"nay_bd",
    PASSWORD:"123",
    DB:"sidb",
    dialect:"postgres",
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};