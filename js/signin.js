function OnCognitoAuthenticateUser() {

    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var authenticationData = {
        Username: username,
        Password: password,
    };

    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(
        authenticationData
    );
    var poolData = {
		UserPoolId: 'ap-northeast-1_98efD1WTS', // Your user pool id here
        ClientId: '4tsvd1igc6qfkv5s0asbu4qsbv', // Your client id here
    };
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
    var userData = {
        Username: username,
        Pool: userPool,
    };

    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function(result) {
            var idToken = result.getIdToken().getJwtToken();          // IDトークン
            var accessToken = result.getAccessToken().getJwtToken();  // アクセストークン
            var refreshToken = result.getRefreshToken().getToken();   // 更新トークン

            console.log("idToken : " + idToken);
            console.log("accessToken : " + accessToken);
            console.log("refreshToken : " + refreshToken);

            //POTENTIAL: Region needs to be set if not already set previously elsewhere.
            AWS.config.region = 'ap-northeast-1';

            AWS.config.credentials = new AWS.CognitoIdentityCredentials({
                IdentityPoolId: 'ap-northeast-1:fd8eaf57-29b9-4b20-9b4a-536f8ebe99ac', // your identity pool id here
                Logins: {
                    // Change the key below according to the specific region your user pool is in.
                    'cognito-idp.ap-northeast-1.amazonaws.com/ap-northeast-1_98efD1WTS': result
                        .getIdToken()
                        .getJwtToken(),
                },
            });

            //refreshes credentials using AWS.CognitoIdentity.getCredentialsForIdentity()
            AWS.config.credentials.refresh(error => {
                if (error) {
                    console.error(error);
                } else {
                    // Instantiate aws sdk service objects now that the credentials have been updated.
                    // example: var s3 = new AWS.S3();
                    console.log('ログイン成功！');
					window.location.href = '../index.html';
                }
            });
        },

        onFailure: function(err) {
            alert(err.message || JSON.stringify(err));
        },
    });
}
