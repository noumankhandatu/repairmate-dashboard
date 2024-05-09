import React, { useState } from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import { Breadcrumb, Card, Col, Row, Button, Dropdown, Table, Pagination } from "react-bootstrap";
import user1 from "../../../public/assets/img/users/1.jpg";
import user2 from "../../../public/assets/img/users/2.jpg";
import user3 from "../../../public/assets/img/users/3.jpg";
import user4 from "../../../public/assets/img/users/4.jpg";
import user5 from "../../../public/assets/img/users/5.jpg";
import user6 from "../../../public/assets/img/users/6.jpg";
import user7 from "../../../public/assets/img/users/7.jpg";
import user9 from "../../../public/assets/img/users/9.jpg";
import user12 from "../../../public/assets/img/users/12.jpg";
import user11 from "../../../public/assets/img/users/11.jpg";
import Link from 'next/link';
import Seo from '../../../shared/layout-components/seo/seo';

import dynamic from 'next/dynamic';
const Userlistdropdown = dynamic(()=>import('../../../shared/data/advanceui/userlistdropdown'), { ssr: false })


let UserlistData = [
	{
	  id: 1,
	  Product1: user1.src,
	  ProductId: "Megan Peters",
	  created: "08/06/2022",
	  status: "Inactive",
	  email: "mila@Kunis.com",
	  information: "danger"
  
	},
	{
	  id: 2,
	  Product1: user2.src,
	  ProductId: "George Clooney",
	  created: "08/06/2022",
	  status: "active",
	  email: "	marlon@brando.com",
	  information: "success"
	},
	{
	  id: 3,
	  Product1: user3.src,
	  ProductId: "Ryan Gossling	",
	  created: "08/06/2022",
	  status: "Banned",
	  email: "jack@nicholson",
	  information: "danger"
	},
	{
	  id: 4,
	  Product1: user4.src,
	  ProductId: "Emma Watson",
	  created: "16/06/2022",
	  status: "Pending",
	  email: "jack@nicholsonm",
	  information: "warning"
  
	},
	{
	  id: 5,
	  Product1: user5.src,
	  ProductId: "Mila Kunis",
	  created: "18/06/2022",
	  status: "active",
	  information: "success",
	  email: "mila@Kunis.com",
	},
  
	{
	  id: 6,
	  Product1: user6.src,
	  ProductId: "	Phil Watsons",
	  created: "22/06/2022",
	  status: "active",
	  email: "	phil@watson.com",
	  information: "success",
	},
	{
	  id: 7,
	  Product1: user7.src,
	  ProductId: "Sonia Robertson",
	  created: "25/06/2022",
	  status: "active",
	  email: "robertson@sonia.com",
	  information: "success"
	},
	{
	  id: 8,
	  Product1: user9.src,
	  ProductId: "Megan Peters",
	  created: "28/06/2022",
	  status: "Banned",
	  email: "amelia23@kunis.com",
	  information: "danger"
	},
	{
	  id: 9,
	  Product1: user11.src,
	  ProductId: "Adam Hamilton",
	  created: "30/06/2022",
	  status: "pending",
	  email: "	morganleah@.com",
	  information: "warning"
  
	},
	{
	  id: 10,
	  Product1: user12.src,
	  ProductId: "Leah Morgan",
	  created: "08/06/2022",
	  status: "active",
	  email: "mila@Kunis.com",
	  information: "success"
  
	}
  ];

const Userlist = () => {
	var Delete = (list) => {
		let items = UserlistData.filter((userlist, i) => {
		  return userlist.id != list
		})
		UserlistData = items
		setdata(items)
		// console.log(items);
	  }
	  const [data, setdata] = useState(UserlistData)
  return (
    <>
        <Seo title="User List"/>

    <PageHeader title="UserList" item="AdvancedUI" active_item="UserList"/>

    {/* <!--Row--> */}
	<Row className=" row-sm">
        <Col sm={12} md={12} xl={12} lg={12} className="grid-margin">
          <Card className="custom-card">
            <Card.Header className="border-bottom-0 pb-0">
              <div className="d-flex justify-content-between">
                <label className="main-content-label mb-0 pt-1">User Table</label>
                <div className="ms-auto float-end">
                  <Userlistdropdown/>
                </div>
              </div>
              <p className="tx-12 tx-gray-500 mt-0 mb-2">
                Example of Spruha Simple Table. <Link href="#!">Learn more</Link>
              </p>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive border userlist-table">
                <Table responsive className="card-table table-striped table-vcenter text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th className="wd-lg-8p">
                        <span>User</span>
                      </th>
                      <th className="wd-lg-20p">
                        <span></span>
                      </th>
                      <th className="wd-lg-20p">
                        <span>Created</span>
                      </th>
                      <th className="wd-lg-20p">
                        <span>Status</span>
                      </th>
                      <th className="wd-lg-20p">
                        <span>Email</span>
                      </th>
                      <th className="wd-lg-20p">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                  {data.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <img
                          className="rounded-circle avatar-md me-2"
                            alt="avatar"
                            src={item.Product1}
                          />
                        </td>
                        <td>{item.ProductId}</td>
                        <td>{item.created}</td>
                        <td className="text-center">
                          <span className={`label text-${item.information} d-flex`}>
                            <span className={`dot-label bg-${item.information} me-1- 300`}></span>
                            {item.status}
                          </span>
                        </td>
                        <td>
                          <Link href="#!">{item.email}</Link>
                        </td>
                        <td>
                          <Link href="#!" className="btn btn-sm btn-primary me-1">
                            <i className="fe fe-search"></i>
                          </Link>
                          <Link href="#!" className="btn btn-sm btn-info me-1">
                            <i className="fe fe-edit-2"></i>
                          </Link>
                          <Link href="#!" className="btn btn-sm btn-danger me-1" onClick={() => {Delete(item.id) }}>
                            <i className="fe fe-trash"></i>
                          </Link>
                        </td>
                      </tr>

                      ))}
                    </tbody>

                </Table>
              </div>
              <div className="mt-5">
                <Pagination className="mb-0 justify-content-end">
                  <Pagination.Item>Previous</Pagination.Item>
                  <Pagination.Item className="page-item disabled">
                    {1}
                  </Pagination.Item>
                  <Pagination.Item className="page-item" active>
                    {2}
                  </Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Item>{4}</Pagination.Item>
                  <Pagination.Item>{5}</Pagination.Item>
                  <Pagination.Item>Next</Pagination.Item>
                </Pagination>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* <!-- COL END --> */}
      </Row>
      {/* <!-- row closed  --> */}
    </>
  )
}
Userlist.layout = "Contentlayout"

export default Userlist