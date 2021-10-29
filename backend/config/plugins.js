module.exports = ({ env }) => ({
    email: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'longvuong9901@gmail.com',
          defaultReplyTo: 'longvuong9901@gmail.com'
        },
      },
})