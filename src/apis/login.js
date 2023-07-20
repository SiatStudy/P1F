import axios from 'axios';

async const loginUser = ({ postData }) => {
    try {
        const req = await axios.post('/login', postData);
    } catch (err) {
        console.error(err);
    }

    return req.result.sectionId;
}

