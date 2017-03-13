$(document).ready(function(){
  $(".delete").click(function(){

    $(this).closest('tr').remove();

    var total = 0;
    $("tr.item").each(function(){

      total+= parseInt($(this).find('.cost').text());

    });

    document.getElementsByClassName('subtotal')[0].innerHTML = total;

    var vat = (total * 20)/100;

    document.getElementsByClassName('vat')[0].innerHTML = vat;

    var totalcost = vat + total;

    document.getElementsByClassName('totalcost')[0].innerHTML = totalcost;

  });


  var total = 0;
  $("tr.item").each(function(){

    total+= parseInt($(this).find('.cost').text());

  });

  document.getElementsByClassName('subtotal')[0].innerHTML = total;

  var vat = (total * 20)/100;

  document.getElementsByClassName('vat')[0].innerHTML = vat;

  var totalcost = vat + total;

  document.getElementsByClassName('totalcost')[0].innerHTML = totalcost;


  $(".costupdate").change(function(){

    var price = $(this).closest('tr').find('.price').text();


    var obj = $(this).closest(('.costupdate'));
    var qty = obj[0].value;

    var cost = price * qty;

    // for cost
    $(this).closest('tr').find('.cost').text(cost);

    // loop for printing the total
    var total = 0;
    // for loop to sum the cost and find vat
    $("tr.item").each(function(){

      total+= parseInt($(this).find('.cost').text());

    });

    document.getElementsByClassName('subtotal')[0].innerHTML = total;
    var vat = (total * 20)/100;

    document.getElementsByClassName('vat')[0].innerHTML = vat;


    var totalcost = vat + total;

    document.getElementsByClassName('totalcost')[0].innerHTML = totalcost;


  })




  // function of counter increase
  $(".inc").click(function(){
    var val = $(this).parent().parent().prev().val();

    var inc = parseInt(val) + 1;

    $(this).parent().parent().prev().val(inc);

    // conditions
    if(val>=10){
      $(this).parent().parent().siblings('.costupdate').val(10);
    }


    var co = $(this).parent().parent().prev().val();

    var price = $(this).closest('tr').find('.price').text();

    var total = co * price;

    $(this).closest('tr').find('.cost').text(total);


    // loop for printing the total
    var total = 0;
    // for loop to sum the cost and find vat
    $("tr.item").each(function(){

      total+= parseInt($(this).find('.cost').text());

    });

    document.getElementsByClassName('subtotal')[0].innerHTML = total;
    var vat = (total * 20)/100;

    document.getElementsByClassName('vat')[0].innerHTML = vat;


    var totalcost = vat + total;

    document.getElementsByClassName('totalcost')[0].innerHTML = totalcost;


  });


// function for decrement
$(".dec").click(function(){
  var val = $(this).parent().parent().siblings('.costupdate').val();

  var inc = parseInt(val) - 1;

  $(this).parent().parent().siblings('.costupdate').val(inc);

  // conditions
  if(val<=1){
    $(this).parent().parent().siblings('.costupdate').val(0);
  }

  var co = $(this).parent().parent().siblings('.costupdate').val();

  var price = $(this).closest('tr').find('.price').text();

  var total = co * price;

  $(this).closest('tr').find('.cost').text(total);

  // loop for printing the total
  var total = 0;
  // for loop to sum the cost and find vat
  $("tr.item").each(function(){

    total+= parseInt($(this).find('.cost').text());

  });

  document.getElementsByClassName('subtotal')[0].innerHTML = total;
  var vat = (total * 20)/100;

  document.getElementsByClassName('vat')[0].innerHTML = vat;

  var totalcost = vat + total;

  document.getElementsByClassName('totalcost')[0].innerHTML = totalcost;

});
});
