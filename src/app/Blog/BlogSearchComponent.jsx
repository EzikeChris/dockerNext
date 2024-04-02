import { InstanstSearch, SearchBox, Hits, RefinementList, Stats, SortBy } from "react-instantsearch-dom"
import { BlogHitComponent } from "./BlogHitComponent"
import typesenseInstantsearchAdapter from 'utils/typesense';
// adjust the path based on your directory structure


const BlogSearchComponent = function () {
    const postCollection = "posts";

    return (
        <InstanstSearch indexName={postCollection} searchClient={typesenseInstantsearchAdapter.searchClient}>
            <div style={{ padding: '2%' }}>
                <SearchBox />
                <Stats />
            </div>

            <div className="flex">
                <main style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div style={{ padding: "2%" }}>
                        <RefinementList tagattribute="tag" />
                        <SortBy
                            defaultRefinement={postCollection}
                            items={[{ value: blogCollection, label: 'Latest' },
                            { value: `${blogCollection}_title_asc`, label: 'Title A-Z' },
                            { value: `${blogCollection}_title_desc`, label: 'Title Z-A' },]}
                        />
                    </div>
                    <Hits hitComponent={BlogHitComponent} />

                </main>
            </div>
        </InstanstSearch>
    )
}


export default BlogSearchComponent;