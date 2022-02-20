/*
[rewrite_local]
# PDF Expert 7 解锁内购年订阅
https:\/\/license\.pdfexpert\.com\/api\/1.0\/pdfexpert6\/subscription\/(check|refresh) url script-response-body https://raw.githubusercontent.com/Asaqe/rule_for_quantumultX/master/js/backup/pdfexpert.js
[mitm]
hostname = license.pdfexpert.com,
*/


let obj = JSON.parse($response.body);

obj = {
  "isEligibleForIntroPeriod":true,
  "originalTransactionId":"730000355000000",
  "subscriptionExpirationDate":"01:01 01/01/2020",
  "subscriptionState":"active",
  "subscriptionReceiptId":"1559207500000",
  "isPDFExpert6User":true,
  "subscriptionAutoRenewStatus":"autoRenewOff",
  "isInGracePeriod":true
};

$done({body: JSON.stringify(obj)});
