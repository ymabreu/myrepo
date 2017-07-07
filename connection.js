//connection to the db
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'dev'
var con=''
if(env==='dev') {
    con ='mongodb://localhost:27017/test'
}
else
{
    con='mongodb://address:book@ds021711.mlab.com:21711/addressbook1234';
}
console.log(con);
exports.connectionString= con;