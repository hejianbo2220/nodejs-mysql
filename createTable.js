//加载mysql Module
var mysql = require("mysql");

//用户名和密码
var connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "123456"
});

function createTable(DATABASE_NAME, TABLE_NAME){
	//创建连接
	connection.connect();
	
	//选择数据库
	connection.query(
		"USE "+DATABASE_NAME
	);
	
	//创建表格
	connection.query(
		"CREATE TABLE "+TABLE_NAME+
		"("+
			"id INT(2) AUTO_INCREMENT,"+
			"name VARCHAR(255),"+
			"age INT(1),"+
			"PRIMARY KEY (id)"+
		")",
		function(err) {
			if (err) {
				throw err;
			} else {
				console.log(TABLE_NAME+" is created!");
			}
		}
	);
	
	//断开连接
	connection.end();
}

exports.createTable = createTable;