  const { username, password } = process.env;
  export const connectionSrt = "mongodb+srv://" + username + ":" + password + "@cluster0.pot5py3.mongodb.net/productDB?retryWrites=true&w=majority"