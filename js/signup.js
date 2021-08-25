(() => {
  // ユーザープールの設定
  const poolData = {
        UserPoolId: 'ap-northeast-1_5tA85AbZd', // Your user pool id here
        ClientId: '6d47bd9cp0d7tj03gvonvt0d7' // Your client id here
  };
  const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

  const attributeList = [];

  // Amazon Cognito 認証情報プロバイダーを初期化します
AWS.config.region = 'ap-northeast-1'; // リージョン
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'ap-northeast-1:ef9895ab-2704-4c5e-aac7-868f821f54fc',
});



  // 「Create Account」ボタン押下時
  const createAccountBtn = document.getElementById("createAccount");
  createAccountBtn.addEventListener("click", () => {
    /**
     * サインアップ処理。
     */
    const username = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const password = document.getElementById('password').value;

    // 何か1つでも未入力の項目がある場合、処理終了
    const message = document.getElementById("message-span");
    if (!username | !name | !password) {
      message.innerHTML = "未入力項目があります。";
      return false;
    }

    // ユーザ属性リストの生成
    const dataName = {
      Name: "name",
      Value: name
    };
    const dataRole = {
      Name: "custom:role",
      Value: "5"
    };
    const attributeName = new AmazonCognitoIdentity.CognitoUserAttribute(
      dataName
    );
    const attributeRole = new AmazonCognitoIdentity.CognitoUserAttribute(
      dataRole
    );

    attributeList.push(attributeName);
    attributeList.push(attributeRole);

    // サインアップ処理
    userPool.signUp(username, password, attributeList, null, (err, result) => {
      if (err) {
        message.innerHTML = err.message;
        return;
      } else {
        // サインアップ成功の場合、アクティベーション画面に遷移する
        alert(
          "登録したメールアドレスへアクティベーション用のリンクを送付しました。"
        );
        location.href = "signin.html";
      }
    });
  });
})();
