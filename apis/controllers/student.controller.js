const studentModel = require('../models/student.model')


exports.addData = (req, res) => {
    let payload = req.body
    const addDetail = new studentModel({
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        collegeId: payload.collegeId,
        collegeName: payload.collegeName,
        contactNumber: payload.contactNumber,
        track: payload.track,
        image: payload.image
    })

    addDetail.save((error, document) => {
        if (error) {
            res.send({
                error: true,
                message:"something went wrong"
            })
        } else {
            res.send({
                error: false,
                data: document,
                message:"success"
            })
        }
    })

}

exports.getAllData = (req, res) => {

    studentModel.find()
    .then(data => {
        res.send({
            error: false,
            data: data,
            message:"success"
        })})
    .catch(error => {
        console.log(error);
        res.send({
            error: true,
            message:"something went wrong"
        })
    })

}

exports.getDatabyId = (req, res) => {

    studentModel.findOne({_id:req.body._id})
    .then(data => {
        res.send({
            error: false,
            data: data,
            message:"success"
        })
    })
    .catch(error => {
        console.log(error);
        res.send({
            error: true,
            message:"something went wrong"
        })
    })
}

exports.updateDatabyId = (req, res) => {

    studentModel.findOneAndUpdate({
        _id: req.body.user_id
    }, {
        $set: {
            name: req.body.name,
            mobile: req.body.mobile
        }
    }, {
        new: true}, (error, document) => {
        if (error) {
            res.send({
                error: true,
                message:"something went wrong"
            })
        } else {
            res.send({
                error: false,
                data: document,
                message:"success"
            })
        }
    })

}

exports.updateData = (req, res) => {

    studentModel.findOneAndUpdate({
        _id: req.body.user_id
    }, {
        $set: {
            name: req.body.name,
            mobile: req.body.mobile
        }
    }, {
        new: true
    }, (error, document) => {
        if (error) {
            res.send({
                error: true,
                message:"something went wrong"
            })
        } else {
            res.send({
                error: false,
                data: document,
                message:"success"
            })
        }
    })

}

exports.deleteData = (req,res) => {
    studentModel.findOneAndDelete({
        _id: req.body.user_id
    },(error,document)=>{
        if(error){
            res.send({
                error:true,
                message:"something went wrong"
            })
        }else{
            res.send({
                error:false,
                data:document,
                message:"success"
            })
        }
    })
}
