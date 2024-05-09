import React, { Fragment } from 'react'
import Seo from '../../../shared/layout-components/seo/seo'
import { DayCounter } from "../../../shared/data/pages/DataUnderConstruction"

//Images
import logolight from "../../../public/assets/img/brand/logo-light.png"

const UnderConstruction = () => {
  function Swicherbutton() {
    document.querySelector(".demo_changer").classList.toggle("active");
    document.querySelector(".demo_changer").style.right = "0px";
 }

 function remove  () {
  document.querySelector(".demo_changer").style.right = "-270px";
  document.querySelector(".demo_changer").classList.remove("active");
}
  return (
    <div>
        <Seo title="Under construction"/>

{/* <!-- Page --> */}
<Fragment>
    {/* <!-- Page --> */}
    <div className="page main-signin-wrapper bg-primary construction"  >
      <div className="d-flex header-setting-icon demo-icon fa-spin">
        
			<a className="nav-link icon" onClick={() => Swicherbutton()}>
          <i className="fe fe-settings settings-icon "></i>
			</a>
      </div>
      <div className="construction1 text-center details text-white"
       onClick={() => remove()}
       >
        <div>
          <img
            src={logolight.src}
            className="mb-5"
            alt="logo"
          />
          <h4 className="text-center text-white tx-30 font-weight-bold ">
            We are Comming soon
          </h4>
          <p className="text-white-50 tx-15">
           {` We're making the system more awesome.we'll`} be back shortly.
          </p>
          <div id="launch_date">
            <DayCounter />
          </div>
        </div>
        <div className="text-center">
          © 2022
          <a href="https://www.spruko.com/" className="text-white-50 mx-2">
            Spruko
          </a>
          All rights reserved.
        </div>
      </div>

    </div>
    {/* <!-- End Page --> */}
  </Fragment>
		{/* <!-- End Page --> */}
    </div>
  )
}
UnderConstruction.layout = "Authenticationlayout"

export default UnderConstruction