/*
[rewrite_local]
https://www.instapaper.com/api/subscription_status url script-response-body https://raw.githubusercontent.com/Asaqe/rule_for_quantumultX/master/js/backup/instapaper.js
[mimt]
hostname=www.instapaper.com
*/
body = $response.body.replace(/.+/,"ipsubnow=1585578158&ipsubexp=4079167311&ipsub=1");$done({body});
