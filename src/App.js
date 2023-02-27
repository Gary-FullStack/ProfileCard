
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortonaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";



function App() {

	return (
		<div>
			<div>Personal Digital Assistants</div>

			<ProfileCard title="Alexa" handle="@alexa69" image={AlexaImage} />
			<ProfileCard title="Cortana" handle="@cortana69" image={CortonaImage} />
			<ProfileCard title="Siri" handle="@siri69" image={SiriImage} />

		</div>
	);
}


export default App;