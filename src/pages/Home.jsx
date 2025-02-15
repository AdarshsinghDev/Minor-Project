import React from 'react'
import Hero from "../layouts/Hero/Hero";
import Discover from "../layouts/Discover/Discover";
import SuggestRecipe from '../layouts/SuggestRecipe/SuggestRecipe';

const Home = () => {
  return (
    <>
        <Hero />
        <SuggestRecipe />
        <Discover />
    </>
  )
}

export default Home