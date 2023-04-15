import React from 'react'
import Fade from 'react-reveal/Fade';
import './ServicesSection.css'

import IconBed from '../../assets/icon-bed.jpg'
import IconExercise from '../../assets/icon-exercise.jpg'
import IconFacilities from '../../assets/icon-facilities.jpg'
import IconSupport from '../../assets/icon-support.jpg'
import IconMentoring from '../../assets/icon-mentoring.jpg'
import IconMonitoring from '../../assets/icon-monitoring.jpg'
// import IconMoneyManagement from '../../assets/icon-money-management.jpg'
// import IconJobs from '../../assets/icon-jobs.jpg'
// import IconMeals from '../../assets/icon-meals.jpg'
// import IconTransport from '../../assets/icon-transport.jpg'
// import IconStaff from '../../assets/icon-staff.jpg'
// import IconFamily from '../../assets/icon-family.jpg'



// import Group from '../../assets/group.jpg'


const ServicesSection = () => {
    return (
        <>
        <div className='ServicesSection'>
            <div className="ServicesSection-container">
                <div className="content">
                            <Fade bottom>
                                <div className='Services-thumbnail'>
                                <img src={IconBed} height="50" alt="bed icon" loading="lazy"/>
                                <p>Recruitment</p><br/>
                                <p>Luctus magnis ut taciti nam augue arcu auctor nunc. Et lobortis accumsan augue justo dapibus tortor.</p>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='Services-thumbnail'>
                                <img src={IconExercise} height="50" alt="Person Exercisign Icon" loading="lazy"/>
                                <p>Career Growth</p><br/>
                                <p>Luctus magnis ut taciti nam augue arcu auctor nunc. Et lobortis accumsan augue justo dapibus tortor.</p>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='Services-thumbnail'>
                                <img src={IconFacilities} height="50" alt="Facility Amenities icon" loading="lazy"/>
                                <p>Gigs</p><br/>
                                <p>Luctus magnis ut taciti nam augue arcu auctor nunc. Et lobortis accumsan augue justo dapibus tortor.</p>
                                </div>
                            </Fade>

                            
                            <Fade bottom>
                                <div className='Services-thumbnail'>
                                <img src={IconSupport} height="50" alt="Heart icon" loading="lazy"/>
                                <p>HR Solution</p><br/>
                                <p>Luctus magnis ut taciti nam augue arcu auctor nunc. Et lobortis accumsan augue justo dapibus tortor.</p>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='Services-thumbnail'>
                                <img src={IconMentoring} height="50" alt="Mentoring icon" loading="lazy"/>
                                <p>Payroll Services</p><br/>
                                <p>Luctus magnis ut taciti nam augue arcu auctor nunc. Et lobortis accumsan augue justo dapibus tortor.</p>
                                </div>
                            </Fade>


                            <Fade bottom>
                                <div className='Services-thumbnail'>
                                <img src={IconMonitoring} height="50" alt="Nursing Monitoring icon" loading="lazy"/>
                                <p>Workforce System</p><br/>
                                <p>Luctus magnis ut taciti nam augue arcu auctor nunc. Et lobortis accumsan augue justo dapibus tortor.</p>
                                </div>
                            </Fade>

                </div>
            </div>


            {/* <div className='group'>
            <Fade bottom>
                <img src={Group} width="500px" height="320px" alt="Company Team" loading="lazy" />
            </Fade>
            </div> */}



        </div>
        </>
    )
}

export default ServicesSection
