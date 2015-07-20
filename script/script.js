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


        /**
         * 作者：Will
         * 作用：添加markdown的渲染功能
         * todo：目前仅仅只是实现功能，需要在后期使用mv*等框架思想重构页面
         */
        marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: true,
            smartLists: true,
            smartypants: false
        });

        var MaDe = {};
        MaDe.Log = [];
        MaDe.
        MaDe.markDownArea = $("#editor-container-body-inner-markdown");
        MaDe.visibleArea  = $("#editor-container-body-inner-visible");
        MaDe.renderText   = function(e) {
            var textList = $(this).val()
                                .split('\n\n');
            var i, l, text = '';

            for (i = 0, l = textList.length; i < l; i++) {
                text += marked(textList[i]);
            }

            MaDe.visibleArea.empty();
            MaDe.visibleArea.append(text);
        };
        MaDe.markDownArea.on('blur', MaDe.renderText);
    })