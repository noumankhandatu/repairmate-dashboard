import React, {useState, useEffect } from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import {Col, Row, Card } from 'react-bootstrap';
import Seo from "../../../shared/layout-components/seo/seo"
import dynamic from 'next/dynamic';
// import Calendars from '../../../shared/data/advanceui/calendar';
const Calendars = dynamic(()=>import('../../../shared/data/advanceui/calendar'), { ssr: false })


const Calendar = () => {

  return (
    <>
    <Seo title="Calendar"/>
    <PageHeader title="Calendar" item="Advanced UI" active_item="Calendar"/>
      {/* <!-- Row --> */}
        <Calendars/>
      {/* <!-- End Row --> */}
    </>
  )
}
Calendar.layout = "Contentlayout"

export default Calendar