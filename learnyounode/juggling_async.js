var http = require('http');
let url1 = process.argv[2];
let url2 = process.argv[3];
let url3 = process.argv[4];

let call1_text = "";
let call2_text = "";
let call3_text = "";

var returnString1 = "";
http.get(url1, (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
            returnString1 += data;
        });
    response.on('end', () => {
        call1_text = returnString1;
        if(call2_text.length > 0 && call3_text.length > 0)
        {
            // console.log('URL ONE:');
            // console.log('call1: ' + call1_text);
            // console.log('call2: ' + call2_text);
            // console.log('call3: ' + call3_text);
            console.log(call1_text);
            console.log(call2_text);
            console.log(call3_text);
        }
    });
})
var returnString2 = "";
http.get(url2, (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
            returnString2 += data;
        });
    response.on('end', () => {
        // console.log('call 2: ' + returnString2);
        call2_text = returnString2;
        if(call1_text.length > 0 && call3_text.length > 0)
        {
            // console.log('URL TWO:');
            // console.log('call1: ' + call1_text);
            // console.log('call2: ' + call2_text);
            // console.log('call3: ' + call3_text);
            console.log(call1_text);
            console.log(call2_text);
            console.log(call3_text);
        }
    });
})
var returnString3 = "";
http.get(url3, (response) => {
    response.setEncoding('utf8');
    response.on('data', (data) => {
            returnString3 += data;
        });
    response.on('end', () => {
        // console.log('call 3: ' + returnString3);
        call3_text = returnString3;
        if(call1_text.length > 0 && call2_text.length > 0)
        {
            // console.log('URL THREE:');
            // console.log('call1: ' + call1_text);
            // console.log('call2: ' + call2_text);
            // console.log('call3: ' + call3_text);
            console.log(call1_text);
            console.log(call2_text);
            console.log(call3_text);
        }
    });
})