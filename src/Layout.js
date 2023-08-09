import React from 'react'
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import useWindowSize from "./hooks/useWindowSize";


const { width } = useWindowSize;
const Layout = ({ search, setSearch }) => {
  return (
    <div className="App">
    <Header title="My Personal Blog" width={width}/>
    <Nav search={search} setSearch={setSearch} />
    <Outlet />
    <Footer />

    </div>
  )
}

export default Layout