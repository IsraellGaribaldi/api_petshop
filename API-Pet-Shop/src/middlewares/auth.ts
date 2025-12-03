import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const header = req.headers.authorization;

    if (!header) return res.status(401).json({ message: "Token não enviado." });

    const token = header.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        req.user = decoded; // precisa do express.d.ts
        next();
    } catch (err) {
        return res.status(403).json({ message: "Token inválido" });
    }
}
