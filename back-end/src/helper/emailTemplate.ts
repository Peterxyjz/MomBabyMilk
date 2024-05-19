export function generateEmailTemplate(username: string, verificationLink: string): string {
  return `<!DOCTYPE html>
  <html>
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email Verification</title>
      <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
  
          .container {
            background-color: #f9f9f9;
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
  
          .header {
              padding: 10px 0;
          }
  
          .header h1 {
            text-align: center;
            color: #333333;
            font-size: 24px;
          }
  
          .content {
            font-size: 16px; 
            padding: 20px;
            border-radius: 5px;
          }
  
          .content p {
              color: #666666;
              line-height: 1.6;
          }
  
          .button {
              display: inline-block;
              margin: 0 auto;
              padding: 10px 50px;
              font-size: 16px;
              color: #fff;
              background-color: #007bff;
              text-decoration: none;
              border-radius: 5px;
              font-weight: 500;
          }
          a:hover,
          a:active {
              text-decoration: none;
              color: inherit; /* Giữ màu văn bản như mặc định */
              cursor: default; /* Nếu muốn thay đổi con trỏ */
           }
          .footer {
              padding: 10px;
              font-size: 14px;
              color: #999999;
              text-align: center;
          }
      </style>
  </head>
  
  <body>
      <div class="container">
          <div class="header">
              <h1>Email Verification</h1>
          </div>
          <div class="content">
              <p>Hello ${username},</p>
              <p>Thank you for signing up with us. To complete the registration process, please verify your email by
                  clicking the button below:</p>
              <div style="display: flex">
                  <a href="$verificationLink" class="button">Verify Email</a>
              </div>
              <p>If you did not sign up for this account, you can ignore this email.</p>
              <p>Regards,<br>The Team</p>
          </div>
          <div class="footer">
              <p>&copy; 2024 MomBabyMilk Shop. All rights reserved.</p>
          </div>
      </div>
  </body>
  
  </html>`
}
