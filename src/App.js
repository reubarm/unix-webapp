import ReactGA from 'react-ga';
// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import RtlLayout from './components/RtlLayout';
import ScrollToTop from './components/ScrollToTop';
import { ProgressBarStyle } from './components/LoadingScreen';
import ThemePrimaryColor from './components/ThemePrimaryColor';

ReactGA.initialize('UA-212740748-1');
ReactGA.pageview(window.location.pathname + window.location.search);

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeConfig>
      <ThemePrimaryColor>
        <GlobalStyles />
        <ProgressBarStyle />
        <ScrollToTop />
        <Router />
      </ThemePrimaryColor>
    </ThemeConfig>
  );
}
