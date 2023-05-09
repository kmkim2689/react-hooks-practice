import React, { useEffect, useState } from 'react';
import axios from 'axios';

// api call을 위하여 axios를 사용
// 터미널 > npm install axios
// axios import
function EffectTutorials() {
    // useEffect의 두 가지 인자들
    // 첫 번째 인자 : 함수
    // 페이지가 렌더링될 때 즉시 호출될 함수

    // 두 번째 인자 : state 변수 리스트
    // 해당 리스트 안에 있는 변수의 값이 변경될 때마다, 첫 번째 인자로 설정해놓은 함수가 실행됨
    // 주의 : 두 번째 인자에 아무것도 넣지 않는다면, 재렌더링이 일어날 때마다 첫번째 인자 함수가 실행될 것이다.
    // 이는 네트워크 통신 시 주의해야 하는데, 네트워크 통신의 경우 처음 렌더링될 때 한번만 이뤄지는 것이 이상적이기 때문
    // 아래의 예시는 좋지 못한 방식. 매번 렌더링 할 때마다 api 호출을 진행하기 때문에 성능 상 이점을 얻지 못함
    // 해당 코드를 실행시키면, api 호출은 2번 일어나게 됨.(총 2번의 state 변수값의 변화 -> 렌더링 2회 발생)
    // 한 번은, 처음 useState를 통해 state 변수의 값을 지정했을 때 한 번,
    // 다른 한번은 api 통신을 통하여 response를 받아오고 setData 함수를 사용하여 다시 state 변수값을 지정할 때 한 번.
    
    // const [data, setData] = useState("");
    // useEffect(() => {
    //     // 네트워크 통신
    //     axios.get("https://jsonplaceholder.typicode.com/comments")
    //     .then((response) => { 
    //         setData(response.data[1].email);
    //         console.log("api was called.")
    //         console.log(response.data[1].email)

    //     })
        
    // })

    // 그렇다면 어떻게 한번만 일어나도록 할 수 있는가?
    // 두 번째 인자로 빈 배열을 넘겨준다면, 단 한번만 실행되도록 할 수 있음.
    // application  실행 시, 한번만 api가 호출되는 것을 알 수 있음.

    // const [data, setData] = useState("");
    // useEffect(() => {
    //   // 네트워크 통신
    //   axios.get("https://jsonplaceholder.typicode.com/comments")
    //   .then((response) => { 
    //       setData(response.data[1].email);
    //       console.log("api was called.")
    //       console.log(response.data[1].email)

    //   }, [])
        
    // })

    // 권장하지 않는 방법.
    const [count, setCount] = useState(0);
    const [data, setData] = useState("");

    const onClick = () => {
      setCount(count + 1);
    }

    useEffect(() => {
      // 네트워크 통신
      axios.get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => { 
          setData(response.data[1].email);
          console.log("api was called.")
          console.log(response.data[1].email)

      }, [count])
        
    })
  return (
    <>
    <div>EffectTutorials {data}</div>
    <button onClick={onClick}>button {count}</button>
    </>
    
  )
}

export default EffectTutorials