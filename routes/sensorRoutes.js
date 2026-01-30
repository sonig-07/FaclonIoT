const router = require("express").Router();
const {ingest,latest} = require("../controllers/sensorController");

router.post("/ingest", ingest);
router.get("/:deviceId/latest", latest);

module.exports = router;