const FeedbackEmail = (customerName) => {
  return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            .container {
              width: 100%;
              height: 100%;
              padding: 20px;
              background-color: #10A19D;
            }
            .email {
              width: 80%;
              margin: auto;
              background-color: #fff;
              padding: 20px;
            }
            .email-header {
              background-color: #10A19D;
              color: #fff;
              padding: 20px;
              text-align: center;
            }
            .email-body {
              padding: 20px;
            }
            .email-footer {
              background-color: #10A19D;
              color: #fff;
              padding: 20px;
              margin: -10px;
              text-align: center;
            }
            .message {
              font-size:14px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="email">
              <div class="email-header">
                <h1>HOTEL SILVER SANDS™<h1/>
              </div>
              <div class="email-body">
              <h2>Hello ${customerName},</h2>
                <p class="message">It's glad to say we have received your feedback. Thank you for using our service.</p>
                <p class="message">See you again.</p>
              </div>
              <div class="email-footer">
                <h3>Management of Hotel Silver Sands</h3>
                <h5>229 Lewis Place,<h5>
                <h5>Negambo</h5>
                <h5>Tel:+94 31 222 2880</h5>
                <h5>Fax:+94 31 223 7364</h5>
                <h5>Copyright © 2023 HotelSilverSands, All rights reserved.</h5>
                <img src="https://clipground.com/images/facebook-logo-png-white-circle-1.png" alt="facebook" width="30" height="30">
                <img src="https://www.pngkey.com/png/full/1-19361_watercolor-instagram-icon-png-instagram-logo-white-on.png" alt="instagram" width="30" height="30">
              </div>
             </div>
          </div>
        </body>
        
      </html>
    `;
};

export default FeedbackEmail;
