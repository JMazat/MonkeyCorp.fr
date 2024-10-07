// //TODO
// const express = require('express')
// const app = express()
// const port = 5000
 
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const createJsx = () => {
  console.log("ok")
  return null
}

function DiceRoll(){
  const getRandomNumber = () => {
    return Math.ceil(Math.random() * 6);
  };

  // const [num, setNum] = useState(getRandomNumber());

  const handleClick = () => {
    const newNum = getRandomNumber();
    setNum(newNum);
  };
  let num = 0
  return (
    <div>
      Your dice roll: {num}.
      <button onClick={handleClick}>Click to get a new number</button>
    </div>
  );
};

<DiceRoll/>
