
exports.auth = async (req,res,next) => {
 console.log(req.headers);

 var authHeader = req.headers.authorization;
//to check if the authHeader exist
if(!authHeader){
	var error = new Error('You are not authenticated');
	res.setHeader('WWW-Authenticate','Basic');
	error.status = 401;
	return next(error)
}

var auth = new Buffer.from(authHeader.split(' ')[1],'base64').toString().split(':');

var email = auth[0];
var password = auth[1];

if(email === 'admin@gmail.com' && password ==='password'){
	next();
}
else{
	var error = new Error('You are not authenticated');
	res.setHeader('WWW-Authenticate','Basic');
	error.status = 401;
	return next(error)
}
}