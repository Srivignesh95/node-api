const mongoose = require("mongoose");
const db = require("../../db");

//create project scheme
const projectSchema = new mongoose.Schema({
    name: String,
    summary: String,
    techStack: String,
    status: String,
    timespan: String,
    projectLink: String,
    repoLink: String
});
const ProjectModel = mongoose.model("Project", projectSchema);

//functions
async function initializeProject() {
    const preDefinedData = [{
        name: "AravindSA",
        summary: "A responsive static website designed to support mental health awareness and provide helpful resources for well-being.",
        techStack: "HTML5, CSS3, Bootstrap",
        status: "Completed",
        timespan: "5 Months",
        projectLink: "https://weneedtotalk.in/"
    },{
        name: "OND Digitals",
        summary: "A WordPress website with a responsive and customized design, offering digital solutions and online presence enhancement.",
        techStack: "WordPress",
        status: "Completed",
        timespan: "3 Months",
        projectLink: "https://odndigital.com/"
    }];
    await ProjectModel.insertMany(preDefinedData);
}

async function getProject() {
    await db.connect();
    return await ProjectModel.find({});
}

async function addNewProject(projectname, projectsummary, projecttechnology, projectstatus, projecttimespan, projectLink, repoLink) {
    await db.connect();
    let newProject = new ProjectModel({
        name: projectname,
        summary: projectsummary,
        techStack: projecttechnology,
        status: projectstatus,
        timespan: projecttimespan,
        projectLink,
        repoLink
    });
    let result = await newProject.save();
    console.log(result);       
}

async function deleteProject(id) {
    await db.connect();
    let deleted = await ProjectModel.deleteOne({_id:id});
    console.log(deleted);
}
module.exports = {
    initializeProject,
    getProject,
    addNewProject,
    deleteProject
}