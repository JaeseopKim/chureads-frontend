//rafce 축약 입력 시 리액트 기본코드 작성

import React from 'react'
import Greeting from '../components/sample/Greeting'

const Sample = () => {
    // logic
    //const [userName, setUserName] = useState("");

    const handleButtonClick = (data) => {
        console.log("click!!", data);
    }
    // view
    return (
        <div>Sample
            <Greeting name="하경아" onButtonclick={handleButtonClick} />
            <Greeting name="최선영" onButtonclick={handleButtonClick} />
            <Greeting onButtonclick={handleButtonClick} />
        </div>
    )
}

export default Sample