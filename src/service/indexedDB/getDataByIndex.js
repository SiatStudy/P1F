export const getDataByIndex = (db, objectStoreName, indexName, value) => {
    const transaction = db.transaction(objectStoreName, "readonly");
    const objectStore = transaction.objectStore(objectStoreName);
    const index = objectStore.index(indexName);

    const req = index.get(value);

    return new Promise((res, rej) => {
        req.onsuccess = (event) => {
            const data = event.target.result;
            res(data);
        };

        req.onerror = (event) => {
            rej(false);
        };
    });
}