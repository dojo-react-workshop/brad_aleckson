module.exports = ( () => {
    // let namelist = ["Joe Barry Carroll", "Larry Fitzgerald", "Billy Ray Valentine"];
    let namelist = [];
    return{
        homePage: (request, response) => {
            response.render('index', {nameList: namelist});
        }
        , addName: (request, response) => {
            if(request.body.name.length > 0)
                namelist.push(request.body.name);
            response.redirect('/');
        }
        , clearList: (request, response) => {
            // console.log(request.body.name)
            namelist = [];
            response.redirect('/');
        }
    }
})();