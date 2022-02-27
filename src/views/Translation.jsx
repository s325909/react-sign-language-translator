import TranslationForm from "../components/Translation/TranslationForm";
import withAuth from "../hoc/withAuth";

const Translation = () => {
	return (
		<>
			<h1>Translation Page</h1>
			<TranslationForm />
		</>
	);
};
export default withAuth(Translation);
