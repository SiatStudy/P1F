export const isDatabaseExisted = (databasesName) => {
    return new Promise((res, rej) => {
        const req = window.indexedDB.open(databasesName);

        req.onsuccess = ({ target }) => {
            const db = target.result;
            db.close();
            res(true);
        };

        req.onerror = ({ target }) => {
            res(false);
        };
    });
};