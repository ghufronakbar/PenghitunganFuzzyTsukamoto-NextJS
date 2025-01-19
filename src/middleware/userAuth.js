import jwt from 'jsonwebtoken';

export default function userAuth(handler) {
    return async (req, res) => {
        const { authorization } = req.headers;

        if (!authorization) {
            return res.status(401).send({ auth: false, message: "Login required" });
        }

        try {
            const token = authorization.split(' ')[1];

            if (!token) {
                return res.status(401).send({ auth: false, message: "Login required" });
            }

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            if (!decoded) {
                return res.status(401).send({ auth: false, message: "Login required" });
            }
            if (!decoded.id_user) {
                return res.status(401).send({ auth: false, message: "Login required" });
            }

            req.decoded = decoded;
            return handler(req, res);
        } catch (error) {
            return res.status(401).send({ auth: false, message: "Login required" });
        }
    };
}
