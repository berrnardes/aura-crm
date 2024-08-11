import CardWrapper from "../components/card-wrapper";
import FormLogin from "../components/form-login";
import HeroImage from "../components/hero-image";
import LeftSide from "../components/left-side";
import RightSide from "../components/right-side";

const LoginPage = () => {
	return (
		<div className="flex items-center justify-center h-full w-full">
			<LeftSide>
				<CardWrapper
					backButtonHref="/register"
					backButtonLabel="Don't have an account?"
					header="Sign in to AuraCRM"
					label="login"
				>
					<FormLogin />
				</CardWrapper>
			</LeftSide>
			<RightSide>
				<HeroImage src="/login-hero-image.png" />
			</RightSide>
		</div>
	);
};

export default LoginPage;
