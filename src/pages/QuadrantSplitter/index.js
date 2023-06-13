import React, { useState } from 'react';


function Index(props) {
    const [status, setStatus] = useState("")
    const [status1, setStatus1] = useState("")
    const [status2, setStatus2] = useState("")

    const Click = () => {
        setStatus("1st")
    }
    const Click1 = () => {
        setStatus1("2nd")
    }
    const Click2 = () => {
        setStatus2("3rd")
    }
    return (
        <div className='container-fluid div-color' onClick={Click}>

            {status == "1st" &&

                <>
                    <div className='row' style={{ height: "50vh" }}>
                        <div className='col-6 div1'>

                        </div>
                        <div className='col-6 div2'></div>
                    </div>
                    <div className='row' style={{ height: "50vh" }} >
                        <div className='col-6 div3' onClick={Click1} >
                            {status1 == "2nd" &&
                                <>
                                    <div className='row' style={{ height: "25vh" }}>
                                        <div className='col-6 div5' ></div>
                                        <div className='col-6  div6' onClick={Click2}>
                                        {status2 == "3rd" &&
                                        <>
                                        <div className='row' style={{ height: "12.5vh" }}>
                                        <div className='col-6 div9' ></div>
                                        <div className='col-6 div10' ></div>
                                            </div>
                                            <div className='row' style={{ height: "12.5vh" }}>
                                        <div className='col-6 div11' ></div>
                                        <div className='col-6 div12' ></div>
                                            </div></> }
                                        </div>
                                    </div>
                                    <div className='row' style={{ height: "25vh" }}>
                                        <div className='col  div7'></div>
                                        <div className='col div8'></div>
                                    </div></>}
                        </div>
                        <div className='col-6 div4'></div>
                    </div>
                </>}

        </div>

    );
}

export default Index;