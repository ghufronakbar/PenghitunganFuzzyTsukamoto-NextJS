import { register } from "@/services/account";

export default async function handler(req, res) {
    await register(req, res);
}
