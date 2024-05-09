import React from 'react'
import Seo from '../../../shared/layout-components/seo/seo'
import Link from 'next/link'

const Error500 = () => {
  return (
    <div>
        <Seo title="Error 505"/>

     {/* <!-- Row --> */}
	 <div className="error-bg">

<div className="main-container container-fluid">
	<div className="inner-body">

		<div className="row sidemenu-height">
			<div className="col-md-12">
				<div className="construction1 text-center details">
					<div className="">
						<div className="col-lg-12">
							<h1 className="tx-140 mb-0">505</h1>
						</div>
						<div className="col-lg-12 ">
							<h1>Oops.The Page you are looking  for {`doesn't`}  exit..</h1>
							<h6 className="tx-15 mt-3 mb-4 text-muted">You may have mistyped the address or the page may have moved. Try searching below.</h6>
							<Link href="/components/dashboard/dashboard/" className="btn ripple btn-success text-center mb-2">
								Back to Home
							</Link>
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
  )
}
Error500.layout = "Contentlayout"

export default Error500