require('dotenv').config();

class Twilio {
  sendConfirmationMessage(orderTime) {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require('twilio')(this.accountSid, this.authToken); 

    client.messages.create({         
            from: process.env.TWILIO_PHONE_NUMBER,
            to: process.env.MY_PHONE_NUMBER,
            body: `Thank you! Your order was placed and will be delivered before ${orderTime}`
          }) 
          .then(message => console.log(message.sid)) 
          .done();
  }
}

module.exports = Twilio;

