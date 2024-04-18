import { Environment } from "@/types";

export const config: Environment = {
  PUBLIC_SERVER_URL: process.env.PUBLIC_SERVER_URL || ''
};
