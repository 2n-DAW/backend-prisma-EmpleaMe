import { Request, Response, NextFunction } from 'express';
import jwt, { VerifyErrors } from 'jsonwebtoken';

interface CustomRequest extends Request {
    userId?: string;
    userEmail?: string;
    userHashedPwd?: string;
}

const verifyJWT = (req: CustomRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization || req.headers.Authorization as string;

    console.log('NoOptional', authHeader);

    if (!authHeader?.startsWith('Token ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(
        token,
        process.env.JWT_SECRET as string,
        (err: VerifyErrors | null, decoded: any) => {
            if (err) {
                return res.status(403).json({ message: 'Forbidden' });
            }
            req.userId = decoded.user.id;
            req.userEmail = decoded.user.email;
            req.userHashedPwd = decoded.user.password;

            next();
        }
    );
};

export default verifyJWT;
