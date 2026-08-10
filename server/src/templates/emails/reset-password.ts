export const resetPasswordEmail = (resetUrl: string) => `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>Reset your password</title>
    </head>

    <body style="
      margin: 0;
      padding: 0;
      background-color: #f8fafc;
      font-family: Arial, Helvetica, sans-serif;
    ">
      <div style="
        max-width: 600px;
        margin: 0 auto;
        padding: 40px 20px;
      ">

        <div style="
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 40px;
        ">

          <h1 style="
            margin: 0 0 20px;
            color: #0f172a;
            font-size: 28px;
            font-weight: 700;
          ">
            Reset your password
          </h1>

          <p style="
            margin: 0 0 16px;
            color: #475569;
            font-size: 16px;
            line-height: 1.6;
          ">
            We received a request to reset the password for your account.
          </p>

          <p style="
            margin: 0 0 28px;
            color: #475569;
            font-size: 16px;
            line-height: 1.6;
          ">
            Click the button below to create a new password.
            This link will expire in 15 minutes.
          </p>

          <a
            href="${resetUrl}"
            style="
              display: inline-block;
              padding: 12px 24px;
              background-color: #0f172a;
              color: #ffffff;
              text-decoration: none;
              border-radius: 8px;
              font-size: 16px;
              font-weight: 600;
            "
          >
            Reset Password
          </a>

          <p style="
            margin: 28px 0 0;
            color: #64748b;
            font-size: 14px;
            line-height: 1.6;
          ">
            If you didn't request a password reset, you can safely ignore
            this email.
          </p>

          <hr style="
            margin: 30px 0;
            border: 0;
            border-top: 1px solid #e2e8f0;
          " />

          <p style="
            margin: 0;
            color: #94a3b8;
            font-size: 12px;
            line-height: 1.5;
          ">
            This is an automated email. Please do not reply to this email.
          </p>

        </div>

      </div>
    </body>
  </html>
`;
