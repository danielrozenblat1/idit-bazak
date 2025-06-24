import FormScreen from "../components/formScreen/FormScreen"
import Certificates from "../components/recommends/Certificates"
import ClinicManagementSyllabus from "../components/sillabus/Sillabus"
import EligibilitySection from "../components/whoFits/WhoFits"
import styles from "./ForthScreen.module.css"
const ForthScreen=()=>{


    return <>
    <div className={styles.background}>
 <ClinicManagementSyllabus/>
    <EligibilitySection/>
     <Certificates/>
    <FormScreen/>
    </div>
    
    
    </>
}
export default ForthScreen