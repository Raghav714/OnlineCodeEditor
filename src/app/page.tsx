import { createTheme, MantineProvider } from '@mantine/core';
import './styles/global.css';
import Main from './main';
import '@mantine/core/styles.css';

const Root: React.FC = () => {
  return (
    <MantineProvider>
      <Main />
    </MantineProvider>
  )
}

export default Root;
