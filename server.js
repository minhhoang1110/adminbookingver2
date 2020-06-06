var express=require("express");
var mysql=require("mysql");
var bodyParser=require('body-parser');
var routesBenXe = require('./routes/benxeRoutes');
var routesXe = require('./routes/xeRoutes');
var routestuyenXe = require('./routes/tuyenxeRoutes');
var routesChuyenXe = require('./routes/chuyenxeRoutes');
var routesKhachHang = require('./routes/khachhangRoutes');
var routesChiTietVeXe = require('./routes/chitietvexeRoutes');
var routesChiTietVeXeHuy = require('./routes/chitietvexehuyRoutes');
var routesHoaDon = require('./routes/hoadonRoutes');
var routesTaiKhoan = require('./routes/taikhoanRoutes');
var sql = require('./models/db.js');
var app=express();





app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(express.json({limit:'1mb'}));

var server=require("http").Server(app);
server.listen(5000,function(){
	console.log("Server is running in port 5000 !!!!");
});


//routes
app.get("/admin",function(req,res){
  res.render("dashboard");
});
app.get("/user",function(req,res){
  res.render("user");
});
app.get("/tablebenxe",function(req,res){
  res.render("tableBenXe");
});
app.get("/tablexe",function(req,res){
  res.render("tableXe");
});
app.get("/tabletuyenxe",function(req,res){
  res.render("tableTuyenXe");
});
app.get("/tablechuyenxe",function(req,res){
  res.render("tableChuyenXe");
});
app.get("/tablekhachhang",function(req,res){
  res.render("tableKhachHang");
});
app.get("/tablevexe",function(req,res){
  res.render("tableVeXe");
});
app.get("/tablehoadon",function(req,res){
  res.render("tableHoaDon");
});
app.get("/editbenxe",function(req,res){
  res.render("editBenXe");
});
app.get("/editxe",function(req,res){
  res.render("editXe");
});
app.get("/edittuyenxe",function(req,res){
  res.render("editTuyenXe");
});
app.get("/editchuyenxe",function(req,res){
  res.render("editChuyenXe");
});
app.get("/editkhachhang",function(req,res){
  res.render("editKhachHang");
});
app.get("/statistical",function(req,res){
  res.render("statistical");
});
app.get("/huyve",function(req,res){
	res.render("huyVeXe")
});app.get("/duyetvehuy",function(req,res){
	res.render("DuyetVeHuy")
});

//create routes
routesBenXe(app);
routesXe(app);
routestuyenXe(app);
routesChuyenXe(app);
routesKhachHang(app);
routesChiTietVeXe(app);
routesChiTietVeXeHuy(app);
routesHoaDon(app);
routesTaiKhoan(app);