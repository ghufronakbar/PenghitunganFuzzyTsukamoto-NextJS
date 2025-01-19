import userAuth from "@/middleware/userAuth";
import { historyDelete } from "@/services/calculate";

async function handler(req, res) {
    await historyDelete(req, res);
}

export default userAuth(handler);