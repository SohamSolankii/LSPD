import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Dashboard from './Header/Dashboard'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Routes,
    createRoutesFromElements,
} from 'react-router-dom'
import Login from './components/Header/Login.jsx'
import Register from './components/Header/Register.jsx'
import Dashboard from './components/Header/Dashboard.jsx'
import News from './components/News.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="/" element={<Dashboard />} />,
            <Route path="/login" element={<Login />} />,
            <Route path="/News" element={<News />} />,
            <Route path="/register" element={<Register />} />
        </Route>,
    ),
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)

// this is for the learning perpose
// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: (
//             <Navbar />
//         ),
//     },
//     {
//         path: '/test',
//         element: (
// 			<Test />
// 		),
//     },
// ])
