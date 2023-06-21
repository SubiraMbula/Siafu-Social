$(".input-field").change(function(){
    var input = $(this);
    
    if (input.val()!=null || input.val()=="") {
      var tokens = input.closest(".wrapper").find(".tokens").first();
        var token =  $(".template.token").clone();
        token.removeClass("template");
        token.find(".token-content").html(input.val());
        token.appendTo(tokens);
    }
  });
  
  $(document).on("click", ".action-remove", function(){
    var action = $(this);
    var token = action.closest(".token");
    token.remove();
  });
  