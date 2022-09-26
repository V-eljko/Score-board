let scoreEL = document.getElementById("score_el") 
let scoreElguest = document.getElementById("score_el_guest")
let count = 0 
let countGuest = 0 


function one(){
count += 1 
scoreEL.textContent = count 
}

function two(){
    count += 2 
    scoreEL.textContent = count 
}

function three(){
    count += 3 
    scoreEL.textContent = count 
}

function one_guest(){
countGuest += 1 
scoreElguest.textContent = countGuest    
}

function two_guest(){
    countGuest += 2 
    scoreElguest.textContent = countGuest    
}

function three_guest(){
    countGuest += 3 
    scoreElguest.textContent = countGuest    
}
