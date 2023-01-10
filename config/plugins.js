module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.mail.ru'),
        port: env('SMTP_PORT', 465),
        secure: true,
        auth: {
          user: env('SMTP_USERNAME', 'avalonrussia@mail.ru'),
          pass: env('SMTP_PASSWORD', 'qf0m8xbvLSqJMNKYjt2s'),
        },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: 'avalonrussia@mail.ru',
        defaultReplyTo: 'avalonrussia@mail.ru',
      },
    },
  },
  // ...
});