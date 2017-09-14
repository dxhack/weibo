exports.route = function(app){

    console.log("routing");

    app.get("/test_api",function(req,res){
        var id = req.query["id"];

        res.end("hello api"+id);
    });
}