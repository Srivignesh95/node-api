const express = require("express");
const router = express.Router();

const { showallexperience, showExperienceForm, newExperience, deleteExperience } = require("./controller");
const { getExperience } = require("./model"); 

router.get("/list", showallexperience);
router.get("/add", showExperienceForm);
router.post("/add/submit",newExperience);
router.get("/delete/submit",deleteExperience);

router.get("/api/list", async (req, res) => {
    try {
        const experiences = await getExperience();
        res.json(experiences);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch experiences" });
    }
});

module.exports = router;