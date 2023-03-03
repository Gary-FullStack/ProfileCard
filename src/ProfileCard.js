
function ProfileCard({ title, handle, image, description }) {

	return (
		<div className="card">

			<div className="card-image">
				<figure className="image is-1x1">
					<img src={image} alt="pda logo" />
				</figure>
			</div >

			<div className="card-content">
				<div className="media-content">
					<p className="title is-4">{title}</p>
					<p className="subtitle is-6" >{handle}</p>
				</div>
				<hr />
				<div className="content">
					{description}
				</div>
			</div>

		</div >
	);

}

export default ProfileCard;