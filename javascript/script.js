document.write("Hello World");
document.write("私の名前は田中です。");
document.write("年齢は25歳です。");
document.write("あいうえお<br>");
document.write("かきくけこ<br>");
document.write("さしすせそ<br>");
document.write("月曜日<br>火曜日<br>水曜日")
document.write("<h1>あいうえお</h1>");document.write("<p>かきくけこ</p>");document.write("さしすせそ");
alert("別のページに移動します。");
confirm("別のページに移動してもいいですか？");
alert("このページを離れようとしています");
confirm("ログアウトしますか？")
function fruitsPrice(apple , orange){

}return (apple*80)+(orange+60);
document.write(fruitsPrice(3,5)+"円"+"<br>");
document.write(fruitsPrice(6,8)+"円"+"<br>");

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

for (var no1 =0; no1< 5; no1++){

  for(var no2 =0; no2<=5; no2++){
    if(no2 % 2 ==0){
      document.write("★");}
      else{
        document.write("☆");}

  }     document.write("<br>");
}


for(var xyz =1; xyz<30; xyz++){

  if(xyz % 2 ==0){ document.write("2の倍数");}
    else if(xyz % 3==0){document.write("3の倍数");}
    else{
    document.write(xyz);}
    document.write("<br>");
}

for(var a = 10;a>= 0; a--){
  document.write(a);
  document.write("/");
} document.write("<br>");

for(var star = 1; star < 5; star++){
  document.write("★");
  document.write("<br>");
}

for(var month = 1; month <= 12; month ++){
  document.write(month);
  document.write("月/");
}

for(var age = 18; age <= 99; age++){
  document.write(age + "歳")
} document.write("<br>");

for(var day = 1; day <= 31; day++){
  document.write(day + "日");
  document.write("<br>");
}

for(var num = 1;num <= 40; num++){
  document.write(num+"番");
  document.write("<br>");
}

var a2 = 3;
switch (a2) {
  case 0:
    document.write("A");
    // code
    break;
  case 1:
    // code
    document.write("B");
    break;


  default:
    // code
    document.write("C");
}

var a3 ="青";
switch (a3) {
  case '赤':
    // code
    document.write("赤組");
    break;
  case '白':
    // code
    document.write("白組");
    break;
  case '青':
    // code
    document.write("青組");
    break;
  default:
    // code
}


var star = "☆";
switch (star) {
  case '★':
    // code
    document.write("黒い星です");
    break;
  case '☆':
    // code
    document.write("白い☆です") ;
    break;

  default:
    // code
    document.write("その他記号です");
}

var age =70;
switch (age) {
  case '70':
    // code
    document.write("古希");
    break;
  case '80':
    // code
    document.write("米寿");
    break;


  default:
    // code
    document.write(age + "歳");
}

var score = 99;

switch (score) {
  case '99':
    // code
    document.write("おしい！");
    break;
  case '100':
    // code
    document.write("満点です！");
    break;

  default:
    // code
    document.write(score + "点です！");
}


var a1 = 5;
if(a1 > 0){
  if(a1 < 10){
    document.write("A");
  }
}

var a2 = 10;
if(a2 >= 5){
  if(a2 <= 20){
    document.write("B");
  }
}

var a3 = 12;

if(a3 > 0){
  if(a3 < 10){document.write("A");
  }else if(a3 > 10){
    document.write("B");
  }
}

var a4 = 5;
if (a4 < 3){
  document.write("A");
}else if(a4 < 5){
  document.write("B");
}else{
  document.write("C");
}


var a5 = 6; if(a5 > 10){
  document.write("A");
}else if(a5 < 5|| a5 == 6){
  document.write("B");
}else{
  document.write("C");
}


var age = 18;
var seibetsu = "女性";

  if(age >= 18){
  if(seibetsu == "女性"){
    document.write("Aさん");
  }else if(seibetsu == "男性"){
    document.write("Bさん");
  }else{
    document.write("Cさん");
  }
}

var month = 5;
var day = 28;

if(month <= 12){
  if(day <= 15){
    document.write("月の前半");
  }else if(day >= 15){
    document.write("月の後半");
  }
}

var test1 = 80;
var test2 = 96;

if(test1>= 80){
  if(test2 <= 89){
    document.write("不合格");
  }else if(test2 >= 90){
    document.write("合格");
  }
}

var a1 = 2;
if(a1 < 10){
  document.write("A");
}

var a2 = 10;
if(a2 <= 10){
  document.write("B");
}

var a3 = 12;
if(a3 == 12){
  document.write("同じ数字");
}

var a4 = "田中";
if(a4 == "田中"){
  document.write(a4 + "さんです");
}

var b1 = 90;
if(100>= b1){
  document.write("100より小さい数です");
}

var b2 = 3;
if(b2 < 1){
  document.write("A");
}else if(b2 > 1){
  document.write("B");
}

var b3 = 10;
if(b3 < 10){
  document.write("X");
}else if(b3 > 5){
  document.write("Y");
}

var b4 = 1;
if(b4 == 0){
  document.write("数字は０");
}else if(b4 == 1){
  document.write("数字は１");
}else if(b4 == 2){
  document.write("数字は２");
}

var b5 = -8;
if(b5 < 0){
  document.write("マイナス");
}else if(b5 >= 1){
  document.write("プラス");
}

var c1 = 10;
if(c1 < 10){
  document.write("★");
}else{
  document.write("☆");
}

var c2 = 5;
if(c2 > 10){
  document.write("OK");
}else{
  document.write("NG");
}

var c3 = "A";
if(c3 == "B"){
  document.write("B");
}else{
  document.write("その他");
}

var c4 = 5;
if(c4 > 0 && c4 < 10){
  document.write("B");
}else{
  document.write("その他");
}


var c5 = 10;
if (c5 >= 10 || c5 < 5){
  document.write("X");
}else{
  document.write("Y");
}

var a1 = 3;
document.write(++a1);

var a2 = 20;
document.write(++a2);

var a3 = 10;
document.write(++a3);
document.write("<br>");
document.write(++a3);

var a4 = 5;
document.write(a4++);
document.write("<br>");
document.write(a4++);
document.write("<br>");
document.write(a4++);

var a5 = 15;
document.write(--a5);
document.write("<br>");
document.write(--a5);

var a6 = 20;
document.write(a6--);
document.write("<br>");
document.write(a6--);
document.write("<br>");
document.write(a6--);

var a7 = 2;
document.write(a7--);
document.write(a7--);
document.write(a7--);

var a8 = 2;
document.write(++a8);
document.write(a8++);
document.write("<br>");
document.write(a8);

var a9 = 1;
document.write(a9++);
document.write("<br>");
document.write(a9++);
document.write("<br>");
document.write("<br>");
document.write(a9);

// syakyo3~5
document.write(20170813);
document.write(String(10.5));
document.write("<br>");
document.write(20.3);

document.write(-100);
document.write("<br>");
document.write(53+10);

document.write("Hello World");
document.write("Good");

document.write("090-111-2222");
document.write("電話番号");

var a = "山本";
document.write(a);

var number = 208;
document.write(number);

var tell = "090-0000-1234";
document.write(tell);

var name ="jody";
document.write(name);

var name2="高橋さんと田中さん";
document.write(name2);

var cost ="2001円";
document.write(cost);

var month = 12;
document.write(month + "月");

var day = 25;
document.write(day + "日");

var youbi ="木";
document.write(youbi + "曜日");

document.write(3*3);
document.write(4/2);

var a = 5+10;
document.write(a);

var b = 55-28;
document.write(b);

var c =10*2;
document.write(c);

var d = "3+6";
document.write(d);

var e ="2+3";
var f ="4-1";
document.write(e);
document.write("<br>");
document.write(f);

var g = 5*5;
var h ="5*5";
document.write(h + "=" + g);

var abc1 = 10%3;
document.write(abc1);

var abc2 = 5%2;
document.write("5÷2の余りは"+ abc2);

var abc3 ="8%2";
document.write(abc3);

var abc4 = 3%2;
var abc5 = 1;
document.write(abc4 + "=" + abc5);
