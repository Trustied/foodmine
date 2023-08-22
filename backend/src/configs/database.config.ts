import { ConnectOptions, connect, set} from 'mongoose';
import bcrypt from 'bcryptjs';
const PASSWORD_HASH_SALT_ROUNDS = 10;
set('strictQuery', true);
export const dbConnect = async () => {
    
      connect(process.env.MONGO_URI!,  {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions).then(
        ()=> console.log('Connect Successfully!'),
        
        (error) => console.log(error)
      );   
    
  };
  /*async function seedUser() {
    const usersCount = await UserModel.countDocuments();
    if (usersCount > 0){
      console.log('Users seed is already done!')
      return;
    }

    for (let user of sample_users){
      user.password = await bcrypt.hash(user.password, PASSWORD_HASH_SALT_ROUNDS)
      await UserModel.create(user);
    }
    console.log('The User seed is done!');
  }*/
  /*
  import { connect, set } from 'mongoose';

  const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/foodmine-db';
  console.log(process.env.MONGO_URI);
  set('strictQuery', true);
  export const dbConnect = async () => {
      try {
          connect(mongoUri);
  
          console.log('Connect Successfully---');
  

      } catch (error) {
          console.log(error);
      }
  };
  */