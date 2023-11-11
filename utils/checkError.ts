import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

 const checkError = ( error: string | undefined = undefined ) => {
    if(error) {
        toast.error(`${error}`, {
            theme: 'dark',
        })
    }
}

export default checkError