
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortonaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

console.log("AlexaImage");
console.log("SiriImage");



function App() {

	return (
		<div>
			<div>Personal Digital Assistants</div>

			<ProfileCard title="Alexa" handle="@alexa69" />
			<ProfileCard title="Cortana" handle="@cortana69" />
			<ProfileCard title="Siri" handle="@siri69" />
		</div>
	);
}


export default App;