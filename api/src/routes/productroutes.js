const {Product, Category} = require("../db")
const {Router} = require("express")
const {Op} = require("sequelize");

const router = Router()

//Get all Products
router.get("/", async (req, res)=>{
  try {
    const allProducts = await Product.findAll()
    res.status(200).send(allProducts)
  }
  catch (err){
    console.log(err)
    res.status(404).send({msg: err.message})
  }
})
//Get all products that match a category, which is received via parameters.
router.post("/filter", async (req, res)=>{
  const {categories} = req.body
  try {
    const products = await Product.findAll({
      where: {
        category:[categories]
      }
    })
    res.status(200).send(products)
  } catch (err){
    console.log(err)
    res.status(404).send({msg: err.message  })
  }
})

router.get("/search", async (req, res)=>{
  const {name} = req.query
  console.log(name)
  try{
    const matchingProducts = await Product.findAll(
        {where:{
            name: {[Op.like]: `%${name}%`}
          }})
    res.status(200).send(matchingProducts)
  } catch (err){
    console.log(err)
    res.status(400).send({msg: err.message})
  }

})

module.exports = router