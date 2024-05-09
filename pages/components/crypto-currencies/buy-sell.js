import React from 'react'
import dynamic from 'next/dynamic';
import PageHeader from '../../../shared/layout-components/page-header/page-header'
const Buyselldashbord = dynamic(() => import('../../../shared/data/crypto-currencies/buyselldashbord'), { ssr: false });
import Seo from '../../../shared/layout-components/seo/seo';

const Buysell = () => {
  return (
    <>
    <Seo title={"Buy sell"}/>

    <PageHeader title="Crypto Currencies" item="Crypto Currencies" active_item="BuySell"/>
    
    <Buyselldashbord/>
    </>
  )
}

Buysell.layout = "Contentlayout"


export default Buysell