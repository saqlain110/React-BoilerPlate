import Config from "../config";

export const HTTP_METHODS = {
  GET: "get",
  POST: "post",
  PUT: "put",
  PATCH: "patch",
  DELETE: "delete",
};

export const CONTENT_TYPE = {
  JSON: "application/json",
  FORM_DATA: "multipart/form-data",
};

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  SERVER_ERROR: 500,
  PAYLOAD_TOO_LARGE: 413,
  INVALID_CREDENTIALS: 403,
  NOT_FOUND: 404,
};

export const PAGE_SIZE = 10;

export const STALE_TIME = 60 * 1000;

export const CACHE_TIME = 1000 * 60 * 60 * 24;

export const BASE_URL = Config.env().BASE_URL;

export const API_CONSTANTS = {
  AUTH: {
    login: "/auth/login",
  },
  USERS: {
    base: "/users",
    me: "/users/me",
    status: "/users/status",
  },
  COMPANY: {
    base: "/company",
    register: "/company/register",
    companyRules: "/config/update-company-rules/:id",
    userRules: "/config/update-company-user-rules/:id",
  },
  INTEGRATION: {
    base: "/integration",
    register: "/integration/register",
    validate: "/integration/skinive/validate",
    predict: "/integration/skinive/predict",
  },
  SESSION: {
    base: "/user-session-history",
    admin: "/user-session-history/admin",
    filterKeys: ['integration', 'userId', 'companyId', 'sessionDate', 'page', 'limit', 'searchKey']
  },
};