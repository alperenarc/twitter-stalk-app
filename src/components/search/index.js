import React from 'react'
import { useSelector } from 'react-redux'
import Login from '../login'
import SweetAlert from 'sweetalert2-react'

function Search() {
    const isLogged = useSelector(state => state.isLogged)
    return (
        <div>
            {
                <div>Hello From Search</div>

                /*<div>
                    <Login />
                    <SweetAlert
                        show={!isLogged}
                        title="Giriş Yapınız !"
                        text="Bu sayfaya erişmek için önce giriş yapmanız gerekmektedir."
                    />
                </div>*/


            }
        </div>
    );
}

export default Search