

import {
    PublicKey,Account,
   } from '@solana/web3.js';
   
   require('dotenv').config();
   
   
   
    async function generateAutority() {
       const program_id:any=process.env.PROGRAM_ID;
    
      
       let createAccountProgramm = new Account();
       console.log("Create Account Programm: " )
       console.log(createAccountProgramm.publicKey.toBase58())
   
       let [authority, nonce] = await PublicKey.findProgramAddress(
           [createAccountProgramm.publicKey.toBuffer()],
           new PublicKey(program_id),
       );
       console.log("Authority :")
       console.log( authority.toBase58());
       console.log("Nonce :" )
       console.log( nonce);
   }
   
   generateAutority();