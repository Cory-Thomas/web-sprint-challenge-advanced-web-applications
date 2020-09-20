import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const getColors = () => {
  axiosWithAuth()
		.get( '/api/colors' )
      .then( response => setColorList( response.data ))
      .catch( error => console.log( 'test error ', error ))
};

jest.mock( getColors() )

const mockColors = [
  {
		color: "aliceblue",
		code: {
			hex: "#f0f8ff",
		},
		id: 1,
	},
	{
		color: "limegreen",
		code: {
			hex: "#99ddbc",
		},
		id: 2,
	}
]

test( "Fetches data and renders the bubbles", async () => {
  const { rerender } = render( <BubblePage colors={ [] } /> );

  rerender( <BubblePage missions={ mockColors } /> );

  expect( await screen.findByText( /bubbles/i )).toBeInTheDocument(); // confirmed by using .not to confirm this fails
});
