"use client";

import CardWrapper from "../components/card-wrapper";
import FormRegister from "../components/form-register";
import HeroImage from "../components/hero-image";
import LeftSide from "../components/left-side";
import RightSide from "../components/right-side";

const RegisterPage = () => {
	return (
		<div className="flex items-center justify-center h-full w-full">
			<LeftSide>
				<CardWrapper
					backButtonHref="/login"
					backButtonLabel="Already have an account?"
					header="Register to AuraCRM"
					label="register"
				>
					<FormRegister />
				</CardWrapper>
			</LeftSide>
			<RightSide>
				<HeroImage src="/register-hero-image.png" />
			</RightSide>
		</div>
	);
};

export default RegisterPage;
