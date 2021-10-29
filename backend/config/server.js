module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '3c14fed4eb6eca05b4bb4b3108a6d725'),
    },
  },
  url: env('WEBSITE', 'http://127.0.0.1')
});
