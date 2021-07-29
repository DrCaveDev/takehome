// Various constants - if this were real I would extract these into
// a config - especially the secrets. These could be injected during CI/CD
// Hardcoded here for time
const API_URL = 'https://api.simplyrets.com/properties';
const API_KEY = 'simplyrets';
const API_SECRET = 'simplyrets';
const CACHE_KEY = 'properties';

// Create basic auth header
let headers = new Headers();
headers.set('Authorization', 'Basic ' + Buffer.from(API_KEY + ':' + API_SECRET).toString('base64'));

class PropertyService {

    getAllProperties() {
        // For this implementation if the cache exists we always use it
        // For a real implementation would implement some sort of expiration/refresh capability
        // or just use the cached while the api is loading depending on business requirements
        let cachedProperties = localStorage.getItem(CACHE_KEY);

        // If we didn't find the properties in the local storage retrieve from api
        if (!cachedProperties) {
            return fetch(API_URL, {
                headers: headers
            })
                .then(response => response.json())
                .then(data => {
                    // map the data from the api into a more easily workable object
                    // also discards what we don't need
                    return data.map(item => {
                        let property = item.property;
                        property.id = item.mlsId;
                        property.address = item.address;
                        property.listPrice = item.listPrice;
                        property.listDate = item.listDate;
                        property.photo = item.photos[0];
                        return property;
                    });
                })
                .then(data => {
                    // Cache properties
                    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
                    return data;
                });
        }

        // If we are using the cached we need to wrap in order to use
        // .then() when calling
        return Promise.resolve(JSON.parse(cachedProperties));
    }
}

// Avoid needing to new up a service in components
const service = new PropertyService();
export default service;