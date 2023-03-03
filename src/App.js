import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortonaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";



function App() {

	return (

		<div>

			<section className="hero is-small is-primary">
				<div className="hero-body">
					<p className="title">Personal Digital Assistants</p>
				</div>
			</section>

			<div className="container">

				<section className="section">
					<div className="columns">
						<div className="column is-3">
							<ProfileCard title="Alexa" handle="@alexa69" image={AlexaImage} description="This the Amazon Assistant" />
						</div>
						<div className="column is-3">
							<ProfileCard title="Cortana" handle="@cortana69" image={CortonaImage} description="This is the Microsoft assistant." />
						</div>
						<div className="column is-3">
							<ProfileCard title="Siri" handle="@siri69" image={SiriImage} description="This is the Apple assistant." />
						</div>
					</div>

				</section>
			</div>

		</div>
	);
}


export default App;




