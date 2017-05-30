module.exports = ( () => {
    // let namelist = ["Joe Barry Carroll", "Larry Fitzgerald", "Billy Ray Valentine"];
    let namelist = [];
    return{
        homePage: (request, response) => {
            response.render('index', {nameList: namelist});
        }
        , getNames: (request, response) => {
            response.json(JSON.stringify(namelist));
        }
        , addName: (request, response) => {
            // console.log(`request.body.name: ${request.body.name}`);
            if(request.body.name.length > 0)
                namelist.push(request.body.name);
            // console.log(`namelist: ${namelist}`);
            console.log('done with add')
            console.log(namelist);
            console.log('\n')
            response.redirect('/');
        }
        , clearList: (request, response) => {
            // console.log(request.body.name)
            namelist = [];
            response.send('ok');
        }
        , removeItem: (request, response) => {
            console.log(`remove name at index of request.body.i: ${request.body.i}`);
            console.log(namelist);
            var index = Number(request.body.i);
            console.log(`index: ${index}`);
            console.log(`should remove ${namelist[index]}`);
            for(var q = index; q < namelist.length-1; q++)
            {
                console.log(namelist);
                console.log(`q: ${q}, (q+1): ${(q+1)}`);
                namelist[q] = namelist[(q+1)];
                console.log(namelist);
            }
            namelist.length -= 1;
            console.log(namelist);
            response.send('ok');
        }
    }
})();