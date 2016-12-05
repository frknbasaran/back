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
  app.delete("/entries/:id", routers["entry"].remove);
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
   *         "entry_id": ""
   *       }
   *     }
   */
  app.post("/entries", giffMe("body", ["topic_id", "text"]), routers["entry"].create);
};