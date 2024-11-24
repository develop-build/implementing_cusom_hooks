import React from 'react'
import useFetch from '../customHooks/DataApiFetchingHook/useFetch'


const DataFetchImpl = () => {
  
  /* Implementing useFetch */
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos');
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      <h1>ToDos</h1>
      <ul>
        {
          data.map((todo) => {
            return <li key={todo.id}>{ todo.title} </li>
          })
        }
      </ul>
    </div>
  )
  /* Done implementing useFetch */
}

export default DataFetchImpl