import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { getToken } from 'redux/auth/authSelectors'

function NoticesCategoriesNavigation() {
    const userToken = useSelector(getToken);

  return (
      <>
          <nav>
              <ul>
                  <li>
                    <NavLink to='/notices/sell'>sell</NavLink>
                  </li>
                  <li>
                    <NavLink to='/notices/lost-found'>lost/found</NavLink>
                  </li>
                  <li>
                    <NavLink to='/notices/for-free'>in good hands</NavLink>
                  </li>

                  {userToken && 
                      <>
                      <li>
                        <NavLink to='/notices/favorite'>favorite ads</NavLink>
                      </li>
                      <li>
                        <NavLink to='/notices/owner'>my ads</NavLink>
                      </li>
                      </>}
              </ul>
      </nav>
      </>
  )
}

export default NoticesCategoriesNavigation