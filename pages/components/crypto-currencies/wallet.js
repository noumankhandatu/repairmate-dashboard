import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
import {Card, Col, ListGroup, Row } from "react-bootstrap";
import Link from "next/link"
import Seo from '../../../shared/layout-components/seo/seo';


//images
import eth from "../../../public/assets/img/svgs/crypto-currencies/eth.svg";
import xrp from "../../../public/assets/img/svgs/crypto-currencies/xrp.svg";
import ltc from "../../../public/assets/img/svgs/crypto-currencies/ltc.svg";
import dash from "../../../public/assets/img/svgs/crypto-currencies/dash.svg";
import miota from "../../../public/assets/img/svgs/crypto-currencies/miota.svg";
import qrcode from "../../../public/assets/img/pngs/qrcode.png";
import btc from "../../../public/assets/img/svgs/crypto-currencies/btc.svg";


const walletinfo = [
	{ Wallet: "ETHEREUM Wallet", Walletaddress: "Wallet Address", Currencies: eth.src, ETHINFO: "Available ETH", VAlueofETH: 0.257134, Ethshortcut: "ETH", EthQRcode: qrcode.src, bitcoin: "btc", EthoReceived: "Received ETH", Ethohigh: "left", EthoReceivedmoney: "+1,50,500", EthCurrencies: "ETH", EthoSent: "Send ETH", Ethorlow: "right", EthoSentmoney: "-25,500", EthoDeposit: "Deposit", EthoWithdraw: "Withdraw", },
	{ Wallet: "Ripple  Wallet", Walletaddress: "Wallet Address", Currencies: xrp.src, ETHINFO: "Available XRP", VAlueofETH: 0.243457, Ethshortcut: "XRP", EthQRcode: qrcode.src, bitcoin: "xrp", EthoReceived: "Received XRP", Ethohigh: "left", EthoReceivedmoney: "+ 1,25,500", EthCurrencies: "XRP", EthoSent: "Sent XRP", Ethorlow: "right", EthoSentmoney: "- 59000", EthoDeposit: "Deposit", EthoWithdraw: "Withdraw", },
	{ Wallet: "Dash  Wallet", Walletaddress: "Wallet Address", Currencies: dash.src, ETHINFO: "Available DASH", VAlueofETH: 0.0224, Ethshortcut: "DASH", EthQRcode: qrcode.src, bitcoin: "dash", EthoReceived: "Received ETH", Ethohigh: "left", EthoReceivedmoney: "+1,50,500", EthCurrencies: "ETH", EthoSent: "Send ETH", Ethorlow: "right", EthoSentmoney: "-25,500", EthoDeposit: "Deposit", EthoWithdraw: "Withdraw", },
	{ Wallet: "Litecoin  Wallet", Walletaddress: "Wallet Address", Currencies: ltc.src, ETHINFO: "Available LTC", VAlueofETH: 0.25713, Ethshortcut: "LTC", EthQRcode: qrcode.src, bitcoin: "ltc", EthoReceived: "Received ETH", Ethohigh: "left", EthoReceivedmoney: "+1,50,500", EthCurrencies: "ETH", EthoSent: "Send LTC", Ethorlow: "right", EthoSentmoney: "-25,500", EthoDeposit: "Deposit", EthoWithdraw: "Withdraw", },
  ];
const Wallet = () => {
  return (
    <>
    <Seo title={"Wallet"}/>

    <PageHeader title="Crypto Currencies" item="Crypto Currencies" active_item="Wallet"/>

    <div>
    {/* <!-- row --> */}
	
	<Row className="row-sm">
        <Col xxl={4} xl={12} lg={12} md={12}>
          <Card className="custom-card">
            <Card.Header className=" border-bottom-0 mb-0">
              <label className="main-content-label mb-0">Wallet</label>
            </Card.Header>
            <Card.Body className=" pt-1">
              <div className="d-flex">
				<div className="wd-40 ht-40 new-me-3 my-auto">
                <img src={btc.src}  alt="btc " />
				</div>
                <div>
                  <span className="text-uppercase tx-14 mt-4 text-muted">
                    Available BTC
                  </span>
                  <div className="d-flex my-auto">
                    <h2 className="mt-1 mb-0">0.0245465</h2>
                    <span className="mt-auto ms-2">BTC</span>
                  </div>
                </div>
              </div>
              <div className="d-sm-flex mt-4 justify-content-between">
                <div>
                  <p className="text-uppercase tx-13 text-muted mb-1">
                    Buy this month
                  </p>
                  <div className="d-flex my-auto">
                    <h5 className="mt-1 mb-0">0.0324354</h5>
                    <span className="mt-auto ms-2">BTC</span>
                  </div>
                </div>
                <div className="mt-2 mt-sm-0">
                  <p className="text-uppercase tx-13 text-muted mb-1">
                    Sell this month
                  </p>
                  <div className="d-flex my-auto">
                    <h5 className="mt-1 mb-0">0.02434566</h5>
                    <span className="mt-auto ms-2">BTC</span>
                  </div>
                </div>
              </div>
              <Row className=" mt-4">
                <div className="col-6">
                  <button className="btn btn-block btn-primary">Deposit</button>
                </div>
                <div className="col-6">
                  <button className="btn btn-block btn-success">
                    Withdraw
                  </button>
                </div>
              </Row>
              <ListGroup className=" mt-4 tx-13">
                <ListGroup.Item className=" pd-x-0 d-sm-flex justify-content-between">
                  <div className="d-sm-flex">
                    <span className="crypto-icon bg-primary-transparent me-3">
                      <i className="fe fe-arrow-down-left text-primary"></i>
                    </span>
                    <span className="my-auto font-weight-semibold tx-15">
                      Received Bitcoin
                    </span>
                  </div>
                  <span className="font-weight-semibold my-auto text-success tx-15 d-inline-flex">
                    +0.00004564
                    <span className="mt-auto ms-2 text-muted font-weight-normal">
                      BTC
                    </span>
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className=" pd-x-0 d-sm-flex justify-content-between">
                  <div className="d-sm-flex">
                    <span className="crypto-icon bg-primary-transparent me-3">
                      <i className="fe fe-arrow-up-right text-primary"></i>
                    </span>
                    <span className="my-auto font-weight-semibold tx-15">
                      Sent Bitcoin
                    </span>
                  </div>
                  <span className="font-weight-semibold my-auto text-danger tx-15 d-inline-flex">
                    -0.03445436
                    <span className="mt-auto ms-2 text-muted font-weight-normal">
                      BTC
                    </span>
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className=" pd-x-0 d-sm-flex justify-content-between">
                  <div className="d-sm-flex">
                    <span className="crypto-icon bg-primary-transparent me-3">
                      <i className="fe fe-arrow-down-left text-primary"></i>
                    </span>
                    <span className="my-auto font-weight-semibold tx-15">
                      Received Ethereum
                    </span>
                  </div>
                  <span className="font-weight-semibold my-auto text-success tx-15 d-inline-flex">
                    +4.2543
                    <span className="mt-auto ms-2 text-muted font-weight-normal">
                      ETH
                    </span>
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className=" pd-x-0 d-sm-flex justify-content-between">
                  <div className="d-sm-flex">
                    <span className="crypto-icon bg-primary-transparent me-3">
                      <i className="fe fe-arrow-up-right text-primary"></i>
                    </span>
                    <span className="my-auto font-weight-semibold tx-15">
                      Sent Bitcoin
                    </span>
                  </div>
                  <span className="font-weight-semibold my-auto text-danger tx-15 d-inline-flex">
                    +0.00255423
                    <span className="mt-auto ms-2 text-muted font-weight-normal">
                      BTC
                    </span>
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className=" pd-x-0 d-sm-flex justify-content-between">
                  <div className="d-sm-flex">
                    <span className="crypto-icon bg-primary-transparent me-3">
                      <i className="fe fe-arrow-down-left text-primary"></i>
                    </span>
                    <span className="my-auto font-weight-semibold tx-15">
                      Received Litecoin
                    </span>
                  </div>
                  <span className="font-weight-semibold my-auto text-success tx-15 d-inline-flex">
                    -0.02434525
                    <span className="mt-auto ms-2 text-muted font-weight-normal">
                      LTC
                    </span>
                  </span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Header className=" border-bottom-0">
              <label className="main-content-label mt-3">My Wallet</label>
              <div className="float-end my-auto">
                <Link href="#!" className="btn btn-light mt-1" >
                  <i className="fa fa-plus"></i>
                </Link>
              </div>
            </Card.Header>
            <Card.Body className="
            
            p-3">
              <div className="d-flex">
                <img src={btc.src}  alt="img" className="wd-30 ht-30 new-me-3 my-auto"/>
                <div className="mt-1">
                  <h5 className="mb-2 tx-16">Bitcoin Account</h5>
                  <span className="mb-0 tx-18 text-dark font-weight-normal">
                    2.2546854 BTC = $6,334.89
                  </span>
                </div>
              </div>
              <Row className="mt-3">
                <Col>

                  <Link href="#!" className="btn btn-light btn-block btn-square">
                    Transfer
                  </Link>
                </Col>
                <Col>

                  <Link href="#!" className="btn btn-white border btn-block btn-square">
                    Network Transfer
                  </Link>
                </Col>
              </Row>
            </Card.Body>
            <Card.Body className=" p-3">
              <div className="d-flex">
				      <img className="wd-30 ht-30 new-me-3 my-auto"
                  src={dash.src}
                  alt="img"
                />
                <div className="mt-1">
                  <h5 className="mb-2 tx-16">Dash</h5>
                  <span className="mb-0 tx-18 text-dark font-weight-normal">
                    3.3454545 DASH = $5,232.23
                  </span>
                </div>
              </div>
              <Row className="mt-3">
                <Col>

                  <Link href="#!" className="btn btn-light btn-block btn-square" >
                    Transfer
                  </Link>
                </Col>
                <Col>

                  <Link href="#!" className="btn btn-white border btn-block btn-square">
                    Network Transfer
                  </Link>
                </Col>
              </Row>
            </Card.Body>
            <Card.Body className=" p-3">
              <div className="d-flex">
                <img className="wd-30 new-me-3 ht-30 my-auto"
                  src={miota.src}
                  alt="img"
                />
                <div className="mt-1">
                  <h5 className="mb-2 tx-16">IOTA</h5>
                  <span className="mb-0 tx-18 text-dark font-weight-normal">
                    1.3455672 IOTA = $2,434.32
                  </span>
                </div>
              </div>
              <Row className="mt-3">
                <Col>

                  <Link href="#!" className="btn btn-light btn-block btn-square" >
                    Transfer
                  </Link>
                </Col>
                <Col>

                  <Link href="#!" className="btn btn-white border btn-block btn-square">
                    Network Transfer
                  </Link>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={8} xl={12} lg={12} md={12}>
          <Card className="custom-card">
            <Card.Body>
              <label className="main-content-label mb-0">
                BTC Wallet Address
              </label>
              <Row className="row mt-3 crypto-wallet">
                <Col md={10}>
                  <p>Wallet Address .</p>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control input-lg"
                      id="wallet-address"
                      defaultValue="afb0dc8bc84625587b85415c86ef43ed8df"
                    />
                    <div className="input-group-prepend">
                      <button
                        className="btn btn-primary clipboard-icon clipboard-box"
                        data-clipboard-target="#wallet-address"
                      >
                        COPY
                      </button>
                    </div>
                  </div>
                </Col>
                <Col md={2} className=" col-md-2">
                  <img
                    src={qrcode.src} className="ht-100 float-end mb-2 mt-2"
                    alt="qrcode"
                  />
                </Col>
              </Row>
            </Card.Body>
            <Row className=" row-sm px-4">
              <Col lg={4} xl={4}>
                <Card className="border custom-card">
                  <Card.Body>
                    <div className="d-flex">
                      <span className="crypto-icon bg-primary-transparent me-3 my-auto">
                        <i className="fe fe-arrow-down-left text-primary"></i>
                      </span>
                      <div>
                        <p className="text-uppercase tx-13 text-muted mb-1">
                          Received
                        </p>
                        <h5>
                          4,342.4545
                          <span className="tx-14 text-muted font-weight-normal mx-1">
                            BTC
                          </span>
                        </h5>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} xl={4}>
                <Card className="card border custom-card">
                  <Card.Body>
                    <div className="d-flex">
                      <span className="crypto-icon bg-primary-transparent me-3 my-auto">
                        <i className="fe fe-arrow-up-right text-primary"></i>
                      </span>
                      <div>
                        <p className="text-uppercase tx-13 text-muted mb-1">
                          Sent
                        </p>
                        <h5>
                          5,194.246
                          <span className="tx-14 text-muted font-weight-normal mx-1">
                            BTC
                          </span>
                        </h5>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} xl={4}>
                <Card className=" border custom-card">
                  <Card.Body >
                    <div className="d-flex">
                      <span className="crypto-icon bg-primary-transparent me-3 my-auto">
                        <i className="fas fa-wallet text-primary"></i>
                      </span>
                      <div>
                        <p className="text-uppercase tx-13 text-muted mb-1">
                          Balance
                        </p>
                        <h5>
                          2.33823
                          <span className="tx-14 text-muted font-weight-normal mx-1">
                            BTC
                          </span>
                        </h5>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card>

          {/* <!-- row --> */}

          <Row className=" row-sm">
            {walletinfo.map((items, index) => (
              <Col xl={6} lg={12} md={12}

                key={index}
                data-index={index}
              >
                <Card className="custom-card wallet">
                  <Card.Body>
                    <label className="main-content-label mb-2">
                      {items.Wallet}
                    </label>
                    <br />
                    <span className="text-muted">{items.Walletaddress}</span>
                    <div className="d-flex mt-4">
						<div className="wd-40 ht-40 me-3 my-auto">
                      <img
                        src={items.Currencies}
                        alt="cureency"
                      />
						</div>
                      <div>
                        <span className="text-uppercase tx-14 mt-4 text-muted">
                          {items.ETHINFO}
                        </span>
                        <div className="d-flex my-auto">
                          <h4 className="mt-1 mb-0">{items.VAlueofETH}</h4>
                          <span className="mt-auto mx-2">
                            {items.Ethshortcut}
                          </span>
                        </div>
                      </div>
					  <div className="wd-50 ht-50  my-auto ms-auto float-end">
                      <img
                        src={items.EthQRcode}
                        alt="rth"
                      />
					  </div>
                    </div>
                    <div className="input-group my-4">
                      <span className="input-group-addon-left bg-light">
                        <i className={`cf cf-${items.bitcoin}`}></i>
                      </span>
                      <input
                        type="text"
                        className="form-control input-lg"
                        defaultValue="ac34290d04cc54f02d22"
                        id="ethereum-wallet"
                      />
                      <span
                        className="input-group-addon-right bg-light clipboard-icon"
                        data-clipboard-target="#ethereum-wallet"
                      >
                        <i className="fe fe-copy"></i>
                      </span>
                    </div>
                    <Row>
                      <Col md={6
                      } >
                        <p className="text-uppercase tx-13 text-muted mb-1">
                          {items.EthoReceived}
                        </p>
                        <div className="d-flex my-auto">
                          <span className="crypto-icon bg-primary-transparent me-3">
                            <i
                              className={`fe fe-arrow-down-${items.Ethohigh} text-primary`}
                            ></i>
                          </span>
                          <h5 className="my-auto">{items.EthoReceivedmoney}</h5>
                          <span className="my-auto ms-2">
                            {items.EthCurrencies}
                          </span>
                        </div>
                      </Col>
                      <Col md={6} className=" mt-3 mt-md-0">
                        <p className="text-uppercase tx-13 text-muted mb-1">
                          {items.EthoSent}
                        </p>
                        <div className="d-flex my-auto">
                          <span className="crypto-icon bg-primary-transparent me-3">
                            <i className="fe fe-arrow-up-right text-primary"></i>
                          </span>
                          <h5 className="my-auto">{items.EthoSentmoney}</h5>
                          <span className="my-auto ms-2">
                            {items.EthCurrencies}
                          </span>
                        </div>
                      </Col>
                    </Row>
                    <Row className=" mt-4">
                      <div className="col-6">
                        <button className="btn btn-block btn-primary">
                          {items.EthoDeposit}
                        </button>
                      </div>
                      <div className="col-6">
                        <button className="btn btn-block btn-outline-primary">
                          {items.EthoWithdraw}
                        </button>
                      </div>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

	{/* <!-- Row End --> */}
    </div>
    </>
  )
}

Wallet.layout = "Contentlayout"


export default Wallet