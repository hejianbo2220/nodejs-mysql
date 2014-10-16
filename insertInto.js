//加载mysql Module
var mysql = require("mysql");

//用户名和密码
var connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "123456"
});

function insertInto(DATABASE_NAME, TABLE_NAME){
	//创建连接
	connection.connect();
	
	//选择数据库
	connection.query(
		"USE "+DATABASE_NAME
	);
	
	//插入数据
	connection.query(
		"INSERT INTO "+TABLE_NAME+" VALUES ('01', 'hejianbo', '25')",
		function(err) {
			if (err) {
				throw err;
			} else {
				console.log("data is inserted!");
			}
		}
	);
	
	//断开连接
	connection.end();
}

exports.insertInto = insertInto;