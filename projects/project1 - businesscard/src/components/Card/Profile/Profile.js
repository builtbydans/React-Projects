import './Profile.css';

const Profile = (props) => {
  return (
    <div className="card--profile">
      <img
        className="card--profile-image"
        src="https://images.squarespace-cdn.com/content/v1/5215f8e7e4b04942a67a3c8f/1589213258778-94RRWW77T6CZEK3WF0ZS/Corporate+linkedin+headshots+London-1.jpg?format=2500w"
        alt="mark-zuckerberg"
      />
      <h1>John Doe</h1>
      <h3>VP of Software Systems</h3>
      <p>Softex Inc.</p>
    </div>
  )
}

export default Profile;
