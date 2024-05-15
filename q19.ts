// Q19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
//                                     //Q15.

 let guest_list : string [] = [`ali`,`saba`,`ubaid`,`nafia`];
for( let i=0; i<guest_list.length; i++){
         console.log(`Recpected Sir/Madam ` + guest_list[i] + `,\nWe invited you on dinner tomorrow.\n\n thank you\n`)
 }
 let not_present: string = `ali`;
 let new_guest: string = `nida`;
 guest_list[2] = new_guest
 for(let i=0; i<guest_list.length; i++){
         console.log(`Recpected Sir/Madam ` + guest_list[i] + `,\nWe invited you on dinner tomorrow.\n\n thank you\n`)
 }
 console.log(`Mr.${not_present} will not coming tomorrow dinner.`)

//                                         //Q16.

// let guest_list : string [] = [`Ali`,`Saba`,`Ubaid`,`Nafia`,`junaid`,`farooq`];
// let not_present: string = `ali`;
// let new_guest: string = `nida`;
// guest_list[2] = new_guest;
// for(let i=0; i<guest_list.length; i++){
 console.log(`Recpected Sir/Madam `  + guest_list[i] + ` ,\n\"nWe invited you on dinner tomorrow" .\n\nTthank You!\n`)
 }
 guest_list.unshift(`Irum`,`Billal`,`Naveed`);
 for (let i=0; i<guest_list.length; i++){    
 console.log(`Recpected Sir/Madam `  + guest_list[i] +  `,\n\"nWe invited you on dinner tomorrow.\nwe fond big table so we decide to invite 3 more guest.\n\n Thank You!\n`)
 }
                                             //Q17
 let guest_list : string [] = [`Ali`,`Saba`,`Ubaid`,`Nafia`,`Junaid`,`Farooq`];
let not_present: string = `Ali`;
 let new_guest: string = `Nida`;
 guest_list[1] = new_guest;
guest_list.unshift (`Irum`,`Billal`,`Naveed`);

 console.log(`\nUnfortunately we can not arrange big table, only two people allow.`)

 while(guest_list.length>2){
         let remove_guest = guest_list.pop ();
    
     console.log(`Sorry Sir/Madam. ${remove_guest}\nyou are not invited for dinner.`);
 }
 for(let i=0; i<guest_list.length; i++){

     console.log(`\nRespected Sir/Madam. ` +  guest_list[i]  +`,\n"Yes you are still invited on tomorrow dinner"\nThank You!\n`)
 } 

 guest_list.splice(0,2)
 console.log(guest_list)
