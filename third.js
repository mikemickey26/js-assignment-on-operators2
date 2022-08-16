//A doctor orders 4 grams of medication for a patient. 
//The medication is available in capsules of 500 milligrams.
 //How many capsules should be given? Write a function to solve this.
 function med(cap) {
    let onegram = new Number(1000)
    let fourgram = onegram * 4
    let totalnumberofcapsules = fourgram / cap
    console.log(totalnumberofcapsules);
 }
 med(500)
 //the number of capsules the patient should be given is 8