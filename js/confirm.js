function OnCognitoConfirmRegistration() {

    var poolData = {
        UserPoolId: 'ap-northeast-1_5tA85AbZd', // Your user pool id here
        ClientId: '6d47bd9cp0d7tj03gvonvt0d7', // Your client id here
    };
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

    var username = document.getElementById("email").value;
    var code = document.getElementById("ConfirmCode").value;

    var userData = {
        Username: username,
        Pool: userPool,
    };

    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.confirmRegistration(code, true, function(err, result) {
        if (err) {
            alert(err.message || JSON.stringify(err));
            return;
        }
        console.log('call result: ' + result);
    });
}