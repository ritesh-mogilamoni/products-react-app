import { useState } from "react"

function Search() {
  const [search, setSearch] = useState("")

  const changeSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <input
        onChange={changeSearch}
        type="text"
        placeholder="search here"
        className="border-2"
      />
      {
        
      }
    </div>
  )
}

export default Search