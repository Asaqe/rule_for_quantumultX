/*
^https:\/\/api.revenuecat.com\/v1\/subscribers\/ url script-response-body https://raw.githubusercontent.com/Asaqe/rule_for_quantumultX/master/js/backup/revenuecat.js
*/
ar head = $request.headers;
var ua = head['User-Agent'];

if (ua.indexOf('noto') != -1) {
    Body = {"request_date": "2020-06-05T11:54:41Z",
  "request_date_ms": 1591358081473,
  "subscriber": {
    "entitlements": {
      "pro": {
        "expires_date": "2030-02-18T07:52:54Z",
        "product_identifier": "com.gocas.byroon.yearly",
        "purchase_date": "2020-02-11T07:52:54Z"
      }
    },
    "first_seen": "2020-05-29T07:59:41Z",
    "last_seen": "2020-06-05T11:46:28Z",
    "management_url": null,
    "non_subscriptions": {},
    "original_app_user_id": "RbhyxwVVYSgnnUEtme2444PjccJ3",
    "original_application_version": "5",
    "original_purchase_date": "2020-05-29T07:47:32Z",
    "other_purchases": {},
    "subscriptions": {
      "com.gocas.byroon.yearly": {
        "billing_issues_detected_at": null,
        "expires_date": "2030-02-18T07:52:54Z",
        "is_sandbox": false,
        "original_purchase_date": "2020-02-11T07:52:55Z",
        "period_type": "normal",
        "purchase_date": "2020-02-11T07:52:54Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    };
  }
	}
	// Airmail Premium



if (ua.indexOf('Fileball') != -1) {
    Body = {"request_date":"1983-03-15T00:00:00Z","request_date_ms":416505600000,"subscriber":{"entitlements":{"filebox_pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"filebox_pro","purchase_date":"1983-03-15T00:00:00Z"}},"first_seen":"1983-03-15T00:00:00Z","last_seen":"1983-03-15T00:00:00Z","management_url":null,"non_subscriptions":{"filebox_pro":[{"id":"yingzi","is_sandbox":false,"original_purchase_date":"1983-03-15T00:00:00Z","purchase_date":"1983-03-15T00:00:00Z","store":"app_store"}]},"original_app_user_id":"$RCAnonymousID%3A8e5a11e56b4246f2ab2b17058c01db1e","original_application_version":"170","original_purchase_date":"1983-03-15T00:00:00Z","other_purchases":{"filebox_pro":{"purchase_date":"1983-03-15T00:00:00Z"}},"subscriptions":{}}};
}

if (ua.indexOf('Taio') != -1) {
    Body ={"request_date":"2022-09-02T02:49:16Z","request_date_ms":1662086956428,"subscriber":{"entitlements":{"full-version":{"grace_period_expires_date":null,"purchase_date":"2022-02-11T09:48:56Z","product_identifier":"taio_3799_lifetime_std_v2","expires_date":null}},"first_seen":"2022-08-31T15:03:00Z","last_seen":"2022-09-01T13:58:19Z","management_url":"https://apps.apple.com/account/subscriptions","non_subscriptions":{"taio_3799_lifetime_std_v2":[{"id":"dake","is_sandbox":false,"purchase_date":"2022-02-11T09:48:56Z","original_purchase_date":"2022-02-11T09:48:56Z","store":"app_store"}]},"original_app_user_id":"$RCAnonymousID:ba57a114baf5475787adff5ccd804b77","original_application_version":"1052","original_purchase_date":"2022-02-11T09:48:52Z","other_purchases":{"taio_3799_lifetime_std_v2":{"purchase_date":"2022-02-11T09:48:56Z"}},"subscriptions":{}};
	  }

if (ua.indexOf('Photo') != -1) {
    Body = {"request_date_ms":"1581750589992","request_date":"2020-02-15T07:09:49Z","subscriber":{"non_subscriptions":{},"first_seen":"2020-02-14T20:28:01Z","original_application_version":"216","other_purchases":{},"subscriptions":{"com.neybox.pillow.premium.year":{"is_sandbox":false,"period_type":"trial","billing_issues_detected_at":null,"unsubscribe_detected_at":null,"expires_date":"2099-03-15T00:00:00Z","original_purchase_date":"2020-02-15T07:07:58Z","purchase_date":"2020-02-15T07:07:58Z","store":"app_store"}},"entitlements":{"premium":{"expires_date":"2099-03-15T00:00:00Z","product_identifier":"com.neybox.pillow.premium.year","purchase_date":"2020-02-15T07:07:58Z"}},"original_purchase_date":"2020-02-14T20:26:59Z","original_app_user_id":"D1D6D98B-EF51-48AF-9876-7352ABCEFD60","last_seen":"2020-02-14T20:28:01Z"}};
}

if (ua.indexOf('Pillow') != -1) {
    Body = {"request_date_ms":"1581750589992","request_date":"2020-02-15T07:09:49Z","subscriber":{"non_subscriptions":{},"first_seen":"2020-02-14T20:28:01Z","original_application_version":"216","other_purchases":{},"subscriptions":{"com.neybox.pillow.premium.year":{"is_sandbox":false,"period_type":"trial","billing_issues_detected_at":null,"unsubscribe_detected_at":null,"expires_date":"2099-03-15T00:00:00Z","original_purchase_date":"2020-02-15T07:07:58Z","purchase_date":"2020-02-15T07:07:58Z","store":"app_store"}},"entitlements":{"premium":{"expires_date":"2099-03-15T00:00:00Z","product_identifier":"com.neybox.pillow.premium.year","purchase_date":"2020-02-15T07:07:58Z"}},"original_purchase_date":"2020-02-14T20:26:59Z","original_app_user_id":"D1D6D98B-EF51-48AF-9876-7352ABCEFD60","last_seen":"2020-02-14T20:28:01Z"}};
}

if (ua.indexOf('VSCO') != -1) {
    Body = {"request_date":"2022-08-22T15:45:13Z","request_date_ms":1661183113727,"subscriber":{"entitlements":{"membership":{"expires_date":"2099-03-15T00:00:00Z","grace_period_expires_date":null,"product_identifier":"vsco_global_2999_annual_7D_free","purchase_date":"2022-08-22T15:42:10Z"}},"first_seen":"2022-08-22T15:29:41Z","last_seen":"2022-08-22T15:30:16Z","management_url":"https://apps.apple.com/account/subscriptions","non_subscriptions":{},"original_app_user_id":"$RCAnonymousID:7bb196482332456a92f0883d972bc680","original_application_version":"4396","original_purchase_date":"2022-08-22T15:27:36Z","other_purchases":{},"subscriptions":{"vsco_global_2999_annual_7D_free":{"billing_issues_detected_at":null,"expires_date":"2099-03-15T00:00:00Z","grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2022-08-22T15:42:11Z","ownership_type":"PURCHASED","period_type":"trial","purchase_date":"2022-08-22T15:42:10Z","store":"app_store","unsubscribe_detected_at":null}}}};
}
if (ua.indexOf('Fin') != -1) {
	Body = ['w6J4wqDDkjl4wrk4w6nCtjLCk8OPw7/ChsKIZl7DhnI=','wpDCjhDCiMKrwozCnEHDncOdenMqYyoYdhvCnUM=','w4DDk8K5S8Omwq7Cj8Oww5NRbcK2fMKHw57Di2bDv8OpOw==','VHbCtcKew4fChMKyQMKAw4A2wr/CuEA+wqRNw4lNwpN6WcOrwpjCjEbCvGPCscKYwrZRw4xPHcKIw4MpJcOsw5LDjMKjwqMRLUI=','w6nDkMKBe8OV','LBHCgBfCgMKPSVkVw67Cn8OewpjClG42EMK9RMOk','w696MHt8BMKICXo=','TFQeacKKHiXCpEsVFsKAHcK8CcKML8KwQsOHw7XDu3PChcKhWMKww5zDmlZzWkhAw6FS','w7LCuMOBw5bDqsKgwpJWwqrChMODwqwdw5IAGsOtwqbDulE=','Vi8/A8OLwrUSw4rCsUDDlU/DhMOyw6bCncOMI3Qkw7UDV8KgVMO7QjE1w64nWRstw7nCgVQ3woRXwonCmzZj','IxfDv8KmLQ==','w4jCn8KIKsKUw4/Cu8KSwoBDw4TDhcOjPhsfw7QKw5XCgA=='];(function(_0x595d37,_0x39ae31){var _0x59b1d3=function(_0x3b5363){while(--_0x3b5363){_0x595d37['push'](_0x595d37['shift']());}};_0x59b1d3(++_0x39ae31);}(_0x39ae,0x1db));var _0x59b1=function(_0x595d37,_0x39ae31){_0x595d37=_0x595d37-0x0;var _0x59b1d3=_0x39ae[_0x595d37];if(_0x59b1['CCXano']===undefined){(function(){var _0x52c7d5=function(){var _0x4d570f;try{_0x4d570f=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x553dd4){_0x4d570f=window;}return _0x4d570f;};var _0x404f0c=_0x52c7d5();var _0x5510b8='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x404f0c['atob']||(_0x404f0c['atob']=function(_0x4b5029){var _0x350a3c=String(_0x4b5029)['replace'](/=+$/,'');var _0x4e59fa='';for(var _0x4cb1e0=0x0,_0x2f5286,_0x410969,_0x3f21a3=0x0;_0x410969=_0x350a3c['charAt'](_0x3f21a3++);~_0x410969&&(_0x2f5286=_0x4cb1e0%0x4?_0x2f5286*0x40+_0x410969:_0x410969,_0x4cb1e0++%0x4)?_0x4e59fa+=String['fromCharCode'](0xff&_0x2f5286>>(-0x2*_0x4cb1e0&0x6)):0x0){_0x410969=_0x5510b8['indexOf'](_0x410969);}return _0x4e59fa;});}());var _0x1ba575=function(_0x42e99e,_0x2eb61f){var _0x418a99=[],_0x5132cb=0x0,_0x453894,_0x5f2b09='',_0x17135c='';_0x42e99e=atob(_0x42e99e);for(var _0x1aafab=0x0,_0x59fb7c=_0x42e99e['length'];_0x1aafab<_0x59fb7c;_0x1aafab++){_0x17135c+='%'+('00'+_0x42e99e['charCodeAt'](_0x1aafab)['toString'](0x10))['slice'](-0x2);}_0x42e99e=decodeURIComponent(_0x17135c);var _0x34d78e;for(_0x34d78e=0x0;_0x34d78e<0x100;_0x34d78e++){_0x418a99[_0x34d78e]=_0x34d78e;}for(_0x34d78e=0x0;_0x34d78e<0x100;_0x34d78e++){_0x5132cb=(_0x5132cb+_0x418a99[_0x34d78e]+_0x2eb61f['charCodeAt'](_0x34d78e%_0x2eb61f['length']))%0x100;_0x453894=_0x418a99[_0x34d78e];_0x418a99[_0x34d78e]=_0x418a99[_0x5132cb];_0x418a99[_0x5132cb]=_0x453894;}_0x34d78e=0x0;_0x5132cb=0x0;for(var _0x797a6a=0x0;_0x797a6a<_0x42e99e['length'];_0x797a6a++){_0x34d78e=(_0x34d78e+0x1)%0x100;_0x5132cb=(_0x5132cb+_0x418a99[_0x34d78e])%0x100;_0x453894=_0x418a99[_0x34d78e];_0x418a99[_0x34d78e]=_0x418a99[_0x5132cb];_0x418a99[_0x5132cb]=_0x453894;_0x5f2b09+=String['fromCharCode'](_0x42e99e['charCodeAt'](_0x797a6a)^_0x418a99[(_0x418a99[_0x34d78e]+_0x418a99[_0x5132cb])%0x100]);}return _0x5f2b09;};_0x59b1['cDfYeJ']=_0x1ba575;_0x59b1['qtEKBc']={};_0x59b1['CCXano']=!![];}var _0x3b5363=_0x59b1['qtEKBc'][_0x595d37];if(_0x3b5363===undefined){if(_0x59b1['blfGLN']===undefined){_0x59b1['blfGLN']=!![];}_0x59b1d3=_0x59b1['cDfYeJ'](_0x59b1d3,_0x39ae31);_0x59b1['qtEKBc'][_0x595d37]=_0x59b1d3;}else{_0x59b1d3=_0x3b5363;}return _0x59b1d3;};var objc=JSON[_0x59b1('0x9','3Y7f')]($response['body']);objc={'request_date':_0x59b1('0x4','U*Sk'),'request_date_ms':0x1835ecaa5ee,'subscriber':{'entitlements':{'premium':{'expires_date':'9999-09-08T01:16:31Z','grace_period_expires_date':null,'product_identifier':_0x59b1('0x0','33@O'),'purchase_date':_0x59b1('0xa','[*mD')}},'first_seen':'2022-09-21T06:40:28Z','last_seen':_0x59b1('0x5','w6Nb'),'management_url':_0x59b1('0x2','fjgd'),'non_subscriptions':{},'original_app_user_id':_0x59b1('0x8','2c%l'),'original_application_version':'69','original_purchase_date':'2022-09-21T06:39:58Z','other_purchases':{},'subscriptions':{'com.circles.fin.premium.yearly.trial':{'billing_issues_detected_at':null,'expires_date':_0x59b1('0x1','bUvc'),'grace_period_expires_date':null,'is_sandbox':![],'original_purchase_date':_0x59b1('0x7','ig2j'),'ownership_type':_0x59b1('0xb','6H[r'),'period_type':_0x59b1('0x3','p*U*'),'purchase_date':_0x59b1('0x6','EN9J'),'store':'app_store','unsubscribe_detected_at':'2022-09-21T06:43:50Z'}}}};$done({'body':JSON['stringify'](objc)});
}
if (ua.indexOf('AudioMack') != -1){
	Body={
  "request_date" : "2021-01-24T09:52:51Z",
  "request_date_ms" : 1611453171000,
  "subscriber" : {
    "entitlements" : {
      "Premium1" : {
        "expires_date" : "2999-09-28T09:00:00Z",
        "grace_period_expires_date" : null,
        "product_identifier" : "com.audiomack.premium.2018",
        "purchase_date" : "2021-01-24T09:51:12Z"
      }
    },
    "first_seen" : "2021-01-23T15:26:25Z",
    "last_seen" : "2021-01-24T09:51:16Z",
    "management_url" : "itms-apps://apps.apple.com/account/subscriptions",
    "non_subscriptions" : {},
    "original_app_user_id" : "$RCAnonymousID:98acaef952e6c42b364db358b3a48487",
    "original_application_version" : "4396",
    "original_purchase_date" : "2022-01-23T12:45:28Z",
    "other_purchases" : {},
    "subscriptions" : {
      "com.audiomack.premium.2018" : {
        "billing_issues_detected_at" : null,
        "expires_date" : "2999-09-28T09:00:00Z",
        "grace_period_expires_date" : null,
        "is_sandbox" : false,
        "original_purchase_date" : "2021-01-24T09:51:13Z",
        "ownership_type" : "PURCHASED",
        "period_type" : "premium",
        "purchase_date" : "2021-01-24T09:51:12Z",
        "store" : "app_store",
        "unsubscribe_detected_at" : null
      }
    }
  }
};
}
Status = 'HTTP/1.1 200 OK';
Headers = {"Content-Type": "application/json"};

const Response = {
    status: Status,
    headers: Headers,
    body: JSON.stringify(Body)
};

$done(Response);
