import { CreateUserPrams, SignInParams } from "@/type";
import { Account, Avatars, Client, Databases, ID, Query, Storage, TablesDB } from "react-native-appwrite";

export const config = {
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!,
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!,
    platform: "com.food.delivery",
    bucketId: "6963a2e6002cf8ca48ac",
    databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!,
    userTableId: process.env.EXPO_PUBLIC_APPWRITE_USER_TABLE_ID!,
    categoriesTableId: process.env.EXPO_PUBLIC_APPWRITE_CATEGORIES_TABLE_ID!,
    menuTableId: process.env.EXPO_PUBLIC_APPWRITE_MENU_TABLE_ID!,
    customizationsTableId: process.env.EXPO_PUBLIC_APPWRITE_CUSTOMIZATIONS_TABLE_ID!,
    menuCustomizationsTableId: process.env.EXPO_PUBLIC_APPWRITE_MENU_CUSTOMIZATIONS_TABLE_ID!
}

export const client = new Client();

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform)

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);
export const tables = new TablesDB(client);
export const storage = new Storage(client);

export const createUser = async ({ email, password, name }: CreateUserPrams) => {
    try {
        const newAccount = await account.create({
            userId: ID.unique(),
            email: email,
            password: password,
            name: name,
        })
        if (!newAccount) throw Error;
        await signInSession({ email, password });

        const avatarUrl = avatars.getInitialsURL(name);

        const newUser = await tables.createRow({
            databaseId: config.databaseId,
            tableId: config.userTableId,
            rowId: ID.unique(),
            data: {
                accountId: newAccount.$id,
                email, name,
                avatar: avatarUrl
            },
        });

        return newUser;

    } catch (error) {
        throw new Error(error as string);
    }
}

export const signInSession = async ({ email, password }: SignInParams) => {
    try {
        const session = await account.createEmailPasswordSession({
            email, password
        });

        return session;
    } catch (e) {
        throw new Error(e as string);
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();
        if (!currentAccount) throw Error;

        const currentUser = await tables.listRows({
            databaseId: config.databaseId,
            tableId: config.userTableId,
            queries: [Query.equal("accountId", currentAccount.$id)]
        });
        if (!currentUser) throw Error;

        return currentUser.rows[0];

    } catch (e) {
        throw new Error(e as string);
    }
}