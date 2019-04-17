 var balls = document.getElementsByClassName('ball');
    var inner = document.getElementsByClassName('inner');
    for(var i = 0; i< inner.length; i++){
        inner[i].style =`width: 150px; height: 150px; left:${i*250+100}px; top:50px`;
    }

 $(document).on('mousedown', '.ball', function(e){

     // console.log(this);
     $(this).clone().appendTo($(this).parent());
     $(this).attr('class', 'ball1');
     this.style.backgroundSize="100%";
     var self = this;
     var x = this.offsetLeft;
     var y = this.offsetTop;
     var mouseX = e.pageX;
     var mouseY = e.pageY;
     var startX = e.pageX - x;
     var startY = e.pageY - y;
     document.onmousemove = function(e){
         self.style.left = -startX + e.pageX + 60+'px';
         self.style.top = -startY + e.pageY + 60+'px';

     };
     document.onmouseup = function(){
         document.onmousemove = null;
         // this.style.backgroundSize="100%";

     }
 })
 $(document).mousemove(function(event){
     if(($('.ballSmall').length) <= 1 && event.pageX >= 610 && event.pageX <= 650 && event.pageY >= 410 && event.pageY <= 480){
         $('.ball1').attr('class','ballSmall');

     }
 });

 $("#go").click(function(){
     compare($('.ballSmall')["0"].attributes[2].value, $('.ballSmall')["1"].attributes[2].value);
     // compare();
     var arr = $('.ballSmall');
     console.log(arr);
     $(".inner").fadeIn(3000);
     $('.ball1').remove();
     $('.ballSmall').remove();
 })
 //--------kod ot Bella
 function compare(data1, data2) {
     if((data1=='wind'&&data2=='water')||(data1=='water'&&data2=='wind')){newElement('steam');}
     else if((data1=='wind'&&data2=='fire')||(data1=='fire'&&data2=='wind')){newElement('spirt');}
     else if((data1=='earth'&&data2=='fire')||(data1=='fire'&&data2=='earth')){newElement('lava');}
     else if((data1=='stone'&&data2=='fire')||(data1=='fire'&&data2=='stone')){newElement('metal');}
     else if((data1=='earth'&&data2=='water')||(data1=='water'&&data2=='earth')){newElement('boloto');}
     else {console.log('you do not have a new element');}
 }
 function newElement(element_name) {
     var el = document.createElement('div');
     el.style.float='left'
     // el.style.display='none'
     el.classList.add('innerNew');
     el.id='basket_'+element_name;
     var div_img=el.appendChild(document.createElement('div'));
     $(div_img).addClass('ball');
     $('.wraper-img').append(el);
     // $(img).attr('src','images/'+element_name+'.png');

     $(div_img).attr('id','ball_'+ element_name);
     $(div_img).css("background-image",'url("images/'+element_name+'.png")');
 }

