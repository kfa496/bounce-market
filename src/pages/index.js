import React from 'react'
import { LayoutStyled } from './styled'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Header from './component/Header'
import Footer from './component/Footer'
import UIkit from '../test/UIkit'
import Test from '../test'

import Home from './Home'
import Marketplace from './Marketplace'
import Brands from './Brands'
import BrandGoods from './BrandGoods'
import P2P from './P2P'
import Factory from './Factory'
import ListNFT from './ListNFT'

import MyInventory from './Myprofile/MyInventory'
import MyBrands from './Myprofile/MyBrands'
import BrandsByType from './Myprofile/MyBrands/BrandsByType'
import MyActivities from './Myprofile/MyActivities'
import MyP2P from './Myprofile/Point-2-Point'
import TransferStatusModal from '@components/Modal/TransferStatusModal'
import ModalMessage from '@components/Modal/ModalMessage'
import ErrorNotification from '@components/Modal/ErrorNotification'

export default function Index() {

    return (
        <BrowserRouter>
            <LayoutStyled>
                <ModalMessage />
                <ErrorNotification />
                <Header />
                <Route exact path='/test' component={Test} />
                <Route exact path='/UIkit' component={UIkit} />


                <Route exact path='/' render={() => { return <Redirect to='/Home' /> }} />
                <Route exact path='/Home' component={Home} />
                <Route exact path='/Marketplace' render={() => { return <Redirect to='/Marketplace/Images' /> }} />
                <Route exact path='/Marketplace/:type' component={Marketplace} />

                <Route exact path='/Brands' component={Brands} />
                <Route exact path='/Brands/:brandId/:type' component={BrandGoods} />
                <Route exact path='/BrandsGoods/' component={BrandGoods} />

                <Route exact path='/P2P' render={() => { return <Redirect to='/P2P/Requests' /> }} />
                <Route exact path='/P2P/:type' component={P2P} />
                <Route exact path='/Factory' component={Factory} />
                <Route exact path='/ListNFT' component={ListNFT} />

                <Route exact path='/MyInventory' component={MyInventory} />
                <Route exact path='/MyBrands' component={MyBrands} />
                <Route exact path='/MyBrands/:brandId/:type' component={BrandsByType} />
                <Route exact path='/MyActivities' component={MyActivities} />

                <Route exact path='/MyP2P' render={() => { return <Redirect to='/MyP2P/Requests' /> }} />
                <Route exact path='/MyP2P/:type' component={MyP2P} />

                <Footer />
                {/* ????????????????????? */}
                <TransferStatusModal />
            </LayoutStyled>
        </BrowserRouter>
    )
}
