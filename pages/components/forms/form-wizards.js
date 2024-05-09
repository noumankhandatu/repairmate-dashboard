import dynamic from 'next/dynamic';
import React from 'react'
import PageHeader from '../../../shared/layout-components/page-header/page-header'
// import { AccordionWizardForm, VerticalLinearStepper, WizardForm } from "../../../shared/data/forms/formwizards";
import Seo from '../../../shared/layout-components/seo/seo';
const AccordionWizardForm = dynamic(import('../../../shared/data/forms/formwizards').then(mod => mod.AccordionWizardForm), { ssr: false })
const VerticalLinearStepper = dynamic(import('../../../shared/data/forms/formwizards').then(mod => mod.VerticalLinearStepper), { ssr: false })
const WizardForm = dynamic(import('../../../shared/data/forms/formwizards').then(mod => mod.WizardForm), { ssr: false })



const FormWizards = () => {
  return (
    <div>
      <Seo title="Form Wizards"/>

      <PageHeader title="Form wizard" item="Forms" active_item="Form wizard"/>
      
      {/* <!-- Row --> */}
    <div className="row row-sm">
      <div className="col-lg-12 col-md-12">
        <div className="card custom-card">
          <div className="card-body">
            <div>
              <h6 className="main-content-label mb-1">Basic Stepper </h6>
              <p className="text-muted card-sub-title">
                Below is an example of a basic horizontal form wizard.
              </p>
            </div>
            <div id="wizard1">
              <AccordionWizardForm />
            
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Row --> */}
    <div className="row row-sm">
      <div className="col-lg-12 col-md-12">
        <div className="card custom-card">
          <div className="card-body">
            <div>
              <h6 className="main-content-label mb-1">validator Form Wizard</h6>
              <p className="text-muted card-sub-title ">
                A basic content wizard with vertical orientation.
              </p>
            </div>
            
            <WizardForm />
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Row --> */}
    <div className="row row-sm">
      <div className="col-lg-12 col-md-12">
        <div className="card custom-card">
          <div className="card-body accordion-wizard">
            <div>
              <h6 className="main-content-label mb-1">Accordion Wizard</h6>
              <p className="text-muted card-sub-title">
                A basic content wizard with vertical orientation.
              </p>
            </div>
            <VerticalLinearStepper />
          </div>
        </div>
      </div>
    </div>
    {/* <!-- End Row --> */}
						</div>
  )
}
FormWizards.layout = "Contentlayout"

export default FormWizards