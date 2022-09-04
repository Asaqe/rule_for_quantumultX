/*[mitm]
hostname = *.cloudfront.net
[rewrite_local]
^https:?\/\/.*\.cloudfront\.net\/api\/clients\/info url script-response-body https://pastebin.com/raw/RiwuNLpa
^https:?\/\/.*\.cloudfront\.net\/api\/purchases\/validate url script-response-body https://pastebin.com/raw/RiwuNLpa
*/
let obj = JSON.parse($response.body);
obj["expiration_time"] = 4101790766;
$done({body: JSON.stringify(obj)});
