const {Product, Category} = require("../db")
const {Router} = require("express")

const router = Router()

//Get all Categories
router.get("/", async (req, res)=>{
  try {
    const allCategories = await Category.findAll()
    res.status(200).send(allCategories)
  }
  catch (err){
    console.log(err)
    res.status(400).send({msg: err.message})
  }
})

module.exports = router