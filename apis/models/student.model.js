const mongoose = require('mongoose')

const schema = mongoose.Schema

const StudentScheme = schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        collegeId: String,
        collegeName: String,
        contactNumber: String,
        track: String,
        image: String,
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model("Student", StudentScheme,"Student")