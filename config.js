const env = process.env;

// export const nodeEnv = process.NODE_ENV || "development";

// export const logStars = (message) => {
//   console.log("***********");
//   console.log(message);

//   console.log("***********");
// };

export default {
  port: env.PORT || 8080,
  hostname: env.HOST || "0.0.0.0",
  get serverUrl() {
    return `http://${this.hostname}:${this.port}`;
  },
};
