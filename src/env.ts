import {config} from "dotenv";


config();

// This namespace redefines one from @types/node to reflect values from .env
declare global {
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    interface ProcessEnv {
      NODE_ENV: "development" | "production" | "test" | "staging";

      // SERVER
      HOST: string;
      PORT: string;

      // DB
      REDIS_URL: string;
      POSTGRES_URL: string;

      // SESSION
      SESSION_SECRET_KEY: string;

      // AUTH
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
      GOOGLE_CALLBACK_URL: string;

      FACEBOOK_CLIENT_ID: string;
      FACEBOOK_CLIENT_SECRET: string;
      FACEBOOK_CALLBACK_URL: string;

      ONELOGIN_CLIENT_ID: string;
      ONELOGIN_CLIENT_SECRET: string;
      ONELOGIN_REDIRECT_URI: string;
      ONELOGIN_SUBDOMAIN: string;
      ONELOGIN_SCOPE: string;
    }
  }
}
