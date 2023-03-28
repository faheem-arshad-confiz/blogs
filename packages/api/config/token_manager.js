var redisClient = require('./redis_database').redisClient;
var TOKEN_EXPIRATION = 300;
var TOKEN_EXPIRATION_SEC = TOKEN_EXPIRATION * 60;

// Middleware for token verification
exports.verifyToken = async function (req, res, next) {
	var token = getToken(req.headers);

	console.log("Token is "+ token);
	console.log("Redis Client is : "+redisClient);
	var cacheKey = 'MY_CACHE_KEY';
	cacheKey = cacheKey + token;

	// First attempt to retrieve data from the cache
	try {
		console.log("cacheKey while fetching is "+cacheKey);
	  	const cachedResult = await redisClient.get(cacheKey);
			console.log("Cached Result is : "+cachedResult);
			if (!cachedResult) {
				res.send(401);
			}
			else {
				console.log("JWT is fine");
				next();
			}
	} catch (error) {
	  console.error('Something happened to Redis', error);
	}
};

exports.expireToken = function(headers) {
	var token = getToken(headers);
	cacheKey = cacheKey + token;
	if (token != null) {
		redisClient.set(cacheKey, token);
    	redisClient.expire(token, TOKEN_EXPIRATION_SEC);
	}
};

exports.setToken = function(token) {
	var cacheKey = 'MY_CACHE_KEY';
	cacheKey = cacheKey + token;
	console.log("cacheKey while setting is "+cacheKey);
	console.log("Setting token in redis")
	if (token != null) {
		console.log("Redis status : "+redisClient.isOpen);
		redisClient.set(cacheKey, token);
	}
};

var getToken = function(headers) {
	if (headers && headers.authorization) {
		var authorization = headers.authorization;
		var part = authorization.split(' ');

		if (part.length == 2) {
			var token = part[1];

			return part[1];
		}
		else {
			return null;
		}
	}
	else {
		return null;
	}
};

exports.TOKEN_EXPIRATION = TOKEN_EXPIRATION;
exports.TOKEN_EXPIRATION_SEC = TOKEN_EXPIRATION_SEC;