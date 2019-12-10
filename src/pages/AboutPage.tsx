import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <h1>Information page</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam aspernatur nihil quis soluta laborum quae accusantium deserunt, cum sit repellat labore numquam mollitia temporibus sint porro beatae molestiae fugiat recusandae?</p>
      <button className="btn" onClick={() => history.push('/')}>Back to Todo list</button>
    </>
  )
}