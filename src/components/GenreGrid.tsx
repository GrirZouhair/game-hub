import useGenres from "@/hooks/useGenres"

const GenreGrid = () => {
    const {genres} = useGenres();
    return (
    <div>
      {genres.map((val) => (
        <li key={val.id}>{val.name}</li>
      ))}
    </div>
  )
}

export default GenreGrid
