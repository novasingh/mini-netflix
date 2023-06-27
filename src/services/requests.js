import axios from "axios";
import { BASE_URL, ENDPOINTS } from "./constants";
import { errorHandler } from "./utils";

const makeRequest = async (options) => {
  return new Promise(async (resolve, reject) => {
    try {
      const defaultOptions = {
        baseURL: BASE_URL,
        headers: {
          "Content-Type": "",
        },
        timeout: 60000,
      };

      const client = axios.create(defaultOptions);

      return client(options)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => {
          errorHandler(error.response ? error.response : { status: 500 });
          return reject(
            error.response && error.response.data.error
              ? error.response.data.error
              : "Something went wrong"
          );
        });
    } catch (err) {
      errorHandler({ status: 500 });
      reject(err.message);
    }
  });
};

export const GET = ({ url, params = {}, data = {} }) =>
  makeRequest({ url, method: "get", params, data });

export const POST = ({ url, params = {},  data = {} }) =>
  makeRequest({ url, method: "post", params, data });

export const PUT = ({ url, params = {}, data = {} }) =>
  makeRequest({ url, method: "put", params, data });

export const PATCH = ({ url, params = {}, data = {} }) =>
  makeRequest({ url, method: "patch", params, data });

export const DELETE = ({ url, params = {}, data = {} }) =>
  makeRequest({ url, method: "delete", params, data });

export default ENDPOINTS;
