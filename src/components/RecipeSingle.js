import React from "react"
import Collapsible from "react-collapsible"
import { Flex, Box } from "rebass"
import { RecipePanel } from "../styles"

const RecipeSingle = () => {
  return (
    <Flex justify="center">
      <Box>
        <RecipePanel>
          <Collapsible trigger="Start here">
            <p>
              This is the collapsible content. It can be any element or React
              component you like.
            </p>
          </Collapsible>
        </RecipePanel>
      </Box>
    </Flex>
  )
}

export default RecipeSingle
