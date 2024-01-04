// document.write("Hello World");
// document.write("私の名前は田中です。");
// document.write("年齢は25歳です。");
// document.write("あいうえお<br>");
// document.write("かきくけこ<br>");
// document.write("さしすせそ<br>");
// document.write("月曜日<br>火曜日<br>水曜日")
// document.write("<h1>あいうえお</h1>");document.write("<p>かきくけこ</p>");document.write("さしすせそ");
// alert("別のページに移動します。");
// confirm("別のページに移動してもいいですか？");
// alert("このページを離れようとしています");
// confirm("ログアウトしますか？")
// function fruitsPrice(apple , orange){

// }return (apple*80)+(orange+60);
// document.write(fruitsPrice(3,5)+"円"+"<br>");
// document.write(fruitsPrice(6,8)+"円"+"<br>");

function fruitsPrice(apple, orange) {
  var totalPrice = (apple * 80) + (orange * 60);
  document.write(totalPrice + "円" + "<br>");
}

fruitsPrice(3, 5);
fruitsPrice(6, 8);


function nameHello(name){
  return name + "さん。こんにちは";
}

document.write(nameHello("高橋"));
document.write("<br>");document.write(nameHello("鈴木"));document.write("<br>");

function juusho(abc){
  return abc + "出身の方";
}

document.write(juusho("東京"));
document.write("<br>");
document.write(juusho("神奈川"));
document.write("<br>");
document.write(juusho("大阪"));
document.write("<br>");

function test(num){
  return"あなたの点数は"+num+"点です。";
}

document.write(test(90));document.write("<br>");
document.write(test(88));document.write("<br>");
document.write(test(79));document.write("<br>");

function oshirase(num){
  return"会員Noは"+num+"です。";
}

document.write(oshirase(1022));document.write("<br>");
document.write(oshirase(1199));document.write("<br>");
document.write(oshirase(2047));document.write("<br>");

var myoji=["田中","高橋","斎藤"];
myoji.unshift("鈴木");
document.write(myoji);

var abc =["高知","愛媛","香川"];
abc.unshift("徳島");
document.write(abc)

var xyz1 = ["名前","住所","電話番号"];
xyz1.push("アドレス");
document.write(xyz1);

var rech = ["good","bad","nice"];
rech.push("lucky");
document.write(rech);

var xyz2 =["名前","住所","電話番号"];
xyz2.pop();
document.write(xyz2);

var def=["関東","東北","九州","四国"];
def.pop();
document.write(def);

var myoji = ["田中","高橋","斎藤"];
document.write(myoji.slice(0,2));

var age = [18,26,33,41,50];document.write(age.slice(1,4));

var myoji = ["高木","田中","山本"];
document.write(myoji);

var color = ["赤","白","黒"];
document.write(color);
