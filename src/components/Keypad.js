// Code Keypad Component Here

function Keypad (){

    function listenChange (e) {
        console.log('Entering password...');
    }

    return (
        <div>
            <input type="password" onChange={listenChange}/>
        </div>
    )
}

export default Keypad;