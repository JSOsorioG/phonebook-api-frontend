
export const Filter = (props) => {

    const { search, setSearch, persons} = props

    return (
        <div>
            <h2>Search</h2>
            <input 
                type="search"
                onChange={(event) => setSearch(event.target.value)}
                value={search}
            />
        </div>
    )

}
