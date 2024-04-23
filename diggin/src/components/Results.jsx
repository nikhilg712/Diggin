import React, {useState} from 'react'
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom'
import { useResultContext } from '../contexts/ResultContext'
import Loading from './Loading'
const Results = () => {
  const { results, getResults, isLoading, searchTerm, setSearchTerm } = useResultContext();
  const location = useLocation();
  if (isLoading) {
    return <Loading/>
  }

  console.log(location.pathname)
  switch (location.pathname) {
    case '/search':
      return 'SEARCH';  
    case '/images':
      return 'IMAGES';  
    case '/videos':
      return 'VIDEOS';  
    default:
      return 'ERROR';
  }
  
}

export default Results
