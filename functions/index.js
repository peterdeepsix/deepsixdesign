const functions = require('firebase-functions');

const orderCreate = require('./orderCreate');
const skuList = require('./skuList');

exports = {
  orderCreate: functions.https.onRequest(orderCreate),
  skuList: functions.https.onRequest(skuList),
};
