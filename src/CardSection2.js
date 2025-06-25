import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { data } from './All';
import { dta } from './dta';

function CardSections2() {

    // const [data1, setData] = useState('');

    useEffect(() => {
        localStorage.setItem('card2', JSON.stringify(dta.wdata))
    }, [])

    var card2 = JSON.parse(localStorage.getItem('card2')) || []

    console.log(card2)

    const opencata = useNavigate();
    const opencatalog = () => {
        opencata('/catalog')
    }
    return (
        <div className='mt-5'>
            <div className='car container' >
                <div className='car1'>
                    <div className='car2'>
                        <div className='text-start stuf'><h2>Wooden Toys</h2></div>
                        <div className='text-end line'>
                            <Link to={'/catalog'} className='line1' style={{ color: "black", textDecoration: "none" }}>See All Toys
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div className='pt-5'>
                        <div className='card1' onClick={() => { opencatalog() }}>
                            {
                                card2 &&
                                card2.map((data) => (
                                    <div className='sec1' key={data.id}>
                                        <img src={data.url} alt='' height={200} ></img>
                                        <p className='pt-2'>{data.name}</p>
                                        <button className='btn ' style={{ backgroundColor: "#a5c926" }}>{data.price}</button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardSections2
