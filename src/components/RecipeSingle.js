import React from "react"
import Collapsible from "react-collapsible"
import { Flex, Box } from "rebass"
import { RecipePanel, RedButton, WhiteButton } from "../styles"

const RecipeSingle = () => {
  return (
    <Flex justify="center">
      <Box>
        <RecipePanel>
          <Collapsible trigger="Start here">
            <h2>Ingredients</h2>
            <p>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
            <WhiteButton>Edit</WhiteButton>&nbsp;
            <RedButton>Delete</RedButton>
            <br />
          </Collapsible>
        </RecipePanel>
      </Box>
    </Flex>
  )
}

export default RecipeSingle
