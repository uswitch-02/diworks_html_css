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

var color =["赤","白","黒"];
document.write(color[0]);
document.write(color[1]);
document.write(color[2]);

var color =["No1","No2","No3"];
delete color[0];
document.write(color);

var pre1 =["東京","神奈川","埼玉"];
pre1[3]="千葉";
document.write(pre1);

var pre2 = ["東京","神奈川","埼玉"];
delete pre2[0]; pre2[0]="千葉";
document.write(pre2);

var month = ["1月","2月","3月"];
month[2]="誕生日";
document.write(month);
document.write(month[2]);

var myoji = {"A組":"田中","B組":"高橋","C組":"斎藤"};
document.write(myoji["A組"]);

var number = {"１番":"佐藤","2番":"山田","３番":"斎藤"};
document.write(number["1番"]);

var i = 1;
while(i <= 20){
  document.write(i);
  i++;
  document.write("<br>");
}

var a = 10;
while (a <= 30){
  document.write(a+"<br>");
  a++;
}

var b = 20;
while(b >= 10){
  document.write(b+"<br>");
  b--;
}

var c = 1;
while(c <= 10){
  document.write(c+"<br>");
  c += 2;
}

var d =30;
while(d > 5){
  document.write(d+"<br>");
  d-=3;
}

var name = 1;
while (name < 5){
  document.write("Tanaka"+"<br>");
  name++;
}

var abc = 1;
while(abc <= 10){
  if(abc % 2 == 0){
    document.write(abc+"<br>");}
    abc++;
  }

var def = 30;
while(def >= 1){
if(def % 3 == 0){
  document.write(def+"<br>");
  }
def--;
}

for(var i= 1; i<= 10; i++){
  if(i%2 == 0){
    document.write(i);
  }
}

for(var a = 3; a<= 8; a++){
  if(a>5){
    document.write(a);document.write("<br>");
  }
}

for (var b =1; b <= 9; b++){
  for(var c = 1; c <= 9; c++){
    document.write(b*c);
  }
  document.write("→"+b+"の段<br>");
}

for(var star1 =1; star1 <= 5; star1++){
  for(var star2 =1; star2 <= 5; star2++){
    document.write("★");
  }
  document.write("<br>");
}

for(var month=1; month <= 12; month++){
  document.write(month + "月:");
  for(var day =1; day<= 30;day++){
    document.write(day + "日/");
  }
  document.write("<br><br>");
}

for (var num=10; num >0; num--){
  if(num==0){
    document.write("終了！"+"<br>");}
    else{
      document.write(num + "<br>");
    }
  }

