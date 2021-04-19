import React from 'react'
import Home from "../../src/screens/Home"
import { render } from '@testing-library/react-native'


it('should be able to search the movies', () => {
      const {getByPlaceholderText} = render(<Home />)

      expect(getByPlaceholderText('Search...')).toBeTruthy();
      // const test = 2 + 2;
      // expect(test).toEqual(4)
})

