#!/usr/bin/node
const firstArg = Process.argv[2];
if (firstArg === undefined){
    console.log('No argument');
} else {
    console.log(firstArg);
}
