import conf from "../config/config.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client(); //properties
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  //create account method

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        //call login method

        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  //login method

  async login({ email, password }) {
    try {
      return await this.createEmailSession({ email, password });
    } catch (error) {
      throw error;
    }
  }

  //to check/verify  whether i am loggedin or not

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }

    //in case of any  error
    return null;
  }

  //   logout method

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService(); //object
export default authService; //export object
