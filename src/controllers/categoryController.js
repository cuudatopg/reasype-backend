const Category = require('../models/categoryModel');
const Item = require('../models/itemModel');

const getCategory = async (req, res) => {
    const {category} = req.params;
    try {
        const categoryData = await Category.findOne({name: category});
        if(!categoryData){
            return res.status(404).json({message: 'category not found'})
        }
        const items = await Item.find({menuId: categoryData.menuId})
        //console.log(items)

        res.status(200).json(items)

    } catch (error) {
        res.status(500).json({message:"no category"})
    }


}

module.exports = {
    getCategory
}