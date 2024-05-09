import React, { useState } from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { Card, Col, FormGroup, Row, Form } from "react-bootstrap";
import Link from 'next/link';
import { FilePond } from 'react-filepond';
import Seo from '../../../shared/layout-components/seo/seo';
import dynamic from 'next/dynamic';
const Editer = dynamic(()=>import('../../../shared/data/e-commerce/editer'), { ssr: false })


const AddProduct = () => {
	const [files, setFiles] = useState([]);
  const [filesimade, setFilesimage] = useState([]);

	const handleAdd = (newFiles) => {
		newFiles = newFiles.filter(
		  (file) => !files.find((f) => f.data === file.data)
		);
		setFiles([...files, ...newFiles]);
	  };
	
	  const handleDelete = (deleted) => {
		setFiles(files.filter((f) => f !== deleted));
	  };

  return (
    <>
        <Seo title="Add Product"/>

    <PageHeader title="Add Product" item="Ecommerce" active_item="Add Product"/>

    <div>
    {/* <!-- Row --> */}
	<Row className="row-sm">
      <Col lg={12} md={12}>
        <Card className="custom-card">
          <Card.Body>
            <FormGroup className="form-group">
              <Form.Label className="tx-medium">Product Name</Form.Label>
              <input type="text" className="form-control" placeholder="Name" />
            </FormGroup>
            <FormGroup className="form-group">
              <Form.Label className="tx-medium">Category</Form.Label>
              <select className="form-control select2-no-search">
                <option label="Choose one"></option>
                <option value="Party Wear">Party Wear</option>
                <option value="Casual Wear">Casual Wear</option>
                <option value="Wedding">Wedding</option>
                <option value="Festive">Festive</option>
              </select>
            </FormGroup>
            <FormGroup className="form-group">
              <Form.Label className="tx-medium">Price</Form.Label>
              <input type="text" className="form-control" placeholder="Price" />
            </FormGroup>
            <div className="ql-wrapper ql-wrapper-demo mb-3">
              <Form.Label className="tx-medium">Product Description</Form.Label>
              <div id="quillEditor">
			  	<Editer/>
              </div>
            </div>
            <Form.Label className="tx-medium">Upload Product</Form.Label>
            <div className="p-4 border rounded-6 mb-0 form-group">
              <div>
              <FilePond className='mt-3 mb-5 mt-lg-0'
                  files={filesimade}
                  allowReorder={true}
                  allowMultiple={false}
                  onupdatefiles={setFilesimage}
                  labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                />
              </div>
            </div>
          </Card.Body>
          <div className="card-footer">
            <Link href="#!" className="btn btn-primary  me-1">
              Add Product
            </Link>
            <Link href="#!" className="btn btn-danger">
              Cancel
            </Link>
          </div>
        </Card>
      </Col>
    </Row>
	{/* <!-- End Row --> */}
    </div>
    </>
  )
}

AddProduct.layout = "Contentlayout"


export default AddProduct