import * as React from "react"
import MainContent from "./main_content"
import Offerings from "./offerings"
import TechStation from "./techstation"
import RegistrationForm from "./registrationform"

const MainComponent = ({ mainData }) => (
    <>
        <MainContent mainContent={mainData.mainContent} />
        <Offerings offeringContent={mainData.offeringContent} />
        <TechStation techStationContent={mainData.techStationContent} />
        <RegistrationForm registrationForm={mainData.registrationForm}/>
    </>
)
export default MainComponent
