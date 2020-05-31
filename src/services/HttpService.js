import { create } from "axios";

import config from "../config";

const HttpService = create({
  baseURL: config.ROOT_URL,
});

export default HttpService;
