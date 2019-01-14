/**
 * Shared Configuration Util
 * @author Phani Mahesh
 */
import atob from 'atob';

let CONFIG;
if (process.env.NODE_ENV === 'development') {

    CONFIG = JSON.parse(process.env.CONFIG);

} else {

    //Just to avoid any unexpected issues
    //the CONFIG object is processed as a base64 string

    CONFIG = JSON.parse(atob(process.env.CONFIG));

}

export default CONFIG;