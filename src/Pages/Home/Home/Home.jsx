import { useEffect, useState } from 'react';
import Banner from './Banner';
import SingleChefData from '../RecipeData/SingleChefData';
import { Container, Row } from 'react-bootstrap';
import Review from '../../ExtraSection/Review';
import Resturent from '../../ExtraSection/Resturent';

function Home() {
    const [chefdata, setChefData] = useState([]);

    useEffect(() => {
        fetch('https://chef-master-with-server-naharun.vercel.app/chefData/')
            .then(res => res.json())
            .then(data => setChefData(data))
    }, [])

    return (

        <div>
            <Banner />
            <div className='mt-5'>
                <h3 className='text-center'>Chef Section</h3>
                <hr className='w-50 mx-auto' />
                <Container>
                    <Row>
                        {
                            chefdata.map(data => <SingleChefData
                                key={data.id}
                                data={data}
                            ></SingleChefData>)
                        }
                    </Row>
                </Container>
            </div>
            <br />
            <Review></Review>
            <Resturent></Resturent>
        </div>
    );
}

export default Home;