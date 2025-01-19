import { login } from "@/services/account";

export default async function handler(req, res) {
    await login(req, res);
}
