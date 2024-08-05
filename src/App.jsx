import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Props from './components/tabs/Props/Props';
import Points from './components/tabs/Points/Points';

function App() {
  return (
    <Tabs>
      <TabList>
        <Tab>Points</Tab>
        <Tab>Props</Tab>
      </TabList>

      <TabPanel>
        <Points />
      </TabPanel>
      <TabPanel>
        <Props />
      </TabPanel>
    </Tabs>
  );
}

export default App;
