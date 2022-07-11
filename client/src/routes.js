import {ADMIN_ROUTE, LOGIN_ROUTE, BASKET_ROUTE, SHOP_ROUTE, REGISTRATION_ROUTE, DEVICE_ROUTE} from './utils/consts'
import Auth from './pages/Auth'
import Admin from './pages/Admin'
import Basket from './pages/Basket'
import Shop from './pages/Shop'
import DevicePage from './pages/DevicePage'

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <Admin/>
    },
    {
        path: BASKET_ROUTE,
        element: <Basket/>
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        element: <Auth/>
    },
    {
        path: SHOP_ROUTE,
        element: <Shop/>
    },
    {
        path: REGISTRATION_ROUTE,
        element: <Auth/>
    },
    {
        path: DEVICE_ROUTE + '/:id',
        element: <DevicePage/>
    }
]