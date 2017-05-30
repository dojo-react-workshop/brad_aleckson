var namelist = require('../controllers/namelist.js')

module.exports = (app) => {
    // app.get('/', (request, response) => {
    //     response.render('index', {nameList: ["Joe Barry Carroll", "Larry Fitzgerald", "Billy Ray Valentine"] });
    // })
    // app.post('/name', (request, response) => {
    //     response.redirect('/');
    // })
	app.get('/', namelist.homePage);
	app.post('/name', namelist.addName);
	app.post('/remove', namelist.removeItem);
	app.get('/names', namelist.getNames);
	app.get('/clear', namelist.clearList);
}