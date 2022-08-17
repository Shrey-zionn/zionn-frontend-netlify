import React, { useState } from 'react'
import { useEffect } from 'react'
import * as api from '../axios'
import "./scoops.css"

const Scoops = () => {
    const [details, setDetails] = useState([]);
    useEffect(() => {
        async function f() {
            let res = await api.scoopsData()

            setDetails(res.data.result);
        }

        f()

    }, []);
    return (
        <div>
            <div className='container'>
                <div>
                    <h1>
                        Scoops
                    </h1>
                    <>
                        {details.map((detail) => {
                            return (
                                <div>
                                    <p className='scoop-tag'>{detail.tag}</p>
                                    <h6 className='scoop-title'><a className='scoop-link' target="__blank" href={detail.url}>{detail.title}</a></h6>
                                    <p>{detail.para}</p>
                                    <hr />
                                </div>

                            )

                        })}
                    </>
                </div>
            </div>
        </div>
    )
}

export default Scoops