const router = require('express').Router()
const reviewControllers = require('../controllers/reviews.controllers');

// implement application routes / endpoints
router.get('/', async (req, res)=> {
    let reviews = await reviewControllers.fetchAllReviews();
    return res.json({reviews})
});

router.post('/add', async (req, res) => {
    let {fullName, message} = req.body;
    let created = await reviewControllers.createReview({fullName, message })
    return res.json({created})
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const {fullName} = req.query
    let data = await reviewControllers.fetchReview(id);
    return res.json({ data });
})

router.put('/:id/update', async (req, res) => {
    const {id} = req.params;
    const {message} = req.body;
    let updated = await reviewControllers.updateReview(id, message)
    res.json({data: updated})
})

router.delete('/:id/delete', async (req, res) => {
    const {id} = req.params;
    response = await reviewControllers.deleteReview(id)
    return res.json({data: response})
})

module.exports = router