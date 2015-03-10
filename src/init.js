$(document).ready(function(){
  window.dancers = [];

  $(".arrange").on("click", function(){
    console.log("click");
    for (var i = 0 ; i < window.dancers.length ; i++){
      // console.log('change position');
      var dancer = window.dancers[i];
      // dancer.$node.removeClass("dancer");
      // dancer.$node.removeClass("nonDancer");
      // dancer.$node.removeClass("largeDancer");
      if (true){
        $(dancer.$node).css({
        position: "absolute",
        left: 50 + "px"
        }).show();
      }
      console.log(dancer.$node);
      $('body').append(dancer.$node);
    }
    // console.log(window.dancers);
  });

  
  // loop for interactivity



  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });
});

$('body').on("mouseover", ".dancer",function(event){
  $(this).css({border:"10px solid black"}).show();
});

$('body').on("mouseover", ".largeDancer",function(event){
  $(this).css({border:"20px solid magenta"}).show();
});

$('body').on("mouseover", ".nonDancer",function(event){
  $(this).css({border:"15px solid cyan"}).show();
});


$("body").on("click", ".dancer",function(){
    
     var position1 = $(this).position();

     console.log(position1);
     var minPosition=Number.POSITIVE_INFINITY , index=-1;
     for (var j=0; j<window.dancers.length; j++){
      if (Math.abs(window.dancers[j].position.top-position1.top)>1 && Math.abs(window.dancers[j].position.left -position1.left)>1){
        var position2=window.dancers[j].position;
        console.log("position",position2);
        var distance=Math.pow((position1.top-position2.top),2)+Math.pow((position1.left-position2.left),2);
        if (distance<minPosition){
          index=j;
          minPosition=distance;
        }
      }
      else {
        console.log('here');
        
     }
   }
     // outside, want to do something about the neighbor
     $(this).css({border: "10px solid orange"}).show();
     console.log(index);
     console.log(minPosition);
     var dancer=window.dancers[index];
     $(dancer.$node).css({border: "10px solid orange"}).show();
     

});
