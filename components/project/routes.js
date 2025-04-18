const express = require("express");
const router = express.Router();

const { showallproject, showaddform, addNewProject, deleteProjectById } = require("./controller");
const { getProject } = require("./model"); 

router.get("/list", showallproject);
router.get("/add", showaddform);
router.post("/add/submit", addNewProject);
router.get("/delete/submit",deleteProjectById);


router.get("/api/list", async (req, res) => {
    try {
        console.log("✅ GET /api/list hit"); // Logging is helpful
        const data = await getProject();
        res.json(data);
    } catch (err) {
        console.error("❌ API ERROR:", err);
        res.status(500).json({ error: "Failed to fetch projects" });
    }
});

module.exports = router