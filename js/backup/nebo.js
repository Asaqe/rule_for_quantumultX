/*
[rewrite_local]
# Myscript Nebo Unlocks （by LTribe）
^https?:\/\/.*\.nebo\.app\/api\/.*\/inapppurchase\/apple\/receipt url script-response-body https://raw.githubusercontent.com/Asaqe/rule_for_quantumultX/master/js/backup/nebo.js
[mitm]
hostname = *.nebo.app,
*/

let obj = JSON.parse($response.body);
obj = {
  "bundleIdentifier":"com.myscript.nebo",
  "bundleVersion":"3.4.0.11563",
  "originalApplicationVersion":"2.8.2.8168",
  "dateReceiptCreation":1661870767000,
  "inapps":[]
};

$done({body: JSON.stringify(obj)});
