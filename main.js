let banner = {
rollId: null,
interval: 2000,

//롤링 배너 초기화
rollInit: function (newinterval) {
    if(parseInt(newinterval) > 0){
        this.interval = newinterval;
    }
    //현재 배너
    let firstitem = document.querySelector('.rollimgs li');
    if(firstitem){
        firstitem.classList.add('currentroll');
    }
    //다음 배너
    let seconditem = document.querySelectorAll('.rollimgs li')[1];
    if(seconditem){
        seconditem.classList.add('nextroll');
    }
    //이전 배너
    document.querySelector('.rollimgs li:last-child').classList.add('prevroll');
    this.rollId = setInterval(this.rollNext, this.interval);//롤링 인터벌 호출
},

//다음 배너 롤링
rollNext: function () {
    if(document.querySelector('.prevroll')){
        document.querySelector('.prevroll').classList.remove('prevroll');
    }
    if(document.querySelector('.currentroll')){
        document.querySelector('.currentroll').classList.add('prevroll');
        document.querySelector('.currentroll').classList.remove('currentroll');
    }
    if(document.querySelector('.nextroll')){
        document.querySelector('.nextroll').classList.add('currentroll');
        document.querySelector('.nextroll').classList.remove('nextroll');
    }
//다음 이미지 있으면 다음 롤링 이미지로 선택, 없으면 첫번째 이미지를 롤링 이미지로 지정
    if(document.querySelector('.currentroll').nextElementSibling){
        document.querySelector('.currentroll').nextElementSibling.classList.add('nextroll');
    }else{
        document.querySelector('.rollimgs li').classList.add('nextroll');
    }
  }
}
document.addEventListener('DOMContentLoaded', function(){
banner.rollInit(4000); // 배너 롤링
});

function toggleImg1(){
  document.getElementById("img1").src="flower1.jpg";
  document.getElementById("img2").src="flower2.jpg";
  document.getElementById("img3").src="flower3.jpg";
}
function toggleImg2(){
  document.getElementById("img1").src="jeju1.jpg";
  document.getElementById("img2").src="jeju2.jpg";
  document.getElementById("img3").src="jeju3.jpg";
}
function toggleImg3(){
  document.getElementById("img1").src="emo1.jpg";
  document.getElementById("img2").src="emo2.jpg";
  document.getElementById("img3").src="emo3.jpg";
}
function toggletext2(){
  document.getElementById("title1").value='돌';
  document.getElementById("content1").value='돌이다';
  document.getElementById("title2").value="매화꽃";
  document.getElementById("content2").value="매화꽃이다";
  document.getElementById("title3").value="벚꽃";
  document.getElementById("content3").value="벚꽃이";
}
