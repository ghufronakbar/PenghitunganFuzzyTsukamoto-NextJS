import userAuth from "@/middleware/userAuth";
import { historyCalculateId } from "@/services/calculate";

async function handler(req, res) {
    console.log("hitted")    
    console.log(req.params)    
    await historyCalculateId(req, res);
}

export default userAuth(handler);