import React, {useState, useEffect} from 'react';
import classes from "./dashboard.module.css";
import Image from 'next/image';
import banner_img from "../../../public/assets/project_banner_img.png";
import { useRouter } from 'next/router';
import PropertyForm from '../../../components/screenComponents/dashboardScreen/propertyForm';
import ProjectForm from '../../../components/screenComponents/dashboardScreen/projectForm';
import AgentForm from '../../../components/screenComponents/dashboardScreen/agentForm';
import DeveloperForm from '../../../components/screenComponents/dashboardScreen/developerForm';

function Dashboard() {

  const [dashboardType, setDashboardType] = useState();
  const router = useRouter();
  const {id} = router.query;

  useEffect(()=>{
    if(id){
      setDashboardType(id);
    }
  },[id])

  return (
  <div className={classes.main_container}>

    <div className={classes.first_section_body}>
      <div className={classes.banner_img_container}>
        <div className={classes.overlay} />
        <Image
          src={banner_img}
          className={classes.banner_img}
          alt="hero_banner_img"
          layout="fill"
        />
      </div>
      <div className={classes.first_section_content_section}>
        <div className={classes.dashboard_heading}>
          <h1 data-aos="fade-right">WELCOME TO AUQTA{"'"}s {dashboardType} DASHBOARD</h1>
        </div>
        {/* <h3 style={{color: 'white'}}>
          Add Property for Sale or Rent
        </h3>
        <h2 style={{color: 'white'}}>
        Want to attract more buyers or tenants from all over Pakistan? Get in Touch with an Auqta specialist and digitalise your property to increase market potential.
        </h2> */}
        {/* <p data-aos="fade-right">Lorem ipsum is just a dummy text which is used to fill in spaces when you have nothing else to write over there</p> */}
      </div>
    </div>

    <div className={classes.dashboard_container}>
      {
        dashboardType === 'property' ? 
        <PropertyForm />
        : dashboardType === 'project'
        ?
        <ProjectForm /> 
        : dashboardType === 'agent' ?
        <AgentForm/>
        : dashboardType === 'developer' &&
        <DeveloperForm/>
      }
    </div>

  </div>
  )
}

export default Dashboard;