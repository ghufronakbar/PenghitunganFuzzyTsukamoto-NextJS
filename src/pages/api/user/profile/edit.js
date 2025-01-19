import { editProfile, } from "@/services/account";

async function handler(req, res) {
    await editProfile(req, res);
}

export default userAuth(handler);
