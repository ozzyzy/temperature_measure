import { FC } from 'react';
import Circle from './components/Circle';
import styled from 'styled-components';

const MIN_TEMPERATURE = 10;
const MAX_TEMPERATURE = 60;
const CURRENT_TEMPERATURE = 45;

const App: FC = () => {
    return (
        <WrapperComponent>
            <Circle minTemperature={MIN_TEMPERATURE} maxTemperature={MAX_TEMPERATURE} currentTemperature={CURRENT_TEMPERATURE}/>
        </WrapperComponent>
    );
};

export default App;

const WrapperComponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 100vh;
`
