const User=require('./Modal/UserModal')

router.post("/signup", async (req, res) => {
    let result = await userController.signup(req)
    return res.status(200).json({"message" : result});
})

console.log('router')

module.exports = router;