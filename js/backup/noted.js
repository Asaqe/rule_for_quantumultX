/*
[rewrite_local]
^https:\/\/subscription-api\.notedapp\.io\/api\/verifyReceipt url script-response-body https://raw.githubusercontent.com/Asaqe/rule_for_quantumultX/master/js/backup/noted.js
[mitm]
hostname= subscription-api.notedapp.io
*/
var obj = {
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1149425482,
    "app_item_id": 1149425482,
    "bundle_id": "com.digitalworkroom.noted",
    "application_version": "480",
    "download_id": 501333573438869250,
    "version_external_identifier": 847529357,
    "receipt_creation_date": "2022-04-21 07:04:29 Etc/GMT",
    "receipt_creation_date_ms": "1650524669000",
    "receipt_creation_date_pst": "2022-04-21 00:04:29 America/Los_Angeles",
    "request_date": "2022-04-21 07:04:32 Etc/GMT",
    "request_date_ms": "1650524672895",
    "request_date_pst": "2022-04-21 00:04:32 America/Los_Angeles",
    "original_purchase_date": "2022-04-21 05:50:53 Etc/GMT",
    "original_purchase_date_ms": "1650520253000",
    "original_purchase_date_pst": "2022-04-20 22:50:53 America/Los_Angeles",
    "original_application_version": "480",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.digitalworkroom.noted.plus.year",
      "transaction_id": "220001221969591",
      "original_transaction_id": "220001221969591",
      "purchase_date": "2022-04-21 07:04:28 Etc/GMT",
      "purchase_date_ms": "1650524668000",
      "purchase_date_pst": "2022-04-21 00:04:28 America/Los_Angeles",
      "original_purchase_date": "2022-04-21 07:04:29 Etc/GMT",
      "original_purchase_date_ms": "1650524669000",
      "original_purchase_date_pst": "2022-04-21 00:04:29 America/Los_Angeles",
      "expires_date": "2099-12-24 07:04:28 Etc/GMT",
      "expires_date_ms": "3800000000000",
      "expires_date_pst": "2099-12-24 00:04:28 America/Los_Angeles",
      "web_order_line_item_id": "220000536094382",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false",
      "in_app_ownership_type": "PURCHASED"
    }]
  },
  "latest_receipt_info": {
    "quantity": "1",
    "product_id": "com.digitalworkroom.noted.plus.year",
    "transaction_id": "220001221969591",
    "original_transaction_id": "220001221969591",
    "purchase_date": "2022-04-21 07:04:28 Etc/GMT",
    "purchase_date_ms": "1650524668000",
    "purchase_date_pst": "2022-04-21 00:04:28 America/Los_Angeles",
    "original_purchase_date": "2022-04-21 07:04:29 Etc/GMT",
    "original_purchase_date_ms": "1650524669000",
    "original_purchase_date_pst": "2022-04-21 00:04:29 America/Los_Angeles",
    "expires_date": "2099-12-24 07:04:28 Etc/GMT",
    "expires_date_ms": "3800000000000",
    "expires_date_pst": "2099-12-24 00:04:28 America/Los_Angeles",
    "web_order_line_item_id": "220000536094382",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "in_app_ownership_type": "PURCHASED",
    "subscription_group_identifier": "20421642",
    "expires_date_formatted": "2099-12-24 07:04:28 Etc/GMT"
  },
  "latest_receipt": "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",
  "pending_renewal_info": {
    "auto_renew_product_id": "com.digitalworkroom.noted.plus.year",
    "product_id": "com.digitalworkroom.noted.plus.year",
    "original_transaction_id": "220001221969591",
    "auto_renew_status": "1",
    "is_in_billing_retry_period": false
  },
  "status": 0,
  "hasFreeTrial": true,
  "valid": true
}
$done({body: JSON.stringify(obj)});