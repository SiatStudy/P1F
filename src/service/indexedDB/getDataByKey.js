export const getDataByKey = (key) => {
    return new Promise((res, rej) => {
        const req = indexedDB.open(process.env.PUBLIC_INDEXED_DB_NAME, process.env.PUBLIC_INDEXED_DB_VERSION);

        req.onerror = (event) => {
            rej('[ERROR] Failed to open the database');
        };

        req.onsuccess = ({ target }) => {
            const db = target.result;

            const transaction = db.transaction(key, 'readonly');
            const objectStore = transaction.objectStore(key);
            const req = objectStore.getAll(key);

            req.onsuccess = ({ target }) => {
                res(target.result);
            };

            req.onerror = ({ target }) => {
                rej(false);
            };
        };
    });
};