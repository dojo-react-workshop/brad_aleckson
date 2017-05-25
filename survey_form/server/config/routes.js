module.exports = (app) =>
{
    app.get('/', (request, response) => {
        response.render('index');
    })
    app.post('/result', (request, response) => {
        response.render('result', {info: request.body});
    })
}