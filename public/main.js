$(function(){
  $('form').submit(function(e){
    e.preventDefault();
    data = {};
    ready = 0;
    data.email = $("#email").val();
    data.color = $("#color").val();
    $.post('/second', data, function(){
      ready++
      if(ready > 1){
        window.location.replace('/success');
      }
    })
    $.post('/', data, function(){
      ready++
      if(ready > 1){
        window.location.replace('/success');
      }
    })
    if(ready > 1){
      window.location.replace('/success');
    }
  });
});