/*
[rewrite_local]
# Myscript Nebo Unlocks （by LTribe）
^https?:\/\/.*\.nebo\.app\/api\/.*\/inapppurchase\/apple\/receipt url script-response-body https://raw.githubusercontent.com/Asaqe/rule_for_quantumultX/master/js/backup/nebo.js
[mitm]
hostname = *.nebo.app,
*/

let obj = JSON.parse($response.body);
obj = {
  "originalApplicationVersion": "2.2.4.2936",
  "dateReceiptCreation": 1582695984000,
  "inapps": [],
  "bundleIdentifier": "com.myscript.nebo",
  "bundleVersion": "2.5.0.5032"
};

$done({body: JSON.stringify(obj)});
