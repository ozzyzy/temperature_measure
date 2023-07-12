import { FC } from 'react';
import styled from 'styled-components';
import Arrow from './Arrow';

interface ICircleProps {
	minTemperature: number;
	maxTemperature: number;
	currentTemperature: number;
}

const Circle: FC<ICircleProps> = ({minTemperature, maxTemperature, currentTemperature}) => {
	function calculateAngle(): number {
		const min = 180 + 45;
		const range = maxTemperature - minTemperature;
		return min + (((360 - 90) / range) * (currentTemperature - minTemperature));
	}

	function calculateColor(): number {
		return currentTemperature / maxTemperature + 0.1;
	}
	return (
		<CircleWrapperComponent>
			<CircleComponent>
				<LeftLineComponent/>
				<RightLineComponent/>
				<Arrow angle={calculateAngle()} shade={calculateColor()}/>
			</CircleComponent>
			<TextComponent>{currentTemperature}&#176;C</TextComponent>
		</CircleWrapperComponent>
	);
};

export default Circle;

const CircleWrapperComponent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const CircleComponent = styled.button`
	position: relative;
	width: 400px;
	height: 400px;
	border-radius: 50%;
	background-color: white;
	border: 3px solid midnightblue;
`

const LineComponent = styled.div`
	position: absolute;
	top: 86%;
	width: 2px;
	height: 20%;
	transform-origin: top center;
	background-color: black;
`

const RightLineComponent = styled(LineComponent)`
	left: 85%;
	transform: rotate(-45deg);
`

const LeftLineComponent = styled(LineComponent)`
	right: 85%;
	transform: rotate(45deg);
`

const TextComponent = styled.span`
	font-size: 22px;
	line-height: 22px;
	font-weight: bold;
	color: black;
	margin-top: 40px;
`
