for(const seat of seats){
    document.getElementById('apply-btn').addEventListener('click', function(){
        const couponCode = document.getElementById('copoun').value;
        const couponDiv = document.getElementById('copoun-div');
        const discountDiv = document.getElementById('discount-disabled');
        if(couponCode === "NEW15" && seatCount === 4){
            couponDiv.classList.add('hidden');
            discountDiv.classList.remove('hidden');
            discountCalculate(0.15);
            setInnerText('totalDiscount', discountPrice);
            setInnerText('grand-total', seatGrandTotal);
        }
        else if(couponCode === "Couple 20" && seatCount === 4){
            couponDiv.classList.add('hidden');
            discountDiv.classList.remove('hidden');
            discountCalculate(0.20)
            setInnerText('totalDiscount', discountPrice);
            setInnerText('grand-total', seatGrandTotal);
        }
    })

}