import {render, screen} from '@testing-library/react'
import Error from './Error'

describe('Error Component', () => {
    test('the always visible error message', () => { 
        render(<Error />)

        expect(screen.getByText('enter a valid location.', {exact: false}))
     })
})