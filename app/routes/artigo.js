module.exports = function(app){

  var api = app.api.artigo;

  app.route('/api/artigos')
    .get(api.lista)
    .post(api.adiciona);

  app.route('/api/artigos/:id')
      .get(api.buscaPorId)
      .delete(api.removePorId)
      .put(api.atualiza);

};
