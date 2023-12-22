export const loadJsonFromFile = (file_path) => {
    return fetch(file_path)
        .then(response => response.json()); 
}

