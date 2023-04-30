import db from './firestore-client';

const usersSnap = db.collection('users');

interface UserData {
  username: string;
  gp: string;
}

const createUser = async (username: string): Promise<UserData> => {
  await usersSnap.doc(username).create({ gp: '0' });
  const docRef = await usersSnap.doc(username).get();
  const docData = docRef.data();
  return {
    username: docRef.id,
    gp: docData!.gp
  };
};

const updateUser = async (
  username: string,
  gp: 'string'
): Promise<UserData> => {
  const userDoc = usersSnap.doc(username);
  let docRef = await userDoc.get();
  if (!docRef.exists) {
    await createUser(username);
    docRef = await userDoc.get();
  }
  const docData = docRef.data();
  await usersSnap.doc(username).update({ gp });
  return {
    username: docRef.id,
    gp: docData!.gp
  };
};

export default updateUser;