import userAuth from "@/middleware/userAuth";
import { calculate } from "@/services/calculate";


async function handler(req, res) {
    await calculate(req, res);
}

export default userAuth(handler);