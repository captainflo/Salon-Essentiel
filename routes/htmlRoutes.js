module.exports = app => {
    app.get('/',(req,res)=>{
        res.send({start: 'hello'})
    })
}