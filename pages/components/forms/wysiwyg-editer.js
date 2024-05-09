import React, {useEffect, useState} from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { Modal, Button, Breadcrumb, Row, Col, Card } from "react-bootstrap";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Link from "next/link"
import Seo from '../../../shared/layout-components/seo/seo';
import dynamic from 'next/dynamic';
const FromInlineEditEditor = dynamic(()=>import('../../../shared/data/forms/formEditers/FromInlineEditEditor'), { ssr: false })
const Modalineditor = dynamic(()=>import('../../../shared/data/forms/formEditers/Modalineditor'), { ssr: false })
const Wrappers = dynamic(()=>import('../../../shared/data/forms/formEditers/Wrappers'), { ssr: false })

const WysiwygEditer = () => {
	// Modal
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
  let Spk



  return (
    <div>
      <Seo title="Form Editer"/>

      <PageHeader title="Form Editor" item="Forms" active_item="Form Editor"/>

      <Row className="row-sm">
        <Col md={12} lg={12}>
          <Card className="custom-card">
            <Card.Header>
              <h6 className="main-content-label mb-1"> From Inline-Edit Editor</h6>
              <p className="text-muted card-sub-title">
                From Inline-Edit Editor
              </p>
            </Card.Header>
            <Card.Body>
              <FromInlineEditEditor />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="row-sm">
        <Col md={12} lg={12}>
          <Card className="custom-card">
            <Card.Body>
              <div>
                <h6 className="main-content-label mb-1">
                  View Editor in Modal
                </h6>
                <p className="text-muted card-sub-title">
                  View text editor that wrap inside a modal.
                </p>
              </div>
              <Button
                variant="primary" onClick={handleShow}>
                View Live Demo
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Modalineditor />
                </Modal.Body>
              </Modal>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="row-sm">
        <Col md={12} lg={12}>
          <Card className="custom-card">
            <Card.Header>
              <h6 className="main-content-label mb-1">Summernote Editor</h6>
              <p className="text-muted card-sub-title">
                Summernote Editor
              </p>
            </Card.Header>
            <Card.Body>
              <Wrappers />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </div>
  )
}
WysiwygEditer.layout = "Contentlayout"

export default WysiwygEditer