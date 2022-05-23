import React from 'react'
import tw from "tailwind-styled-components"
import Preview from './Preview'

const Collections = ({collections}) => {
  return (
    <CollectionsConatiner>
         {
                collections.map( (collection) => (
                    <Preview key={collection.id} collection={collection} />
                ))
            }
    </CollectionsConatiner>
  )
}

export default Collections

const CollectionsConatiner = tw.div`
    px-3 mt-20  grid grid-cols-2  
    xl:grid-cols-4 lg:grid-cols-3
`;