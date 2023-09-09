
let  total = 0;
let discount = 0;

function handleClickCard(target) {
  
    // console.log(target.childNodes[5]);
   
    const itemName = target.childNodes[5].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    const selectedItemContainer = document.getElementById('selected-items');
    selectedItemContainer.appendChild(li);
    // console.log(target.parentNode.childNodes[3].childNodes[7].innerText.split(" "));
    const price = target.childNodes[7].innerText.split(" ")[1];
    // console.log(target.childNodes)

    
    total = parseInt(total) + parseInt(price);
    // console.log(total)

    

    if(total >= 0){
     document.getElementById('purchase').removeAttribute('disabled')
    }
    if(total >= 200){
        document.getElementById('apply-btn').removeAttribute('disabled');
    }
    total = total-(discount*total)
    document.getElementById('total').innerText = total;
    // console.log(total)
    
}
   

const apply = () =>{
    const coupon =document.getElementById('coupon-code').value;
    const total2 = document.getElementById('total').innerText;
    if('SELL200' === coupon){
        let discount2 = (20/100)*parseFloat(total2);
        // console.log(discount2);
        discount = 0.2;
        document.getElementById('discount').innerText = discount2;
        total=total-(discount*total);
        document.getElementById('total-pay').innerText =parseFloat(total2)-discount2;

    }else{
        console.log('no');
    }
}

function refreshPage(){
    
   document.location.reload();

}
    

   

   
