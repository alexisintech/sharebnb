export default function Card(){
  return(
    <div className="card">
      <img src="../imgs/poetry-picnic.jpg" className="card--image" />
      <div className="card--stats">
          <img src="../imgs/star.png" className="card--star" />
          <span>5.0</span>
          <span className="gray">(6) • </span>
          <span className="gray">USA</span>
      </div>
      <p>Poetry Picnic</p>
      <p><span className="bold">From $35</span> / person</p>
    </div>
  )
}