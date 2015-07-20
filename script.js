$(document).ready(function(){

        $("li.docList-container-item").click(function(){ 

          if ($(this).hasClass("active") === false){
            $("li.docList-container-item").removeClass("active");
            $(this).addClass("active");
          }
          else{
            $(this).removeClass("active");
            var itemText = $("#editor-container-header").val();
            $(this).children("div").children("h2").html(itemText);
          }

          if($("li.docList-container-item").hasClass("active")){
              var headerText = $(this).children("div").children("h2").html();
              $("#editor").animate(
                {marginLeft:"100%"},"fast"
                );
              $("#editor").animate(
                {marginLeft:"37%"},"fast",function(){
              $("#editor-container-header").val(headerText);
            }
                );
              
          }
          else{
              $("#editor").animate(
                {marginLeft:"100%"},"fast"
                );   
              }
        })
        var markdownMode = false;
        $("#buttonMarked").click(function(){
          if(markdownMode === false){
          $("#buttonMarked-Circle").animate({marginLeft:"46px"},"slow");
          $("#buttonMarked").animate({backgroundColor:"#499ef3"},"slow");
          markdownMode = true;
         }
         else{
            $("#buttonMarked-Circle").animate({marginLeft:"0px"},"slow");
            $("#buttonMarked").animate({backgroundColor:"#CCC"},"slow");
            markdownMode = false;
         }
         if(markdownMode === true){
          $("#editor-container-body-inner-visible").css("display","none");
          $("#editor-container-body-inner-markdown").css("display","block");
         }
         else if(markdownMode === false){
          $("#editor-container-body-inner-visible").css("display","block");
          $("#editor-container-body-inner-markdown").css("display","none");
         }
        })



    })