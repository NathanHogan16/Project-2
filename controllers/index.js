
const router = require('express').Router();
 const apiRoutes = require('./api');
// const homeRoutes = require('./home-routes');

//const userRoutes = require('./user-routes.js');

//router.use('/users', userRoutes);
router.get("/",(req, res) => res.send("hello3"))
// router.use('/api', apiRoutes);
// router.use('/', homeRoutes)

router.use((req, res) => {
    res.status(404).end();
});


module.exports = router;