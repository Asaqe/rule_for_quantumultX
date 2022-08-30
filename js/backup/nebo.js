/*
[rewrite_local]
# Myscript Nebo Unlocks （by LTribe）
^https?:\/\/.*\.nebo\.app\/api\/.*\/inapppurchase\/apple\/receipt url script-response-body https://raw.githubusercontent.com/Asaqe/rule_for_quantumultX/master/js/backup/nebo.js
[mitm]
hostname = *.nebo.app,
*/

let obj = JSON.parse($response.body);
obj = {
  "originalApplicationVersion": "3.4.0.11563",
  "dateReceiptCreation": 1645854384000,
  "inapps": [],
  "bundleIdentifier": "com.myscript.nebo",
  "bundleVersion": "3.4.0.11563"
};

$done({body: JSON.stringify(obj)});
