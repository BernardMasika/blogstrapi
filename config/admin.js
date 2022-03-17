module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7090ed7b404a050772537a79f4ae702b'),
  },
});
