// Length
let feet = 3.28084
let meter = 0.3048

// Volume
let ltr = 3.78541
let gln = 0.264172

// Mass
let kg = 0.453592
let pnd = 2.20462


function calculate(x){
    document.getElementById("metric").textContent = Number(x)
    let metric = Number(document.getElementById("metric").textContent)

    // Meter to Feet
    let mtr_feet = Math.round(metric * feet  * 1000) / 1000
    // Feet 
    let feet_mtr = Math.round(metric * meter  * 1000) / 1000
    document.getElementById("len-mtr").textContent = metric + " meters = " + mtr_feet + " feet | " + metric + " feet = " + feet_mtr + " meters"

    // Meter to Feet
    let ltr_gln = Math.round(metric * gln * 1000) / 1000
    // Feet 
    let gln_ltr = Math.round(metric * ltr  * 1000) / 1000
    document.getElementById("ltr-gln").textContent = metric + " liters = " + ltr_gln + " gallons | " + metric + " gallons = " + gln_ltr + " liters"


    // Meter to Feet
    let kg_pnd = Math.round(metric * pnd  * 1000) / 1000
    // Feet 
    let pnd_kg = Math.round(metric * kg  * 1000) / 1000
    document.getElementById("kilo-pnd").textContent = metric + " kilos = " + kg_pnd + " pounds | " + metric + " pounds = " + pnd_kg + " kilos"

}