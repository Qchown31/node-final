// require your dependencies here

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    adult: {
      type: Boolean,
      default: false
    }
  }
);

const User = mongoose.model('Subscribers', userSchema);
// export your model here
