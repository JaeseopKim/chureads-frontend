//rafce 축약 입력 시 리액트 기본코드 작성

import React, { useEffect, useState } from 'react'
import Greeting from '../components/sample/Greeting'

const Sample = () => {
    // logic
    const handleButtonClick = (data) => {
        console.log("click!!", data);
    }

    const [userNames, setUserNames] = useState([]);

    useEffect(() => {
        // 컴포넌트 생성시 딱 한번만 실행
        const nameDatas = ["하경아", "최선영", "송의진"];
        setUserNames(nameDatas);

    }, []);


    // view
    return (
        <div>Sample
            {userNames.map((userName, index) =>
                <Greeting key={`userName${index}`} name={userName} onButtonclick={handleButtonClick} />
            )}
        </div>
    )
}

export default Sample