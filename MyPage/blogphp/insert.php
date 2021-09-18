<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Sign Up</title>
    <script src="../js/jsbn.js"></script>
    <script src="../js/jsbn2.js"></script>
    <script src="../js/sjcl.js"></script>
    <script src="../js/aws-sdk.min.js"></script>
    <script src="../js/aws-cognito-sdk.min.js"></script>
    <script src="../js/amazon-cognito-identity.min.js"></script>
  </head>
  <body>
    <div id="signup">
      <h1>Sign Up</h1>
      <div id="message"><span id="message-span" style="color: red;"></span></div>
      <form name="form-signup">
        <span style="display: inline-block; width: 150px;">User ID(Email)</span>
        <input type="text" id="email" placeholder="Email Address" />
        <br />
        <span style="display: inline-block; width: 150px;">Name</span>
        <input type="text" id="name" placeholder="Name" />
        <br />
        <span style="display: inline-block; width: 150px;">Password</span>
        <input type="password" id="password" placeholder="Password" />
        <br /><br />
        <input type="button" id="createAccount" value="Create Account" />
      </form>
    </div>
    <br />
    <a href="./Signin.html">Sign In!</a>
    <script src="../js/signup.js" defer></script>
  </body>
</html>
