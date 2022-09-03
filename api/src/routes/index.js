const router = require("express").Router();
const productRoutes = require("./productroutes");
const categoryRoutes = require("./categoryroutes");

router.use("/product", productRoutes);
router.use("/category", categoryRoutes);

module.exports = router;