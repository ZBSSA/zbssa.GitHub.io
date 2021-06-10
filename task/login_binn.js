/**
 * @fileoverview Example to compose HTTP request
 * and handle the response.
 *
 */

const url = "http://1.1.1.3/ac_portal/login.php";
const method = "POST";
const headers = {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"};
const data = "opr=pwdLogin&userName=pancaofeng&pwd=e3d0d6686daa&auth_tag=1622786601428&rememberPwd=1";

const myRequest = {
    url: url,
    method: method, // Optional, default GET.
    headers: headers, // Optional.
    body: data// Optional.
};

$task.fetch(myRequest).then(response => {
    // response.statusCode, response.headers, response.body
    console.log(response.body);
    $notify("Title", "Subtitle", response.body); // Success!
    $done();
}, reason => {
    // reason.error
    $notify("Title", "Subtitle", reason.error); // Error!
    $done();
});
