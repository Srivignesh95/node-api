const mongoose = require("mongoose");
//importing db.js
const db = require("../../db");


//creating experience schema
const experienceSchema = new mongoose.Schema({
    jobtitle: String,
    company: String,
    location: String,
    startYear: Number,
    endYear: Number,
    description: String
});
// creating a model named experience and passing the name of our model which will be used to create a database with name experiences
const Experience = mongoose.model("Experience", experienceSchema);

//initailizing experience table if not created... it will automatically create a database with these given data
async function defaultExperience() {
    const experienceData = [{
        jobtitle: "Associate",
        company: "AstraZeneca India Private Ltd, ",
        location: "Chennai, India",
        startYear: 2019,
        endYear: 2023,
        description: "Built custom websites using HTML, CSS, JavaScript, and WordPress, tailored to client brand identity and specific needs"
    },{
        jobtitle: "Web Designer",
        company: "Frost & Sullivan (India) Pvt. Ltd.,",
        location: "Chennai, India",
        startYear: 2018,
        endYear: 2019,
        description: "Built custom websites using HTML, CSS, JavaScript, and WordPress, tailored to client brand identity and specific needs"
    }];
    await Experience.insertMany(experienceData);
}

// function to get all the list of experience table
async function getExperience() {
    await db.connect();
    return await Experience.find({});
}

// function to add experience in our table
async function addExperience(newtitle, newcompany, newlocation, newstartyear, newendyear, newdescription) {
    await db.connect();
    let newexperience = new Experience({
        jobtitle: newtitle,
        company: newcompany,
        location: newlocation,
        startYear: newstartyear,
        endYear: newendyear,
        description: newdescription 
    });

    let result = await newexperience.save();
    console.log(result);
}

// function to delete experience in our table
async function deleteExperience(id) {
    await db.connect();
    let result = await Experience.deleteOne({_id: id});
    console.log(result);
}

module.exports = {
    defaultExperience,
    getExperience,
    addExperience,
    deleteExperience
}