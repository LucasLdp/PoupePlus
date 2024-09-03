import animationData from "@assets/lotties/loading.json";
import Lottie from "react-lottie";

export function LoadingScreen() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<div className="w-screen h-screen bg-[rgba(161,249,158,0.28)] absolute flex justify-center items-center">
			<Lottie
				options={defaultOptions}
				height={200}
				width={200}
				isClickToPauseDisabled
			/>
		</div>
	);
}
