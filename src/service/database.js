import { database } from "./firebase";
import { ref, set, child, get, remove } from "firebase/database";

class Database {
  writeData(userId, title) {
    set(ref(database, `${userId}/todos/${title}`), {
      title: title,
      status: 'Unfulfilled',
      display: true,
    });
  }
  editData(userId, title, status, display) {
    set(ref(database, `${userId}/todos/${title}`), {
      title: title,
      status: status,
      display: display,
    });
  }
  async listenData(userId) {
    const dbRef = ref(database);
    const result = await get(child(dbRef, `${userId}/todos`)).then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return Object;
      }
    });
    return result;
  }
  removeData(userId, title) {
    remove(ref(database, `${userId}/todos/${title}`));
  }
}

export default Database;