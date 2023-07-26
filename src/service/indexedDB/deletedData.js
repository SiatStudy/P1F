export const deletedData = (db, objectStoreName, key) => {
    const transaction = db.transaction(objectStoreName, "readwrite");
    const objectStore = transaction.objectStore(objectStoreName);

    const req = objectStore.delete(key);

    return new Promise((res, rej) => {
        req.onsuccess = ({ target }) => {
            res(target.result);
        };

        req.onerror = ({ target }) => {
            rej("[ERROR] Failed to delete Data");
        };
    });
};