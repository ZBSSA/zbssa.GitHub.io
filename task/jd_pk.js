/*

浜韩鍊糚K

娲诲姩鍦板潃锛氫含涓渁pp-鎼滅储 浜韩鍊糚K

娲诲姩鏃ユ湡锛�2021-05-07 鑷� 2021-05-31

鏇存柊鍦板潃锛歨ttps://raw.githubusercontent.com/monk-coder/dust/dust/normal/adolf_pk.js

============Quantumultx===============

[task_local]

#浜韩鍊糚K

15 8,13,18 17-31 5 * https://raw.githubusercontent.com/monk-coder/dust/dust/normal/adolf_pk.js, tag=浜韩鍊糚K,  enabled=true

================Loon==============

[Script]

cron "15 8,13,18 17-31 5 *" script-path=https://raw.githubusercontent.com/monk-coder/dust/dust/normal/adolf_pk.js,tag=浜韩鍊糚K

===============Surge=================

浜韩鍊糚K = type=cron,cronexp="15 8,13,18 17-31 5 *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/monk-coder/dust/dust/normal/adolf_pk.js

============灏忕伀绠�=========

浜韩鍊糚K = type=cron,script-path=https://raw.githubusercontent.com/monk-coder/dust/dust/normal/adolf_pk.js, cronexpr="15 8,13,18 17-31 5 *", timeout=3600, enable=true

*/

const $ = new Env("浜韩鍊糚K");

const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';

const not
