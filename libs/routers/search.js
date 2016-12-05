module.exports = function (app) {
  /**
   * @api {get} /entries/:id Get Entry
   * @apiName GetEntry
   * @apiGroup Entry
   * @apiVersion 0.0.1
   *
   * @apiParam {String} id id
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200
   *     {
   *       "success": true,
   *       "data": {
   *         "users": [{
   *           "username": "",
   *           "slug": ""
   *         }],
   *         "topics": [{
   *           "id": "",
   *           "title": "",
   *           "slug": ""
   *         }]
   *       }
   *     }
   */
  app.get("/search", giffMe("query", ["q"]), routers["search"].query);
};