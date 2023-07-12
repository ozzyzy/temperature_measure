import { FC } from 'react';
import styled from 'styled-components';

interface IArrowComponentProps {
	angle: number;
	shade: number;
}

const Arrow: FC<IArrowComponentProps> = ({angle, shade}) => {
	return (
		<ArrowComponent angle={angle} shade={shade}/>
	);
};

export default Arrow;

const ArrowComponent = styled.div<IArrowComponentProps>`
	position: absolute;
	top: 50%;
	left: 50%;
	width: 4px;
	height: calc(50% - 10px);
	background-color: red;
	filter: ${(props: IArrowComponentProps) => `opacity(${props.shade})`};
	transform-origin: bottom;
	transform: ${(props: IArrowComponentProps) => `translate(-50%, -100%) rotate(${props.angle}deg)`};
`
