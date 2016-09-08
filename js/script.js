var $ = jQuery;

$('#FlexAlign1').click(function(){
  if($('.boxes--flexy1').css('display') == 'flex'){
    $('.boxes--flexy1').css('display', 'block');
  }
  else $('.boxes--flexy1').css('display', 'flex');
});

$('#FlexAlign2').click(function(){
  if($('.boxes--flexy1').css('align-items') == 'center'){
    $('.boxes--flexy1').css('align-items', 'initial');
  }
  else $('.boxes--flexy1').css('align-items', 'center');
});

$('#FlexAlign3').click(function(){
  if($('.boxes--flexy1').css('justify-content') == 'center'){
    $('.boxes--flexy1').css('justify-content', 'initial');
  }
  else $('.boxes--flexy1').css('justify-content', 'center');
});

$('#FlexFix').click(function(){
  if($('.boxes--flexy').css('display') == 'flex'){
    $('.boxes--flexy').css('display', 'block');
    $('.boxes--flexy').css('display', 'block');
    $('.boxes--flexy1').css('flex-wrap', 'initial');
    $('.boxes--flexy1').css('align-content', 'initial');
    $('.boxes--flexy').css('justify-content', 'initial');
  }
  else {
    $('.boxes--flexy').css('display', 'flex');
    $('.boxes--flexy1').css('flex-wrap', 'wrap');
    $('.boxes--flexy1').css('align-content', 'center');
    $('.boxes--flexy').css('justify-content', 'center');
  }
});

$('#FlexMove1').click(function(){
  if($('#Boxes2').css('justify-content') == 'space-around'){
    $('#Boxes2').css('justify-content', 'initial');
  }
  else if($('#Boxes2').css('justify-content') == 'space-between'){
    $('#Boxes2').css('justify-content', 'space-around');
  }
  else $('#Boxes2').css('justify-content', 'space-between');
});

$('#FlexMove2').click(function(){
  if($('#Boxes2').css('flex-direction') == 'column-reverse'){
    $('#Boxes2').css('flex-direction', 'initial');
  }
  else if($('#Boxes2').css('flex-direction') == 'column'){
    $('#Boxes2').css('flex-direction', 'column-reverse');
  }
  else $('#Boxes2').css('flex-direction', 'column');
});

$('#FlexMove3').click(function(){
  if($('#FlexMove3').css('align-self') == 'center'){
    $('#FlexMove3').css('align-self', 'initial');
  }
  else if($('#FlexMove3').css('align-self') == 'flex-end'){
    $('#FlexMove3').css('align-self', 'center');
  }
  else if($('#FlexMove3').css('align-self') == 'flex-start'){
    $('#FlexMove3').css('align-self', 'flex-end');
  }
  else $('#FlexMove3').css('align-self', 'flex-end');
});

$('#FlexMove4').click(function(){
  if($('#Boxes2').css('align-items') == 'center'){
    $('.boxes--flexy2').css('height', 'initial');
    $('#Boxes2').css('align-items', 'stretch');
  }
  else if($('#Boxes2').css('align-items') == 'stretch'){
    $('#Boxes2').css('align-items', 'flex-end');
    $('.boxes--flexy2').css('height', '50%');
  }
  else if($('#Boxes2').css('align-items') == 'flex-end'){
    $('#Boxes2').css('align-items', 'flex-start');
    $('.boxes--flexy2').css('height', '50%');
  }
  else {
    $('.boxes--flexy2').css('height', '50%');
    $('#Boxes2').css('align-items', 'center');
  }
});

$('#ArrangeStuff1').click(function(){
  if($('.boxes--flexy3').css('display') == 'flex'){
    $('.boxes--flexy3').css('display', 'block');
    $('.boxes--flexy3').css('flex-flow', '');
  }
  else {
    $('.boxes--flexy3').css('display', 'flex');
    $('.boxes--flexy3').css('flex-flow', 'row wrap');
  }
});

$('#ArrangeStuff2').click(function(){
  if($('.boxes--flexy3').css('justify-content') == 'space-around'){
    $('.boxes--flexy3').css('display', 'block');
    $('.boxes--flexy3').css('flex-flow', '');
    $('.boxes--flexy3').css('justify-content', '');
  }
  else if($('.boxes--flexy3').css('justify-content') == 'space-between'){
    $('.boxes--flexy3').css('display', 'flex');
    $('.boxes--flexy3').css('flex-flow', 'row wrap');
    $('.boxes--flexy3').css('align-content', 'center');
    $('.boxes--flexy3').css('justify-content', 'space-around');
  }
  else {
    $('.boxes--flexy3').css('display', 'flex');
    $('.boxes--flexy3').css('flex-flow', 'row wrap');
    $('.boxes--flexy3').css('align-content', 'center');
    $('.boxes--flexy3').css('justify-content', 'space-between');
  }
});

$('#ArrangeStuff3').click(function(){
  if($('.boxes--flexy3').css('align-content') == 'center'){
    $('.boxes--flexy3').css('align-content', '')
  }
  else $('.boxes--flexy3').css('align-content', 'center');
});
