import React, {useState} from 'react'

export default function Board() {

    const [balance,setBalance] = useState(100)

    const [win, setWin] = useState({})

    const initialState = [
        {
            imgSrc: 'https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-umbrella-autumn-season-justicon-flat-justicon.png',
            count: 0 
        },
        {
            imgSrc: 'https://img.icons8.com/emoji/48/000000/basketball-emoji.png',
            count: 0 
        },
        {
            imgSrc: 'https://img.icons8.com/emoji/48/000000/rocket-emji.png',
            count: 0 
        },
        {
            imgSrc: 'https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-candle-diwali-justicon-flat-justicon-2.png',
            count: 0 
        },
        {
            imgSrc: 'https://img.icons8.com/emoji/48/000000/cow-emoji.png',
            count: 0 
        },
        {
            imgSrc: 'https://img.icons8.com/emoji/48/000000/mobile-phone.png',
            count: 0 
        },
        {
            imgSrc: 'https://img.icons8.com/emoji/48/000000/kite-.png',
            count: 0 
        },
        {
            imgSrc: 'https://img.icons8.com/emoji/48/000000/bicycle-emoji.png',
            count: 0 
        },
        {
            imgSrc: 'https://img.icons8.com/emoji/48/000000/rose-emoji.png',
            count: 0 
        },
        {
            imgSrc: 'https://img.icons8.com/doodle/48/000000/butterfly.png',
            count: 0 
        },
        {
            imgSrc: 'https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-pigeon-birds-icongeek26-flat-icongeek26.png',
            count: 0 
        },
        {
            imgSrc: 'https://img.icons8.com/emoji/48/000000/snake-emoji.png',
            count: 0 
        }
    ]

    const [board,setBoard] = useState(initialState)

    const [time, setTime] = useState(10)

    const [showBtn, setShowBtn] = useState(true)

    const [currentWin, setCurrentWin] = useState(0)


    const handleClick = (id) => {
        if(!showBtn){
            let updatedState = [...board]
            updatedState[id].count++
            setBoard(updatedState)
        }else{
            setBoard(initialState)
        }
    }

    const handleCheck = () => {

        
        setShowBtn(false)

        var sec = 10
        let timer = setInterval(function() {
            sec--;
            setTime(sec)
        }, 1000);

        setTimeout(()=>{

            const win = Math.round((Math.random() * 11 ))

            setWin(board[win])
            
            let bet = 0;

            let checkArr = []
            
            board.forEach((e,k)=>{
                if(e.count>0){
                    bet = bet + e.count
                    checkArr.push(k)
                }
            })

            if(checkArr.includes(win)){
                setBalance(prev=>prev + (board[win].count*10) - bet)
                setCurrentWin(board[win].count*10)

            }else{
                setBalance(prev=>prev - bet)
                setCurrentWin(0)
            }

            setTime(10)
            setShowBtn(true)
            setBoard(initialState)
            clearInterval(timer)

        }, 10000)
    }

    return (
        <>
            <div className='row d-flex justify-content-center'>
                {
                    board.map((symbol,key)=>{
                        return(
                            <div key={key} className={'col-sm-2 pictures ' + (symbol.count > 0 ? "symbol-selected" : "") }  onClick={()=>handleClick(key)}>
                                    <img src={symbol.imgSrc}/>
                                    <span>{symbol.count}</span>
                            </div>
                        )
                    })
                }
            </div>
            <div className='row my-4'>
                <div className='col '>
                    <div className='d-flex justify-content-center'>
                        {showBtn && <button onClick={handleCheck} className='bet-btn'>Bet</button>}
                    </div>
                </div>
            </div>
            <div className='row my-5'>
                <div className='col-3'>
                    <div className='stat-object'>
                        <div className='stats'>{time}</div>
                        <small>Timer</small>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='stat-object'>
                        <div className='stats'>{balance}</div>
                        <small>Balance</small>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='stat-object'>
                        <img src={win.imgSrc} className='stats'/>
                        <small>Last Item</small>
                    </div>
                </div>
                <div className='col-3'>
                    <div className='stat-object'>
                        <div className='stats'>{currentWin}</div>
                        <small>Last Win</small>
                    </div>
                </div>
            </div>
        </>
    )
}
