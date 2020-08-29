const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
//const db = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
    // find all tags
    // be sure to include its associated Product data
    Tag.findAll({
      attributes: [
        'id',
        'product_name',
        'price',
        'stock',
        'category_id'
      ]
    }).then(Tag => {
      res.json(Tag)
    })
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
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
  }).then(Tag => {
    res.json(Tag);
  });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    id: req.params.id,
    tag_name: req.params.tag_name,
  }).then(Tag => {
    res.json(Tag);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
    tag_name: req.params.tag_name
  },
  {
    where: {
      id: req.params.id
    },
  }).then(Tag => {
    res.json(Tag);
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(Tag => {
    res.json(Tag);
  });
});

module.exports = router;
