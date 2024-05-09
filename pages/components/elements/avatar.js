import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { Button, Col, Row, Card, Breadcrumb } from "react-bootstrap";
import Link from 'next/link';
import Seo from '../../../shared/layout-components/seo/seo';


//images

import users2 from "../../../public/assets/img/users/2.jpg"
import users3 from "../../../public/assets/img/users/3.jpg"
import users4 from "../../../public/assets/img/users/4.jpg"
import users6 from "../../../public/assets/img/users/6.jpg"
import users7 from "../../../public/assets/img/users/7.jpg"
import users5 from "../../../public/assets/img/users/5.jpg"
import users9 from "../../../public/assets/img/users/9.jpg"


const Avatar = () => {
  return (
    <div>
      <Seo title="Avatar"/>

      <PageHeader title="Avatars" item="Elements" active_item="Avatars"/>

      {/* <!-- Row --> */}
    <Row className="row-sm">
      <Col xl={9} lg={12}>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Avatar Sizes</h6>
              <p className="text-muted card-sub-title">
                An avatar can have different sizes like larger and smaller
                avatar.
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                <div className="demo-avatar-group">
                  <div className="main-img-user avatar-xs">
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={users2.src}
                    />
                  </div>
                  <div className="main-img-user avatar-sm">
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={users3.src}
                    />
                  </div>
                  <div className="main-img-user">
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={users4.src}
                    />
                  </div>
                  <div className="main-img-user avatar-md">
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={users2.src}
                    />
                  </div>
                  <div className="main-img-user avatar-lg d-none d-sm-block">
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={users6.src}
                    />
                  </div>
                  <div className="main-img-user avatar-xl d-none d-sm-block">
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={users7.src}
                    />
                  </div>
                  <div className="main-img-user avatar-xxl d-none d-sm-block">
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={users2.src}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card" id="shapes">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Avatar Shapes</h6>
              <p className="text-muted card-sub-title">
                An avatar can have different shapes like square and round,
                radius avatars.
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                <div className="demo-avatar-group">
                  <div className="main-img-user avatar-md">
                    <img
                      alt="avatar"
                      className="rounded-circle"
                      src={users2.src}
                    />
                  </div>
                  <div className="main-img-user avatar-md">
                    <img
                      alt="avatar"
                      className="square"
                      src={users5.src}
                    />
                  </div>
                  <div className="main-img-user avatar-md">
                    <img
                      alt="avatar"
                      className="radius"
                      src={users6.src}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Initials Avatars</h6>
              <p className="text-muted card-sub-title">
                An avatar can have a temporary use of u{`ser's`} initial name while
                their photos are not yet available.
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                <div className="demo-avatar-group avatar-list">
                  <div className="avatar avatar-xs bg-primary">A</div>
                  <div className="avatar avatar-sm bg-secondary">U</div>
                  <div className="avatar bg-info">C</div>
                  <div className="avatar avatar-md bg-success">X</div>
                  <div className="avatar avatar-lg bg-warning d-none d-sm-flex ">E</div>
                  <div className="avatar avatar-xl d-none d-sm-flex bg-danger">
                    M
                  </div>
                  <div className="avatar avatar-xxl d-none d-sm-flex bg-pink">
                    NB
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <Card.Body>
            <div>
              <h6 className="main-content-label mb-1">Status Indicator</h6>
              <p className="text-muted card-sub-title">
                An avatar can have a status indicator to indicate users
                availability.
              </p>
            </div>
            <div className="text-wrap">
              <div className="example">
                <div className="demo-avatar-group">
                  <div className="main-avatar avatar online">
                    <img
                      alt="avatar"
                      className="rounded-circle avatar"
                      src={users9.src}
                    />
                  </div>
                  <div className="main-avatar avatar-md offline">eb</div>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card >
      </Col >
      <Col xl={3} lg={12} className="d-none d-xl-block custom-leftnav">
        <div className="main-content-left-components">
          <Card className="custom-card">
            <Card.Body className="user-card text-center">
              <div className="main-img-user avatar-lg online text-center">
                <img
                  alt="avatar"
                  className="rounded-circle"
                  src={users5.src}
                />
              </div>
              <div className="mt-2">
                <h5 className="mb-1">Reynante</h5>
                <p className="mb-1 tx-inverse">Web Developer</p>
                <span className="text-muted">
                  <i className="far fa-check-circle text-success me-1"></i>
                  Verified
                </span>
              </div>
              <Link href="#!" className="btn ripple btn-primary btn-sm mt-3">
                View Profile
              </Link>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Body className="user-card text-center">
              <div className="main-img-user avatar-lg online text-center">
                <img
                  alt="avatar"
                  className="rounded-circle"
                  src={users4.src}
                />
              </div>
              <div className="mt-2">
                <h5 className="mb-1">Joyce Chua</h5>
                <p className="mb-1 tx-inverse">Team Leader</p>
                <span className="text-muted">
                  <i className="far fa-check-circle text-success me-1"></i>
                  Verified
                </span>
              </div>
              <Link href="#!" className="btn ripple btn-secondary btn-sm mt-3" >
                View Profile
              </Link>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </Row >
    {/* <!-- End Row --> */}
      </div>
  )
}
Avatar.layout = "Contentlayout"

export default Avatar