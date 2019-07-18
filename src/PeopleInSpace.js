import React,{useState, useEffect} from 'react'
import axios from "axios";
import { Image, Statistic } from 'semantic-ui-react'



// const PeopleInSpace = () => (
// <Statistic.Group>
//     <Statistic>
//       <Statistic.Value >
//           42
//         <Image src='https://freedesignfile.com/upload/2017/08/astronaut-moon-icon-vector.png' width='70px' inline circular />
//       </Statistic.Value>
//       <Statistic.Label>Humans in Space </Statistic.Label>
//     </Statistic>
//   </Statistic.Group>
// )

// export default PeopleInSpace



const PeopleInSpace = () => {
    let imgURl= 'https://freedesignfile.com/upload/2017/08/astronaut-moon-icon-vector.png';
    const [numPeopleInSpace, setNumPeopleInSpace] = useState("");

    useEffect(() => {
        //to request information from the server
        axios.get('http://api.open-notify.org/astros.json?callback=?')        
        //if successful
        .then(success => {
            console.log('Success');
            console.log(success);
            console.log(success.data, 'DATA');
            console.log(success.data['number'], 'Number');
            console.log(success.data.number, 'Number');


        })
        //if not successful
        .catch(failure => {
            console.log('Failure');
        })
    }, [])


    return(
           
            <div> some value</div>

  
    );
}

export default PeopleInSpace;