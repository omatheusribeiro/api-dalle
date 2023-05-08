const API_KEY = "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";
const submitIcon = document.querySelector("#submit-icon");
const inputElement = document.querySelector("input");

const getImages = () => {
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            'Content-Type': "application/json"
        },
        body: {
            "prompt": inputElement.value,
            "n": 4,
            "size": "1024x1024"
        }
    }

    try{
        const response = fetch('https://api.openai.com/v1/images/generations', options);
        const data = response.json();
        console.log(data);
    }
    catch (error) {
        console.error(error);
    }
}

submitIcon.addEventListener('click', getImages);