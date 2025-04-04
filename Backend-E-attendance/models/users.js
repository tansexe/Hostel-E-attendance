import { Schema, model } from "mongoose";
import { hash } from "bcrypt";
const saltRounds = 10;

const usersSchema = new Schema({
  Username: {
    type: String,
    required: true,
    unique: true,
  },
  RollNo: {
    type: Number,
    required: true,
    unique: true,
  },
  Hostel: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/.test(v);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  Password: {
    type: String,
    required: true,
  },
  Phone: {
    type: String,
    required: true,
  },
});

usersSchema.statics.isEmailInUse = async function (Email) {
  try {
    const sameEmailUser = await this.findOne({ Email });
    return !sameEmailUser;
  } catch (error) {
    console.error("Error inside isEmailInUse method", error);
    return false;
  }
};

usersSchema.statics.isUsernameInUse = async function (Username) {
  try {
    const sameUsernameUser = await this.findOne({ Username });
    return !sameUsernameUser;
  } catch (error) {
    console.error("Error inside isUsernameInUse method", error);
    return false;
  }
};

usersSchema.pre("save", async function (next) {
  if (this.isModified("Password")) {
    this.Password = await hash(this.Password, saltRounds);
  }
  next();
});

export default model("User", usersSchema);