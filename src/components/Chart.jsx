import React from 'react'
import {Chart as ChartJS,ArcElement,Tooltip,Legend} from 'chart.js'
import {Doughnut} from 'react-chartjs-2';
import {Center} from '@chakra-ui/react'
ChartJS.register(ArcElement,Tooltip,Legend)
export default function Chart(props){
 
  const data={
    labels: ['CSE', 'ECE', 'EEE', 'MECH', 'CE'],
    datasets: [
        {
          data: [props.prop.cse,props.prop.ece,props.prop.eee,props.prop.mech,props.prop.ce],
          backgroundColor: ['#60e083','#FF6384', '#36A2EB', '#FFCE56','gray'],
          hoverBackgroundColor: ['#60e083','#FF6384', '#36A2EB', '#FFCE56','gray']
        }
      ],
   
      
}
    return(
      <Center mt='10' mb='10' height='80%'>
        <Doughnut data={data}/>
       
      </Center>
    )
}