import { editPassword } from "@/services/account";

async function handler(req, res) {
    await editPassword(req, res);
}

export default userAuth(handler);

