import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import {Card, Col, Row } from 'react-bootstrap';
import ReactEcharts from 'echarts-for-react';
import * as echarts from '../../../shared/data/chart/echarts';
import Seo from '../../../shared/layout-components/seo/seo';

const Echart = () => {
  return (
    <div>
        <Seo title="Echart"/>

      <PageHeader title="Echart" item="Charts" active_item="Echart"/>
      
      {/* <!-- Row --> */}
		<Row className=" row-sm">
			<Col md={12} lg={6} >
				<Card className=" custom-card overflow-hidden">
					<Card.Header>
						<h6 className="main-content-label mb-1">Line Chart</h6>
						<p className="text-muted  card-sub-title">Below is the basic Bar chart example.</p>
					</Card.Header>
					<Card.Body>
						<div>
							<ReactEcharts className="chartsh" option={echarts.echart2.option} series={echarts.echart2.series} />
						</div>
					</Card.Body>
				</Card>
			</Col>
			<Col md={12} lg={6} >
				<Card className=" custom-card overflow-hidden">
					<Card.Header>
						<h6 className="main-content-label mb-1">Combination line & Bar Chart</h6>
						<p className="text-muted  card-sub-title">Below is the basic combination line & bar chart example.</p>
					</Card.Header>
					<Card.Body>
						<div>
							<ReactEcharts id="echart2" className="chartsh" option={echarts.echart1.option} series={echarts.echart1.series} />
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
		{/* <!-- End Row --> */}

		{/* <!-- Row --> */}
		<Row className="row-sm">
			<Col md={12} lg={6} >
				<Card className=" custom-card overflow-hidden">
					<Card.Header>
						<h6 className="main-content-label mb-1">Horizonatal Line Chart</h6>
						<p className="text-muted  card-sub-title">Below is the basic horizontal line chart example.</p>
					</Card.Header>
					<Card.Body>
						<div>
							<ReactEcharts id="echart1" className="chartsh" option={echarts.echart4.option} series={echarts.echart4.series} />
						</div>
					</Card.Body>
				</Card>
			</Col>
			<Col md={12} lg={6} >
				<Card className=" custom-card overflow-hidden">
					<Card.Header>
						<h6 className="main-content-label mb-1">Horizonatal Combination line & Bar Chart</h6>
						<p className="text-muted  card-sub-title">Below is the basic horizontal combination line & bar chart example.</p>
					</Card.Header>
					<Card.Body>
						<div>
							<ReactEcharts id="echart1" className="chartsh" option={echarts.echart3.option} series={echarts.echart3.series} />
						</div>
					</Card.Body>
				</Card>
			</Col>
		</Row>
		{/* <!-- End Row --> */}

		{/* <!-- Row --> */}
		<Row className="row-sm">
			<Col md={12} lg={6} >
				<Card className=" custom-card overflow-hidden">
					<Card.Header>
						<h6 className="main-content-label mb-1">Stacked Bar Chart</h6>
						<p className="text-muted  card-sub-title">Below is the basic Stacked Bar chart example.</p>
					</Card.Header>
					<Card.Body>
						<div>
							<ReactEcharts id="echart5" className="chartsh" option={echarts.echart5.option} series={echarts.echart5.series} />
						</div>
					</Card.Body>
				</Card>
			</Col>
			<Col md={12} lg={6} >
				<Card className=" custom-card overflow-hidden">
						<Card.Header>
							<h6 className="main-content-label mb-1">Horizonatal Stacked Bar Chart</h6>
							<p className="text-muted  card-sub-title">Below is the basic horizontal stacked bar chart example.</p>
						</Card.Header>
					<Card.Body>
						<div>
							<ReactEcharts id="echart6" className="chartsh" option={echarts.echart6.option} series={echarts.echart6.series} />
						</div>
					</Card.Body>
				</Card>
			</Col>

		</Row>

		{/* <!-- End Row --> */}
      </div>
  )
}
Echart.layout = "Contentlayout"

export default Echart