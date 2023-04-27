import React from 'react'
import {Chart as ChartJS,ArcElement,Tooltip,Legend} from 'chart.js'
import {Doughnut, Pie} from 'react-chartjs-2';
import {Center} from '@chakra-ui/react'
ChartJS.register(ArcElement,Tooltip,Legend)
export default function Chart(props){
 
  const data={
    labels: ['CSE','IT', 'ECE', 'EEE', 'MECH', 'CE'],
    datasets: [
        {
          data: [props.prop.cse,props.prop.it,props.prop.ece,props.prop.eee,props.prop.mech,props.prop.ce],
          // backgroundColor: ['#60e083','#FF6384', '#36A2EB', '#FFCE56','gray','pink'],
          // hoverBackgroundColor: ['#60e083','#FF6384', '#36A2EB', '#FFCE56','gray','pink']
          backgroundColor: ['#0E2F44','#52A3CC', '#FFA500', '#90EE90','#7B2CBF','#FFC0CB'],
          hoverBackgroundColor:  ['#0E2F44','#52A3CC', '#FFA500', '#90EE90','#7B2CBF','#FFC0CB'],
        }
      ],
   
      
}
    return(
      <Center mt='10' mb='10' height='80%'>
 
        <Pie data={data}/>
       
      </Center>
    )
}