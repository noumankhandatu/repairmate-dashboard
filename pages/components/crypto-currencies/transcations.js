import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { Card, Row, Col } from "react-bootstrap";
import dynamic from 'next/dynamic';
import * as basicdatatable from "../../../shared/data/crypto-currencies/transcationdetails"
import DataTable from "react-data-table-component";
import Seo from '../../../shared/layout-components/seo/seo';
const DataTableExtensions = dynamic(() => import('react-data-table-component-extensions'), { ssr: false });

const Transcations = () => {
  return (
    <div>
    <Seo title={"Transcations"}/>

    <PageHeader title="Crypto Currencies" item="Crypto Currencies" active_item="Crypto Currencies"/>
    {/* <!-- row --> */}
	<Row className=" row-sm">
			<Col md={12} lg={12} xl={12}>
				<Card className=" custom-card transcation-crypto">
					<Card.Header className="border-bottom-0">
					<h6 className="main-content-label mb-1">Transaction History</h6>
					</Card.Header>
					<Card.Body className="card-body pt-0">
						
					<DataTableExtensions {...basicdatatable.tableData} >
            			<DataTable
                			columns={basicdatatable.columns}
							data={basicdatatable.data}
							defaultSortField="id"
							defaultSortAsc={false}
                			pagination
							noHeader
            			/>
        			</DataTableExtensions>
						
					</Card.Body>
				</Card>
 				{/* <!-- Row End --> */}
			</Col>
		</Row>				
	{/* <!-- Row End --> */}
      </div>
  )
}

Transcations.layout = "Contentlayout"


export default Transcations