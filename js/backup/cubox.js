/*
[rewrite_local]

^https:\/\/cubox.pro\/c\/api\/userInfo url script-response-body https://raw.githubusercontent.com/Asaqe/rule_for_quantumultX/master/js/backup/cubox.js

mitm = cubox.pro
/*

var body = $response.body;
var obj = JSON.parse(body);
obj.data.payTime = "2021-01-01T08:00:00+08:00";
obj.data.isExpire = false;
obj.data.expireTime = "2099-01-01T08:00:00+08:00";
$done({body: JSON.stringify(obj)});
