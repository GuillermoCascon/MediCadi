import Ambulance from "../imgs/Ambulance.jsx";
import Clinic from "../imgs/Clinic.jsx";
import Briefcase from "../imgs/Briefcase.jsx";
import Hospital from "../imgs/Hospital.jsx";
import Storage from "../imgs/Storage.jsx";

//Return an SVG component based on a String
const getIcon = svg => {
    switch (svg) {
        case 'Ambulance':
            return <Ambulance />
        case 'Clinic':
            return <Clinic />
        case 'Briefcase':
            return <Briefcase />
        case 'Hospital':
            return <Hospital />
        case 'Storage':
            return <Storage />
        default:
            console.log('Default case in getIcon function - src/components/helpers/getIcon');
            return;
    }
}

export default getIcon