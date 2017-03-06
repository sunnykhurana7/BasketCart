$(document).ready(function(){

  // console.log(document.getElementsByClassName('subtotal')[0].innerHTML);

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

    // for qty
    // alert($(this).closest('td').find(input[type="number"]).value);

    // alert($(this).closest('tr').find('.counter').text());

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



});
