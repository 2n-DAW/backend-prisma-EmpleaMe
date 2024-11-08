import { Request } from "express-jwt";

export interface CustomRequest extends Request {
    userId?: string;
    userEmail?: string;
    userHashedPwd?: string;
    loggedin?: boolean;
}
