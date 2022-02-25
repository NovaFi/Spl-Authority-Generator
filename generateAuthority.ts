

import {
 PublicKey,Account,
} from '@solana/web3.js';

require('dotenv').config();



export async function generateAutority(): Promise<void> {
    const program_id:any=process.env.PROGRAM_ID;
    console.log("program"+program_id)
   
    let createAccountProgramm = new Account();
    console.log("create  " + createAccountProgramm.publicKey)

    let [authority, nonce] = await PublicKey.findProgramAddress(
        [createAccountProgramm.publicKey.toBuffer()],
        new PublicKey(program_id),
    );
    console.log("authority = ", authority.toBase58());
    console.log("nonce = " + nonce);
}

generateAutority();