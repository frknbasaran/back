module.exports = function (app) {
  /**
   * @api {delete} /entries/:id Remove Entry With Id
   * @apiName RemoveEntry
   * @apiGroup Entry
   * @apiVersion 0.0.1
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200
   *     {
   *       "success": true
   *     }
   */
  app.delete("/entries/:id", secure, routers["entry"].remove);
  /**
   * @api {post} /entries Create Entry
   * @apiName CreateEntry
   * @apiGroup Entry
   * @apiVersion 0.0.1
   *
   * @apiParam {String} topic_id topic id
   * @apiParam {String} text text
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200
   *     {
   *       "success": true,
   *       "data": {
   *         "id": ""
   *       }
   *     }
   */
  app.post("/entries", secure, giffMe("body", ["topic_id", "text"]), routers["entry"].create);
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
   *         "id": "",
   *         "text": "",
   *         "upvotes_count": 0...n,
   *         "downvotes_count": 0...n,
   *         "created_at": "",
   *         "updated_at": "",
   *         "user": {
   *           "id": "",
   *           "username": "",
   *           "slug": ""
   *         },
   *         "topic": {
   *           "id": "",
   *           "title": "",
   *           "slug": "",
   *           "created_at": "",
   *           "updated_at": ""
   *         }
   *       }
   *     }
   */
  app.get("/entries/:id", routers["entry"].fetch);
};