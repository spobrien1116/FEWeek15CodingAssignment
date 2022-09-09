const DINOSAUR_ENDPOINT = 'https://630006689350a1e548e97a11.mockapi.io/Dinosaur';

class DinosaurAPI {
    get = async () => {
        try {
            const resp = await fetch(DINOSAUR_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log("There was an issue when calling the fetchDinosaurs function.", e);
        }
        
    }

    put = async (dinosaur) => {
        try {
            const resp = await fetch(`${DINOSAUR_ENDPOINT}/${dinosaur._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dinosaur)
            });
            return await resp.json();
        } catch(e) {
            console.log("There was an issue when calling the updateDinosaur function.", e);
        }
        
    }

    post = async (dinosaur) => {
        try {
            const resp = await fetch(`${DINOSAUR_ENDPOINT}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dinosaur)
            });
            return await resp.json();
        } catch(e) {
            console.log("There was an issue when calling the addNewDinosaur function.", e);
        }
    }
}

export const dinosaurAPI = new DinosaurAPI();