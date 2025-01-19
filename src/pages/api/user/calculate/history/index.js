import userAuth from "@/middleware/userAuth";
import { historyCalculate } from "@/services/calculate";

async function handler(req, res) {
    await historyCalculate(req, res);
}

export default userAuth(handler);