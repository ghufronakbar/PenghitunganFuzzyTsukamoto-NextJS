import userAuth from "@/middleware/userAuth";
import { profile } from "@/services/account";


async function handler(req, res) {
    await profile(req, res);
}

export default userAuth(handler);