import useGenres from "@/hooks/useGenres";

const GenreGrid = () => {
    const {data} = useGenres();
    return (
    <div>
      {data.map((val) => (
        <li key={val.id}>{val.name}</li>
      ))}
    </div>
  )
}

export default GenreGrid
