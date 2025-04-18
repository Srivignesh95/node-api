const experienceModel = require("./model");

const showallexperience = async (request, response) => {
    
        let experienceList = await experienceModel.getExperience();
        if(!experienceList.length){
            await experienceModel.defaultExperience();
            experienceList = await experienceModel.getExperience();
        }
        response.render("experiences/list", { experience: experienceList });
    
};

const showExperienceForm  = async (request, response) => {
    response.render("experiences/add");
}

const newExperience = async (request, response) => {
    let result = await experienceModel.addExperience(
        request.body.title,
        request.body.company,
        request.body.location,
        request.body.startyear,
        request.body.endyear,
        request.body.desc
    );
    // let result = await experienceModel.addExperience(inputExperience);
    console.log(result);
    response.redirect("../list");
}

const deleteExperience = async (request, response) =>{
    let result = request.query.linkid;
    await experienceModel.deleteExperience(result);
    console.log(result);
    response.redirect("../list");
}

module.exports = {
    showallexperience,
    showExperienceForm,
    newExperience,
    deleteExperience
};