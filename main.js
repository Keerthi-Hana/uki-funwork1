SC.initialize({
    client_id: '340f063c670272fac27cfa67bffcafc4'
  });
  $(document).ready(function(){ 
      //stream the track number song
    SC.stream('/tracks/29545087',function(sound){
   
        //function for start button
        $('#start').click(function(e) {
            e.preventDefault();
            sound.start();
          });
     
          //function for stop button
          $('#stop').click(function(e) {
            e.preventDefault();
            sound.stop();
          });
 
     });

   }); 
