import { Injectable } from '@nestjs/common';
const {OAuth2Client} = require('google-auth-library');

@Injectable()
export class AppService {  
    
    async verifyGToken(token: String) {
        const CLIENT_ID = process.env.clientId;
        const client = new OAuth2Client(CLIENT_ID);
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            // [CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        // If request specified a G Suite domain:
        const domain = payload['hd'];

    }
}
