import StartupForm from "../components/Startup/StartupForm";

const Startup = () => {
	return (
		<>
			<div className="startup">
				<img src="/img/Logo.png" alt="Logo" width="64" height="64" />
				<h1>
					Lost in translation <br />
					<span>Get started</span>
				</h1>
			</div>
			<StartupForm />
		</>
	);
};
export default Startup;
