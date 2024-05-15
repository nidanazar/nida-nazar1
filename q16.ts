//qustion #16 guest_list 16. More Guests: You just found a bigger dinner table, so now more space is
//available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your arra
//• Use append() to add one new guest to the end of your list.
//• Print a new set of invitation messages, one for each person in your list.


 let guest_list : string [] = [`Ali`,`Saba`,`Ubaid`,`Nafia`,`junaid`,`farooq`];

 let not_present: string = `ali`;

 let new_guest: string = `nida`;

 guest_list[2] = new_guest;

 for(let i=0; i<guest_list.length; i++){

     console.log(`Recpected Sir/Madam `  + guest_list[i] + ` ,\n\"nWe invited you on dinner tomorrow" .\n\nTthank You!\n`)
 }

 guest_list.unshift(`Irum`,`Billal`,`Naveed`);

 for (let i=0; i<guest_list.length; i++){    

     console.log(`Recpected Sir/Madam `  + guest_list[i] +  `,\n\"nWe invited you on dinner tomorrow.\nwe fond big table so we decide to invite 3 more guest.\n\n Thank You!\n`)

 }