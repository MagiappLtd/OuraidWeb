function OnCognitoSignUp() {

    var poolData = {
        UserPoolId: 'ap-northeast-1_5tA85AbZd', // Your user pool id here
        ClientId: '6d47bd9cp0d7tj03gvonvt0d7', // Your client id here
    };
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    var nickname = document.getElementById("nickname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    userPool.signUp(nickname,email, password, null, null, function(
        err,
        result
    ) {
        if (err) {
            alert(err.message || JSON.stringify(err));
            return;
        }
        var cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
    });
}
