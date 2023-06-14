import Ambulance from "../imgs/Ambulance";
import Clinic from "../imgs/Clinic";
import Briefcase from "../imgs/Briefcase";
import Hospital from "../imgs/Hospital";
import Storage from "../imgs/Storage";
const getIcon = svg => {
    switch (svg) {
        case 'Ambulance':
            return <Ambulance />
            break;
        case 'Clinic':
            return <Clinic />
            break;
        case 'FirstAidKit':
            return <Briefcase />
            break;
        case 'Hospital':
            return <Hospital />
            break;
        case 'Storage':
            return <Storage />
            break;
        default:
            console.log('Default case in getIcon function - src/components/helpers/getIcon');
            return;
            break;
    }
}

export default getIcon