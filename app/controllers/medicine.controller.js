const db = require("../models");
const Medicine = db.medicine;

exports.createMedicine = (req, res) =>{
    Medicine.create({
        name: req.body.name,
        total: req.body.total,
        quantity: req.body.quantity,
        refil: req.body.refil,
        userId: req.body.userId
    }).then(()=>{
        res.send({message: "medicine registered"})
    }).catch(err =>{
        res.status(500).send({message: err.message})
    });
}

exports.readMedicines = async (req, res) =>{
    return await Medicine.findAll();
}

exports.updateMedicine = (req, res)=>{
    var updateM ={
        name: req.body.name,
        total: req.body.total,
        quantity: req.body.quantity,
        time: req.body.time,
        refil: req.body.refil

    }
    Medicine.update(updateM, {returning:true, where: {id:req.params.id} }).then(
        ([rowsUpdate, [updatedMedicine]])=>{
        res.status(200).json(updatedMedicine)
    }).catch((error)=>{
        console.log(JSON.stringify(error))
    })

}