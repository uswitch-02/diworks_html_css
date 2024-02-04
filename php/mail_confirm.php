<!doctype HTML>
<html lang = "ja">

  <head>
    <meta charset="utf-8">
    <title>お問い合わせフォームを作る</title>
    <link rel="stylesheet" type="text/css" href="style2.css">
  </head>

  <body>
    <h1>お問い合わせ内容確認</h1>

    <div class="confirm">
      <p>
        お問い合わせ内容はこちらで　宜しいでしょうか？<br>
        よろしければ「送信する」ボタンを押してください。
      </p>
      <p>
        名前<br>
        <!--index.htmlから引き渡された「name」という箱を表示するという意味-->
        <? php echo $_post['name']; ?>
      </p>

      <p>
        メールアドレス<br>
        <!--index.htmlから引き渡された「mail」という箱を表示するという意味-->
        <? php echo $_post['mail']; ?>
      </p>

      <p>

      </p>
    </div>
  </body>

</html>




