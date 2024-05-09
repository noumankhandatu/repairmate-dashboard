import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { Card, Col, Row } from "react-bootstrap";
import Seo from '../../../shared/layout-components/seo/seo';
import {Pie, Doughnut} from "react-chartjs-2";
import * as chart from "../../../shared/data/chart/chat";

const Piacharts = () => {
  return (
    <div>
        <Seo title="piacharts"/>

      <PageHeader title="piacharts" item="Charts" active_item="piacharts"/>

          {/* <!-ARCardow --> */}
    <div className="row row-sm">
      <Col md={12} lg={6}>
        <Card className="custom-card overflow-hidden">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Donut Chart</h6>
              <p className="text-muted  card-sub-title">
                Below are an example of data in a donut chart.
              </p>
            </div>
            <div className="chartjs-wrapper-demo">
              <Doughnut
                data={chart.dchart}
                className="chartjs-render-monitor w-auto ht-250 m-auto"
                height="120"
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col md={12} lg={6}>
        <Card className="custom-card overflow-hidden">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Pie Chart</h6>
              <p className="text-muted  card-sub-title">
                Below are an example of data in a pie chart.
              </p>
            </div>
            <div className="chartjs-wrapper-demo">
              <Pie
                data={chart.piechart}
                className="chartjs-render-monitor w-auto ht-250 m-auto "
                height="120"
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </div>
    {/* <!-- End Row --> */}

      </div>
  )
}
Piacharts.layout = "Contentlayout"

export default Piacharts