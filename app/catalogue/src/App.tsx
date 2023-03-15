import { useGetBooksQuery } from './store/browse/entities';

function App() {

  const {data: books, isLoading} = useGetBooksQuery({});
  
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <ul>
        {books?.map(({ID, author, title}) => {
          return <li key={ID}>{author} - {title}</li>
        })}
      </ul>
    </div>
  )
}

export default App
