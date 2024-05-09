import React, { useEffect } from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import Seo from '../../../shared/layout-components/seo/seo'
import { useRouter } from 'next/router'
const SwitchercomponentPage = dynamic(() => import('../../../shared/data/switcherdata/switcher/switcher-page'), { ssr: false });
import dynamic from 'next/dynamic';

const SwitcherPage = () => {
    const router = useRouter()
    
  return (
    <div>
      <Seo title="Switcher Page"/>
    <PageHeader title="Switcher Page" item="Pages" active_item="Switcher Page"/>
    <SwitchercomponentPage/>
    </div>
  )
}
SwitcherPage.layout = "Switcherlayout"



export default SwitcherPage