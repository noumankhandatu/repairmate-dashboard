import React from 'react'
import PageHeader from '../../../../shared/layout-components/page-header/page-header'
import { Breadcrumb, Card, Col, Pagination, Row } from 'react-bootstrap';
import Link from "next/link"


//images
import folder from "../../../../public/assets/img/files/folder.png"
import word from "../../../../public/assets/img/files/word.png"
import doc from "../../../../public/assets/img/files/doc.png"
import file from "../../../../public/assets/img/files/file.png"
import file2 from "../../../../public/assets/img/files/file2.png"
import imge1 from "../../../../public/assets/img/files/img-1.jpg"
import imge2 from "../../../../public/assets/img/files/img-2.jpg"
import imge3 from "../../../../public/assets/img/files/img-3.jpg"
import imge4 from "../../../../public/assets/img/files/img-4.jpg"
import imge5 from "../../../../public/assets/img/files/img-5.jpg"
import imge6 from "../../../../public/assets/img/files/img-6.jpg"
import imge7 from "../../../../public/assets/img/files/img-7.jpg"
import imge8 from "../../../../public/assets/img/files/img-8.jpg"
import imge9 from "../../../../public/assets/img/files/img-9.jpg"
import Seo from '../../../../shared/layout-components/seo/seo';

const FileManagerList = () => {
  return (
    <>
        <Seo title="File Manager List"/>

    <PageHeader title="File-manager-list" item="Apps" active_item="File-manager-list"/>

    {/* <!-- Row --> */}
		<Row>
			<Col xl={2} md={3} lg={6}
			>
				<Card className=" custom-card border shadow-none">
					<Card.Body className="text-center">
						<div className="file-manger-icon">
							<Link href={`/components/apps/file-manager/file-details`} >
								<div className="br-7">
								<img src={folder.src} alt="img" />
								</div>
							</Link>
						</div>
						<h6 className="mb-1 font-weight-semibold mt-0">videos</h6>
						<span className="text-muted">4.23gb</span>
					</Card.Body>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card border p-0 shadow-none">
					<Card.Body className="text-center">
						<div className="file-manger-icon">
							<Link href={`/components/apps/file-manager/file-details`} >
									<img src={folder.src} alt="img" className="br-7" />
								</Link>
						</div>
						<h6 className="mb-1 font-weight-semibold mt-0">images</h6>
						<span className="text-muted">4.23gb</span>
					</Card.Body>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card border p-0 shadow-none">
					<Card.Body className="text-center">
						<div className="file-manger-icon">
							<Link href={`/components/apps/file-manager/file-details`} ><img src={word.src} alt="img" className="br-7" /></Link>
						</div>
						<h6 className="mb-1 font-weight-semibold mt-0">Documents</h6>
						<span className="text-muted">4.23gb</span>
					</Card.Body>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card border p-0 shadow-none">
					<Card.Body className="text-center">
						<div className="file-manger-icon">
							<Link href={`/components/apps/file-manager/file-details`} ><img src={word.src} alt="img" className="br-7" /></Link>
						</div>
						<h6 className="mb-1 font-weight-semibold mt-0">Documents</h6>
						<span className="text-muted">4.23gb</span>
					</Card.Body>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card border p-0 shadow-none">
					<Card.Body className="text-center">
						<div className="file-manger-icon">
							<Link href={`/components/apps/file-manager/file-details`}><img src={word.src} alt="img" className="br-7" /></Link>
						</div>
						<h6 className="mb-1 font-weight-semibold mt-0">Documents</h6>
						<span className="text-muted">4.23gb</span>
					</Card.Body>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card border p-0 shadow-none">
					<Card.Body className="text-center">
						<div className="file-manger-icon">
							<Link href={`/components/apps/file-manager/file-details`}><img src={doc.src} alt="img" className="br-7" /></Link>
						</div>
						<h6 className="mb-1 font-weight-semibold mt-0">Documents</h6>
						<span className="text-muted">4.23gb</span>
					</Card.Body>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card border p-0 shadow-none">
					<Card.Body className="text-center">
						<div className="file-manger-icon">
							<Link href={`/components/apps/file-manager/file-details`}><img src={doc.src} alt="img" className="br-7" /></Link>
						</div>
						<h6 className="mb-1 font-weight-semibold mt-0">Documents</h6>
						<span className="text-muted">4.23gb</span>
					</Card.Body>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card border p-0 shadow-none">
					<Card.Body className="text-center">
						<div className="file-manger-icon">
							<Link href={`/components/apps/file-manager/file-details`}><img src={doc.src} alt="img" className="br-7" /></Link>
						</div>
						<h6 className="mb-1 font-weight-semibold mt-0">Documents</h6>
						<span className="text-muted">4.23gb</span>
					</Card.Body>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card border p-0 shadow-none">
					<Card.Body className="text-center">
						<div className="file-manger-icon">
							<Link href={`/components/apps/file-manager/file-details`}><img src={file.src} alt="img" className="br-7" /></Link>

						</div>
						<h6 className="mb-1 font-weight-semibold mt-0">Documents</h6>
						<span className="text-muted">4.23gb</span>
					</Card.Body>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card border p-0 shadow-none">
					<Card.Body className="text-center">
						<div className="file-manger-icon">
							<Link href={`/components/apps/file-manager/file-details`}><img src={file.src} alt="img" className="br-7" /></Link>
						</div>
						<h6 className="mb-1 font-weight-semibold mt-0">Documents</h6>
						<span className="text-muted">4.23gb</span>
					</Card.Body>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card border p-0 shadow-none">
					<Card.Body className="text-center">
						<div className="file-manger-icon">
							<Link href={`/components/apps/file-manager/file-details`}><img src={file2.src} alt="img" className="br-7" /></Link>
						</div>
						<h6 className="mb-1 font-weight-semibold mt-0">Documents</h6>
						<span className="text-muted">4.23gb</span>
					</Card.Body>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card border p-0 shadow-none">
					<Card.Body className="text-center">
						<div className="file-manger-icon">
							<Link href={`/components/apps/file-manager/file-details`}><img src={file2.src} alt="img" className="br-7" /></Link>
						</div>
						<h6 className="mb-1 font-weight-semibold mt-0">Documents</h6>
						<span className="text-muted">4.23gb</span>
					</Card.Body>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card overflow-hidden">
					<Link href={`/components/apps/file-manager/file-details`}><img src={imge1.src} alt="img" /></Link>
					<div className="card-footer bd-t-0 py-3">
						<div className="d-flex">
							<div>
								<h6 className="mb-0">221.jpg</h6>
							</div>
							<div className="ms-auto">
								<h6 className="text-muted mb-0">120 KB</h6>
							</div>
						</div>
					</div>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card overflow-hidden">
					<Link href={`/components/apps/file-manager/file-details`}><img src={imge2.src} alt="img" /></Link>
					<div className="card-footer bd-t-0 py-3">
						<div className="d-flex">
							<div>
								<h6 className="mb-0">567.jpg</h6>
							</div>
							<div className="ms-auto">
								<h6 className="text-muted mb-0">120 KB</h6>
							</div>
						</div>
					</div>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card overflow-hidden">
					<Link href={`/components/apps/file-manager/file-details`}>
						<img src={imge3.src} alt="img" /></Link>
					<div className="card-footer bd-t-0 py-3">
						<div className="d-flex">
							<div>
								<h6 className="mb-0">367.jpg</h6>
							</div>
							<div className="ms-auto">
								<h6 className="text-muted mb-0">120 KB</h6>
							</div>
						</div>
					</div>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card overflow-hidden">
					<Link href={`/components/apps/file-manager/file-details`}><img src={imge4.src} alt="img" /></Link>
					<div className="card-footer bd-t-0 py-3">
						<div className="d-flex">
							<div>
								<h6 className="mb-0">211.jpg</h6>
							</div>
							<div className="ms-auto">
								<h6 className="text-muted mb-0">120 KB</h6>
							</div>
						</div>
					</div>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card overflow-hidden">
					<Link href={`/components/apps/file-manager/file-details`}><img src={imge5.src} alt="img" /></Link>
					<div className="card-footer bd-t-0 py-3">
						<div className="d-flex">
							<div>
								<h6 className="mb-0">541.jpg</h6>
							</div>
							<div className="ms-auto">
								<h6 className="text-muted mb-0">120 KB</h6>
							</div>
						</div>
					</div>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card overflow-hidden">
					<Link href={`/components/apps/file-manager/file-details`}><img src={imge6.src} alt="img" /></Link>
					<div className="card-footer bd-t-0 py-3">
						<div className="d-flex">
							<div>
								<h6 className="mb-0">345.jpg</h6>
							</div>
							<div className="ms-auto">
								<h6 className="text-muted mb-0">120 KB</h6>
							</div>
						</div>
					</div>
				</Card>
			</Col>
			<Col xl={2} md={3} lg={6}
			>
				<Card className="custom-card overflow-hidden">
					<Link href={`/components/apps/file-manager/file-details`}><img src={imge7.src} alt="img" /></Link>
					<div className="card-footer bd-t-0 py-3">
						<div className="d-flex">
							<div>
								<h6 className="mb-0">213.jpg</h6>
							</div>
							<div className="ms-auto">
								<h6 className="text-muted mb-0">120 KB</h6>
							</div>
						</div>
					</div>
				</Card>
			</Col>
			<div className="col-xl-2  col-md-3  col-lg-6">
				<Card className="custom-card overflow-hidden">
					<Link href={`/components/apps/file-manager/file-details`}><img src={imge8.src} alt="img" /></Link>
					<div className="card-footer bd-t-0 py-3">
						<div className="d-flex">
							<div>
								<h6 className="mb-0">1324.jpg</h6>
							</div>
							<div className="ms-auto">
								<h6 className="text-muted mb-0">120 KB</h6>
							</div>
						</div>
					</div>
				</Card>
			</div>
			<div className="col-xl-2  col-md-3 col-lg-6">
				<Card className="custom-card overflow-hidden">
					<Link href={`/components/apps/file-manager/file-details`}><img src={imge9.src} alt="img" /></Link>
					<div className="card-footer bd-t-0 py-3">
						<div className="d-flex">
							<div>
								<h6 className="mb-0">123.jpg</h6>
							</div>
							<div className="ms-auto">
								<h6 className="text-muted mb-0">120 KB</h6>
							</div>
						</div>
					</div>
				</Card>
			</div>
			<nav>

				<Pagination className="pagination justify-content-end">

					<Pagination.Item >Prev</Pagination.Item>
					<Pagination.Item active >{1}</Pagination.Item>
					<Pagination.Item >{2}</Pagination.Item>
					<Pagination.Item >{3}</Pagination.Item>
					<Pagination.Item >{4}</Pagination.Item>
					<Pagination.Item  >{5}</Pagination.Item>
					<Pagination.Item >Next</Pagination.Item>

				</Pagination>
			</nav>
		</Row>
		{/* <!-- End Row --> */}
    </>
  )
}
FileManagerList.layout = "Contentlayout"

export default FileManagerList