import { Account, Client, ID, Avatars, Databases} from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.chatsphere',
    projectId: '66defe67000751d20b8b',
    databaseId: '66df00390020b5e0548f',
    userCollectionId: '66df005e00142568ecb6',
    videoCollectionId: '66df00900029a01e8bdf',
    storageId: '66df021600381839ff1f',
}

const {
    endpoint,
    platform,
    projectId,
    databaseId,
    userCollectionId,
    videoCollectionId,
    storageId,
 } = config;


const client = new Client();

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(config.platform)


const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export async function createUser(email, password, username) {
    try{
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )
    if(!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);
    
    await signIn(email, password);

    const newUser = await databases.createDocument(
        config.databaseId,
        config.userCollectionId,
        ID.unique(),
     {
        accountId: newAccount.$id,
        email: email,
        username: username,
        avatar: avatarUrl,
     }    
    );

    return newUser;
    }catch(error) {
        console.log(error);
        throw new Error(error)
    }
}

export const signIn = async (email, password) => {
    try {
      await account.deleteSession("current");
      const session = await account.createEmailPasswordSession(email, password);
      return session;
    } catch (error) {
      throw new Error(error);
    }
  };

  export const getAllPosts = async () => {
    try {
        const posts = await databases.listDocuments(
            databaseId,
            videoCollectionId,
        )
        return posts.documents;
    } catch (error) {
        throw new Error(error); 
    }
  }
  

 
  

  
 