import { render, screen } from '@testing-library/react'
import { HeaderComponent } from '.'

import Notifications from './Notifications'
import Profile from './Profile'

/* mock to use Chacka ui theme provider  */

jest.mock('@chakra-ui/react', () => {
  const ui = jest.requireActual('@chakra-ui/react')
  return {
    ...ui,
    useBreakpointValue() {
      return true
    },
  }
})

describe('HeaderComponent shows correctly', () => {
  describe('profile shows correctly', () => {
    it('image container shows in document', () => {
      render(<Profile showProfileData />)

      expect(screen.getByText('BF')).toHaveClass('chakra-avatar__initials')
    })
    it('image container shows when showProfile props is false', () => {
      render(<Profile showProfileData={false} />)
      expect(screen.getByText('BF')).toBeInTheDocument()
    })

    it("username and email  don't shows when showProfile props is false ", () => {
      const { debug } = render(<Profile showProfileData={false} />)
      debug()
      expect(screen.queryByText('Bruno Fay')).not.toBeInTheDocument()
      expect(
        screen.queryByText('brunofay1@hotmail.com'),
      ).not.toBeInTheDocument()
    })
  })

  describe('notifications shows correctly', () => {
    it('has two icons in screen', () => {
      render(<Notifications />)
      expect(screen.queryAllByTestId('icon').length).toBe(2)
    })
  })

  describe('HeaderComponent if components shows correctly', () => {
    beforeEach(() => {
      render(<HeaderComponent />)
    })

    it('username and email shows correctly', () => {
      expect(screen.getByText('Bruno Fay')).toBeInTheDocument()
      expect(screen.getByText('brunofay1@hotmail.com')).toBeInTheDocument()
    })

    it('has two icons in screen', () => {
      expect(screen.queryAllByTestId('icon').length).toBe(2)
    })

    it('has logo name DashGo', () => {
      expect(screen.queryByText(/Dash/i)).toBeInTheDocument()
    })
  })
})
