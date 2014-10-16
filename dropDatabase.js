//加载mysql Module
var mysql = require("mysql");

//用户名和密码
var connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "123456"
});

function dropDatabase(DATABASE_NAME){
	//创建连接
	connection.connect();
	
	//删除数据库
	connection.query("DROP DATABASE "+DATABASE_NAME, function(err) {
		if (err) {
			throw err;
		} else {
			console.log(DATABASE_NAME+" is dropped!");
		}
	});
	
	//断开连接
	connection.end();
}

exports.dropDatabase = dropDatabase;