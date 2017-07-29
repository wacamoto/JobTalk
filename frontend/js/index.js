$(document).ready(function() {
  // 條件找朋友列表
  if($('.filter').length > 0) {
    
    //取得職缺列表放進 select 選項裡
    $.ajax({
      url: 'http://172.20.10.3:3000/jobs'
    }).done(function(data) {
      console.log(data);
      for(var i=0; i<data.length; i++) {
        var option = $('<option  value="' + data[i].id + '">' + data[i].content.name +  '</option>');
        $('.js-jobs-select').append(option);
      }
    });
    
    $('.js-search-btn').click(function () {
      var jobId = $('.js-jobs-select').val();
      var gender = $('.js-gender-select').val();
      var up = $('.js-age-up').val();
      var low = $('.js-age-up').val();

      
    });
  }
});
