const projectModel = require("./model");

const showallproject = async (request, response) => {
    
        let projectList = await projectModel.getProject();
        if(!projectList.length){
            await projectModel.initializeProject();
            projectList = await projectModel.getProject();
        }
        response.render("projects/list",{project: projectList});
    
}

const showaddform = async(request, response) => {
    if(request.session.loggedIn){
        response.render("projects/add");
    }
    else{
        response.redirect("/admin/login");
    } 
}

const addNewProject = async(request, response) => {
    let result = await projectModel.addNewProject(
        request.body.name,
        request.body.summary,
        request.body.techStack,
        request.body.status,
        request.body.timespan
    );
    console.log(result);
    response.redirect("../list");
}


const deleteProjectById = async(request, response) =>{
    let result = request.query.proid;
    await projectModel.deleteProject(result);
    console.log(result);
    response.redirect("../list");
}

module.exports = {
    showallproject,
    showaddform,
    addNewProject,
    deleteProjectById
}