import React from 'react';
import CountUp from 'react-countup';


const Cards = ({data : {confirmed, recovered, deaths, countryDetail, lastUpdate}}) => {
  if (!confirmed) {
    return 'Loading';
  } 

  console.log(recovered.value)
  return (
    <div id="services" className="covid-info">
    <div className="container">
      <div className="row text-center pb-2">

        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="wrapper-covid-info infected">
          <div className="service-icon"><i className="fa fa-bug" aria-hidden="true"></i>
          </div>
          <h3>Infected</h3>
          <p>People infected for Covid-19 </p>
          <ul className="list-group">
            <li className="list-group-item highlight">
              <CountUp start={0} end={confirmed.value} duration={2.6} separator="," />
            </li>
            <li className="list-group-item">Last Updated: {new Date(lastUpdate).toDateString()}</li>
          </ul>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="wrapper-covid-info recovered">
          <div className="service-icon"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
          </div>
          <h3>Recovered</h3>
          <p>People recovered for Covid-19 </p>
          <ul className="list-group">
          <li className="list-group-item highlight">
            {recovered.value ? <CountUp start={0} end={recovered.value} duration={2.6} separator="," /> : `Couldn't fetch Global Recovered`}
            </li>
            <li className="list-group-item">Last Updated: {new Date(lastUpdate).toDateString()} </li>
          </ul>
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="wrapper-covid-info deaths">
          <div className="service-icon"><i className="fa fa-frown-o" aria-hidden="true"></i>
          </div>
          <h3>Deaths</h3>
          <p>People Deaths for Covid-19 </p>
          <ul className="list-group">
          <li className="list-group-item highlight">
              <CountUp start={0} end={deaths.value} duration={2.6} separator="," />
            </li>
            <li className="list-group-item">Last Updated: {new Date(lastUpdate).toDateString()}</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cards;