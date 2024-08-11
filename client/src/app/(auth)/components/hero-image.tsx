import Image from "next/image";

const HeroImage = ({ src }: { src: string }) => {
	return (
		<div className="h-full w-full relative flex flex-col">
			<Image
				src={src}
				alt="Hero Image"
				fill={true}
				className="w-full h-full absolute object-cover"
				priority
			/>
		</div>
	);
};

export default HeroImage;
