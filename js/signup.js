function OnCognitoSignUp() {

    var poolData = {
        UserPoolId: 'ap-northeast-1_98efD1WTS', // Your user pool id here
        ClientId: '4tsvd1igc6qfkv5s0asbu4qsbv', // Your client id here
    };
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    var email = document.getElementById("email").value;
    var username = document.getElementById("UserName").value;
    var password = document.getElementById("password").value;

    userPool.signUp(email,username, password, null, null, function(
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
