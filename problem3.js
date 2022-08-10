// fixt : per ittem wood requirements 

// chear-----> 3 cft
// table ------> 10 cft 
// bed ----------> 50 cft 


// varye : quantitye 


function wood(chearqunatitye, tabelquantitye, bedquantitye,) {
    const perchear = 3;
    const pertable = 10;
    const perbed = 50;

    const chearwood = chearqunatitye * perchear;
    const tablewood = tabelquantitye * pertable;
    const bedwood = bedquantitye * perbed;

    const totalwood = chearwood + tablewood + bedwood;

    return totalwood;

}


const totalCoste = wood(2, 3, 5);
console.log(totalCoste);