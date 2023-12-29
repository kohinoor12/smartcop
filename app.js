const express=require('express');
const path = require('path');
const body_parser=require("body-parser");
const incidentRouter=require('./routers/incidentrouter');
const evidenceRouter=require('./routers/evidencerouter');
const uploadRouter=require('./routers/uploadrouter');
const searchRouter = require('./routers/searchrouter');
const missedRouter=require('./routers/missedrouter');
const missingsearchRouter=require('./routers/missingsearchrouter');
const gunRouter=require('./routers/gunrouter');
const gunsearchRouter=require('./routers/gunsearchrouter');
const imgRouter=require('./routers/imgrouter');
const evimgRouter=require('./routers/evimgrouter');
const incidentsearchRouter=require('./routers/incidentsearchrouter');
const evidencesearchRouter=require('./routers/evidencesearchrouter');
const adminmapRouter=require('./routers/adminmaprouter');
const patrolRouter=require('./routers/patrolrouter');
const offenderRoutes = require("./routers/offendersrouter");


const app=express();
app.use(body_parser.json());
app.use('/',incidentRouter);
app.use('/',evidenceRouter);
app.use('/',uploadRouter);
app.use('/', searchRouter);
app.use('/', missedRouter);
app.use('/',missingsearchRouter);
app.use('/', gunRouter);
app.use('/',gunsearchRouter);
app.use('/', imgRouter);
app.use('/', evimgRouter);
app.use('/', incidentsearchRouter);
app.use('/', evidencesearchRouter);
app.use('/', adminmapRouter);
app.use('/', patrolRouter);
app.use("/", offenderRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// app.use('/uploads', express.static(path.join(__dirname, 'D:/FlutterProjects/first_flutter_application/server/uploads')));



module.exports=app;