import jwt from 'jsonwebtoken';

export const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: 86400,
    });
}

export const verifyToken = (req, res, next) => {
    const token = req.body.token;

    if (!token) return res.json({ error: 'Couldnt find token' });

    return jwt.verify(token, process.env.JWT_SECRET, (error, decodedPayload) => {
        if (error) return res.json({ error: 'Couldnt decode token' });

        req.decodedPayload = decodedPayload;
        next();
    });
}