import { Chessboard } from 'react-chessboard'

function Openings() {
    const chessboardOptions = {
        position: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
    }

    return (
       <div className="p-10 flex gap-10">
    <div className="w-full max-w-[600px] flex-shrink-0 border-2 border-black-500">
        <Chessboard options={chessboardOptions} />
    </div>
    <div className="flex-1">
<h2 className="text-2xl font-bold mb-4">GM daniel Naroditsky's Recommended Openings</h2>
<p className="text-gray-500">White/Black toggle and list will go here.</p>
    </div>
</div>
    )
}

export default Openings