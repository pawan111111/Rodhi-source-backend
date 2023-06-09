import express from 'express';
import Category from '../model/category.js';
import slugify from 'slugify';

const categoryRoutes = express.Router();

categoryRoutes.post('/category/create', (req, res) =>{

const categoryObj = {
    name: req.body.name,
    slug: slugify(req.body.name)
}
if(req.body.parentId){
    categoryObj.parentId = req.body.parentId;
}
const cat = new Category(categoryObj);
cat.save((error, category) => {
    if(error) return res.status(400).json({error});
    if(category) {
        return res.status(201).json({category});
    }
});

} )

export default categoryRoutes;