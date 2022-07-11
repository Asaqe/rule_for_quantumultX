/*
^https:\/\/api.revenuecat.com\/v1\/subscribers\/ url script-response-body https://raw.githubusercontent.com/Asaqe/rule_for_quantumultX/master/js/backup/revenuecat.js
*/
let obj=JSON.parse($response.body);
let url=$request.url;

if(url.endsWith("offerings")||url.endsWith("products")) {
	$done({});
} else {
	// Noto笔记Lifetime
	if (url.indexOf("8DA3F946-C754-411E-8928-C9D1DAEC1CD1")!=-1) {
		var obj = {"request_date": "2020-06-05T11:54:41Z",
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
                                             }
                                          }
	}
	// Airmail Premium
	if (url.indexOf("5647911E-B243-48C9-A25C-29116412A20D")!=-1) {
		obj["subscriber"]["entitlements"]={
			"Airmail Premium": {
				"expires_date": "2099-12-01T00:00:00Z",
				"product_identifier": "Airmail_iOS_Yearly",
				"purchase_date": "2019-12-01T00:00:00Z"
			}
		};
		obj["subscriber"]["subscriptions"]={
			"Airmail_iOS_Yearly": {
				"is_sandbox": false,
				"period_type": "active",
				"billing_issues_detected_at": null,
				"unsubscribe_detected_at": null,
				"expires_date": "2099-12-01T00:00:00Z",
				"original_purchase_date": "2019-10-31T00:00:00Z",
				"purchase_date": "2019-10-31T00:00:00Z",
				"store": "app_store"
			}
		};
	}
	else{    
		obj ={"request_date_ms" : 1644807425219,
                      "request_date" : "2022-02-14T02:57:05Z",
                      "subscriber" : {
                      "non_subscriptions" : {
                      "filebox_pro" : [
                       {
                        "id" : "35cd5ede42",
                        "is_sandbox" : false,
                        "purchase_date" : "2022-02-13T10:28:11Z",
                        "original_purchase_date" : "2022-02-13T10:28:11Z",
                        "store" : "app_store"
                         }
                           ]
                             },
                         "first_seen" : "2022-02-13T10:30:14Z",
                         "original_application_version" : "100",
                         "other_purchases" : {
                         "filebox_pro" : {
                         "purchase_date" : "2022-02-13T10:28:11Z"
                                                               }
                                                                 },
                                "management_url" : null,
                                "subscriptions" : {

                                                        },
                                    "entitlements" : {
                                    "filebox_pro" : {
                                     "grace_period_expires_date" : null,
                                      "purchase_date" : "2022-02-13T10:28:11Z",
                                       "product_identifier" : "filebox_pro",
                                        "expires_date" : null
                                                                }
                                                                   },
                                    "original_purchase_date" : "2022-02-02T22:54:45Z",
                                    "original_app_user_id" : "$RCAnonymousID:0ab3738daba94750bcd43d1c99adcf39",
                                    "last_seen" : "2022-02-13T10:30:14Z"
                                                            }
                                                               };
	    }
}

$done({body:JSON.stringify(obj)});
