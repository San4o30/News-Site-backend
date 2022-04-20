module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1b78e7093cf66cb3495ca3919b63e70c'),
  },
});
