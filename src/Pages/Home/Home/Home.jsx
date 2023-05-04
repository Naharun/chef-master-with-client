import { useEffect, useState } from 'react';
import Banner from './Banner';
import SingleChefData from '../SingleChefData';

function Home() {
    const [chefdata, setChefData] = useState([]);

    useEffect(()=>{
        fetch('chef.json')
        .then(res => res.json())
        .then(data => setChefData(data))
    },[])

    return (

        <div>
            <Banner/>
            <div className='mt-5'>
                <h3 className='text-center'>Chef Section</h3>
                <hr className='w-50 mx-auto'/>
                {
                    chefdata.map(data => <SingleChefData
                        key={data.id}
                        data={data}
                    ></SingleChefData>)
                }

            </div>
        </div>
    );
}

export default Home;