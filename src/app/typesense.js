import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";


const typesenseInstantSearchAdapter = new TypesenseInstantSearchAdapter({
    server: {
        apiKey: "abcd", // Be sure to use an API key that only allows search operations
        nodes: [
            {
                host: "localhost",
                path: "", // Optional. Example: If you have your typesense mounted in localhost:8108/typesense, path should be equal to '/typesense'
                port: "8108",
                protocol: "http",
            },
        ],
        cacheSearchResultsForSeconds: 2 * 60, // Cache search results from server. Defaults to 2 minutes. Set to 0 to disable caching.
    },
    // The following parameters are directly passed to Typesense's search API endpoint.
    //  So you can pass any parameters supported by the search endpoint below.
    //  query_by is required.

    // https://webcache.googleusercontent.com/search?q=cache:https://medium.com/@calebpr/integrate-typesense-seamlessly-into-your-next-js-app-with-docker-compose-e925a4906f9f
    additionalSearchParameters: {
        query_by: "title"

    },

})




export default typesenseInstantSearchAdapter;