module.exports = function(app){

  var api = app.api.politico;

  app.route('/api/artigos')
    .get(api.lista)
    .post(api.adiciona);

  app.route('/api/Artigos/:id')
      .get(api.buscaPorId)
      .delete(api.removePorId)
      .put(api.atualiza);

};
