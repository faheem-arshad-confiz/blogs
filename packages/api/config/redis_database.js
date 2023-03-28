var redis = require('redis');
// var redisClient = redis.createClient({
//     socket: {
//         host: 'localhost',
//         port: '6379'
//     }
// });
var redisClient = redis.createClient();


(async () => {
    if(redisClient && redisClient.isOpen){
        console.log("Connection with redis already exist...");
        return redisClient;
    }
    console.log("Trying to connect to redis...");
    await redisClient.connect();
})();
    
redisClient.on("ready", () => {
    console.log("Connected to Redis!");
    console.log(`client.isOpen: ${redisClient.isOpen}, client.isReady: ${redisClient.isReady}`);
});
  
redisClient.on("error", (err) => {
    console.log("Error in Connection Redis"+err);
});

redisClient.on("end", function() {
    console.log("Redis Connection Terminated ");
});

exports.redis = redis;
exports.redisClient = redisClient;