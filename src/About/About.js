import React from 'react'
import './about.css'
import p1 from '../images/aboutImg/r1.jpg'
import blessing from '../images/profile/bee.jpeg'
import ola from '../images/profile/codin.jpeg'
import nn from '../images/profile/Nnamdi.jpeg'

function About() {
  let dev5Scr =
    'https://media-exp1.licdn.com/dms/image/C4E03AQGTPH_TDnroLA/profile-displayphoto-shrink_800_800/0/1621427944762?e=1656547200&v=beta&t=YZRZjtGkrEd3yIE8PKSzRnIJFXbzMLZzM2Knd-nvDWc'
  let dev5Name = 'Kenneth Otoro'
  let bee = 'Blessing O. Ukatu'
  let olayin = 'Olaniyan M A'
  let nnamdi = 'Nebeolisa Nnamdi'

  return (
    <div className="main">
      <div className="row">
        <div className="col-md-6 pt-4">
          <img src={p1} alt="resturant 1" className="ImgeResize" />
        </div>
        <div className="col-md-6 mt-5">
          <h2 className="text-center pt-4 bolder text-danger">
            Our Story So Far
          </h2>
          <hr className="horizontalStyle" />
          <div className="p-4">
            <p className="text-justify">
              At Urban Food Restaurant, we offer distinctive cuisine in an
              formal, informal and friendly setting. Our restaurant enjoys a
              reputation for impeccable service, elegant supper-style décor, and
              exquisite modern and international. Dining at our restaurant is
              like visiting the moon for dinner right within your hometown. An
              exciting blend of authentic foods, cultures, and atmosphere that
              awaits.
            </p>
          </div>
        </div>
      </div>
      <div className="m-3">
        <h2 className="text-center pt-4 bolder text-primary">Meet Our Team</h2>
        <hr className="horizontalStyle" />
        <div className="container p-4">
          <div className="row justify-content-md-center">
            <div class="col-md-3 m-2">
              <TeamImage src={ola} name={olayin} />
              <div className="nameStyle">
                <TeamImageName name={olayin} />
              </div>
            </div>
            <div class="col-md-3 m-2">
              <TeamImage src={blessing} name={bee} />
              <div className="nameStyle">
                <TeamImageName name={bee} />
              </div>
            </div>
            <div class="col-md-3 m-2">
              <TeamImage src={dev5Scr} name={dev5Name} />
              <div className="nameStyle">
                <TeamImageName name={dev5Name} />
              </div>
            </div>
            <div class="col-md-3 m-2">
              <TeamImage src={nn} name={nnamdi} />
              <div className="nameStyle">
                <TeamImageName name={nnamdi} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
// defining resuable functions for images
const TeamImage = (props) => (
  <img
    src={props.src}
    alt={props.name}
    className="card-img-top img-fluid imgSize"
  />
)
const TeamImageName = (props) => (
  <h5 className="card-title mt-1">{props.name}</h5>
)

export default About
