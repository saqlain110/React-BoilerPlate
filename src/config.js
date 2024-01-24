var Config = {
  ENVIRONMENT: "DEVELOPMENT", //current selected environment
  ENVIRONMENTS: {
    DEVELOPMENT: {
      BASE_URL: "",
      APP_NAME: "BHealthy Web App",
    },
    STAGING: {
      BASE_URL: "",
      APP_NAME: "BHealthy Web App",
    },
    PRODUCTION: {
      BASE_URL: "",
      APP_NAME: "BHealthy Web App",
    },
  },
};
Config.env = () => {
  return Config.ENVIRONMENTS[Config.ENVIRONMENT];
};
export default Config;
