const router = require('express').Router();
const { Category, Product } = require('../../models');
//const db = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    attributes: [
      'id',
      'product_name',
      'price',
      'stock',
      'category_id'
    ]
  }).then(Category => {
    res.json(Category);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    attributes: [
      'id',
      'product_name',
      'price',
      'stock',
      'category_id'
    ],
    where: {
      id: req.params.id
    }
  }).then(Category => {
    res.json(Category);
  });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    id: req.params.id,
    category_name: req.params.category_name,
  }).then(Category => {
    res.json(Category);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.params.category_name
    },
    {
      where: {
        id: req.params.id
      },
    }.then(Category => {
      res.json(Category);
    }));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(Category => {
    res.json(Category);
  })
});

module.exports = router;
