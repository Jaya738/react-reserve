// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV:
      "mongodb+srv://myApps:Jaya7382@digimart-lkadf.mongodb.net/test?retryWrites=true&w=majority",
    JWT_SECRET: "myToken",
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/digimart/image/upload",
    STRIPE_SECRET_KEY: "sk_test_9ocoHX7fM7PewO7C6wq8TDZ900iyQq2pmW",
  },
};
