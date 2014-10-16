//加载mysql Module
var mysql = require("mysql");

//用户名和密码
var connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "123456"
});

function dropTable(DATABASE_NAME, TABLE_NAME){
	//创建连接
	connection.connect();
	
	//选择数据库
	connection.query(
		"USE "+DATABASE_NAME
	);
	
	//删除表格
	connection.query("DROP TABLE "+TABLE_NAME, function(err) {
		if (err) {
			throw err;
		} else {
			console.log(TABLE_NAME+" is dropped!");
		}
	});
	
	//断开连接
	connection.end();
}

exports.dropTable = dropTable;