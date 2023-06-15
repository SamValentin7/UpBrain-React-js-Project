import Navbar from '../../common/navbar/Navbar'
import TicTacToe from '../../components/gamePanel/tic-tac-toe/TicTacToe'
import './games.css'


const Games = () => {

    return (
        <div>
            <Navbar />
            <TicTacToe/>
        </div>
    )
}

export default Games