module.exports = {
    HOST : 'localhost',
    USER :'root',
    PASSWORD :'2021811',
    DB : 'eisync_db',
    dialect : 'mysql',

    pool : { 
        max : 10,
        min : 0 ,
        acquire : 30000,
        idle : 10000
    }
}