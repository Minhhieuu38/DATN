
//Username 
const emptyUsername = {
    username: '',
    password: 'hue@123'
}
const errorUsername1 = {
    username: '1',
    password: 'hue@123'
}
const errorUsername2 = {
    username: 'huehue1234',
    password: 'hue@123'
}
const errorUsername3 = {
    username: 'Nếu người dùng nhập tài khoản hoặc mật khẩu, thông báo "Please enter a correct username and password',
    password: 'hue@123'
}
const errorUsername4 = {
    username: 'Nếu người dùng nhập tài khoản hoặc mật khẩu, thông báo "Please enter a correct username and password"',
    password: 'hue@123'
}

//Password
const emptyPassword = {
    username: 'hue',
    password: ''
}

const errorPassword1 = {
    username: 'hue',
    password: 'h'
}

const errorPassword2 = {
    username: 'hue',
    password: 'Hue@1'
}
const errorPassword3 = {
    username: 'hue',
    password: 'Hue@1234'
}
 exports.emptyUsername = emptyUsername;
 exports.emptyPassword = emptyPassword;
 exports.errorUsername1 = errorUsername1;
 exports.errorUsername2 = errorUsername2;
 exports.errorUsername3 = errorUsername3;
 exports.errorUsername4 = errorUsername4;
 exports.errorPassword1 = errorPassword1;
 exports.errorPassword2 = errorPassword2;
 exports.errorPassword3 = errorPassword3;
 

