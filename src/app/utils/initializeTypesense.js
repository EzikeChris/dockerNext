const Typesense = require("typesense");


const Client = new Typesense({
    nodes: [
        {
            host: 'localhost',
            port: '8108',
            protocol: 'http',
        }
    ],
    apiKey: 'YourApiKeyHere',
    connectionTimeoutSeconds: 2

});


async function createCollection() {
    const collectionSchema = {
        name: "posts",
        field: [
            { name: "title", type: "string" },
            { name: "title", type: "string" },
            { name: "title", type: "string" },
            { name: "title", type: "string" },
            { name: "title", type: "string" }
        ],
        default_sorting_field: "published_date"
    }

    return await Client.collection().create(collectionSchema);
}

async function insertData() {
    const samplePost = {
        id: "1",
        title: "Integrating Typesense with Next.js",
        description: "A deep dive into integrating Typesense search engine with Next.js using Docker.",
        author: "John Doe",
        tags: ["Typesense", "Next.js", "Docker"],
        published_date: Math.floor(new Date("2023-08-24").getTime() / 1000)  // Convert to Unix timestamp. In Typesense, only integer or float fields can be used as sorting fields.
    };

    return await client.collections("posts").documents().create(samplePost);
}

async function main() {
    await createCollection();
    await insertData();
    console.log("Typesense data initialization complete!");
}

main();