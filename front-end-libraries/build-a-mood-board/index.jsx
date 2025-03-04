export function MoodBoardItem({ color, image, description }) {
  return (
    <div className="mood-board-item"
      style={{
        backgroundColor: color
      }}
    >
      <img className="mood-board-image"
        src={image}
      />
      <h3 className="mood-board-text">
        {description}
      </h3>
    </div>
  )
}

export const MoodBoard = () => {
  return (
    <div>
      <h1 className="mood-board-heading">
        Destination Mood Board
      </h1>
      <div className="mood-board">
        <MoodBoardItem
          color="hsl(220, 100%, 35%)"
          image="https://upload.wikimedia.org/wikipedia/commons/3/3c/Neuschwanstein_Castle_2024-02.jpg"
          description="Neuschwanstein Castle"
        />
        <MoodBoardItem
          color="hsl(155, 100%, 35%)"
          image="https://upload.wikimedia.org/wikipedia/commons/f/f0/2020_08_Bojnice_castle_1.jpg"
          description="Bojnice castle"
        />
        <MoodBoardItem
          color="hsl(180, 100%, 35%)"
          image="https://upload.wikimedia.org/wikipedia/commons/d/db/Chiba_Castle%2C_Chiba_Prefecture%3B_October_2016_%2812%29.jpg"
          description="Chiba Castle"
        />
        <MoodBoardItem
          color="hsl(40, 100%, 35%)"
          image="https://upload.wikimedia.org/wikipedia/commons/c/c7/Cardiff_Castle_2.jpg"
          description="Cardiff Castle"
        />
        <MoodBoardItem
          color="hsl(85, 100%, 85%)"
          image="https://upload.wikimedia.org/wikipedia/commons/4/49/Himeji_castle_q.jpg"
          description="Himeji castle"
        />
        <MoodBoardItem
          color="hsl(40, 100%, 5%)"
          image="https://upload.wikimedia.org/wikipedia/commons/b/b0/Bodiam_Castle_%28192760813%29.jpg"
          description="Bodiam Castle"
        />
      </div>
    </div>
  )
}
