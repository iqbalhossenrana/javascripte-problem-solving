// show the number 1-50 

// if the number disivile bye 3 thean show "foo"
// if the number disivile bye 5 thean show "bar"
// if the number disivile bye 5 thean show "bar"


for (let i = 1; i <= 50; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log('foobar');
    }



    else if (i % 3 === 0) {
        console.log('foo');





    }
    else if (i % 5 === 0) {
        console.log("bar");
    }


    else {
        console.log(i);

    }

}

