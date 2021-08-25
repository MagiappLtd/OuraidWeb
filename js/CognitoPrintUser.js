// ユーザープールの設定
const poolData = {	
       UserPoolId: 'ap-northeast-1_WwnLoFfMf', // Your user pool id here
        ClientId: '19jusin3gl62f049g3iukarni5' // Your client id here
};
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
const cognitoUser = userPool.getCurrentUser();  // 現在のユーザー

var currentUserData = {};  // ユーザーの属性情報

/**
 * 画面読み込み時の処理
 */
$(document).ready(function() {

 // Amazon Cognito 認証情報プロバイダーを初期化します
AWS.config.region = 'ap-northeast-1'; // リージョン
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ap-northeast-1:25aed12b-aa11-4c53-81c4-97c0b21d7daa',
});

		    
    // 現在のユーザーの属性情報を取得・表示
    getUserAttribute();
});

/**
 * 現在のユーザーの属性情報を取得・表示する
 */
var getUserAttribute = function(){
	
    // 現在のユーザー情報が取得できているか？
    if (cognitoUser != null) {
        cognitoUser.getSession(function(err, session) {
            if (err) {
                console.log(err);
                $(location).attr("href", "index.html");
            } else {
                // ユーザの属性を取得
                cognitoUser.getUserAttributes(function(err, result) {
                    if (err) {
                        $(location).attr("href", "index.html");
                    }
                    
                    // 取得した属性情報を連想配列に格納
                    for (i = 0; i < result.length; i++) {
                        currentUserData[result[i].getName()] = result[i].getValue();
                    }
                    $("div#menu h1").text("ようこそ！" + currentUserData["name"] + "さん");
                });
            }
        });
    } else {
        $(location).attr("href", "index.html");
    }
};