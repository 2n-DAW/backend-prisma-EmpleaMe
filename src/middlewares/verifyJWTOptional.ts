import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface CustomRequest extends Request {
    loggedin?: boolean;
    userId?: string;
    userEmail?: string;
    userHashedPwd?: string;
}

const verifyJWTOptional = (req: CustomRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;


    if (!authHeader || typeof authHeader !== 'string' || !authHeader.startsWith('Token ') || !authHeader.split(' ')[1].length) {
        req.loggedin = false;
        return next();
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET as string,
        (err: jwt.VerifyErrors | null, decoded: any) => {
            if (err) {
                return res.status(403).json({ message: 'Forbidden' });
            }
            req.loggedin = true;
            req.userId = decoded.user.id;
            req.userEmail = decoded.user.email;
            req.userHashedPwd = decoded.user.password;
            next();
        }
    );
};

export default verifyJWTOptional;
