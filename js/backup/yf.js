/*
hostname=*.elfinbook.com

^https?://api.elfinbook.com/v4/user/detail url script-response-body https://raw.githubusercontent.com/Asaqe/rule_for_quantumultX/master/js/backup/yf.js
*/
var obj = JSON.parse($response.body);

obj.data.vip=1;
obj.data.expire_timestamp=4076390251;
obj.data.nickname="Asaqe";
obj.data.expire_time="2099.03.05";

$done({ body: JSON.stringify(obj) });