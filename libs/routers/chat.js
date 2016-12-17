module.exports = function (app) {
  /**
   * @api {Post} /chats Create Chat
   * @apiName Create
   * @apiGroup Chat
   * @apiVersion 0.0.1
   *
   * @apiParam {Array} users user slug list
   *
   * @apiErrorExample {json} Error-Response:
   *     HTTP/1.1 200
   *     {
   *       "success": false,
   *       "message": "kavuşamazsınız"
   *     }
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200
   *     {
   *       "success": true,
   *       "data": {
   *         chat: ""
   *       }
   *     }
   */
  app.post("/chats", giffMe("body", ["users"]), secure, routers["chats"].create);
};