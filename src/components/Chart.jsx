import React from 'react'
import {Chart as ChartJS,ArcElement,Tooltip,Legend} from 'chart.js'
import {Doughnut} from 'react-chartjs-2';
ChartJS.register(ArcElement,Tooltip,Legend)



export default function Chart(props){
  const data={
    labels: ['CSE', 'ECE', 'MECH', 'EEE', 'CE'],
    datasets: [
        {
          data: [props.dd, 50, 100,200],
          backgroundColor: ['#60e083','#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }
      ],
   
      
}
    return(
      <center style={{width:'300px'}}>

        <Doughnut data={data} />
      </center>
    )
}