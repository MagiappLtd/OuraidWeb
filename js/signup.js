// ユーザープールの設定
const poolData = {
    UserPoolId :'ap-northeast-1_5tA85AbZd',
    ClientId : '6d47bd9cp0d7tj03gvonvt0d7'
};
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

var attributeList = [];

/**
 * 画面読み込み時の処理
 */
$(document).ready(function() {
		
	// Amazon Cognito 認証情報プロバイダーの初期化
	AWS.config.region = 'ap-northeast-1'; // リージョン
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ap-northeast-1:ef9895ab-2704-4c5e-aac7-868f821f54fc',
});
		    
	// 「Create Account」ボタン押下時
	$("#createAccount").click(function(event) {
	    signUp();
	});
});

/**
 * サインアップ処理。
 */
var signUp = function() {
			
	var username = $("#email").val();
	var nickname = $("#nickname").val();
	var password = $("#password").val();
			
	// 何か1つでも未入力の項目がある場合、処理終了
    if (!username | !lastName | !firstName | !password) { 
    	return false; 
    }
		    
    // ユーザ属性リストの生成
	var dataFamilyName = {
		Name : "nickname",
		Value : nickname
	}
	var attributeFamilyName = new AmazonCognitoIdentity.CognitoUserAttribute(dataFamilyName);
			
    attributeList.push(attributeFamilyName);
			
    // サインアップ処理
    userPool.signUp(username, password, attributeList, null, function(err, result){
	    if (err) {
	    	alert(err);
			return;
	    } else {
	      	// サインアップ成功の場合、アクティベーション画面に遷移する
	    }
    });
}