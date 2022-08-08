const jwt = require('jsonwebtoken');

exports.jwtAuth = async(req,res) => {
	const token = req.header('auth-token');
	if(typeof token != undefined){
		jwt.verify(token,process.env.MY_JWT_SECRET, async(err,authData) =>{
         if(err){
         	throw new Error('Access denied! please login to continue')
         }
         else{
         	req.userId = authData;
         	await next();
         }

		})
	}
	else{
	 throw new Error('Access denied! please login to continue')
	}
}