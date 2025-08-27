import { db } from "..";
import { users } from "../schema";
import { eq } from "drizzle-orm";

export async function createUser(name: string) {
    console.log("Creating user with name:", name);
    try {
        const [result] = await db.insert(users).values({ name: name }).returning();
        return result;
    } catch (err) {
        console.error("Error in createUser:", err);
        throw err;
    }
}
export async function getUserByName(name: string) {
    console.log("Getting user by name:", name);
    const [result] = await db.select().from(users).where(eq(users.name, name));
    return result;
}


