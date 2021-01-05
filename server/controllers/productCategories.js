const ProductCategory = require("../models/productCategory");

exports.getProductCategories = async (req, res) => {
  try {
    const foundCategories = await ProductCategory.find({});
    return res.json(foundCategories);
  } catch (error) {
    return res.mongoError(error);
  }
};

exports.createProductCategory = async (req, res) => {
  const categoryData = req.body;
  if (!categoryData) {
    return res.sendApiError({
      title: "Missing field!",
      detail: "A field is missing!",
    });
  }
  try {
    const existingCategory = await ProductCategory.findOne({
      categoryName: categoryData.categoryName,
    });
    if (existingCategory) {
      return res.sendApiError({
        title: "Existing category!",
        detail: "Category with this name already exists!",
      });
    }

    // if(categoryData.categoryName)
    const category = await ProductCategory.create(categoryData);
    return res.json(category);
  } catch (error) {
    return res.mongoError(error);
  }
};
