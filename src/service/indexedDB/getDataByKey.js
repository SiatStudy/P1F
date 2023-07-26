export const getDataByKey = (db, objectStoreName, key) => {
    const transaction = db.transaction(objectStoreName, "readonly");
    const objectStore = transaction.objectStore(objectStoreName);

    const req = objectStore.get(key);

    return new Promise((res, rej) => {
        req.onsuccess = ({ target }) => {
            res(target.result);
        };

        req.onerror = ({ target }) => {
            rej(false);
        };
    });
};