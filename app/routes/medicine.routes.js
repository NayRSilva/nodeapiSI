const {authJwt} = require("../middleware");
const controller = require("../controllers/medicine.controller");

module.exports = function(app){
    app.use(function(req,res,next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
          );
          next();
    })

    app.post("/api/medicine/new", controller.createMedicine)

    app.post("/api/medicine/:id", controller.updateMedicine)
    app.get("/api/medicine/all", controller.readMedicines)

    
}