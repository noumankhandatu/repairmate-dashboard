import React, { useState } from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import Multiselect from "react-select";


//Images
import watch2 from "../../../public/assets/img/pngs/shirt-2.png";
import watch3 from "../../../public/assets/img/pngs/shirt-3.png";
import watch4 from "../../../public/assets/img/pngs/shirt-4.png";
import watch5 from "../../../public/assets/img/pngs/shirt-5.png";
import users8 from  "../../../public/assets/img/users/8.jpg";
import users3 from  "../../../public/assets/img/users/3.jpg";
import users5 from  "../../../public/assets/img/users/5.jpg";
import Seo from '../../../shared/layout-components/seo/seo';
import Link from 'next/link';

const ProductDetails = () => {

	const [img,setimg] = useState(watch2.src)

	const objectArray = [
		{ value: "1", label: "1" },
		{ value: "2", label: "2 " },
		{ value: "3", label: "3" },
		{ value: "4", label: "4" },
		{ value: "5", label: "5" },
	  ];

  return (
    <>
       <Seo title="Product Details"/>

    <PageHeader title="Product-Details" item="Ecommerce" active_item="Product-Details"/>
    
    <div>
    {/* <!-- Row --> */}
						<div className="row row-sm">
							<div className="col-lg-12 col-md-12">
								<div className="card custom-card productdesc">
									<div className="card-body h-100">
										<div className="row">
											<div className="col-xl-6 col-lg-12 col-md-12">
												<div className="row">
													<div className="col-4 col-sm-2">
														<div className="clearfix carousel-slider">
															<div id="thumbcarousel" className="carousel slide" data-bs-interval="false">
																<div className="carousel-inner">
																	<div className="carousel-item active">
																		<div data-bs-target="#carousel" data-bs-slide-to="0" className="thumb my-2" onClick={()=>{setimg(watch2.src)}}><img src={watch2.src} alt="img"/></div>
																		<div data-bs-target="#carousel" data-bs-slide-to="1" className="thumb my-2" onClick={()=>{setimg(watch3.src)}}><img src={watch3.src} alt="img"/></div>
																		<div data-bs-target="#carousel" data-bs-slide-to="2" className="thumb my-2" onClick={()=>{setimg(watch4.src)}}><img src={watch4.src} alt="img"/></div>
																		<div data-bs-target="#carousel" data-bs-slide-to="3" className="thumb my-2" onClick={()=>{setimg(watch5.src)}}><img src={watch5.src} alt="img"/></div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-md-7 offset-md-1 col-sm-9 col-8">
														<div className="product-carousel">
															<div id="carousel" className="carousel slide" data-bs-ride="false">
																<div className="carousel-inner">
																	<div className="carousel-item active"><div className="img-fluid mx-auto d-block"><img src={img} alt="img" /></div></div>
																	
																</div>
																<div className="text-center mt-4 mb-4 btn-list">
																	<Link href="/components/ecommerce/cart" className="btn ripple btn-primary">
																	<i className="fe fe-shopping-cart"> </i> Add to cart
																	</Link>
																	<a href="#!" className="btn ripple btn-secondary"><i className="fe fe-credit-card"> </i> Buy Now</a>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-6 col-lg-12 col-md-12">
												<div className="mt-4 mb-4">
                                                    <h4 className="mt-1 mb-3">Touch Screen Waterproof Smartwatch</h4>

                                                    <p className="text-muted float-start me-3">
                                                        <span className="fe fe-star text-warning"></span>
                                                        <span className="fe fe-star text-warning"></span>
                                                        <span className="fe fe-star text-warning"></span>
                                                        <span className="fe fe-star text-warning"></span>
                                                        <span className="fe fe-star"></span>
                                                    </p>
                                                    <p className="text-muted mb-4">( 135 Customers Review )</p>
													<h6 className="text-success text-uppercase">20 % Off</h6>
													<h5 className="mb-2">Price : <span className="text-muted me-2"><del>$499 USD</del></span> <b>$299 USD</b></h5>
													<p className="tx-13 text-muted">FREE SHIPPING on above Purchase of <b>$359</b> </p>
													<h6 className="mt-4 fs-16">Description</h6>
													<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
													<p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized .</p>
													<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</p>
												</div>
												<div className="d-flex  mt-2">
													<div className="mt-2 sizes">Quantity:</div>
													<div className="d-flex ms-2">
														<div className="form-group">
														<Multiselect options={objectArray} singleSelect displayValue="key" />
														</div>
													</div>
												</div>
												<div className="colors d-flex me-3 mt-2">
													<span className="mt-2">colors:</span>
													<div className="d-flex gutters-xs ms-4">
														<div className="me-2">
															<label className="colorinput">
																<input name="color" type="radio" value="azure" className="colorinput-input" />
																<span className="colorinput-color bg-dark"></span>
															</label>
														</div>
														<div className="me-2">
															<label className="colorinput">
																<input name="color" type="radio" value="indigo" className="colorinput-input"/>
																<span className="colorinput-color bg-secondary"></span>
															</label>
														</div>
														<div className="me-2">
															<label className="colorinput">
																<input name="color" type="radio" value="purple" className="colorinput-input"/>
																<span className="colorinput-color bg-danger"></span>
															</label>
														</div>
														<div className="me-2">
															<label className="colorinput">
																<input name="color" type="radio" value="pink" className="colorinput-input"/>
																<span className="colorinput-color bg-pink"></span>
															</label>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="mt-4">
											<h5 className="mb-3">Specifications :</h5>
											<div className="">
												<div className="row">
													<div className="col-xl-12">
														<div className="table-responsive">
															<table className="table mb-0 border-top table-bordered text-nowrap">
																<tbody>
																	<tr>
																		<th scope="row">Category</th>
																		<td>Watches</td>
																	</tr>
																	<tr>
																		<th scope="row">Brand</th>
																		<td>Willful</td>
																	</tr>
																	<tr>
																		<th scope="row">Color</th>
																		<td>White</td>
																	</tr>
																	<tr>
																		<th scope="row">Connections</th>
																		<td>Bluetooth</td>
																	</tr>
																	<tr>
																		<th scope="row">Application</th>
																		<td>Messages, Phone, Pedometer, Heart Rate Monitor</td>
																	</tr>
																	<tr>
																		<th scope="row">Supported </th>
																		<td>Fitness Tracker, Sleep Monitor, Reminders</td>
																	</tr>
																	<tr>
																		<th scope="row">Warranty Summary</th>
																		<td>1 Year</td>
																	</tr>
																</tbody>
															</table>
														</div>
													</div>
													<div className="col-xl-12 mt-4">
														<div className="card">
															<div className="card-body p-0">
																<div className="d-flex p-3">
																	<h5 className="float-start main-content-label mb-0 mt-2">All Ratings and Reviews</h5>
																	<a href="#!" className="btn btn-outline-primary btn-sm float-end ms-auto">Top Rated</a>
																</div>
																<div className="media mt-0 p-4 border-bottom border-top">
																	<div className="d-flex me-3">
																		<a href="#!">
																			<div className="media-image avatar avatar-md rounded-circle" >
																			<img className="media-image avatar avatar-md rounded-circle" alt="64x64" src={users8.src}/> 
																			</div>
																		</a>
																	</div>
																	<div className="media-body">
																		<h5 className="mt-0 mb-1 font-weight-semibold tx-16">Bruce Tran
																			<span className="fs-14 ms-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="verified"><i className="fa fa-check-circle-o text-success"></i></span>
																		</h5>
																		<span className="text-muted tx-13">Tue, 20 Mar 2020</span>
																		<div className="text-warning mt-1">
																			<i className="bx bxs-star active"></i>
																			<i className="bx bxs-star active"></i>
																			<i className="bx bxs-star active"></i>
																			<i className="bx bxs-star active"></i>
																			<i className="bx bxs-star"></i>
																		 </div>
																		<p className="font-13  mb-2 mt-2">
																		   Lorem Ipsum available, quis Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et  nostrud exercitation ullamco laboris   commodo consequat.
																		</p>
																		<a href="#!" className="me-2"><span className="badge bg-primary">Helpful</span></a>
																		<a href="#!" className="me-2"><span className="">Comment</span></a>
																		<a href="#!" className="me-2"><span className="">Report</span></a>
																	</div>
																</div>
																<div className="media mt-0  p-4 border-bottom">
																	<div className="d-flex me-3">
																		<a href="#!">
																			<span className="media-image avatar avatar-md rounded-circle">
																			<img alt="64x64" src={users3.src} className="media-image avatar avatar-md rounded-circle"/> 
																			</span>
																		</a>
																	</div>
																	<div className="media-body">
																		<h5 className="mt-0 mb-1 font-weight-semibold tx-16">Mina Harpe
																			<span className="fs-14 ms-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="verified"><i className="fa fa-check-circle-o text-success"></i></span>
																		</h5>
																		<span className="text-muted tx-13">Tue, 20 Mar 2020</span>
																		<div className="text-warning mt-1">
																			<i className="bx bxs-star active"></i>
																			<i className="bx bxs-star active"></i>
																			<i className="bx bxs-star active"></i>
																			<i className="bx bxs-star active"></i>
																			<i className="bx bxs-star"></i>
																		 </div>
																		<p className="font-13  mb-2 mt-2">
																		   Lorem Ipsum available, quis Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et  nostrud exercitation ullamco laboris   commodo consequat.
																		</p>
																		<a href="#!" className="me-2"><span className="badge bg-primary">Helpful</span></a>
																		<a href="#!" className="me-2"><span className="">Comment</span></a>
																		<a href="#!" className="me-2"><span className="">Report</span></a>
																	</div>
																</div>
																<div className="media mt-0 p-4 border-bottom">
																	<div className="d-flex me-3">
																		<a href="#!">
																			<span className="media-image avatar avatar-md rounded-circle">
																			<img className="media-image avatar avatar-md rounded-circle" alt="64x64" src={users5.src}/> 
																			</span>
																		</a>
																	</div>
																	<div className="media-body">
																		<h5 className="mt-0 mb-1 font-weight-semibold tx-16">Maria Quinn
																			<span className="fs-14 ms-2" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="verified"><i className="fa fa-check-circle-o text-success"></i></span>
																		</h5>
																		<span className="text-muted tx-13">Tue, 20 Mar 2020</span>
																		<div className="text-warning mt-1">
																			<i className="bx bxs-star active"></i>
																			<i className="bx bxs-star active"></i>
																			<i className="bx bxs-star active"></i>
																			<i className="bx bxs-star active"></i>
																			<i className="bx bxs-star text-light"></i>
																		 </div>
																		<p className="font-13  mb-2 mt-2">
																		   Lorem Ipsum available, quis Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et  nostrud exercitation ullamco laboris   commodo consequat.
																		</p>
																		<a href="#!" className="me-2"><span className="badge bg-primary">Helpful</span></a>
																		<a href="#!" className="me-2"><span className="">Comment</span></a>
																		<a href="#!" className="me-2"><span className="">Report</span></a>
																	</div>
																</div>
																<a className="text-center w-100 d-block p-3 font-weight-bold" href="#!">See All Reviews</a>
															</div>
															<div className="border-top px-4 pb-2 pt-4">
																<h5 className="mb-4">Leave Comment</h5>
																<div className="mb-1">
																	<div className="row">
																		<div className="form-group col-md-6">
																			<div className="mb-3 font-weight-semibold">Your Name</div> <input className="form-control" placeholder="Your Name" type="text"/>
																		</div>
																		<div className="form-group col-md-6">
																			<div className="mb-3 font-weight-semibold">Email Address</div> <input className="form-control" placeholder="Email Address" type="text"/>
																		</div>
																	</div>
																</div>
																<span className="star-rating">
																	<a href="#!"><i className="icofont-ui-rating icofont-2x"></i></a>
																	<a href="#!"><i className="icofont-ui-rating icofont-2x"></i></a>
																	<a href="#!"><i className="icofont-ui-rating icofont-2x"></i></a>
																	<a href="#!"><i className="icofont-ui-rating icofont-2x"></i></a>
																	<a href="#!"><i className="icofont-ui-rating icofont-2x"></i></a>
																</span>
																<form>
																	<div className="form-group">
																		<div className="mb-3 font-weight-semibold">Your Comment</div>
																		<textarea className="form-control"></textarea>
																	</div>
																	<div className="form-group">
																		<button className="btn btn-primary mt-3 mb-0" type="button">Post your review</button>
																	</div>
																</form>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
	{/* <!-- End Row --> */}
    </div>
    </>
  )
}

ProductDetails.layout = "Contentlayout"


export default ProductDetails