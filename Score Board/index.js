let homeCount = 0
let awayCount = 0

document.getElementById("home-count").textContent = homeCount
document.getElementById("away-count").textContent = awayCount

let HC = document.getElementById("home-count")
let AC = document.getElementById("away-count")
let add1 = 0
let add2 = 0
let add3 = 0

let add1a = 0
let add2a = 0
let add3a = 0


function add1H()
{
    add1 += 1
    HC.textContent = add1
    
}

function add2H()
{
    
    add2 = add1H(add1) += 2
    HC.textContent = add2
    
}

function add3H()
{
    add3 += 3
    HC.textContent = add3
    
}

function add1A()
{
    add1a += 1
    AC.textContent = add1a    
}

function add2A()
{
    add2a += 2
    AC.textContent = add2a    
}

function add3A()
{
    add3a += 3
    AC.textContent = add3a    
}
