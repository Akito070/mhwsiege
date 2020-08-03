$(function() {
  //iconsのところに触れるとあらすじが出る
    $('.center').hover(
      function() {
        // 子要素の「.text-contents」の要素を取得し、text-activeクラスをつけてください
        $(this).find(".text-contents").addClass("text-active");
  
      },
      function() {
        // 子要素の「.text-contents」の要素を取得し、text-activeクラスを外してください
        $(this).find(".text-contents").removeClass("text-active");
  
      }
    );
  
  //アニメーション
  $(".social-icon").hover(
    function(){
       $(this).animate({
    //、そのfont-sizeを30pxに変更し、
     'font-size' :'30px'
    },300);
    },
    function(){
       $(this).animate({
      // 離れたときにはfont-sizeを24pxにしてください。
     "font-size" :"24px"
    },300);
    }
  );
  
  //お問い合わせ
  
    //入力欄にクリックすると入力欄のところに色がつく
    $("input:not(:last)").focus(function () { 
      
     // $("*").removeClass(".focused");
      $(this).css("background-color","#f0f8ff");
      //$(this).addClass("focused");
     // console.log("focus");
    });
  
    //入力欄ではなくて、別のところにクリックすると色が消える
    $("input").blur(function(){
     // $this).removeClass(".focused");
     $(this).css("background-color","");
    //  console.log("blur");
      });
      
    $("textarea").focus(function () { 
     // $(this).addClass("focused");
     $(this).css("background-color","#f0f8ff");
     // console.log("focusText");
    });
    //入力欄ではなくて、別のところにクリックすると色が消える
    $("textarea").blur(function(){
     // $(this).removeClass("focused");
      //console.log("blurText");
      $(this).css("background-color","");
    });
    
    $('#coment').hide();
    $('#btn-contact').click(function(){
      /*var table = $("<table></table>");
    
      table.append($("<tr><th>"+$('#contact-name').val()+ " &emsp;  &emsp;  &emsp; </th><td>" + $('#contact-text').val()+ "</td></tr>"));
      console.log(table);
      $("#target").html(table).css ("border","medium solid black");*/

      $("#coment").show();
        $formObject = jQuery( 'form' );
        $tableObject = jQuery( '#target' );
        $tr = "<tr>";
        
        //時間時刻
         var time="";
   
          var now = new Date();
          var year = now.getFullYear();
          var month = now.getMonth() + 1;
          var day = now.getDate();
          var hour = now.getHours();
          var minute = now.getMinutes();
          time = year+"/"+month+"/"+day+" "+hour+":"+minute;
  
          console.log(time);
   
         
          
        //入力欄に書いた値を申し込み完了リストに移動
        //$tr += "<td>" + $formObject.find( '[id=contact-name]' ).val() + "</td>";
        $tr += "<td> &emsp;  &emsp;  &emsp;  &emsp;" + $formObject.find( '[id=contact-text]' ).val() + "&emsp;  &emsp;  &emsp;  &emsp;</td><td>"+time+"</td>";
      
        $tr += "</tr>";
        //console.log($tr);
        //申し込みボタンを押すと入力欄に書いた値が申し込み完了リストに表示
        $tableObject.append( $tr);
        
        $("#contact-name").val("");
        $("#contact-email").val("");
        $("#contact-text").val("");
      
       $('#target').css('fontSize','20px');
    });
  
   
  
  
  //FAQ
    $(".faq-list-item").click(function(){
      var $answer=$(this).find(".answer");
      if($answer.hasClass("open")){
        $answer.removeClass("open");
        $answer.slideUp();
        $(this).find("span").text("+");
      }else{
         $answer.addClass("open");
        $answer.slideDown();
        $(this).find("span").text("-");
      }
    })
  
   //menu-bar 
    $('#sidebar').click(function(){
      $('#sidebar').toggleClass('active');
    })
  
  
  });
  
  //menu-bar
  /*function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
  };*/
  
  
  